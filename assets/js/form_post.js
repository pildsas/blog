import * as tags from "./components/tags";
import * as helpers from "./helpers";
import "regenerator-runtime/runtime";

const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);
const autoComplete = require("@tarekraafat/autocomplete.js/dist/js/autoComplete");

export function renderAutoComplete() {
   new autoComplete({
      data: {
         src: async () => {
            const query = document.querySelector("#input__tag").value;
            const source = await fetch(Routing.generate("find_tags", { query: query }));
            const data = await source.json();

            return data.tags;
         },
         key: ["name"],
         cache: false,
      },
      placeHolder: "Enter Tag",
      selector: "#input__tag",
      threshold: 1,
      debounce: 300,
      // searchEngine: "strict",
      resultsList: {
         render: true,
         container: (source) => {
            source.setAttribute("id", "tags__match");
         },
         destination: document.querySelector("#input__tag"),
         position: "afterend",
         element: "div",
      },
      // highlight: true,
      resultItem: {
         content: (data, source) => {
            source.innerHTML = data.match;
         },
         element: "div",
      },

      noResults: () => {
         const result = document.createElement("div");
         const span = document.createElement("span");
         span.innerHTML = `<i class="fas fa-plus"></i>`;
         result.setAttribute("class", "no_result");
         result.setAttribute("tabindex", "1");
         result.innerHTML = "Create new tag ";
         result.appendChild(span);
         document.querySelector("#tags__match").appendChild(result);

         result.addEventListener("click", () => {
            let value = document.querySelector("#input__tag").value;
            tags.addTag(tags.createTag(value));
            document.querySelector("#input__tag").value = "";
            document.querySelector("#tags__match").innerHTML = "";
         });
      },
      onSelection: (feedback) => {
         tags.addTag(tags.createTag(feedback.selection.match));
         document.querySelector("#input__tag").value = "";
      },
   });
}

export function SearchBar(options) {
   this.init = async () => {
      this.container = document.querySelector(options.container);
      this.resultsList();
      this.addEv();
   };

   this.src = async () => {
      this.source = await fetch(Routing.generate("browse", { query: this.query }));
      this.data = await this.source.json();
   };

   this.resultPost = () => {
      this.resultsList.innerHTML = "";
      this.data.posts_data.forEach((item) => {
         let tags = "";
         item.tags.forEach((tag) => {
            tags += `
            <span>#${this.highlight(tag.name)}</span>
            `;
         });

         let html = `
            <div class="result-item__col">
               <img src="${item.front_cover_link}" alt="">
            </div>
            <div class="result-item__col">
               <div class="result-item__row">${this.highlight(item.title)}</div>
               <div class="result-item__row">
                 <div>${tags}</div>
                 <span class="resul-item__type">Post</span>
               </div>
         </div>
         `;

         let result_item = document.createElement("div");
         result_item.classList.add("box__result-item");
         result_item.innerHTML = html;
         this.resultsList.appendChild(result_item);
         result_item.addEventListener("click", () => {
            this.redirect("read_post", item.id, item.author.id);
         });
      });
      return true;
   };

   this.resultAuthor = () => {
      this.data.profiles_data.forEach((item) => {
         let html = `
            <div class="result-item__col">
               <img src="${item.avatar}" alt="">
            </div>
            <div class="result-item__col">
               <div class="result-item__row">${this.highlight(item.firstname)} ${this.highlight(item.lastname)}</div>
               <div class="result-item__row">
                  <span class="resul-item__nickname">${`${
                     this.highlight(item.nickname) ? "@" + this.highlight(item.nickname) : ""
                  }`}</span>
                  <span class="resul-item__type">Author</span>
               </div>
         </div>
         `;
         let result_item = document.createElement("div");
         result_item.classList.add("box__result-item");
         result_item.innerHTML = html;
         this.resultsList.appendChild(result_item);
         result_item.addEventListener("click", () => {
            this.redirect("profile_page", null, item.id);
         });
      });
      return true;
   };

   this.noResults = () => {
      let html = `
      <div class="result-item__col">
         <img class="img__not-found" src="/img/defaults/not_found.svg" alt="">
      </div>
      <div class="result-item__col">
         <div class="result-item__row result-item__no-results">No results found!</div>
         <div class="result-item__row"></div>
      </div>
   `;
      let result_item = document.createElement("div");
      result_item.classList.add("box__result-item");
      result_item.innerHTML = html;
      this.resultsList.appendChild(result_item);
      result_item.addEventListener("click", () => {
         this.target.value = "";
         this.resultsList.innerHTML = "";
         if (document.querySelector(".overlay__main-content"))
            document.querySelector(".overlay__main-content").style.display = null;
      });
   };

   this.highlight = (string) => {
      if (!string) return;
      if (string.toLowerCase().includes(this.query.toLowerCase())) {
         let start = string.toLowerCase().indexOf(this.query);
         let end = start + this.query.length;
         let substr = string.slice(start, end);

         let highlighted = string
            .toLowerCase()
            .replace(this.query.toLowerCase(), `<span class="text__highlight">${substr}</span>`);
         return highlighted;
      } else {
         return string;
      }
   };

   this.resultsList = () => {
      this.resultsList = document.createElement("div");
      this.resultsList.setAttribute("id", options.resultsList);
      this.container.appendChild(this.resultsList);
   };

   this.addEv = () => {
      document.querySelector(options.search_input).addEventListener(
         "input",
         helpers.throttleLast(async (e) => {
            this.target = e.target;
            this.query = e.target.value;
            if (this.query.length >= options.threshold) {
               await this.src();

               if (this.data.posts_data.length <= 0 && this.data.profiles_data.length <= 0) {
                  this.resultsList.innerHTML = "";
                  this.setPosition(e.target);
                  this.noResults();
                  if (document.querySelector(".overlay__main-content"))
                     document.querySelector(".overlay__main-content").style.display = "block";
               } else {
                  this.setPosition(e.target);
                  this.resultPost();
                  this.resultAuthor();
                  if (document.querySelector(".overlay__main-content"))
                     document.querySelector(".overlay__main-content").style.display = "block";
               }
            } else {
               this.resultsList.innerHTML = "";
               if (document.querySelector(".overlay__main-content"))
                  document.querySelector(".overlay__main-content").style.display = null;
            }
         }, options.throttle)
      );
   };

   this.setPosition = (target) => {
      this.location = helpers.getPositions(target);
      this.resultsList.style.top = this.location.top + 63 + "px";
   };

   this.redirect = (loc, post = null, author = null) => {
      if (loc == "profile_page") {
         window.location.href = Routing.generate(loc, { profile: author });
      } else {
         window.location.href = Routing.generate(loc, { profile: author, post: post });
      }
   };

   this.init();
}
