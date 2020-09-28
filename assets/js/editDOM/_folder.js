import * as helpers from "../helpers";

export function getFolder(folder, folder_active, user) {
   let box__folder = document.createElement("div");
   box__folder.classList.add("box__folder");
   box__folder.setAttribute("folder", folder.folder_id);

   let html = `
   <div class="overlay__folder"></div>
   <div class="dropdown__folder" id="dropdown__folder-${folder.folder_id}"></div>
   <div class="folder__item"> 
      <div class="folder__left-strip"></div>
      <div class="folder__content">
         <div class="folder__header">
            <i class="fas fa-ellipsis-h dropdown__trigger folder__icon" id="dropdown__folder-trigger-${
               folder.folder_id
            }"></i>   
         </div>
      <div class="folder__body">
         <div class="body__name">${folder.name}</div>
         <div class="body__created-at">${helpers.timeAgo(folder.created_at)}</div>
      </div>
      </div> 
   </div>
   `;

   box__folder.innerHTML = html;
   let folder__item = box__folder.querySelector(".folder__item");

   let dd = box__folder.querySelector(".dropdown__folder");
   let icon = box__folder.querySelector(".folder__icon");
   if (folder.author.id !== user.id) {
      icon.remove();
      dd.remove();
   }

   let active = folder.folder_id == folder_active ? "folder__active" : null;
   if (active) folder__item.classList.add(active);

   return box__folder;
}

/* <div class="dropdown__folder" id="dropdown__folder-${folder.folder_id}"></div> */

export function addFolder(element) {
   let folders__folders = document.querySelector(".content__folders");
   folders__folders.appendChild(element);
}

export function deleteFolder(element) {
   let folders__folders = document.querySelector(".content__folders");
   folders__folders.removeChild(element);
}

export function addFolders(options) {
   let folder_active = options.getFolder();
   let folders__folders = document.querySelector(".content__folders");
   let user = options.getUser();

   folders__folders.innerHTML = "";
   options.data.forEach((folder) => {
      addFolder(getFolder(folder, folder_active, user));
   });
}

export function replaceFolder(element) {
   let folders__folders = document.querySelector(".content__folders");
   folders__folders.replaceWith(element);
}

export function noContent(container, text) {
   let elem = document.createElement("div");
   elem.classList.add("content__no-content");
   let html = `
   <div class="text__no-content">${text}</div>
   `;
   elem.innerHTML = html;
   let content__folders = document.querySelector(".content__folders");
   content__folders.innerHTML = "";
   content__folders.appendChild(elem);
}
