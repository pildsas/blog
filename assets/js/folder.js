import * as DOM from "./editDOM/_folder";
import * as helpers from "./helpers";
import * as accordion from "./components/accordion";

const Routing = require("../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router");
const Routes = require("./js_routes.json");
Routing.setRoutingData(Routes);

// export function createFolder(folder_name, profile_id) {
//    let data = new FormData();
//    data.append("folder_name", folder_name);
//    data.append("profile_id", profile_id);
//    let url = Routing.generate("create_folder");
//    let promise = fetch(url, {
//       method: "POST",
//       body: data,
//       headers: {
//          "X-Requested-With": "XMLHttpRequest",
//       },
//    }).then((res) => {
//       return res.json();
//    });
//    return promise;
// }

export async function deleteFolder(target) {
   let folder_id = helpers.getFirstElementByClassName(target, "box__folder").getAttribute("folder");
   let data = new FormData();
   data.append("folder_id", folder_id);
   let url = Routing.generate("delete_folder");
   let promise = fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   });

   return promise;
}

export async function renameFolder(target, folder_name) {
   let folder_id = helpers.getFirstElementByClassName(target, "box__folder").getAttribute("folder");
   let data = new FormData();
   data.append("folder_id", folder_id);
   data.append("folder_name", folder_name);
   let url = Routing.generate("rename_folder");
   let promise = fetch(url, {
      method: "POST",
      body: data,
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   });

   return promise;
}

export function getFoldersNames() {
   let url = Routing.generate("get_folders");
   let promise = fetch(url, {
      method: "GET",
      headers: {
         "X-Requested-With": "XMLHttpRequest",
      },
   })
      .then((res) => {
         return res.json();
      })
      .then((res) => {
         let folders = [];
         res.forEach((folder) => {
            folders.push([folder.name, folder.folder_id]);
         });
         return folders;
      });
   return promise;
}

export function toggleFolders(options) {
   this.folders = document.querySelectorAll(options.folder);

   this.folders.forEach((folder) => {
      folder.addEventListener(
         "click",
         helpers.throttle((e) => {
            this.target = e.target;
            this.name = this.target.querySelector(".body__name").innerHTML;
            this.init();
         })
      );
   });

   this.removeClass = () => {
      this.folders.forEach((folder) => {
         if (folder == helpers.getFirstElementByClassName(this.target, "folder__item")) return;
         else folder.classList.remove("folder__active");
      });
   };

   this.addClass = () => {
      helpers.getFirstElementByClassName(this.target, "folder__item").classList.toggle("folder__active");
   };

   this.getCurrentFolder = () => {
      let current_folder = helpers.getFirstElementByClassName(this.target, "box__folder").getAttribute("folder");
      return current_folder;
   };

   this.setFolder = () => {
      if (this.previous_folder == this.current_folder) {
         this.folder = null;
      } else {
         this.folder = this.current_folder;
      }
   };

   this.init = () => {
      this.current_folder = this.getCurrentFolder();
      this.previous_folder = options.getFolder();
      this.setFolder();

      options.setFolder(this.folder);

      this.removeClass();
      this.addClass();

      if (options.cb) options.cb(this.folder, this.name);
   };
}

export function updateFoldersList(options) {
   var items = document.querySelector(".input__folder").querySelector(".dropdown__items");
   items.innerHTML = "";

   options.data.forEach((elem) => {
      let dd_item = document.createElement("div");
      dd_item.classList.add("dropdown__item");
      let dd_item_attr = options.attr ? options.attr : null;
      if (dd_item_attr && elem[1]) dd_item.setAttribute(options.attr, elem[1]);
      dd_item.setAttribute("onmousedown", "var self=getddv(this);self.clicked(this)");

      dd_item.innerHTML = elem[0];
      items.prepend(dd_item);
   });

   if (options.bottom_item) {
      let dd_item = document.createElement("div");
      dd_item.classList.add("dropdown__item", "item__bottom");
      dd_item.setAttribute("onmousedown", "var self=getddv(this);self.clicked(this)");

      let html = `
            <i class="fas fa-plus-circle"></i>
            <span>${options.bottom_item}</span>
            `;
      dd_item.innerHTML = html;
      items.appendChild(dd_item);
   }
}
