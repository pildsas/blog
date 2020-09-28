import "regenerator-runtime/runtime";
import * as helpers from "../helpers";
const Routing = require("../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("../js_routes.json");
Routing.setRoutingData(Routes);

export function SearchController(options) {
   this.input = document.querySelector(".input__search");
   options.renderautocomplete();

   this.input.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
         options.onsubmit(e.target.value);
      }
   });

   this.prepareFetch = () => {};
}
