import "regenerator-runtime/runtime";
const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

document.addEventListener("DOMContentLoaded", () => {
   let email_field = document.querySelector("#input__email");
   let password_field = document.querySelector("#input__password");

   let btn = document.querySelector(".btn__info");
   btn.addEventListener("click", () => {
      email_field.value = "test@gmail.com";
      password_field.value = 123456;
   });
});
