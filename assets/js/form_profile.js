import * as sort from "./components/sort";
import * as tags from "./components/tags";
import * as search from "./components/search";

const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

export function profileImagePreview() {
   const inpFile = document.querySelector(".input__cover");
   const previewImage = document.querySelector(".cover-preview__image");
   const previewText = document.querySelector(".cover-preview__text");
   const btnClear = document.querySelector(".cover__btn-clear");

   inpFile.addEventListener("change", function () {
      const file = this.files[0];

      if (file) {
         const reader = new FileReader();
         previewText.style.display = "none";
         previewImage.style.display = "block";
         reader.addEventListener("load", function () {
            previewImage.setAttribute("src", this.result);
         });

         reader.readAsDataURL(file);
      } else {
         previewText.style.display = null;
         previewImage.style.display = null;
      }
   });

   btnClear.addEventListener("click", () => {
      inpFile.value = null;
      previewText.style.display = null;
      previewImage.style.display = null;
   });
}

export function updateProfile(data) {
   let url = Routing.generate("update_profile");
   fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   })
      .then((res) => {
         return res.json();
      })
      .then((res) => {
         console.log(res);
      });
}

export function getProfileData() {
   let url = Routing.generate("get_profile");
   fetch(url, {
      method: "GET",
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   })
      .then((res) => {
         return res.json();
      })
      .then((res) => {
         fillProfileData(res);
      });
}

export function addEv() {
   let submit = document.querySelector(".btn__form-submit");
   submit.addEventListener("click", (e) => {
      e.preventDefault();
      let data = new FormData();
      let image = document.querySelector(".input__cover").files[0];
      let firstname = document.querySelector(".input__firstname").value;
      let lastname = document.querySelector(".input__lastname").value;
      let alias = document.querySelector(".input__alias").value;

      data.append("firstname", firstname);
      data.append("lastname", lastname);
      data.append("alias", alias);
      data.append("image", image);

      updateProfile(data);
   });

   profileImagePreview();
   getProfileData();
}

document.addEventListener("DOMContentLoaded", () => {
   // addEv();
});

export function fillProfileData(data) {
   // let image = document.querySelector(".input__cover").files[0];
   document.querySelector(".input__firstname").value = data.firstname;
   document.querySelector(".input__lastname").value = data.lastname;
   document.querySelector(".input__alias").value = data.nickname;

   if (data.avatar) {
      const previewImage = document.querySelector(".cover-preview__image");
      const previewText = document.querySelector(".cover-preview__text");
      previewImage.setAttribute("src", data.avatar);
      previewText.style.display = "none";
      previewImage.style.display = "block";
   }
}
