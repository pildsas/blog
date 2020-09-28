import * as helpers from "../helpers";

export function createTag(name) {
   let tag = document.createElement("div");
   tag.classList.add("tag");

   let hmtl = `
   <span class="tag__name">${name}</span>
   <i class="fas fa-times tag__remove"></i>
   `;

   tag.innerHTML = hmtl;
   tag.querySelector(".tag__remove").addEventListener("click", (e) => {
      removeTag(e.target.parentElement);
   });

   return tag;
}

export function addTag(tag) {
   let tags_selected = document.querySelector(".tags__selected");
   tags_selected.appendChild(tag);
}

export function removeTag(tag) {
   let tags_selected = document.querySelector(".tags__selected");
   tags_selected.removeChild(tag);
}

export function getTags() {
   let tags_selected = document.querySelector(".tags__selected");
   let tags = tags_selected.querySelectorAll(".tag");

   let names = [];
   tags.forEach((tag) => {
      let tag_name = tag.querySelector(".tag__name").innerHTML;
      names.push(tag_name);
   });

   return names;
}

export function toggleTags(options) {
   this.tags = document.querySelectorAll(options.tag);

   this.tags.forEach((tag) => {
      tag.addEventListener(
         "click",
         helpers.throttle((e) => {
            this.target = e.target;
            this.name = helpers.getFirstElementByClassName(this.target, "body__name").innerHTML;
            this.init();
         })
      );
   });

   this.removeClass = () => {
      this.tags.forEach((tag) => {
         if (tag == helpers.getFirstElementByClassName(this.target, "box__tag")) return;
         else tag.classList.remove("tag__active");
      });
   };

   this.addClass = () => {
      helpers.getFirstElementByClassName(this.target, "box__tag").classList.toggle("tag__active");
   };

   this.getCurrentTag = () => {
      let current_tag = helpers.getFirstElementByClassName(this.target, "box__tag").getAttribute("tag");
      return current_tag;
   };

   this.setTag = () => {
      if (this.previous_tag == this.current_tag) {
         this.tag = null;
      } else {
         this.tag = this.current_tag;
      }
   };

   this.init = () => {
      this.current_tag = this.getCurrentTag();
      this.previous_tag = options.getTag();
      this.setTag();

      options.setTag(this.tag);

      this.removeClass();
      this.addClass();

      if (options.cb) options.cb(this.tag, this.name);
   };
}
