import * as helpers from "../../helpers";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function DeletePost(options) {
   const self = this;

   self.renderModal = () => {
      self.container = document.getElementById(options.id);
      self.container.innerHTML = self.html();
      self.container.style = null;
      self.container.style.display = "block";
      self.container.style.opacity = 1;

      self.modal_window = self.container.querySelector(".modal__window");

      /**
       * MAIN OVERLAY
       */
      if (options.secondary_overlay == undefined) {
         self.overlay = self.container.querySelector(".overlay");
         self.overlay.style.display = "block";
      }

      /**
       * MODAL OVERLAY
       */
      if (options.secondary_overlay !== undefined) {
         self.secondary_overlay = document.querySelector(options.secondary_overlay);
         self.secondary_overlay.style.display = "block";
         self.secondary_overlay.style.background = options.secondary_overlay_bg;
      }

      /**
       * ITEM OVERLAY
       */
      if (options.item_overlay !== undefined) {
         self.item_overlay = helpers.getFirstElementByClassName(options.target, options.item_overlay);
         self.item_overlay.style.display = "block";
         self.item_overlay.style.background = options.item_overlay_bg;
         // self.item_overlay.style.zIndex = "999";
      }
   };

   self.addEv = () => {
      let btn_submit = self.container.querySelector(".btn__modal-submit");
      btn_submit.addEventListener("click", async (e) => {
         self.prepareFetch();
         self.response = await self.fetchData();

         if (options.onsubmit) options.onsubmit(self.response);
         self.hideModal();
      });

      let btn_cancel = self.container.querySelector(".btn__modal-cancel");
      btn_cancel.addEventListener("click", (e) => {
         self.hideModal();
      });

      let btn_close = self.container.querySelector(".btn__modal-close");
      btn_close.addEventListener("click", self.hideModal);
   };

   self.prepareFetch = () => {
      self.id = helpers.getFirstElementByClassName(options.target, "box__post").getAttribute("post");
      self.url = Routing.generate("delete_post");

      self.fetch_body = new FormData();
      self.fetch_body.append("id", self.id);
   };

   self.fetchData = async () => {
      self.promise = fetch(self.url, {
         method: "POST",
         body: self.fetch_body,
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
      return this.promise;
   };

   self.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         self.container.style.display = "none";
         self.container.innerHTML = "";
      }

      if (self.secondary_overlay) self.secondary_overlay.style.display = null;
      if (self.item_overlay) self.item_overlay.style.display = null;
   };

   self.html = () => {
      let html = `
         <div class='overlay'></div>
               <div class='modal__window ${options.style_class}'>
                  <div class="modal__header">
                     <h5 class="text__modal-header">Delete Post</h5>
                     <i class="fas fa-times btn__modal-close"></i>
                  </div>
                  <div class="modal__body">
                     <p class="body__text">This will remove post and all related data</p>
                  </div>
                  <div class="modal__footer">     
                     <button class="btn__modal-submit">Delete</button>
                     <button class="btn__modal-cancel">Cancel</button>
                  </div>
            </div>`;
      return html;
   };

   self.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         self.container.style.display = "none";
         self.container.innerHTML = "";
      }
      if (self.secondary_overlay) self.secondary_overlay.style.display = null;
      if (self.item_overlay) self.item_overlay.style.display = null;
   };

   self.init = async () => {
      self.renderModal();
      self.addEv();
   };

   self.init();
   return self;
}
