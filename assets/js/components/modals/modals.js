// used by responsive.js

export var hideModal = () => {
   let overlay = document.querySelector(".overlay");
   if (overlay !== null || typeof overlay == "undefined") {
      document.querySelector("#box__modal").innerHTML = "";
      document.querySelector("#box__modal").style.display = "none";
   }
};
