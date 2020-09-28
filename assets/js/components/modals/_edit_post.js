import * as helpers from "../../helpers";
import "regenerator-runtime/runtime";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function EditPost(options) {
   const self = this;

   self.renderModal = async () => {
      self.container = document.getElementById(options.id);
      self.container.innerHTML = self.html();

      self.csrf = self.container.querySelector(".input__csrf");
      self.token = await self.getCSRF();
      self.csrf.value = self.token.token;

      self.container.style = null;
      self.container.style.display = "block";
      self.container.style.opacity = 1;

      self.error_fields = self.container.querySelectorAll(".error-field__error-msg");

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

      if (options.renderdropdown) options.renderdropdown();
      if (options.renderautocomplete) options.renderautocomplete();
   };

   self.addEv = async () => {
      let btn_submit = self.container.querySelector(".btn__modal-submit");
      btn_submit.addEventListener("click", async (e) => {
         e.preventDefault();

         self.prepareFetch();
         self.response = await self.editPost();
         self.updateDOM();

         if (self.response.success) {
            self.hideModal();
            options.onsubmit(self.response);
         } else {
            self.hideErrors();
            self.displayErrors();
         }
      });

      let btn_cancel = self.container.querySelector(".btn__modal-cancel");
      btn_cancel.addEventListener("click", (e) => {
         self.hideModal();
      });

      let btn_close = self.container.querySelector(".btn__modal-close");
      btn_close.addEventListener("click", self.hideModal);

      let tag_input = self.container.querySelector("#input__tag");
      tag_input.addEventListener("keyup", (e) => {
         if (e.key == "Enter") {
            /**
             * DEPENDANCY TAGS CREATE
             */

            self.container.querySelector("#error-field__tags").innerHTML = "";

            if (e.target.value.trim().length > 0) {
               options.ontagcreate(e.target.value);
            }

            e.target.value = "";
            document.querySelector("#tags__match").innerHTML = "";
         }
      });
   };

   self.previewFrontCover = () => {
      self.inputFront = self.container.querySelector(".input__front-cover");
      self.previewFront = self.container.querySelector(".front-cover-preview__image");
      self.previewFrontText = self.container.querySelector(".front-cover-preview__text");
      self.btnFrontClear = self.container.querySelector(".front-cover__btn-clear");

      self.inputFront.addEventListener("change", function () {
         self.file = this.files[0];
         if (self.file) {
            self.reader = new FileReader();
            self.previewFrontText.style.display = "none";
            self.previewFront.style.display = "block";
            self.reader.addEventListener("load", function () {
               self.previewFront.setAttribute("src", this.result);
            });

            self.reader.readAsDataURL(self.file);
         } else {
            self.previewFrontText.style.display = null;
            self.previewFront.style.display = null;
         }
      });

      self.btnFrontClear.addEventListener("click", () => {
         self.inputFront.value = null;
         self.previewFrontText.style.display = null;
         self.previewFront.style.display = null;
      });
   };

   self.previewHeaderCover = () => {
      self.inputHeader = self.container.querySelector(".input__header-cover");
      self.previewHeader = self.container.querySelector(".header-cover-preview__image");
      self.previewHeaderText = self.container.querySelector(".header-cover-preview__text");
      self.btnHeaderClear = self.container.querySelector(".header-cover__btn-clear");

      self.inputHeader.addEventListener("change", function () {
         self.file = this.files[0];
         if (self.file) {
            self.reader = new FileReader();
            self.previewHeaderText.style.display = "none";
            self.previewHeader.style.display = "block";
            self.reader.addEventListener("load", function () {
               self.previewHeader.setAttribute("src", this.result);
            });

            self.reader.readAsDataURL(self.file);
         } else {
            self.previewHeaderText.style.display = null;
            self.previewHeader.style.display = null;
         }
      });

      self.btnHeaderClear.addEventListener("click", () => {
         self.inputHeader.value = null;
         self.previewHeaderText.style.display = null;
         self.previewHeader.style.display = null;
      });
   };

   self.getCSRF = async () => {
      this.data = new FormData();
      this.data.append("token_name", "post");
      this.url = Routing.generate("get_token");
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

   self.getPost = async () => {
      self.post_id = helpers.getFirstElementByClassName(options.target, "box__post").getAttribute("post");
      self.data = new FormData();
      self.data.append("post_id", self.post_id);
      self.url = Routing.generate("get_post");
      return fetch(self.url, {
         method: "POST",
         body: self.data,
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

   self.addValues = async () => {
      self.container.querySelector(".input__title").value = self.post_data.title;
      self.container.querySelector("#input__text").value = self.post_data.body;

      self.previewFrontText.style.display = "none";
      self.previewFront.style.display = "block";
      self.previewFront.setAttribute("src", self.post_data.front_cover_link);

      self.previewHeaderText.style.display = "none";
      self.previewHeader.style.display = "block";
      self.previewHeader.setAttribute("src", self.post_data.header_cover_link);

      /**
       * DEPENDANCY ADD EXISTING TAGS
       */
      options.rendertags(self.post_data.tags);

      self.folder = self.container.querySelector(".dropdown__value");
      self.folder.innerHTML = self.post_data.folder.name;
      self.folder.setAttribute("folder", self.post_data.folder.folder_id);
   };

   self.prepareFetch = () => {
      let form = document.querySelector(".form__post-type");
      self.fetch_body = new FormData(form);

      let folder = self.container.querySelector(".dropdown__value").getAttribute("folder");
      self.fetch_body.append("post[folder]", folder);

      let tags_selected = self.container.querySelector(".tags__selected");
      let tags = tags_selected.querySelectorAll(".tag");
      let tag_names = [];
      tags.forEach((tag) => {
         let tag_name = tag.querySelector(".tag__name").innerHTML;
         tag_names.push(tag_name);
      });
      self.fetch_body.append("post[tags]", tag_names);
      self.fetch_body.append(
         "post[id]",
         helpers.getFirstElementByClassName(options.target, "box__post").getAttribute("post")
      );

      return self.fetch_body;
   };

   self.editPost = async () => {
      self.url = Routing.generate("edit_post");
      return fetch(self.url, {
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
   };

   self.updateDOM = () => {
      if (self.response.success) {
         self.post = document.querySelectorAll(`[post = "${self.response.post_data.id}"]`);

         self.post.forEach((post) => {
            post.querySelector(".header__img").setAttribute("src", self.response.post_data.front_cover_link);

            post.querySelector(".body__title").innerHTML = self.response.post_data.title;

            self.tags_container = post.querySelector(".body__tags");
            self.tags_container.innerHTML = "";

            self.tags = self.response.post_data.tags;

            self.tags.forEach((tag) => {
               let tag_element = document.createElement("a");
               tag_element.setAttribute("tag", tag.id);
               tag_element.classList.add("tags__tag");
               tag_element.innerHTML = `#${tag.name}`;
               self.tags_container.appendChild(tag_element);
            });
         });
      }
   };

   self.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         self.container.innerHTML = "";
      }
      if (self.secondary_overlay) self.secondary_overlay.style.display = null;
      if (self.item_overlay) self.item_overlay.style.display = null;
   };

   self.hideErrors = () => {
      self.error_fields.forEach((error) => {
         error.innerHTML = "";
         error.style.display = "block";
      });
   };

   self.displayErrors = () => {
      let errors = [];

      self.response.errors.forEach((error) => {
         let str_1 = error.cause.propertyPath.replace("data", "").replace(".", "");
         let cause = str_1.replace(/(^.*\[|\].*$)/g, "");
         let e = { cause: cause, message: error.message };

         errors.push(e);
      });
      errors.forEach((error) => {
         if (self.container.querySelector(`#error-field__${error.cause}`)) {
            self.container.querySelector(`#error-field__${error.cause}`).innerHTML = `
            <div class="error-text__error-msg">
             ${error.message}
            </div>`;
         }
      });
   };

   self.html = () => {
      let html = `
   <div class='overlay'></div>
   <div class='modal__window ${options.style_class}'>
      <div class='overlay__modal-item' id="${options.modal_overlay}"></div>
      <div class="modal__header">
         <h5 class="text__modal-header">Edit Post</h5>
         <i class="fas fa-times btn__modal-close"></i>
      </div>

      <div class="modal__body">
      <form class="form__post-type" name="post">

      <div class="form__row">
         <div class="input-group__front-cover">
            <div class="front-cover__label">Front Cover</div>
            <label for="input__front-cover" class="front-cover__btn-upload">
            <i class="fas fa-image"></i>
            </label>
            <div class="front-cover__btn-clear">
            <i class="fas fa-times"></i>
         </div>
         <div class="front-cover__cover-preview">
            <img src="" alt="Cover Preview" class="front-cover-preview__image">
            <span class="front-cover-preview__text">Preview Image</span>
            </div>
            <input type="file" class="input-group__input input__front-cover" id="input__front-cover" name="post[front_cover]">
            <div class="error-field__error-msg" id="error-field__front_cover"></div>
         </div>
      </div>

      <div class="form__row">
         <div class="input-group__header-cover">
            <div class="header-cover__label">Header Cover</div>
            <label for="input__header-cover" class="header-cover__btn-upload">
            <i class="fas fa-image"></i>
            </label>
            <div class="header-cover__btn-clear">
            <i class="fas fa-times"></i>
         </div>
         <div class="header-cover__cover-preview">
            <img src="" alt="Cover Preview" class="header-cover-preview__image">
            <span class="header-cover-preview__text">Preview Image</span>
            </div>
            <input type="file" class="input-group__input input__header-cover" id="input__header-cover" name="post[header_cover]">
            <div class="error-field__error-msg" id="error-field__header_cover"></div>
         </div>
      </div>

      <div class="form__row"> 
         <div class="input-group__tags">
            <div class="tags__create">
            <input id="input__tag" autocomplete="off"> 
            </div>
            <div class="tags__selected" name="post[tags]">
               <div class="error-field__error-msg" id="error-field__tags"></div>
            </div>  
         </div>
      </div>

      <div class="form__row"> 
         <div class="input-group">
            <label for="folder">Folder</label>
            <div class="input__folder" id="input__folder" name="post[folder]"></div>
            <div class="error-field__error-msg" id="error-field__folder"></div>
         </div>
      </div>

      <div class="form__row"> 
         <div class="input-group">
            <label for="title">Title</label>
            <input type="text" class="input-group__input input__title" name="post[title]">
            <div class="error-field__error-msg" id="error-field__title"></div>
         </div>
      </div>

      <div class="form__row"> 
         <div class="input-group">
            <label for="body">Text</label>
            <textarea name="post[body]" cols="30" rows="10" class="input-group__input input__text" id="input__text"></textarea>
            <div class="error-field__error-msg" id="error-field__body"></div>
         </div>
      </div>

      <input type="hidden" name="post[_token]" value="" class="input__csrf">
   </form>

   </div>
   <div class="modal__footer">     
      <button class="btn__modal-submit">Edit Post</button>
      <button class="btn__modal-cancel">Cancel</button>
   </div>
   </div>`;
      return html;
   };

   self.init = async () => {
      await self.renderModal();
      self.addEv();
      self.previewFrontCover();
      self.previewHeaderCover();
      self.post_data = await self.getPost();
      self.addValues();
   };

   self.init();
   return self;
}
