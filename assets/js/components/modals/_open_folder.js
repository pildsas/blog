import * as helpers from "../../helpers";

export function OpenFolder(options) {
   const self = this;

   self.renderModal = () => {
      self.cb = options.cb;
      self.data = options.data;
      self.html = html(options.style_class);

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
         // this.item_overlay.style.zIndex = "999";
      }
   };

   self.previewImage = () => {
      self.inpFile = self.container.querySelector(".input__cover");
      self.previewImage = self.container.querySelector(".cover-preview__image");
      self.previewText = self.container.querySelector(".cover-preview__text");
      self.btnClear = self.container.querySelector(".post-cover__btn-clear");

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

   self.addValues = () => {
      self.container.querySelector(".input__title").value = self.data.title;
      self.container.querySelector("#input__text").value = self.data.body;

      self.previewText.style.display = "none";
      self.previewImage.style.display = "block";
      self.previewImage.setAttribute("src", self.data.cover_link);

      /**
       * DEPENDANCY ADD EXISTING TAGS
       */
      options.rendertags();

      self.container.querySelector(".dropdown_value").innerHTML = self.data.folder.name;
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
      btn_submit.addEventListener("click", (e) => {
         if (self.cb) self.cb(e.target);

         e.preventDefault();
         let data = new FormData();
         let cover = self.container.querySelector(".input__cover").files[0];
         let folder = self.container.querySelector(".dropdown_value").innerHTML;
         let title = self.container.querySelector(".input__title").value;
         let text = self.container.querySelector(".input__text").value;

         let tags_selected = self.container.querySelector(".tags__selected");
         let tags = tags_selected.querySelectorAll(".tag");

         let tag_names = [];
         tags.forEach((tag) => {
            let tag_name = tag.querySelector(".tag__name").innerHTML;
            tag_names.push(tag_name);
         });

         let post_id = options.data.id;

         data.append("post_id", post_id);
         data.append("cover", cover);
         data.append("title", title);
         data.append("folder", folder);
         data.append("text", text);
         data.append("tags", tag_names);

         self.hideModal();
      });
      let btn_cancel = self.container.querySelector(".btn__modal-cancel");
      btn_cancel.addEventListener("click", (e) => {
         self.hideModal();
      });

      let btn_close = self.container.querySelector(".btn__modal-close");
      btn_close.addEventListener("click", self.hideModal);
   };

   self.init = function () {
      self.renderModal();
      self.addEv();
      self.previewImage();
      // self.addValues();
   };

   self.init();
   return self;
}

let html = (classname) => {
   let html = `
   <div class='overlay'></div>
      <div class='modal__window ${classname}'>
         <div class="modal__header">
            <h5 class="text__modal-header">Edit Post</h5>
            <i class="fas fa-times btn__modal-close"></i>
         </div>
         <div class="modal__body">
            <div class="form__create-post">

               <div class="input-group__cover">
                  <div class="post-cover__label">Cover Image</div>
                  <label for="input__cover" class="post-cover__btn-upload">
                     <i class="fas fa-image"></i>
                  </label>
                  <div class="post-cover__btn-clear">
                     <i class="fas fa-times"></i>
                  </div>
                     <div class="post-cover__cover-preview">
                        <img src="" alt="Cover Preview" class="cover-preview__image">
                        <span class="cover-preview__text">Preview Image</span>
                     </div>
                  <input type="file" class="input-group__input input__cover" id="input__cover">
               </div>

               <div class="input-group__tags">
                  <div class="tags__create">
                     <input id="input__tag"> 
                  </div>
                  <div class="tags__selected"></div>  
               </div>

               <div class="input-group">
                  <label for="folder">Folder</label>
                  <div class="input__folder" id="input__folder"></div>
               </div>
         
               <div class="input-group">
                  <label for="title">Title</label>
                  <input type="text" class="input-group__input input__title">
               </div>
      
               <div class="input-group">
                  <label for="name">Text</label>
                  <textarea name="" cols="30" rows="10" class="input-group__input input__text" id="input__text"></textarea>
               </div>
         </div>
         <div class="modal__footer">     
            <button class="btn__modal-submit">Edit Post</button>
            <button class="btn__modal-cancel">Cancel</button>
         </div>
   </div>
   </div>`;
   return html;
};
