import * as helpers from "./helpers";

const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

export async function deletePost(target) {
   let post_id = helpers.getFirstElementByClassName(target, "box__post").getAttribute("post");
   let data = new FormData();
   data.append("post_id", post_id);
   let url = Routing.generate("delete_post");
   let promise = fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   }).then((res) => {
      return res.json();
   });

   return promise;
}

export async function getPost(target) {
   let post_id = helpers.getFirstElementByClassName(target, "box__post").getAttribute("post");
   let data = new FormData();
   data.append("post_id", post_id);
   let url = Routing.generate("get_post");
   let promise = fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   }).then((res) => {
      return res.json();
   });

   return promise;
}

export async function createPost(data) {
   let url = Routing.generate("create_post");
   return fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   }).then((res) => {
      return res.json();
   });
}

export function editPost(data) {
   let url = Routing.generate("edit_post");
   const promise = fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   }).then((res) => {
      return res.json();
   });

   return promise;
}

export function changeHeaders(count) {
   document.querySelector(".header__text").innerHTML = `Posts ${count}`;
}
