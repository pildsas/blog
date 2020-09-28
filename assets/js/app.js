import * as responsive from "./responsive";
import * as nav from "./nav";
import * as search from "./components/search";
import * as likes from "./likes";
import * as form_post from "./form_post";

document.addEventListener("DOMContentLoaded", () => {
   search.SearchController({
      onsubmit: (value) => {},
      renderautocomplete: () => {
         form_post.SearchBar({
            search_input: "#input__search",
            container: ".box__browse",
            resultsList: "search__match",
            threshold: 2,
            throttle: 300,
         });
      },
   });
});
