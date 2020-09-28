/**
 * toggle accordion
 */
export function addEv() {
   let accordion__trigger = document.querySelectorAll(".accordion__trigger");
   accordion__trigger.forEach((btn) => {
      btn.addEventListener("click", function () {
         let icon = btn.querySelector(".header__icon");
         let content = this.nextElementSibling;
         if (content.style.maxHeight !== null && content.style.maxHeight !== "0px") {
            content.style.maxHeight = 0;
            icon.style.transform = null;
         } else if (content.style.maxHeight == "0px") {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = "rotate(180deg)";
         }
      });
   });
}

/**
 * opens accordions – adds addMaxHeight and rotates icon
 * needs to be added after folder and post data are fetched from server
 */
export function expandAccordions() {
   let accordion__trigger = document.querySelectorAll(".accordion__trigger");
   accordion__trigger.forEach((btn) => {
      btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + "px";
      btn.querySelector(".header__icon").style.transform = "rotate(180deg)";
   });
}

document.addEventListener("DOMContentLoaded", () => {
   addEv();
});
