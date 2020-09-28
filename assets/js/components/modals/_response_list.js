import * as helpers from "../../helpers";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function responseList(options) {
   this.renderModal = () => {
      let title = this.data_target === "likes" ? "Like" : "Dislike";
      var html = `
      <div class='overlay'></div>
         <div class='modal__window ${this.style_class}'>
            <div class="modal__header">
               <h5 class="text__modal-header">${title} (${this.data.length})</h5>
               <i class="fas fa-times btn__modal-close"></i>
            </div>
            <div class="modal__body">
            </div>
      </div>`;

      this.container = document.getElementById(options.id);
      this.container.innerHTML = html;
      var elem = this.container;
      this.list = elem.querySelector(".modal__body");
      this.box = elem.querySelector(".modal__window");

      html = ``;

      this.data.forEach((profile) => {
         html += `
         <div class="modal__item"> 
            <img src="${profile.avatar}" class="item__img"/>
            <a href="${Routing.generate("profile_page", { profile: profile.id })}" class="item__name">
               <span>${profile.firstname}</span>
               <span>${profile.lastname}</span>
            </a>
         </div>
         `;
      });
      this.list.innerHTML = html;
      this.container.style = null;
      this.container.style.display = "block";
      this.container.style.opacity = 1;

      /**
       * MAIN OVERLAY
       */
      if (options.secondary_overlay == undefined) {
         this.overlay = this.container.querySelector(".overlay");
         this.overlay.style.display = "block";
      }

      /**
       * MODAL OVERLAY
       */
      if (options.secondary_overlay !== undefined) {
         this.secondary_overlay = document.querySelector(options.secondary_overlay);
         this.secondary_overlay.style.display = "block";
         this.secondary_overlay.style.background = options.secondary_overlay_bg;
      }

      /**
       * ITEM OVERLAY
       */
      if (options.item_overlay !== undefined) {
         this.item_overlay = helpers.getFirstElementByClassName(options.target, options.item_overlay);
         this.item_overlay.style.display = "block";
         this.item_overlay.style.background = options.item_overlay_bg;
         // this.item_overlay.style.zIndex = "999";
      }
   };

   this.prepareFetch = () => {
      this.id = helpers
         .getFirstElementByClassName(options.target, options.attr.classname)
         .getAttribute(options.attr.attr);
      this.fetch_body = new FormData();
      this.fetch_body.append("id", this.id);
   };

   this.fetchData = () => {
      const promise = fetch(Routing.generate(options.url), {
         method: "POST",
         body: this.fetch_body,
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
      return promise;
   };

   this.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         this.container.innerHTML = "";
      }
      if (this.secondary_overlay) this.secondary_overlay.style.display = null;
      if (this.item_overlay) this.item_overlay.style.display = null;
   };

   this.addEv = () => {
      let btn_close = this.container.querySelector(".btn__modal-close");
      btn_close.addEventListener("click", this.hideModal);
   };

   this.init = async () => {
      this.prepareFetch();
      this.response = await this.fetchData(options.target);
      this.data_target = options.target.classList.contains("counter__likes") ? "likes" : "dislikes";

      this.data = this.data_target === "likes" ? this.response.likes_from : this.response.dislikes_from;
      this.style_class = options.style_class;
      this.cb = options.cb;

      this.renderModal();
      this.addEv();
   };

   this.init();
   return this;
}
