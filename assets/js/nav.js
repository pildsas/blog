function addEv() {
   const toggler = document.querySelector(".navbar__toggler");
   const nav = document.querySelector(".box__nav");

   toggler.addEventListener("click", () => {
      let nav_height = nav.scrollHeight;

      if (nav.style.height == "") {
         nav.style.height = nav_height + "px";
      } else {
         nav.style.height = null;
      }

      let search_input = document.querySelector(".input__search");
      if (search_input.value.length > 0) {
         let search_results = document.querySelector("#search__match");
         search_input.value = "";
         search_results.innerHTML = "";
         if (document.querySelector(".overlay__main-content"))
            document.querySelector(".overlay__main-content").style.display = null;
      }
   });
}

document.addEventListener("DOMContentLoaded", () => {
   addEv();
});
