import "regenerator-runtime/runtime";
import * as helpers from "../helpers";

const Routing = require("../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../js_routes.json");
Routing.setRoutingData(Routes);

export function CommentsController(options) {
   const self = this;

   this.init = async () => {
      this.container = document.querySelector(options.container);
      this.addInputEv();
      this.previewImage();

      /**
       * RENDER ALL COMMENTS
       */
      this.prepareFetchGetComments();
      this.data = await this.fetchData();

      this.user = options.getUser();

      this.data.comment_data.forEach((comment) => {
         this.render(comment, "append");
      });
      if (options.commentsData) options.commentsData(this.data.comment_data);
   };

   this.addInputEv = () => {
      this.input = this.container.querySelector(options.input_comment);
      this.input.addEventListener("keydown", async (e) => {
         if (e.keyCode === 13 && e.target.value.trim() != "") {
            e.preventDefault();

            /**
             * CREATE AND RENDER SINGLE COMMENT
             */
            this.prepareFetchPostComment(e.target);
            this.data = await this.fetchData();

            this.render(this.data, "prepend");

            document.querySelector(".text__comment-count").innerHTML = `Comments (${this.data.count})`;
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

   this.prepareFetchGetComments = () => {
      this.post_id = helpers.getFirstElementByClassName(this.container, "box__main-post").getAttribute("post");
      this.fetch_body = new FormData();
      this.fetch_body.append("post_id", this.post_id);
      this.url = Routing.generate("get_comments");
   };

   this.prepareFetchPostComment = (target) => {
      this.comment_text = target.value;
      this.post_id = helpers.getFirstElementByClassName(target, "box__main-post").getAttribute("post");
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

   this.render = (comment, method) => {
      this.comment = document.createElement("div");
      this.comment.classList.add("box__comment");
      this.comment.setAttribute("comment", comment.id);
      this.html = `
      <div class="overlay__comment"></div>
      <div class="comment_profile-img">
         <img src="${comment.comment_author.avatar}" alt="" width="40" class="img_comment-profile">
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
         <div id="menu__dropdown-${comment.id}" class="dropdown__box"></div>
         <i class="fas fa-ellipsis-h dropdown__trigger icon__comment-${comment.id}"></i>
      </div>
      `;
      this.comment.innerHTML = this.html;
      if (!comment.img_attached) this.comment.querySelector(".comment__img_attached").style.display = "none";
      this.comments_container = this.container.querySelector(".comments__comments");

      if (method == "append") {
         this.comments_container.appendChild(this.comment);
      } else {
         this.comments_container.prepend(this.comment);
      }
      this.addLikesEv();
      if (options.dropdown) options.dropdown(comment);
      this.addResponseListEv();

      if (comment.commented_post.author.id != this.user.id && comment.comment_author.id != this.user.id) {
         this.comment.querySelector(".comment__menu").remove();
      }
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
      this.inpFile = this.container.querySelector("#comment-input__comment-image");
      this.previewImage = this.container.querySelector("#comment-image-preview__image");

      this.btnClear = this.container.querySelector("#comment__image-clear");
      this.previewContainer = this.container.querySelector("#comment__image-preview");

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
         self.inpFile.value = null;
         self.previewImage.style.display = null;
         self.previewContainer.style.display = null;
         self.file = null;
      });
   };

   this.init();

   return this;
}

export function getComment(target) {
   this.prepareFetchGetComments = () => {
      this.id = helpers.getFirstElementByClassName(target, "box__comment").getAttribute("comment");
      this.fetch_body = new FormData();
      this.fetch_body.append("id", this.id);
      this.url = Routing.generate("get_comment");
   };

   this.fetchData = async () => {
      this.promise = fetch(this.url, {
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
      return this.promise;
   };

   this.init = async () => {
      this.prepareFetchGetComments();
      await this.fetchData();
   };

   this.init();

   return this.promise;
}

export function RenderComment(options) {
   const self = this;

   self.renderComment = (comment) => {
      self.comment = document.createElement("div");
      self.comment.classList.add("box__comment");
      self.comment.setAttribute("comment", comment.id);
      self.html = `
      <div class="overlay__comment"></div>
      <div class="comment__profile-img">
         <img src="${comment.comment_author.avatar}" alt="" width="40" class="img__comment-profile">
      </div>

      <div class="comment__body">
         <a class="comment__author" href="">${comment.comment_author.firstname}</a>
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
         <div id="menu__dropdown-${comment.id}" class="dropdown__box"></div>
         <i class="fas fa-ellipsis-h icon__comment-${comment.id}"></i>
      </div>
      `;
      self.comment.innerHTML = self.html;
      if (!comment.img_attached) self.comment.querySelector(".comment__img_attached").style.display = "none";

      self.comments.prepend(self.comment);
      self.addLikesEv();
      if (options.dropdown) options.dropdown(comment);
      self.addResponseListEv();
   };

   self.addLikesEv = () => {
      self.togglers = self.comment.querySelectorAll(".toggle__likes");
      self.togglers.forEach((toggler) => {
         toggler.addEventListener("click", (e) => {
            if (options.onclickLikes) options.onclickLikes(e.target);
         });
      });
   };

   self.addResponseListEv = () => {
      self.triggers = self.comment.querySelectorAll(".trigger__modal");
      self.triggers.forEach((trigger) => {
         trigger.addEventListener("click", (e) => {
            if (options.onclickCount) options.onclickCount(e.target);
         });
      });
   };

   self.init = function () {
      self.comments = document.querySelector(".comments__comments");
      self.comments.innerHTML = "";
      self.comment_data = options.response.comment_data;

      self.comment_data.forEach((comment) => {
         self.renderComment(comment);
      });
   };

   self.init();
   return self;
}

export function DeleteComment(response) {
   if (response.success) {
      document.querySelector(`[comment = "${response.id}"]`).remove();
   }
}

export function EditComment(response) {
   if (response.success) {
      let comment = document.querySelector(`[comment = "${response.comment_data.id}"]`);

      let comment_text = comment.querySelector(".comment__text");
      comment_text.innerHTML = response.comment_data.body;

      let img_container = comment.querySelector(".comment__img_attached");
      if (response.comment_data.img_attached) {
         img_container.style = null;
         let img_attached = comment.querySelector(".img__img-attached");
         img_attached.setAttribute("src", response.comment_data.img_attached);
      } else {
         img_container.style.display = "none";
      }
   }
}
