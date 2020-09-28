import * as helpers from "../../helpers";
const Routing = require("../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../../js_routes.json");
Routing.setRoutingData(Routes);

export function CommentsList(options) {
   const self = this;

   this.renderModalBody = () => {
      var html = `
      <div class='overlay'></div>
         <div class='modal__window ${this.style_class}'>
            <div class="overlay__modal-item" id="${options.modal_overlay}"></div>
            <div class="modal__header">
               <h5 class="text__modal-header text__comment-count">Comments (${this.response.comment_data.length})</h5>
               <i class="fas fa-times btn__modal-close"></i>
            </div>
            <div class="modal__body">
               <div class="comments__author-input"></div>
               <div class="comments__comments"></div>
            </div>
         </div>
     `;

      this.container = document.getElementById(options.id);
      this.container.innerHTML = html;

      this.box = this.container.querySelector(".modal__window");
      this.list = this.container.querySelector(".modal__body");
      this.input = this.container.querySelector(".comments__author-input");
      this.comments = this.container.querySelector(".comments__comments");

      this.container.style = null;
      this.container.style.display = "block";
      this.container.style.opacity = 1;

      this.user = options.getUser();

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

   this.prepareFetchGetComments = () => {
      this.post_id = helpers.getFirstElementByClassName(options.target, "box__post").getAttribute("post");
      this.fetch_body = new FormData();
      this.fetch_body.append("post_id", this.post_id);
      this.url = Routing.generate("get_comments");
   };

   this.prepareFetchPostComment = (target) => {
      this.comment_text = target.value;
      this.post_id = helpers.getFirstElementByClassName(options.target, "box__post").getAttribute("post");
      this.fetch_body = new FormData();
      this.fetch_body.append("comment_text", this.comment_text);
      this.fetch_body.append("post_id", this.post_id);

      if (this.file) this.fetch_body.append("image", this.file);
      this.url = Routing.generate("post_comment");
   };

   this.fetchData = () => {
      const promise = fetch(this.url, {
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

   this.renderModalItem = (comment, method) => {
      this.comment = document.createElement("div");
      this.comment.classList.add("box__comment");
      this.comment.setAttribute("comment", comment.id);
      this.html = `
      <div class="overlay__comment"></div>
      <div class="comment__profile-img">
         <img src="${comment.comment_author.avatar}" alt="" width="40" class="img__comment-profile">
      </div>

      <div class="comment__body">
         <a class="comment__author" href="${Routing.generate("profile_page", {
            profile: comment.comment_author.id,
         })}">${comment.comment_author.firstname}</a>
         <div class="comment__text">${comment.body}</div>
         <div class="comment__img_attached"> 
            <img ${comment.img_attached ? "src=" + comment.img_attached : "none"} class="img__img-attached" alt="">
         </div>
      </div>

      <div class="comment__footer">

         <div class="footer__row"> 
            <div class="footer__counter">
               <i class="far fa-thumbs-up toggle__likes ${comment.state == "liked" ? "state__active" : ""} ${
         comment.state == "disliked" ? "state__disabled" : ""
      }" state="${comment.state ? comment.state : "neutral"}"></i>
               <span class="trigger__modal counter__likes">(${comment.likes})</span>
            </div>

            <div class="footer__counter">
               <i class="far fa-thumbs-down toggle__likes ${comment.state == "disliked" ? "state__active" : ""} ${
         comment.state == "liked" ? "state__disabled" : ""
      }" state="${comment.state ? comment.state : "neutral"}"></i>
               <span class="trigger__modal counter__dislikes">(${comment.dislikes})</span>
            </div>
         </div>

         <div class="footer__row"> 
            <div class="comment__createdAt">${helpers.timeAgo(comment.createdAt)}</div>
         </div>

      </div>

      <div class="comment__menu">
         <div class="dropdown__box" id="${options.dropdown_container}-${comment.id}"></div>
         <i class="fas fa-ellipsis-h dropdown__trigger" id="${options.dropdown_trigger}-${comment.id}"></i>
      </div>
      `;
      this.comment.innerHTML = this.html;
      if (!comment.img_attached) this.comment.querySelector(".comment__img_attached").style.display = "none";

      this.comments.appendChild(this.comment);

      if (method == "append") {
         this.comments.appendChild(this.comment);
      } else {
         this.comments.prepend(this.comment);
      }

      this.addLikesEv();
      if (options.dropdown) options.dropdown(comment);
      this.addResponseListEv();

      if (comment.commented_post.author.id != this.user.id && comment.comment_author.id != this.user.id) {
         this.comment.querySelector(".comment__menu").remove();
      }
   };

   this.renderInput = () => {
      let default_img = "/img/defaults/profile.png";
      let avatar = this.response.profile_data ? this.response.profile_data.avatar : default_img;
      let lock = this.user.logged ? "" : "disabled";
      let placeholder = this.user.logged ? "Write a comment..." : "To write a comment please sign in";

      this.html = `
      <div class="box__row">
         <div class="comment__profile-img">     
            <img src="${avatar}" alt="" width="40" class="img__comment-profile">
         </div>
      </div>
    
      <div class="box__row">
         <div class="box__input">     
            <textarea name="" placeholder="${placeholder}" class="input__comment" ${lock}></textarea>
            <input type="file" id="input__comment-image" class="input__comment-image">
            <label for="input__comment-image" class="label__file">
               <i class="far fa-images"></i>
            </label>   
         </div>
      </div>
   
      <div class="box__row">
         <div class="comment__image-preview">
            <img src="" alt="Image Preview" class="image-preview__image">
            <div class="comment__image-clear">
               <i class="fas fa-times"></i>
            </div>
         </div>
      </div>

      <div class="box__row">
         <div class="text__enter">
            <span>Press Enter to post.</span>
         </div>
      </div>
      `;
      this.input.innerHTML = this.html;
   };

   this.addInputEv = () => {
      this.input = this.container.querySelector(".input__comment");
      this.input.addEventListener("keydown", async (e) => {
         if (e.keyCode === 13 && e.target.value.trim() != "") {
            e.preventDefault();

            /**
             * CREATE AND RENDER SINGLE COMMENT
             */
            this.prepareFetchPostComment(e.target);
            this.data = await this.fetchData();
            this.renderModalItem(this.data, "prepend");

            let counters = document.querySelectorAll(".text__comment-count");
            counters.forEach((counter) => {
               counter.innerHTML = `Comments (${this.data.count})`;
            });

            // this.container.querySelector(".text__comment-count").innerHTML = `Comments (${this.data.count})`;

            this.posts = document.querySelectorAll(`[post="${this.post_id}"]`);

            if (this.posts) {
               this.posts.forEach((post) => {
                  if (post.querySelector(".trigger__comments-modal")) {
                     post.querySelector(".trigger__comments-modal").innerHTML = `(${this.data.count})`;
                  }
               });
            }

            e.target.value = "";

            /**
             * CLEAR IMAGE
             */

            self.file = null;
            this.inpFile.value = null;
            this.previewImage.style.display = null;
            this.previewContainer.style.display = null;
         }
      });
   };

   this.addLikesEv = () => {
      this.togglers = this.comment.querySelectorAll(".toggle__likes");
      this.togglers.forEach((toggler) => {
         toggler.addEventListener("click", (e) => {
            if (options.onclickLikes) options.onclickLikes(e.target);
         });
      });
   };

   this.addResponseListEv = () => {
      this.triggers = this.comment.querySelectorAll(".trigger__modal");
      this.triggers.forEach((trigger) => {
         trigger.addEventListener("click", (e) => {
            if (options.onclickCount) options.onclickCount(e.target);
         });
      });
   };

   this.previewImage = () => {
      this.inpFile = this.container.querySelector(".input__comment-image");
      this.previewImage = this.container.querySelector(".image-preview__image");
      this.btnClear = this.container.querySelector(".comment__image-clear");
      this.previewContainer = this.container.querySelector(".comment__image-preview");

      self.inpFile.addEventListener("change", function () {
         self.file = this.files[0];
         if (self.file) {
            self.reader = new FileReader();

            self.previewImage.style.display = "block";
            self.previewContainer.style.display = "block";
            self.reader.addEventListener("load", function () {
               self.previewImage.setAttribute("src", this.result);
            });

            self.reader.readAsDataURL(self.file);
         } else {
            self.previewImage.style.display = null;
         }
      });

      self.btnClear.addEventListener("click", () => {
         self.file = null;
         self.inpFile.value = null;
         self.previewImage.style.display = null;
         self.previewContainer.style.display = null;
      });
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
      this.prepareFetchGetComments();
      this.response = await this.fetchData();

      this.style_class = options.style_class;
      this.cb = options.cb;

      this.renderModalBody();
      this.renderInput();

      this.response.comment_data.forEach((comment) => {
         this.renderModalItem(comment, "append");
      });

      this.addInputEv();
      this.previewImage();

      this.addEv();
   };

   this.init();
   return this;
}
