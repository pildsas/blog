import * as helpers from "../../helpers";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function EditComment(options) {
   const self = this;

   self.renderModal = async () => {
      self.data = await self.getData();

      self.container = document.getElementById(options.id);
      self.container.innerHTML = self.html();
      self.container.style = null;
      self.container.style.display = "block";
      self.container.style.opacity = 1;

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

   self.previewImage = () => {
      self.img_attached = false;

      self.inpFile = self.container.querySelector(".input__comment-img");
      self.previewImage = self.container.querySelector(".preview__img");
      self.previewText = self.container.querySelector(".preview__text");
      self.btnClear = self.container.querySelector(".img-attached__btn-clear");

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
            self.img_attached = true;
         } else {
            self.previewText.style.display = null;
            self.previewImage.style.display = null;
            self.img_attached = false;
         }
      });

      self.btnClear.addEventListener("click", () => {
         self.inpFile.value = null;
         self.previewText.style.display = null;
         self.previewImage.style.display = null;
         self.img_attached = false;
         self.remove_img = true;
      });
   };

   self.addEv = () => {
      let btn_submit = self.container.querySelector(".btn__modal-submit");
      btn_submit.addEventListener("click", async (e) => {
         e.preventDefault();

         self.prepareFetch();
         self.response = await self.fetchData();
         self.updateDOM();

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

   self.getData = async () => {
      self.id = helpers.getFirstElementByClassName(options.target, "box__comment").getAttribute("comment");
      self.fetch_body = new FormData();
      self.fetch_body.append("id", self.id);
      self.url = Routing.generate("get_comment");

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

   self.addValues = () => {
      self.container.querySelector(".input__text").value = self.data.body.trim();

      if (self.data.img_attached) {
         self.previewImage.setAttribute("src", self.data.img_attached);
         self.previewText.style.display = "none";
         self.previewImage.style.display = "block";
      }
   };

   self.prepareFetch = () => {
      self.url = Routing.generate("edit_comment");

      self.text = self.container.querySelector(".input__text").value.trim();
      self.image = self.container.querySelector(".input__comment-img").files[0];
      self.id = helpers.getFirstElementByClassName(options.target, "box__comment").getAttribute("comment");

      self.fetch_body = new FormData();
      self.fetch_body.append("id", self.id);
      self.fetch_body.append("text", self.text);

      if (self.img_attached) {
         self.fetch_body.append("image", self.image);
      } else if (self.remove_img) {
         self.fetch_body.append("image", "remove");
      } else {
         self.fetch_body.append("image", null);
      }
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
      return self.promise;
   };

   self.updateDOM = () => {
      if (self.response.success) {
         self.comment = document.querySelectorAll(`[comment = "${self.response.comment_data.id}"]`);

         self.comment.forEach((comment) => {
            comment.querySelector(".comment__text").innerHTML = self.response.comment_data.body;
            let img_container = comment.querySelector(".comment__img_attached");
            if (self.response.comment_data.img_attached) {
               img_container.style = null;
               let img_attached = comment.querySelector(".img__img-attached");
               img_attached.setAttribute("src", self.response.comment_data.img_attached);
            } else {
               img_container.style.display = "none";
            }
         });
      }
   };

   self.hideModal = () => {
      let overlay = document.querySelector(".overlay");
      if (overlay !== null || typeof overlay == "undefined") {
         self.container.innerHTML = "";
         self.container.style.display = "none";
      }
      if (self.secondary_overlay) self.secondary_overlay.style.display = null;
      if (self.item_overlay) self.item_overlay.style.display = null;
   };

   self.html = () => {
      let html = `
      <div class='overlay'></div>
         <div class='modal__window ${options.style_class}'>
            <div class="modal__header">
               <h5 class="text__modal-header">Edit Comment</h5>
               <i class="fas fa-times btn__modal-close"></i>
            </div>
            <div class="modal__body">
               <div class="form__edit-comment">
   
                  <div class="input-group">
                     <label for="name">Text</label>
                     <textarea name="" cols="30" rows="10" class="input-group__input input__text" id="input__text"></textarea>
                  </div>
   
                  <div class="input-group__img-attached">
                     <div class="img-attached__label">Image Attached</div>
                     <label for="input__comment-img" class="img-attached__btn-upload">
                        <i class="fas fa-image"></i>
                     </label>
                     <div class="img-attached__btn-clear">
                        <i class="fas fa-times"></i>
                     </div>
                     <div class="img-attached__preview">
                        <img src="" alt="Cover Preview" class="preview__img">
                        <span class="preview__text">Preview Image</span>
                     </div>
                     <input type="file" class="input-group__input input__comment-img" id="input__comment-img">
               </div>
   
            </div>
            <div class="modal__footer">     
               <button class="btn__modal-submit">Edit Comment</button>
               <button class="btn__modal-cancel">Cancel</button>
            </div>
      </div>
      </div>`;
      return html;
   };

   self.init = async () => {
      await self.renderModal();
      self.addEv();
      self.previewImage();
      self.addValues();
   };

   self.init();
   return self;
}
