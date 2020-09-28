import * as helpers from "../../helpers";
import "regenerator-runtime/runtime";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function EditFolder(options) {
   this.renderModal = async () => {
      this.container = document.getElementById(options.id);
      this.container.innerHTML = this.body();

      this.token = await this.getCSRF();
      this.input = this.container.querySelector("#input__folder-name");
      this.input.value = this.token.name;
      this.csrf = this.container.querySelector(".input__csrf");
      this.csrf.value = this.token.csrf;

      this.container.style = null;
      this.container.style.opacity = 1;
      this.container.style.display = "block";

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

   this.addEv = () => {
      this.btn_submit = this.container.querySelector(".btn__modal-submit");
      this.btn_submit.addEventListener("click", async () => {
         this.response = await this.renameFolder();

         if (this.response.success) {
            if (options.cb) options.cb();
            this.hideModal();
         } else {
            this.displayError();
         }
      });

      this.btn_cancel = this.container.querySelector(".btn__modal-cancel");
      this.btn_cancel.addEventListener("click", this.hideModal);

      this.btn_close = this.container.querySelector(".btn__modal-close");
      this.btn_close.addEventListener("click", this.hideModal);
   };

   this.renameFolder = async () => {
      this.form = this.container.querySelector(".form__create-folder");
      this.data = new FormData(this.form);
      this.data.append("folder_rename[id]", this.folder_id);
      this.url = Routing.generate("rename_folder");

      return fetch(this.url, {
         method: "POST",
         body: this.data,
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

   this.getCSRF = async () => {
      this.data = new FormData();
      this.folder_id = helpers.getFirstElementByClassName(options.target, "box__folder").getAttribute("folder");
      this.data.append("id", this.folder_id);
      this.data.append("token_name", "folder_rename");
      this.url = Routing.generate("form_folder");
      return fetch(this.url, {
         method: "POST",
         body: this.data,
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

   this.displayError = () => {
      this.error = this.container.querySelector(".text__error-message");
      this.error.innerHTML = "";
      this.response.errors.forEach((error) => {
         this.error.innerHTML += error.message;
      });

      this.error.style.display = "block";
   };

   this.body = () => {
      let html = `
      <div class='overlay'></div>
         <div class='modal__window ${options.style_class}'>
            <div class="modal__header">
               <h5 class="text__modal-header">Rename Folder</h5>
               <i class="fas fa-times btn__modal-close"></i>
            </div>
            <div class="modal__body">

            <form action="" name="folder_rename" method="POST" class="form__create-folder">
               <input type="text" id="input__folder-name" placeholder="Folder Name" name="folder_rename[name]" autocomplete="off">
               <div class="text__error-message"></div>
               <input type="hidden" name="folder_rename[_token]" value="" class="input__csrf">
            </form>

            </div>
               <div class="modal__footer">     
               <button class="btn__modal-submit">Rename</button>
               <button class="btn__modal-cancel">Cancel</button>
            </div>
      </div>`;
      return html;
   };

   this.init = function () {
      this.renderModal();
      this.addEv();
   };

   this.init();
   return this;
}
