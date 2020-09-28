/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/components/accordion.js":
/*!*******************************************!*\
  !*** ./assets/js/components/accordion.js ***!
  \*******************************************/
/*! exports provided: addEv, expandAccordions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEv", function() { return addEv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAccordions", function() { return expandAccordions; });
/**
 * toggle accordion
 */
function addEv() {
  var accordion__trigger = document.querySelectorAll(".accordion__trigger");
  accordion__trigger.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var icon = btn.querySelector(".header__icon");
      var content = this.nextElementSibling;

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

function expandAccordions() {
  var accordion__trigger = document.querySelectorAll(".accordion__trigger");
  accordion__trigger.forEach(function (btn) {
    btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + "px";
    btn.querySelector(".header__icon").style.transform = "rotate(180deg)";
  });
}
document.addEventListener("DOMContentLoaded", function () {
  addEv();
});

/***/ }),

/***/ "./assets/js/components/comments.js":
/*!******************************************!*\
  !*** ./assets/js/components/comments.js ***!
  \******************************************/
/*! exports provided: CommentsController, getComment, RenderComment, DeleteComment, EditComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsController", function() { return CommentsController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComment", function() { return getComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderComment", function() { return RenderComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComment", function() { return DeleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComment", function() { return EditComment; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function CommentsController(options) {
  var _this = this;

  var self = this;
  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this.container = document.querySelector(options.container);

            _this.addInputEv();

            _this.previewImage();
            /**
             * RENDER ALL COMMENTS
             */


            _this.prepareFetchGetComments();

            _context.next = 6;
            return _this.fetchData();

          case 6:
            _this.data = _context.sent;
            _this.user = options.getUser();

            _this.data.comment_data.forEach(function (comment) {
              _this.render(comment, "append");
            });

            if (options.commentsData) options.commentsData(_this.data.comment_data);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  this.addInputEv = function () {
    _this.input = _this.container.querySelector(options.input_comment);

    _this.input.addEventListener("keydown", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(e.keyCode === 13 && e.target.value.trim() != "")) {
                  _context2.next = 13;
                  break;
                }

                e.preventDefault();
                /**
                 * CREATE AND RENDER SINGLE COMMENT
                 */

                _this.prepareFetchPostComment(e.target);

                _context2.next = 5;
                return _this.fetchData();

              case 5:
                _this.data = _context2.sent;

                _this.render(_this.data, "prepend");

                document.querySelector(".text__comment-count").innerHTML = "Comments (".concat(_this.data.count, ")");
                e.target.value = "";
                /**
                 * CLEAR IMAGE
                 */

                self.file = null;
                _this.inpFile.value = null;
                _this.previewImage.style.display = null;
                _this.previewContainer.style.display = null;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  this.prepareFetchGetComments = function () {
    _this.post_id = _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](_this.container, "box__main-post").getAttribute("post");
    _this.fetch_body = new FormData();

    _this.fetch_body.append("post_id", _this.post_id);

    _this.url = Routing.generate("get_comments");
  };

  this.prepareFetchPostComment = function (target) {
    _this.comment_text = target.value;
    _this.post_id = _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](target, "box__main-post").getAttribute("post");
    _this.fetch_body = new FormData();

    _this.fetch_body.append("comment_text", _this.comment_text);

    _this.fetch_body.append("post_id", _this.post_id);

    if (_this.file) _this.fetch_body.append("image", _this.file);
    _this.url = Routing.generate("post_comment");
  };

  this.fetchData = function () {
    var promise = fetch(_this.url, {
      method: "POST",
      body: _this.fetch_body,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res;
    });
    return promise;
  };

  this.render = function (comment, method) {
    _this.comment = document.createElement("div");

    _this.comment.classList.add("box__comment");

    _this.comment.setAttribute("comment", comment.id);

    _this.html = "\n      <div class=\"overlay__comment\"></div>\n      <div class=\"comment_profile-img\">\n         <img src=\"".concat(comment.comment_author.avatar, "\" alt=\"\" width=\"40\" class=\"img_comment-profile\">\n      </div>\n\n      <div class=\"comment__body\">\n         <a class=\"comment__author\" href=\"").concat(Routing.generate("profile_page", {
      profile: comment.comment_author.id
    }), "\">").concat(comment.comment_author.firstname, "</a>\n         <div class=\"comment__text\">").concat(comment.body, "</div>\n         \n         <div class=\"comment__img_attached\"> \n            <img ").concat(comment.img_attached ? "src=" + comment.img_attached : "none", " class=\"img__img-attached\" alt=\"\">\n         </div>\n      </div>\n\n      <div class=\"comment__footer\">\n\n         <div class=\"footer__row\"> \n            <div class=\"footer__counter\">\n               <i class=\"far fa-thumbs-up toggle__likes ").concat(comment.state == "liked" ? "state__active" : "", " ").concat(comment.state == "disliked" ? "state__disabled" : "", "\" state=\"").concat(comment.state ? comment.state : "neutral", "\"></i>\n               <span class=\"trigger__modal counter__likes\">(").concat(comment.likes, ")</span>\n            </div>\n\n            <div class=\"footer__counter\">\n               <i class=\"far fa-thumbs-down toggle__likes ").concat(comment.state == "disliked" ? "state__active" : "", " ").concat(comment.state == "liked" ? "state__disabled" : "", "\" state=\"").concat(comment.state ? comment.state : "neutral", "\"></i>\n               <span class=\"trigger__modal counter__dislikes\">(").concat(comment.dislikes, ")</span>\n            </div>\n         </div>\n\n         <div class=\"footer__row\"> \n            <div class=\"comment__createdAt\">").concat(_helpers__WEBPACK_IMPORTED_MODULE_1__["timeAgo"](comment.createdAt), "</div>\n         </div>\n\n      </div>\n\n      <div class=\"comment__menu\">\n         <div id=\"menu__dropdown-").concat(comment.id, "\" class=\"dropdown__box\"></div>\n         <i class=\"fas fa-ellipsis-h dropdown__trigger icon__comment-").concat(comment.id, "\"></i>\n      </div>\n      ");
    _this.comment.innerHTML = _this.html;
    if (!comment.img_attached) _this.comment.querySelector(".comment__img_attached").style.display = "none";
    _this.comments_container = _this.container.querySelector(".comments__comments");

    if (method == "append") {
      _this.comments_container.appendChild(_this.comment);
    } else {
      _this.comments_container.prepend(_this.comment);
    }

    _this.addLikesEv();

    if (options.dropdown) options.dropdown(comment);

    _this.addResponseListEv();

    if (comment.commented_post.author.id != _this.user.id && comment.comment_author.id != _this.user.id) {
      _this.comment.querySelector(".comment__menu").remove();
    }
  };

  this.addLikesEv = function () {
    _this.togglers = _this.comment.querySelectorAll(".toggle__likes");

    _this.togglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        if (options.onclickLikes) options.onclickLikes(e.target);
      });
    });
  };

  this.addResponseListEv = function () {
    _this.triggers = _this.comment.querySelectorAll(".trigger__modal");

    _this.triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        if (options.onclickCount) options.onclickCount(e.target);
      });
    });
  };

  this.previewImage = function () {
    _this.inpFile = _this.container.querySelector("#comment-input__comment-image");
    _this.previewImage = _this.container.querySelector("#comment-image-preview__image");
    _this.btnClear = _this.container.querySelector("#comment__image-clear");
    _this.previewContainer = _this.container.querySelector("#comment__image-preview");
    self.inpFile.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewImage.style.display = "block";
        self.previewContainer.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewImage.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
      } else {
        self.previewImage.style.display = null;
      }
    });
    self.btnClear.addEventListener("click", function () {
      self.inpFile.value = null;
      self.previewImage.style.display = null;
      self.previewContainer.style.display = null;
      self.file = null;
    });
  };

  this.init();
  return this;
}
function getComment(target) {
  var _this2 = this;

  this.prepareFetchGetComments = function () {
    _this2.id = _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](target, "box__comment").getAttribute("comment");
    _this2.fetch_body = new FormData();

    _this2.fetch_body.append("id", _this2.id);

    _this2.url = Routing.generate("get_comment");
  };

  this.fetchData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _this2.promise = fetch(_this2.url, {
              method: "POST",
              body: _this2.fetch_body,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            });
            return _context3.abrupt("return", _this2.promise);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this2.prepareFetchGetComments();

            _context4.next = 3;
            return _this2.fetchData();

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  this.init();
  return this.promise;
}
function RenderComment(options) {
  var self = this;

  self.renderComment = function (comment) {
    self.comment = document.createElement("div");
    self.comment.classList.add("box__comment");
    self.comment.setAttribute("comment", comment.id);
    self.html = "\n      <div class=\"overlay__comment\"></div>\n      <div class=\"comment__profile-img\">\n         <img src=\"".concat(comment.comment_author.avatar, "\" alt=\"\" width=\"40\" class=\"img__comment-profile\">\n      </div>\n\n      <div class=\"comment__body\">\n         <a class=\"comment__author\" href=\"\">").concat(comment.comment_author.firstname, "</a>\n         <div class=\"comment__text\">").concat(comment.body, "</div>\n         <div class=\"comment__img_attached\"> \n            <img ").concat(comment.img_attached ? "src=" + comment.img_attached : "none", " class=\"img__img-attached\" alt=\"\">\n         </div>\n      </div>\n\n      <div class=\"comment__footer\">\n\n         <div class=\"footer__row\"> \n            <div class=\"footer__counter\">\n               <i class=\"far fa-thumbs-up toggle__likes ").concat(comment.state == "liked" ? "state__active" : "", " ").concat(comment.state == "disliked" ? "state__disabled" : "", "\" state=\"").concat(comment.state ? comment.state : "neutral", "\"></i>\n               <span class=\"trigger__modal counter__likes\">(").concat(comment.likes, ")</span>\n            </div>\n\n            <div class=\"footer__counter\">\n               <i class=\"far fa-thumbs-down toggle__likes ").concat(comment.state == "disliked" ? "state__active" : "", " ").concat(comment.state == "liked" ? "state__disabled" : "", "\" state=\"").concat(comment.state ? comment.state : "neutral", "\"></i>\n               <span class=\"trigger__modal counter__dislikes\">(").concat(comment.dislikes, ")</span>\n            </div>\n         </div>\n\n         <div class=\"footer__row\"> \n            <div class=\"comment__createdAt\">").concat(_helpers__WEBPACK_IMPORTED_MODULE_1__["timeAgo"](comment.createdAt), "</div>\n         </div>\n\n      </div>\n\n      <div class=\"comment__menu\">\n         <div id=\"menu__dropdown-").concat(comment.id, "\" class=\"dropdown__box\"></div>\n         <i class=\"fas fa-ellipsis-h icon__comment-").concat(comment.id, "\"></i>\n      </div>\n      ");
    self.comment.innerHTML = self.html;
    if (!comment.img_attached) self.comment.querySelector(".comment__img_attached").style.display = "none";
    self.comments.prepend(self.comment);
    self.addLikesEv();
    if (options.dropdown) options.dropdown(comment);
    self.addResponseListEv();
  };

  self.addLikesEv = function () {
    self.togglers = self.comment.querySelectorAll(".toggle__likes");
    self.togglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        if (options.onclickLikes) options.onclickLikes(e.target);
      });
    });
  };

  self.addResponseListEv = function () {
    self.triggers = self.comment.querySelectorAll(".trigger__modal");
    self.triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        if (options.onclickCount) options.onclickCount(e.target);
      });
    });
  };

  self.init = function () {
    self.comments = document.querySelector(".comments__comments");
    self.comments.innerHTML = "";
    self.comment_data = options.response.comment_data;
    self.comment_data.forEach(function (comment) {
      self.renderComment(comment);
    });
  };

  self.init();
  return self;
}
function DeleteComment(response) {
  if (response.success) {
    document.querySelector("[comment = \"".concat(response.id, "\"]")).remove();
  }
}
function EditComment(response) {
  if (response.success) {
    var comment = document.querySelector("[comment = \"".concat(response.comment_data.id, "\"]"));
    var comment_text = comment.querySelector(".comment__text");
    comment_text.innerHTML = response.comment_data.body;
    var img_container = comment.querySelector(".comment__img_attached");

    if (response.comment_data.img_attached) {
      img_container.style = null;
      var img_attached = comment.querySelector(".img__img-attached");
      img_attached.setAttribute("src", response.comment_data.img_attached);
    } else {
      img_container.style.display = "none";
    }
  }
}

/***/ }),

/***/ "./assets/js/components/dropdown.js":
/*!******************************************!*\
  !*** ./assets/js/components/dropdown.js ***!
  \******************************************/
/*! exports provided: Icon, Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");

function Icon(options) {
  var self = this;

  self.render = function () {
    self.container = document.getElementById(options.id);
    self.container.innerHTML = self.html();
    self.panel = self.container.querySelector(".dropdown__panel");
    self.card = self.container.querySelector(".dropdown__card");
    self.items = self.container.querySelector(".card__items");

    if (options.item_overlay !== undefined) {
      self.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](self.container, options.item_overlay);
    }

    self.panel.style.display = "none";
    self.panel.style.visibility = "0";
    var html = "";
    options.data.forEach(function (item) {
      var icon_class = item[1],
          btn_text = item[0],
          btn_custom_class = item[2];
      html += self.html2(btn_custom_class, icon_class, btn_text);
    });
    self.items.innerHTML = html;
  };

  self.addEv = function () {
    self.trigger = document.querySelector(options.trigger);
    self.trigger.addEventListener("click", function (e) {
      if (self.overlay) {
        self.overlay.style = null;
      }

      e.target.classList.add("icon__active");
      e.stopPropagation();
      if (self.isVisible) self.hide();else self.show();
    });
    var buttons = self.container.querySelectorAll(".items__item");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        self.clicked(e.target);
      });
    });
  };

  self.addDropdown = function () {
    if (!window.dropdowns) window.dropdowns = {};
    window.dropdowns[options.id] = self;
  };

  self.addGetter = function () {
    window.getdd = function (elem) {
      var id = elem.closest(".dropdown__panel").parentElement.id;
      return window.dropdowns[id];
    };
  };

  self.show = function () {
    for (var dd in window.dropdowns) {
      window.dropdowns[dd].hide();
    }

    self.isVisible = true;
    self.card.style.transform = "translate(0px,0px)";
    _helpers__WEBPACK_IMPORTED_MODULE_0__["fadeIn"](self.panel);

    if (self.item_overlay) {
      self.item_overlay.style.display = "block";
      self.item_overlay.style.background = options.item_overlay_bg;
      if (!window.overlays) window.overlays = [];

      if (!window.overlays.includes(self.item_overlay)) {
        window.overlays.push(self.item_overlay);
      }
    }
  };

  self.hide = function () {
    if (!self.isVisible) return;
    self.trigger.classList.remove("icon__active");
    self.isVisible = false;
    self.card.style.transform = "translate(0px,-255px)";
    _helpers__WEBPACK_IMPORTED_MODULE_0__["fadeOut"](self.panel);
    if (self.item_overlay) self.item_overlay.style.display = "none";
    if (!window.overlays) window.overlays = [];

    if (window.overlays.includes(self.item_overlay)) {
      var index = window.overlays.indexOf(self.item_overlay);

      if (index !== -1) {
        window.overlays.splice(index, 1);
      }
    }
  };

  self.clicked = function (target) {
    self.hide();
    if (options.cb) options.cb(target);
  };

  self.html = function () {
    var html = "\n         <div class='dropdown__panel'>\n            <div class=\"dropdown__card\">\n               <div class=\"card__items\"></div>\n            </div>\n         </div>\n      ";
    return html;
  };

  self.html2 = function (btn_custom_class, icon_class, btn_text) {
    var html = "\n      <div class=\"items__item ".concat(btn_custom_class, "\">\n         <i class=\"").concat(icon_class, "\"></i>\n         <span>").concat(btn_text, "</span>\n      </div>");
    return html;
  };

  self.init = function () {
    self.render();
    self.addDropdown();
    self.addGetter();
    self.addEv();
  };

  self.init();
  return self;
}
function Dropdown(options) {
  var self = this;

  self.customStyle = function () {
    self.width = "200px";

    if (options.style) {
      self.width = options.style.width ? options.style.width : "250px";
    } else {
      self.width = "200px";
    }
  };

  self.render = function () {
    self.container = document.getElementById(options.id);
    var html = "\n         <div class='dropdown-simple'>\n             <div class='dropdown__value'></div>\n\t\t         <div class='dropdown__arrow'>\u25BE</div>\n\t\t         <div class='dropdown__panel'>\n\t\t          \t<div class='dropdown__items'></div>\n\t\t         </div>\n          </div>";
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
    options.data.forEach(function (elem) {
      var dd_item = document.createElement("div");
      dd_item.classList.add("dropdown__item");
      var dd_item_attr = options.attr ? options.attr : null;
      if (dd_item_attr && elem[1]) dd_item.setAttribute(options.attr, elem[1]);
      dd_item.setAttribute("onmousedown", "var self=getddv(this);self.clicked(this)");
      dd_item.innerHTML = elem[0];
      self.items.prepend(dd_item);
    });

    if (options.bottom_item) {
      var dd_item = document.createElement("div");
      dd_item.classList.add("dropdown__item", "item__bottom");
      dd_item.setAttribute("onmousedown", "var self=getddv(this);self.clicked(this)");

      var _html = "\n               <i class=\"fas fa-plus-circle\"></i>\n               <span>".concat(options.bottom_item, "</span>\n               ");

      dd_item.innerHTML = _html;
      self.items.appendChild(dd_item);
    }
  };

  self.addDropdown = function () {
    if (!window.dropdowns) window.dropdowns = {};
    window.dropdowns[options.id] = self;
  };

  self.addGetter = function () {
    window.getddv = function (elem) {
      var id = elem.closest(".dropdown-simple").parentElement.id;
      return window.dropdowns[id];
    };
  };

  self.clicked = function (elem) {
    if (elem.classList.contains("item__bottom")) {
      if (options.cb) options.cb(elem);
    } else {
      var newval = elem.innerHTML;
      self.value.innerHTML = newval;
      self.value.setAttribute(options.attr, elem.getAttribute(options.attr));
      if (options.cb) options.cb(elem);
    }

    self.hide();
  };

  self.addEv = function () {
    self.value.addEventListener("mousedown", function (e) {
      e.stopPropagation();
      if (self.isVisible) self.hide();else self.show();
    });
    document.addEventListener("mousedown", function (e) {
      e.stopPropagation();
      if (self.isVisible) self.hide();
    });
  };

  self.show = function () {
    for (var dd in window.dropdowns) {
      window.dropdowns[dd].hide();
    }

    self.isVisible = true;
    self.items.style.transform = "translate(0px,0px)";
    self.arrow.style.transform = "rotate(180deg)";
  };

  self.hide = function () {
    if (!self.isVisible) return;
    self.isVisible = false;
    self.items.style.transform = "translate(0px,-255px)";
    self.arrow.style.transform = "rotate(0deg)";
  };

  self.init = function () {
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
  if (!_helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](e.target, "dropdown__panel")) return;
  var elem = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](e.target, "dropdown__panel").parentElement;
  if (elem.contains(e.target) || e.target.classList.contains("dropdown__trigger")) return; // if (e.target.classList.contains("dropdown__trigger")) return;
  else {
      for (var dd in window.dropdowns) {
        window.dropdowns[dd].hide(dd);
      }
    }
}

/***/ }),

/***/ "./assets/js/components/modals/_comments_list.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/modals/_comments_list.js ***!
  \*******************************************************/
/*! exports provided: CommentsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsList", function() { return CommentsList; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function CommentsList(options) {
  var _this = this;

  var self = this;

  this.renderModalBody = function () {
    var html = "\n      <div class='overlay'></div>\n         <div class='modal__window ".concat(_this.style_class, "'>\n            <div class=\"overlay__modal-item\" id=\"").concat(options.modal_overlay, "\"></div>\n            <div class=\"modal__header\">\n               <h5 class=\"text__modal-header text__comment-count\">Comments (").concat(_this.response.comment_data.length, ")</h5>\n               <i class=\"fas fa-times btn__modal-close\"></i>\n            </div>\n            <div class=\"modal__body\">\n               <div class=\"comments__author-input\"></div>\n               <div class=\"comments__comments\"></div>\n            </div>\n         </div>\n     ");
    _this.container = document.getElementById(options.id);
    _this.container.innerHTML = html;
    _this.box = _this.container.querySelector(".modal__window");
    _this.list = _this.container.querySelector(".modal__body");
    _this.input = _this.container.querySelector(".comments__author-input");
    _this.comments = _this.container.querySelector(".comments__comments");
    _this.container.style = null;
    _this.container.style.display = "block";
    _this.container.style.opacity = 1;
    _this.user = options.getUser();
    /**
     * MAIN OVERLAY
     */

    if (options.secondary_overlay == undefined) {
      _this.overlay = _this.container.querySelector(".overlay");
      _this.overlay.style.display = "block";
    }
    /**
     * MODAL OVERLAY
     */


    if (options.secondary_overlay !== undefined) {
      _this.secondary_overlay = document.querySelector(options.secondary_overlay);
      _this.secondary_overlay.style.display = "block";
      _this.secondary_overlay.style.background = options.secondary_overlay_bg;
    }
    /**
     * ITEM OVERLAY
     */


    if (options.item_overlay !== undefined) {
      _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
      _this.item_overlay.style.display = "block";
      _this.item_overlay.style.background = options.item_overlay_bg; // this.item_overlay.style.zIndex = "999";
    }
  };

  this.prepareFetchGetComments = function () {
    _this.post_id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__post").getAttribute("post");
    _this.fetch_body = new FormData();

    _this.fetch_body.append("post_id", _this.post_id);

    _this.url = Routing.generate("get_comments");
  };

  this.prepareFetchPostComment = function (target) {
    _this.comment_text = target.value;
    _this.post_id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__post").getAttribute("post");
    _this.fetch_body = new FormData();

    _this.fetch_body.append("comment_text", _this.comment_text);

    _this.fetch_body.append("post_id", _this.post_id);

    if (_this.file) _this.fetch_body.append("image", _this.file);
    _this.url = Routing.generate("post_comment");
  };

  this.fetchData = function () {
    var promise = fetch(_this.url, {
      method: "POST",
      body: _this.fetch_body,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res;
    });
    return promise;
  };

  this.renderModalItem = function (comment, method) {
    _this.comment = document.createElement("div");

    _this.comment.classList.add("box__comment");

    _this.comment.setAttribute("comment", comment.id);

    _this.html = "\n      <div class=\"overlay__comment\"></div>\n      <div class=\"comment__profile-img\">\n         <img src=\"".concat(comment.comment_author.avatar, "\" alt=\"\" width=\"40\" class=\"img__comment-profile\">\n      </div>\n\n      <div class=\"comment__body\">\n         <a class=\"comment__author\" href=\"").concat(Routing.generate("profile_page", {
      profile: comment.comment_author.id
    }), "\">").concat(comment.comment_author.firstname, "</a>\n         <div class=\"comment__text\">").concat(comment.body, "</div>\n         <div class=\"comment__img_attached\"> \n            <img ").concat(comment.img_attached ? "src=" + comment.img_attached : "none", " class=\"img__img-attached\" alt=\"\">\n         </div>\n      </div>\n\n      <div class=\"comment__footer\">\n\n         <div class=\"footer__row\"> \n            <div class=\"footer__counter\">\n               <i class=\"far fa-thumbs-up toggle__likes ").concat(comment.state == "liked" ? "state__active" : "", " ").concat(comment.state == "disliked" ? "state__disabled" : "", "\" state=\"").concat(comment.state ? comment.state : "neutral", "\"></i>\n               <span class=\"trigger__modal counter__likes\">(").concat(comment.likes, ")</span>\n            </div>\n\n            <div class=\"footer__counter\">\n               <i class=\"far fa-thumbs-down toggle__likes ").concat(comment.state == "disliked" ? "state__active" : "", " ").concat(comment.state == "liked" ? "state__disabled" : "", "\" state=\"").concat(comment.state ? comment.state : "neutral", "\"></i>\n               <span class=\"trigger__modal counter__dislikes\">(").concat(comment.dislikes, ")</span>\n            </div>\n         </div>\n\n         <div class=\"footer__row\"> \n            <div class=\"comment__createdAt\">").concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["timeAgo"](comment.createdAt), "</div>\n         </div>\n\n      </div>\n\n      <div class=\"comment__menu\">\n         <div class=\"dropdown__box\" id=\"").concat(options.dropdown_container, "-").concat(comment.id, "\"></div>\n         <i class=\"fas fa-ellipsis-h dropdown__trigger\" id=\"").concat(options.dropdown_trigger, "-").concat(comment.id, "\"></i>\n      </div>\n      ");
    _this.comment.innerHTML = _this.html;
    if (!comment.img_attached) _this.comment.querySelector(".comment__img_attached").style.display = "none";

    _this.comments.appendChild(_this.comment);

    if (method == "append") {
      _this.comments.appendChild(_this.comment);
    } else {
      _this.comments.prepend(_this.comment);
    }

    _this.addLikesEv();

    if (options.dropdown) options.dropdown(comment);

    _this.addResponseListEv();

    if (comment.commented_post.author.id != _this.user.id && comment.comment_author.id != _this.user.id) {
      _this.comment.querySelector(".comment__menu").remove();
    }
  };

  this.renderInput = function () {
    var default_img = "/img/defaults/profile.png";
    var avatar = _this.response.profile_data ? _this.response.profile_data.avatar : default_img;
    var lock = _this.user.logged ? "" : "disabled";
    var placeholder = _this.user.logged ? "Write a comment..." : "To write a comment please sign in";
    _this.html = "\n      <div class=\"box__row\">\n         <div class=\"comment__profile-img\">     \n            <img src=\"".concat(avatar, "\" alt=\"\" width=\"40\" class=\"img__comment-profile\">\n         </div>\n      </div>\n    \n      <div class=\"box__row\">\n         <div class=\"box__input\">     \n            <textarea name=\"\" placeholder=\"").concat(placeholder, "\" class=\"input__comment\" ").concat(lock, "></textarea>\n            <input type=\"file\" id=\"input__comment-image\" class=\"input__comment-image\">\n            <label for=\"input__comment-image\" class=\"label__file\">\n               <i class=\"far fa-images\"></i>\n            </label>   \n         </div>\n      </div>\n   \n      <div class=\"box__row\">\n         <div class=\"comment__image-preview\">\n            <img src=\"\" alt=\"Image Preview\" class=\"image-preview__image\">\n            <div class=\"comment__image-clear\">\n               <i class=\"fas fa-times\"></i>\n            </div>\n         </div>\n      </div>\n\n      <div class=\"box__row\">\n         <div class=\"text__enter\">\n            <span>Press Enter to post.</span>\n         </div>\n      </div>\n      ");
    _this.input.innerHTML = _this.html;
  };

  this.addInputEv = function () {
    _this.input = _this.container.querySelector(".input__comment");

    _this.input.addEventListener("keydown", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var counters;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.keyCode === 13 && e.target.value.trim() != "")) {
                  _context.next = 16;
                  break;
                }

                e.preventDefault();
                /**
                 * CREATE AND RENDER SINGLE COMMENT
                 */

                _this.prepareFetchPostComment(e.target);

                _context.next = 5;
                return _this.fetchData();

              case 5:
                _this.data = _context.sent;

                _this.renderModalItem(_this.data, "prepend");

                counters = document.querySelectorAll(".text__comment-count");
                counters.forEach(function (counter) {
                  counter.innerHTML = "Comments (".concat(_this.data.count, ")");
                }); // this.container.querySelector(".text__comment-count").innerHTML = `Comments (${this.data.count})`;

                _this.posts = document.querySelectorAll("[post=\"".concat(_this.post_id, "\"]"));

                if (_this.posts) {
                  _this.posts.forEach(function (post) {
                    if (post.querySelector(".trigger__comments-modal")) {
                      post.querySelector(".trigger__comments-modal").innerHTML = "(".concat(_this.data.count, ")");
                    }
                  });
                }

                e.target.value = "";
                /**
                 * CLEAR IMAGE
                 */

                self.file = null;
                _this.inpFile.value = null;
                _this.previewImage.style.display = null;
                _this.previewContainer.style.display = null;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  this.addLikesEv = function () {
    _this.togglers = _this.comment.querySelectorAll(".toggle__likes");

    _this.togglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        if (options.onclickLikes) options.onclickLikes(e.target);
      });
    });
  };

  this.addResponseListEv = function () {
    _this.triggers = _this.comment.querySelectorAll(".trigger__modal");

    _this.triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        if (options.onclickCount) options.onclickCount(e.target);
      });
    });
  };

  this.previewImage = function () {
    _this.inpFile = _this.container.querySelector(".input__comment-image");
    _this.previewImage = _this.container.querySelector(".image-preview__image");
    _this.btnClear = _this.container.querySelector(".comment__image-clear");
    _this.previewContainer = _this.container.querySelector(".comment__image-preview");
    self.inpFile.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewImage.style.display = "block";
        self.previewContainer.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewImage.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
      } else {
        self.previewImage.style.display = null;
      }
    });
    self.btnClear.addEventListener("click", function () {
      self.file = null;
      self.inpFile.value = null;
      self.previewImage.style.display = null;
      self.previewContainer.style.display = null;
    });
  };

  this.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      _this.container.innerHTML = "";
    }

    if (_this.secondary_overlay) _this.secondary_overlay.style.display = null;
    if (_this.item_overlay) _this.item_overlay.style.display = null;
  };

  this.addEv = function () {
    var btn_close = _this.container.querySelector(".btn__modal-close");

    btn_close.addEventListener("click", _this.hideModal);
  };

  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _this.prepareFetchGetComments();

            _context2.next = 3;
            return _this.fetchData();

          case 3:
            _this.response = _context2.sent;
            _this.style_class = options.style_class;
            _this.cb = options.cb;

            _this.renderModalBody();

            _this.renderInput();

            _this.response.comment_data.forEach(function (comment) {
              _this.renderModalItem(comment, "append");
            });

            _this.addInputEv();

            _this.previewImage();

            _this.addEv();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  this.init();
  return this;
}

/***/ }),

/***/ "./assets/js/components/modals/_create_folder.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/modals/_create_folder.js ***!
  \*******************************************************/
/*! exports provided: CreateFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFolder", function() { return CreateFolder; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function CreateFolder(options) {
  var _this = this;

  this.renderModal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this.container = document.getElementById(options.id);
            _this.container.innerHTML = _this.body();
            _context.next = 4;
            return _this.getCSRF();

          case 4:
            _this.token = _context.sent;
            _this.csrf = _this.container.querySelector(".input__csrf");
            _this.csrf.value = _this.token.csrf;
            _this.container.style = null;
            _this.container.style.position = "absolute";
            _this.container.style.display = "block";
            _this.container.style.opacity = 1;
            /**
             * MAIN OVERLAY
             */

            if (options.secondary_overlay == undefined) {
              _this.overlay = _this.container.querySelector(".overlay");
              _this.overlay.style.display = "block";
            }
            /**
             * MODAL OVERLAY
             */


            if (options.secondary_overlay !== undefined) {
              _this.secondary_overlay = document.querySelector(options.secondary_overlay);
              _this.secondary_overlay.style.display = "block";
              _this.secondary_overlay.style.background = options.secondary_overlay_bg;
            }
            /**
             * ITEM OVERLAY
             */


            if (options.item_overlay !== undefined) {
              _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
              _this.item_overlay.style.display = "block";
              _this.item_overlay.style.background = options.item_overlay_bg; // this.item_overlay.style.zIndex = "999";
            }

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  this.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      _this.container.style.display = "none";
      _this.container.innerHTML = "";
    }

    if (_this.secondary_overlay) _this.secondary_overlay.style.display = null;
  };

  this.addEv = function () {
    _this.btn_submit = _this.container.querySelector(".btn__modal-submit");

    _this.btn_submit.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.createFolder();

            case 2:
              _this.response = _context2.sent;

              if (_this.response.success) {
                if (options.cb) options.cb();

                _this.hideModal();
              } else {
                _this.displayError();
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.btn_cancel = _this.container.querySelector(".btn__modal-cancel");

    _this.btn_cancel.addEventListener("click", _this.hideModal);

    _this.btn_close = _this.container.querySelector(".btn__modal-close");

    _this.btn_close.addEventListener("click", _this.hideModal);
  };

  this.createFolder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _this.form = _this.container.querySelector(".form__create-folder");
            _this.data = new FormData(_this.form);
            _this.url = Routing.generate("create_folder");
            return _context3.abrupt("return", fetch(_this.url, {
              method: "POST",
              body: _this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  this.getCSRF = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this.data = new FormData();

            _this.data.append("token_name", "folder");

            _this.url = Routing.generate("form_folder");
            return _context4.abrupt("return", fetch(_this.url, {
              method: "POST",
              body: _this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  this.displayError = function () {
    _this.error = _this.container.querySelector(".text__error-message");
    _this.error.innerHTML = "";

    _this.response.errors.forEach(function (error) {
      _this.error.innerHTML += error.message;
    });

    _this.error.style.display = "block";
  };

  this.body = function () {
    var html = "\n      <div class='overlay'></div>\n         <div class='modal__window ".concat(options.style_class, "' id=\"").concat(options.modal_overlay, "\">\n            <div class=\"modal__header\">\n               <h5 class=\"text__modal-header\">Create Folder</h5>\n               <i class=\"fas fa-times btn__modal-close\"></i>\n            </div>\n            <div class=\"modal__body\">\n\n            <form action=\"\" name=\"folder\" method=\"POST\" class=\"form__create-folder\">\n               <input type=\"text\" id=\"input__folder-name\" placeholder=\"Folder Name\" name=\"folder[name] autocomplete=\"off\">\n               <div class=\"text__error-message\"></div>\n               <input type=\"hidden\" name=\"folder[_token]\" value=\"\" class=\"input__csrf\">\n            </form>\n\n            </div>\n               <div class=\"modal__footer\">     \n               <button class=\"btn__modal-submit\">Create</button>\n               <button class=\"btn__modal-cancel\">Cancel</button>\n            </div>\n      </div>");
    return html;
  };

  this.init = function () {
    this.renderModal();
    this.addEv();
  };

  this.init();
  return this;
}

/***/ }),

/***/ "./assets/js/components/modals/_create_post.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/modals/_create_post.js ***!
  \*****************************************************/
/*! exports provided: CreatePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePost", function() { return CreatePost; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function CreatePost(options) {
  var _this = this;

  var self = this;
  self.renderModal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self.cb = options.cb;
            self.data = options.data;
            self.container = document.getElementById(options.id);
            self.container.innerHTML = _this.html();
            self.csrf = self.container.querySelector(".input__csrf");
            _context.next = 7;
            return self.getCSRF();

          case 7:
            self.token = _context.sent;
            self.csrf.value = self.token.token;
            self.container.style = null;
            self.container.style.display = "block";
            self.container.style.opacity = 1;
            self.error_fields = self.container.querySelectorAll(".error-field__error-msg");
            /**
             * MAIN OVERLAY
             */

            if (options.secondary_overlay == undefined) {
              _this.overlay = _this.container.querySelector(".overlay");
              _this.overlay.style.display = "block";
            }
            /**
             * MODAL OVERLAY
             */


            if (options.secondary_overlay !== undefined) {
              _this.secondary_overlay = document.querySelector(options.secondary_overlay);
              _this.secondary_overlay.style.display = "block";
              _this.secondary_overlay.style.background = options.secondary_overlay_bg;
            }
            /**
             * ITEM OVERLAY
             */


            if (options.item_overlay !== undefined) {
              _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
              _this.item_overlay.style.display = "block";
              _this.item_overlay.style.background = options.item_overlay_bg; // this.item_overlay.style.zIndex = "999";
            }
            /**
             * DEPENDANCIES DROPDOWN AND AUTOCOMPLETE CREATE
             */


            if (options.renderdropdown) options.renderdropdown();
            if (options.renderautocomplete) options.renderautocomplete();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  self.addEv = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var btn_submit, btn_cancel, btn_close, tag_input;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            btn_submit = self.container.querySelector(".btn__modal-submit");
            btn_submit.addEventListener("click", /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        _context2.next = 3;
                        return self.createPost(self.prepareFetch());

                      case 3:
                        self.response = _context2.sent;

                        if (self.response.success) {
                          options.onsubmit();
                          self.hideModal();
                        } else {
                          self.hideErrors();
                          self.displayErrors();
                        }

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }());
            btn_cancel = self.container.querySelector(".btn__modal-cancel");
            btn_cancel.addEventListener("click", function (e) {
              self.hideModal();
            });
            btn_close = self.container.querySelector(".btn__modal-close");
            btn_close.addEventListener("click", self.hideModal);
            tag_input = self.container.querySelector("#input__tag");
            tag_input.addEventListener("keyup", function (e) {
              if (e.key == "Enter") {
                /**
                 * DEPENDANCY TAGS CREATE
                 */
                self.container.querySelector("#error-field__tags").innerHTML = "";

                if (e.target.value.trim().length > 0) {
                  options.ontagcreate(e.target.value);
                }

                e.target.value = "";
                document.querySelector("#tags__match").innerHTML = "";
              }
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  self.previewFrontCover = function () {
    self.inputFront = self.container.querySelector(".input__front-cover");
    self.previewFront = self.container.querySelector(".front-cover-preview__image");
    self.previewFrontText = self.container.querySelector(".front-cover-preview__text");
    self.btnFrontClear = self.container.querySelector(".front-cover__btn-clear");
    self.inputFront.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewFrontText.style.display = "none";
        self.previewFront.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewFront.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
      } else {
        self.previewFrontText.style.display = null;
        self.previewFront.style.display = null;
      }
    });
    self.btnFrontClear.addEventListener("click", function () {
      self.inputFront.value = null;
      self.previewFrontText.style.display = null;
      self.previewFront.style.display = null;
    });
  };

  self.previewHeaderCover = function () {
    self.inputHeader = self.container.querySelector(".input__header-cover");
    self.previewHeader = self.container.querySelector(".header-cover-preview__image");
    self.previewHeaderText = self.container.querySelector(".header-cover-preview__text");
    self.btnHeaderClear = self.container.querySelector(".header-cover__btn-clear");
    self.inputHeader.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewHeaderText.style.display = "none";
        self.previewHeader.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewHeader.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
      } else {
        self.previewHeaderText.style.display = null;
        self.previewHeader.style.display = null;
      }
    });
    self.btnHeaderClear.addEventListener("click", function () {
      self.inputHeader.value = null;
      self.previewHeaderText.style.display = null;
      self.previewHeader.style.display = null;
    });
  };

  self.getCSRF = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this.data = new FormData();

            _this.data.append("token_name", "post");

            _this.url = Routing.generate("get_token");
            return _context4.abrupt("return", fetch(_this.url, {
              method: "POST",
              body: _this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  self.prepareFetch = function () {
    var form = document.querySelector(".form__post-type");
    var data = new FormData(form);
    var folder = self.container.querySelector(".dropdown__value").getAttribute("folder");
    data.append("post[folder]", folder);
    var tags_selected = self.container.querySelector(".tags__selected");
    var tags = tags_selected.querySelectorAll(".tag");
    var tag_names = [];
    tags.forEach(function (tag) {
      var tag_name = tag.querySelector(".tag__name").innerHTML;
      tag_names.push(tag_name);
    });
    data.append("post[tags]", tag_names); // data.append("post[id]", null);

    return data;
  };

  self.createPost = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.url = Routing.generate("create_post");
              return _context5.abrupt("return", fetch(_this.url, {
                method: "POST",
                body: data,
                headers: {
                  "X-Requested-With": "XMLHttpRequest"
                }
              }).then(function (res) {
                return res.json();
              }).then(function (res) {
                return res;
              }));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.innerHTML = "";
    }

    if (_this.secondary_overlay) _this.secondary_overlay.style.display = null;
  };

  self.hideErrors = function () {
    self.error_fields.forEach(function (error) {
      error.innerHTML = "";
      error.style.display = "block";
    });
  };

  self.displayErrors = function () {
    var errors = [];
    self.response.errors.forEach(function (error) {
      var str_1 = error.cause.propertyPath.replace("data", "").replace(".", "");
      var cause = str_1.replace(/(^.*\[|\].*$)/g, "");
      var e = {
        cause: cause,
        message: error.message
      };
      errors.push(e);
    });
    errors.forEach(function (error) {
      if (self.container.querySelector("#error-field__".concat(error.cause))) {
        self.container.querySelector("#error-field__".concat(error.cause)).innerHTML = "\n            <div class=\"error-text__error-msg\">\n             ".concat(error.message, "\n            </div>");
      }
    });
  };

  self.html = function () {
    var html = "\n   <div class='overlay'></div>\n   <div class='modal__window ".concat(options.style_class, "'>\n      <div class='overlay__modal-item' id=\"").concat(options.modal_overlay, "\"></div>\n      <div class=\"modal__header\">\n         <h5 class=\"text__modal-header\">Create Post</h5>\n         <i class=\"fas fa-times btn__modal-close\"></i>\n      </div>\n\n      <div class=\"modal__body\">\n      <form class=\"form__post-type\" name=\"post\">\n\n      <div class=\"form__row\">\n         <div class=\"input-group__front-cover\">\n            <div class=\"front-cover__label\">Front Cover</div>\n            <label for=\"input__front-cover\" class=\"front-cover__btn-upload\">\n            <i class=\"fas fa-image\"></i>\n            </label>\n            <div class=\"front-cover__btn-clear\">\n            <i class=\"fas fa-times\"></i>\n         </div>\n         <div class=\"front-cover__cover-preview\">\n            <img src=\"\" alt=\"Cover Preview\" class=\"front-cover-preview__image\">\n            <span class=\"front-cover-preview__text\">Preview Image</span>\n            </div>\n            <input type=\"file\" class=\"input-group__input input__front-cover\" id=\"input__front-cover\" name=\"post[front_cover]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__front_cover\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\">\n         <div class=\"input-group__header-cover\">\n            <div class=\"header-cover__label\">Header Cover</div>\n            <label for=\"input__header-cover\" class=\"header-cover__btn-upload\">\n            <i class=\"fas fa-image\"></i>\n            </label>\n            <div class=\"header-cover__btn-clear\">\n            <i class=\"fas fa-times\"></i>\n         </div>\n         <div class=\"header-cover__cover-preview\">\n            <img src=\"\" alt=\"Cover Preview\" class=\"header-cover-preview__image\">\n            <span class=\"header-cover-preview__text\">Preview Image</span>\n            </div>\n            <input type=\"file\" class=\"input-group__input input__header-cover\" id=\"input__header-cover\" name=\"post[header_cover]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__header_cover\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group__tags\">\n            <div class=\"tags__create\">\n            <input id=\"input__tag\" autocomplete=\"off\"> \n            </div>\n            <div class=\"tags__selected\" name=\"post[tags]\">\n               <div class=\"error-field__error-msg\" id=\"error-field__tags\"></div>\n            </div>  \n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group\">\n            <label for=\"folder\">Folder</label>\n            <div class=\"input__folder\" id=\"input__folder\" name=\"post[folder]\"></div>\n            <div class=\"error-field__error-msg\" id=\"error-field__folder\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" class=\"input-group__input input__title\" name=\"post[title]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__title\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group\">\n            <label for=\"body\">Text</label>\n            <textarea name=\"post[body]\" cols=\"30\" rows=\"10\" class=\"input-group__input input__text\" id=\"input__text\"></textarea>\n            <div class=\"error-field__error-msg\" id=\"error-field__body\"></div>\n         </div>\n      </div>\n\n      <input type=\"hidden\" name=\"post[_token]\" value=\"\" class=\"input__csrf\">\n   </form>\n\n   </div>\n   <div class=\"modal__footer\">     \n      <button class=\"btn__modal-submit\">Create Post</button>\n      <button class=\"btn__modal-cancel\">Cancel</button>\n   </div>\n   </div>");
    return html;
  };

  self.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return self.renderModal();

          case 2:
            self.addEv();
            self.previewFrontCover();
            self.previewHeaderCover();

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  self.init();
  return self;
}

/***/ }),

/***/ "./assets/js/components/modals/_delete_comment.js":
/*!********************************************************!*\
  !*** ./assets/js/components/modals/_delete_comment.js ***!
  \********************************************************/
/*! exports provided: DeleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComment", function() { return DeleteComment; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function DeleteComment(options) {
  var _this = this;

  var self = this;

  self.renderModal = function () {
    self.container = document.getElementById(options.id);
    self.container.innerHTML = _this.html();
    self.container.style = null;
    self.container.style.display = "block";
    self.container.style.opacity = 1;
    self.modal_window = self.container.querySelector(".modal__window");
    /**
     * MAIN OVERLAY
     */

    if (options.secondary_overlay == undefined) {
      self.overlay = self.container.querySelector(".overlay");
      self.overlay.style.display = "block";
    }
    /**
     * MODAL OVERLAY
     */


    if (options.secondary_overlay !== undefined) {
      self.secondary_overlay = document.querySelector(options.secondary_overlay);
      self.secondary_overlay.style.display = "block";
      self.secondary_overlay.style.background = options.secondary_overlay_bg;
    }
    /**
     * ITEM OVERLAY
     */


    if (options.item_overlay !== undefined) {
      self.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
      self.item_overlay.style.display = "block";
      self.item_overlay.style.background = options.item_overlay_bg; // self.item_overlay.style.zIndex = "999";
    }
  };

  self.addEv = function () {
    var btn_submit = self.container.querySelector(".btn__modal-submit");
    btn_submit.addEventListener("click", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self.prepareFetch();
                _context.next = 3;
                return self.fetchData();

              case 3:
                self.response = _context.sent;
                self.updateDOM();
                if (options.onsubmit) options.onsubmit(self.response);
                self.hideModal();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    var btn_cancel = self.container.querySelector(".btn__modal-cancel");
    btn_cancel.addEventListener("click", function (e) {
      self.hideModal();
    });
    var btn_close = self.container.querySelector(".btn__modal-close");
    btn_close.addEventListener("click", self.hideModal);
  };

  self.prepareFetch = function () {
    self.id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__comment").getAttribute("comment");
    self.url = Routing.generate("delete_comment");
    self.fetch_body = new FormData();
    self.fetch_body.append("id", self.id);
  };

  self.fetchData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self.promise = fetch(self.url, {
              method: "POST",
              body: self.fetch_body,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            });
            return _context2.abrupt("return", _this.promise);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  self.updateDOM = function () {
    if (self.response.success) {
      self.comments = document.querySelectorAll("[comment = \"".concat(self.response.id, "\"]"));
      self.comments.forEach(function (comment) {
        comment.remove();
      });
    }

    document.querySelector(".text__comment-count").innerHTML = "Comments (".concat(self.response.count, ")");
    self.posts = document.querySelectorAll("[post=\"".concat(self.response.post_id, "\"]"));

    if (self.posts) {
      self.posts.forEach(function (post) {
        if (post.querySelector(".trigger__comments-modal")) {
          post.querySelector(".trigger__comments-modal").innerHTML = "(".concat(self.response.count, ")");
        }
      });
    }
  };

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.style.display = "none";
      self.container.innerHTML = "";
    }

    if (self.secondary_overlay) self.secondary_overlay.style.display = null;
    if (self.item_overlay) self.item_overlay.style.display = null;
  };

  self.html = function () {
    var html = "\n      <div class='overlay'></div>\n            <div class='modal__window ".concat(options.style_class, "' id=\"").concat(options.modal_overlay, "\">\n               <div class=\"modal__header\">\n                  <h5 class=\"text__modal-header\">Delete Comment</h5>\n                  <i class=\"fas fa-times btn__modal-close\"></i>\n               </div>\n               <div class=\"modal__body\">\n                  <p class=\"body__text\">This will remove comment</p>\n               </div>\n               <div class=\"modal__footer\">     \n                  <button class=\"btn__modal-submit\">Delete</button>\n                  <button class=\"btn__modal-cancel\">Cancel</button>\n               </div>\n         </div>");
    return html;
  };

  self.init = function () {
    self.renderModal();
    self.addEv();
  };

  self.init();
  return self;
}

/***/ }),

/***/ "./assets/js/components/modals/_delete_folder.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/modals/_delete_folder.js ***!
  \*******************************************************/
/*! exports provided: DeleteFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFolder", function() { return DeleteFolder; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function DeleteFolder(options) {
  var _this = this;

  this.renderModal = function () {
    _this.cb = options.cb;
    _this.container = document.getElementById(options.id);
    _this.container.innerHTML = _this.html(options.style_class);
    _this.modal_window = _this.container.querySelector(".modal__window");
    _this.container.style = null;
    _this.container.style.display = "block";
    _this.container.style.opacity = 1;
    /**
     * MAIN OVERLAY
     */

    if (options.secondary_overlay == undefined) {
      _this.overlay = _this.container.querySelector(".overlay");
      _this.overlay.style.display = "block";
    }
    /**
     * MODAL OVERLAY
     */


    if (options.secondary_overlay !== undefined) {
      _this.secondary_overlay = document.querySelector(options.secondary_overlay);
      _this.secondary_overlay.style.display = "block";
      _this.secondary_overlay.style.background = options.secondary_overlay_bg;
    }
    /**
     * ITEM OVERLAY
     */


    if (options.item_overlay !== undefined) {
      _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
      _this.item_overlay.style.display = "block";
      _this.item_overlay.style.background = options.item_overlay_bg; // this.item_overlay.style.zIndex = "999";
    }
  };

  this.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      _this.container.style.display = "none";
      _this.container.innerHTML = "";
    }

    if (_this.secondary_overlay) _this.secondary_overlay.style.display = null;
    if (_this.item_overlay) _this.item_overlay.style.display = null;
  };

  this.fetchData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url, fetch_body;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = Routing.generate("get_folder");
            fetch_body = new FormData();
            fetch_body.append("folder_id", options.folder_id);
            return _context.abrupt("return", fetch(url, {
              method: "POST",
              body: fetch_body,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  this.addEv = function () {
    var btn_submit = _this.container.querySelector(".btn__modal-submit");

    btn_submit.addEventListener("click", function (e) {
      if (_this.cb) _this.cb(e.target);

      _this.hideModal();
    });

    var btn_cancel = _this.container.querySelector(".btn__modal-cancel");

    btn_cancel.addEventListener("click", function (e) {
      _this.hideModal();
    });

    var btn_close = _this.container.querySelector(".btn__modal-close");

    btn_close.addEventListener("click", _this.hideModal);
  };

  this.html = function (classname) {
    if (_this.data.posts > 0 && _this.data.comments > 0) {
      var post_singularity = _this.data.posts > 1 ? "posts" : "post";
      var comment_singularity = _this.data.comments > 1 ? "comments" : "comment";
      _this.warning = "(".concat(_this.data.posts, " ").concat(post_singularity, " and ").concat(_this.data.comments, " ").concat(comment_singularity, ")");
    } else if (_this.data.posts > 0) {
      var _post_singularity = _this.data.posts > 1 ? "posts" : "post";

      _this.warning = "(".concat(_this.data.posts, " ").concat(_post_singularity, ")");
    } else if (_this.data.comments > 0) {
      var _comment_singularity = _this.data.comments > 1 ? "comments" : "comment";

      _this.warning = "(".concat(_this.data.comments, " ").concat(_comment_singularity, ")");
    } else {
      _this.warning = "";
    }

    var html = "\n      <div class='overlay'></div>\n            <div class='modal__window ".concat(classname, "'>\n               <div class=\"modal__header\">\n                  <h5 class=\"text__modal-header\">Delete Folder</h5>\n                  <i class=\"fas fa-times btn__modal-close\"></i>\n               </div>\n               <div class=\"modal__body\">\n                  <p class=\"body__text\">This will remove folder and all related data ").concat(_this.warning, "</p>\n               </div>\n               <div class=\"modal__footer\">     \n                  <button class=\"btn__modal-submit\">Delete</button>\n                  <button class=\"btn__modal-cancel\">Cancel</button>\n               </div>\n         </div>");
    return html;
  };

  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.fetchData();

          case 2:
            _this.data = _context2.sent;

            _this.renderModal();

            _this.addEv();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  this.init();
  return this;
}

/***/ }),

/***/ "./assets/js/components/modals/_delete_post.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/modals/_delete_post.js ***!
  \*****************************************************/
/*! exports provided: DeletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function DeletePost(options) {
  var _this = this;

  var self = this;

  self.renderModal = function () {
    self.container = document.getElementById(options.id);
    self.container.innerHTML = self.html();
    self.container.style = null;
    self.container.style.display = "block";
    self.container.style.opacity = 1;
    self.modal_window = self.container.querySelector(".modal__window");
    /**
     * MAIN OVERLAY
     */

    if (options.secondary_overlay == undefined) {
      self.overlay = self.container.querySelector(".overlay");
      self.overlay.style.display = "block";
    }
    /**
     * MODAL OVERLAY
     */


    if (options.secondary_overlay !== undefined) {
      self.secondary_overlay = document.querySelector(options.secondary_overlay);
      self.secondary_overlay.style.display = "block";
      self.secondary_overlay.style.background = options.secondary_overlay_bg;
    }
    /**
     * ITEM OVERLAY
     */


    if (options.item_overlay !== undefined) {
      self.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
      self.item_overlay.style.display = "block";
      self.item_overlay.style.background = options.item_overlay_bg; // self.item_overlay.style.zIndex = "999";
    }
  };

  self.addEv = function () {
    var btn_submit = self.container.querySelector(".btn__modal-submit");
    btn_submit.addEventListener("click", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self.prepareFetch();
                _context.next = 3;
                return self.fetchData();

              case 3:
                self.response = _context.sent;
                if (options.onsubmit) options.onsubmit(self.response);
                self.hideModal();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    var btn_cancel = self.container.querySelector(".btn__modal-cancel");
    btn_cancel.addEventListener("click", function (e) {
      self.hideModal();
    });
    var btn_close = self.container.querySelector(".btn__modal-close");
    btn_close.addEventListener("click", self.hideModal);
  };

  self.prepareFetch = function () {
    self.id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__post").getAttribute("post");
    self.url = Routing.generate("delete_post");
    self.fetch_body = new FormData();
    self.fetch_body.append("id", self.id);
  };

  self.fetchData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            self.promise = fetch(self.url, {
              method: "POST",
              body: self.fetch_body,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            });
            return _context2.abrupt("return", _this.promise);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.style.display = "none";
      self.container.innerHTML = "";
    }

    if (self.secondary_overlay) self.secondary_overlay.style.display = null;
    if (self.item_overlay) self.item_overlay.style.display = null;
  };

  self.html = function () {
    var html = "\n         <div class='overlay'></div>\n               <div class='modal__window ".concat(options.style_class, "'>\n                  <div class=\"modal__header\">\n                     <h5 class=\"text__modal-header\">Delete Post</h5>\n                     <i class=\"fas fa-times btn__modal-close\"></i>\n                  </div>\n                  <div class=\"modal__body\">\n                     <p class=\"body__text\">This will remove post and all related data</p>\n                  </div>\n                  <div class=\"modal__footer\">     \n                     <button class=\"btn__modal-submit\">Delete</button>\n                     <button class=\"btn__modal-cancel\">Cancel</button>\n                  </div>\n            </div>");
    return html;
  };

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.style.display = "none";
      self.container.innerHTML = "";
    }

    if (self.secondary_overlay) self.secondary_overlay.style.display = null;
    if (self.item_overlay) self.item_overlay.style.display = null;
  };

  self.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self.renderModal();
            self.addEv();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  self.init();
  return self;
}

/***/ }),

/***/ "./assets/js/components/modals/_edit_comment.js":
/*!******************************************************!*\
  !*** ./assets/js/components/modals/_edit_comment.js ***!
  \******************************************************/
/*! exports provided: EditComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComment", function() { return EditComment; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function EditComment(options) {
  var self = this;
  self.renderModal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return self.getData();

          case 2:
            self.data = _context.sent;
            self.container = document.getElementById(options.id);
            self.container.innerHTML = self.html();
            self.container.style = null;
            self.container.style.display = "block";
            self.container.style.opacity = 1;
            /**
             * MAIN OVERLAY
             */

            if (options.secondary_overlay == undefined) {
              self.overlay = self.container.querySelector(".overlay");
              self.overlay.style.display = "block";
            }
            /**
             * MODAL OVERLAY
             */


            if (options.secondary_overlay !== undefined) {
              self.secondary_overlay = document.querySelector(options.secondary_overlay);
              self.secondary_overlay.style.display = "block";
              self.secondary_overlay.style.background = options.secondary_overlay_bg;
            }
            /**
             * ITEM OVERLAY
             */


            if (options.item_overlay !== undefined) {
              self.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
              self.item_overlay.style.display = "block";
              self.item_overlay.style.background = options.item_overlay_bg; // self.item_overlay.style.zIndex = "999";
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  self.previewImage = function () {
    self.img_attached = false;
    self.inpFile = self.container.querySelector(".input__comment-img");
    self.previewImage = self.container.querySelector(".preview__img");
    self.previewText = self.container.querySelector(".preview__text");
    self.btnClear = self.container.querySelector(".img-attached__btn-clear");
    self.inpFile.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewText.style.display = "none";
        self.previewImage.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewImage.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
        self.img_attached = true;
      } else {
        self.previewText.style.display = null;
        self.previewImage.style.display = null;
        self.img_attached = false;
      }
    });
    self.btnClear.addEventListener("click", function () {
      self.inpFile.value = null;
      self.previewText.style.display = null;
      self.previewImage.style.display = null;
      self.img_attached = false;
      self.remove_img = true;
    });
  };

  self.addEv = function () {
    var btn_submit = self.container.querySelector(".btn__modal-submit");
    btn_submit.addEventListener("click", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                self.prepareFetch();
                _context2.next = 4;
                return self.fetchData();

              case 4:
                self.response = _context2.sent;
                self.updateDOM();
                if (options.onsubmit) options.onsubmit(self.response);
                self.hideModal();

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    var btn_cancel = self.container.querySelector(".btn__modal-cancel");
    btn_cancel.addEventListener("click", function (e) {
      self.hideModal();
    });
    var btn_close = self.container.querySelector(".btn__modal-close");
    btn_close.addEventListener("click", self.hideModal);
  };

  self.getData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self.id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__comment").getAttribute("comment");
            self.fetch_body = new FormData();
            self.fetch_body.append("id", self.id);
            self.url = Routing.generate("get_comment");
            return _context3.abrupt("return", fetch(self.url, {
              method: "POST",
              body: self.fetch_body,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  self.addValues = function () {
    self.container.querySelector(".input__text").value = self.data.body.trim();

    if (self.data.img_attached) {
      self.previewImage.setAttribute("src", self.data.img_attached);
      self.previewText.style.display = "none";
      self.previewImage.style.display = "block";
    }
  };

  self.prepareFetch = function () {
    self.url = Routing.generate("edit_comment");
    self.text = self.container.querySelector(".input__text").value.trim();
    self.image = self.container.querySelector(".input__comment-img").files[0];
    self.id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__comment").getAttribute("comment");
    self.fetch_body = new FormData();
    self.fetch_body.append("id", self.id);
    self.fetch_body.append("text", self.text);

    if (self.img_attached) {
      self.fetch_body.append("image", self.image);
    } else if (self.remove_img) {
      self.fetch_body.append("image", "remove");
    } else {
      self.fetch_body.append("image", null);
    }
  };

  self.fetchData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            self.promise = fetch(self.url, {
              method: "POST",
              body: self.fetch_body,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            });
            return _context4.abrupt("return", self.promise);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  self.updateDOM = function () {
    if (self.response.success) {
      self.comment = document.querySelectorAll("[comment = \"".concat(self.response.comment_data.id, "\"]"));
      self.comment.forEach(function (comment) {
        comment.querySelector(".comment__text").innerHTML = self.response.comment_data.body;
        var img_container = comment.querySelector(".comment__img_attached");

        if (self.response.comment_data.img_attached) {
          img_container.style = null;
          var img_attached = comment.querySelector(".img__img-attached");
          img_attached.setAttribute("src", self.response.comment_data.img_attached);
        } else {
          img_container.style.display = "none";
        }
      });
    }
  };

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.innerHTML = "";
      self.container.style.display = "none";
    }

    if (self.secondary_overlay) self.secondary_overlay.style.display = null;
    if (self.item_overlay) self.item_overlay.style.display = null;
  };

  self.html = function () {
    var html = "\n      <div class='overlay'></div>\n         <div class='modal__window ".concat(options.style_class, "'>\n            <div class=\"modal__header\">\n               <h5 class=\"text__modal-header\">Edit Comment</h5>\n               <i class=\"fas fa-times btn__modal-close\"></i>\n            </div>\n            <div class=\"modal__body\">\n               <div class=\"form__edit-comment\">\n   \n                  <div class=\"input-group\">\n                     <label for=\"name\">Text</label>\n                     <textarea name=\"\" cols=\"30\" rows=\"10\" class=\"input-group__input input__text\" id=\"input__text\"></textarea>\n                  </div>\n   \n                  <div class=\"input-group__img-attached\">\n                     <div class=\"img-attached__label\">Image Attached</div>\n                     <label for=\"input__comment-img\" class=\"img-attached__btn-upload\">\n                        <i class=\"fas fa-image\"></i>\n                     </label>\n                     <div class=\"img-attached__btn-clear\">\n                        <i class=\"fas fa-times\"></i>\n                     </div>\n                     <div class=\"img-attached__preview\">\n                        <img src=\"\" alt=\"Cover Preview\" class=\"preview__img\">\n                        <span class=\"preview__text\">Preview Image</span>\n                     </div>\n                     <input type=\"file\" class=\"input-group__input input__comment-img\" id=\"input__comment-img\">\n               </div>\n   \n            </div>\n            <div class=\"modal__footer\">     \n               <button class=\"btn__modal-submit\">Edit Comment</button>\n               <button class=\"btn__modal-cancel\">Cancel</button>\n            </div>\n      </div>\n      </div>");
    return html;
  };

  self.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return self.renderModal();

          case 2:
            self.addEv();
            self.previewImage();
            self.addValues();

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  self.init();
  return self;
}

/***/ }),

/***/ "./assets/js/components/modals/_edit_folder.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/modals/_edit_folder.js ***!
  \*****************************************************/
/*! exports provided: EditFolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFolder", function() { return EditFolder; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function EditFolder(options) {
  var _this = this;

  this.renderModal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this.container = document.getElementById(options.id);
            _this.container.innerHTML = _this.body();
            _context.next = 4;
            return _this.getCSRF();

          case 4:
            _this.token = _context.sent;
            _this.input = _this.container.querySelector("#input__folder-name");
            _this.input.value = _this.token.name;
            _this.csrf = _this.container.querySelector(".input__csrf");
            _this.csrf.value = _this.token.csrf;
            _this.container.style = null;
            _this.container.style.opacity = 1;
            _this.container.style.display = "block";
            /**
             * MAIN OVERLAY
             */

            if (options.secondary_overlay == undefined) {
              _this.overlay = _this.container.querySelector(".overlay");
              _this.overlay.style.display = "block";
            }
            /**
             * MODAL OVERLAY
             */


            if (options.secondary_overlay !== undefined) {
              _this.secondary_overlay = document.querySelector(options.secondary_overlay);
              _this.secondary_overlay.style.display = "block";
              _this.secondary_overlay.style.background = options.secondary_overlay_bg;
            }
            /**
             * ITEM OVERLAY
             */


            if (options.item_overlay !== undefined) {
              _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
              _this.item_overlay.style.display = "block";
              _this.item_overlay.style.background = options.item_overlay_bg; // this.item_overlay.style.zIndex = "999";
            }

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  this.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      _this.container.style.display = "none";
      _this.container.innerHTML = "";
    }

    if (_this.secondary_overlay) _this.secondary_overlay.style.display = null;
    if (_this.item_overlay) _this.item_overlay.style.display = null;
  };

  this.addEv = function () {
    _this.btn_submit = _this.container.querySelector(".btn__modal-submit");

    _this.btn_submit.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.renameFolder();

            case 2:
              _this.response = _context2.sent;

              if (_this.response.success) {
                if (options.cb) options.cb();

                _this.hideModal();
              } else {
                _this.displayError();
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.btn_cancel = _this.container.querySelector(".btn__modal-cancel");

    _this.btn_cancel.addEventListener("click", _this.hideModal);

    _this.btn_close = _this.container.querySelector(".btn__modal-close");

    _this.btn_close.addEventListener("click", _this.hideModal);
  };

  this.renameFolder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _this.form = _this.container.querySelector(".form__create-folder");
            _this.data = new FormData(_this.form);

            _this.data.append("folder_rename[id]", _this.folder_id);

            _this.url = Routing.generate("rename_folder");
            return _context3.abrupt("return", fetch(_this.url, {
              method: "POST",
              body: _this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  this.getCSRF = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this.data = new FormData();
            _this.folder_id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__folder").getAttribute("folder");

            _this.data.append("id", _this.folder_id);

            _this.data.append("token_name", "folder_rename");

            _this.url = Routing.generate("form_folder");
            return _context4.abrupt("return", fetch(_this.url, {
              method: "POST",
              body: _this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  this.displayError = function () {
    _this.error = _this.container.querySelector(".text__error-message");
    _this.error.innerHTML = "";

    _this.response.errors.forEach(function (error) {
      _this.error.innerHTML += error.message;
    });

    _this.error.style.display = "block";
  };

  this.body = function () {
    var html = "\n      <div class='overlay'></div>\n         <div class='modal__window ".concat(options.style_class, "'>\n            <div class=\"modal__header\">\n               <h5 class=\"text__modal-header\">Rename Folder</h5>\n               <i class=\"fas fa-times btn__modal-close\"></i>\n            </div>\n            <div class=\"modal__body\">\n\n            <form action=\"\" name=\"folder_rename\" method=\"POST\" class=\"form__create-folder\">\n               <input type=\"text\" id=\"input__folder-name\" placeholder=\"Folder Name\" name=\"folder_rename[name]\" autocomplete=\"off\">\n               <div class=\"text__error-message\"></div>\n               <input type=\"hidden\" name=\"folder_rename[_token]\" value=\"\" class=\"input__csrf\">\n            </form>\n\n            </div>\n               <div class=\"modal__footer\">     \n               <button class=\"btn__modal-submit\">Rename</button>\n               <button class=\"btn__modal-cancel\">Cancel</button>\n            </div>\n      </div>");
    return html;
  };

  this.init = function () {
    this.renderModal();
    this.addEv();
  };

  this.init();
  return this;
}

/***/ }),

/***/ "./assets/js/components/modals/_edit_post.js":
/*!***************************************************!*\
  !*** ./assets/js/components/modals/_edit_post.js ***!
  \***************************************************/
/*! exports provided: EditPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPost", function() { return EditPost; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function EditPost(options) {
  var _this = this;

  var self = this;
  self.renderModal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self.container = document.getElementById(options.id);
            self.container.innerHTML = self.html();
            self.csrf = self.container.querySelector(".input__csrf");
            _context.next = 5;
            return self.getCSRF();

          case 5:
            self.token = _context.sent;
            self.csrf.value = self.token.token;
            self.container.style = null;
            self.container.style.display = "block";
            self.container.style.opacity = 1;
            self.error_fields = self.container.querySelectorAll(".error-field__error-msg");
            /**
             * MAIN OVERLAY
             */

            if (options.secondary_overlay == undefined) {
              self.overlay = self.container.querySelector(".overlay");
              self.overlay.style.display = "block";
            }
            /**
             * MODAL OVERLAY
             */


            if (options.secondary_overlay !== undefined) {
              self.secondary_overlay = document.querySelector(options.secondary_overlay);
              self.secondary_overlay.style.display = "block";
              self.secondary_overlay.style.background = options.secondary_overlay_bg;
            }
            /**
             * ITEM OVERLAY
             */


            if (options.item_overlay !== undefined) {
              self.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
              self.item_overlay.style.display = "block";
              self.item_overlay.style.background = options.item_overlay_bg; // self.item_overlay.style.zIndex = "999";
            }

            if (options.renderdropdown) options.renderdropdown();
            if (options.renderautocomplete) options.renderautocomplete();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  self.addEv = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var btn_submit, btn_cancel, btn_close, tag_input;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            btn_submit = self.container.querySelector(".btn__modal-submit");
            btn_submit.addEventListener("click", /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.preventDefault();
                        self.prepareFetch();
                        _context2.next = 4;
                        return self.editPost();

                      case 4:
                        self.response = _context2.sent;
                        self.updateDOM();

                        if (self.response.success) {
                          self.hideModal();
                          options.onsubmit(self.response);
                        } else {
                          self.hideErrors();
                          self.displayErrors();
                        }

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }());
            btn_cancel = self.container.querySelector(".btn__modal-cancel");
            btn_cancel.addEventListener("click", function (e) {
              self.hideModal();
            });
            btn_close = self.container.querySelector(".btn__modal-close");
            btn_close.addEventListener("click", self.hideModal);
            tag_input = self.container.querySelector("#input__tag");
            tag_input.addEventListener("keyup", function (e) {
              if (e.key == "Enter") {
                /**
                 * DEPENDANCY TAGS CREATE
                 */
                self.container.querySelector("#error-field__tags").innerHTML = "";

                if (e.target.value.trim().length > 0) {
                  options.ontagcreate(e.target.value);
                }

                e.target.value = "";
                document.querySelector("#tags__match").innerHTML = "";
              }
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  self.previewFrontCover = function () {
    self.inputFront = self.container.querySelector(".input__front-cover");
    self.previewFront = self.container.querySelector(".front-cover-preview__image");
    self.previewFrontText = self.container.querySelector(".front-cover-preview__text");
    self.btnFrontClear = self.container.querySelector(".front-cover__btn-clear");
    self.inputFront.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewFrontText.style.display = "none";
        self.previewFront.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewFront.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
      } else {
        self.previewFrontText.style.display = null;
        self.previewFront.style.display = null;
      }
    });
    self.btnFrontClear.addEventListener("click", function () {
      self.inputFront.value = null;
      self.previewFrontText.style.display = null;
      self.previewFront.style.display = null;
    });
  };

  self.previewHeaderCover = function () {
    self.inputHeader = self.container.querySelector(".input__header-cover");
    self.previewHeader = self.container.querySelector(".header-cover-preview__image");
    self.previewHeaderText = self.container.querySelector(".header-cover-preview__text");
    self.btnHeaderClear = self.container.querySelector(".header-cover__btn-clear");
    self.inputHeader.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewHeaderText.style.display = "none";
        self.previewHeader.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewHeader.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
      } else {
        self.previewHeaderText.style.display = null;
        self.previewHeader.style.display = null;
      }
    });
    self.btnHeaderClear.addEventListener("click", function () {
      self.inputHeader.value = null;
      self.previewHeaderText.style.display = null;
      self.previewHeader.style.display = null;
    });
  };

  self.getCSRF = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this.data = new FormData();

            _this.data.append("token_name", "post");

            _this.url = Routing.generate("get_token");
            return _context4.abrupt("return", fetch(_this.url, {
              method: "POST",
              body: _this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  self.getPost = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            self.post_id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__post").getAttribute("post");
            self.data = new FormData();
            self.data.append("post_id", self.post_id);
            self.url = Routing.generate("get_post");
            return _context5.abrupt("return", fetch(self.url, {
              method: "POST",
              body: self.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  self.addValues = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            self.container.querySelector(".input__title").value = self.post_data.title;
            self.container.querySelector("#input__text").value = self.post_data.body;
            self.previewFrontText.style.display = "none";
            self.previewFront.style.display = "block";
            self.previewFront.setAttribute("src", self.post_data.front_cover_link);
            self.previewHeaderText.style.display = "none";
            self.previewHeader.style.display = "block";
            self.previewHeader.setAttribute("src", self.post_data.header_cover_link);
            /**
             * DEPENDANCY ADD EXISTING TAGS
             */

            options.rendertags(self.post_data.tags);
            self.folder = self.container.querySelector(".dropdown__value");
            self.folder.innerHTML = self.post_data.folder.name;
            self.folder.setAttribute("folder", self.post_data.folder.folder_id);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  self.prepareFetch = function () {
    var form = document.querySelector(".form__post-type");
    self.fetch_body = new FormData(form);
    var folder = self.container.querySelector(".dropdown__value").getAttribute("folder");
    self.fetch_body.append("post[folder]", folder);
    var tags_selected = self.container.querySelector(".tags__selected");
    var tags = tags_selected.querySelectorAll(".tag");
    var tag_names = [];
    tags.forEach(function (tag) {
      var tag_name = tag.querySelector(".tag__name").innerHTML;
      tag_names.push(tag_name);
    });
    self.fetch_body.append("post[tags]", tag_names);
    self.fetch_body.append("post[id]", _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, "box__post").getAttribute("post"));
    return self.fetch_body;
  };

  self.editPost = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            self.url = Routing.generate("edit_post");
            return _context7.abrupt("return", fetch(self.url, {
              method: "POST",
              body: self.fetch_body,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  self.updateDOM = function () {
    if (self.response.success) {
      self.post = document.querySelectorAll("[post = \"".concat(self.response.post_data.id, "\"]"));
      self.post.forEach(function (post) {
        post.querySelector(".header__img").setAttribute("src", self.response.post_data.front_cover_link);
        post.querySelector(".body__title").innerHTML = self.response.post_data.title;
        self.tags_container = post.querySelector(".body__tags");
        self.tags_container.innerHTML = "";
        self.tags = self.response.post_data.tags;
        self.tags.forEach(function (tag) {
          var tag_element = document.createElement("a");
          tag_element.setAttribute("tag", tag.id);
          tag_element.classList.add("tags__tag");
          tag_element.innerHTML = "#".concat(tag.name);
          self.tags_container.appendChild(tag_element);
        });
      });
    }
  };

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.innerHTML = "";
    }

    if (self.secondary_overlay) self.secondary_overlay.style.display = null;
    if (self.item_overlay) self.item_overlay.style.display = null;
  };

  self.hideErrors = function () {
    self.error_fields.forEach(function (error) {
      error.innerHTML = "";
      error.style.display = "block";
    });
  };

  self.displayErrors = function () {
    var errors = [];
    self.response.errors.forEach(function (error) {
      var str_1 = error.cause.propertyPath.replace("data", "").replace(".", "");
      var cause = str_1.replace(/(^.*\[|\].*$)/g, "");
      var e = {
        cause: cause,
        message: error.message
      };
      errors.push(e);
    });
    errors.forEach(function (error) {
      if (self.container.querySelector("#error-field__".concat(error.cause))) {
        self.container.querySelector("#error-field__".concat(error.cause)).innerHTML = "\n            <div class=\"error-text__error-msg\">\n             ".concat(error.message, "\n            </div>");
      }
    });
  };

  self.html = function () {
    var html = "\n   <div class='overlay'></div>\n   <div class='modal__window ".concat(options.style_class, "'>\n      <div class='overlay__modal-item' id=\"").concat(options.modal_overlay, "\"></div>\n      <div class=\"modal__header\">\n         <h5 class=\"text__modal-header\">Edit Post</h5>\n         <i class=\"fas fa-times btn__modal-close\"></i>\n      </div>\n\n      <div class=\"modal__body\">\n      <form class=\"form__post-type\" name=\"post\">\n\n      <div class=\"form__row\">\n         <div class=\"input-group__front-cover\">\n            <div class=\"front-cover__label\">Front Cover</div>\n            <label for=\"input__front-cover\" class=\"front-cover__btn-upload\">\n            <i class=\"fas fa-image\"></i>\n            </label>\n            <div class=\"front-cover__btn-clear\">\n            <i class=\"fas fa-times\"></i>\n         </div>\n         <div class=\"front-cover__cover-preview\">\n            <img src=\"\" alt=\"Cover Preview\" class=\"front-cover-preview__image\">\n            <span class=\"front-cover-preview__text\">Preview Image</span>\n            </div>\n            <input type=\"file\" class=\"input-group__input input__front-cover\" id=\"input__front-cover\" name=\"post[front_cover]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__front_cover\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\">\n         <div class=\"input-group__header-cover\">\n            <div class=\"header-cover__label\">Header Cover</div>\n            <label for=\"input__header-cover\" class=\"header-cover__btn-upload\">\n            <i class=\"fas fa-image\"></i>\n            </label>\n            <div class=\"header-cover__btn-clear\">\n            <i class=\"fas fa-times\"></i>\n         </div>\n         <div class=\"header-cover__cover-preview\">\n            <img src=\"\" alt=\"Cover Preview\" class=\"header-cover-preview__image\">\n            <span class=\"header-cover-preview__text\">Preview Image</span>\n            </div>\n            <input type=\"file\" class=\"input-group__input input__header-cover\" id=\"input__header-cover\" name=\"post[header_cover]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__header_cover\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group__tags\">\n            <div class=\"tags__create\">\n            <input id=\"input__tag\" autocomplete=\"off\"> \n            </div>\n            <div class=\"tags__selected\" name=\"post[tags]\">\n               <div class=\"error-field__error-msg\" id=\"error-field__tags\"></div>\n            </div>  \n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group\">\n            <label for=\"folder\">Folder</label>\n            <div class=\"input__folder\" id=\"input__folder\" name=\"post[folder]\"></div>\n            <div class=\"error-field__error-msg\" id=\"error-field__folder\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" class=\"input-group__input input__title\" name=\"post[title]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__title\"></div>\n         </div>\n      </div>\n\n      <div class=\"form__row\"> \n         <div class=\"input-group\">\n            <label for=\"body\">Text</label>\n            <textarea name=\"post[body]\" cols=\"30\" rows=\"10\" class=\"input-group__input input__text\" id=\"input__text\"></textarea>\n            <div class=\"error-field__error-msg\" id=\"error-field__body\"></div>\n         </div>\n      </div>\n\n      <input type=\"hidden\" name=\"post[_token]\" value=\"\" class=\"input__csrf\">\n   </form>\n\n   </div>\n   <div class=\"modal__footer\">     \n      <button class=\"btn__modal-submit\">Edit Post</button>\n      <button class=\"btn__modal-cancel\">Cancel</button>\n   </div>\n   </div>");
    return html;
  };

  self.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return self.renderModal();

          case 2:
            self.addEv();
            self.previewFrontCover();
            self.previewHeaderCover();
            _context8.next = 7;
            return self.getPost();

          case 7:
            self.post_data = _context8.sent;
            self.addValues();

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  self.init();
  return self;
}

/***/ }),

/***/ "./assets/js/components/modals/_edit_profile.js":
/*!******************************************************!*\
  !*** ./assets/js/components/modals/_edit_profile.js ***!
  \******************************************************/
/*! exports provided: EditProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfile", function() { return EditProfile; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function EditProfile(options) {
  var _this = this;

  var self = this;
  self.cb = options.cb;
  self.renderModal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self.html = self.html();
            self.container = document.getElementById(options.id);
            self.container.innerHTML = self.html;
            self.container.style = null;
            self.container.style.display = "block";
            self.container.style.opacity = 1;
            /**
             * MAIN OVERLAY
             */

            if (options.secondary_overlay == undefined) {
              _this.overlay = _this.container.querySelector(".overlay");
              _this.overlay.style.display = "block";
            }
            /**
             * MODAL OVERLAY
             */


            if (options.secondary_overlay !== undefined) {
              _this.secondary_overlay = document.querySelector(options.secondary_overlay);
              _this.secondary_overlay.style.display = "block";
              _this.secondary_overlay.style.background = options.secondary_overlay_bg;
            }
            /**
             * ITEM OVERLAY
             */


            if (options.item_overlay !== undefined) {
              _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
              _this.item_overlay.style.display = "block";
              _this.item_overlay.style.background = options.item_overlay_bg;
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  self.previewImage = function () {
    self.inpFile = self.container.querySelector(".input__cover");
    self.previewImage = self.container.querySelector(".cover-preview__image");
    self.previewText = self.container.querySelector(".cover-preview__text");
    self.btnClear = self.container.querySelector(".cover__btn-clear");
    self.inpFile.addEventListener("change", function () {
      self.file = this.files[0];

      if (self.file) {
        self.reader = new FileReader();
        self.previewText.style.display = "none";
        self.previewImage.style.display = "block";
        self.reader.addEventListener("load", function () {
          self.previewImage.setAttribute("src", this.result);
        });
        self.reader.readAsDataURL(self.file);
      } else {
        self.previewText.style.display = null;
        self.previewImage.style.display = null;
      }
    });
    self.btnClear.addEventListener("click", function () {
      self.inpFile.value = null;
      self.previewText.style.display = null;
      self.previewImage.style.display = null;
    });
  };

  self.fetchData = function () {
    var url = Routing.generate("get_profile");
    var promise = fetch(url, {
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res;
    });
    return promise;
  };

  self.addValues = function () {
    self.container.querySelector(".input__firstname").value = self.data.firstname;
    self.container.querySelector(".input__lastname").value = self.data.lastname;
    self.container.querySelector(".input__alias").value = self.data.nickname;
    self.container.querySelector(".input__about").value = self.data.about;
    self.container.querySelector(".input__csrf").value = self.token.token;

    if (self.data.avatar) {
      self.previewImage.setAttribute("src", self.data.avatar);
      self.previewText.style.display = "none";
      self.previewImage.style.display = "block";
    }
  };

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.innerHTML = "";
      self.container.style.display = "none";
    }
  };

  self.addEv = function () {
    var btn_submit = self.container.querySelector(".btn__modal-submit");
    btn_submit.addEventListener("click", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _context2.next = 3;
                return self.updateProfile();

              case 3:
                self.response = _context2.sent;

                if (self.response.success) {
                  options.onsubmit(self.response);
                  self.hideModal();
                } else {
                  self.displayError();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    var btn_cancel = self.container.querySelector(".btn__modal-cancel");
    btn_cancel.addEventListener("click", function (e) {
      self.hideModal();
    });
    var btn_close = self.container.querySelector(".btn__modal-close");
    btn_close.addEventListener("click", self.hideModal);
  };

  self.getCSRF = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            self.fd = new FormData();
            self.fd.append("token_name", "edit_profile");
            self.url = Routing.generate("get_token");
            return _context3.abrupt("return", fetch(self.url, {
              method: "POST",
              body: self.fd,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  self.updateProfile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this.form = _this.container.querySelector(".form__edit-profile");
            _this.data = new FormData(_this.form);
            _this.url = Routing.generate("update_profile");
            return _context4.abrupt("return", fetch(_this.url, {
              method: "POST",
              body: _this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  self.displayError = function () {
    self.error_fields = self.container.querySelectorAll(".error-field__error-msg");
    self.error_fields.forEach(function (error) {
      error.innerHTML = "";
    });
    var errors = [];
    self.response.errors.forEach(function (error) {
      var str_1 = error.cause.propertyPath.replace("data", "").replace(".", "");
      var cause = str_1.replace(/(^.*\[|\].*$)/g, "");
      var e = {
        cause: cause,
        message: error.message
      };
      errors.push(e);
    });
    errors.forEach(function (error) {
      self.container.querySelector("#error-field__".concat(error.cause)).innerHTML = "\n         <div class=\"error-text__error-msg\">\n          ".concat(error.message, "\n         </div>");
    });
  };

  self.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            self.renderModal();
            _context5.next = 3;
            return self.getCSRF();

          case 3:
            self.token = _context5.sent;
            _context5.next = 6;
            return self.fetchData();

          case 6:
            self.data = _context5.sent;
            self.addEv();
            self.previewImage();
            self.addValues();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })); // <span class="btn__modal-close">&times;</span>

  self.html = function () {
    var html = "\n      <div class='overlay'></div>\n         <div class='modal__window ".concat(options.style_class, "'>\n            <div class=\"modal__header\">\n               <h5 class=\"text__modal-header\">Edit Profile</h5>\n               <i class=\"fas fa-times btn__modal-close\"></i>\n            </div>\n         <div class=\"modal__body\">\n         \n   <form class=\"form__edit-profile\" name=\"edit_profile\" method=\"POST\">\n   \n         <div class=\"input-group__cover\">\n            <div class=\"cover__label\">Profile Image</div>\n            <label for=\"input__cover\" class=\"cover__btn-upload\">\n               <i class=\"fas fa-image\"></i>\n            </label>\n            <div class=\"cover__btn-clear\">\n               <i class=\"fas fa-times\"></i>\n            </div>\n            <div class=\"cover__cover-preview\">\n               <img src=\"\" alt=\"Cover Preview\" class=\"cover-preview__image\">\n               <span class=\"cover-preview__text\">Profile Image</span>\n            </div>\n            <input type=\"file\" class=\"input-group__input input__cover\" id=\"input__cover\" name=\"edit_profile[avatar]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__avatar\"></div>\n         </div>\n   \n         <div class=\"input-group\">\n            <label for=\"\">Firstname</label>\n            <input type=\"text\" class=\"input__firstname\" name=\"edit_profile[firstname]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__firstname\"></div>\n         </div>\n   \n         <div class=\"input-group\">\n            <label for=\"\">Lastname</label>\n            <input type=\"text\" class=\"input__lastname\" name=\"edit_profile[lastname]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__lastname\"></div>\n         </div>\n   \n         <div class=\"input-group\">\n            <label for=\"\">Alias</label>\n            <input type=\"text\" class=\"input__alias\" name=\"edit_profile[nickname]\">\n            <div class=\"error-field__error-msg\" id=\"error-field__nickname\"></div>\n         </div>\n   \n         <div class=\"input-group\">\n         <label for=\"\">About</label>\n         <textarea name=\"edit_profile[about]\" cols=\"30\" rows=\"10\" class=\"input-group__input input__about\" id=\"input__about\"></textarea>\n         <div class=\"error-field__error-msg\" id=\"error-field__about\"></div>\n      </div>\n      \n      <input type=\"hidden\" name=\"edit_profile[_token]\" value=\"\" class=\"input__csrf\">\n   </form>\n      </div>\n      <div class=\"modal__footer\">     \n         <button class=\"btn__modal-submit\">Edit Profile</button>\n         <button class=\"btn__modal-cancel\">Cancel</button>\n      </div>\n      </div>\n      </div>");
    return html;
  };

  self.init();
  return self;
}

/***/ }),

/***/ "./assets/js/components/modals/_followers_list.js":
/*!********************************************************!*\
  !*** ./assets/js/components/modals/_followers_list.js ***!
  \********************************************************/
/*! exports provided: followList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followList", function() { return followList; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function followList(options) {
  var _this = this;

  this.renderModal = function () {
    var html = "\n      <div class='overlay'></div>\n         <div class='modal__window ".concat(_this.style_class, "'>\n            <div class=\"modal__header\">\n               <h5 class=\"text__modal-header\">").concat(options.header, " (").concat(_this.response.length, ")</h5>\n               <i class=\"fas fa-times btn__modal-close\"></i>\n            </div>\n            <div class=\"modal__body\">\n            </div>\n      </div>");
    _this.container = document.getElementById(options.id);
    _this.container.innerHTML = html;
    var elem = _this.container;
    _this.list = elem.querySelector(".modal__body");
    _this.box = elem.querySelector(".modal__window");
    html = "";

    _this.response.forEach(function (profile) {
      html += "\n         <div class=\"modal__item\"> \n            <img src=\"".concat(profile.avatar, "\" class=\"item__img\"/>\n            <a href=\"").concat(Routing.generate("profile_page", {
        profile: profile.id
      }), "\" class=\"item__name\">\n               <span>").concat(profile.firstname, "</span>\n               <span>").concat(profile.lastname, "</span>\n            </a>\n         </div>\n         ");
    });

    _this.list.innerHTML = html;
    _this.container.style = null;
    _this.container.style.display = "block";
    _this.container.style.opacity = 1;
    /**
     * MAIN OVERLAY
     */

    if (options.secondary_overlay == undefined) {
      _this.overlay = _this.container.querySelector(".overlay");
      _this.overlay.style.display = "block";
    }
    /**
     * MODAL OVERLAY
     */


    if (options.secondary_overlay !== undefined) {
      _this.secondary_overlay = document.querySelector(options.secondary_overlay);
      _this.secondary_overlay.style.display = "block";
      _this.secondary_overlay.style.background = options.secondary_overlay_bg;
    }
    /**
     * ITEM OVERLAY
     */


    if (options.item_overlay !== undefined) {
      _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
      _this.item_overlay.style.display = "block";
      _this.item_overlay.style.background = options.item_overlay_bg; // this.item_overlay.style.zIndex = "999";
    }
  };

  this.prepareFetch = function () {
    _this.id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.attr.classname).getAttribute(options.attr.attr);
    _this.fetch_body = new FormData();

    _this.fetch_body.append("id", _this.id);
  };

  this.fetchData = function () {
    var promise = fetch(Routing.generate(options.url), {
      method: "POST",
      body: _this.fetch_body,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res;
    });
    return promise;
  };

  this.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      _this.container.innerHTML = "";
    }
  };

  this.addEv = function () {
    var btn_close = _this.container.querySelector(".btn__modal-close");

    btn_close.addEventListener("click", _this.hideModal);
  };

  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this.prepareFetch();

            _context.next = 3;
            return _this.fetchData(options.target);

          case 3:
            _this.response = _context.sent;
            _this.style_class = options.style_class;
            _this.cb = options.cb;

            _this.renderModal();

            _this.addEv();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  this.init();
  return this;
}

/***/ }),

/***/ "./assets/js/components/modals/_response_list.js":
/*!*******************************************************!*\
  !*** ./assets/js/components/modals/_response_list.js ***!
  \*******************************************************/
/*! exports provided: responseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseList", function() { return responseList; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function responseList(options) {
  var _this = this;

  this.renderModal = function () {
    var title = _this.data_target === "likes" ? "Like" : "Dislike";
    var html = "\n      <div class='overlay'></div>\n         <div class='modal__window ".concat(_this.style_class, "'>\n            <div class=\"modal__header\">\n               <h5 class=\"text__modal-header\">").concat(title, " (").concat(_this.data.length, ")</h5>\n               <i class=\"fas fa-times btn__modal-close\"></i>\n            </div>\n            <div class=\"modal__body\">\n            </div>\n      </div>");
    _this.container = document.getElementById(options.id);
    _this.container.innerHTML = html;
    var elem = _this.container;
    _this.list = elem.querySelector(".modal__body");
    _this.box = elem.querySelector(".modal__window");
    html = "";

    _this.data.forEach(function (profile) {
      html += "\n         <div class=\"modal__item\"> \n            <img src=\"".concat(profile.avatar, "\" class=\"item__img\"/>\n            <a href=\"").concat(Routing.generate("profile_page", {
        profile: profile.id
      }), "\" class=\"item__name\">\n               <span>").concat(profile.firstname, "</span>\n               <span>").concat(profile.lastname, "</span>\n            </a>\n         </div>\n         ");
    });

    _this.list.innerHTML = html;
    _this.container.style = null;
    _this.container.style.display = "block";
    _this.container.style.opacity = 1;
    /**
     * MAIN OVERLAY
     */

    if (options.secondary_overlay == undefined) {
      _this.overlay = _this.container.querySelector(".overlay");
      _this.overlay.style.display = "block";
    }
    /**
     * MODAL OVERLAY
     */


    if (options.secondary_overlay !== undefined) {
      _this.secondary_overlay = document.querySelector(options.secondary_overlay);
      _this.secondary_overlay.style.display = "block";
      _this.secondary_overlay.style.background = options.secondary_overlay_bg;
    }
    /**
     * ITEM OVERLAY
     */


    if (options.item_overlay !== undefined) {
      _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
      _this.item_overlay.style.display = "block";
      _this.item_overlay.style.background = options.item_overlay_bg; // this.item_overlay.style.zIndex = "999";
    }
  };

  this.prepareFetch = function () {
    _this.id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.attr.classname).getAttribute(options.attr.attr);
    _this.fetch_body = new FormData();

    _this.fetch_body.append("id", _this.id);
  };

  this.fetchData = function () {
    var promise = fetch(Routing.generate(options.url), {
      method: "POST",
      body: _this.fetch_body,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res;
    });
    return promise;
  };

  this.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      _this.container.innerHTML = "";
    }

    if (_this.secondary_overlay) _this.secondary_overlay.style.display = null;
    if (_this.item_overlay) _this.item_overlay.style.display = null;
  };

  this.addEv = function () {
    var btn_close = _this.container.querySelector(".btn__modal-close");

    btn_close.addEventListener("click", _this.hideModal);
  };

  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this.prepareFetch();

            _context.next = 3;
            return _this.fetchData(options.target);

          case 3:
            _this.response = _context.sent;
            _this.data_target = options.target.classList.contains("counter__likes") ? "likes" : "dislikes";
            _this.data = _this.data_target === "likes" ? _this.response.likes_from : _this.response.dislikes_from;
            _this.style_class = options.style_class;
            _this.cb = options.cb;

            _this.renderModal();

            _this.addEv();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  this.init();
  return this;
}

/***/ }),

/***/ "./assets/js/components/modals/_tagged_post.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/modals/_tagged_post.js ***!
  \*****************************************************/
/*! exports provided: TaggedPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaggedPost", function() { return TaggedPost; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Routing = __webpack_require__(/*! ../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function TaggedPost(options) {
  var _this = this;

  var self = this;
  self.renderModal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            self.container = document.getElementById(options.id);
            self.container.innerHTML = _this.html();
            self.container.style = null;
            self.container.style.display = "block";
            self.container.style.opacity = 1;
            /**
             * MAIN OVERLAY
             */

            if (options.secondary_overlay == undefined) {
              _this.overlay = _this.container.querySelector(".overlay");
              _this.overlay.style.display = "block";
            }
            /**
             * MODAL OVERLAY
             */


            if (options.secondary_overlay !== undefined) {
              _this.secondary_overlay = document.querySelector(options.secondary_overlay);
              _this.secondary_overlay.style.display = "block";
              _this.secondary_overlay.style.background = options.secondary_overlay_bg;
            }
            /**
             * ITEM OVERLAY
             */


            if (options.item_overlay !== undefined) {
              _this.item_overlay = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](options.target, options.item_overlay);
              _this.item_overlay.style.display = "block";
              _this.item_overlay.style.background = options.item_overlay_bg;
              _this.item_overlay.style.zIndex = "999";
            }

            options.rendersort();
            _context.next = 11;
            return options.renderpaginated();

          case 11:
            self.data = _context.sent;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  self.addEv = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var btn_close;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            btn_close = self.container.querySelector(".btn__modal-close");
            btn_close.addEventListener("click", self.hideModal);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  self.hideModal = function () {
    var overlay = document.querySelector(".overlay");

    if (overlay !== null || typeof overlay == "undefined") {
      self.container.innerHTML = "";
    }
  };

  self.html = function () {
    var html = "\n   <div class='overlay'></div>\n   <div class='modal__window ".concat(options.style_class, "'>\n      <div class='overlay__modal-item' id=\"").concat(options.modal_overlay, "\"></div>\n      \n      <div class=\"modal__header\">\n         <h5 class=\"text__modal-header\"></h5>\n         <i class=\"fas fa-times btn__modal-close\"></i>\n      </div>\n\n      <div class=\"modal__body\">\n\n         <div class=\"content__control\">\n            <div class=\"content__sort\" id=\"sort__tag\"></div>\n         </div>\n\n         <div class=\"content__posts\" id=\"content__tag\"></div>\n      </div>\n\n      <div class=\"modal__footer\">     \n         <div class=\"content__paginator\" id=\"tag__paginator\"></div>\n      </div>\n   ");
    return html;
  };

  self.setHeader = function () {
    self.header = self.container.querySelector(".text__modal-header");
    self.header.innerHTML = "Posts <span class=\"highlight__tag\">#".concat(self.data.pagination_data.tag.name, "</span>");
  };

  self.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return self.renderModal();

          case 2:
            self.addEv();
            self.setHeader();

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  self.init();
  return self;
}

/***/ }),

/***/ "./assets/js/components/pagination.js":
/*!********************************************!*\
  !*** ./assets/js/components/pagination.js ***!
  \********************************************/
/*! exports provided: CreatePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePagination", function() { return CreatePagination; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Routing = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);


/**
 * pagination_settings
 * @property {string} container_id – pagination render container
 * @property {string} page – default "1"
 * @property {string} sort – default "created"
 * @property {object} route – route.name is string for fetch URL,
 *                            route.data is object with mandatory data required by backend
 * @method {function} callback – return paginated objects data
 */

/**
 * addPagination function renders pagination and returns promise object with response.main_data
 */

function CreatePagination(_x) {
  return _CreatePagination.apply(this, arguments);
}

function _CreatePagination() {
  _CreatePagination = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pagination_settings) {
    var _this = this;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            this.route = pagination_settings.route;
            this.container = document.getElementById(pagination_settings.container_id);
            this.cb = pagination_settings.cb;
            this.profile_id = pagination_settings.profile_id;

            this.init = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pagination_settings) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this.page = pagination_settings.page;
                        _this.sort_method = pagination_settings.sort_method;
                        _this.folder_id = pagination_settings.folder_id;
                        _this.tag_id = pagination_settings.tag_id;

                        if (_this.page) {
                          _context.next = 8;
                          break;
                        }

                        return _context.abrupt("return", false);

                      case 8:
                        _context.next = 10;
                        return _this.getPageData();

                      case 10:
                        _this.response_data = _context.sent;
                        _this.pagination_data = _this.response_data.pagination_data;
                        _this.main_data = _this.response_data.main_data;

                      case 13:
                        if (!(_this.getPageCount() == 0)) {
                          _context.next = 19;
                          break;
                        }

                        _this.hide();

                        if (_this.cb) _this.addContent(_this.cb);
                        return _context.abrupt("return", {
                          auth_data: _this.response_data.auth_data
                        });

                      case 19:
                        _this.renderPagination();

                        _this.displayDots();

                        _this.addEv();

                        _this.hide();

                        if (_this.cb) _this.addContent(_this.cb);
                        return _context.abrupt("return", _this.response_data);

                      case 25:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref.apply(this, arguments);
              };
            }();

            this.getPageData = function () {
              var data = new FormData();
              data.append("page", _this.page);
              data.append("profile_id", _this.profile_id);
              data.append("folder_id", _this.folder_id);
              data.append("tag_id", _this.tag_id);
              data.append("sort_method", _this.sort_method);
              var url = Routing.generate(_this.route);
              return fetch(url, {
                method: "POST",
                body: data,
                headers: {
                  "X-Requested-With": "XMLHttpRequest"
                }
              }).then(function (res) {
                return res.json();
              }).then(function (res) {
                return res;
              });
            };

            this.renderPagination = function () {
              var html = "\n      <div class=\"box_pagination\">  \n         <div class=\"pagination_panel\">\n            <span class=\"pagination_item pagination_control\" id=\"button_prev\">Prev</span>\n            <ul class=\"pagination_pages\">\n               <li class=\"pagination_item page_number\">1</li>\n            </ul>\n            <span class=\"pagination_item pagination_control\" id=\"button_next\">Next</span>\n         </div>\n      </div>\n   ";
              _this.container.innerHTML = html;

              var pagination_pages = _this.container.querySelector(".pagination_pages");

              var page_number = "";

              for (var i = 1; i - 1 < _this.getPageCount(); i++) {
                page_number += "<li class=\"pagination_item page_number\">".concat(i, "</li>");
              }

              pagination_pages.innerHTML = page_number;
            };

            this.getPageCount = function () {
              return Math.ceil(_this.pagination_data.totalCount / _this.pagination_data.numItemsPerPage);
            };

            this.hide = function () {
              if (_this.getPageCount() <= 1) {
                if (_this.container.querySelector(".box_pagination")) {
                  _this.container.querySelector(".box_pagination").style.display = "none";
                }
              }
            };

            this.displayDots = function () {
              var prevButton = _this.container.querySelector("#button_prev");

              var nextButton = _this.container.querySelector("#button_next");

              var page_number = _this.container.querySelectorAll(".page_number");

              page_number[_this.pagination_data.currentPageNumber - 1].classList.add("pagination_display", "active");
              page_number[0].classList.add("pagination_display");
              _helpers__WEBPACK_IMPORTED_MODULE_1__["last"](page_number).classList.add("pagination_display");

              if (page_number[_this.pagination_data.currentPageNumber - 1] != page_number[0]) {
                prevButton.classList.add("pagination_display");
              }

              if (page_number[_this.pagination_data.currentPageNumber - 1] != _helpers__WEBPACK_IMPORTED_MODULE_1__["last"](page_number)) {
                nextButton.classList.add("pagination_display");
              }

              for (var i = 0; i < 4; i++) {
                if (page_number[_this.pagination_data.currentPageNumber - i]) {
                  page_number[_this.pagination_data.currentPageNumber - i].classList.add("pagination_display");
                }

                if (page_number[_this.pagination_data.currentPageNumber + i - 1]) {
                  page_number[_this.pagination_data.currentPageNumber + i - 1].classList.add("pagination_display");
                }

                if (i == 3) {
                  if (page_number[_this.pagination_data.currentPageNumber - i - 1] && page_number[_this.pagination_data.currentPageNumber - i - 1] != page_number[0]) {
                    page_number[_this.pagination_data.currentPageNumber - i - 1].classList.add("pagination_dots");
                  }

                  if (page_number[_this.pagination_data.currentPageNumber - 1 + i] && page_number[_this.pagination_data.currentPageNumber - 1 + i] != _helpers__WEBPACK_IMPORTED_MODULE_1__["last"](page_number)) {
                    page_number[_this.pagination_data.currentPageNumber - 1 + i].classList.add("pagination_dots");
                  }
                }
              }
            };

            this.paginationControl = function (event) {
              var page_number = _this.container.querySelectorAll(".page_number");

              var currentPageNumber = pagination_settings.getPage();

              if (event.target.classList.contains("page_number")) {
                currentPageNumber = parseInt(event.target.innerHTML);
                pagination_settings.setPage(currentPageNumber);
              } else if (event.target.id == "button_prev" && currentPageNumber > 1) {
                currentPageNumber--;
                pagination_settings.setPage(currentPageNumber);
              } else if (event.target.id == "button_next" && currentPageNumber < page_number.length) {
                currentPageNumber++;
                pagination_settings.setPage(currentPageNumber);
              }

              var new_pagination = {
                page: pagination_settings.getPage(),
                folder_id: pagination_settings.getFolder(),
                tag_id: pagination_settings.getTag(),
                sort_method: pagination_settings.getSortMethod()
              };

              _this.init(new_pagination);
            };

            this.addContent = function (cb) {
              if (this.cb) cb(this.response_data);
            };

            this.addEv = function () {
              var pagination_item = _this.container.querySelectorAll(".pagination_item");

              pagination_item.forEach(function (item) {
                item.addEventListener("click", _this.paginationControl);
              });
            };

            return _context2.abrupt("return", this.init(pagination_settings));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _CreatePagination.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/components/tags.js":
/*!**************************************!*\
  !*** ./assets/js/components/tags.js ***!
  \**************************************/
/*! exports provided: createTag, addTag, removeTag, getTags, toggleTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTag", function() { return createTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTag", function() { return addTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTag", function() { return removeTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTags", function() { return toggleTags; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");

function createTag(name) {
  var tag = document.createElement("div");
  tag.classList.add("tag");
  var hmtl = "\n   <span class=\"tag__name\">".concat(name, "</span>\n   <i class=\"fas fa-times tag__remove\"></i>\n   ");
  tag.innerHTML = hmtl;
  tag.querySelector(".tag__remove").addEventListener("click", function (e) {
    removeTag(e.target.parentElement);
  });
  return tag;
}
function addTag(tag) {
  var tags_selected = document.querySelector(".tags__selected");
  tags_selected.appendChild(tag);
}
function removeTag(tag) {
  var tags_selected = document.querySelector(".tags__selected");
  tags_selected.removeChild(tag);
}
function getTags() {
  var tags_selected = document.querySelector(".tags__selected");
  var tags = tags_selected.querySelectorAll(".tag");
  var names = [];
  tags.forEach(function (tag) {
    var tag_name = tag.querySelector(".tag__name").innerHTML;
    names.push(tag_name);
  });
  return names;
}
function toggleTags(options) {
  var _this = this;

  this.tags = document.querySelectorAll(options.tag);
  this.tags.forEach(function (tag) {
    tag.addEventListener("click", _helpers__WEBPACK_IMPORTED_MODULE_0__["throttle"](function (e) {
      _this.target = e.target;
      _this.name = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](_this.target, "body__name").innerHTML;

      _this.init();
    }));
  });

  this.removeClass = function () {
    _this.tags.forEach(function (tag) {
      if (tag == _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](_this.target, "box__tag")) return;else tag.classList.remove("tag__active");
    });
  };

  this.addClass = function () {
    _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](_this.target, "box__tag").classList.toggle("tag__active");
  };

  this.getCurrentTag = function () {
    var current_tag = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](_this.target, "box__tag").getAttribute("tag");
    return current_tag;
  };

  this.setTag = function () {
    if (_this.previous_tag == _this.current_tag) {
      _this.tag = null;
    } else {
      _this.tag = _this.current_tag;
    }
  };

  this.init = function () {
    _this.current_tag = _this.getCurrentTag();
    _this.previous_tag = options.getTag();

    _this.setTag();

    options.setTag(_this.tag);

    _this.removeClass();

    _this.addClass();

    if (options.cb) options.cb(_this.tag, _this.name);
  };
}

/***/ }),

/***/ "./assets/js/editDOM/_folder.js":
/*!**************************************!*\
  !*** ./assets/js/editDOM/_folder.js ***!
  \**************************************/
/*! exports provided: getFolder, addFolder, deleteFolder, addFolders, replaceFolder, noContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFolder", function() { return getFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFolder", function() { return addFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFolder", function() { return deleteFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFolders", function() { return addFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceFolder", function() { return replaceFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noContent", function() { return noContent; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");

function getFolder(folder, folder_active, user) {
  var box__folder = document.createElement("div");
  box__folder.classList.add("box__folder");
  box__folder.setAttribute("folder", folder.folder_id);
  var html = "\n   <div class=\"overlay__folder\"></div>\n   <div class=\"dropdown__folder\" id=\"dropdown__folder-".concat(folder.folder_id, "\"></div>\n   <div class=\"folder__item\"> \n      <div class=\"folder__left-strip\"></div>\n      <div class=\"folder__content\">\n         <div class=\"folder__header\">\n            <i class=\"fas fa-ellipsis-h dropdown__trigger folder__icon\" id=\"dropdown__folder-trigger-").concat(folder.folder_id, "\"></i>   \n         </div>\n      <div class=\"folder__body\">\n         <div class=\"body__name\">").concat(folder.name, "</div>\n         <div class=\"body__created-at\">").concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["timeAgo"](folder.created_at), "</div>\n      </div>\n      </div> \n   </div>\n   ");
  box__folder.innerHTML = html;
  var folder__item = box__folder.querySelector(".folder__item");
  var dd = box__folder.querySelector(".dropdown__folder");
  var icon = box__folder.querySelector(".folder__icon");

  if (folder.author.id !== user.id) {
    icon.remove();
    dd.remove();
  }

  var active = folder.folder_id == folder_active ? "folder__active" : null;
  if (active) folder__item.classList.add(active);
  return box__folder;
}
/* <div class="dropdown__folder" id="dropdown__folder-${folder.folder_id}"></div> */

function addFolder(element) {
  var folders__folders = document.querySelector(".content__folders");
  folders__folders.appendChild(element);
}
function deleteFolder(element) {
  var folders__folders = document.querySelector(".content__folders");
  folders__folders.removeChild(element);
}
function addFolders(options) {
  var folder_active = options.getFolder();
  var folders__folders = document.querySelector(".content__folders");
  var user = options.getUser();
  folders__folders.innerHTML = "";
  options.data.forEach(function (folder) {
    addFolder(getFolder(folder, folder_active, user));
  });
}
function replaceFolder(element) {
  var folders__folders = document.querySelector(".content__folders");
  folders__folders.replaceWith(element);
}
function noContent(container, text) {
  var elem = document.createElement("div");
  elem.classList.add("content__no-content");
  var html = "\n   <div class=\"text__no-content\">".concat(text, "</div>\n   ");
  elem.innerHTML = html;
  var content__folders = document.querySelector(".content__folders");
  content__folders.innerHTML = "";
  content__folders.appendChild(elem);
}

/***/ }),

/***/ "./assets/js/editDOM/_post.js":
/*!************************************!*\
  !*** ./assets/js/editDOM/_post.js ***!
  \************************************/
/*! exports provided: getPost, addPost, addPosts, addPostTags, addPostTag, openPost, replaceDOM, addAttributes, noContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPosts", function() { return addPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostTags", function() { return addPostTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostTag", function() { return addPostTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPost", function() { return openPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceDOM", function() { return replaceDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttributes", function() { return addAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noContent", function() { return noContent; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");


var Routing = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function getPost(data, options) {
  var html = "\n   <div class=\"overlay__post\"></div>\n   <div class=\"dropdown__post\" id=\"".concat(options.dropdown_container_id, "-").concat(data.id, "\"></div>\n   <div class=\"post-item\">\n      <div class=\"post__header\">\n         <div class=\"header__strip\"></div>\n         <img src=\"").concat(data.front_cover_link ? data.front_cover_link : "/uploads/defaults/noimage.jpg", "\" alt=\"\" class=\"header__img\">\n      </div>\n\n      <div class=\"post__body\">\n      \n      <div class=\"body__row\">\n         <i class=\"fas fa-ellipsis-h dropdown__trigger post__icon\" id=\"").concat(options.dropdown_trigger_id, "-").concat(data.id, "\"></i>\n      </div>\n\n      <div class=\"body__row\">\n         <a href=\"").concat(Routing.generate("read_post", {
    profile: data.author.id,
    post: data.id
  }), "\" class=\"body__title\">").concat(data.title, "</a>\n      </div>\n\n      <div class=\"body__row\">\n         <div class=\"row__column\">  \n            <div class=\"body__created-at\">").concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["timeAgo"](data.created_at), "</div>\n         </div>\n         <div class=\"row__column\">   \n            <span>by</span>\n            <a class=\"body__author\" href=\"").concat(Routing.generate("profile_page", {
    profile: data.author.id
  }), "\">").concat(data.author.firstname, "</a>\n      </div>\n      </div>\n\n         <div class=\"body__row\">\n            <div class=\"body__tags\"></div>\n         </div>\n \n      </div>\n\n      <div class=\"post__footer\">\n         <div class=\"footer__counter\">\n            <i class=\"far fa-thumbs-up toogle_likes\" state=\"").concat(data.state, "\"></i>\n            <span class=\"trigger__modal counter__likes\">(").concat(data.likes, ")</span>\n         </div>\n         <div class=\"footer__counter\">\n            <i class=\"far fa-thumbs-down toogle_likes\" state=\"").concat(data.state, "\"></i>\n            <span class=\"trigger__modal counter__dislikes\">(").concat(data.dislikes, ")</span>\n         </div>\n         <div class=\"footer__counter comments__counter\">\n            <i class=\"far fa-comment\"></i>\n            <span class=\"trigger__comments-modal\">(").concat(data.comments, ")</span>\n         </div>\n      </div>\n   </div>\n   ");
  var box_post = document.createElement("div");
  box_post.classList.add("box__post");
  box_post.setAttribute("post", data.id);
  box_post.innerHTML = html;
  var box_tags = box_post.querySelector(".body__tags");
  addPostTags(box_tags, data.tags);
  addAttributes(box_post, data);
  var user = options.getUser();
  var dd = box_post.querySelector(".dropdown__post");
  var icon = box_post.querySelector(".post__icon");

  if (data.author.id !== user.id) {
    icon.remove();
    dd.remove();
  }

  return box_post;
}
function addPost(post, container) {
  var posts__posts = document.querySelector(container);
  posts__posts.appendChild(post);
}
function addPosts(options) {
  var posts__posts = document.querySelector(options.container);
  posts__posts.innerHTML = "";
  options.data.forEach(function (post) {
    addPost(getPost(post, options), options.container);
  });
}
function addPostTags(container, tags) {
  tags.forEach(function (tag) {
    container.appendChild(addPostTag(tag));
  });
}
function addPostTag(tag) {
  var tag_element = document.createElement("a");
  tag_element.setAttribute("tag", tag.id);
  tag_element.classList.add("tags__tag");
  tag_element.innerHTML = "#".concat(tag.name);
  return tag_element;
}
function openPost(res) {
  var box__post = document.createElement("div");
  box__post.classList.add("box__post");
  box__post.setAttribute("post", res.id);
  var html = "\n   <div class=\"post__title\">".concat(res.title, "</div>\n   <div class=\"post__created-at\">").concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["timeAgo"](res.created_at), "</div>\n   <div class=\"post__body\">").concat(res.body, "</div>\n   ");
  box__post.innerHTML = html;
  return box__post;
}
function replaceDOM(element) {
  var box_profile_content = document.querySelector(".box__profile-content");
  box_profile_content.replaceWith(element);
}
function addAttributes(container, data) {
  var like_icon = container.querySelector(".fa-thumbs-up");
  var dislike_icon = container.querySelector(".fa-thumbs-down");

  if (data.state == "neutral") {
    like_icon.setAttribute("state", "neutral");
    dislike_icon.setAttribute("state", "neutral");
  } else if (data.state == "liked") {
    like_icon.classList.add("state__active");
    like_icon.setAttribute("state", "liked");
    dislike_icon.classList.add("state__disabled");
    dislike_icon.setAttribute("state", "liked");
  } else if (data.state == "disliked") {
    dislike_icon.classList.add("state__active");
    dislike_icon.setAttribute("state", "disliked");
    like_icon.classList.add("state__disabled");
    like_icon.setAttribute("state", "disliked");
  }
}
function noContent(container, text) {
  var elem = document.createElement("div");
  elem.classList.add("content__no-content");
  var html = "\n   <div class=\"text__no-content\">".concat(text, "</div>\n   ");
  elem.innerHTML = html;
  var content__posts = document.querySelector(container);
  content__posts.innerHTML = "";
  content__posts.appendChild(elem);
}

/***/ }),

/***/ "./assets/js/editDOM/_profile.js":
/*!***************************************!*\
  !*** ./assets/js/editDOM/_profile.js ***!
  \***************************************/
/*! exports provided: sectionEditProfile, sectionProfileInfo, replaceDOM, profileSection, editDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionEditProfile", function() { return sectionEditProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionProfileInfo", function() { return sectionProfileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceDOM", function() { return replaceDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSection", function() { return profileSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editDOM", function() { return editDOM; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");

function sectionEditProfile() {
  var section = document.createElement("div");
  section.classList.add("section__profile-form");
  var html = "   \n   <div class=\"column__left\"> \n      <div class=\"input-group__cover\">\n         <div class=\"cover__label\">Profile Image</div>\n         <label for=\"input__cover\" class=\"cover__btn-upload\">\n            <i class=\"fas fa-image\"></i>\n         </label>\n         <div class=\"cover__btn-clear\">\n            <i class=\"fas fa-times\"></i>\n         </div>\n         <div class=\"cover__cover-preview\">\n            <img src=\"\" alt=\"Cover Preview\" class=\"cover-preview__image\">\n            <span class=\"cover-preview__text\">Profile Image</span>\n         </div>\n         <input type=\"file\" class=\"input-group__input input__cover\" id=\"input__cover\">\n      </div>\n   </div> \n\n   <div class=\"column__right\">\n      <div class=\"input-group\">\n         <label for=\"\">Firstname</label>\n         <input type=\"text\" class=\"input__firstname\">\n      </div>\n      <div class=\"input-group\">\n         <label for=\"\">Lastname</label>\n         <input type=\"text\" class=\"input__lastname\">\n      </div>\n      <div class=\"input-group\">\n         <label for=\"\">Alias</label>\n         <input type=\"text\" class=\"input__alias\">\n      </div>\n      <button class=\"btn__form-submit\">Update</button>\n   </div>";
  section.innerHTML = html;
  return section;
}
function sectionProfileInfo(profile) {
  var section = document.createElement("div");
  section.classList.add("section__author-info");
  var html = "\n         <img src=\"\" alt=\"\" class=\"author__img\"> \n\n         <div class=\"author__info\">\n            <div class=\"author__name\">John Doe</div>\n            <div class=\"author__alias\">@pildsas</div>\n            <div class=\"author__about\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus molestias aperiam quam officia quasi laboriosam ab eius at ad.</div>\n            <div class=\"author__footer\">\n               \n               <div class=\"footer__posts\">\n                  <span>posts</span>\n                  <span>34</span>\n               </div>\n               \n               <button class=\"btn__follow\">Follow</button>\n\n               <div class=\"footer__followers\">\n                  <span>followers</span>\n                  <span>105</span>\n               </div>\n\n         </div> \n      </div>  \n   ";
  section.innerHTML = html;
  return section;
}
function replaceDOM(section) {
  var content = document.querySelector(".main-content__author");
  content.innerHTML = "";
  content.appendChild(section);
}
function profileSection() {
  var html = "\n<div class=\"main-content__header accordion__trigger\" id=\"header__author\">\n<div class=\"header__text\">Author</div> \n<i class=\"fas fa-chevron-down header__icon\"></i>  \n</div>\n<div class=\"main-content__author accordion__content\">\n\n<div class=\"section__author-info\">\n<img src=\"{{ profile.getAvatar() }}\" alt=\"\" class=\"author__img\"> \n<div class=\"section__icons\">\n<i class=\"fas fa-user-edit\" id=\"icon__profile-edit\"></i>\n</div>\n\n<div class=\"author__info\">\n<div class=\"author__name\">{{ profile.getFirstname() }} {{ profile.getLastname() }}</div>\n<div class=\"author__alias\">\n{% if profile.getNickname() %}\n@{{ profile.getNickname() }}    \n{% endif %}\n</div>\n\n<div class=\"author__about\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus molestias aperiam quam officia quasi laboriosam ab eius at ad.</div>\n<div class=\"author__footer\">\n\n<div class=\"footer__posts\">\n<span>following</span>\n<span class=\"following__counter\">{{ profile.getFollowing().count() }}</span>\n</div>\n\n\n\n<button class=\"btn__follow {% if follow %}remove__follower{% else %}add__follower{% endif %}\n{% if profile.getUser() == app.user %} btn__disabled {% endif %}\n\">{% if follow %}Unfollow{% else %}Follow{% endif %}</button>\n\n<div class=\"footer__followers\">\n<span>followers</span>\n<span class=\"followers__counter\">{{followers_count}}</span>\n</div>\n\n</div> \n</div>  \n</div>\n   ";
  console.log(html);
  return html;
}
function editDOM(response) {
  var img = document.querySelector(".author__img");
  var name = document.querySelector(".author__name");
  var alias = document.querySelector(".author__alias");
  var about = document.querySelector(".author__about");
  img.setAttribute("src", response.avatar);
  name.innerHTML = "".concat(response.firstname, " ").concat(response.lastname);
  alias.innerHTML = response.nickname ? "@".concat(response.nickname) : "";
  about.innerHTML = response.about ? response.about : "";
}

/***/ }),

/***/ "./assets/js/folder.js":
/*!*****************************!*\
  !*** ./assets/js/folder.js ***!
  \*****************************/
/*! exports provided: deleteFolder, renameFolder, getFoldersNames, toggleFolders, updateFoldersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFolder", function() { return deleteFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameFolder", function() { return renameFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFoldersNames", function() { return getFoldersNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFolders", function() { return toggleFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFoldersList", function() { return updateFoldersList; });
/* harmony import */ var _editDOM_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editDOM/_folder */ "./assets/js/editDOM/_folder.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion */ "./assets/js/components/accordion.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes); // export function createFolder(folder_name, profile_id) {
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

function deleteFolder(_x) {
  return _deleteFolder.apply(this, arguments);
}

function _deleteFolder() {
  _deleteFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target) {
    var folder_id, data, url, promise;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            folder_id = _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](target, "box__folder").getAttribute("folder");
            data = new FormData();
            data.append("folder_id", folder_id);
            url = Routing.generate("delete_folder");
            promise = fetch(url, {
              method: "POST",
              body: data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            });
            return _context.abrupt("return", promise);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deleteFolder.apply(this, arguments);
}

function renameFolder(_x2, _x3) {
  return _renameFolder.apply(this, arguments);
}

function _renameFolder() {
  _renameFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(target, folder_name) {
    var folder_id, data, url, promise;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            folder_id = _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](target, "box__folder").getAttribute("folder");
            data = new FormData();
            data.append("folder_id", folder_id);
            data.append("folder_name", folder_name);
            url = Routing.generate("rename_folder");
            promise = fetch(url, {
              method: "POST",
              body: data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            });
            return _context2.abrupt("return", promise);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _renameFolder.apply(this, arguments);
}

function getFoldersNames() {
  var url = Routing.generate("get_folders");
  var promise = fetch(url, {
    method: "GET",
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    var folders = [];
    res.forEach(function (folder) {
      folders.push([folder.name, folder.folder_id]);
    });
    return folders;
  });
  return promise;
}
function toggleFolders(options) {
  var _this = this;

  this.folders = document.querySelectorAll(options.folder);
  this.folders.forEach(function (folder) {
    folder.addEventListener("click", _helpers__WEBPACK_IMPORTED_MODULE_1__["throttle"](function (e) {
      _this.target = e.target;
      _this.name = _this.target.querySelector(".body__name").innerHTML;

      _this.init();
    }));
  });

  this.removeClass = function () {
    _this.folders.forEach(function (folder) {
      if (folder == _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](_this.target, "folder__item")) return;else folder.classList.remove("folder__active");
    });
  };

  this.addClass = function () {
    _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](_this.target, "folder__item").classList.toggle("folder__active");
  };

  this.getCurrentFolder = function () {
    var current_folder = _helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstElementByClassName"](_this.target, "box__folder").getAttribute("folder");
    return current_folder;
  };

  this.setFolder = function () {
    if (_this.previous_folder == _this.current_folder) {
      _this.folder = null;
    } else {
      _this.folder = _this.current_folder;
    }
  };

  this.init = function () {
    _this.current_folder = _this.getCurrentFolder();
    _this.previous_folder = options.getFolder();

    _this.setFolder();

    options.setFolder(_this.folder);

    _this.removeClass();

    _this.addClass();

    if (options.cb) options.cb(_this.folder, _this.name);
  };
}
function updateFoldersList(options) {
  var items = document.querySelector(".input__folder").querySelector(".dropdown__items");
  items.innerHTML = "";
  options.data.forEach(function (elem) {
    var dd_item = document.createElement("div");
    dd_item.classList.add("dropdown__item");
    var dd_item_attr = options.attr ? options.attr : null;
    if (dd_item_attr && elem[1]) dd_item.setAttribute(options.attr, elem[1]);
    dd_item.setAttribute("onmousedown", "var self=getddv(this);self.clicked(this)");
    dd_item.innerHTML = elem[0];
    items.prepend(dd_item);
  });

  if (options.bottom_item) {
    var dd_item = document.createElement("div");
    dd_item.classList.add("dropdown__item", "item__bottom");
    dd_item.setAttribute("onmousedown", "var self=getddv(this);self.clicked(this)");
    var html = "\n            <i class=\"fas fa-plus-circle\"></i>\n            <span>".concat(options.bottom_item, "</span>\n            ");
    dd_item.innerHTML = html;
    items.appendChild(dd_item);
  }
}

/***/ }),

/***/ "./assets/js/follow.js":
/*!*****************************!*\
  !*** ./assets/js/follow.js ***!
  \*****************************/
/*! exports provided: ToggleFollow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFollow", function() { return ToggleFollow; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function ToggleFollow(target) {
  var _this = this;

  this.prepareFetch = function () {
    _this.profile_id = document.querySelector(".box__main-content").getAttribute("profile");
    _this.fetch_body = new FormData();

    _this.fetch_body.append("id", _this.profile_id);

    if (target.classList.contains("add__follower")) {
      _this.url = Routing.generate("add_following");
    } else if (target.classList.contains("remove__follower")) {
      _this.url = Routing.generate("remove_following");
    }
  };

  this.fetchData = function () {
    _this.promise = fetch(_this.url, {
      method: "POST",
      body: _this.fetch_body,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res;
    });
    return _this.promise;
  };

  this.render = function () {
    if (target.classList.contains("add__follower")) {
      target.classList.remove("add__follower");
      target.classList.add("remove__follower");
      target.innerHTML = "Unfollow";
    } else if (target.classList.contains("remove__follower")) {
      target.classList.remove("remove__follower");
      target.classList.add("add__follower");
      target.innerHTML = "Follow";
    }

    document.querySelector(".followers__counter").innerHTML = _this.data.followers_count;
  };

  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this.prepareFetch();

            _context.next = 3;
            return _this.fetchData();

          case 3:
            _this.data = _context.sent;

            _this.render();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  this.init();
} // export function getSubscribtions(data) {
//    let url = Routing.generate("get_subscribtions");
//    fetch(url, {
//       method: "POST",
//       body: data,
//       headers: {
//          "X-Requested-With": "XMLHttpRequest",
//       },
//    })
//       .then((res) => {
//          return res.json();
//       })
//       .then((res) => {
//          console.log(res);
//          let element = subscribtions.getSubscribtions(res);
//          subscribtions.replaceDOM(element);
//       });
// }

/***/ }),

/***/ "./assets/js/form_post.js":
/*!********************************!*\
  !*** ./assets/js/form_post.js ***!
  \********************************/
/*! exports provided: renderAutoComplete, SearchBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAutoComplete", function() { return renderAutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return SearchBar; });
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tags */ "./assets/js/components/tags.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);

var autoComplete = __webpack_require__(/*! @tarekraafat/autocomplete.js/dist/js/autoComplete */ "./node_modules/@tarekraafat/autocomplete.js/dist/js/autoComplete.js");

function renderAutoComplete() {
  new autoComplete({
    data: {
      src: function () {
        var _src = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var query, source, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  query = document.querySelector("#input__tag").value;
                  _context.next = 3;
                  return fetch(Routing.generate("find_tags", {
                    query: query
                  }));

                case 3:
                  source = _context.sent;
                  _context.next = 6;
                  return source.json();

                case 6:
                  data = _context.sent;
                  return _context.abrupt("return", data.tags);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function src() {
          return _src.apply(this, arguments);
        }

        return src;
      }(),
      key: ["name"],
      cache: false
    },
    placeHolder: "Enter Tag",
    selector: "#input__tag",
    threshold: 1,
    debounce: 300,
    // searchEngine: "strict",
    resultsList: {
      render: true,
      container: function container(source) {
        source.setAttribute("id", "tags__match");
      },
      destination: document.querySelector("#input__tag"),
      position: "afterend",
      element: "div"
    },
    // highlight: true,
    resultItem: {
      content: function content(data, source) {
        source.innerHTML = data.match;
      },
      element: "div"
    },
    noResults: function noResults() {
      var result = document.createElement("div");
      var span = document.createElement("span");
      span.innerHTML = "<i class=\"fas fa-plus\"></i>";
      result.setAttribute("class", "no_result");
      result.setAttribute("tabindex", "1");
      result.innerHTML = "Create new tag ";
      result.appendChild(span);
      document.querySelector("#tags__match").appendChild(result);
      result.addEventListener("click", function () {
        var value = document.querySelector("#input__tag").value;
        _components_tags__WEBPACK_IMPORTED_MODULE_0__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_0__["createTag"](value));
        document.querySelector("#input__tag").value = "";
        document.querySelector("#tags__match").innerHTML = "";
      });
    },
    onSelection: function onSelection(feedback) {
      _components_tags__WEBPACK_IMPORTED_MODULE_0__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_0__["createTag"](feedback.selection.match));
      document.querySelector("#input__tag").value = "";
    }
  });
}
function SearchBar(options) {
  var _this = this;

  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _this.container = document.querySelector(options.container);

            _this.resultsList();

            _this.addEv();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  this.src = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(Routing.generate("browse", {
              query: _this.query
            }));

          case 2:
            _this.source = _context3.sent;
            _context3.next = 5;
            return _this.source.json();

          case 5:
            _this.data = _context3.sent;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  this.resultPost = function () {
    _this.resultsList.innerHTML = "";

    _this.data.posts_data.forEach(function (item) {
      var tags = "";
      item.tags.forEach(function (tag) {
        tags += "\n            <span>#".concat(_this.highlight(tag.name), "</span>\n            ");
      });
      var html = "\n            <div class=\"result-item__col\">\n               <img src=\"".concat(item.front_cover_link, "\" alt=\"\">\n            </div>\n            <div class=\"result-item__col\">\n               <div class=\"result-item__row\">").concat(_this.highlight(item.title), "</div>\n               <div class=\"result-item__row\">\n                 <div>").concat(tags, "</div>\n                 <span class=\"resul-item__type\">Post</span>\n               </div>\n         </div>\n         ");
      var result_item = document.createElement("div");
      result_item.classList.add("box__result-item");
      result_item.innerHTML = html;

      _this.resultsList.appendChild(result_item);

      result_item.addEventListener("click", function () {
        _this.redirect("read_post", item.id, item.author.id);
      });
    });

    return true;
  };

  this.resultAuthor = function () {
    _this.data.profiles_data.forEach(function (item) {
      var html = "\n            <div class=\"result-item__col\">\n               <img src=\"".concat(item.avatar, "\" alt=\"\">\n            </div>\n            <div class=\"result-item__col\">\n               <div class=\"result-item__row\">").concat(_this.highlight(item.firstname), " ").concat(_this.highlight(item.lastname), "</div>\n               <div class=\"result-item__row\">\n                  <span class=\"resul-item__nickname\">", "".concat(_this.highlight(item.nickname) ? "@" + _this.highlight(item.nickname) : ""), "</span>\n                  <span class=\"resul-item__type\">Author</span>\n               </div>\n         </div>\n         ");
      var result_item = document.createElement("div");
      result_item.classList.add("box__result-item");
      result_item.innerHTML = html;

      _this.resultsList.appendChild(result_item);

      result_item.addEventListener("click", function () {
        _this.redirect("profile_page", null, item.id);
      });
    });

    return true;
  };

  this.noResults = function () {
    var html = "\n      <div class=\"result-item__col\">\n         <img class=\"img__not-found\" src=\"/img/defaults/not_found.svg\" alt=\"\">\n      </div>\n      <div class=\"result-item__col\">\n         <div class=\"result-item__row result-item__no-results\">No results found!</div>\n         <div class=\"result-item__row\"></div>\n      </div>\n   ";
    var result_item = document.createElement("div");
    result_item.classList.add("box__result-item");
    result_item.innerHTML = html;

    _this.resultsList.appendChild(result_item);

    result_item.addEventListener("click", function () {
      _this.target.value = "";
      _this.resultsList.innerHTML = "";
      if (document.querySelector(".overlay__main-content")) document.querySelector(".overlay__main-content").style.display = null;
    });
  };

  this.highlight = function (string) {
    if (!string) return;

    if (string.toLowerCase().includes(_this.query.toLowerCase())) {
      var start = string.toLowerCase().indexOf(_this.query);
      var end = start + _this.query.length;
      var substr = string.slice(start, end);
      var highlighted = string.toLowerCase().replace(_this.query.toLowerCase(), "<span class=\"text__highlight\">".concat(substr, "</span>"));
      return highlighted;
    } else {
      return string;
    }
  };

  this.resultsList = function () {
    _this.resultsList = document.createElement("div");

    _this.resultsList.setAttribute("id", options.resultsList);

    _this.container.appendChild(_this.resultsList);
  };

  this.addEv = function () {
    document.querySelector(options.search_input).addEventListener("input", _helpers__WEBPACK_IMPORTED_MODULE_1__["throttleLast"]( /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.target = e.target;
                _this.query = e.target.value;

                if (!(_this.query.length >= options.threshold)) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 5;
                return _this.src();

              case 5:
                if (_this.data.posts_data.length <= 0 && _this.data.profiles_data.length <= 0) {
                  _this.resultsList.innerHTML = "";

                  _this.setPosition(e.target);

                  _this.noResults();

                  if (document.querySelector(".overlay__main-content")) document.querySelector(".overlay__main-content").style.display = "block";
                } else {
                  _this.setPosition(e.target);

                  _this.resultPost();

                  _this.resultAuthor();

                  if (document.querySelector(".overlay__main-content")) document.querySelector(".overlay__main-content").style.display = "block";
                }

                _context4.next = 10;
                break;

              case 8:
                _this.resultsList.innerHTML = "";
                if (document.querySelector(".overlay__main-content")) document.querySelector(".overlay__main-content").style.display = null;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), options.throttle));
  };

  this.setPosition = function (target) {
    _this.location = _helpers__WEBPACK_IMPORTED_MODULE_1__["getPositions"](target);
    _this.resultsList.style.top = _this.location.top + 63 + "px";
  };

  this.redirect = function (loc) {
    var post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var author = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (loc == "profile_page") {
      window.location.href = Routing.generate(loc, {
        profile: author
      });
    } else {
      window.location.href = Routing.generate(loc, {
        profile: author,
        post: post
      });
    }
  };

  this.init();
}

/***/ }),

/***/ "./assets/js/helpers.js":
/*!******************************!*\
  !*** ./assets/js/helpers.js ***!
  \******************************/
/*! exports provided: debounce, getFormattedDate, timeAgo, getFirstElementByClassName, getAttrOrNull, setAttrOrFalse, last, getPosition, getPositions, addEvent, throttle, throttleLast, fadeOut, fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedDate", function() { return getFormattedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeAgo", function() { return timeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstElementByClassName", function() { return getFirstElementByClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttrOrNull", function() { return getAttrOrNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrOrFalse", function() { return setAttrOrFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositions", function() { return getPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleLast", function() { return throttleLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var obj = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(obj, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(obj, args);
  };
}
function getFormattedDate(date) {
  var prefomattedDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var hideYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var day = date.getDate();
  var month = MONTH_NAMES[date.getMonth()];
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = "0".concat(minutes);
  }

  if (prefomattedDate) {
    // Today at 10:20
    // Yesterday at 10:20
    return "".concat(prefomattedDate, " at ").concat(hours, ":").concat(minutes);
  }

  if (hideYear) {
    // 10. January at 10:20
    return "".concat(day, " ").concat(month, " at ").concat(hours, ":").concat(minutes);
  } // 10. January 2017. at 10:20


  return "".concat(day, " ").concat(month, " ").concat(year, ". at ").concat(hours, ":").concat(minutes);
} // --- Main function

function timeAgo(dateParam) {
  if (!dateParam) {
    return null;
  }

  var date = _typeof(dateParam) === "object" ? dateParam : new Date(dateParam);
  var DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000

  var today = new Date();
  var yesterday = new Date(today - DAY_IN_MS);
  var seconds = Math.round((today - date) / 1000);
  var minutes = Math.round(seconds / 60);
  var isToday = today.toDateString() === date.toDateString();
  var isYesterday = yesterday.toDateString() === date.toDateString();
  var isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) {
    return "now";
  } else if (seconds < 60) {
    return "".concat(seconds, " seconds ago");
  } else if (seconds < 90) {
    return "about a minute ago";
  } else if (minutes < 60) {
    return "".concat(minutes, " minutes ago");
  } else if (isToday) {
    return getFormattedDate(date, "Today"); // Today at 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, "Yesterday"); // Yesterday at 10:20
  } else if (isThisYear) {
    return getFormattedDate(date, false, true); // 10. January at 10:20
  }

  return getFormattedDate(date); // 10. January 2017. at 10:20
}
function getFirstElementByClassName(element, classname) {
  // look for direct parent
  if (element.classList.contains(classname)) {
    return element; // if no direct parent found look by classname
  } else if (!element.getElementsByClassName(classname).length == 0) {
    return element.getElementsByClassName(classname)[0]; //if element have no parent throw error
  } else if (element.parentElement == null) {
    return null; // throw `error from helpers.getFirstElementByClassName: where was an error in finding target element – ${classname}`;
  }

  return getFirstElementByClassName(element.parentElement, classname);
}
function getAttrOrNull(classlist, attr) {
  var current_element = document.querySelector(".".concat(classlist.shift()));
  classlist.forEach(function (classname) {
    if (current_element) {
      current_element = current_element.querySelector(".".concat(classname));
    }
  });

  if (current_element) {
    var attribute = current_element.getAttribute(attr);
  }

  var return_value = attribute ? attribute : null;
  return return_value;
}
function setAttrOrFalse(classlist, name, attr) {
  var current_element = document.querySelector(".".concat(classlist.shift()));
  classlist.forEach(function (classname) {
    if (current_element) {
      current_element = current_element.querySelector(".".concat(classname));
    }
  });

  if (current_element) {
    current_element.setAttribute(name, attr);
  }

  var return_value = current_element ? true : false;
  return return_value;
} // last element in array

function last(array) {
  return array[array.length - 1];
} //return absolute position of element

var getPosition = function getPosition(element) {
  var top = 0,
      left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
};
var getPositions = function getPositions(element) {
  var top = 0,
      left = 0;
  var right = window.innerWidth - element.getBoundingClientRect().right;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
    right: right
  };
};
function addEvent(object, type, callback) {
  if (object == null || typeof object == "undefined") return;

  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent("on" + type, callback);
  } else {
    object["on" + type] = callback;
  }
}
function throttle(func, limit) {
  var inThrottle;
  return function () {
    var args = arguments;
    var context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function () {
        return inThrottle = false;
      }, limit);
    }
  };
}
function throttleLast(func, limit) {
  var lastFunc;
  var lastRan;
  return function () {
    var context = this;
    var args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
} // ** FADE OUT FUNCTION **

function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
} // ** FADE IN FUNCTION **

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);

    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

/***/ }),

/***/ "./assets/js/js_routes.json":
/*!**********************************!*\
  !*** ./assets/js/js_routes.json ***!
  \**********************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"post_like\":{\"tokens\":[[\"text\",\"/like\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"post_dislike\":{\"tokens\":[[\"text\",\"/dislike\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"post_unlike\":{\"tokens\":[[\"text\",\"/unlike\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"post_undislike\":{\"tokens\":[[\"text\",\"/undislike\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"comment_like\":{\"tokens\":[[\"text\",\"/comment-like\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"comment_dislike\":{\"tokens\":[[\"text\",\"/comment-dislike\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"comment_unlike\":{\"tokens\":[[\"text\",\"/comment-unlike\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"comment_undislike\":{\"tokens\":[[\"text\",\"/comment-undislike\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"post_likes\":{\"tokens\":[[\"text\",\"/post-likes\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"comment_likes\":{\"tokens\":[[\"text\",\"/comment-likes\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"post_comment\":{\"tokens\":[[\"text\",\"/post-comment\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"edit_comment\":{\"tokens\":[[\"text\",\"/edit-comment\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_comment\":{\"tokens\":[[\"text\",\"/get-comment\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_comments\":{\"tokens\":[[\"text\",\"/get-comments\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"delete_comment\":{\"tokens\":[[\"text\",\"/delete-comment\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"add_following\":{\"tokens\":[[\"text\",\"/add-following\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"remove_following\":{\"tokens\":[[\"text\",\"/remove-following\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_followers\":{\"tokens\":[[\"text\",\"/get-followers\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_following\":{\"tokens\":[[\"text\",\"/get-following\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_follow\":{\"tokens\":[[\"text\",\"/get-follow\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_folder\":{\"tokens\":[[\"text\",\"/get-folder\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_folders\":{\"tokens\":[[\"text\",\"/get-folders\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"form_folder\":{\"tokens\":[[\"text\",\"/form-folder\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"create_folder\":{\"tokens\":[[\"text\",\"/create-folder\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"rename_folder\":{\"tokens\":[[\"text\",\"/rename-folder\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"delete_folder\":{\"tokens\":[[\"text\",\"/delete-folder\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_user_data\":{\"tokens\":[[\"text\",\"/get-user-data\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"browse\":{\"tokens\":[[\"text\",\"/browse\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"main_page\":{\"tokens\":[[\"text\",\"/\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"create_post\":{\"tokens\":[[\"text\",\"/create-post\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"edit_post\":{\"tokens\":[[\"text\",\"/edit-post\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"delete_post\":{\"tokens\":[[\"text\",\"/delete-post\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_posts\":{\"tokens\":[[\"text\",\"/get-posts\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_posts_all\":{\"tokens\":[[\"text\",\"/get-posts-all\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_post\":{\"tokens\":[[\"text\",\"/get-post\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"find_tags\":{\"tokens\":[[\"text\",\"/find-tags\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_tags\":{\"tokens\":[[\"text\",\"/get-tags\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"read_post\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"post\",true],[\"variable\",\"/\",\"[^/]++\",\"profile\",true]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"update_profile\":{\"tokens\":[[\"text\",\"/update-profile\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_profile\":{\"tokens\":[[\"text\",\"/get-profile\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"login\":{\"tokens\":[[\"text\",\"/login\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"logout\":{\"tokens\":[[\"text\",\"/logout\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"register\":{\"tokens\":[[\"text\",\"/register\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"get_token\":{\"tokens\":[[\"text\",\"/get-token\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]},\"profile_page\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"profile\",true]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./assets/js/likes.js":
/*!****************************!*\
  !*** ./assets/js/likes.js ***!
  \****************************/
/*! exports provided: toggleLikes, UpdateLikes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLikes", function() { return toggleLikes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLikes", function() { return UpdateLikes; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);

function toggleLikes() {
  var toggle_likes = document.querySelectorAll(".toogle_likes");
  toggle_likes.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      new UpdateLikes({
        target: event.target,
        id: {
          id: _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](event.target, "box__post").getAttribute("post")
        },
        url: {
          like: "post_like",
          dislike: "post_dislike",
          unlike: "post_unlike",
          undislike: "post_undislike"
        }
      });
    });
  });
}
var UpdateLikes = _helpers__WEBPACK_IMPORTED_MODULE_0__["throttle"](function (options) {
  var _this = this;

  this.container = options.target.parentElement.parentElement;

  this.init = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.prepareFetch(target);

              _context.next = 3;
              return _this.fetchData();

            case 3:
              _this.data = _context.sent;

              if (_this.data.logged) {
                _context.next = 7;
                break;
              }

              window.location.replace(Routing.generate("login"));
              return _context.abrupt("return");

            case 7:
              _this.likes_counter = _this.container.querySelector(".counter__likes");
              _this.likes_counter.innerHTML = "(".concat(_this.data.likes, ")");
              _this.dislikes_counter = _this.container.querySelector(".counter__dislikes");
              _this.dislikes_counter.innerHTML = "(".concat(_this.data.dislikes, ")");

              _this.toggleIcon();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  this.removeAttributes = function () {
    _this.like_icon.removeAttribute("state");

    _this.dislike_icon.removeAttribute("state");

    _this.like_icon.classList.remove("state__disabled");

    _this.like_icon.classList.remove("state__active");

    _this.dislike_icon.classList.remove("state__disabled");

    _this.dislike_icon.classList.remove("state__active");
  };

  this.toggleIcon = function () {
    _this.like_icon = _this.container.querySelector(".fa-thumbs-up");
    _this.dislike_icon = _this.container.querySelector(".fa-thumbs-down");

    if (_this.data.state == "neutral") {
      _this.removeAttributes();

      _this.like_icon.setAttribute("state", "neutral");

      _this.dislike_icon.setAttribute("state", "neutral");
    } else if (_this.data.state == "liked") {
      _this.removeAttributes();

      _this.like_icon.classList.add("state__active");

      _this.like_icon.setAttribute("state", "liked");

      _this.dislike_icon.classList.add("state__disabled");

      _this.dislike_icon.setAttribute("state", "liked");
    } else if (_this.data.state == "disliked") {
      _this.removeAttributes();

      _this.dislike_icon.classList.add("state__active");

      _this.dislike_icon.setAttribute("state", "disliked");

      _this.like_icon.classList.add("state__disabled");

      _this.like_icon.setAttribute("state", "disliked");
    }
  };

  this.prepareFetch = function (target) {
    _this.state = target.getAttribute("state");
    _this.btn_type = target.classList.contains("fa-thumbs-up") ? "like" : "dislike";

    if (_this.state == "neutral") {
      if (_this.btn_type == "like") {
        _this.url = Routing.generate(options.url.like);
      } else {
        _this.url = Routing.generate(options.url.dislike);
      }
    } else if (_this.state == "liked") {
      _this.url = Routing.generate(options.url.unlike);
    } else if (_this.state == "disliked") {
      _this.url = Routing.generate(options.url.undislike);
    }
  };

  this.fetchData = function () {
    var promise = fetch(_this.url, {
      method: "POST",
      body: JSON.stringify(options.id),
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res;
    });
    return promise;
  };

  this.init(options.target);
}, 300);

/***/ }),

/***/ "./assets/js/post_controller.js":
/*!**************************************!*\
  !*** ./assets/js/post_controller.js ***!
  \**************************************/
/*! exports provided: deletePost, getPost, createPost, editPost, changeHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPost", function() { return editPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHeaders", function() { return changeHeaders; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function deletePost(_x) {
  return _deletePost.apply(this, arguments);
}

function _deletePost() {
  _deletePost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target) {
    var post_id, data, url, promise;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            post_id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](target, "box__post").getAttribute("post");
            data = new FormData();
            data.append("post_id", post_id);
            url = Routing.generate("delete_post");
            promise = fetch(url, {
              method: "POST",
              body: data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            });
            return _context.abrupt("return", promise);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deletePost.apply(this, arguments);
}

function getPost(_x2) {
  return _getPost.apply(this, arguments);
}

function _getPost() {
  _getPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(target) {
    var post_id, data, url, promise;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            post_id = _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](target, "box__post").getAttribute("post");
            data = new FormData();
            data.append("post_id", post_id);
            url = Routing.generate("get_post");
            promise = fetch(url, {
              method: "POST",
              body: data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            });
            return _context2.abrupt("return", promise);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPost.apply(this, arguments);
}

function createPost(_x3) {
  return _createPost.apply(this, arguments);
}

function _createPost() {
  _createPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var url;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = Routing.generate("create_post");
            return _context3.abrupt("return", fetch(url, {
              method: "POST",
              body: data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createPost.apply(this, arguments);
}

function editPost(data) {
  var url = Routing.generate("edit_post");
  var promise = fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  }).then(function (res) {
    return res.json();
  });
  return promise;
}
function changeHeaders(count) {
  document.querySelector(".header__text").innerHTML = "Posts ".concat(count);
}

/***/ }),

/***/ "./assets/js/profile.js":
/*!******************************!*\
  !*** ./assets/js/profile.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion */ "./assets/js/components/accordion.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder */ "./assets/js/folder.js");
/* harmony import */ var _post_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post_controller */ "./assets/js/post_controller.js");
/* harmony import */ var _follow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./follow */ "./assets/js/follow.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pagination */ "./assets/js/components/pagination.js");
/* harmony import */ var _components_modals_edit_folder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modals/_edit_folder */ "./assets/js/components/modals/_edit_folder.js");
/* harmony import */ var _components_modals_delete_folder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modals/_delete_folder */ "./assets/js/components/modals/_delete_folder.js");
/* harmony import */ var _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modals/_delete_post */ "./assets/js/components/modals/_delete_post.js");
/* harmony import */ var _components_modals_create_folder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modals/_create_folder */ "./assets/js/components/modals/_create_folder.js");
/* harmony import */ var _components_modals_create_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals/_create_post */ "./assets/js/components/modals/_create_post.js");
/* harmony import */ var _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modals/_edit_post */ "./assets/js/components/modals/_edit_post.js");
/* harmony import */ var _components_modals_edit_profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modals/_edit_profile */ "./assets/js/components/modals/_edit_profile.js");
/* harmony import */ var _editDOM_folder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editDOM/_folder */ "./assets/js/editDOM/_folder.js");
/* harmony import */ var _editDOM_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editDOM/_post */ "./assets/js/editDOM/_post.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./likes */ "./assets/js/likes.js");
/* harmony import */ var _form_post__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form_post */ "./assets/js/form_post.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dropdown */ "./assets/js/components/dropdown.js");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tags */ "./assets/js/components/tags.js");
/* harmony import */ var _editDOM_profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editDOM/_profile */ "./assets/js/editDOM/_profile.js");
/* harmony import */ var _components_modals_response_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modals/_response_list */ "./assets/js/components/modals/_response_list.js");
/* harmony import */ var _components_modals_followers_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modals/_followers_list */ "./assets/js/components/modals/_followers_list.js");
/* harmony import */ var _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/modals/_comments_list */ "./assets/js/components/modals/_comments_list.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/comments */ "./assets/js/components/comments.js");
/* harmony import */ var _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/modals/_edit_comment */ "./assets/js/components/modals/_edit_comment.js");
/* harmony import */ var _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/modals/_delete_comment */ "./assets/js/components/modals/_delete_comment.js");
/* harmony import */ var _components_modals_tagged_post__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/modals/_tagged_post */ "./assets/js/components/modals/_tagged_post.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_27__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






























var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);

function ProfilePage() {
  var _this = this;

  var self = this;
  self.colors = {
    item_overlay: {
      listResponse: "rgba(84, 160, 255, 0.4)",
      listResponseSecondary: "rgba(84, 160, 255, 0.4)",
      commentsModal: "rgba(0, 168, 255, 0.3)",
      commentsModalSecondary: "rgba(0, 168, 255, 0.3)",
      dropdown: "rgba(34, 47, 62, 0.5)",
      dropdownSecondary: "rgba(0, 168, 255, 0.3)",
      deleteCommentModal: "rgba(232, 65, 24, 0.4)",
      deleteCommentModalSecondary: "rgba(232, 65, 24, 0.4)",
      deletePostModal: "rgba(232, 65, 24, 0.4)",
      deletePostModalSecondary: "rgba(232, 65, 24, 0.4)",
      editPostModal: "rgba(0, 210, 211, 0.3)",
      editPostModalSecondary: "rgba(0, 210, 211, 0.3)",
      editCommentModal: "rgba(0, 168, 255, 0.3)",
      editCommentModalSecondary: "rgba(232, 65, 24, 0.4)"
    },
    secondary_overlay: {
      listResponseSecondary: "rgba(0, 0, 0, 0.3)",
      deleteCommentModal: "rgba(0, 0, 0, 0.3)",
      editCommentModal: "rgba(0, 0, 0, 0.3)",
      editCommentModalSecondary: "rgba(0, 0, 0, 0.3)",
      commentsModalSecondary: "rgba(0, 0, 0, 0.3)",
      createFolderModalSecondary: "rgba(0, 0, 0, 0.3)",
      deletePostModalSecondary: "rgba(0, 0, 0, 0.3)",
      editPostModalSecondary: "rgba(0, 0, 0, 0.3)"
    }
  };
  /**
   * GET USER DATA
   */

  this.getProfileData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetch(Routing.generate(self.routes.get_user_data), {
              method: "GET",
              // body: this.data,
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              return res;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  /**
   * ROUTES
   */

  this.routes = {
    get_profile: "get_profile",
    update_profile: "update_profile",
    get_followers: "get_followers",
    get_following: "get_following",
    get_folders: "get_folders",
    get_posts: "get_posts",
    get_posts_all: "get_posts_all",
    get_user_data: "get_user_data",
    get_tags: "get_tags",
    get_follow: "get_follow"
  };
  /**
   * DEFAULT PAGINATION SETTINGS
   */

  this.pagination_data = {
    folders_page: 1,
    folders_sort: "created",
    folders_pagination_container: "folders__paginator",
    folder: null,
    posts_page: 1,
    posts_sort: "desc",
    posts_pagination_container: "posts__paginator",
    tag: null,
    tag_modal_page: 1,
    tag_modal_sort: "desc",
    tag_modal_pagination_container: "tag__paginator",
    tag_modal_tag: null
  };
  /**
   * EVENT LISTENERS
   */

  this.addEv = {
    followToggler: function followToggler() {
      document.querySelector(".btn__follow").addEventListener("click", function (e) {
        if (_this.profile_data.logged) {
          _follow__WEBPACK_IMPORTED_MODULE_4__["ToggleFollow"](e.target);
        } else {
          window.location.href = Routing.generate("login");
        }
      });
    },
    selectTag: function selectTag(container) {
      var tags_tag = document.querySelector(container).querySelectorAll(".tags__tag");
      tags_tag.forEach(function (tag) {
        tag.addEventListener("click", function (e) {
          self.pagination_data.tag_modal_tag = e.target.getAttribute("tag");
          new _components_modals_tagged_post__WEBPACK_IMPORTED_MODULE_26__["TaggedPost"]({
            id: "box__modal",
            target: e.target,
            style_class: "style-class__tagged-post",
            renderpaginated: function renderpaginated() {
              return _this.taggedPostPagination();
            },
            rendersort: function rendersort() {
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Dropdown"]({
                id: "sort__tag",
                attr: "sort",
                default_attr: ["sort", "desc"],
                data: [["Newest", "desc"], ["Most liked", "liked"], ["Most commented", "commented"]],
                placeholder: "Sort by",
                style: {
                  width: "200px"
                },
                cb: function cb(elem) {
                  self.pagination_data.tag_modal_sort = elem.getAttribute("sort");
                  self.taggedPostPagination();
                }
              });
            }
          });
        });
      });
    },
    listResponse: function listResponse(container) {
      var tooltip_toggle = document.querySelector(container).querySelectorAll(".trigger__modal");
      tooltip_toggle.forEach(function (span) {
        span.addEventListener("click", function (e) {
          new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_20__["responseList"]({
            id: "box__modal",
            target: e.target,
            attr: {
              classname: "box__post",
              attr: "post"
            },
            url: "post_likes",
            style_class: "style-class__response-list",
            item_overlay: "overlay__post",
            item_overlay_bg: self.colors.item_overlay.listResponse
          });
        });
      });
    },
    listResponseSecondary: function listResponseSecondary(container) {
      var tooltip_toggle = document.querySelector(container).querySelectorAll(".trigger__modal");
      tooltip_toggle.forEach(function (span) {
        span.addEventListener("click", function (e) {
          new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_20__["responseList"]({
            id: "box__modal-secondary",
            modal_overlay: "overlay__response-list",
            secondary_overlay: ".overlay__modal-item",
            secondary_overlay_bg: self.colors.secondary_overlay.listResponseSecondary,
            item_overlay: "overlay__post",
            item_overlay_bg: self.colors.item_overlay.listResponseSecondary,
            target: e.target,
            attr: {
              classname: "box__post",
              attr: "post"
            },
            url: "post_likes",
            style_class: "style-class__response-list"
          });
        });
      });
    },
    openComments: function openComments(container) {
      var comments_toggle = document.querySelector(container).querySelectorAll(".trigger__comments-modal");
      comments_toggle.forEach(function (span) {
        span.addEventListener("click", function (e) {
          new _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_22__["CommentsList"]({
            id: "box__modal",
            target: e.target,
            attr: {
              classname: "box__post",
              attr: "post"
            },
            url: "get_comments",
            style_class: "style-class__comments-list",
            item_overlay: "overlay__post",
            item_overlay_bg: self.colors.item_overlay.commentsModal,
            dropdown_container: "container__dd-comments",
            dropdown_trigger: "trigger__dd-comments",
            getUser: function getUser() {
              return _this.profile_data;
            },
            dropdown: function dropdown(comment) {
              if (comment.commented_post.author.id == _this.profile_data.id) {
                if (comment.comment_author.id == _this.profile_data.id) {
                  var data = [["Edit", "far fa-edit", "dd__edit"], ["Delete", "fas fa-trash", "dd__delete"]];
                } else {
                  var data = [["Delete", "fas fa-trash", "dd__delete"]];
                }
              } else if (comment.comment_author.id == _this.profile_data.id) {
                var data = [["Edit", "far fa-edit", "dd__edit"], ["Delete", "fas fa-trash", "dd__delete"]];
              }

              if (comment.commented_post.author.id != _this.profile_data.id && comment.comment_author.id != _this.profile_data.id) return;
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Icon"]({
                id: "container__dd-comments-".concat(comment.id),
                trigger: "#trigger__dd-comments-".concat(comment.id),
                data: data,
                item_overlay: "overlay__comment",
                item_overlay_bg: self.colors.item_overlay.dropdownSecondary,
                cb: function () {
                  var _cb = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(target) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            /**
                             * MODAL DELETE
                             */
                            if (target.classList.contains("dd__delete")) {
                              new _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_25__["DeleteComment"]({
                                id: "box__modal-secondary",
                                target: target,
                                style_class: "style-class__comment-delete",
                                secondary_overlay: ".overlay__modal-item",
                                secondary_overlay_bg: self.colors.secondary_overlay.deleteCommentModal,
                                item_overlay: "overlay__comment",
                                item_overlay_bg: self.colors.item_overlay.deleteCommentModal,
                                onsubmit: function () {
                                  var _onsubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2);
                                  }));

                                  function onsubmit() {
                                    return _onsubmit.apply(this, arguments);
                                  }

                                  return onsubmit;
                                }()
                              });
                              /**
                               * MODAL EDIT
                               */
                            } else if (target.classList.contains("dd__edit")) {
                              new _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_24__["EditComment"]({
                                id: "box__modal-secondary",
                                target: target,
                                style_class: "style-class__comment-edit",
                                secondary_overlay: ".overlay__modal-item",
                                secondary_overlay_bg: self.colors.secondary_overlay.editCommentModal,
                                item_overlay: "overlay__comment",
                                item_overlay_bg: self.colors.item_overlay.editCommentModal,
                                onsubmit: function () {
                                  var _onsubmit2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(response) {
                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            _components_comments__WEBPACK_IMPORTED_MODULE_23__["EditComment"](response);

                                          case 1:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3);
                                  }));

                                  function onsubmit(_x2) {
                                    return _onsubmit2.apply(this, arguments);
                                  }

                                  return onsubmit;
                                }()
                              });
                            }

                          case 1:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  function cb(_x) {
                    return _cb.apply(this, arguments);
                  }

                  return cb;
                }()
              });
            },
            onclickLikes: function onclickLikes(target) {
              /**
               * TOGGLE LIKES
               */
              new _likes__WEBPACK_IMPORTED_MODULE_15__["UpdateLikes"]({
                target: target,
                id: {
                  id: _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](target, "box__comment").getAttribute("comment")
                },
                url: {
                  like: "comment_like",
                  dislike: "comment_dislike",
                  unlike: "comment_unlike",
                  undislike: "comment_undislike"
                }
              });
            },
            onclickCount: function onclickCount(target) {
              new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_20__["responseList"]({
                id: "box__modal-secondary",
                target: target,
                attr: {
                  classname: "box__comment",
                  attr: "comment"
                },
                url: "comment_likes",
                style_class: "style-class__response-list",
                secondary_overlay: ".overlay__modal-item",
                secondary_overlay_bg: self.colors.secondary_overlay.listResponseSecondary,
                item_overlay: "overlay__comment",
                item_overlay_bg: self.colors.item_overlay.listResponseSecondary
              });
            }
          });
        });
      });
    },
    openCommentsSecondary: function openCommentsSecondary(container) {
      var comments_toggle = document.querySelector(container).querySelectorAll(".trigger__comments-modal");
      comments_toggle.forEach(function (span) {
        span.addEventListener("click", function (e) {
          new _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_22__["CommentsList"]({
            id: "box__modal-secondary",
            target: e.target,
            attr: {
              classname: "box__post",
              attr: "post"
            },
            url: "get_comments",
            style_class: "style-class__comments-list",
            modal_overlay: "overlay__comments-list",
            secondary_overlay: ".overlay__modal-item",
            secondary_overlay_bg: self.colors.secondary_overlay.commentsModalSecondary,
            item_overlay: "overlay__post",
            item_overlay_bg: self.colors.item_overlay.commentsModalSecondary,
            dropdown_container: "container__dd-comments-modal",
            dropdown_trigger: "trigger__dd-comments-modal",
            getUser: function getUser() {
              return _this.profile_data;
            },
            dropdown: function dropdown(comment) {
              if (comment.commented_post.author.id == _this.profile_data.id) {
                if (comment.comment_author.id == _this.profile_data.id) {
                  var data = [["Edit", "far fa-edit", "dd__edit"], ["Delete", "fas fa-trash", "dd__delete"]];
                } else {
                  var data = [["Delete", "fas fa-trash", "dd__delete"]];
                }
              } else if (comment.comment_author.id == _this.profile_data.id) {
                var data = [["Edit", "far fa-edit", "dd__edit"], ["Delete", "fas fa-trash", "dd__delete"]];
              }

              if (comment.commented_post.author.id != _this.profile_data.id && comment.comment_author.id != _this.profile_data.id) return;
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Icon"]({
                id: "container__dd-comments-modal-".concat(comment.id),
                trigger: "#trigger__dd-comments-modal-".concat(comment.id),
                data: data,
                item_overlay: "overlay__comment",
                item_overlay_bg: self.colors.item_overlay.dropdownSecondary,
                cb: function () {
                  var _cb2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(target) {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            /**
                             * MODAL DELETE
                             */
                            if (target.classList.contains("dd__delete")) {
                              new _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_25__["DeleteComment"]({
                                id: "box__modal-third",
                                target: target,
                                style_class: "style-class__comment-delete",
                                secondary_overlay: "#overlay__comments-list",
                                secondary_overlay_bg: self.colors.secondary_overlay.deleteCommentModalSecondary,
                                item_overlay: "overlay__comment",
                                item_overlay_bg: self.colors.item_overlay.deleteCommentModalSecondary,
                                onsubmit: function () {
                                  var _onsubmit3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                      while (1) {
                                        switch (_context5.prev = _context5.next) {
                                          case 0:
                                          case "end":
                                            return _context5.stop();
                                        }
                                      }
                                    }, _callee5);
                                  }));

                                  function onsubmit() {
                                    return _onsubmit3.apply(this, arguments);
                                  }

                                  return onsubmit;
                                }()
                              });
                              /**
                               * MODAL EDIT
                               */
                            } else if (target.classList.contains("dd__edit")) {
                              new _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_24__["EditComment"]({
                                id: "box__modal-third",
                                target: target,
                                style_class: "style-class__comment-edit",
                                secondary_overlay: "#overlay__comments-list",
                                secondary_overlay_bg: self.colors.secondary_overlay.deleteCommentModalSecondary,
                                item_overlay: "overlay__comment",
                                item_overlay_bg: self.colors.item_overlay.editCommentModalSecondary,
                                onsubmit: function () {
                                  var _onsubmit4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                      while (1) {
                                        switch (_context6.prev = _context6.next) {
                                          case 0:
                                          case "end":
                                            return _context6.stop();
                                        }
                                      }
                                    }, _callee6);
                                  }));

                                  function onsubmit() {
                                    return _onsubmit4.apply(this, arguments);
                                  }

                                  return onsubmit;
                                }()
                              });
                            }

                          case 1:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  function cb(_x3) {
                    return _cb2.apply(this, arguments);
                  }

                  return cb;
                }()
              });
            },
            onclickLikes: function onclickLikes(target) {
              /**
               * TOGGLE LIKES
               */
              new _likes__WEBPACK_IMPORTED_MODULE_15__["UpdateLikes"]({
                target: target,
                id: {
                  id: _helpers__WEBPACK_IMPORTED_MODULE_0__["getFirstElementByClassName"](target, "box__comment").getAttribute("comment")
                },
                url: {
                  like: "comment_like",
                  dislike: "comment_dislike",
                  unlike: "comment_unlike",
                  undislike: "comment_undislike"
                }
              });
            },
            onclickCount: function onclickCount(target) {
              new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_20__["responseList"]({
                id: "box__modal-third",
                target: target,
                attr: {
                  classname: "box__comment",
                  attr: "comment"
                },
                url: "comment_likes",
                style_class: "style-class__response-list",
                secondary_overlay: "#overlay__comments-list",
                secondary_overlay_bg: self.colors.secondary_overlay.listResponseSecondary,
                item_overlay: "overlay__comment",
                item_overlay_bg: self.colors.item_overlay.listResponseSecondary
              });
            }
          });
        });
      });
    }
  };
  /**
   * DROPDOWNS
   */

  this.dd = {
    postDropdown: function postDropdown(p) {
      if (p.author.id == _this.profile_data.id) {
        new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Icon"]({
          id: "dd-container__post-".concat(p.id),
          trigger: "#dd-trigger__post-".concat(p.id),
          data: [["Edit", "far fa-edit", "dd__edit"], ["Delete", "fas fa-trash", "dd__delete"]],
          item_overlay: "overlay__post",
          item_overlay_bg: self.colors.item_overlay.dropdown,
          cb: function () {
            var _cb3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(target) {
              var folders_names;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!target.classList.contains("dd__delete")) {
                        _context11.next = 4;
                        break;
                      }

                      new _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_8__["DeletePost"]({
                        id: "box__modal",
                        target: target,
                        style_class: "style-class__post-delete",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.deletePostModal,
                        onsubmit: function () {
                          var _onsubmit5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                              while (1) {
                                switch (_context8.prev = _context8.next) {
                                  case 0:
                                    self.postsPagination();

                                  case 1:
                                  case "end":
                                    return _context8.stop();
                                }
                              }
                            }, _callee8);
                          }));

                          function onsubmit() {
                            return _onsubmit5.apply(this, arguments);
                          }

                          return onsubmit;
                        }()
                      });
                      /**
                       * EDIT POST MODAL
                       */

                      _context11.next = 9;
                      break;

                    case 4:
                      if (!target.classList.contains("dd__edit")) {
                        _context11.next = 9;
                        break;
                      }

                      _context11.next = 7;
                      return _folder__WEBPACK_IMPORTED_MODULE_2__["getFoldersNames"]();

                    case 7:
                      folders_names = _context11.sent;
                      new _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_11__["EditPost"]({
                        id: "box__modal",
                        target: target,
                        style_class: "style-class__edit-post",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.editPostModal,
                        onsubmit: function () {
                          var _onsubmit6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                            return regeneratorRuntime.wrap(function _callee9$(_context9) {
                              while (1) {
                                switch (_context9.prev = _context9.next) {
                                  case 0:
                                    self.addEv.selectTag("#content__posts");

                                  case 1:
                                  case "end":
                                    return _context9.stop();
                                }
                              }
                            }, _callee9);
                          }));

                          function onsubmit() {
                            return _onsubmit6.apply(this, arguments);
                          }

                          return onsubmit;
                        }(),
                        ontagcreate: function ontagcreate(value) {
                          _components_tags__WEBPACK_IMPORTED_MODULE_18__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_18__["createTag"](value));
                        },
                        rendertags: function rendertags(t) {
                          t.forEach(function (tag) {
                            _components_tags__WEBPACK_IMPORTED_MODULE_18__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_18__["createTag"](tag.name));
                          });
                        },
                        renderdropdown: function renderdropdown() {
                          new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Dropdown"]({
                            id: "input__folder",
                            attr: "folder",
                            default_attr: ["folder", ""],
                            data: folders_names,
                            placeholder: "Select Folder",
                            bottom_item: "Create Folder",
                            style: {
                              width: "100%"
                            },
                            cb: function cb(elem) {
                              if (elem.classList.contains("item__bottom")) {
                                new _components_modals_create_folder__WEBPACK_IMPORTED_MODULE_9__["CreateFolder"]({
                                  id: "box__modal-secondary",
                                  target: target,
                                  style_class: "style-class__folder-create",
                                  secondary_overlay: ".overlay__modal-item",
                                  secondary_overlay_bg: self.colors.secondary_overlay.createFolderModalSecondary,
                                  cb: function () {
                                    var _cb4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                                      var folders_names;
                                      return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                        while (1) {
                                          switch (_context10.prev = _context10.next) {
                                            case 0:
                                              _context10.next = 2;
                                              return _folder__WEBPACK_IMPORTED_MODULE_2__["getFoldersNames"]();

                                            case 2:
                                              folders_names = _context10.sent;
                                              _folder__WEBPACK_IMPORTED_MODULE_2__["updateFoldersList"]({
                                                attr: "folder",
                                                data: folders_names,
                                                bottom_item: "Create Folder"
                                              });
                                              self.foldersPagination();

                                            case 5:
                                            case "end":
                                              return _context10.stop();
                                          }
                                        }
                                      }, _callee10);
                                    }));

                                    function cb() {
                                      return _cb4.apply(this, arguments);
                                    }

                                    return cb;
                                  }()
                                });
                              }
                            }
                          });
                        },
                        renderautocomplete: function renderautocomplete() {
                          _form_post__WEBPACK_IMPORTED_MODULE_16__["renderAutoComplete"]();
                        }
                      });

                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));

            function cb(_x4) {
              return _cb3.apply(this, arguments);
            }

            return cb;
          }()
        });
      }
    },
    postDropdownSecondary: function postDropdownSecondary(p) {
      if (p.author.id == _this.profile_data.id) {
        new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Icon"]({
          id: "dd-container__post-modal-".concat(p.id),
          trigger: "#dd-trigger__post-modal-".concat(p.id),
          data: [["Edit", "far fa-edit", "dd__edit"], ["Delete", "fas fa-trash", "dd__delete"]],
          item_overlay: "overlay__post",
          item_overlay_bg: self.colors.item_overlay.dropdown,
          cb: function () {
            var _cb5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(target) {
              var folders_names;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!target.classList.contains("dd__delete")) {
                        _context15.next = 4;
                        break;
                      }

                      new _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_8__["DeletePost"]({
                        id: "box__modal-secondary",
                        secondary_overlay: ".overlay__modal-item",
                        secondary_overlay_bg: self.colors.secondary_overlay.deletePostModalSecondary,
                        target: target,
                        style_class: "style-class__post-delete",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.deletePostModalSecondary,
                        onsubmit: function () {
                          var _onsubmit7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                            return regeneratorRuntime.wrap(function _callee12$(_context12) {
                              while (1) {
                                switch (_context12.prev = _context12.next) {
                                  case 0:
                                    self.postsPagination();

                                  case 1:
                                  case "end":
                                    return _context12.stop();
                                }
                              }
                            }, _callee12);
                          }));

                          function onsubmit() {
                            return _onsubmit7.apply(this, arguments);
                          }

                          return onsubmit;
                        }()
                      });
                      /**
                       * MODAL EDIT POST
                       */

                      _context15.next = 9;
                      break;

                    case 4:
                      if (!target.classList.contains("dd__edit")) {
                        _context15.next = 9;
                        break;
                      }

                      _context15.next = 7;
                      return _folder__WEBPACK_IMPORTED_MODULE_2__["getFoldersNames"]();

                    case 7:
                      folders_names = _context15.sent;
                      new _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_11__["EditPost"]({
                        id: "box__modal-secondary",
                        secondary_overlay: ".overlay__modal-item",
                        secondary_overlay_bg: self.colors.secondary_overlay.editPostModalSecondary,
                        target: target,
                        style_class: "style-class__edit-post",
                        item_overlay: "overlay__post",
                        item_overlay_bg: self.colors.item_overlay.editPostModalSecondary,
                        onsubmit: function () {
                          var _onsubmit8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                            return regeneratorRuntime.wrap(function _callee13$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                    self.addEv.selectTag("#content__tag");

                                  case 1:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee13);
                          }));

                          function onsubmit() {
                            return _onsubmit8.apply(this, arguments);
                          }

                          return onsubmit;
                        }(),
                        ontagcreate: function ontagcreate(value) {
                          _components_tags__WEBPACK_IMPORTED_MODULE_18__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_18__["createTag"](value));
                        },
                        rendertags: function rendertags(t) {
                          t.forEach(function (tag) {
                            _components_tags__WEBPACK_IMPORTED_MODULE_18__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_18__["createTag"](tag.name));
                          });
                        },
                        renderdropdown: function renderdropdown() {
                          new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Dropdown"]({
                            id: "input__folder",
                            attr: "folder",
                            default_attr: ["folder", ""],
                            data: folders_names,
                            placeholder: "Select Folder",
                            bottom_item: "Create Folder",
                            style: {
                              width: "100%"
                            },
                            cb: function cb(elem) {
                              if (elem.classList.contains("item__bottom")) {
                                new _components_modals_create_folder__WEBPACK_IMPORTED_MODULE_9__["CreateFolder"]({
                                  id: "box__modal-secondary",
                                  secondary_overlay: ".overlay__modal-item",
                                  target: target,
                                  style_class: "style-class__folder-create",
                                  cb: function () {
                                    var _cb6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                                      var folders_names;
                                      return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                        while (1) {
                                          switch (_context14.prev = _context14.next) {
                                            case 0:
                                              _context14.next = 2;
                                              return _folder__WEBPACK_IMPORTED_MODULE_2__["getFoldersNames"]();

                                            case 2:
                                              folders_names = _context14.sent;
                                              _folder__WEBPACK_IMPORTED_MODULE_2__["updateFoldersList"]({
                                                attr: "folder",
                                                data: folders_names,
                                                bottom_item: "Create Folder"
                                              });
                                              self.foldersPagination();

                                            case 5:
                                            case "end":
                                              return _context14.stop();
                                          }
                                        }
                                      }, _callee14);
                                    }));

                                    function cb() {
                                      return _cb6.apply(this, arguments);
                                    }

                                    return cb;
                                  }()
                                });
                              }
                            }
                          });
                        },
                        renderautocomplete: function renderautocomplete() {
                          _form_post__WEBPACK_IMPORTED_MODULE_16__["renderAutoComplete"]();
                        }
                      });

                    case 9:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));

            function cb(_x5) {
              return _cb5.apply(this, arguments);
            }

            return cb;
          }()
        });
      }
    }
  };
  /**
   * MODALS
   */

  this.modals = {
    editProfile: function () {
      var _editProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var profile_id;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                profile_id = document.querySelector(".box__main-content").getAttribute("profile");

                if (_this.profile_data.id == parseInt(profile_id)) {
                  document.querySelector("#icon__profile-edit").addEventListener("click", function (e) {
                    new _components_modals_edit_profile__WEBPACK_IMPORTED_MODULE_12__["EditProfile"]({
                      id: "box__modal",
                      target: e.target,
                      style_class: "style-class__edit-profile",
                      onsubmit: function () {
                        var _onsubmit9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(response) {
                          return regeneratorRuntime.wrap(function _callee16$(_context16) {
                            while (1) {
                              switch (_context16.prev = _context16.next) {
                                case 0:
                                  _editDOM_profile__WEBPACK_IMPORTED_MODULE_19__["editDOM"](response.profile_data);

                                case 1:
                                case "end":
                                  return _context16.stop();
                              }
                            }
                          }, _callee16);
                        }));

                        function onsubmit(_x6) {
                          return _onsubmit9.apply(this, arguments);
                        }

                        return onsubmit;
                      }()
                    });
                  });
                }

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function editProfile() {
        return _editProfile.apply(this, arguments);
      }

      return editProfile;
    }(),
    followersModal: function () {
      var _followersModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                document.querySelector(".followers__counter").addEventListener("click", function (e) {
                  new _components_modals_followers_list__WEBPACK_IMPORTED_MODULE_21__["followList"]({
                    id: "box__modal",
                    target: e.target,
                    attr: {
                      classname: "box__main-content",
                      attr: "profile"
                    },
                    url: self.routes.get_followers,
                    style_class: "style-class__followers-list",
                    header: "Followers"
                  });
                });

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      function followersModal() {
        return _followersModal.apply(this, arguments);
      }

      return followersModal;
    }(),
    followingModal: function () {
      var _followingModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                document.querySelector(".following__counter").addEventListener("click", function (e) {
                  new _components_modals_followers_list__WEBPACK_IMPORTED_MODULE_21__["followList"]({
                    id: "box__modal",
                    target: e.target,
                    attr: {
                      classname: "box__main-content",
                      attr: "profile"
                    },
                    url: self.routes.get_following,
                    style_class: "style-class__followers-list",
                    header: "Following"
                  });
                });

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      function followingModal() {
        return _followingModal.apply(this, arguments);
      }

      return followingModal;
    }(),
    createFolder: function () {
      var _createFolder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        var profile_id, btn_create_folder, _btn_create_folder;

        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                profile_id = document.querySelector(".box__main-content").getAttribute("profile");

                if (profile_id == _this.profile_data.id) {
                  btn_create_folder = document.querySelector("#folders_create");
                  btn_create_folder.addEventListener("click", function (event) {
                    new _components_modals_create_folder__WEBPACK_IMPORTED_MODULE_9__["CreateFolder"]({
                      id: "box__modal",
                      target: event.target,
                      style_class: "style-class__folder-create",
                      cb: function () {
                        var _cb7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                          return regeneratorRuntime.wrap(function _callee20$(_context20) {
                            while (1) {
                              switch (_context20.prev = _context20.next) {
                                case 0:
                                  self.foldersPagination();

                                case 1:
                                case "end":
                                  return _context20.stop();
                              }
                            }
                          }, _callee20);
                        }));

                        function cb() {
                          return _cb7.apply(this, arguments);
                        }

                        return cb;
                      }()
                    });
                  });
                } else {
                  _btn_create_folder = document.querySelector("#folders_create");

                  _btn_create_folder.remove();
                }

              case 2:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function createFolder() {
        return _createFolder.apply(this, arguments);
      }

      return createFolder;
    }(),
    createPost: function () {
      var _createPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
        var profile_id, btn_create_post, _btn_create_post;

        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                profile_id = document.querySelector(".box__main-content").getAttribute("profile");

                if (profile_id == _this.profile_data.id) {
                  btn_create_post = document.querySelector("#posts_create");
                  btn_create_post.addEventListener("click", /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(event) {
                      var folders_names;
                      return regeneratorRuntime.wrap(function _callee24$(_context24) {
                        while (1) {
                          switch (_context24.prev = _context24.next) {
                            case 0:
                              _context24.next = 2;
                              return _folder__WEBPACK_IMPORTED_MODULE_2__["getFoldersNames"]();

                            case 2:
                              folders_names = _context24.sent;
                              new _components_modals_create_post__WEBPACK_IMPORTED_MODULE_10__["CreatePost"]({
                                id: "box__modal",
                                target: event.target,
                                style_class: "style-class__create-post",
                                onsubmit: function () {
                                  var _onsubmit10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                                      while (1) {
                                        switch (_context22.prev = _context22.next) {
                                          case 0:
                                            self.postsPagination();

                                          case 1:
                                          case "end":
                                            return _context22.stop();
                                        }
                                      }
                                    }, _callee22);
                                  }));

                                  function onsubmit() {
                                    return _onsubmit10.apply(this, arguments);
                                  }

                                  return onsubmit;
                                }(),
                                ontagcreate: function ontagcreate(value) {
                                  if (value.trim() != "") {
                                    _components_tags__WEBPACK_IMPORTED_MODULE_18__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_18__["createTag"](value));
                                  }
                                },
                                renderdropdown: function renderdropdown() {
                                  new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Dropdown"]({
                                    id: "input__folder",
                                    attr: "folder",
                                    default_attr: ["folder", ""],
                                    data: folders_names,
                                    placeholder: "Select Folder",
                                    bottom_item: "Create Folder",
                                    style: {
                                      width: "100%"
                                    },
                                    cb: function cb(elem) {
                                      if (elem.classList.contains("item__bottom")) {
                                        new _components_modals_create_folder__WEBPACK_IMPORTED_MODULE_9__["CreateFolder"]({
                                          id: "box__modal-secondary",
                                          target: event.target,
                                          style_class: "style-class__folder-create",
                                          secondary_overlay: ".overlay__modal-item",
                                          secondary_overlay_bg: "rgba(0, 0, 0, 0.5)",
                                          cb: function () {
                                            var _cb8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                                              var folders_names;
                                              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                                                while (1) {
                                                  switch (_context23.prev = _context23.next) {
                                                    case 0:
                                                      _context23.next = 2;
                                                      return _folder__WEBPACK_IMPORTED_MODULE_2__["getFoldersNames"]();

                                                    case 2:
                                                      folders_names = _context23.sent;
                                                      _folder__WEBPACK_IMPORTED_MODULE_2__["updateFoldersList"]({
                                                        attr: "folder",
                                                        data: folders_names,
                                                        bottom_item: "Create Folder"
                                                      });
                                                      self.foldersPagination();

                                                    case 5:
                                                    case "end":
                                                      return _context23.stop();
                                                  }
                                                }
                                              }, _callee23);
                                            }));

                                            function cb() {
                                              return _cb8.apply(this, arguments);
                                            }

                                            return cb;
                                          }()
                                        });
                                      }
                                    }
                                  });
                                },
                                renderautocomplete: function renderautocomplete() {
                                  _form_post__WEBPACK_IMPORTED_MODULE_16__["renderAutoComplete"]();
                                }
                              });

                            case 4:
                            case "end":
                              return _context24.stop();
                          }
                        }
                      }, _callee24);
                    }));

                    return function (_x7) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                } else {
                  _btn_create_post = document.querySelector("#posts_create");

                  _btn_create_post.remove();
                }

              case 2:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));

      function createPost() {
        return _createPost.apply(this, arguments);
      }

      return createPost;
    }()
  };
  /**
   * FOLDERS PAGINATION SETTINGS
   */

  this.foldersPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _this.folder_pagination_settings = {
              container_id: self.pagination_data.folders_pagination_container,
              route: self.routes.get_folders,
              page: self.pagination_data.folders_page,
              sort_method: self.pagination_data.folders_sort,
              profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
              folder_id: self.pagination_data.folder,
              tag_id: self.pagination_data.tag,
              cb: function cb(data) {
                self.renderFolderPaginated(data, "#content__folders");
                var count = data.pagination_data.totalCount;
                document.querySelector("#header__folders").innerHTML = "Folders (".concat(count, ")");
              },
              getPage: function getPage() {
                return self.pagination_data.folders_page;
              },
              getSortMethod: function getSortMethod() {
                return self.pagination_data.folders_sort;
              },
              getFolder: function getFolder() {
                return self.pagination_data.folder;
              },
              getTag: function getTag() {
                return self.pagination_data.tag;
              },
              setPage: function setPage(page) {
                self.pagination_data.folders_page = page;
              }
            };
            return _context26.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_5__["CreatePagination"](self.folder_pagination_settings));

          case 2:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));
  /**
   * POSTS PAGINATION SETTINGS
   */

  this.postsPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
    var posts_pagination_settings;
    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            posts_pagination_settings = {
              container_id: self.pagination_data.posts_pagination_container,
              route: self.routes.get_posts,
              page: self.pagination_data.posts_page,
              sort_method: self.pagination_data.posts_sort,
              profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
              folder_id: self.pagination_data.folder,
              tag_id: self.pagination_data.tag,
              cb: function cb(data) {
                _this.renderPostsPaginated(data, "#content__posts");

                var count = data.pagination_data.totalCount;
                document.querySelector("#header__posts").innerHTML = "Posts (".concat(count, ")");
              },
              getPage: function getPage() {
                return self.pagination_data.posts_page;
              },
              getSortMethod: function getSortMethod() {
                return self.pagination_data.posts_sort;
              },
              getFolder: function getFolder() {
                return self.pagination_data.folder;
              },
              getTag: function getTag() {
                return self.pagination_data.tag;
              },
              setPage: function setPage(page) {
                self.pagination_data.posts_page = page;
              }
            };
            return _context27.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_5__["CreatePagination"](posts_pagination_settings));

          case 2:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));
  /**
   * TAGGED POSTS MODAL PAGINATION SETTINGS
   */

  this.taggedPostPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
    var tag_pagination_settings;
    return regeneratorRuntime.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            tag_pagination_settings = {
              container_id: self.pagination_data.tag_modal_pagination_container,
              route: self.routes.get_posts_all,
              page: self.pagination_data.tag_modal_page,
              sort_method: self.pagination_data.tag_modal_sort,
              profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
              folder_id: self.pagination_data.folder,
              tag_id: self.pagination_data.tag_modal_tag,
              cb: function cb(data) {
                self.renderPostsByTag(data, "#content__tag");
              },
              getPage: function getPage() {
                return self.pagination_data.tag_modal_page;
              },
              getSortMethod: function getSortMethod() {
                return self.pagination_data.tag_modal_sort;
              },
              getFolder: function getFolder() {
                return self.pagination_data.folder;
              },
              getTag: function getTag() {
                return self.pagination_data.tag_modal_tag;
              },
              setPage: function setPage(page) {
                self.pagination_data.tag_modal_page = page;
              }
            };
            return _context28.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_5__["CreatePagination"](tag_pagination_settings));

          case 2:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));
  /**
   * SORT FOLDERS
   */

  this.sortFolders = function () {
    new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Dropdown"]({
      id: "folders__sort",
      attr: "sort",
      default_attr: ["sort", "updated"],
      data: [["Newest", "created"], ["Last Updated", "updated"], ["Most Posts", "posts"]],
      placeholder: "Sort by",
      style: {
        width: "200px"
      },
      cb: function cb(elem) {
        self.pagination_data.folders_sort = elem.getAttribute("sort");
        self.foldersPagination();
      }
    });
  };
  /**
   * SORT POTS
   */


  this.sortPosts = function () {
    new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Dropdown"]({
      id: "posts__sort",
      attr: "sort",
      default_attr: ["sort", "desc"],
      data: [["Newest", "desc"], ["Most liked", "liked"], ["Most commented", "commented"]],
      placeholder: "Sort by",
      style: {
        width: "200px"
      },
      cb: function cb(elem) {
        self.pagination_data.posts_sort = elem.getAttribute("sort");
        self.postsPagination();
      }
    });
  };
  /**
   * OPEN FOLDER
   */


  this.openFolder = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
    return regeneratorRuntime.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            new _folder__WEBPACK_IMPORTED_MODULE_2__["toggleFolders"]({
              folder: ".folder__item",
              getFolder: function getFolder() {
                return self.pagination_data.folder;
              },
              setFolder: function setFolder(folder) {
                self.pagination_data.folder = folder;
              },
              cb: function cb(folder, name) {
                var posts_pagination_settings = {
                  container_id: self.pagination_data.posts_pagination_container,
                  route: self.routes.get_posts,
                  page: 1,
                  sort_method: self.pagination_data.posts_sort,
                  profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
                  folder_id: self.pagination_data.folder,
                  tag_id: self.pagination_data.tag,
                  cb: function cb(data) {
                    self.renderPostsPaginated(data, "#content__posts");

                    if (folder) {
                      var count = data.pagination_data.totalCount;
                      document.querySelector("#header__posts").innerHTML = "".concat(name, " (").concat(count, ")");
                    } else {
                      var _count = data.pagination_data.totalCount;
                      document.querySelector("#header__posts").innerHTML = "Posts (".concat(_count, ")");
                    }
                  },
                  getPage: function getPage() {
                    return self.pagination_data.posts_page;
                  },
                  getSortMethod: function getSortMethod() {
                    return self.pagination_data.posts_sort;
                  },
                  getFolder: function getFolder() {
                    return self.pagination_data.folder;
                  },
                  getTag: function getTag() {
                    return self.pagination_data.tag;
                  },
                  setPage: function setPage(page) {
                    self.pagination_data.posts_page = page;
                  }
                };
                new _components_pagination__WEBPACK_IMPORTED_MODULE_5__["CreatePagination"](posts_pagination_settings);
              }
            });

          case 1:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));
  /**
   * RENDER FOLDERS PAGINATED
   */

  this.renderFolderPaginated = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(data, container) {
      var text;
      return regeneratorRuntime.wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              if (!(data.main_data.length == 0)) {
                _context33.next = 4;
                break;
              }

              text = "No folders created";
              _editDOM_folder__WEBPACK_IMPORTED_MODULE_13__["noContent"](container, text);
              return _context33.abrupt("return", false);

            case 4:
              _editDOM_folder__WEBPACK_IMPORTED_MODULE_13__["addFolders"]({
                data: data.main_data,
                getFolder: function getFolder() {
                  return self.pagination_data.folder;
                },
                getUser: function getUser() {
                  return _this.profile_data;
                }
              });

              _this.openFolder();
              /**
               * FOLDER DROPDOWN
               */


              data.main_data.forEach(function (f) {
                if (f.author.id == _this.profile_data.id) {
                  new _components_dropdown__WEBPACK_IMPORTED_MODULE_17__["Icon"]({
                    id: "dropdown__folder-".concat(f.folder_id),
                    data: [["Edit", "far fa-edit", "dd__edit"], ["Delete", "fas fa-trash", "dd__delete"]],
                    trigger: "#dropdown__folder-trigger-".concat(f.folder_id),
                    item_overlay: "overlay__folder",
                    item_overlay_bg: self.colors.item_overlay.dropdown,
                    cb: function () {
                      var _cb9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(target) {
                        return regeneratorRuntime.wrap(function _callee32$(_context32) {
                          while (1) {
                            switch (_context32.prev = _context32.next) {
                              case 0:
                                /**
                                 * MODAL DELETE
                                 */
                                if (target.classList.contains("dd__delete")) {
                                  new _components_modals_delete_folder__WEBPACK_IMPORTED_MODULE_7__["DeleteFolder"]({
                                    id: "box__modal",
                                    target: target,
                                    style_class: "style-class__folder-delete",
                                    folder_id: f.folder_id,
                                    item_overlay: "overlay__folder",
                                    item_overlay_bg: self.colors.item_overlay.deletePostModal,
                                    cb: function () {
                                      var _cb10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                                        return regeneratorRuntime.wrap(function _callee30$(_context30) {
                                          while (1) {
                                            switch (_context30.prev = _context30.next) {
                                              case 0:
                                                _context30.next = 2;
                                                return _folder__WEBPACK_IMPORTED_MODULE_2__["deleteFolder"](target);

                                              case 2:
                                                self.foldersPagination();
                                                self.postsPagination();

                                              case 4:
                                              case "end":
                                                return _context30.stop();
                                            }
                                          }
                                        }, _callee30);
                                      }));

                                      function cb() {
                                        return _cb10.apply(this, arguments);
                                      }

                                      return cb;
                                    }()
                                  });
                                  /**
                                   * MODAL EDIT
                                   */
                                } else if (target.classList.contains("dd__edit")) {
                                  new _components_modals_edit_folder__WEBPACK_IMPORTED_MODULE_6__["EditFolder"]({
                                    id: "box__modal",
                                    target: target,
                                    style_class: "style-class__folder-edit",
                                    item_overlay: "overlay__folder",
                                    item_overlay_bg: self.colors.item_overlay.editPostModal,
                                    cb: function () {
                                      var _cb11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
                                        return regeneratorRuntime.wrap(function _callee31$(_context31) {
                                          while (1) {
                                            switch (_context31.prev = _context31.next) {
                                              case 0:
                                                self.foldersPagination();

                                              case 1:
                                              case "end":
                                                return _context31.stop();
                                            }
                                          }
                                        }, _callee31);
                                      }));

                                      function cb() {
                                        return _cb11.apply(this, arguments);
                                      }

                                      return cb;
                                    }()
                                  });
                                }

                              case 1:
                              case "end":
                                return _context32.stop();
                            }
                          }
                        }, _callee32);
                      }));

                      function cb(_x10) {
                        return _cb9.apply(this, arguments);
                      }

                      return cb;
                    }()
                  });
                }
              });

            case 7:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee33);
    }));

    return function (_x8, _x9) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * RENDER POSTS PAGINATED
   */


  this.renderPostsPaginated = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(data, container) {
      var text;
      return regeneratorRuntime.wrap(function _callee34$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              if (!(data.main_data.length == 0)) {
                _context34.next = 4;
                break;
              }

              text = "No posts created";
              _editDOM_post__WEBPACK_IMPORTED_MODULE_14__["noContent"](container, text);
              return _context34.abrupt("return", false);

            case 4:
              _editDOM_post__WEBPACK_IMPORTED_MODULE_14__["addPosts"]({
                data: data.main_data,
                container: container,
                dropdown_trigger_id: "dd-trigger__post",
                dropdown_container_id: "dd-container__post",
                getUser: function getUser() {
                  return _this.profile_data;
                }
              });
              _components_accordion__WEBPACK_IMPORTED_MODULE_1__["expandAccordions"]();
              /**
               * TOGGLE LIKES
               */

              _likes__WEBPACK_IMPORTED_MODULE_15__["toggleLikes"]();
              /**
               * OPEN TAG
               */

              _this.addEv.selectTag(container);
              /**
               * LIST LIKES / DISLIKES
               */


              _this.addEv.listResponse(container);
              /**
               * MODAL COMMENTS
               */


              _this.addEv.openComments(container);
              /**
               * POST DROPDOWN
               */


              data.main_data.forEach(function (p) {
                _this.dd.postDropdown(p);
              });

            case 11:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee34);
    }));

    return function (_x11, _x12) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * RENDER MODAL POSTS PAGINATED
   */


  this.renderPostsByTag = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(data, container) {
      var text;
      return regeneratorRuntime.wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              if (!(data.main_data.length == 0)) {
                _context35.next = 4;
                break;
              }

              text = "No posts created";
              _editDOM_post__WEBPACK_IMPORTED_MODULE_14__["noContent"](container, text);
              return _context35.abrupt("return", false);

            case 4:
              _editDOM_post__WEBPACK_IMPORTED_MODULE_14__["addPosts"]({
                data: data.main_data,
                container: container,
                dropdown_trigger_id: "dd-trigger__post-modal",
                dropdown_container_id: "dd-container__post-modal",
                getUser: function getUser() {
                  return _this.profile_data;
                }
              });
              _components_accordion__WEBPACK_IMPORTED_MODULE_1__["expandAccordions"]();
              /**
               * TOGGLE LIKES
               */

              _likes__WEBPACK_IMPORTED_MODULE_15__["toggleLikes"]();
              /**
               * OPEN TAG
               */

              _this.addEv.selectTag(container);
              /**
               * LIST LIKES / DISLIKES
               */


              _this.addEv.listResponseSecondary(container);
              /**
               * MODAL COMMENTS
               */


              _this.addEv.openCommentsSecondary(container);
              /**
               * POST DROPDOWN
               */


              data.main_data.forEach(function (p) {
                _this.dd.postDropdownSecondary(p);
              });

            case 11:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35);
    }));

    return function (_x13, _x14) {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * INIT PROFILE-PAGE CONTENT
   */


  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
    return regeneratorRuntime.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.next = 2;
            return _this.getProfileData();

          case 2:
            _this.profile_data = _context36.sent;

            _this.addEv.followToggler();

            _this.modals.editProfile();

            _this.modals.followersModal();

            _this.modals.followingModal();

            _this.sortFolders();

            _this.sortPosts();

            _this.modals.createFolder();

            _this.modals.createPost();

            _this.foldersPagination();

            _this.postsPagination();

            _components_accordion__WEBPACK_IMPORTED_MODULE_1__["expandAccordions"]();

          case 14:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));
  this.init();
}

document.addEventListener("DOMContentLoaded", function () {
  new ProfilePage();
});

/***/ }),

/***/ "./node_modules/@tarekraafat/autocomplete.js/dist/js/autoComplete.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tarekraafat/autocomplete.js/dist/js/autoComplete.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var dataAttribute = "data-id";
  var select = {
    resultsList: "autoComplete_list",
    result: "autoComplete_result",
    highlight: "autoComplete_highlighted",
    selectedResult: "autoComplete_selected"
  };
  var keys = {
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40
  };
  var getInput = function getInput(selector) {
    return typeof selector === "string" ? document.querySelector(selector) : selector();
  };
  var createResultsList = function createResultsList(renderResults) {
    var resultsList = document.createElement(renderResults.element);
    resultsList.setAttribute("id", select.resultsList);
    if (renderResults.container) {
      renderResults.container(resultsList);
    }
    renderResults.destination.insertAdjacentElement(renderResults.position, resultsList);
    return resultsList;
  };
  var highlight = function highlight(value) {
    return "<span class=".concat(select.highlight, ">").concat(value, "</span>");
  };
  var addResultsToList = function addResultsToList(resultsList, dataSrc, resultItem) {
    var fragment = document.createDocumentFragment();
    dataSrc.forEach(function (event, record) {
      var result = document.createElement(resultItem.element);
      var resultIndex = dataSrc[record].index;
      result.setAttribute(dataAttribute, resultIndex);
      result.setAttribute("class", select.result);
      resultItem.content ? resultItem.content(event, result) : result.innerHTML = event.match || event;
      fragment.appendChild(result);
    });
    resultsList.appendChild(fragment);
  };
  var clearResults = function clearResults(resultsList) {
    return resultsList.innerHTML = "";
  };
  var onSelection = function onSelection(event, field, resultsList, feedback, resultsValues, selection) {
    feedback({
      event: event,
      query: field instanceof HTMLInputElement ? field.value : field.innerHTML,
      matches: resultsValues.matches,
      results: resultsValues.list.map(function (record) {
        return record.value;
      }),
      selection: resultsValues.list.find(function (value) {
        if (event.keyCode === keys.ENTER) {
          return value.index === Number(selection.getAttribute(dataAttribute));
        } else if (event.type === "mousedown") {
          return value.index === Number(event.currentTarget.getAttribute(dataAttribute));
        }
      })
    });
    clearResults(resultsList);
  };
  var navigation = function navigation(input, resultsList, feedback, resultsValues) {
    var li = resultsList.childNodes,
        liLength = li.length - 1;
    var liSelected = undefined,
        next;
    var removeSelection = function removeSelection(direction) {
      liSelected.classList.remove(select.selectedResult);
      if (direction === 1) {
        next = liSelected.nextSibling;
      } else {
        next = liSelected.previousSibling;
      }
    };
    var highlightSelection = function highlightSelection(current) {
      liSelected = current;
      liSelected.classList.add(select.selectedResult);
    };
    input.onkeydown = function (event) {
      if (li.length > 0) {
        switch (event.keyCode) {
          case keys.ARROW_UP:
            if (liSelected) {
              removeSelection(0);
              if (next) {
                highlightSelection(next);
              } else {
                highlightSelection(li[liLength]);
              }
            } else {
              highlightSelection(li[liLength]);
            }
            break;
          case keys.ARROW_DOWN:
            if (liSelected) {
              removeSelection(1);
              if (next) {
                highlightSelection(next);
              } else {
                highlightSelection(li[0]);
              }
            } else {
              highlightSelection(li[0]);
            }
            break;
          case keys.ENTER:
            if (liSelected) {
              onSelection(event, input, resultsList, feedback, resultsValues, liSelected);
            }
        }
      }
    };
    li.forEach(function (selection) {
      selection.onmousedown = function (event) {
        return onSelection(event, input, resultsList, feedback, resultsValues);
      };
    });
  };
  var autoCompleteView = {
    getInput: getInput,
    createResultsList: createResultsList,
    highlight: highlight,
    addResultsToList: addResultsToList,
    navigation: navigation,
    clearResults: clearResults
  };

  var CustomEventPolyfill = function CustomEventPolyfill(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
  CustomEventPolyfill.prototype = window.Event.prototype;
  var CustomEventWrapper = typeof window.CustomEvent === "function" && window.CustomEvent || CustomEventPolyfill;
  var initElementClosestPolyfill = function initElementClosestPolyfill() {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var el = this;
        do {
          if (el.matches(s)) {
            return el;
          }
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
      };
    }
  };
  var Polyfill = {
    CustomEventWrapper: CustomEventWrapper,
    initElementClosestPolyfill: initElementClosestPolyfill
  };

  var autoComplete =
  function () {
    function autoComplete(config) {
      _classCallCheck(this, autoComplete);
      var _config$selector = config.selector,
          selector = _config$selector === void 0 ? "#autoComplete" : _config$selector,
          _config$data = config.data,
          key = _config$data.key,
          _src = _config$data.src,
          _config$data$cache = _config$data.cache,
          cache = _config$data$cache === void 0 ? true : _config$data$cache,
          query = config.query,
          _config$trigger = config.trigger;
      _config$trigger = _config$trigger === void 0 ? {} : _config$trigger;
      var _config$trigger$event = _config$trigger.event,
          event = _config$trigger$event === void 0 ? ["input"] : _config$trigger$event,
          _config$trigger$condi = _config$trigger.condition,
          condition = _config$trigger$condi === void 0 ? false : _config$trigger$condi,
          _config$searchEngine = config.searchEngine,
          searchEngine = _config$searchEngine === void 0 ? "strict" : _config$searchEngine,
          _config$threshold = config.threshold,
          threshold = _config$threshold === void 0 ? 0 : _config$threshold,
          _config$debounce = config.debounce,
          debounce = _config$debounce === void 0 ? 0 : _config$debounce,
          _config$resultsList = config.resultsList;
      _config$resultsList = _config$resultsList === void 0 ? {} : _config$resultsList;
      var _config$resultsList$r = _config$resultsList.render,
          render = _config$resultsList$r === void 0 ? false : _config$resultsList$r,
          _config$resultsList$c = _config$resultsList.container,
          container = _config$resultsList$c === void 0 ? false : _config$resultsList$c,
          destination = _config$resultsList.destination,
          _config$resultsList$p = _config$resultsList.position,
          position = _config$resultsList$p === void 0 ? "afterend" : _config$resultsList$p,
          _config$resultsList$e = _config$resultsList.element,
          resultsListElement = _config$resultsList$e === void 0 ? "ul" : _config$resultsList$e,
          _config$resultsList$n = _config$resultsList.navigation,
          navigation = _config$resultsList$n === void 0 ? false : _config$resultsList$n,
          _config$sort = config.sort,
          sort = _config$sort === void 0 ? false : _config$sort,
          placeHolder = config.placeHolder,
          _config$maxResults = config.maxResults,
          maxResults = _config$maxResults === void 0 ? 5 : _config$maxResults,
          _config$resultItem = config.resultItem;
      _config$resultItem = _config$resultItem === void 0 ? {} : _config$resultItem;
      var _config$resultItem$co = _config$resultItem.content,
          content = _config$resultItem$co === void 0 ? false : _config$resultItem$co,
          _config$resultItem$el = _config$resultItem.element,
          resultItemElement = _config$resultItem$el === void 0 ? "li" : _config$resultItem$el,
          noResults = config.noResults,
          _config$highlight = config.highlight,
          highlight = _config$highlight === void 0 ? false : _config$highlight,
          onSelection = config.onSelection;
      var resultsListView = render ? autoCompleteView.createResultsList({
        container: container,
        destination: destination || autoCompleteView.getInput(selector),
        position: position,
        element: resultsListElement
      }) : null;
      this.selector = selector;
      this.data = {
        src: function src() {
          return typeof _src === "function" ? _src() : _src;
        },
        key: key,
        cache: cache
      };
      this.query = query;
      this.trigger = {
        event: event,
        condition: condition
      };
      this.searchEngine = searchEngine === "loose" ? "loose" : typeof searchEngine === "function" ? searchEngine : "strict";
      this.threshold = threshold;
      this.debounce = debounce;
      this.resultsList = {
        render: render,
        view: resultsListView,
        navigation: navigation
      };
      this.sort = sort;
      this.placeHolder = placeHolder;
      this.maxResults = maxResults;
      this.resultItem = {
        content: content,
        element: resultItemElement
      };
      this.noResults = noResults;
      this.highlight = highlight;
      this.onSelection = onSelection;
      this.init();
    }
    _createClass(autoComplete, [{
      key: "search",
      value: function search(query, record) {
        var recordLowerCase = record.toLowerCase();
        if (this.searchEngine === "loose") {
          query = query.replace(/ /g, "");
          var match = [];
          var searchPosition = 0;
          for (var number = 0; number < recordLowerCase.length; number++) {
            var recordChar = record[number];
            if (searchPosition < query.length && recordLowerCase[number] === query[searchPosition]) {
              recordChar = this.highlight ? autoCompleteView.highlight(recordChar) : recordChar;
              searchPosition++;
            }
            match.push(recordChar);
          }
          if (searchPosition !== query.length) {
            return false;
          }
          return match.join("");
        } else {
          if (recordLowerCase.includes(query)) {
            var pattern = new RegExp("".concat(query), "i");
            query = pattern.exec(record);
            return this.highlight ? record.replace(query, autoCompleteView.highlight(query)) : record;
          }
        }
      }
    }, {
      key: "listMatchedResults",
      value: function listMatchedResults(data) {
        var _this = this;
        return new Promise(function (resolve) {
          var resList = [];
          data.filter(function (record, index) {
            var search = function search(key) {
              var recordValue = key ? record[key] : record;
              if (recordValue) {
                var match = typeof _this.searchEngine === "function" ? _this.searchEngine(_this.queryValue, recordValue) : _this.search(_this.queryValue, recordValue);
                if (match && key) {
                  resList.push({
                    key: key,
                    index: index,
                    match: match,
                    value: record
                  });
                } else if (match && !key) {
                  resList.push({
                    index: index,
                    match: match,
                    value: record
                  });
                }
              }
            };
            if (_this.data.key) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;
              try {
                for (var _iterator = _this.data.key[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var key = _step.value;
                  search(key);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } else {
              search();
            }
          });
          var list = _this.sort ? resList.sort(_this.sort).slice(0, _this.maxResults) : resList.slice(0, _this.maxResults);
          return resolve({
            matches: resList.length,
            list: list
          });
        });
      }
    }, {
      key: "ignite",
      value: function ignite() {
        var _this2 = this;
        var input = autoCompleteView.getInput(this.selector);
        if (this.placeHolder) {
          input.setAttribute("placeholder", this.placeHolder);
        }
        var debounce = function debounce(func, delay) {
          var inDebounce;
          return function () {
            var context = this;
            var args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(function () {
              return func.apply(context, args);
            }, delay);
          };
        };
        var exec = function exec(event) {
          var inputValue = input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement ? input.value.toLowerCase() : input.innerHTML.toLowerCase();
          var queryValue = _this2.queryValue = _this2.query && _this2.query.manipulate ? _this2.query.manipulate(inputValue) : inputValue;
          var renderResultsList = _this2.resultsList.render;
          var triggerCondition = _this2.trigger.condition ? _this2.trigger.condition(queryValue) : queryValue.length > _this2.threshold && queryValue.replace(/ /g, "").length;
          var eventEmitter = function eventEmitter(event, results) {
            input.dispatchEvent(new Polyfill.CustomEventWrapper("autoComplete", {
              bubbles: true,
              detail: {
                event: event,
                input: inputValue,
                query: queryValue,
                matches: results ? results.matches : null,
                results: results ? results.list : null
              },
              cancelable: true
            }));
          };
          if (renderResultsList) {
            var resultsList = _this2.resultsList.view;
            var clearResults = autoCompleteView.clearResults(resultsList);
            if (triggerCondition) {
              _this2.listMatchedResults(_this2.dataStream, event).then(function (list) {
                eventEmitter(event, list);
                if (_this2.resultsList.render) {
                  if (list.list.length === 0 && _this2.noResults) {
                    _this2.noResults();
                  } else {
                    autoCompleteView.addResultsToList(resultsList, list.list, _this2.resultItem);
                    if (_this2.onSelection) {
                      _this2.resultsList.navigation ? _this2.resultsList.navigation(event, input, resultsList, _this2.onSelection, list) : autoCompleteView.navigation(input, resultsList, _this2.onSelection, list);
                    }
                  }
                }
              });
            } else {
              eventEmitter(event);
            }
          } else if (!renderResultsList && triggerCondition) {
            _this2.listMatchedResults(_this2.dataStream, event).then(function (list) {
              eventEmitter(event, list);
            });
          }
        };
        var run = function run(event) {
          Promise.resolve(_this2.data.cache ? _this2.dataStream : _this2.data.src()).then(function (data) {
            _this2.dataStream = data;
            exec(event);
          });
        };
        this.trigger.event.forEach(function (eventType) {
          input.addEventListener(eventType, debounce(function (event) {
            return run(event);
          }, _this2.debounce));
        });
      }
    }, {
      key: "init",
      value: function init() {
        var _this3 = this;
        if (this.data.cache) {
          Promise.resolve(this.data.src()).then(function (data) {
            _this3.dataStream = data;
            _this3.ignite();
          });
        } else {
          this.ignite();
        }
        Polyfill.initElementClosestPolyfill();
      }
    }]);
    return autoComplete;
  }();

  return autoComplete;

})));


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js":
/*!********************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (root, factory) {
  var routing = factory();

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (routing.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';
  /**
   * @fileoverview This file defines the Router class.
   *
   * You can compile this file by running the following command from the Resources folder:
   *
   *    npm install && npm run build
   */

  /**
   * Class Router
   */

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Router = function () {
    /**
     * @constructor
     * @param {Router.Context=} context
     * @param {Object.<string, Router.Route>=} routes
     */
    function Router(context, routes) {
      _classCallCheck(this, Router);

      this.context_ = context || {
        base_url: '',
        prefix: '',
        host: '',
        port: '',
        scheme: '',
        locale: ''
      };
      this.setRoutes(routes || {});
    }
    /**
     * Returns the current instance.
     * @returns {Router}
     */


    _createClass(Router, [{
      key: 'setRoutingData',

      /**
       * Sets data for the current instance
       * @param {Object} data
       */
      value: function setRoutingData(data) {
        this.setBaseUrl(data['base_url']);
        this.setRoutes(data['routes']);

        if ('prefix' in data) {
          this.setPrefix(data['prefix']);
        }

        if ('port' in data) {
          this.setPort(data['port']);
        }

        if ('locale' in data) {
          this.setLocale(data['locale']);
        }

        this.setHost(data['host']);
        this.setScheme(data['scheme']);
      }
      /**
       * @param {Object.<string, Router.Route>} routes
       */

    }, {
      key: 'setRoutes',
      value: function setRoutes(routes) {
        this.routes_ = Object.freeze(routes);
      }
      /**
       * @return {Object.<string, Router.Route>} routes
       */

    }, {
      key: 'getRoutes',
      value: function getRoutes() {
        return this.routes_;
      }
      /**
       * @param {string} baseUrl
       */

    }, {
      key: 'setBaseUrl',
      value: function setBaseUrl(baseUrl) {
        this.context_.base_url = baseUrl;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getBaseUrl',
      value: function getBaseUrl() {
        return this.context_.base_url;
      }
      /**
       * @param {string} prefix
       */

    }, {
      key: 'setPrefix',
      value: function setPrefix(prefix) {
        this.context_.prefix = prefix;
      }
      /**
       * @param {string} scheme
       */

    }, {
      key: 'setScheme',
      value: function setScheme(scheme) {
        this.context_.scheme = scheme;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getScheme',
      value: function getScheme() {
        return this.context_.scheme;
      }
      /**
       * @param {string} host
       */

    }, {
      key: 'setHost',
      value: function setHost(host) {
        this.context_.host = host;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getHost',
      value: function getHost() {
        return this.context_.host;
      }
      /**
       * @param {string} port
      */

    }, {
      key: 'setPort',
      value: function setPort(port) {
        this.context_.port = port;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getPort',
      value: function getPort() {
        return this.context_.port;
      }
    }, {
      key: 'setLocale',

      /**
       * @param {string} locale
       */
      value: function setLocale(locale) {
        this.context_.locale = locale;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getLocale',
      value: function getLocale() {
        return this.context_.locale;
      }
    }, {
      key: 'buildQueryParams',

      /**
       * Builds query string params added to a URL.
       * Port of jQuery's $.param() function, so credit is due there.
       *
       * @param {string} prefix
       * @param {Array|Object|string} params
       * @param {Function} add
       */
      value: function buildQueryParams(prefix, params, add) {
        var _this = this;

        var name = void 0;
        var rbracket = new RegExp(/\[\]$/);

        if (params instanceof Array) {
          params.forEach(function (val, i) {
            if (rbracket.test(prefix)) {
              add(prefix, val);
            } else {
              _this.buildQueryParams(prefix + '[' + ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? i : '') + ']', val, add);
            }
          });
        } else if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
          for (name in params) {
            this.buildQueryParams(prefix + '[' + name + ']', params[name], add);
          }
        } else {
          add(prefix, params);
        }
      }
      /**
       * Returns a raw route object.
       *
       * @param {string} name
       * @return {Router.Route}
       */

    }, {
      key: 'getRoute',
      value: function getRoute(name) {
        var prefixedName = this.context_.prefix + name;
        var sf41i18nName = name + '.' + this.context_.locale;
        var prefixedSf41i18nName = this.context_.prefix + name + '.' + this.context_.locale;
        var variants = [prefixedName, sf41i18nName, prefixedSf41i18nName, name];

        for (var i in variants) {
          if (variants[i] in this.routes_) {
            return this.routes_[variants[i]];
          }
        }

        throw new Error('The route "' + name + '" does not exist.');
      }
      /**
       * Generates the URL for a route.
       *
       * @param {string} name
       * @param {Object.<string, string>} opt_params
       * @param {boolean} absolute
       * @return {string}
       */

    }, {
      key: 'generate',
      value: function generate(name, opt_params) {
        var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var route = this.getRoute(name),
            params = opt_params || {},
            unusedParams = _extends({}, params),
            url = '',
            optional = true,
            host = '',
            port = typeof this.getPort() == "undefined" || this.getPort() === null ? '' : this.getPort();

        route.tokens.forEach(function (token) {
          if ('text' === token[0]) {
            url = Router.encodePathComponent(token[1]) + url;
            optional = false;
            return;
          }

          if ('variable' === token[0]) {
            var hasDefault = route.defaults && token[3] in route.defaults;

            if (false === optional || !hasDefault || token[3] in params && params[token[3]] != route.defaults[token[3]]) {
              var value = void 0;

              if (token[3] in params) {
                value = params[token[3]];
                delete unusedParams[token[3]];
              } else if (hasDefault) {
                value = route.defaults[token[3]];
              } else if (optional) {
                return;
              } else {
                throw new Error('The route "' + name + '" requires the parameter "' + token[3] + '".');
              }

              var empty = true === value || false === value || '' === value;

              if (!empty || !optional) {
                var encodedValue = Router.encodePathComponent(value);

                if ('null' === encodedValue && null === value) {
                  encodedValue = '';
                }

                url = token[1] + encodedValue + url;
              }

              optional = false;
            } else if (hasDefault && token[3] in unusedParams) {
              delete unusedParams[token[3]];
            }

            return;
          }

          throw new Error('The token type "' + token[0] + '" is not supported.');
        });

        if (url === '') {
          url = '/';
        }

        route.hosttokens.forEach(function (token) {
          var value = void 0;

          if ('text' === token[0]) {
            host = token[1] + host;
            return;
          }

          if ('variable' === token[0]) {
            if (token[3] in params) {
              value = params[token[3]];
              delete unusedParams[token[3]];
            } else if (route.defaults && token[3] in route.defaults) {
              value = route.defaults[token[3]];
            }

            host = token[1] + value + host;
          }
        }); // Foo-bar!

        url = this.context_.base_url + url;

        if (route.requirements && "_scheme" in route.requirements && this.getScheme() != route.requirements["_scheme"]) {
          var currentHost = host || this.getHost();
          url = route.requirements["_scheme"] + "://" + currentHost + (currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if ("undefined" !== typeof route.schemes && "undefined" !== typeof route.schemes[0] && this.getScheme() !== route.schemes[0]) {
          var _currentHost = host || this.getHost();

          url = route.schemes[0] + "://" + _currentHost + (_currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if (host && this.getHost() !== host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port)) {
          url = this.getScheme() + "://" + host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if (absolute === true) {
          url = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        }

        if (Object.keys(unusedParams).length > 0) {
          var prefix = void 0;
          var queryParams = [];

          var add = function add(key, value) {
            // if value is a function then call it and assign it's return value as value
            value = typeof value === 'function' ? value() : value; // change null to empty string

            value = value === null ? '' : value;
            queryParams.push(Router.encodeQueryComponent(key) + '=' + Router.encodeQueryComponent(value));
          };

          for (prefix in unusedParams) {
            this.buildQueryParams(prefix, unusedParams[prefix], add);
          }

          url = url + '?' + queryParams.join('&');
        }

        return url;
      }
      /**
       * Returns the given string encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }], [{
      key: 'getInstance',
      value: function getInstance() {
        return Routing;
      }
      /**
       * Configures the current Router instance with the provided data.
       * @param {Object} data
       */

    }, {
      key: 'setData',
      value: function setData(data) {
        var router = Router.getInstance();
        router.setRoutingData(data);
      }
    }, {
      key: 'customEncodeURIComponent',
      value: function customEncodeURIComponent(value) {
        return encodeURIComponent(value).replace(/%2F/g, '/').replace(/%40/g, '@').replace(/%3A/g, ':').replace(/%21/g, '!').replace(/%3B/g, ';').replace(/%2C/g, ',').replace(/%2A/g, '*').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/'/g, '%27');
      }
      /**
       * Returns the given path properly encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }, {
      key: 'encodePathComponent',
      value: function encodePathComponent(value) {
        return Router.customEncodeURIComponent(value).replace(/%3D/g, '=').replace(/%2B/g, '+').replace(/%21/g, '!').replace(/%7C/g, '|');
      }
      /**
       * Returns the given query parameter or value properly encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }, {
      key: 'encodeQueryComponent',
      value: function encodeQueryComponent(value) {
        return Router.customEncodeURIComponent(value).replace(/%3F/g, '?');
      }
    }]);

    return Router;
  }();
  /**
   * @typedef {{
   *     tokens: (Array.<Array.<string>>),
   *     defaults: (Object.<string, string>),
   *     requirements: Object,
   *     hosttokens: (Array.<string>)
   * }}
   */


  Router.Route;
  /**
   * @typedef {{
   *     base_url: (string)
   * }}
   */

  Router.Context;
  /**
   * Router singleton.
   * @const
   * @type {Router}
   */

  var Routing = new Router();
  return {
    Router: Router,
    Routing: Routing
  };
});

/***/ })

/******/ });