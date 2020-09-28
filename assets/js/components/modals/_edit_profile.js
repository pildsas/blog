import * as helpers from "../../helpers";

import "regenerator-runtime/runtime";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function EditProfile(options) {
   const self = this;
   self.cb = options.cb;

   self.renderModal = async () => {
      self.html = self.html();

      self.container = document.getElementById(options.id);
      self.container.innerHTML = self.html;
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
      }
   };

   self.previewImage = () => {
      self.inpFile = self.container.querySelector(".input__cover");
      self.previewImage = self.container.querySelector(".cover-preview__image");
      self.previewText = self.container.querySelector(".cover-preview__text");
      self.btnClear = self.container.querySelector(".cover__btn-clear");

      self.inpFile.addEventListener("change", function () {
         self.file = this.files[0];
         if (self.file) {
            self.reader = new FileReader();
            self.previewText.style.display = "none";
            self.previewImage.style.display = "block";
            self.reader.addEventListener("load", function () {
               self.previewImage.setAttribute("src", this.result);
            });

            self.reader.readAsDataURL(self.file);
         } else {
            self.previewText.style.display = null;
            self.previewImage.style.display = null;
         }
      });

      self.btnClear.addEventListener("click", () => {
         self.inpFile.value = null;
         self.previewText.style.display = null;
         self.previewImage.style.display = null;
      });
   };

   self.fetchData = () => {
      let url = Routing.generate("get_profile");
      const promise = fetch(url, {
         method: "GET",
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

   self.addValues = () => {
      self.container.querySelector(".input__firstname").value = self.data.firstname;
      self.container.querySelector(".input__lastname").value = self.data.lastname;
      self.container.querySelector(".input__alias").value = self.data.nickname;
      self.container.querySelector(".input__about").value = self.data.about;
      self.container.querySelector(".input__csrf").value = self.token.token;

      if (self.data.avatar) {
         self.previewImage.setAttribute("src", self.data.avatar);
         self.previewText.style.display = "none";
         self.previewImage.style.display = "block";
      }
   };

   self.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         self.container.innerHTML = "";
         self.container.style.display = "none";
      }
   };

   self.addEv = () => {
      let btn_submit = self.container.querySelector(".btn__modal-submit");
      btn_submit.addEventListener("click", async (e) => {
         e.preventDefault();
         self.response = await self.updateProfile();

         if (self.response.success) {
            options.onsubmit(self.response);
            self.hideModal();
         } else {
            self.displayError();
         }
      });

      let btn_cancel = self.container.querySelector(".btn__modal-cancel");
      btn_cancel.addEventListener("click", (e) => {
         self.hideModal();
      });

      let btn_close = self.container.querySelector(".btn__modal-close");
      btn_close.addEventListener("click", self.hideModal);
   };

   self.getCSRF = async () => {
      self.fd = new FormData();
      self.fd.append("token_name", "edit_profile");
      self.url = Routing.generate("get_token");
      return fetch(self.url, {
         method: "POST",
         body: self.fd,
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

   self.updateProfile = async () => {
      this.form = this.container.querySelector(".form__edit-profile");
      this.data = new FormData(this.form);
      this.url = Routing.generate("update_profile");

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

   self.displayError = () => {
      self.error_fields = self.container.querySelectorAll(".error-field__error-msg");

      self.error_fields.forEach((error) => {
         error.innerHTML = "";
      });

      let errors = [];

      self.response.errors.forEach((error) => {
         let str_1 = error.cause.propertyPath.replace("data", "").replace(".", "");
         let cause = str_1.replace(/(^.*\[|\].*$)/g, "");
         let e = { cause: cause, message: error.message };

         errors.push(e);
      });

      errors.forEach((error) => {
         self.container.querySelector(`#error-field__${error.cause}`).innerHTML = `
         <div class="error-text__error-msg">
          ${error.message}
         </div>`;
      });
   };

   self.init = async function () {
      self.renderModal();
      self.token = await self.getCSRF();
      self.data = await self.fetchData();
      self.addEv();
      self.previewImage();
      self.addValues();
   };

   // <span class="btn__modal-close">&times;</span>
   self.html = () => {
      let html = `
      <div class='overlay'></div>
         <div class='modal__window ${options.style_class}'>
            <div class="modal__header">
               <h5 class="text__modal-header">Edit Profile</h5>
               <i class="fas fa-times btn__modal-close"></i>
            </div>
         <div class="modal__body">
         
   <form class="form__edit-profile" name="edit_profile" method="POST">
   
         <div class="input-group__cover">
            <div class="cover__label">Profile Image</div>
            <label for="input__cover" class="cover__btn-upload">
               <i class="fas fa-image"></i>
            </label>
            <div class="cover__btn-clear">
               <i class="fas fa-times"></i>
            </div>
            <div class="cover__cover-preview">
               <img src="" alt="Cover Preview" class="cover-preview__image">
               <span class="cover-preview__text">Profile Image</span>
            </div>
            <input type="file" class="input-group__input input__cover" id="input__cover" name="edit_profile[avatar]">
            <div class="error-field__error-msg" id="error-field__avatar"></div>
         </div>
   
         <div class="input-group">
            <label for="">Firstname</label>
            <input type="text" class="input__firstname" name="edit_profile[firstname]">
            <div class="error-field__error-msg" id="error-field__firstname"></div>
         </div>
   
         <div class="input-group">
            <label for="">Lastname</label>
            <input type="text" class="input__lastname" name="edit_profile[lastname]">
            <div class="error-field__error-msg" id="error-field__lastname"></div>
         </div>
   
         <div class="input-group">
            <label for="">Alias</label>
            <input type="text" class="input__alias" name="edit_profile[nickname]">
            <div class="error-field__error-msg" id="error-field__nickname"></div>
         </div>
   
         <div class="input-group">
         <label for="">About</label>
         <textarea name="edit_profile[about]" cols="30" rows="10" class="input-group__input input__about" id="input__about"></textarea>
         <div class="error-field__error-msg" id="error-field__about"></div>
      </div>
      
      <input type="hidden" name="edit_profile[_token]" value="" class="input__csrf">
   </form>
      </div>
      <div class="modal__footer">     
         <button class="btn__modal-submit">Edit Profile</button>
         <button class="btn__modal-cancel">Cancel</button>
      </div>
      </div>
      </div>`;
      return html;
   };

   self.init();
   return self;
}
