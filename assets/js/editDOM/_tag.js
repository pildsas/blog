import * as helpers from "../helpers";

const Routing = require("../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../js_routes.json");
Routing.setRoutingData(Routes);

export function getTag(tag) {
   let box__tag = document.createElement("div");
   box__tag.classList.add("box__tag");
   box__tag.setAttribute("tag", tag.id);
   let html = `
   
   <div class="tag__item"> 
      <div class="tag__left-strip"></div>
      <div class="tag__content">
         <div class="body__name">#${tag.name}</div>
      </div> 
   </div> 
   `;
   box__tag.innerHTML = html;
   return box__tag;
}

export function addTag(element) {
   let content__tags = document.querySelector(".content__tags");
   content__tags.appendChild(element);
}

export function addTags(tags) {
   let content__tags = document.querySelector(".content__tags");
   content__tags.innerHTML = "";
   tags.forEach((tag) => {
      addTag(getTag(tag));
   });
}

export function noContent(container, text) {
   let elem = document.createElement("div");
   elem.classList.add("content__no-content");
   let html = `
   <div class="text__no-content">${text}</div>
   `;
   elem.innerHTML = html;
   let content__tags = document.querySelector("#content__tags");
   content__tags.innerHTML = "";
   content__tags.appendChild(elem);
}
