import * as helpers from "../../helpers";
import "regenerator-runtime/runtime";

const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function DeleteFolder(options) {
   this.renderModal = () => {
      this.cb = options.cb;
      this.container = document.getElementById(options.id);
      this.container.innerHTML = this.html(options.style_class);
      this.modal_window = this.container.querySelector(".modal__window");
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

   this.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         this.container.style.display = "none";
         this.container.innerHTML = "";
      }
      if (this.secondary_overlay) this.secondary_overlay.style.display = null;
      if (this.item_overlay) this.item_overlay.style.display = null;
   };

   this.fetchData = async () => {
      let url = Routing.generate("get_folder");
      let fetch_body = new FormData();
      fetch_body.append("folder_id", options.folder_id);

      return fetch(url, {
         method: "POST",
         body: fetch_body,
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

   this.addEv = () => {
      let btn_submit = this.container.querySelector(".btn__modal-submit");
      btn_submit.addEventListener("click", (e) => {
         if (this.cb) this.cb(e.target);
         this.hideModal();
      });

      let btn_cancel = this.container.querySelector(".btn__modal-cancel");
      btn_cancel.addEventListener("click", (e) => {
         this.hideModal();
      });

      let btn_close = this.container.querySelector(".btn__modal-close");
      btn_close.addEventListener("click", this.hideModal);
   };

   this.html = (classname) => {
      if (this.data.posts > 0 && this.data.comments > 0) {
         let post_singularity = this.data.posts > 1 ? "posts" : "post";
         let comment_singularity = this.data.comments > 1 ? "comments" : "comment";
         this.warning = `(${this.data.posts} ${post_singularity} and ${this.data.comments} ${comment_singularity})`;
      } else if (this.data.posts > 0) {
         let post_singularity = this.data.posts > 1 ? "posts" : "post";
         this.warning = `(${this.data.posts} ${post_singularity})`;
      } else if (this.data.comments > 0) {
         let comment_singularity = this.data.comments > 1 ? "comments" : "comment";
         this.warning = `(${this.data.comments} ${comment_singularity})`;
      } else {
         this.warning = ``;
      }

      let html = `
      <div class='overlay'></div>
            <div class='modal__window ${classname}'>
               <div class="modal__header">
                  <h5 class="text__modal-header">Delete Folder</h5>
                  <i class="fas fa-times btn__modal-close"></i>
               </div>
               <div class="modal__body">
                  <p class="body__text">This will remove folder and all related data ${this.warning}</p>
               </div>
               <div class="modal__footer">     
                  <button class="btn__modal-submit">Delete</button>
                  <button class="btn__modal-cancel">Cancel</button>
               </div>
         </div>`;
      return html;
   };

   this.init = async () => {
      this.data = await this.fetchData();
      this.renderModal();
      this.addEv();
   };

   this.init();
   return this;
}
