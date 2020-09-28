import * as helpers from "../helpers";

export function Icon(options) {
   var self = this;

   self.render = () => {
      self.container = document.getElementById(options.id);
      self.container.innerHTML = self.html();
      self.panel = self.container.querySelector(".dropdown__panel");
      self.card = self.container.querySelector(".dropdown__card");
      self.items = self.container.querySelector(".card__items");

      if (options.item_overlay !== undefined) {
         self.item_overlay = helpers.getFirstElementByClassName(self.container, options.item_overlay);
      }

      self.panel.style.display = "none";
      self.panel.style.visibility = "0";

      let html = ``;
      options.data.forEach((item) => {
         let icon_class = item[1],
            btn_text = item[0],
            btn_custom_class = item[2];

         html += self.html2(btn_custom_class, icon_class, btn_text);
      });
      self.items.innerHTML = html;
   };

   self.addEv = () => {
      self.trigger = document.querySelector(options.trigger);
      self.trigger.addEventListener("click", (e) => {
         if (self.overlay) {
            self.overlay.style = null;
         }
         e.target.classList.add("icon__active");
         e.stopPropagation();
         if (self.isVisible) self.hide();
         else self.show();
      });

      let buttons = self.container.querySelectorAll(".items__item");
      buttons.forEach((btn) => {
         btn.addEventListener("click", (e) => {
            self.clicked(e.target);
         });
      });
   };

   self.addDropdown = () => {
      if (!window.dropdowns) window.dropdowns = {};
      window.dropdowns[options.id] = self;
   };

   self.addGetter = () => {
      window.getdd = function (elem) {
         let id = elem.closest(".dropdown__panel").parentElement.id;
         return window.dropdowns[id];
      };
   };

   self.show = () => {
      for (var dd in window.dropdowns) window.dropdowns[dd].hide();

      self.isVisible = true;
      self.card.style.transform = "translate(0px,0px)";
      helpers.fadeIn(self.panel);

      if (self.item_overlay) {
         self.item_overlay.style.display = "block";
         self.item_overlay.style.background = options.item_overlay_bg;

         if (!window.overlays) window.overlays = [];
         if (!window.overlays.includes(self.item_overlay)) {
            window.overlays.push(self.item_overlay);
         }
      }
   };

   self.hide = () => {
      if (!self.isVisible) return;
      self.trigger.classList.remove("icon__active");

      self.isVisible = false;
      self.card.style.transform = "translate(0px,-255px)";
      helpers.fadeOut(self.panel);

      if (self.item_overlay) self.item_overlay.style.display = "none";
      if (!window.overlays) window.overlays = [];
      if (window.overlays.includes(self.item_overlay)) {
         let index = window.overlays.indexOf(self.item_overlay);
         if (index !== -1) {
            window.overlays.splice(index, 1);
         }
      }
   };

   self.clicked = (target) => {
      self.hide();
      if (options.cb) options.cb(target);
   };

   self.html = () => {
      let html = `
         <div class='dropdown__panel'>
            <div class="dropdown__card">
               <div class="card__items"></div>
            </div>
         </div>
      `;

      return html;
   };

   self.html2 = (btn_custom_class, icon_class, btn_text) => {
      let html = `
      <div class="items__item ${btn_custom_class}">
         <i class="${icon_class}"></i>
         <span>${btn_text}</span>
      </div>`;

      return html;
   };

   self.init = () => {
      self.render();
      self.addDropdown();
      self.addGetter();
      self.addEv();
   };

   self.init();
   return self;
}

export function Dropdown(options) {
   const self = this;

   self.customStyle = () => {
      self.width = "200px";
      if (options.style) {
         self.width = options.style.width ? options.style.width : "250px";
      } else {
         self.width = "200px";
      }
   };

   self.render = () => {
      self.container = document.getElementById(options.id);

      let html = `
         <div class='dropdown-simple'>
             <div class='dropdown__value'></div>
		         <div class='dropdown__arrow'>▾</div>
		         <div class='dropdown__panel'>
		          	<div class='dropdown__items'></div>
		         </div>
          </div>`;

      self.container.innerHTML = html;
      self.dropdown = self.container.querySelector(".dropdown-simple");
      self.dropdown.style.width = self.width;

      self.items = self.container.querySelector(".dropdown__items");
      self.items.style.width = self.width;

      self.value = self.container.querySelector(".dropdown__value");
      self.default_attr = options.default_attr ? options.default_attr : null;
      if (self.default_attr) self.value.setAttribute(options.default_attr[0], options.default_attr[1]);

      self.panel = self.container.querySelector(".dropdown__panel");
      self.arrow = self.container.querySelector(".dropdown__arrow");
      self.value.innerHTML = options.placeholder;

      options.data.forEach((elem) => {
         let dd_item = document.createElement("div");
         dd_item.classList.add("dropdown__item");
         let dd_item_attr = options.attr ? options.attr : null;
         if (dd_item_attr && elem[1]) dd_item.setAttribute(options.attr, elem[1]);
         dd_item.setAttribute("onmousedown", "var self=getddv(this);self.clicked(this)");

         dd_item.innerHTML = elem[0];
         self.items.prepend(dd_item);
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
         self.items.appendChild(dd_item);
      }
   };

   self.addDropdown = () => {
      if (!window.dropdowns) window.dropdowns = {};
      window.dropdowns[options.id] = self;
   };

   self.addGetter = () => {
      window.getddv = function (elem) {
         let id = elem.closest(".dropdown-simple").parentElement.id;
         return window.dropdowns[id];
      };
   };

   self.clicked = (elem) => {
      if (elem.classList.contains("item__bottom")) {
         if (options.cb) options.cb(elem);
      } else {
         let newval = elem.innerHTML;
         self.value.innerHTML = newval;
         self.value.setAttribute(options.attr, elem.getAttribute(options.attr));
         if (options.cb) options.cb(elem);
      }

      self.hide();
   };

   self.addEv = () => {
      self.value.addEventListener("mousedown", function (e) {
         e.stopPropagation();

         if (self.isVisible) self.hide();
         else self.show();
      });

      document.addEventListener("mousedown", function (e) {
         e.stopPropagation();
         if (self.isVisible) self.hide();
      });
   };

   self.show = () => {
      for (var dd in window.dropdowns) window.dropdowns[dd].hide();

      self.isVisible = true;
      self.items.style.transform = "translate(0px,0px)";
      self.arrow.style.transform = "rotate(180deg)";
   };

   self.hide = () => {
      if (!self.isVisible) return;

      self.isVisible = false;
      self.items.style.transform = "translate(0px,-255px)";
      self.arrow.style.transform = "rotate(0deg)";
   };

   self.init = () => {
      self.customStyle();
      self.render();
      self.addDropdown();
      self.addGetter();
      self.addEv();
   };

   self.init();
   return self;
}

document.onmousedown = autoclose;
function autoclose(e) {
   if (!document.querySelector(".dropdown__panel")) return;
   if (!helpers.getFirstElementByClassName(e.target, "dropdown__panel")) return;
   let elem = helpers.getFirstElementByClassName(e.target, "dropdown__panel").parentElement;
   if (elem.contains(e.target) || e.target.classList.contains("dropdown__trigger")) return;
   // if (e.target.classList.contains("dropdown__trigger")) return;
   else {
      for (var dd in window.dropdowns) window.dropdowns[dd].hide(dd);
   }
}
