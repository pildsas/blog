import * as helpers from "./helpers";
import * as modals from "./components/modals/modals";

function changeStyle() {
   /**
    * on window resize remove inline height to close nav
    */
   const nav = document.querySelector(".box__nav");
   nav.style.height = null;

   /**
    * on window resize remove change inline maxHeight
    */
   const folders = document.querySelector("#main-content__folders");
   if (folders !== null || typeof folders == "undefined") {
      if (folders.style.maxHeight != "0px") {
         folders.style.maxHeight = folders.scrollHeight + "px";
      }
   }

   const posts = document.querySelector("#main-content__posts");
   if (posts !== null || typeof posts == "undefined") {
      if (posts.style.maxHeight != "0px") {
         posts.style.maxHeight = posts.scrollHeight + "px";
      }
   }

   const follow = document.querySelector("#main-content__follow");
   if (follow !== null || typeof follow == "undefined") {
      if (follow.style.maxHeight != "0px") {
         follow.style.maxHeight = follow.scrollHeight + "px";
      }
   }

   const tags = document.querySelector("#main-content__tags");
   if (tags !== null || typeof tags == "undefined") {
      if (tags.style.maxHeight != "0px") {
         tags.style.maxHeight = tags.scrollHeight + "px";
      }
   }

   let search_input = document.querySelector(".input__search");
   if (search_input.value.length > 0) {
      let search_results = document.querySelector("#search__match");
      search_input.value = "";
      search_results.innerHTML = "";
      if (document.querySelector(".overlay__main-content"))
         document.querySelector(".overlay__main-content").style.display = null;
   }
}

document.addEventListener("DOMContentLoaded", () => {
   helpers.addEvent(window, "resize", helpers.throttleLast(changeStyle, 300));
});
