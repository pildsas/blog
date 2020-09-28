import * as helpers from "../helpers";

const Routing = require("../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../js_routes.json");
Routing.setRoutingData(Routes);

export function getPost(data, options) {
   let html = `
   <div class="overlay__post"></div>
   <div class="dropdown__post" id="${options.dropdown_container_id}-${data.id}"></div>
   <div class="post-item">
      <div class="post__header">
         <div class="header__strip"></div>
         <img src="${
            data.front_cover_link ? data.front_cover_link : "/uploads/defaults/noimage.jpg"
         }" alt="" class="header__img">
      </div>

      <div class="post__body">
      
      <div class="body__row">
         <i class="fas fa-ellipsis-h dropdown__trigger post__icon" id="${options.dropdown_trigger_id}-${data.id}"></i>
      </div>

      <div class="body__row">
         <a href="${Routing.generate("read_post", {
            profile: data.author.id,
            post: data.id,
         })}" class="body__title">${data.title}</a>
      </div>

      <div class="body__row">
         <div class="row__column">  
            <div class="body__created-at">${helpers.timeAgo(data.created_at)}</div>
         </div>
         <div class="row__column">   
            <span>by</span>
            <a class="body__author" href="${Routing.generate("profile_page", { profile: data.author.id })}">${
      data.author.firstname
   }</a>
      </div>
      </div>

         <div class="body__row">
            <div class="body__tags"></div>
         </div>
 
      </div>

      <div class="post__footer">
         <div class="footer__counter">
            <i class="far fa-thumbs-up toogle_likes" state="${data.state}"></i>
            <span class="trigger__modal counter__likes">(${data.likes})</span>
         </div>
         <div class="footer__counter">
            <i class="far fa-thumbs-down toogle_likes" state="${data.state}"></i>
            <span class="trigger__modal counter__dislikes">(${data.dislikes})</span>
         </div>
         <div class="footer__counter comments__counter">
            <i class="far fa-comment"></i>
            <span class="trigger__comments-modal">(${data.comments})</span>
         </div>
      </div>
   </div>
   `;

   const box_post = document.createElement("div");
   box_post.classList.add("box__post");
   box_post.setAttribute("post", data.id);
   box_post.innerHTML = html;

   const box_tags = box_post.querySelector(".body__tags");

   addPostTags(box_tags, data.tags);
   addAttributes(box_post, data);

   let user = options.getUser();
   let dd = box_post.querySelector(".dropdown__post");
   let icon = box_post.querySelector(".post__icon");

   if (data.author.id !== user.id) {
      icon.remove();
      dd.remove();
   }

   return box_post;
}

export function addPost(post, container) {
   let posts__posts = document.querySelector(container);
   posts__posts.appendChild(post);
}

export function addPosts(options) {
   let posts__posts = document.querySelector(options.container);
   posts__posts.innerHTML = "";
   options.data.forEach((post) => {
      addPost(getPost(post, options), options.container);
   });
}

export function addPostTags(container, tags) {
   tags.forEach((tag) => {
      container.appendChild(addPostTag(tag));
   });
}

export function addPostTag(tag) {
   let tag_element = document.createElement("a");
   tag_element.setAttribute("tag", tag.id);
   tag_element.classList.add("tags__tag");
   tag_element.innerHTML = `#${tag.name}`;
   return tag_element;
}

export function openPost(res) {
   let box__post = document.createElement("div");
   box__post.classList.add("box__post");
   box__post.setAttribute("post", res.id);

   let html = `
   <div class="post__title">${res.title}</div>
   <div class="post__created-at">${helpers.timeAgo(res.created_at)}</div>
   <div class="post__body">${res.body}</div>
   `;

   box__post.innerHTML = html;

   return box__post;
}

export function replaceDOM(element) {
   let box_profile_content = document.querySelector(".box__profile-content");
   box_profile_content.replaceWith(element);
}

export function addAttributes(container, data) {
   let like_icon = container.querySelector(".fa-thumbs-up");
   let dislike_icon = container.querySelector(".fa-thumbs-down");
   if (data.state == "neutral") {
      like_icon.setAttribute("state", "neutral");
      dislike_icon.setAttribute("state", "neutral");
   } else if (data.state == "liked") {
      like_icon.classList.add("state__active");
      like_icon.setAttribute("state", "liked");

      dislike_icon.classList.add("state__disabled");
      dislike_icon.setAttribute("state", "liked");
   } else if (data.state == "disliked") {
      dislike_icon.classList.add("state__active");
      dislike_icon.setAttribute("state", "disliked");

      like_icon.classList.add("state__disabled");
      like_icon.setAttribute("state", "disliked");
   }
}

export function noContent(container, text) {
   let elem = document.createElement("div");
   elem.classList.add("content__no-content");
   let html = `
   <div class="text__no-content">${text}</div>
   `;
   elem.innerHTML = html;
   let content__posts = document.querySelector(container);
   content__posts.innerHTML = "";
   content__posts.appendChild(elem);
}
