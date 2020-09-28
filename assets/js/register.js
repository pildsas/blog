import * as helpers from "./helpers";
import "regenerator-runtime/runtime";
const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

// document.addEventListener("DOMContentLoaded", () => {
//    let submit = document.querySelector(".btn__register-form");
//    let form = document.querySelector(".form__register");

//    submit.addEventListener("click", (e) => {
//       e.preventDefault();
//       let data = new FormData(form);
//       fetch(Routing.generate("register"), {
//          method: "POST",
//          body: data,
//       })
//          .then((res) => {
//             return res.json();
//          })
//          .then((res) => {
//             if (res.completion) {
//                window.location.href = Routing.generate("profile_page", { profile: res.profile_id });
//             } else {
//                let errors = {};
//                res.errors.forEach((error) => {
//                   let name = error.cause.propertyPath.includes("password")
//                      ? "password"
//                      : error.cause.propertyPath.split(".")[1];
//                   errors[name] = error.message;
//                });
//                DisplayErrors(errors);
//             }
//          });
//    });
// });

// const DisplayErrors = (errors) => {
//    let i = document.querySelectorAll(".input_form");
//    i.forEach((input) => {
//       input.classList.remove("active__error");
//    });

//    let e = document.querySelectorAll(".input__error");
//    e.forEach((error) => {
//       error.style.display = null;
//    });

//    if (errors.firstname) {
//       let firstname = document.querySelector(".error__firstname");
//       let input_firstname = document.querySelector("#user_firstname");
//       input_firstname.classList.add("active__error");
//       firstname.style.display = "block";
//       firstname.innerHTML = errors.firstname;
//    }

//    if (errors.lastname) {
//       let lastname = document.querySelector(".error__lastname");
//       let input_lastname = document.querySelector("#user_lastname");
//       input_lastname.classList.add("active__error");
//       lastname.style.display = "block";
//       lastname.innerHTML = errors.lastname;
//    }

//    if (errors.email) {
//       let email = document.querySelector(".error__email");
//       let input_email = document.querySelector("#user_email");
//       input_email.classList.add("active__error");
//       email.style.display = "block";
//       email.innerHTML = errors.email;
//    }

//    if (errors.password) {
//       let password = document.querySelector(".error__password");
//       let input_password_first = document.querySelector("#user_password_first");
//       let input_password_second = document.querySelector("#user_password_second");
//       input_password_first.classList.add("active__error");
//       input_password_second.classList.add("active__error");
//       password.style.display = "block";
//       password.innerHTML = errors.password;
//    }
// };
