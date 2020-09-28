const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

import * as helpers from "./helpers";

export function toggleLikes() {
   let toggle_likes = document.querySelectorAll(".toogle_likes");
   toggle_likes.forEach((btn) => {
      btn.addEventListener("click", (event) => {
         new UpdateLikes({
            target: event.target,
            id: { id: helpers.getFirstElementByClassName(event.target, "box__post").getAttribute("post") },
            url: {
               like: "post_like",
               dislike: "post_dislike",
               unlike: "post_unlike",
               undislike: "post_undislike",
            },
         });
      });
   });
}

export const UpdateLikes = helpers.throttle(function (options) {
   this.container = options.target.parentElement.parentElement;

   this.init = async (target) => {
      this.prepareFetch(target);
      this.data = await this.fetchData();

      if (!this.data.logged) {
         window.location.replace(Routing.generate("login"));
         return;
      }
      this.likes_counter = this.container.querySelector(".counter__likes");
      this.likes_counter.innerHTML = `(${this.data.likes})`;
      this.dislikes_counter = this.container.querySelector(".counter__dislikes");
      this.dislikes_counter.innerHTML = `(${this.data.dislikes})`;

      this.toggleIcon();
   };

   this.removeAttributes = () => {
      this.like_icon.removeAttribute("state");
      this.dislike_icon.removeAttribute("state");

      this.like_icon.classList.remove("state__disabled");
      this.like_icon.classList.remove("state__active");

      this.dislike_icon.classList.remove("state__disabled");
      this.dislike_icon.classList.remove("state__active");
   };

   this.toggleIcon = () => {
      this.like_icon = this.container.querySelector(".fa-thumbs-up");
      this.dislike_icon = this.container.querySelector(".fa-thumbs-down");
      if (this.data.state == "neutral") {
         this.removeAttributes();
         this.like_icon.setAttribute("state", "neutral");
         this.dislike_icon.setAttribute("state", "neutral");
      } else if (this.data.state == "liked") {
         this.removeAttributes();
         this.like_icon.classList.add("state__active");
         this.like_icon.setAttribute("state", "liked");

         this.dislike_icon.classList.add("state__disabled");
         this.dislike_icon.setAttribute("state", "liked");
      } else if (this.data.state == "disliked") {
         this.removeAttributes();
         this.dislike_icon.classList.add("state__active");
         this.dislike_icon.setAttribute("state", "disliked");

         this.like_icon.classList.add("state__disabled");
         this.like_icon.setAttribute("state", "disliked");
      }
   };

   this.prepareFetch = (target) => {
      this.state = target.getAttribute("state");
      this.btn_type = target.classList.contains("fa-thumbs-up") ? "like" : "dislike";

      if (this.state == "neutral") {
         if (this.btn_type == "like") {
            this.url = Routing.generate(options.url.like);
         } else {
            this.url = Routing.generate(options.url.dislike);
         }
      } else if (this.state == "liked") {
         this.url = Routing.generate(options.url.unlike);
      } else if (this.state == "disliked") {
         this.url = Routing.generate(options.url.undislike);
      }
   };

   this.fetchData = () => {
      const promise = fetch(this.url, {
         method: "POST",
         body: JSON.stringify(options.id),
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

   this.init(options.target);
}, 300);
