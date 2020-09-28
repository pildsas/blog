const Routing = require("../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../js_routes.json");
Routing.setRoutingData(Routes);

import "regenerator-runtime/runtime";
import * as helpers from "../helpers";

/**
 * pagination_settings
 * @property {string} container_id – pagination render container
 * @property {string} page – default "1"
 * @property {string} sort – default "created"
 * @property {object} route – route.name is string for fetch URL,
 *                            route.data is object with mandatory data required by backend
 * @method {function} callback – return paginated objects data
 */

/**
 * addPagination function renders pagination and returns promise object with response.main_data
 */
export async function CreatePagination(pagination_settings) {
   this.route = pagination_settings.route;
   this.container = document.getElementById(pagination_settings.container_id);
   this.cb = pagination_settings.cb;
   this.profile_id = pagination_settings.profile_id;

   this.init = async (pagination_settings) => {
      this.page = pagination_settings.page;
      this.sort_method = pagination_settings.sort_method;
      this.folder_id = pagination_settings.folder_id;
      this.tag_id = pagination_settings.tag_id;

      if (!this.page) return false;
      else {
         this.response_data = await this.getPageData();
         this.pagination_data = this.response_data.pagination_data;
         this.main_data = this.response_data.main_data;
      }

      if (this.getPageCount() == 0) {
         this.hide();
         if (this.cb) this.addContent(this.cb);

         return { auth_data: this.response_data.auth_data };
      } else {
         this.renderPagination();
         this.displayDots();
         this.addEv();
         this.hide();
         if (this.cb) this.addContent(this.cb);
         return this.response_data;
      }
   };

   this.getPageData = () => {
      let data = new FormData();
      data.append("page", this.page);
      data.append("profile_id", this.profile_id);
      data.append("folder_id", this.folder_id);
      data.append("tag_id", this.tag_id);
      data.append("sort_method", this.sort_method);
      let url = Routing.generate(this.route);

      return fetch(url, {
         method: "POST",
         body: data,
         headers: {
            "X-Requested-With": "XMLHttpRequest",
         },
      })
         .then((res) => {
            return res.json();
         })
         .then((res) => {
            return res;
         });
   };

   this.renderPagination = () => {
      let html = `
      <div class="box_pagination">  
         <div class="pagination_panel">
            <span class="pagination_item pagination_control" id="button_prev">Prev</span>
            <ul class="pagination_pages">
               <li class="pagination_item page_number">1</li>
            </ul>
            <span class="pagination_item pagination_control" id="button_next">Next</span>
         </div>
      </div>
   `;
      this.container.innerHTML = html;

      let pagination_pages = this.container.querySelector(".pagination_pages");
      let page_number = "";
      for (let i = 1; i - 1 < this.getPageCount(); i++) {
         page_number += `<li class="pagination_item page_number">${i}</li>`;
      }
      pagination_pages.innerHTML = page_number;
   };

   this.getPageCount = () => {
      return Math.ceil(this.pagination_data.totalCount / this.pagination_data.numItemsPerPage);
   };

   this.hide = () => {
      if (this.getPageCount() <= 1) {
         if (this.container.querySelector(".box_pagination")) {
            this.container.querySelector(".box_pagination").style.display = "none";
         }
      }
   };

   this.displayDots = () => {
      const prevButton = this.container.querySelector("#button_prev");
      const nextButton = this.container.querySelector("#button_next");
      var page_number = this.container.querySelectorAll(".page_number");

      page_number[this.pagination_data.currentPageNumber - 1].classList.add("pagination_display", "active");
      page_number[0].classList.add("pagination_display");
      helpers.last(page_number).classList.add("pagination_display");

      if (page_number[this.pagination_data.currentPageNumber - 1] != page_number[0]) {
         prevButton.classList.add("pagination_display");
      }
      if (page_number[this.pagination_data.currentPageNumber - 1] != helpers.last(page_number)) {
         nextButton.classList.add("pagination_display");
      }

      for (let i = 0; i < 4; i++) {
         if (page_number[this.pagination_data.currentPageNumber - i]) {
            page_number[this.pagination_data.currentPageNumber - i].classList.add("pagination_display");
         }

         if (page_number[this.pagination_data.currentPageNumber + i - 1]) {
            page_number[this.pagination_data.currentPageNumber + i - 1].classList.add("pagination_display");
         }

         if (i == 3) {
            if (
               page_number[this.pagination_data.currentPageNumber - i - 1] &&
               page_number[this.pagination_data.currentPageNumber - i - 1] != page_number[0]
            ) {
               page_number[this.pagination_data.currentPageNumber - i - 1].classList.add("pagination_dots");
            }

            if (
               page_number[this.pagination_data.currentPageNumber - 1 + i] &&
               page_number[this.pagination_data.currentPageNumber - 1 + i] != helpers.last(page_number)
            ) {
               page_number[this.pagination_data.currentPageNumber - 1 + i].classList.add("pagination_dots");
            }
         }
      }
   };

   this.paginationControl = (event) => {
      let page_number = this.container.querySelectorAll(".page_number");
      var currentPageNumber = pagination_settings.getPage();

      if (event.target.classList.contains("page_number")) {
         currentPageNumber = parseInt(event.target.innerHTML);

         pagination_settings.setPage(currentPageNumber);
      } else if (event.target.id == "button_prev" && currentPageNumber > 1) {
         currentPageNumber--;

         pagination_settings.setPage(currentPageNumber);
      } else if (event.target.id == "button_next" && currentPageNumber < page_number.length) {
         currentPageNumber++;

         pagination_settings.setPage(currentPageNumber);
      }

      const new_pagination = {
         page: pagination_settings.getPage(),
         folder_id: pagination_settings.getFolder(),
         tag_id: pagination_settings.getTag(),
         sort_method: pagination_settings.getSortMethod(),
      };

      this.init(new_pagination);
   };

   this.addContent = function (cb) {
      if (this.cb) cb(this.response_data);
   };

   this.addEv = () => {
      let pagination_item = this.container.querySelectorAll(".pagination_item");
      pagination_item.forEach((item) => {
         item.addEventListener("click", this.paginationControl);
      });
   };

   return this.init(pagination_settings);
}
