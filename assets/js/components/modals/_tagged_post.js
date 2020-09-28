import * as helpers from "../../helpers";
import "regenerator-runtime/runtime";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function TaggedPost(options) {
   const self = this;

   self.renderModal = async () => {
      self.container = document.getElementById(options.id);
      self.container.innerHTML = this.html();

      self.container.style = null;
      self.container.style.display = "block";
      self.container.style.opacity = 1;

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
         this.item_overlay.style.zIndex = "999";
      }

      options.rendersort();
      self.data = await options.renderpaginated();
   };

   self.addEv = async () => {
      let btn_close = self.container.querySelector(".btn__modal-close");
      btn_close.addEventListener("click", self.hideModal);
   };

   self.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         self.container.innerHTML = "";
      }
   };

   self.html = () => {
      let html = `
   <div class='overlay'></div>
   <div class='modal__window ${options.style_class}'>
      <div class='overlay__modal-item' id="${options.modal_overlay}"></div>
      
      <div class="modal__header">
         <h5 class="text__modal-header"></h5>
         <i class="fas fa-times btn__modal-close"></i>
      </div>

      <div class="modal__body">

         <div class="content__control">
            <div class="content__sort" id="sort__tag"></div>
         </div>

         <div class="content__posts" id="content__tag"></div>
      </div>

      <div class="modal__footer">     
         <div class="content__paginator" id="tag__paginator"></div>
      </div>
   `;
      return html;
   };

   self.setHeader = () => {
      self.header = self.container.querySelector(".text__modal-header");
      self.header.innerHTML = `Posts <span class="highlight__tag">#${self.data.pagination_data.tag.name}</span>`;
   };

   self.init = async () => {
      await self.renderModal();
      self.addEv();
      self.setHeader();
   };

   self.init();
   return self;
}
