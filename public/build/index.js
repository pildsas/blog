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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
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

/***/ "./assets/js/editDOM/_tag.js":
/*!***********************************!*\
  !*** ./assets/js/editDOM/_tag.js ***!
  \***********************************/
/*! exports provided: getTag, addTag, addTags, noContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return getTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTag", function() { return addTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTags", function() { return addTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noContent", function() { return noContent; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");


var Routing = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ../js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);
function getTag(tag) {
  var box__tag = document.createElement("div");
  box__tag.classList.add("box__tag");
  box__tag.setAttribute("tag", tag.id);
  var html = "\n   \n   <div class=\"tag__item\"> \n      <div class=\"tag__left-strip\"></div>\n      <div class=\"tag__content\">\n         <div class=\"body__name\">#".concat(tag.name, "</div>\n      </div> \n   </div> \n   ");
  box__tag.innerHTML = html;
  return box__tag;
}
function addTag(element) {
  var content__tags = document.querySelector(".content__tags");
  content__tags.appendChild(element);
}
function addTags(tags) {
  var content__tags = document.querySelector(".content__tags");
  content__tags.innerHTML = "";
  tags.forEach(function (tag) {
    addTag(getTag(tag));
  });
}
function noContent(container, text) {
  var elem = document.createElement("div");
  elem.classList.add("content__no-content");
  var html = "\n   <div class=\"text__no-content\">".concat(text, "</div>\n   ");
  elem.innerHTML = html;
  var content__tags = document.querySelector("#content__tags");
  content__tags.innerHTML = "";
  content__tags.appendChild(elem);
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

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion */ "./assets/js/components/accordion.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pagination */ "./assets/js/components/pagination.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes */ "./assets/js/likes.js");
/* harmony import */ var _post_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post_controller */ "./assets/js/post_controller.js");
/* harmony import */ var _editDOM_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editDOM/_post */ "./assets/js/editDOM/_post.js");
/* harmony import */ var _components_modals_response_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modals/_response_list */ "./assets/js/components/modals/_response_list.js");
/* harmony import */ var _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modals/_comments_list */ "./assets/js/components/modals/_comments_list.js");
/* harmony import */ var _components_modals_create_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modals/_create_post */ "./assets/js/components/modals/_create_post.js");
/* harmony import */ var _components_modals_create_folder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modals/_create_folder */ "./assets/js/components/modals/_create_folder.js");
/* harmony import */ var _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modals/_edit_post */ "./assets/js/components/modals/_edit_post.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dropdown */ "./assets/js/components/dropdown.js");
/* harmony import */ var _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modals/_delete_post */ "./assets/js/components/modals/_delete_post.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./folder */ "./assets/js/folder.js");
/* harmony import */ var _form_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form_post */ "./assets/js/form_post.js");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tags */ "./assets/js/components/tags.js");
/* harmony import */ var _editDOM_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editDOM/_tag */ "./assets/js/editDOM/_tag.js");
/* harmony import */ var _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modals/_edit_comment */ "./assets/js/components/modals/_edit_comment.js");
/* harmony import */ var _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/modals/_delete_comment */ "./assets/js/components/modals/_delete_comment.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/comments */ "./assets/js/components/comments.js");
/* harmony import */ var _components_modals_tagged_post__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modals/_tagged_post */ "./assets/js/components/modals/_tagged_post.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_21__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
























var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);

function IndexPage() {
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
    folder: null,
    folders_pagination_container: "folders__paginator",
    posts_page: 1,
    posts_sort: "desc",
    posts_pagination_container: "posts__paginator",
    tags_page: 1,
    tags_sort: "popular",
    tag: null,
    tags_pagination_container: "tags__paginator",
    follow_page: 1,
    follow_sort: "desc",
    follow_pagination_container: "follow__paginator",
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
          follow.ToggleFollow(e.target);
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
          new _components_modals_tagged_post__WEBPACK_IMPORTED_MODULE_20__["TaggedPost"]({
            id: "box__modal",
            target: e.target,
            style_class: "style-class__tagged-post",
            renderpaginated: function renderpaginated() {
              return _this.taggedPostPagination();
            },
            rendersort: function rendersort() {
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"]({
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
          new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_6__["responseList"]({
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
          new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_6__["responseList"]({
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
          new _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_7__["CommentsList"]({
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
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Icon"]({
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
                              new _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_18__["DeleteComment"]({
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
                              new _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_17__["EditComment"]({
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
                                            _components_comments__WEBPACK_IMPORTED_MODULE_19__["EditComment"](response);

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
              new _likes__WEBPACK_IMPORTED_MODULE_3__["UpdateLikes"]({
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
              new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_6__["responseList"]({
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
          new _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_7__["CommentsList"]({
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
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Icon"]({
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
                              new _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_18__["DeleteComment"]({
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
                              new _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_17__["EditComment"]({
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
              new _likes__WEBPACK_IMPORTED_MODULE_3__["UpdateLikes"]({
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
              new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_6__["responseList"]({
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
        new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Icon"]({
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

                      new _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_12__["DeletePost"]({
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
                      return _folder__WEBPACK_IMPORTED_MODULE_13__["getFoldersNames"]();

                    case 7:
                      folders_names = _context11.sent;
                      new _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_10__["EditPost"]({
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
                          _components_tags__WEBPACK_IMPORTED_MODULE_15__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_15__["createTag"](value));
                        },
                        rendertags: function rendertags(t) {
                          t.forEach(function (tag) {
                            _components_tags__WEBPACK_IMPORTED_MODULE_15__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_15__["createTag"](tag.name));
                          });
                        },
                        renderdropdown: function renderdropdown() {
                          new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"]({
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
                                              return _folder__WEBPACK_IMPORTED_MODULE_13__["getFoldersNames"]();

                                            case 2:
                                              folders_names = _context10.sent;
                                              _folder__WEBPACK_IMPORTED_MODULE_13__["updateFoldersList"]({
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
                          _form_post__WEBPACK_IMPORTED_MODULE_14__["renderAutoComplete"]();
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
        new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Icon"]({
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

                      new _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_12__["DeletePost"]({
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
                      return _folder__WEBPACK_IMPORTED_MODULE_13__["getFoldersNames"]();

                    case 7:
                      folders_names = _context15.sent;
                      new _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_10__["EditPost"]({
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
                          _components_tags__WEBPACK_IMPORTED_MODULE_15__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_15__["createTag"](value));
                        },
                        rendertags: function rendertags(t) {
                          t.forEach(function (tag) {
                            _components_tags__WEBPACK_IMPORTED_MODULE_15__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_15__["createTag"](tag.name));
                          });
                        },
                        renderdropdown: function renderdropdown() {
                          new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"]({
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
                                              return _folder__WEBPACK_IMPORTED_MODULE_13__["getFoldersNames"]();

                                            case 2:
                                              folders_names = _context14.sent;
                                              _folder__WEBPACK_IMPORTED_MODULE_13__["updateFoldersList"]({
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
                          _form_post__WEBPACK_IMPORTED_MODULE_14__["renderAutoComplete"]();
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
                    new editProfileModal.EditProfile({
                      id: "box__modal",
                      target: e.target,
                      style_class: "style-class__edit-profile",
                      onsubmit: function () {
                        var _onsubmit9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(response) {
                          return regeneratorRuntime.wrap(function _callee16$(_context16) {
                            while (1) {
                              switch (_context16.prev = _context16.next) {
                                case 0:
                                  profileDOM.editDOM(response.profile_data);

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
                  new followListModal.followList({
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
                  new followListModal.followList({
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
                              return _folder__WEBPACK_IMPORTED_MODULE_13__["getFoldersNames"]();

                            case 2:
                              folders_names = _context24.sent;
                              new _components_modals_create_post__WEBPACK_IMPORTED_MODULE_8__["CreatePost"]({
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
                                    _components_tags__WEBPACK_IMPORTED_MODULE_15__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_15__["createTag"](value));
                                  }
                                },
                                renderdropdown: function renderdropdown() {
                                  new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"]({
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
                                                      return _folder__WEBPACK_IMPORTED_MODULE_13__["getFoldersNames"]();

                                                    case 2:
                                                      folders_names = _context23.sent;
                                                      _folder__WEBPACK_IMPORTED_MODULE_13__["updateFoldersList"]({
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
                                  _form_post__WEBPACK_IMPORTED_MODULE_14__["renderAutoComplete"]();
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
   * TAGS PAGINATION
   */

  this.tagsPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
    var tags_pagination_settings;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            tags_pagination_settings = {
              container_id: self.pagination_data.tags_pagination_container,
              route: self.routes.get_tags,
              page: self.pagination_data.tags_page,
              sort_method: self.pagination_data.tags_sort,
              profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
              folder_id: self.pagination_data.folder,
              tag_id: self.pagination_data.tag,
              cb: function cb(data) {
                self.renderTagsPaginated(data, "#content__posts");
              },
              getPage: function getPage() {
                return self.pagination_data.tags_page;
              },
              getSortMethod: function getSortMethod() {
                return self.pagination_data.tags_sort;
              },
              getFolder: function getFolder() {
                return self.pagination_data.folder;
              },
              getTag: function getTag() {
                return self.pagination_data.tag;
              },
              setPage: function setPage(page) {
                self.pagination_data.tags_page = page;
              }
            };
            return _context26.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_2__["CreatePagination"](tags_pagination_settings));

          case 2:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));
  /**
   * POSTS PAGINATION
   */

  this.postsPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
    var posts_pagination_settings;
    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            posts_pagination_settings = {
              container_id: self.pagination_data.posts_pagination_container,
              route: self.routes.get_posts_all,
              page: self.pagination_data.posts_page,
              sort_method: self.pagination_data.posts_sort,
              profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
              folder_id: self.pagination_data.folder,
              tag_id: self.pagination_data.tag,
              cb: function cb(data) {
                self.renderPostsPaginated(data, "#content__posts");
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
            return _context27.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_2__["CreatePagination"](posts_pagination_settings));

          case 2:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));
  /**
   * FOLLOW PAGINATION
   */

  this.followPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
    var follow_pagination_settings;
    return regeneratorRuntime.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            follow_pagination_settings = {
              container_id: self.pagination_data.follow_pagination_container,
              route: self.routes.get_follow,
              page: self.pagination_data.follow_page,
              sort_method: self.pagination_data.follow_sort,
              profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
              folder_id: self.pagination_data.folder,
              tag_id: self.pagination_data.tag,
              cb: function cb(data) {
                self.renderPostsPaginated(data, "#content__follow");
                var count = data.pagination_data.totalCount;
                document.querySelector("#header__following").innerHTML = "Following (".concat(count, ")");
              },
              getPage: function getPage() {
                return self.pagination_data.follow_page;
              },
              getSortMethod: function getSortMethod() {
                return self.pagination_data.follow_sort;
              },
              getFolder: function getFolder() {
                return self.pagination_data.folder;
              },
              getTag: function getTag() {
                return self.pagination_data.tag;
              },
              setPage: function setPage(page) {
                self.pagination_data.follow_page = page;
              }
            };
            return _context28.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_2__["CreatePagination"](follow_pagination_settings));

          case 2:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));
  /**
   * TAG PAGINATION
   */

  this.taggedPostPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
    var tag_pagination_settings;
    return regeneratorRuntime.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
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
            return _context29.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_2__["CreatePagination"](tag_pagination_settings));

          case 2:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));
  /**
   * SORT TAGS
   */

  this.sortTags = function () {
    new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"]({
      id: "tags__sort",
      attr: "sort",
      default_attr: ["sort", "popular"],
      data: [["Most Used", "popular"], ["By Name", "name"]],
      placeholder: "Sort by",
      style: {
        width: "200px"
      },
      cb: function cb(elem) {
        self.pagination_data.tags_sort = elem.getAttribute("sort");
        self.tagsPagination();
      }
    });
  };
  /**
   * SORT POTS
   */


  this.sortPosts = function () {
    new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"]({
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
   * SORT FOLLOWED POTS
   */


  this.sortFollow = function () {
    new _components_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"]({
      id: "follow__sort",
      attr: "sort",
      default_attr: ["sort", "desc"],
      data: [["Newest", "desc"], ["Most liked", "liked"], ["Most commented", "commented"]],
      placeholder: "Sort by",
      style: {
        width: "200px"
      },
      cb: function cb(elem) {
        self.pagination_data.follow_sort = elem.getAttribute("sort");
        self.followPagination();
      }
    });
  };
  /**
   * RENDER TAGS PAGINATED
   */


  this.renderTagsPaginated = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(data, container) {
      var text;
      return regeneratorRuntime.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              if (!(data.main_data.length == 0)) {
                _context30.next = 4;
                break;
              }

              text = "No tags created";
              _editDOM_tag__WEBPACK_IMPORTED_MODULE_16__["noContent"](container, text);
              return _context30.abrupt("return", false);

            case 4:
              _editDOM_tag__WEBPACK_IMPORTED_MODULE_16__["addTags"](data.main_data);
              /**
               * SELECT TAG
               */

              new _components_tags__WEBPACK_IMPORTED_MODULE_15__["toggleTags"]({
                tag: ".box__tag",
                getTag: function getTag() {
                  return self.pagination_data.tag;
                },
                setTag: function setTag(tag) {
                  self.pagination_data.tag = tag;
                },
                cb: function cb(tag, name) {
                  var posts_pagination_settings = {
                    container_id: self.pagination_data.posts_pagination_container,
                    route: self.routes.get_posts_all,
                    page: 1,
                    sort_method: self.pagination_data.posts_sort,
                    profile_id: document.querySelector(".box__main-content").getAttribute("profile"),
                    folder_id: self.pagination_data.folder,
                    tag_id: self.pagination_data.tag,
                    cb: function cb(data) {
                      self.renderPostsPaginated(data, "#content__posts");

                      if (tag) {
                        var count = data.pagination_data.totalCount;
                        document.querySelector("#header__posts").innerHTML = "".concat(name, " (").concat(count, ")");
                      } else {
                        var _count = data.pagination_data.totalCount;
                        document.querySelector("#header__posts").innerHTML = "Users Posts (".concat(_count, ")");
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
                  new _components_pagination__WEBPACK_IMPORTED_MODULE_2__["CreatePagination"](posts_pagination_settings);
                }
              });

            case 6:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30);
    }));

    return function (_x8, _x9) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * RENDER POSTS PAGINATED (POSTS / DROPDOWN /MODAL EDIT / MODAL DELETE / MODAL RESPONSE LIST)
   */


  this.renderPostsPaginated = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(data, container) {
      var text;
      return regeneratorRuntime.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              if (!(data.main_data.length == 0)) {
                _context31.next = 4;
                break;
              }

              text = "No content";
              _editDOM_post__WEBPACK_IMPORTED_MODULE_5__["noContent"](container, text);
              return _context31.abrupt("return", false);

            case 4:
              _editDOM_post__WEBPACK_IMPORTED_MODULE_5__["addPosts"]({
                data: data.main_data,
                container: container,
                dropdown_trigger_id: "dd-trigger__post",
                dropdown_container_id: "dd-container__post",
                getUser: function getUser() {
                  return _this.profile_data;
                }
              });
              _likes__WEBPACK_IMPORTED_MODULE_3__["toggleLikes"]();
              _components_accordion__WEBPACK_IMPORTED_MODULE_1__["expandAccordions"]();
              /**
               * TOGGLE LIKES
               */

              _likes__WEBPACK_IMPORTED_MODULE_3__["toggleLikes"]();
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

            case 12:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }));

    return function (_x10, _x11) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * RENDER MODAL POSTS PAGINATED
   */


  this.renderPostsByTag = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(data, container) {
      var text;
      return regeneratorRuntime.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              if (!(data.main_data.length == 0)) {
                _context32.next = 4;
                break;
              }

              text = "No posts created";
              _editDOM_post__WEBPACK_IMPORTED_MODULE_5__["noContent"](container, text);
              return _context32.abrupt("return", false);

            case 4:
              _editDOM_post__WEBPACK_IMPORTED_MODULE_5__["addPosts"]({
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

              _likes__WEBPACK_IMPORTED_MODULE_3__["toggleLikes"]();
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
              return _context32.stop();
          }
        }
      }, _callee32);
    }));

    return function (_x12, _x13) {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * INIT INDEX PAGE CONTENT
   */


  this.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
    return regeneratorRuntime.wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.next = 2;
            return _this.getProfileData();

          case 2:
            _this.profile_data = _context33.sent;

            _this.sortTags();

            _this.tagsPagination();

            _this.sortPosts();

            _this.postsPagination();

            if (_this.profile_data.logged) {
              _this.sortFollow();

              _this.followPagination();
            }

            _components_accordion__WEBPACK_IMPORTED_MODULE_1__["expandAccordions"]();

          case 9:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  }));
  this.init();
}

document.addEventListener("DOMContentLoaded", function () {
  new IndexPage();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vZGFscy9fY29tbWVudHNfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2RhbHMvX2NyZWF0ZV9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9kYWxzL19jcmVhdGVfcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2RhbHMvX2RlbGV0ZV9jb21tZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vZGFscy9fZGVsZXRlX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9kYWxzL19lZGl0X2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9kYWxzL19lZGl0X3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9kYWxzL19yZXNwb25zZV9saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vZGFscy9fdGFnZ2VkX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90YWdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lZGl0RE9NL19mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VkaXRET00vX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VkaXRET00vX3RhZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9sZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mb3JtX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWtlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9zdF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGFyZWtyYWFmYXQvYXV0b2NvbXBsZXRlLmpzL2Rpc3QvanMvYXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJhZGRFdiIsImFjY29yZGlvbl9fdHJpZ2dlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0cmFuc2Zvcm0iLCJzY3JvbGxIZWlnaHQiLCJleHBhbmRBY2NvcmRpb25zIiwiUm91dGluZyIsInJlcXVpcmUiLCJSb3V0ZXMiLCJzZXRSb3V0aW5nRGF0YSIsIkNvbW1lbnRzQ29udHJvbGxlciIsIm9wdGlvbnMiLCJzZWxmIiwiaW5pdCIsImNvbnRhaW5lciIsImFkZElucHV0RXYiLCJwcmV2aWV3SW1hZ2UiLCJwcmVwYXJlRmV0Y2hHZXRDb21tZW50cyIsImZldGNoRGF0YSIsImRhdGEiLCJ1c2VyIiwiZ2V0VXNlciIsImNvbW1lbnRfZGF0YSIsImNvbW1lbnQiLCJyZW5kZXIiLCJjb21tZW50c0RhdGEiLCJpbnB1dCIsImlucHV0X2NvbW1lbnQiLCJlIiwia2V5Q29kZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsInByZXZlbnREZWZhdWx0IiwicHJlcGFyZUZldGNoUG9zdENvbW1lbnQiLCJpbm5lckhUTUwiLCJjb3VudCIsImZpbGUiLCJpbnBGaWxlIiwiZGlzcGxheSIsInByZXZpZXdDb250YWluZXIiLCJwb3N0X2lkIiwiaGVscGVycyIsImdldEF0dHJpYnV0ZSIsImZldGNoX2JvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsImdlbmVyYXRlIiwiY29tbWVudF90ZXh0IiwicHJvbWlzZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImh0bWwiLCJjb21tZW50X2F1dGhvciIsImF2YXRhciIsInByb2ZpbGUiLCJmaXJzdG5hbWUiLCJpbWdfYXR0YWNoZWQiLCJzdGF0ZSIsImxpa2VzIiwiZGlzbGlrZXMiLCJjcmVhdGVkQXQiLCJjb21tZW50c19jb250YWluZXIiLCJhcHBlbmRDaGlsZCIsInByZXBlbmQiLCJhZGRMaWtlc0V2IiwiZHJvcGRvd24iLCJhZGRSZXNwb25zZUxpc3RFdiIsImNvbW1lbnRlZF9wb3N0IiwiYXV0aG9yIiwicmVtb3ZlIiwidG9nZ2xlcnMiLCJ0b2dnbGVyIiwib25jbGlja0xpa2VzIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyIiwib25jbGlja0NvdW50IiwiYnRuQ2xlYXIiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZ2V0Q29tbWVudCIsIlJlbmRlckNvbW1lbnQiLCJyZW5kZXJDb21tZW50IiwiY29tbWVudHMiLCJyZXNwb25zZSIsIkRlbGV0ZUNvbW1lbnQiLCJzdWNjZXNzIiwiRWRpdENvbW1lbnQiLCJpbWdfY29udGFpbmVyIiwiSWNvbiIsImdldEVsZW1lbnRCeUlkIiwicGFuZWwiLCJjYXJkIiwiaXRlbXMiLCJpdGVtX292ZXJsYXkiLCJ1bmRlZmluZWQiLCJ2aXNpYmlsaXR5IiwiaXRlbSIsImljb25fY2xhc3MiLCJidG5fdGV4dCIsImJ0bl9jdXN0b21fY2xhc3MiLCJodG1sMiIsIm92ZXJsYXkiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJoaWRlIiwic2hvdyIsImJ1dHRvbnMiLCJjbGlja2VkIiwiYWRkRHJvcGRvd24iLCJ3aW5kb3ciLCJkcm9wZG93bnMiLCJhZGRHZXR0ZXIiLCJnZXRkZCIsImVsZW0iLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsImRkIiwiYmFja2dyb3VuZCIsIml0ZW1fb3ZlcmxheV9iZyIsIm92ZXJsYXlzIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY2IiLCJEcm9wZG93biIsImN1c3RvbVN0eWxlIiwid2lkdGgiLCJkZWZhdWx0X2F0dHIiLCJhcnJvdyIsInBsYWNlaG9sZGVyIiwiZGRfaXRlbSIsImRkX2l0ZW1fYXR0ciIsImF0dHIiLCJib3R0b21faXRlbSIsImdldGRkdiIsImNvbnRhaW5zIiwibmV3dmFsIiwib25tb3VzZWRvd24iLCJhdXRvY2xvc2UiLCJDb21tZW50c0xpc3QiLCJyZW5kZXJNb2RhbEJvZHkiLCJzdHlsZV9jbGFzcyIsIm1vZGFsX292ZXJsYXkiLCJsZW5ndGgiLCJib3giLCJsaXN0Iiwib3BhY2l0eSIsInNlY29uZGFyeV9vdmVybGF5Iiwic2Vjb25kYXJ5X292ZXJsYXlfYmciLCJyZW5kZXJNb2RhbEl0ZW0iLCJkcm9wZG93bl9jb250YWluZXIiLCJkcm9wZG93bl90cmlnZ2VyIiwicmVuZGVySW5wdXQiLCJkZWZhdWx0X2ltZyIsInByb2ZpbGVfZGF0YSIsImxvY2siLCJsb2dnZWQiLCJjb3VudGVycyIsImNvdW50ZXIiLCJwb3N0cyIsInBvc3QiLCJoaWRlTW9kYWwiLCJidG5fY2xvc2UiLCJDcmVhdGVGb2xkZXIiLCJyZW5kZXJNb2RhbCIsImdldENTUkYiLCJ0b2tlbiIsImNzcmYiLCJwb3NpdGlvbiIsImJ0bl9zdWJtaXQiLCJjcmVhdGVGb2xkZXIiLCJkaXNwbGF5RXJyb3IiLCJidG5fY2FuY2VsIiwiZm9ybSIsImVycm9yIiwiZXJyb3JzIiwibWVzc2FnZSIsIkNyZWF0ZVBvc3QiLCJlcnJvcl9maWVsZHMiLCJyZW5kZXJkcm9wZG93biIsInJlbmRlcmF1dG9jb21wbGV0ZSIsImNyZWF0ZVBvc3QiLCJwcmVwYXJlRmV0Y2giLCJvbnN1Ym1pdCIsImhpZGVFcnJvcnMiLCJkaXNwbGF5RXJyb3JzIiwidGFnX2lucHV0Iiwia2V5Iiwib250YWdjcmVhdGUiLCJwcmV2aWV3RnJvbnRDb3ZlciIsImlucHV0RnJvbnQiLCJwcmV2aWV3RnJvbnQiLCJwcmV2aWV3RnJvbnRUZXh0IiwiYnRuRnJvbnRDbGVhciIsInByZXZpZXdIZWFkZXJDb3ZlciIsImlucHV0SGVhZGVyIiwicHJldmlld0hlYWRlciIsInByZXZpZXdIZWFkZXJUZXh0IiwiYnRuSGVhZGVyQ2xlYXIiLCJmb2xkZXIiLCJ0YWdzX3NlbGVjdGVkIiwidGFncyIsInRhZ19uYW1lcyIsInRhZyIsInRhZ19uYW1lIiwic3RyXzEiLCJjYXVzZSIsInByb3BlcnR5UGF0aCIsInJlcGxhY2UiLCJtb2RhbF93aW5kb3ciLCJ1cGRhdGVET00iLCJEZWxldGVQb3N0IiwiZ2V0RGF0YSIsInByZXZpZXdUZXh0IiwicmVtb3ZlX2ltZyIsImFkZFZhbHVlcyIsInRleHQiLCJpbWFnZSIsIkVkaXRQb3N0IiwiZWRpdFBvc3QiLCJnZXRQb3N0IiwicG9zdF9kYXRhIiwidGl0bGUiLCJmcm9udF9jb3Zlcl9saW5rIiwiaGVhZGVyX2NvdmVyX2xpbmsiLCJyZW5kZXJ0YWdzIiwibmFtZSIsImZvbGRlcl9pZCIsInRhZ3NfY29udGFpbmVyIiwidGFnX2VsZW1lbnQiLCJyZXNwb25zZUxpc3QiLCJkYXRhX3RhcmdldCIsImxhc3RuYW1lIiwiY2xhc3NuYW1lIiwibGlrZXNfZnJvbSIsImRpc2xpa2VzX2Zyb20iLCJUYWdnZWRQb3N0IiwiekluZGV4IiwicmVuZGVyc29ydCIsInJlbmRlcnBhZ2luYXRlZCIsInNldEhlYWRlciIsImhlYWRlciIsInBhZ2luYXRpb25fZGF0YSIsIkNyZWF0ZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uX3NldHRpbmdzIiwicm91dGUiLCJjb250YWluZXJfaWQiLCJwcm9maWxlX2lkIiwicGFnZSIsInNvcnRfbWV0aG9kIiwidGFnX2lkIiwiZ2V0UGFnZURhdGEiLCJyZXNwb25zZV9kYXRhIiwibWFpbl9kYXRhIiwiZ2V0UGFnZUNvdW50IiwiYWRkQ29udGVudCIsImF1dGhfZGF0YSIsInJlbmRlclBhZ2luYXRpb24iLCJkaXNwbGF5RG90cyIsInBhZ2luYXRpb25fcGFnZXMiLCJwYWdlX251bWJlciIsImkiLCJNYXRoIiwiY2VpbCIsInRvdGFsQ291bnQiLCJudW1JdGVtc1BlclBhZ2UiLCJwcmV2QnV0dG9uIiwibmV4dEJ1dHRvbiIsImN1cnJlbnRQYWdlTnVtYmVyIiwicGFnaW5hdGlvbkNvbnRyb2wiLCJldmVudCIsImdldFBhZ2UiLCJwYXJzZUludCIsInNldFBhZ2UiLCJuZXdfcGFnaW5hdGlvbiIsImdldEZvbGRlciIsImdldFRhZyIsImdldFNvcnRNZXRob2QiLCJwYWdpbmF0aW9uX2l0ZW0iLCJjcmVhdGVUYWciLCJobXRsIiwicmVtb3ZlVGFnIiwiYWRkVGFnIiwicmVtb3ZlQ2hpbGQiLCJnZXRUYWdzIiwibmFtZXMiLCJ0b2dnbGVUYWdzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRvZ2dsZSIsImdldEN1cnJlbnRUYWciLCJjdXJyZW50X3RhZyIsInNldFRhZyIsInByZXZpb3VzX3RhZyIsImZvbGRlcl9hY3RpdmUiLCJib3hfX2ZvbGRlciIsImNyZWF0ZWRfYXQiLCJmb2xkZXJfX2l0ZW0iLCJhY3RpdmUiLCJhZGRGb2xkZXIiLCJlbGVtZW50IiwiZm9sZGVyc19fZm9sZGVycyIsImRlbGV0ZUZvbGRlciIsImFkZEZvbGRlcnMiLCJyZXBsYWNlRm9sZGVyIiwicmVwbGFjZVdpdGgiLCJub0NvbnRlbnQiLCJjb250ZW50X19mb2xkZXJzIiwiZHJvcGRvd25fY29udGFpbmVyX2lkIiwiZHJvcGRvd25fdHJpZ2dlcl9pZCIsImJveF9wb3N0IiwiYm94X3RhZ3MiLCJhZGRQb3N0VGFncyIsImFkZEF0dHJpYnV0ZXMiLCJhZGRQb3N0IiwicG9zdHNfX3Bvc3RzIiwiYWRkUG9zdHMiLCJhZGRQb3N0VGFnIiwib3BlblBvc3QiLCJib3hfX3Bvc3QiLCJyZXBsYWNlRE9NIiwiYm94X3Byb2ZpbGVfY29udGVudCIsImxpa2VfaWNvbiIsImRpc2xpa2VfaWNvbiIsImNvbnRlbnRfX3Bvc3RzIiwiYm94X190YWciLCJjb250ZW50X190YWdzIiwiYWRkVGFncyIsInJlbmFtZUZvbGRlciIsImZvbGRlcl9uYW1lIiwiZ2V0Rm9sZGVyc05hbWVzIiwiZm9sZGVycyIsInRvZ2dsZUZvbGRlcnMiLCJnZXRDdXJyZW50Rm9sZGVyIiwiY3VycmVudF9mb2xkZXIiLCJzZXRGb2xkZXIiLCJwcmV2aW91c19mb2xkZXIiLCJ1cGRhdGVGb2xkZXJzTGlzdCIsImF1dG9Db21wbGV0ZSIsInJlbmRlckF1dG9Db21wbGV0ZSIsInNyYyIsInF1ZXJ5Iiwic291cmNlIiwiY2FjaGUiLCJwbGFjZUhvbGRlciIsInNlbGVjdG9yIiwidGhyZXNob2xkIiwiZGVib3VuY2UiLCJyZXN1bHRzTGlzdCIsImRlc3RpbmF0aW9uIiwicmVzdWx0SXRlbSIsIm1hdGNoIiwibm9SZXN1bHRzIiwic3BhbiIsIm9uU2VsZWN0aW9uIiwiZmVlZGJhY2siLCJzZWxlY3Rpb24iLCJTZWFyY2hCYXIiLCJyZXN1bHRQb3N0IiwicG9zdHNfZGF0YSIsImhpZ2hsaWdodCIsInJlc3VsdF9pdGVtIiwicmVkaXJlY3QiLCJyZXN1bHRBdXRob3IiLCJwcm9maWxlc19kYXRhIiwibmlja25hbWUiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0IiwiZW5kIiwic3Vic3RyIiwic2xpY2UiLCJoaWdobGlnaHRlZCIsInNlYXJjaF9pbnB1dCIsInNldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJsb2NhdGlvbiIsInRvcCIsImxvYyIsImhyZWYiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJvYmoiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJwcmVmb21hdHRlZERhdGUiLCJoaWRlWWVhciIsIk1PTlRIX05BTUVTIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJ0aW1lQWdvIiwiZGF0ZVBhcmFtIiwiRGF0ZSIsIkRBWV9JTl9NUyIsInRvZGF5IiwieWVzdGVyZGF5Iiwic2Vjb25kcyIsInJvdW5kIiwiaXNUb2RheSIsInRvRGF0ZVN0cmluZyIsImlzWWVzdGVyZGF5IiwiaXNUaGlzWWVhciIsImdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJPck51bGwiLCJjbGFzc2xpc3QiLCJjdXJyZW50X2VsZW1lbnQiLCJzaGlmdCIsImF0dHJpYnV0ZSIsInJldHVybl92YWx1ZSIsInNldEF0dHJPckZhbHNlIiwibGFzdCIsImFycmF5IiwiZ2V0UG9zaXRpb24iLCJsZWZ0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsImdldFBvc2l0aW9ucyIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50Iiwib2JqZWN0IiwidHlwZSIsImNhbGxiYWNrIiwiYXR0YWNoRXZlbnQiLCJsaW1pdCIsImluVGhyb3R0bGUiLCJjb250ZXh0IiwidGhyb3R0bGVMYXN0IiwibGFzdEZ1bmMiLCJsYXN0UmFuIiwibm93IiwiZmFkZU91dCIsImVsIiwiZmFkZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZhZGVJbiIsInZhbCIsInBhcnNlRmxvYXQiLCJJbmRleFBhZ2UiLCJjb2xvcnMiLCJsaXN0UmVzcG9uc2UiLCJsaXN0UmVzcG9uc2VTZWNvbmRhcnkiLCJjb21tZW50c01vZGFsIiwiY29tbWVudHNNb2RhbFNlY29uZGFyeSIsImRyb3Bkb3duU2Vjb25kYXJ5IiwiZGVsZXRlQ29tbWVudE1vZGFsIiwiZGVsZXRlQ29tbWVudE1vZGFsU2Vjb25kYXJ5IiwiZGVsZXRlUG9zdE1vZGFsIiwiZGVsZXRlUG9zdE1vZGFsU2Vjb25kYXJ5IiwiZWRpdFBvc3RNb2RhbCIsImVkaXRQb3N0TW9kYWxTZWNvbmRhcnkiLCJlZGl0Q29tbWVudE1vZGFsIiwiZWRpdENvbW1lbnRNb2RhbFNlY29uZGFyeSIsImNyZWF0ZUZvbGRlck1vZGFsU2Vjb25kYXJ5IiwiZ2V0UHJvZmlsZURhdGEiLCJyb3V0ZXMiLCJnZXRfdXNlcl9kYXRhIiwiZ2V0X3Byb2ZpbGUiLCJ1cGRhdGVfcHJvZmlsZSIsImdldF9mb2xsb3dlcnMiLCJnZXRfZm9sbG93aW5nIiwiZ2V0X2ZvbGRlcnMiLCJnZXRfcG9zdHMiLCJnZXRfcG9zdHNfYWxsIiwiZ2V0X3RhZ3MiLCJnZXRfZm9sbG93IiwiZm9sZGVyc19wYWdlIiwiZm9sZGVyc19zb3J0IiwiZm9sZGVyc19wYWdpbmF0aW9uX2NvbnRhaW5lciIsInBvc3RzX3BhZ2UiLCJwb3N0c19zb3J0IiwicG9zdHNfcGFnaW5hdGlvbl9jb250YWluZXIiLCJ0YWdzX3BhZ2UiLCJ0YWdzX3NvcnQiLCJ0YWdzX3BhZ2luYXRpb25fY29udGFpbmVyIiwiZm9sbG93X3BhZ2UiLCJmb2xsb3dfc29ydCIsImZvbGxvd19wYWdpbmF0aW9uX2NvbnRhaW5lciIsInRhZ19tb2RhbF9wYWdlIiwidGFnX21vZGFsX3NvcnQiLCJ0YWdfbW9kYWxfcGFnaW5hdGlvbl9jb250YWluZXIiLCJ0YWdfbW9kYWxfdGFnIiwiZm9sbG93VG9nZ2xlciIsImZvbGxvdyIsIlRvZ2dsZUZvbGxvdyIsInNlbGVjdFRhZyIsInRhZ3NfdGFnIiwidGFnZ2VkUG9zdCIsInRhZ2dlZFBvc3RQYWdpbmF0aW9uIiwidG9vbHRpcF90b2dnbGUiLCJyZXNwb25zZUxpc3RNb2RhbCIsIm9wZW5Db21tZW50cyIsImNvbW1lbnRzX3RvZ2dsZSIsImxpa2UiLCJkaXNsaWtlIiwidW5saWtlIiwidW5kaXNsaWtlIiwib3BlbkNvbW1lbnRzU2Vjb25kYXJ5IiwicG9zdERyb3Bkb3duIiwicCIsInBvc3RzUGFnaW5hdGlvbiIsImZvbGRlcnNfbmFtZXMiLCJ0IiwiY3JlYXRlRm9sZGVyTW9kYWwiLCJmb2xkZXJzUGFnaW5hdGlvbiIsImZvcm1fcG9zdCIsInBvc3REcm9wZG93blNlY29uZGFyeSIsIm1vZGFscyIsImVkaXRQcm9maWxlIiwiZWRpdFByb2ZpbGVNb2RhbCIsIkVkaXRQcm9maWxlIiwicHJvZmlsZURPTSIsImVkaXRET00iLCJmb2xsb3dlcnNNb2RhbCIsImZvbGxvd0xpc3RNb2RhbCIsImZvbGxvd0xpc3QiLCJmb2xsb3dpbmdNb2RhbCIsImJ0bl9jcmVhdGVfZm9sZGVyIiwiYnRuX2NyZWF0ZV9wb3N0IiwiY3JlYXRlUG9zdE1vZGFsIiwidGFnc1BhZ2luYXRpb24iLCJ0YWdzX3BhZ2luYXRpb25fc2V0dGluZ3MiLCJyZW5kZXJUYWdzUGFnaW5hdGVkIiwicGFnaW5hdGlvbiIsInBvc3RzX3BhZ2luYXRpb25fc2V0dGluZ3MiLCJyZW5kZXJQb3N0c1BhZ2luYXRlZCIsImZvbGxvd1BhZ2luYXRpb24iLCJmb2xsb3dfcGFnaW5hdGlvbl9zZXR0aW5ncyIsInRhZ19wYWdpbmF0aW9uX3NldHRpbmdzIiwicmVuZGVyUG9zdHNCeVRhZyIsInNvcnRUYWdzIiwic29ydFBvc3RzIiwic29ydEZvbGxvdyIsInRhZ3NET00iLCJwb3N0RE9NIiwiYWNjb3JkaW9uIiwidG9nZ2xlTGlrZXMiLCJ0b2dnbGVfbGlrZXMiLCJVcGRhdGVMaWtlcyIsImxpa2VzX2NvdW50ZXIiLCJkaXNsaWtlc19jb3VudGVyIiwidG9nZ2xlSWNvbiIsInJlbW92ZUF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJidG5fdHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWxldGVQb3N0IiwiY2hhbmdlSGVhZGVycyIsInJvb3QiLCJmYWN0b3J5Iiwicm91dGluZyIsImRlZmluZSIsIl9leHRlbmRzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwiUm91dGVyIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsImdldFJvdXRlcyIsImJhc2VVcmwiLCJnZXRCYXNlVXJsIiwiZ2V0U2NoZW1lIiwiZ2V0SG9zdCIsImdldFBvcnQiLCJnZXRMb2NhbGUiLCJidWlsZFF1ZXJ5UGFyYW1zIiwicGFyYW1zIiwiX3RoaXMiLCJyYnJhY2tldCIsIlJlZ0V4cCIsIkFycmF5IiwidGVzdCIsImdldFJvdXRlIiwicHJlZml4ZWROYW1lIiwic2Y0MWkxOG5OYW1lIiwicHJlZml4ZWRTZjQxaTE4bk5hbWUiLCJ2YXJpYW50cyIsIkVycm9yIiwib3B0X3BhcmFtcyIsImFic29sdXRlIiwidW51c2VkUGFyYW1zIiwib3B0aW9uYWwiLCJ0b2tlbnMiLCJlbmNvZGVQYXRoQ29tcG9uZW50IiwiaGFzRGVmYXVsdCIsImRlZmF1bHRzIiwiZW1wdHkiLCJlbmNvZGVkVmFsdWUiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiY3VycmVudEhvc3QiLCJzY2hlbWVzIiwiX2N1cnJlbnRIb3N0Iiwia2V5cyIsInF1ZXJ5UGFyYW1zIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJzZXREYXRhIiwicm91dGVyIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlDQUFpQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGdFQUFnRTtBQUM5STtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL2NEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzdUJDLFdBQVVzaUIsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSUMsT0FBTyxHQUFHRCxPQUFPLEVBQXJCOztBQUNBLE1BQUksSUFBSixFQUFnRDtBQUM1QztBQUNBRSxxQ0FBTyxFQUFELG9DQUFLRCxPQUFPLENBQUN0a0IsT0FBYjtBQUFBO0FBQUE7QUFBQSxvR0FBTjtBQUNILEdBSEQsTUFHTyxFQVdOO0FBQ0osQ0FqQkEsRUFpQkMsSUFqQkQsRUFpQk8sWUFBWTtBQUNoQjtBQUVKOzs7Ozs7OztBQVFBOzs7O0FBSUEsTUFBSXdrQixRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQixVQUFVbGpCLE1BQVYsRUFBa0I7QUFBRSxTQUFLLElBQUl3UCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNkgsU0FBUyxDQUFDblAsTUFBOUIsRUFBc0NzSCxDQUFDLEVBQXZDLEVBQTJDO0FBQUUsVUFBSWlGLE1BQU0sR0FBRzRDLFNBQVMsQ0FBQzdILENBQUQsQ0FBdEI7O0FBQTJCLFdBQUssSUFBSTFFLEdBQVQsSUFBZ0IySixNQUFoQixFQUF3QjtBQUFFLFlBQUl3TyxNQUFNLENBQUNFLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQzVPLE1BQXJDLEVBQTZDM0osR0FBN0MsQ0FBSixFQUF1RDtBQUFFOUssZ0JBQU0sQ0FBQzhLLEdBQUQsQ0FBTixHQUFjMkosTUFBTSxDQUFDM0osR0FBRCxDQUFwQjtBQUE0QjtBQUFFO0FBQUU7O0FBQUMsV0FBTzlLLE1BQVA7QUFBZ0IsR0FBaFE7O0FBRUEsTUFBSXNqQixPQUFPLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQyxTQUFPQSxNQUFNLENBQUNDLFFBQWQsTUFBMkIsUUFBM0QsR0FBc0UsVUFBVXJNLEdBQVYsRUFBZTtBQUFFLG9CQUFjQSxHQUFkO0FBQW9CLEdBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFdBQU9BLEdBQUcsSUFBSSxPQUFPb00sTUFBUCxLQUFrQixVQUF6QixJQUF1Q3BNLEdBQUcsQ0FBQ3NNLFdBQUosS0FBb0JGLE1BQTNELElBQXFFcE0sR0FBRyxLQUFLb00sTUFBTSxDQUFDSixTQUFwRixHQUFnRyxRQUFoRyxZQUFrSGhNLEdBQWxILENBQVA7QUFBK0gsR0FBNVE7O0FBRUEsTUFBSXVNLFlBQVksR0FBRyxZQUFZO0FBQUUsYUFBU0MsZ0JBQVQsQ0FBMEIzakIsTUFBMUIsRUFBa0M0akIsS0FBbEMsRUFBeUM7QUFBRSxXQUFLLElBQUlwVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb1UsS0FBSyxDQUFDMWIsTUFBMUIsRUFBa0NzSCxDQUFDLEVBQW5DLEVBQXVDO0FBQUUsWUFBSXFVLFVBQVUsR0FBR0QsS0FBSyxDQUFDcFUsQ0FBRCxDQUF0QjtBQUEyQnFVLGtCQUFVLENBQUNDLFVBQVgsR0FBd0JELFVBQVUsQ0FBQ0MsVUFBWCxJQUF5QixLQUFqRDtBQUF3REQsa0JBQVUsQ0FBQ0UsWUFBWCxHQUEwQixJQUExQjtBQUFnQyxZQUFJLFdBQVdGLFVBQWYsRUFBMkJBLFVBQVUsQ0FBQ0csUUFBWCxHQUFzQixJQUF0QjtBQUE0QmYsY0FBTSxDQUFDZ0IsY0FBUCxDQUFzQmprQixNQUF0QixFQUE4QjZqQixVQUFVLENBQUMvWSxHQUF6QyxFQUE4QytZLFVBQTlDO0FBQTREO0FBQUU7O0FBQUMsV0FBTyxVQUFVSyxXQUFWLEVBQXVCQyxVQUF2QixFQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFBRSxVQUFJRCxVQUFKLEVBQWdCUixnQkFBZ0IsQ0FBQ08sV0FBVyxDQUFDZixTQUFiLEVBQXdCZ0IsVUFBeEIsQ0FBaEI7QUFBcUQsVUFBSUMsV0FBSixFQUFpQlQsZ0JBQWdCLENBQUNPLFdBQUQsRUFBY0UsV0FBZCxDQUFoQjtBQUE0QyxhQUFPRixXQUFQO0FBQXFCLEtBQWhOO0FBQW1OLEdBQTloQixFQUFuQjs7QUFFQSxXQUFTRyxlQUFULENBQXlCQyxRQUF6QixFQUFtQ0osV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUVJLFFBQVEsWUFBWUosV0FBdEIsQ0FBSixFQUF3QztBQUFFLFlBQU0sSUFBSUssU0FBSixDQUFjLG1DQUFkLENBQU47QUFBMkQ7QUFBRTs7QUFFekosTUFBSUMsTUFBTSxHQUFHLFlBQVk7QUFFckI7Ozs7O0FBS0EsYUFBU0EsTUFBVCxDQUFnQnZKLE9BQWhCLEVBQXlCNkIsTUFBekIsRUFBaUM7QUFDN0J1SCxxQkFBZSxDQUFDLElBQUQsRUFBT0csTUFBUCxDQUFmOztBQUVBLFdBQUtDLFFBQUwsR0FBZ0J4SixPQUFPLElBQUk7QUFBRXlKLGdCQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBTSxFQUFFLEVBQXhCO0FBQTRCQyxZQUFJLEVBQUUsRUFBbEM7QUFBc0NDLFlBQUksRUFBRSxFQUE1QztBQUFnREMsY0FBTSxFQUFFLEVBQXhEO0FBQTREQyxjQUFNLEVBQUU7QUFBcEUsT0FBM0I7QUFDQSxXQUFLQyxTQUFMLENBQWVsSSxNQUFNLElBQUksRUFBekI7QUFDSDtBQUVEOzs7Ozs7QUFNQTRHLGdCQUFZLENBQUNjLE1BQUQsRUFBUyxDQUFDO0FBQ2xCMVosU0FBRyxFQUFFLGdCQURhOztBQUlsQjs7OztBQUlBN0ssV0FBSyxFQUFFLFNBQVN0QixjQUFULENBQXdCVSxJQUF4QixFQUE4QjtBQUNqQyxhQUFLNGxCLFVBQUwsQ0FBZ0I1bEIsSUFBSSxDQUFDLFVBQUQsQ0FBcEI7QUFDQSxhQUFLMmxCLFNBQUwsQ0FBZTNsQixJQUFJLENBQUMsUUFBRCxDQUFuQjs7QUFFQSxZQUFJLFlBQVlBLElBQWhCLEVBQXNCO0FBQ2xCLGVBQUs2bEIsU0FBTCxDQUFlN2xCLElBQUksQ0FBQyxRQUFELENBQW5CO0FBQ0g7O0FBQ0QsWUFBSSxVQUFVQSxJQUFkLEVBQW9CO0FBQ2hCLGVBQUs4bEIsT0FBTCxDQUFhOWxCLElBQUksQ0FBQyxNQUFELENBQWpCO0FBQ0g7O0FBQ0QsWUFBSSxZQUFZQSxJQUFoQixFQUFzQjtBQUNsQixlQUFLK2xCLFNBQUwsQ0FBZS9sQixJQUFJLENBQUMsUUFBRCxDQUFuQjtBQUNIOztBQUVELGFBQUtnbUIsT0FBTCxDQUFhaG1CLElBQUksQ0FBQyxNQUFELENBQWpCO0FBQ0EsYUFBS2ltQixTQUFMLENBQWVqbUIsSUFBSSxDQUFDLFFBQUQsQ0FBbkI7QUFDSDtBQUVEOzs7O0FBMUJrQixLQUFELEVBOEJsQjtBQUNDeUwsU0FBRyxFQUFFLFdBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTK2tCLFNBQVQsQ0FBbUJsSSxNQUFuQixFQUEyQjtBQUM5QixhQUFLeUksT0FBTCxHQUFldEMsTUFBTSxDQUFDdUMsTUFBUCxDQUFjMUksTUFBZCxDQUFmO0FBQ0g7QUFFRDs7OztBQU5ELEtBOUJrQixFQXdDbEI7QUFDQ2hTLFNBQUcsRUFBRSxXQUROO0FBRUM3SyxXQUFLLEVBQUUsU0FBU3dsQixTQUFULEdBQXFCO0FBQ3hCLGVBQU8sS0FBS0YsT0FBWjtBQUNIO0FBRUQ7Ozs7QUFORCxLQXhDa0IsRUFrRGxCO0FBQ0N6YSxTQUFHLEVBQUUsWUFETjtBQUVDN0ssV0FBSyxFQUFFLFNBQVNnbEIsVUFBVCxDQUFvQlMsT0FBcEIsRUFBNkI7QUFDaEMsYUFBS2pCLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QmdCLE9BQXpCO0FBQ0g7QUFFRDs7OztBQU5ELEtBbERrQixFQTREbEI7QUFDQzVhLFNBQUcsRUFBRSxZQUROO0FBRUM3SyxXQUFLLEVBQUUsU0FBUzBsQixVQUFULEdBQXNCO0FBQ3pCLGVBQU8sS0FBS2xCLFFBQUwsQ0FBY0MsUUFBckI7QUFDSDtBQUVEOzs7O0FBTkQsS0E1RGtCLEVBc0VsQjtBQUNDNVosU0FBRyxFQUFFLFdBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTaWxCLFNBQVQsQ0FBbUJQLE1BQW5CLEVBQTJCO0FBQzlCLGFBQUtGLFFBQUwsQ0FBY0UsTUFBZCxHQUF1QkEsTUFBdkI7QUFDSDtBQUVEOzs7O0FBTkQsS0F0RWtCLEVBZ0ZsQjtBQUNDN1osU0FBRyxFQUFFLFdBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTcWxCLFNBQVQsQ0FBbUJSLE1BQW5CLEVBQTJCO0FBQzlCLGFBQUtMLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QkEsTUFBdkI7QUFDSDtBQUVEOzs7O0FBTkQsS0FoRmtCLEVBMEZsQjtBQUNDaGEsU0FBRyxFQUFFLFdBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTMmxCLFNBQVQsR0FBcUI7QUFDeEIsZUFBTyxLQUFLbkIsUUFBTCxDQUFjSyxNQUFyQjtBQUNIO0FBRUQ7Ozs7QUFORCxLQTFGa0IsRUFvR2xCO0FBQ0NoYSxTQUFHLEVBQUUsU0FETjtBQUVDN0ssV0FBSyxFQUFFLFNBQVNvbEIsT0FBVCxDQUFpQlQsSUFBakIsRUFBdUI7QUFDMUIsYUFBS0gsUUFBTCxDQUFjRyxJQUFkLEdBQXFCQSxJQUFyQjtBQUNIO0FBRUQ7Ozs7QUFORCxLQXBHa0IsRUE4R2xCO0FBQ0M5WixTQUFHLEVBQUUsU0FETjtBQUVDN0ssV0FBSyxFQUFFLFNBQVM0bEIsT0FBVCxHQUFtQjtBQUN0QixlQUFPLEtBQUtwQixRQUFMLENBQWNHLElBQXJCO0FBQ0g7QUFFRDs7OztBQU5ELEtBOUdrQixFQXdIbEI7QUFDQzlaLFNBQUcsRUFBRSxTQUROO0FBRUM3SyxXQUFLLEVBQUUsU0FBU2tsQixPQUFULENBQWlCTixJQUFqQixFQUF1QjtBQUMxQixhQUFLSixRQUFMLENBQWNJLElBQWQsR0FBcUJBLElBQXJCO0FBQ0g7QUFFRDs7OztBQU5ELEtBeEhrQixFQWtJbEI7QUFDQy9aLFNBQUcsRUFBRSxTQUROO0FBRUM3SyxXQUFLLEVBQUUsU0FBUzZsQixPQUFULEdBQW1CO0FBQ3RCLGVBQU8sS0FBS3JCLFFBQUwsQ0FBY0ksSUFBckI7QUFDSDtBQUpGLEtBbElrQixFQXVJbEI7QUFDQy9aLFNBQUcsRUFBRSxXQUROOztBQUlDOzs7QUFHQTdLLFdBQUssRUFBRSxTQUFTbWxCLFNBQVQsQ0FBbUJMLE1BQW5CLEVBQTJCO0FBQzlCLGFBQUtOLFFBQUwsQ0FBY00sTUFBZCxHQUF1QkEsTUFBdkI7QUFDSDtBQUVEOzs7O0FBWEQsS0F2SWtCLEVBc0psQjtBQUNDamEsU0FBRyxFQUFFLFdBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTOGxCLFNBQVQsR0FBcUI7QUFDeEIsZUFBTyxLQUFLdEIsUUFBTCxDQUFjTSxNQUFyQjtBQUNIO0FBSkYsS0F0SmtCLEVBMkpsQjtBQUNDamEsU0FBRyxFQUFFLGtCQUROOztBQUlDOzs7Ozs7OztBQVFBN0ssV0FBSyxFQUFFLFNBQVMrbEIsZ0JBQVQsQ0FBMEJyQixNQUExQixFQUFrQ3NCLE1BQWxDLEVBQTBDbmtCLEdBQTFDLEVBQStDO0FBQ2xELFlBQUlva0IsS0FBSyxHQUFHLElBQVo7O0FBRUEsWUFBSTdZLElBQUksR0FBRyxLQUFLLENBQWhCO0FBQ0EsWUFBSThZLFFBQVEsR0FBRyxJQUFJQyxNQUFKLENBQVcsT0FBWCxDQUFmOztBQUVBLFlBQUlILE1BQU0sWUFBWUksS0FBdEIsRUFBNkI7QUFDekJKLGdCQUFNLENBQUNyb0IsT0FBUCxDQUFlLFVBQVUrZCxHQUFWLEVBQWVuTSxDQUFmLEVBQWtCO0FBQzdCLGdCQUFJMlcsUUFBUSxDQUFDRyxJQUFULENBQWMzQixNQUFkLENBQUosRUFBMkI7QUFDdkI3aUIsaUJBQUcsQ0FBQzZpQixNQUFELEVBQVNoSixHQUFULENBQUg7QUFDSCxhQUZELE1BRU87QUFDSHVLLG1CQUFLLENBQUNGLGdCQUFOLENBQXVCckIsTUFBTSxHQUFHLEdBQVQsSUFBZ0IsQ0FBQyxPQUFPaEosR0FBUCxLQUFlLFdBQWYsR0FBNkIsV0FBN0IsR0FBMkMySCxPQUFPLENBQUMzSCxHQUFELENBQW5ELE1BQThELFFBQTlELEdBQXlFbk0sQ0FBekUsR0FBNkUsRUFBN0YsSUFBbUcsR0FBMUgsRUFBK0htTSxHQUEvSCxFQUFvSTdaLEdBQXBJO0FBQ0g7QUFDSixXQU5EO0FBT0gsU0FSRCxNQVFPLElBQUksQ0FBQyxPQUFPbWtCLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0MsV0FBaEMsR0FBOEMzQyxPQUFPLENBQUMyQyxNQUFELENBQXRELE1BQW9FLFFBQXhFLEVBQWtGO0FBQ3JGLGVBQUs1WSxJQUFMLElBQWE0WSxNQUFiLEVBQXFCO0FBQ2pCLGlCQUFLRCxnQkFBTCxDQUFzQnJCLE1BQU0sR0FBRyxHQUFULEdBQWV0WCxJQUFmLEdBQXNCLEdBQTVDLEVBQWlENFksTUFBTSxDQUFDNVksSUFBRCxDQUF2RCxFQUErRHZMLEdBQS9EO0FBQ0g7QUFDSixTQUpNLE1BSUE7QUFDSEEsYUFBRyxDQUFDNmlCLE1BQUQsRUFBU3NCLE1BQVQsQ0FBSDtBQUNIO0FBQ0o7QUFFRDs7Ozs7OztBQW5DRCxLQTNKa0IsRUFxTWxCO0FBQ0NuYixTQUFHLEVBQUUsVUFETjtBQUVDN0ssV0FBSyxFQUFFLFNBQVNzbUIsUUFBVCxDQUFrQmxaLElBQWxCLEVBQXdCO0FBQzNCLFlBQUltWixZQUFZLEdBQUcsS0FBSy9CLFFBQUwsQ0FBY0UsTUFBZCxHQUF1QnRYLElBQTFDO0FBQ0EsWUFBSW9aLFlBQVksR0FBR3BaLElBQUksR0FBRyxHQUFQLEdBQWEsS0FBS29YLFFBQUwsQ0FBY00sTUFBOUM7QUFDQSxZQUFJMkIsb0JBQW9CLEdBQUcsS0FBS2pDLFFBQUwsQ0FBY0UsTUFBZCxHQUF1QnRYLElBQXZCLEdBQThCLEdBQTlCLEdBQW9DLEtBQUtvWCxRQUFMLENBQWNNLE1BQTdFO0FBQ0EsWUFBSTRCLFFBQVEsR0FBRyxDQUFDSCxZQUFELEVBQWVDLFlBQWYsRUFBNkJDLG9CQUE3QixFQUFtRHJaLElBQW5ELENBQWY7O0FBRUEsYUFBSyxJQUFJbUMsQ0FBVCxJQUFjbVgsUUFBZCxFQUF3QjtBQUNwQixjQUFJQSxRQUFRLENBQUNuWCxDQUFELENBQVIsSUFBZSxLQUFLK1YsT0FBeEIsRUFBaUM7QUFDN0IsbUJBQU8sS0FBS0EsT0FBTCxDQUFhb0IsUUFBUSxDQUFDblgsQ0FBRCxDQUFyQixDQUFQO0FBQ0g7QUFDSjs7QUFFRCxjQUFNLElBQUlvWCxLQUFKLENBQVUsZ0JBQWdCdlosSUFBaEIsR0FBdUIsbUJBQWpDLENBQU47QUFDSDtBQUVEOzs7Ozs7Ozs7QUFqQkQsS0FyTWtCLEVBK05sQjtBQUNDdkMsU0FBRyxFQUFFLFVBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTaUIsUUFBVCxDQUFrQm1NLElBQWxCLEVBQXdCd1osVUFBeEIsRUFBb0M7QUFDdkMsWUFBSUMsUUFBUSxHQUFHelAsU0FBUyxDQUFDblAsTUFBVixHQUFtQixDQUFuQixJQUF3Qm1QLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJ0UyxTQUF6QyxHQUFxRHNTLFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEtBQW5GOztBQUVBLFlBQUk3SSxLQUFLLEdBQUcsS0FBSytYLFFBQUwsQ0FBY2xaLElBQWQsQ0FBWjtBQUFBLFlBQ0k0WSxNQUFNLEdBQUdZLFVBQVUsSUFBSSxFQUQzQjtBQUFBLFlBRUlFLFlBQVksR0FBRy9ELFFBQVEsQ0FBQyxFQUFELEVBQUtpRCxNQUFMLENBRjNCO0FBQUEsWUFHSWhsQixHQUFHLEdBQUcsRUFIVjtBQUFBLFlBSUkrbEIsUUFBUSxHQUFHLElBSmY7QUFBQSxZQUtJcEMsSUFBSSxHQUFHLEVBTFg7QUFBQSxZQU1JQyxJQUFJLEdBQUcsT0FBTyxLQUFLaUIsT0FBTCxFQUFQLElBQXlCLFdBQXpCLElBQXdDLEtBQUtBLE9BQUwsT0FBbUIsSUFBM0QsR0FBa0UsRUFBbEUsR0FBdUUsS0FBS0EsT0FBTCxFQU5sRjs7QUFRQXRYLGFBQUssQ0FBQ3lZLE1BQU4sQ0FBYXJwQixPQUFiLENBQXFCLFVBQVU2TCxLQUFWLEVBQWlCO0FBQ2xDLGNBQUksV0FBV0EsS0FBSyxDQUFDLENBQUQsQ0FBcEIsRUFBeUI7QUFDckJ4SSxlQUFHLEdBQUd1akIsTUFBTSxDQUFDMEMsbUJBQVAsQ0FBMkJ6ZCxLQUFLLENBQUMsQ0FBRCxDQUFoQyxJQUF1Q3hJLEdBQTdDO0FBQ0ErbEIsb0JBQVEsR0FBRyxLQUFYO0FBRUE7QUFDSDs7QUFFRCxjQUFJLGVBQWV2ZCxLQUFLLENBQUMsQ0FBRCxDQUF4QixFQUE2QjtBQUN6QixnQkFBSTBkLFVBQVUsR0FBRzNZLEtBQUssQ0FBQzRZLFFBQU4sSUFBa0IzZCxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVkrRSxLQUFLLENBQUM0WSxRQUFyRDs7QUFDQSxnQkFBSSxVQUFVSixRQUFWLElBQXNCLENBQUNHLFVBQXZCLElBQXFDMWQsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZd2MsTUFBWixJQUFzQkEsTUFBTSxDQUFDeGMsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFOLElBQW9CK0UsS0FBSyxDQUFDNFksUUFBTixDQUFlM2QsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBbkYsRUFBNkc7QUFDekcsa0JBQUl4SixLQUFLLEdBQUcsS0FBSyxDQUFqQjs7QUFFQSxrQkFBSXdKLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWXdjLE1BQWhCLEVBQXdCO0FBQ3BCaG1CLHFCQUFLLEdBQUdnbUIsTUFBTSxDQUFDeGMsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFkO0FBQ0EsdUJBQU9zZCxZQUFZLENBQUN0ZCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQW5CO0FBQ0gsZUFIRCxNQUdPLElBQUkwZCxVQUFKLEVBQWdCO0FBQ25CbG5CLHFCQUFLLEdBQUd1TyxLQUFLLENBQUM0WSxRQUFOLENBQWUzZCxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUFSO0FBQ0gsZUFGTSxNQUVBLElBQUl1ZCxRQUFKLEVBQWM7QUFDakI7QUFDSCxlQUZNLE1BRUE7QUFDSCxzQkFBTSxJQUFJSixLQUFKLENBQVUsZ0JBQWdCdlosSUFBaEIsR0FBdUIsNEJBQXZCLEdBQXNENUQsS0FBSyxDQUFDLENBQUQsQ0FBM0QsR0FBaUUsSUFBM0UsQ0FBTjtBQUNIOztBQUVELGtCQUFJNGQsS0FBSyxHQUFHLFNBQVNwbkIsS0FBVCxJQUFrQixVQUFVQSxLQUE1QixJQUFxQyxPQUFPQSxLQUF4RDs7QUFFQSxrQkFBSSxDQUFDb25CLEtBQUQsSUFBVSxDQUFDTCxRQUFmLEVBQXlCO0FBQ3JCLG9CQUFJTSxZQUFZLEdBQUc5QyxNQUFNLENBQUMwQyxtQkFBUCxDQUEyQmpuQixLQUEzQixDQUFuQjs7QUFFQSxvQkFBSSxXQUFXcW5CLFlBQVgsSUFBMkIsU0FBU3JuQixLQUF4QyxFQUErQztBQUMzQ3FuQiw4QkFBWSxHQUFHLEVBQWY7QUFDSDs7QUFFRHJtQixtQkFBRyxHQUFHd0ksS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXNmQsWUFBWCxHQUEwQnJtQixHQUFoQztBQUNIOztBQUVEK2xCLHNCQUFRLEdBQUcsS0FBWDtBQUNILGFBM0JELE1BMkJPLElBQUlHLFVBQVUsSUFBSTFkLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWXNkLFlBQTlCLEVBQTRDO0FBQy9DLHFCQUFPQSxZQUFZLENBQUN0ZCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQW5CO0FBQ0g7O0FBRUQ7QUFDSDs7QUFFRCxnQkFBTSxJQUFJbWQsS0FBSixDQUFVLHFCQUFxQm5kLEtBQUssQ0FBQyxDQUFELENBQTFCLEdBQWdDLHFCQUExQyxDQUFOO0FBQ0gsU0E3Q0Q7O0FBK0NBLFlBQUl4SSxHQUFHLEtBQUssRUFBWixFQUFnQjtBQUNaQSxhQUFHLEdBQUcsR0FBTjtBQUNIOztBQUVEdU4sYUFBSyxDQUFDK1ksVUFBTixDQUFpQjNwQixPQUFqQixDQUF5QixVQUFVNkwsS0FBVixFQUFpQjtBQUN0QyxjQUFJeEosS0FBSyxHQUFHLEtBQUssQ0FBakI7O0FBRUEsY0FBSSxXQUFXd0osS0FBSyxDQUFDLENBQUQsQ0FBcEIsRUFBeUI7QUFDckJtYixnQkFBSSxHQUFHbmIsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXbWIsSUFBbEI7QUFFQTtBQUNIOztBQUVELGNBQUksZUFBZW5iLEtBQUssQ0FBQyxDQUFELENBQXhCLEVBQTZCO0FBQ3pCLGdCQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVl3YyxNQUFoQixFQUF3QjtBQUNwQmhtQixtQkFBSyxHQUFHZ21CLE1BQU0sQ0FBQ3hjLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBZDtBQUNBLHFCQUFPc2QsWUFBWSxDQUFDdGQsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFuQjtBQUNILGFBSEQsTUFHTyxJQUFJK0UsS0FBSyxDQUFDNFksUUFBTixJQUFrQjNkLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWStFLEtBQUssQ0FBQzRZLFFBQXhDLEVBQWtEO0FBQ3JEbm5CLG1CQUFLLEdBQUd1TyxLQUFLLENBQUM0WSxRQUFOLENBQWUzZCxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUFSO0FBQ0g7O0FBRURtYixnQkFBSSxHQUFHbmIsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXeEosS0FBWCxHQUFtQjJrQixJQUExQjtBQUNIO0FBQ0osU0FuQkQsRUE5RHVDLENBa0Z2Qzs7QUFDQTNqQixXQUFHLEdBQUcsS0FBS3dqQixRQUFMLENBQWNDLFFBQWQsR0FBeUJ6akIsR0FBL0I7O0FBRUEsWUFBSXVOLEtBQUssQ0FBQ2daLFlBQU4sSUFBc0IsYUFBYWhaLEtBQUssQ0FBQ2daLFlBQXpDLElBQXlELEtBQUs1QixTQUFMLE1BQW9CcFgsS0FBSyxDQUFDZ1osWUFBTixDQUFtQixTQUFuQixDQUFqRixFQUFnSDtBQUM1RyxjQUFJQyxXQUFXLEdBQUc3QyxJQUFJLElBQUksS0FBS2lCLE9BQUwsRUFBMUI7QUFFQTVrQixhQUFHLEdBQUd1TixLQUFLLENBQUNnWixZQUFOLENBQW1CLFNBQW5CLElBQWdDLEtBQWhDLEdBQXdDQyxXQUF4QyxJQUF1REEsV0FBVyxDQUFDN2dCLE9BQVosQ0FBb0IsTUFBTWllLElBQTFCLElBQWtDLENBQUMsQ0FBbkMsSUFBd0MsT0FBT0EsSUFBL0MsR0FBc0QsRUFBdEQsR0FBMkQsTUFBTUEsSUFBeEgsSUFBZ0k1akIsR0FBdEk7QUFDSCxTQUpELE1BSU8sSUFBSSxnQkFBZ0IsT0FBT3VOLEtBQUssQ0FBQ2taLE9BQTdCLElBQXdDLGdCQUFnQixPQUFPbFosS0FBSyxDQUFDa1osT0FBTixDQUFjLENBQWQsQ0FBL0QsSUFBbUYsS0FBSzlCLFNBQUwsT0FBcUJwWCxLQUFLLENBQUNrWixPQUFOLENBQWMsQ0FBZCxDQUE1RyxFQUE4SDtBQUNqSSxjQUFJQyxZQUFZLEdBQUcvQyxJQUFJLElBQUksS0FBS2lCLE9BQUwsRUFBM0I7O0FBRUE1a0IsYUFBRyxHQUFHdU4sS0FBSyxDQUFDa1osT0FBTixDQUFjLENBQWQsSUFBbUIsS0FBbkIsR0FBMkJDLFlBQTNCLElBQTJDQSxZQUFZLENBQUMvZ0IsT0FBYixDQUFxQixNQUFNaWUsSUFBM0IsSUFBbUMsQ0FBQyxDQUFwQyxJQUF5QyxPQUFPQSxJQUFoRCxHQUF1RCxFQUF2RCxHQUE0RCxNQUFNQSxJQUE3RyxJQUFxSDVqQixHQUEzSDtBQUNILFNBSk0sTUFJQSxJQUFJMmpCLElBQUksSUFBSSxLQUFLaUIsT0FBTCxPQUFtQmpCLElBQUksSUFBSUEsSUFBSSxDQUFDaGUsT0FBTCxDQUFhLE1BQU1pZSxJQUFuQixJQUEyQixDQUFDLENBQTVCLElBQWlDLE9BQU9BLElBQXhDLEdBQStDLEVBQS9DLEdBQW9ELE1BQU1BLElBQTlELENBQW5DLEVBQXdHO0FBQzNHNWpCLGFBQUcsR0FBRyxLQUFLMmtCLFNBQUwsS0FBbUIsS0FBbkIsR0FBMkJoQixJQUEzQixJQUFtQ0EsSUFBSSxDQUFDaGUsT0FBTCxDQUFhLE1BQU1pZSxJQUFuQixJQUEyQixDQUFDLENBQTVCLElBQWlDLE9BQU9BLElBQXhDLEdBQStDLEVBQS9DLEdBQW9ELE1BQU1BLElBQTdGLElBQXFHNWpCLEdBQTNHO0FBQ0gsU0FGTSxNQUVBLElBQUk2bEIsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQzFCN2xCLGFBQUcsR0FBRyxLQUFLMmtCLFNBQUwsS0FBbUIsS0FBbkIsR0FBMkIsS0FBS0MsT0FBTCxFQUEzQixJQUE2QyxLQUFLQSxPQUFMLEdBQWVqZixPQUFmLENBQXVCLE1BQU1pZSxJQUE3QixJQUFxQyxDQUFDLENBQXRDLElBQTJDLE9BQU9BLElBQWxELEdBQXlELEVBQXpELEdBQThELE1BQU1BLElBQWpILElBQXlINWpCLEdBQS9IO0FBQ0g7O0FBRUQsWUFBSWdpQixNQUFNLENBQUMyRSxJQUFQLENBQVliLFlBQVosRUFBMEI3ZSxNQUExQixHQUFtQyxDQUF2QyxFQUEwQztBQUN0QyxjQUFJeWMsTUFBTSxHQUFHLEtBQUssQ0FBbEI7QUFDQSxjQUFJa0QsV0FBVyxHQUFHLEVBQWxCOztBQUNBLGNBQUkvbEIsR0FBRyxHQUFHLFNBQVNBLEdBQVQsQ0FBYWdKLEdBQWIsRUFBa0I3SyxLQUFsQixFQUF5QjtBQUMvQjtBQUNBQSxpQkFBSyxHQUFHLE9BQU9BLEtBQVAsS0FBaUIsVUFBakIsR0FBOEJBLEtBQUssRUFBbkMsR0FBd0NBLEtBQWhELENBRitCLENBSS9COztBQUNBQSxpQkFBSyxHQUFHQSxLQUFLLEtBQUssSUFBVixHQUFpQixFQUFqQixHQUFzQkEsS0FBOUI7QUFFQTRuQix1QkFBVyxDQUFDbmhCLElBQVosQ0FBaUI4ZCxNQUFNLENBQUNzRCxvQkFBUCxDQUE0QmhkLEdBQTVCLElBQW1DLEdBQW5DLEdBQXlDMFosTUFBTSxDQUFDc0Qsb0JBQVAsQ0FBNEI3bkIsS0FBNUIsQ0FBMUQ7QUFDSCxXQVJEOztBQVVBLGVBQUswa0IsTUFBTCxJQUFlb0MsWUFBZixFQUE2QjtBQUN6QixpQkFBS2YsZ0JBQUwsQ0FBc0JyQixNQUF0QixFQUE4Qm9DLFlBQVksQ0FBQ3BDLE1BQUQsQ0FBMUMsRUFBb0Q3aUIsR0FBcEQ7QUFDSDs7QUFFRGIsYUFBRyxHQUFHQSxHQUFHLEdBQUcsR0FBTixHQUFZNG1CLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQixHQUFqQixDQUFsQjtBQUNIOztBQUVELGVBQU85bUIsR0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUE1SEQsS0EvTmtCLENBQVQsRUFrV1IsQ0FBQztBQUNENkosU0FBRyxFQUFFLGFBREo7QUFFRDdLLFdBQUssRUFBRSxTQUFTK25CLFdBQVQsR0FBdUI7QUFDMUIsZUFBT3hwQixPQUFQO0FBQ0g7QUFFRDs7Ozs7QUFOQyxLQUFELEVBV0Q7QUFDQ3NNLFNBQUcsRUFBRSxTQUROO0FBRUM3SyxXQUFLLEVBQUUsU0FBU2dvQixPQUFULENBQWlCNW9CLElBQWpCLEVBQXVCO0FBQzFCLFlBQUk2b0IsTUFBTSxHQUFHMUQsTUFBTSxDQUFDd0QsV0FBUCxFQUFiO0FBRUFFLGNBQU0sQ0FBQ3ZwQixjQUFQLENBQXNCVSxJQUF0QjtBQUNIO0FBTkYsS0FYQyxFQWtCRDtBQUNDeUwsU0FBRyxFQUFFLDBCQUROO0FBRUM3SyxXQUFLLEVBQUUsU0FBU2tvQix3QkFBVCxDQUFrQ2xvQixLQUFsQyxFQUF5QztBQUM1QyxlQUFPbW9CLGtCQUFrQixDQUFDbm9CLEtBQUQsQ0FBbEIsQ0FBMEJrTSxPQUExQixDQUFrQyxNQUFsQyxFQUEwQyxHQUExQyxFQUErQ0EsT0FBL0MsQ0FBdUQsTUFBdkQsRUFBK0QsR0FBL0QsRUFBb0VBLE9BQXBFLENBQTRFLE1BQTVFLEVBQW9GLEdBQXBGLEVBQXlGQSxPQUF6RixDQUFpRyxNQUFqRyxFQUF5RyxHQUF6RyxFQUE4R0EsT0FBOUcsQ0FBc0gsTUFBdEgsRUFBOEgsR0FBOUgsRUFBbUlBLE9BQW5JLENBQTJJLE1BQTNJLEVBQW1KLEdBQW5KLEVBQXdKQSxPQUF4SixDQUFnSyxNQUFoSyxFQUF3SyxHQUF4SyxFQUE2S0EsT0FBN0ssQ0FBcUwsS0FBckwsRUFBNEwsS0FBNUwsRUFBbU1BLE9BQW5NLENBQTJNLEtBQTNNLEVBQWtOLEtBQWxOLEVBQXlOQSxPQUF6TixDQUFpTyxJQUFqTyxFQUF1TyxLQUF2TyxDQUFQO0FBQ0g7QUFFRDs7Ozs7OztBQU5ELEtBbEJDLEVBK0JEO0FBQ0NyQixTQUFHLEVBQUUscUJBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTaW5CLG1CQUFULENBQTZCam5CLEtBQTdCLEVBQW9DO0FBQ3ZDLGVBQU91a0IsTUFBTSxDQUFDMkQsd0JBQVAsQ0FBZ0Nsb0IsS0FBaEMsRUFBdUNrTSxPQUF2QyxDQUErQyxNQUEvQyxFQUF1RCxHQUF2RCxFQUE0REEsT0FBNUQsQ0FBb0UsTUFBcEUsRUFBNEUsR0FBNUUsRUFBaUZBLE9BQWpGLENBQXlGLE1BQXpGLEVBQWlHLEdBQWpHLEVBQXNHQSxPQUF0RyxDQUE4RyxNQUE5RyxFQUFzSCxHQUF0SCxDQUFQO0FBQ0g7QUFFRDs7Ozs7OztBQU5ELEtBL0JDLEVBNENEO0FBQ0NyQixTQUFHLEVBQUUsc0JBRE47QUFFQzdLLFdBQUssRUFBRSxTQUFTNm5CLG9CQUFULENBQThCN25CLEtBQTlCLEVBQXFDO0FBQ3hDLGVBQU91a0IsTUFBTSxDQUFDMkQsd0JBQVAsQ0FBZ0Nsb0IsS0FBaEMsRUFBdUNrTSxPQUF2QyxDQUErQyxNQUEvQyxFQUF1RCxHQUF2RCxDQUFQO0FBQ0g7QUFKRixLQTVDQyxDQWxXUSxDQUFaOztBQXFaQSxXQUFPcVksTUFBUDtBQUNILEdBMWFZLEVBQWI7QUE0YUE7Ozs7Ozs7Ozs7QUFVQUEsUUFBTSxDQUFDNkQsS0FBUDtBQUVBOzs7Ozs7QUFLQTdELFFBQU0sQ0FBQzhELE9BQVA7QUFFQTs7Ozs7O0FBS0EsTUFBSTlwQixPQUFPLEdBQUcsSUFBSWdtQixNQUFKLEVBQWQ7QUFFSSxTQUFPO0FBQUVBLFVBQU0sRUFBRUEsTUFBVjtBQUFrQmhtQixXQUFPLEVBQUVBO0FBQTNCLEdBQVA7QUFDSCxDQS9lQSxDQUFELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvaW5kZXguanNcIik7XG4iLCIvKipcclxuICogdG9nZ2xlIGFjY29yZGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2KCkge1xyXG4gICBsZXQgYWNjb3JkaW9uX190cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25fX3RyaWdnZXJcIik7XHJcbiAgIGFjY29yZGlvbl9fdHJpZ2dlci5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIGxldCBpY29uID0gYnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19pY29uXCIpO1xyXG4gICAgICAgICBsZXQgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQgIT09IG51bGwgJiYgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgIT09IFwiMHB4XCIpIHtcclxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPT0gXCIwcHhcIikge1xyXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDE4MGRlZylcIjtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBvcGVucyBhY2NvcmRpb25zIOKAkyBhZGRzIGFkZE1heEhlaWdodCBhbmQgcm90YXRlcyBpY29uXHJcbiAqIG5lZWRzIHRvIGJlIGFkZGVkIGFmdGVyIGZvbGRlciBhbmQgcG9zdCBkYXRhIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kQWNjb3JkaW9ucygpIHtcclxuICAgbGV0IGFjY29yZGlvbl9fdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uX190cmlnZ2VyXCIpO1xyXG4gICBhY2NvcmRpb25fX3RyaWdnZXIuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gYnRuLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIGJ0bi5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9faWNvblwiKS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgxODBkZWcpXCI7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgIGFkZEV2KCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50c0NvbnRyb2xsZXIob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHRoaXMuaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5hZGRJbnB1dEV2KCk7XHJcbiAgICAgIHRoaXMucHJldmlld0ltYWdlKCk7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogUkVOREVSIEFMTCBDT01NRU5UU1xyXG4gICAgICAgKi9cclxuICAgICAgdGhpcy5wcmVwYXJlRmV0Y2hHZXRDb21tZW50cygpO1xyXG4gICAgICB0aGlzLmRhdGEgPSBhd2FpdCB0aGlzLmZldGNoRGF0YSgpO1xyXG5cclxuICAgICAgdGhpcy51c2VyID0gb3B0aW9ucy5nZXRVc2VyKCk7XHJcblxyXG4gICAgICB0aGlzLmRhdGEuY29tbWVudF9kYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5yZW5kZXIoY29tbWVudCwgXCJhcHBlbmRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAob3B0aW9ucy5jb21tZW50c0RhdGEpIG9wdGlvbnMuY29tbWVudHNEYXRhKHRoaXMuZGF0YS5jb21tZW50X2RhdGEpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRJbnB1dEV2ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihvcHRpb25zLmlucHV0X2NvbW1lbnQpO1xyXG4gICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDUkVBVEUgQU5EIFJFTkRFUiBTSU5HTEUgQ09NTUVOVFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlRmV0Y2hQb3N0Q29tbWVudChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmRhdGEsIFwicHJlcGVuZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dF9fY29tbWVudC1jb3VudFwiKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7dGhpcy5kYXRhLmNvdW50fSlgO1xyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ0xFQVIgSU1BR0VcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlbGYuZmlsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wRmlsZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnByZXBhcmVGZXRjaEdldENvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBvc3RfaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRoaXMuY29udGFpbmVyLCBcImJveF9fbWFpbi1wb3N0XCIpLmdldEF0dHJpYnV0ZShcInBvc3RcIik7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkuYXBwZW5kKFwicG9zdF9pZFwiLCB0aGlzLnBvc3RfaWQpO1xyXG4gICAgICB0aGlzLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJnZXRfY29tbWVudHNcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnByZXBhcmVGZXRjaFBvc3RDb21tZW50ID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbW1lbnRfdGV4dCA9IHRhcmdldC52YWx1ZTtcclxuICAgICAgdGhpcy5wb3N0X2lkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0YXJnZXQsIFwiYm94X19tYWluLXBvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJjb21tZW50X3RleHRcIiwgdGhpcy5jb21tZW50X3RleHQpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkuYXBwZW5kKFwicG9zdF9pZFwiLCB0aGlzLnBvc3RfaWQpO1xyXG4gICAgICBpZiAodGhpcy5maWxlKSB0aGlzLmZldGNoX2JvZHkuYXBwZW5kKFwiaW1hZ2VcIiwgdGhpcy5maWxlKTtcclxuICAgICAgdGhpcy51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwicG9zdF9jb21tZW50XCIpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5mZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb21pc2UgPSBmZXRjaCh0aGlzLnVybCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiB0aGlzLmZldGNoX2JvZHksXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnJlbmRlciA9IChjb21tZW50LCBtZXRob2QpID0+IHtcclxuICAgICAgdGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGhpcy5jb21tZW50LmNsYXNzTGlzdC5hZGQoXCJib3hfX2NvbW1lbnRcIik7XHJcbiAgICAgIHRoaXMuY29tbWVudC5zZXRBdHRyaWJ1dGUoXCJjb21tZW50XCIsIGNvbW1lbnQuaWQpO1xyXG4gICAgICB0aGlzLmh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19jb21tZW50XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X3Byb2ZpbGUtaW1nXCI+XHJcbiAgICAgICAgIDxpbWcgc3JjPVwiJHtjb21tZW50LmNvbW1lbnRfYXV0aG9yLmF2YXRhcn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgY2xhc3M9XCJpbWdfY29tbWVudC1wcm9maWxlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2JvZHlcIj5cclxuICAgICAgICAgPGEgY2xhc3M9XCJjb21tZW50X19hdXRob3JcIiBocmVmPVwiJHtSb3V0aW5nLmdlbmVyYXRlKFwicHJvZmlsZV9wYWdlXCIsIHtcclxuICAgICAgICAgICAgcHJvZmlsZTogY29tbWVudC5jb21tZW50X2F1dGhvci5pZCxcclxuICAgICAgICAgfSl9XCI+JHtjb21tZW50LmNvbW1lbnRfYXV0aG9yLmZpcnN0bmFtZX08L2E+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X190ZXh0XCI+JHtjb21tZW50LmJvZHl9PC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9faW1nX2F0dGFjaGVkXCI+IFxyXG4gICAgICAgICAgICA8aW1nICR7Y29tbWVudC5pbWdfYXR0YWNoZWQgPyBcInNyYz1cIiArIGNvbW1lbnQuaW1nX2F0dGFjaGVkIDogXCJub25lXCJ9IGNsYXNzPVwiaW1nX19pbWctYXR0YWNoZWRcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2Zvb3RlclwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fcm93XCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy11cCB0b2dnbGVfX2xpa2VzICR7Y29tbWVudC5zdGF0ZSA9PSBcImxpa2VkXCIgPyBcInN0YXRlX19hY3RpdmVcIiA6IFwiXCJ9ICR7XHJcbiAgICAgICAgIGNvbW1lbnQuc3RhdGUgPT0gXCJkaXNsaWtlZFwiID8gXCJzdGF0ZV9fZGlzYWJsZWRcIiA6IFwiXCJcclxuICAgICAgfVwiIHN0YXRlPVwiJHtjb21tZW50LnN0YXRlID8gY29tbWVudC5zdGF0ZSA6IFwibmV1dHJhbFwifVwiPjwvaT5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmlnZ2VyX19tb2RhbCBjb3VudGVyX19saWtlc1wiPigke2NvbW1lbnQubGlrZXN9KTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy1kb3duIHRvZ2dsZV9fbGlrZXMgJHtjb21tZW50LnN0YXRlID09IFwiZGlzbGlrZWRcIiA/IFwic3RhdGVfX2FjdGl2ZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgY29tbWVudC5zdGF0ZSA9PSBcImxpa2VkXCIgPyBcInN0YXRlX19kaXNhYmxlZFwiIDogXCJcIlxyXG4gICAgICB9XCIgc3RhdGU9XCIke2NvbW1lbnQuc3RhdGUgPyBjb21tZW50LnN0YXRlIDogXCJuZXV0cmFsXCJ9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyaWdnZXJfX21vZGFsIGNvdW50ZXJfX2Rpc2xpa2VzXCI+KCR7Y29tbWVudC5kaXNsaWtlc30pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19yb3dcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19jcmVhdGVkQXRcIj4ke2hlbHBlcnMudGltZUFnbyhjb21tZW50LmNyZWF0ZWRBdCl9PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fbWVudVwiPlxyXG4gICAgICAgICA8ZGl2IGlkPVwibWVudV9fZHJvcGRvd24tJHtjb21tZW50LmlkfVwiIGNsYXNzPVwiZHJvcGRvd25fX2JveFwiPjwvZGl2PlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy1oIGRyb3Bkb3duX190cmlnZ2VyIGljb25fX2NvbW1lbnQtJHtjb21tZW50LmlkfVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICAgIHRoaXMuY29tbWVudC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICAgIGlmICghY29tbWVudC5pbWdfYXR0YWNoZWQpIHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX2ltZ19hdHRhY2hlZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHRoaXMuY29tbWVudHNfY29udGFpbmVyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jb21tZW50c19fY29tbWVudHNcIik7XHJcblxyXG4gICAgICBpZiAobWV0aG9kID09IFwiYXBwZW5kXCIpIHtcclxuICAgICAgICAgdGhpcy5jb21tZW50c19jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb21tZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5jb21tZW50c19jb250YWluZXIucHJlcGVuZCh0aGlzLmNvbW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWRkTGlrZXNFdigpO1xyXG4gICAgICBpZiAob3B0aW9ucy5kcm9wZG93bikgb3B0aW9ucy5kcm9wZG93bihjb21tZW50KTtcclxuICAgICAgdGhpcy5hZGRSZXNwb25zZUxpc3RFdigpO1xyXG5cclxuICAgICAgaWYgKGNvbW1lbnQuY29tbWVudGVkX3Bvc3QuYXV0aG9yLmlkICE9IHRoaXMudXNlci5pZCAmJiBjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkICE9IHRoaXMudXNlci5pZCkge1xyXG4gICAgICAgICB0aGlzLmNvbW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21tZW50X19tZW51XCIpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmFkZExpa2VzRXYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9nZ2xlcnMgPSB0aGlzLmNvbW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2dnbGVfX2xpa2VzXCIpO1xyXG4gICAgICB0aGlzLnRvZ2dsZXJzLmZvckVhY2goKHRvZ2dsZXIpID0+IHtcclxuICAgICAgICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25jbGlja0xpa2VzKSBvcHRpb25zLm9uY2xpY2tMaWtlcyhlLnRhcmdldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkUmVzcG9uc2VMaXN0RXYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudHJpZ2dlcnMgPSB0aGlzLmNvbW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmlnZ2VyX19tb2RhbFwiKTtcclxuICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uY2xpY2tDb3VudCkgb3B0aW9ucy5vbmNsaWNrQ291bnQoZS50YXJnZXQpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnByZXZpZXdJbWFnZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5pbnBGaWxlID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNjb21tZW50LWlucHV0X19jb21tZW50LWltYWdlXCIpO1xyXG4gICAgICB0aGlzLnByZXZpZXdJbWFnZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudC1pbWFnZS1wcmV2aWV3X19pbWFnZVwiKTtcclxuXHJcbiAgICAgIHRoaXMuYnRuQ2xlYXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnRfX2ltYWdlLWNsZWFyXCIpO1xyXG4gICAgICB0aGlzLnByZXZpZXdDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnRfX2ltYWdlLXByZXZpZXdcIik7XHJcblxyXG4gICAgICBzZWxmLmlucEZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHNlbGYuZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbiAgICAgICAgIGlmIChzZWxmLmZpbGUpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGYuZmlsZSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi5idG5DbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICBzZWxmLmlucEZpbGUudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLmZpbGUgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21tZW50KHRhcmdldCkge1xyXG4gICB0aGlzLnByZXBhcmVGZXRjaEdldENvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0YXJnZXQsIFwiYm94X19jb21tZW50XCIpLmdldEF0dHJpYnV0ZShcImNvbW1lbnRcIik7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkuYXBwZW5kKFwiaWRcIiwgdGhpcy5pZCk7XHJcbiAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImdldF9jb21tZW50XCIpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5mZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvbWlzZSA9IGZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHRoaXMuZmV0Y2hfYm9keSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByZXBhcmVGZXRjaEdldENvbW1lbnRzKCk7XHJcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2hEYXRhKCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQoKTtcclxuXHJcbiAgIHJldHVybiB0aGlzLnByb21pc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZW5kZXJDb21tZW50KG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLnJlbmRlckNvbW1lbnQgPSAoY29tbWVudCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzZWxmLmNvbW1lbnQuY2xhc3NMaXN0LmFkZChcImJveF9fY29tbWVudFwiKTtcclxuICAgICAgc2VsZi5jb21tZW50LnNldEF0dHJpYnV0ZShcImNvbW1lbnRcIiwgY29tbWVudC5pZCk7XHJcbiAgICAgIHNlbGYuaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlfX2NvbW1lbnRcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3Byb2ZpbGUtaW1nXCI+XHJcbiAgICAgICAgIDxpbWcgc3JjPVwiJHtjb21tZW50LmNvbW1lbnRfYXV0aG9yLmF2YXRhcn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgY2xhc3M9XCJpbWdfX2NvbW1lbnQtcHJvZmlsZVwiPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19ib2R5XCI+XHJcbiAgICAgICAgIDxhIGNsYXNzPVwiY29tbWVudF9fYXV0aG9yXCIgaHJlZj1cIlwiPiR7Y29tbWVudC5jb21tZW50X2F1dGhvci5maXJzdG5hbWV9PC9hPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fdGV4dFwiPiR7Y29tbWVudC5ib2R5fTwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9faW1nX2F0dGFjaGVkXCI+IFxyXG4gICAgICAgICAgICA8aW1nICR7Y29tbWVudC5pbWdfYXR0YWNoZWQgPyBcInNyYz1cIiArIGNvbW1lbnQuaW1nX2F0dGFjaGVkIDogXCJub25lXCJ9IGNsYXNzPVwiaW1nX19pbWctYXR0YWNoZWRcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2Zvb3RlclwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fcm93XCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy11cCB0b2dnbGVfX2xpa2VzICR7Y29tbWVudC5zdGF0ZSA9PSBcImxpa2VkXCIgPyBcInN0YXRlX19hY3RpdmVcIiA6IFwiXCJ9ICR7XHJcbiAgICAgICAgIGNvbW1lbnQuc3RhdGUgPT0gXCJkaXNsaWtlZFwiID8gXCJzdGF0ZV9fZGlzYWJsZWRcIiA6IFwiXCJcclxuICAgICAgfVwiIHN0YXRlPVwiJHtjb21tZW50LnN0YXRlID8gY29tbWVudC5zdGF0ZSA6IFwibmV1dHJhbFwifVwiPjwvaT5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmlnZ2VyX19tb2RhbCBjb3VudGVyX19saWtlc1wiPigke2NvbW1lbnQubGlrZXN9KTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy1kb3duIHRvZ2dsZV9fbGlrZXMgJHtjb21tZW50LnN0YXRlID09IFwiZGlzbGlrZWRcIiA/IFwic3RhdGVfX2FjdGl2ZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgY29tbWVudC5zdGF0ZSA9PSBcImxpa2VkXCIgPyBcInN0YXRlX19kaXNhYmxlZFwiIDogXCJcIlxyXG4gICAgICB9XCIgc3RhdGU9XCIke2NvbW1lbnQuc3RhdGUgPyBjb21tZW50LnN0YXRlIDogXCJuZXV0cmFsXCJ9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyaWdnZXJfX21vZGFsIGNvdW50ZXJfX2Rpc2xpa2VzXCI+KCR7Y29tbWVudC5kaXNsaWtlc30pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19yb3dcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19jcmVhdGVkQXRcIj4ke2hlbHBlcnMudGltZUFnbyhjb21tZW50LmNyZWF0ZWRBdCl9PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fbWVudVwiPlxyXG4gICAgICAgICA8ZGl2IGlkPVwibWVudV9fZHJvcGRvd24tJHtjb21tZW50LmlkfVwiIGNsYXNzPVwiZHJvcGRvd25fX2JveFwiPjwvZGl2PlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy1oIGljb25fX2NvbW1lbnQtJHtjb21tZW50LmlkfVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICAgIHNlbGYuY29tbWVudC5pbm5lckhUTUwgPSBzZWxmLmh0bWw7XHJcbiAgICAgIGlmICghY29tbWVudC5pbWdfYXR0YWNoZWQpIHNlbGYuY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX2ltZ19hdHRhY2hlZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICBzZWxmLmNvbW1lbnRzLnByZXBlbmQoc2VsZi5jb21tZW50KTtcclxuICAgICAgc2VsZi5hZGRMaWtlc0V2KCk7XHJcbiAgICAgIGlmIChvcHRpb25zLmRyb3Bkb3duKSBvcHRpb25zLmRyb3Bkb3duKGNvbW1lbnQpO1xyXG4gICAgICBzZWxmLmFkZFJlc3BvbnNlTGlzdEV2KCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmFkZExpa2VzRXYgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYudG9nZ2xlcnMgPSBzZWxmLmNvbW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2dnbGVfX2xpa2VzXCIpO1xyXG4gICAgICBzZWxmLnRvZ2dsZXJzLmZvckVhY2goKHRvZ2dsZXIpID0+IHtcclxuICAgICAgICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25jbGlja0xpa2VzKSBvcHRpb25zLm9uY2xpY2tMaWtlcyhlLnRhcmdldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkUmVzcG9uc2VMaXN0RXYgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYudHJpZ2dlcnMgPSBzZWxmLmNvbW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmlnZ2VyX19tb2RhbFwiKTtcclxuICAgICAgc2VsZi50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uY2xpY2tDb3VudCkgb3B0aW9ucy5vbmNsaWNrQ291bnQoZS50YXJnZXQpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRzX19jb21tZW50c1wiKTtcclxuICAgICAgc2VsZi5jb21tZW50cy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBzZWxmLmNvbW1lbnRfZGF0YSA9IG9wdGlvbnMucmVzcG9uc2UuY29tbWVudF9kYXRhO1xyXG5cclxuICAgICAgc2VsZi5jb21tZW50X2RhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICBzZWxmLnJlbmRlckNvbW1lbnQoY29tbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0KCk7XHJcbiAgIHJldHVybiBzZWxmO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlQ29tbWVudChyZXNwb25zZSkge1xyXG4gICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY29tbWVudCA9IFwiJHtyZXNwb25zZS5pZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRWRpdENvbW1lbnQocmVzcG9uc2UpIHtcclxuICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbY29tbWVudCA9IFwiJHtyZXNwb25zZS5jb21tZW50X2RhdGEuaWR9XCJdYCk7XHJcblxyXG4gICAgICBsZXQgY29tbWVudF90ZXh0ID0gY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX3RleHRcIik7XHJcbiAgICAgIGNvbW1lbnRfdGV4dC5pbm5lckhUTUwgPSByZXNwb25zZS5jb21tZW50X2RhdGEuYm9keTtcclxuXHJcbiAgICAgIGxldCBpbWdfY29udGFpbmVyID0gY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX2ltZ19hdHRhY2hlZFwiKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLmNvbW1lbnRfZGF0YS5pbWdfYXR0YWNoZWQpIHtcclxuICAgICAgICAgaW1nX2NvbnRhaW5lci5zdHlsZSA9IG51bGw7XHJcbiAgICAgICAgIGxldCBpbWdfYXR0YWNoZWQgPSBjb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nX19pbWctYXR0YWNoZWRcIik7XHJcbiAgICAgICAgIGltZ19hdHRhY2hlZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmVzcG9uc2UuY29tbWVudF9kYXRhLmltZ19hdHRhY2hlZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGltZ19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSWNvbihvcHRpb25zKSB7XHJcbiAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSBzZWxmLmh0bWwoKTtcclxuICAgICAgc2VsZi5wYW5lbCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX3BhbmVsXCIpO1xyXG4gICAgICBzZWxmLmNhcmQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19jYXJkXCIpO1xyXG4gICAgICBzZWxmLml0ZW1zID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pdGVtc1wiKTtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShzZWxmLmNvbnRhaW5lciwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgc2VsZi5wYW5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCIwXCI7XHJcblxyXG4gICAgICBsZXQgaHRtbCA9IGBgO1xyXG4gICAgICBvcHRpb25zLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICBsZXQgaWNvbl9jbGFzcyA9IGl0ZW1bMV0sXHJcbiAgICAgICAgICAgIGJ0bl90ZXh0ID0gaXRlbVswXSxcclxuICAgICAgICAgICAgYnRuX2N1c3RvbV9jbGFzcyA9IGl0ZW1bMl07XHJcblxyXG4gICAgICAgICBodG1sICs9IHNlbGYuaHRtbDIoYnRuX2N1c3RvbV9jbGFzcywgaWNvbl9jbGFzcywgYnRuX3RleHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2VsZi5pdGVtcy5pbm5lckhUTUwgPSBodG1sO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgc2VsZi50cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRyaWdnZXIpO1xyXG4gICAgICBzZWxmLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgIGlmIChzZWxmLm92ZXJsYXkpIHtcclxuICAgICAgICAgICAgc2VsZi5vdmVybGF5LnN0eWxlID0gbnVsbDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaWNvbl9fYWN0aXZlXCIpO1xyXG4gICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICBpZiAoc2VsZi5pc1Zpc2libGUpIHNlbGYuaGlkZSgpO1xyXG4gICAgICAgICBlbHNlIHNlbGYuc2hvdygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBidXR0b25zID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtc19faXRlbVwiKTtcclxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmNsaWNrZWQoZS50YXJnZXQpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmFkZERyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIXdpbmRvdy5kcm9wZG93bnMpIHdpbmRvdy5kcm9wZG93bnMgPSB7fTtcclxuICAgICAgd2luZG93LmRyb3Bkb3duc1tvcHRpb25zLmlkXSA9IHNlbGY7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmFkZEdldHRlciA9ICgpID0+IHtcclxuICAgICAgd2luZG93LmdldGRkID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgbGV0IGlkID0gZWxlbS5jbG9zZXN0KFwiLmRyb3Bkb3duX19wYW5lbFwiKS5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgICAgICByZXR1cm4gd2luZG93LmRyb3Bkb3duc1tpZF07XHJcbiAgICAgIH07XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnNob3cgPSAoKSA9PiB7XHJcbiAgICAgIGZvciAodmFyIGRkIGluIHdpbmRvdy5kcm9wZG93bnMpIHdpbmRvdy5kcm9wZG93bnNbZGRdLmhpZGUoKTtcclxuXHJcbiAgICAgIHNlbGYuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgc2VsZi5jYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDBweCwwcHgpXCI7XHJcbiAgICAgIGhlbHBlcnMuZmFkZUluKHNlbGYucGFuZWwpO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXRlbV9vdmVybGF5KSB7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLml0ZW1fb3ZlcmxheV9iZztcclxuXHJcbiAgICAgICAgIGlmICghd2luZG93Lm92ZXJsYXlzKSB3aW5kb3cub3ZlcmxheXMgPSBbXTtcclxuICAgICAgICAgaWYgKCF3aW5kb3cub3ZlcmxheXMuaW5jbHVkZXMoc2VsZi5pdGVtX292ZXJsYXkpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vdmVybGF5cy5wdXNoKHNlbGYuaXRlbV9vdmVybGF5KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghc2VsZi5pc1Zpc2libGUpIHJldHVybjtcclxuICAgICAgc2VsZi50cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJpY29uX19hY3RpdmVcIik7XHJcblxyXG4gICAgICBzZWxmLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICBzZWxmLmNhcmQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMHB4LC0yNTVweClcIjtcclxuICAgICAgaGVscGVycy5mYWRlT3V0KHNlbGYucGFuZWwpO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaXRlbV9vdmVybGF5KSBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGlmICghd2luZG93Lm92ZXJsYXlzKSB3aW5kb3cub3ZlcmxheXMgPSBbXTtcclxuICAgICAgaWYgKHdpbmRvdy5vdmVybGF5cy5pbmNsdWRlcyhzZWxmLml0ZW1fb3ZlcmxheSkpIHtcclxuICAgICAgICAgbGV0IGluZGV4ID0gd2luZG93Lm92ZXJsYXlzLmluZGV4T2Yoc2VsZi5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vdmVybGF5cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuY2xpY2tlZCA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgc2VsZi5oaWRlKCk7XHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKHRhcmdldCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmh0bWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSdkcm9wZG93bl9fcGFuZWwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25fX2NhcmRcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2l0ZW1zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5odG1sMiA9IChidG5fY3VzdG9tX2NsYXNzLCBpY29uX2NsYXNzLCBidG5fdGV4dCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW1zX19pdGVtICR7YnRuX2N1c3RvbV9jbGFzc31cIj5cclxuICAgICAgICAgPGkgY2xhc3M9XCIke2ljb25fY2xhc3N9XCI+PC9pPlxyXG4gICAgICAgICA8c3Bhbj4ke2J0bl90ZXh0fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0ID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLnJlbmRlcigpO1xyXG4gICAgICBzZWxmLmFkZERyb3Bkb3duKCk7XHJcbiAgICAgIHNlbGYuYWRkR2V0dGVyKCk7XHJcbiAgICAgIHNlbGYuYWRkRXYoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCgpO1xyXG4gICByZXR1cm4gc2VsZjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duKG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLmN1c3RvbVN0eWxlID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLndpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgICBpZiAob3B0aW9ucy5zdHlsZSkge1xyXG4gICAgICAgICBzZWxmLndpZHRoID0gb3B0aW9ucy5zdHlsZS53aWR0aCA/IG9wdGlvbnMuc3R5bGUud2lkdGggOiBcIjI1MHB4XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHNlbGYud2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xyXG5cclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9J2Ryb3Bkb3duLXNpbXBsZSc+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdkcm9wZG93bl9fdmFsdWUnPjwvZGl2PlxyXG5cdFx0ICAgICAgICAgPGRpdiBjbGFzcz0nZHJvcGRvd25fX2Fycm93Jz7ilr48L2Rpdj5cclxuXHRcdCAgICAgICAgIDxkaXYgY2xhc3M9J2Ryb3Bkb3duX19wYW5lbCc+XHJcblx0XHQgICAgICAgICAgXHQ8ZGl2IGNsYXNzPSdkcm9wZG93bl9faXRlbXMnPjwvZGl2PlxyXG5cdFx0ICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgc2VsZi5kcm9wZG93biA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tc2ltcGxlXCIpO1xyXG4gICAgICBzZWxmLmRyb3Bkb3duLnN0eWxlLndpZHRoID0gc2VsZi53aWR0aDtcclxuXHJcbiAgICAgIHNlbGYuaXRlbXMgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19pdGVtc1wiKTtcclxuICAgICAgc2VsZi5pdGVtcy5zdHlsZS53aWR0aCA9IHNlbGYud2lkdGg7XHJcblxyXG4gICAgICBzZWxmLnZhbHVlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fdmFsdWVcIik7XHJcbiAgICAgIHNlbGYuZGVmYXVsdF9hdHRyID0gb3B0aW9ucy5kZWZhdWx0X2F0dHIgPyBvcHRpb25zLmRlZmF1bHRfYXR0ciA6IG51bGw7XHJcbiAgICAgIGlmIChzZWxmLmRlZmF1bHRfYXR0cikgc2VsZi52YWx1ZS5zZXRBdHRyaWJ1dGUob3B0aW9ucy5kZWZhdWx0X2F0dHJbMF0sIG9wdGlvbnMuZGVmYXVsdF9hdHRyWzFdKTtcclxuXHJcbiAgICAgIHNlbGYucGFuZWwgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19wYW5lbFwiKTtcclxuICAgICAgc2VsZi5hcnJvdyA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2Fycm93XCIpO1xyXG4gICAgICBzZWxmLnZhbHVlLmlubmVySFRNTCA9IG9wdGlvbnMucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgICBvcHRpb25zLmRhdGEuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICBsZXQgZGRfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgIGRkX2l0ZW0uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duX19pdGVtXCIpO1xyXG4gICAgICAgICBsZXQgZGRfaXRlbV9hdHRyID0gb3B0aW9ucy5hdHRyID8gb3B0aW9ucy5hdHRyIDogbnVsbDtcclxuICAgICAgICAgaWYgKGRkX2l0ZW1fYXR0ciAmJiBlbGVtWzFdKSBkZF9pdGVtLnNldEF0dHJpYnV0ZShvcHRpb25zLmF0dHIsIGVsZW1bMV0pO1xyXG4gICAgICAgICBkZF9pdGVtLnNldEF0dHJpYnV0ZShcIm9ubW91c2Vkb3duXCIsIFwidmFyIHNlbGY9Z2V0ZGR2KHRoaXMpO3NlbGYuY2xpY2tlZCh0aGlzKVwiKTtcclxuXHJcbiAgICAgICAgIGRkX2l0ZW0uaW5uZXJIVE1MID0gZWxlbVswXTtcclxuICAgICAgICAgc2VsZi5pdGVtcy5wcmVwZW5kKGRkX2l0ZW0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmJvdHRvbV9pdGVtKSB7XHJcbiAgICAgICAgIGxldCBkZF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgZGRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25fX2l0ZW1cIiwgXCJpdGVtX19ib3R0b21cIik7XHJcbiAgICAgICAgIGRkX2l0ZW0uc2V0QXR0cmlidXRlKFwib25tb3VzZWRvd25cIiwgXCJ2YXIgc2VsZj1nZXRkZHYodGhpcyk7c2VsZi5jbGlja2VkKHRoaXMpXCIpO1xyXG5cclxuICAgICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj4ke29wdGlvbnMuYm90dG9tX2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICBkZF9pdGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgIHNlbGYuaXRlbXMuYXBwZW5kQ2hpbGQoZGRfaXRlbSk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgIGlmICghd2luZG93LmRyb3Bkb3ducykgd2luZG93LmRyb3Bkb3ducyA9IHt9O1xyXG4gICAgICB3aW5kb3cuZHJvcGRvd25zW29wdGlvbnMuaWRdID0gc2VsZjtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkR2V0dGVyID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZ2V0ZGR2ID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgbGV0IGlkID0gZWxlbS5jbG9zZXN0KFwiLmRyb3Bkb3duLXNpbXBsZVwiKS5wYXJlbnRFbGVtZW50LmlkO1xyXG4gICAgICAgICByZXR1cm4gd2luZG93LmRyb3Bkb3duc1tpZF07XHJcbiAgICAgIH07XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmNsaWNrZWQgPSAoZWxlbSkgPT4ge1xyXG4gICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGVtX19ib3R0b21cIikpIHtcclxuICAgICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoZWxlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGxldCBuZXd2YWwgPSBlbGVtLmlubmVySFRNTDtcclxuICAgICAgICAgc2VsZi52YWx1ZS5pbm5lckhUTUwgPSBuZXd2YWw7XHJcbiAgICAgICAgIHNlbGYudmFsdWUuc2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0ciwgZWxlbS5nZXRBdHRyaWJ1dGUob3B0aW9ucy5hdHRyKSk7XHJcbiAgICAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGVsZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmhpZGUoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYudmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgaWYgKHNlbGYuaXNWaXNpYmxlKSBzZWxmLmhpZGUoKTtcclxuICAgICAgICAgZWxzZSBzZWxmLnNob3coKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgIGlmIChzZWxmLmlzVmlzaWJsZSkgc2VsZi5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5zaG93ID0gKCkgPT4ge1xyXG4gICAgICBmb3IgKHZhciBkZCBpbiB3aW5kb3cuZHJvcGRvd25zKSB3aW5kb3cuZHJvcGRvd25zW2RkXS5oaWRlKCk7XHJcblxyXG4gICAgICBzZWxmLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHNlbGYuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMHB4LDBweClcIjtcclxuICAgICAgc2VsZi5hcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgxODBkZWcpXCI7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghc2VsZi5pc1Zpc2libGUpIHJldHVybjtcclxuXHJcbiAgICAgIHNlbGYuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHNlbGYuaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMHB4LC0yNTVweClcIjtcclxuICAgICAgc2VsZi5hcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0ID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmN1c3RvbVN0eWxlKCk7XHJcbiAgICAgIHNlbGYucmVuZGVyKCk7XHJcbiAgICAgIHNlbGYuYWRkRHJvcGRvd24oKTtcclxuICAgICAgc2VsZi5hZGRHZXR0ZXIoKTtcclxuICAgICAgc2VsZi5hZGRFdigpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0KCk7XHJcbiAgIHJldHVybiBzZWxmO1xyXG59XHJcblxyXG5kb2N1bWVudC5vbm1vdXNlZG93biA9IGF1dG9jbG9zZTtcclxuZnVuY3Rpb24gYXV0b2Nsb3NlKGUpIHtcclxuICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19wYW5lbFwiKSkgcmV0dXJuO1xyXG4gICBpZiAoIWhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUoZS50YXJnZXQsIFwiZHJvcGRvd25fX3BhbmVsXCIpKSByZXR1cm47XHJcbiAgIGxldCBlbGVtID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShlLnRhcmdldCwgXCJkcm9wZG93bl9fcGFuZWxcIikucGFyZW50RWxlbWVudDtcclxuICAgaWYgKGVsZW0uY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duX190cmlnZ2VyXCIpKSByZXR1cm47XHJcbiAgIC8vIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bl9fdHJpZ2dlclwiKSkgcmV0dXJuO1xyXG4gICBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgZGQgaW4gd2luZG93LmRyb3Bkb3ducykgd2luZG93LmRyb3Bkb3duc1tkZF0uaGlkZShkZCk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudHNMaXN0KG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICB0aGlzLnJlbmRlck1vZGFsQm9keSA9ICgpID0+IHtcclxuICAgICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbF9fd2luZG93ICR7dGhpcy5zdHlsZV9jbGFzc30nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9fbW9kYWwtaXRlbVwiIGlkPVwiJHtvcHRpb25zLm1vZGFsX292ZXJsYXl9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHRfX21vZGFsLWhlYWRlciB0ZXh0X19jb21tZW50LWNvdW50XCI+Q29tbWVudHMgKCR7dGhpcy5yZXNwb25zZS5jb21tZW50X2RhdGEubGVuZ3RofSk8L2g1PlxyXG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBidG5fX21vZGFsLWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c19fYXV0aG9yLWlucHV0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c19fY29tbWVudHNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgIGA7XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgdGhpcy5ib3ggPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX193aW5kb3dcIik7XHJcbiAgICAgIHRoaXMubGlzdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2JvZHlcIik7XHJcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRzX19hdXRob3ItaW5wdXRcIik7XHJcbiAgICAgIHRoaXMuY29tbWVudHMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRzX19jb21tZW50c1wiKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlID0gbnVsbDtcclxuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG4gICAgICB0aGlzLnVzZXIgPSBvcHRpb25zLmdldFVzZXIoKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNQUlOIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTU9EQUwgT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5X2JnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSVRFTSBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5pdGVtX292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheSA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuaXRlbV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuaXRlbV9vdmVybGF5X2JnO1xyXG4gICAgICAgICAvLyB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjk5OVwiO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnByZXBhcmVGZXRjaEdldENvbW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBvc3RfaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBcImJveF9fcG9zdFwiKS5nZXRBdHRyaWJ1dGUoXCJwb3N0XCIpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5LmFwcGVuZChcInBvc3RfaWRcIiwgdGhpcy5wb3N0X2lkKTtcclxuICAgICAgdGhpcy51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZ2V0X2NvbW1lbnRzXCIpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5wcmVwYXJlRmV0Y2hQb3N0Q29tbWVudCA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgdGhpcy5jb21tZW50X3RleHQgPSB0YXJnZXQudmFsdWU7XHJcbiAgICAgIHRoaXMucG9zdF9pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIFwiYm94X19wb3N0XCIpLmdldEF0dHJpYnV0ZShcInBvc3RcIik7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkuYXBwZW5kKFwiY29tbWVudF90ZXh0XCIsIHRoaXMuY29tbWVudF90ZXh0KTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5LmFwcGVuZChcInBvc3RfaWRcIiwgdGhpcy5wb3N0X2lkKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpbGUpIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJpbWFnZVwiLCB0aGlzLmZpbGUpO1xyXG4gICAgICB0aGlzLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJwb3N0X2NvbW1lbnRcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvbWlzZSA9IGZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHRoaXMuZmV0Y2hfYm9keSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVuZGVyTW9kYWxJdGVtID0gKGNvbW1lbnQsIG1ldGhvZCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aGlzLmNvbW1lbnQuY2xhc3NMaXN0LmFkZChcImJveF9fY29tbWVudFwiKTtcclxuICAgICAgdGhpcy5jb21tZW50LnNldEF0dHJpYnV0ZShcImNvbW1lbnRcIiwgY29tbWVudC5pZCk7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlfX2NvbW1lbnRcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3Byb2ZpbGUtaW1nXCI+XHJcbiAgICAgICAgIDxpbWcgc3JjPVwiJHtjb21tZW50LmNvbW1lbnRfYXV0aG9yLmF2YXRhcn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgY2xhc3M9XCJpbWdfX2NvbW1lbnQtcHJvZmlsZVwiPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19ib2R5XCI+XHJcbiAgICAgICAgIDxhIGNsYXNzPVwiY29tbWVudF9fYXV0aG9yXCIgaHJlZj1cIiR7Um91dGluZy5nZW5lcmF0ZShcInByb2ZpbGVfcGFnZVwiLCB7XHJcbiAgICAgICAgICAgIHByb2ZpbGU6IGNvbW1lbnQuY29tbWVudF9hdXRob3IuaWQsXHJcbiAgICAgICAgIH0pfVwiPiR7Y29tbWVudC5jb21tZW50X2F1dGhvci5maXJzdG5hbWV9PC9hPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fdGV4dFwiPiR7Y29tbWVudC5ib2R5fTwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9faW1nX2F0dGFjaGVkXCI+IFxyXG4gICAgICAgICAgICA8aW1nICR7Y29tbWVudC5pbWdfYXR0YWNoZWQgPyBcInNyYz1cIiArIGNvbW1lbnQuaW1nX2F0dGFjaGVkIDogXCJub25lXCJ9IGNsYXNzPVwiaW1nX19pbWctYXR0YWNoZWRcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2Zvb3RlclwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fcm93XCI+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy11cCB0b2dnbGVfX2xpa2VzICR7Y29tbWVudC5zdGF0ZSA9PSBcImxpa2VkXCIgPyBcInN0YXRlX19hY3RpdmVcIiA6IFwiXCJ9ICR7XHJcbiAgICAgICAgIGNvbW1lbnQuc3RhdGUgPT0gXCJkaXNsaWtlZFwiID8gXCJzdGF0ZV9fZGlzYWJsZWRcIiA6IFwiXCJcclxuICAgICAgfVwiIHN0YXRlPVwiJHtjb21tZW50LnN0YXRlID8gY29tbWVudC5zdGF0ZSA6IFwibmV1dHJhbFwifVwiPjwvaT5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmlnZ2VyX19tb2RhbCBjb3VudGVyX19saWtlc1wiPigke2NvbW1lbnQubGlrZXN9KTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy1kb3duIHRvZ2dsZV9fbGlrZXMgJHtjb21tZW50LnN0YXRlID09IFwiZGlzbGlrZWRcIiA/IFwic3RhdGVfX2FjdGl2ZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgY29tbWVudC5zdGF0ZSA9PSBcImxpa2VkXCIgPyBcInN0YXRlX19kaXNhYmxlZFwiIDogXCJcIlxyXG4gICAgICB9XCIgc3RhdGU9XCIke2NvbW1lbnQuc3RhdGUgPyBjb21tZW50LnN0YXRlIDogXCJuZXV0cmFsXCJ9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyaWdnZXJfX21vZGFsIGNvdW50ZXJfX2Rpc2xpa2VzXCI+KCR7Y29tbWVudC5kaXNsaWtlc30pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19yb3dcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19jcmVhdGVkQXRcIj4ke2hlbHBlcnMudGltZUFnbyhjb21tZW50LmNyZWF0ZWRBdCl9PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fbWVudVwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25fX2JveFwiIGlkPVwiJHtvcHRpb25zLmRyb3Bkb3duX2NvbnRhaW5lcn0tJHtjb21tZW50LmlkfVwiPjwvZGl2PlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy1oIGRyb3Bkb3duX190cmlnZ2VyXCIgaWQ9XCIke29wdGlvbnMuZHJvcGRvd25fdHJpZ2dlcn0tJHtjb21tZW50LmlkfVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICAgIHRoaXMuY29tbWVudC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICAgIGlmICghY29tbWVudC5pbWdfYXR0YWNoZWQpIHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX2ltZ19hdHRhY2hlZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICB0aGlzLmNvbW1lbnRzLmFwcGVuZENoaWxkKHRoaXMuY29tbWVudCk7XHJcblxyXG4gICAgICBpZiAobWV0aG9kID09IFwiYXBwZW5kXCIpIHtcclxuICAgICAgICAgdGhpcy5jb21tZW50cy5hcHBlbmRDaGlsZCh0aGlzLmNvbW1lbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLmNvbW1lbnRzLnByZXBlbmQodGhpcy5jb21tZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZGRMaWtlc0V2KCk7XHJcbiAgICAgIGlmIChvcHRpb25zLmRyb3Bkb3duKSBvcHRpb25zLmRyb3Bkb3duKGNvbW1lbnQpO1xyXG4gICAgICB0aGlzLmFkZFJlc3BvbnNlTGlzdEV2KCk7XHJcblxyXG4gICAgICBpZiAoY29tbWVudC5jb21tZW50ZWRfcG9zdC5hdXRob3IuaWQgIT0gdGhpcy51c2VyLmlkICYmIGNvbW1lbnQuY29tbWVudF9hdXRob3IuaWQgIT0gdGhpcy51c2VyLmlkKSB7XHJcbiAgICAgICAgIHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX21lbnVcIikucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVuZGVySW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBkZWZhdWx0X2ltZyA9IFwiL2ltZy9kZWZhdWx0cy9wcm9maWxlLnBuZ1wiO1xyXG4gICAgICBsZXQgYXZhdGFyID0gdGhpcy5yZXNwb25zZS5wcm9maWxlX2RhdGEgPyB0aGlzLnJlc3BvbnNlLnByb2ZpbGVfZGF0YS5hdmF0YXIgOiBkZWZhdWx0X2ltZztcclxuICAgICAgbGV0IGxvY2sgPSB0aGlzLnVzZXIubG9nZ2VkID8gXCJcIiA6IFwiZGlzYWJsZWRcIjtcclxuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gdGhpcy51c2VyLmxvZ2dlZCA/IFwiV3JpdGUgYSBjb21tZW50Li4uXCIgOiBcIlRvIHdyaXRlIGEgY29tbWVudCBwbGVhc2Ugc2lnbiBpblwiO1xyXG5cclxuICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm94X19yb3dcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3Byb2ZpbGUtaW1nXCI+ICAgICBcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2F2YXRhcn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjQwXCIgY2xhc3M9XCJpbWdfX2NvbW1lbnQtcHJvZmlsZVwiPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImJveF9fcm93XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hfX2lucHV0XCI+ICAgICBcclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBwbGFjZWhvbGRlcj1cIiR7cGxhY2Vob2xkZXJ9XCIgY2xhc3M9XCJpbnB1dF9fY29tbWVudFwiICR7bG9ja30+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbnB1dF9fY29tbWVudC1pbWFnZVwiIGNsYXNzPVwiaW5wdXRfX2NvbW1lbnQtaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0X19jb21tZW50LWltYWdlXCIgY2xhc3M9XCJsYWJlbF9fZmlsZVwiPlxyXG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1pbWFnZXNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3hfX3Jvd1wiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9faW1hZ2UtcHJldmlld1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIkltYWdlIFByZXZpZXdcIiBjbGFzcz1cImltYWdlLXByZXZpZXdfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19pbWFnZS1jbGVhclwiPlxyXG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3hfX3Jvd1wiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dF9fZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+UHJlc3MgRW50ZXIgdG8gcG9zdC48L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgdGhpcy5pbnB1dC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmFkZElucHV0RXYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19jb21tZW50XCIpO1xyXG4gICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDUkVBVEUgQU5EIFJFTkRFUiBTSU5HTEUgQ09NTUVOVFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlRmV0Y2hQb3N0Q29tbWVudChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTW9kYWxJdGVtKHRoaXMuZGF0YSwgXCJwcmVwZW5kXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvdW50ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXh0X19jb21tZW50LWNvdW50XCIpO1xyXG4gICAgICAgICAgICBjb3VudGVycy5mb3JFYWNoKChjb3VudGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke3RoaXMuZGF0YS5jb3VudH0pYDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRleHRfX2NvbW1lbnQtY291bnRcIikuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke3RoaXMuZGF0YS5jb3VudH0pYDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbcG9zdD1cIiR7dGhpcy5wb3N0X2lkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zdHMpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChwb3N0LnF1ZXJ5U2VsZWN0b3IoXCIudHJpZ2dlcl9fY29tbWVudHMtbW9kYWxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgcG9zdC5xdWVyeVNlbGVjdG9yKFwiLnRyaWdnZXJfX2NvbW1lbnRzLW1vZGFsXCIpLmlubmVySFRNTCA9IGAoJHt0aGlzLmRhdGEuY291bnR9KWA7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDTEVBUiBJTUFHRVxyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIHNlbGYuZmlsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wRmlsZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmFkZExpa2VzRXYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9nZ2xlcnMgPSB0aGlzLmNvbW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2dnbGVfX2xpa2VzXCIpO1xyXG4gICAgICB0aGlzLnRvZ2dsZXJzLmZvckVhY2goKHRvZ2dsZXIpID0+IHtcclxuICAgICAgICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25jbGlja0xpa2VzKSBvcHRpb25zLm9uY2xpY2tMaWtlcyhlLnRhcmdldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkUmVzcG9uc2VMaXN0RXYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudHJpZ2dlcnMgPSB0aGlzLmNvbW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmlnZ2VyX19tb2RhbFwiKTtcclxuICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XHJcbiAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uY2xpY2tDb3VudCkgb3B0aW9ucy5vbmNsaWNrQ291bnQoZS50YXJnZXQpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnByZXZpZXdJbWFnZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5pbnBGaWxlID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fY29tbWVudC1pbWFnZVwiKTtcclxuICAgICAgdGhpcy5wcmV2aWV3SW1hZ2UgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLXByZXZpZXdfX2ltYWdlXCIpO1xyXG4gICAgICB0aGlzLmJ0bkNsZWFyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jb21tZW50X19pbWFnZS1jbGVhclwiKTtcclxuICAgICAgdGhpcy5wcmV2aWV3Q29udGFpbmVyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jb21tZW50X19pbWFnZS1wcmV2aWV3XCIpO1xyXG5cclxuICAgICAgc2VsZi5pbnBGaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBzZWxmLmZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICAgICBpZiAoc2VsZi5maWxlKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIHNlbGYucHJldmlld0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIucmVhZEFzRGF0YVVSTChzZWxmLmZpbGUpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuYnRuQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgc2VsZi5maWxlID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5pbnBGaWxlLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgIGlmIChvdmVybGF5ICE9PSBudWxsIHx8IHR5cGVvZiBvdmVybGF5ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zZWNvbmRhcnlfb3ZlcmxheSkgdGhpcy5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgaWYgKHRoaXMuaXRlbV9vdmVybGF5KSB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBidG5fY2xvc2UgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtY2xvc2VcIik7XHJcbiAgICAgIGJ0bl9jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oaWRlTW9kYWwpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByZXBhcmVGZXRjaEdldENvbW1lbnRzKCk7XHJcbiAgICAgIHRoaXMucmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoRGF0YSgpO1xyXG5cclxuICAgICAgdGhpcy5zdHlsZV9jbGFzcyA9IG9wdGlvbnMuc3R5bGVfY2xhc3M7XHJcbiAgICAgIHRoaXMuY2IgPSBvcHRpb25zLmNiO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJNb2RhbEJvZHkoKTtcclxuICAgICAgdGhpcy5yZW5kZXJJbnB1dCgpO1xyXG5cclxuICAgICAgdGhpcy5yZXNwb25zZS5jb21tZW50X2RhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnJlbmRlck1vZGFsSXRlbShjb21tZW50LCBcImFwcGVuZFwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmFkZElucHV0RXYoKTtcclxuICAgICAgdGhpcy5wcmV2aWV3SW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuYWRkRXYoKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCgpO1xyXG4gICByZXR1cm4gdGhpcztcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUZvbGRlcihvcHRpb25zKSB7XHJcbiAgIHRoaXMucmVuZGVyTW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuYm9keSgpO1xyXG5cclxuICAgICAgdGhpcy50b2tlbiA9IGF3YWl0IHRoaXMuZ2V0Q1NSRigpO1xyXG4gICAgICB0aGlzLmNzcmYgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19jc3JmXCIpO1xyXG4gICAgICB0aGlzLmNzcmYudmFsdWUgPSB0aGlzLnRva2VuLmNzcmY7XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNQUlOIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTU9EQUwgT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5X2JnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSVRFTSBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5pdGVtX292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheSA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuaXRlbV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuaXRlbV9vdmVybGF5X2JnO1xyXG4gICAgICAgICAvLyB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjk5OVwiO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgIGlmIChvdmVybGF5ICE9PSBudWxsIHx8IHR5cGVvZiBvdmVybGF5ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNlY29uZGFyeV9vdmVybGF5KSB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5idG5fc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLXN1Ym1pdFwiKTtcclxuICAgICAgdGhpcy5idG5fc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNyZWF0ZUZvbGRlcigpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYigpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcigpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5idG5fY2FuY2VsID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNhbmNlbFwiKTtcclxuICAgICAgdGhpcy5idG5fY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhpZGVNb2RhbCk7XHJcblxyXG4gICAgICB0aGlzLmJ0bl9jbG9zZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jbG9zZVwiKTtcclxuICAgICAgdGhpcy5idG5fY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGlkZU1vZGFsKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuY3JlYXRlRm9sZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NyZWF0ZS1mb2xkZXJcIik7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xyXG4gICAgICB0aGlzLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJjcmVhdGVfZm9sZGVyXCIpO1xyXG5cclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHRoaXMuZGF0YSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5nZXRDU1JGID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdGhpcy5kYXRhLmFwcGVuZChcInRva2VuX25hbWVcIiwgXCJmb2xkZXJcIik7XHJcbiAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImZvcm1fZm9sZGVyXCIpO1xyXG4gICAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogdGhpcy5kYXRhLFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmRpc3BsYXlFcnJvciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5lcnJvciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGV4dF9fZXJyb3ItbWVzc2FnZVwiKTtcclxuICAgICAgdGhpcy5lcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB0aGlzLnJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICB0aGlzLmVycm9yLmlubmVySFRNTCArPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYm9keSA9ICgpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbF9fd2luZG93ICR7b3B0aW9ucy5zdHlsZV9jbGFzc30nIGlkPVwiJHtvcHRpb25zLm1vZGFsX292ZXJsYXl9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHRfX21vZGFsLWhlYWRlclwiPkNyZWF0ZSBGb2xkZXI8L2g1PlxyXG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBidG5fX21vZGFsLWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBuYW1lPVwiZm9sZGVyXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzPVwiZm9ybV9fY3JlYXRlLWZvbGRlclwiPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0X19mb2xkZXItbmFtZVwiIHBsYWNlaG9sZGVyPVwiRm9sZGVyIE5hbWVcIiBuYW1lPVwiZm9sZGVyW25hbWVdIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dF9fZXJyb3ItbWVzc2FnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb2xkZXJbX3Rva2VuXVwiIHZhbHVlPVwiXCIgY2xhc3M9XCJpbnB1dF9fY3NyZlwiPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj4gICAgIFxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19tb2RhbC1zdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbW9kYWwtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5yZW5kZXJNb2RhbCgpO1xyXG4gICAgICB0aGlzLmFkZEV2KCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQoKTtcclxuICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVQb3N0KG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLnJlbmRlck1vZGFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLmNiID0gb3B0aW9ucy5jYjtcclxuICAgICAgc2VsZi5kYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cclxuICAgICAgc2VsZi5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKTtcclxuICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5odG1sKCk7XHJcbiAgICAgIHNlbGYuY3NyZiA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX2NzcmZcIik7XHJcbiAgICAgIHNlbGYudG9rZW4gPSBhd2FpdCBzZWxmLmdldENTUkYoKTtcclxuICAgICAgc2VsZi5jc3JmLnZhbHVlID0gc2VsZi50b2tlbi50b2tlbjtcclxuXHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlID0gbnVsbDtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG4gICAgICBzZWxmLmVycm9yX2ZpZWxkcyA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNQUlOIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTU9EQUwgT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5X2JnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSVRFTSBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5pdGVtX292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheSA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuaXRlbV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuaXRlbV9vdmVybGF5X2JnO1xyXG4gICAgICAgICAvLyB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjk5OVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogREVQRU5EQU5DSUVTIERST1BET1dOIEFORCBBVVRPQ09NUExFVEUgQ1JFQVRFXHJcbiAgICAgICAqL1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMucmVuZGVyZHJvcGRvd24pIG9wdGlvbnMucmVuZGVyZHJvcGRvd24oKTtcclxuICAgICAgaWYgKG9wdGlvbnMucmVuZGVyYXV0b2NvbXBsZXRlKSBvcHRpb25zLnJlbmRlcmF1dG9jb21wbGV0ZSgpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRFdiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IGJ0bl9zdWJtaXQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtc3VibWl0XCIpO1xyXG4gICAgICBidG5fc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHNlbGYucmVzcG9uc2UgPSBhd2FpdCBzZWxmLmNyZWF0ZVBvc3Qoc2VsZi5wcmVwYXJlRmV0Y2goKSk7XHJcbiAgICAgICAgIGlmIChzZWxmLnJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICBzZWxmLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmhpZGVFcnJvcnMoKTtcclxuICAgICAgICAgICAgc2VsZi5kaXNwbGF5RXJyb3JzKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYnRuX2NhbmNlbCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jYW5jZWxcIik7XHJcbiAgICAgIGJ0bl9jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgIHNlbGYuaGlkZU1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJ0bl9jbG9zZSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jbG9zZVwiKTtcclxuICAgICAgYnRuX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLmhpZGVNb2RhbCk7XHJcblxyXG4gICAgICBsZXQgdGFnX2lucHV0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpO1xyXG4gICAgICB0YWdfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERFUEVOREFOQ1kgVEFHUyBDUkVBVEVcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLWZpZWxkX190YWdzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgb3B0aW9ucy5vbnRhZ2NyZWF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdzX19tYXRjaFwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5wcmV2aWV3RnJvbnRDb3ZlciA9ICgpID0+IHtcclxuICAgICAgc2VsZi5pbnB1dEZyb250ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fZnJvbnQtY292ZXJcIik7XHJcbiAgICAgIHNlbGYucHJldmlld0Zyb250ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5mcm9udC1jb3Zlci1wcmV2aWV3X19pbWFnZVwiKTtcclxuICAgICAgc2VsZi5wcmV2aWV3RnJvbnRUZXh0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5mcm9udC1jb3Zlci1wcmV2aWV3X190ZXh0XCIpO1xyXG4gICAgICBzZWxmLmJ0bkZyb250Q2xlYXIgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZyb250LWNvdmVyX19idG4tY2xlYXJcIik7XHJcblxyXG4gICAgICBzZWxmLmlucHV0RnJvbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHNlbGYuZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbiAgICAgICAgIGlmIChzZWxmLmZpbGUpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdGcm9udFRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdGcm9udC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIHNlbGYucHJldmlld0Zyb250LnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIucmVhZEFzRGF0YVVSTChzZWxmLmZpbGUpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdGcm9udFRleHQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0Zyb250LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi5idG5Gcm9udENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgIHNlbGYuaW5wdXRGcm9udC52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld0Zyb250VGV4dC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3RnJvbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5wcmV2aWV3SGVhZGVyQ292ZXIgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuaW5wdXRIZWFkZXIgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19oZWFkZXItY292ZXJcIik7XHJcbiAgICAgIHNlbGYucHJldmlld0hlYWRlciA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWNvdmVyLXByZXZpZXdfX2ltYWdlXCIpO1xyXG4gICAgICBzZWxmLnByZXZpZXdIZWFkZXJUZXh0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItY292ZXItcHJldmlld19fdGV4dFwiKTtcclxuICAgICAgc2VsZi5idG5IZWFkZXJDbGVhciA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWNvdmVyX19idG4tY2xlYXJcIik7XHJcblxyXG4gICAgICBzZWxmLmlucHV0SGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBzZWxmLmZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICAgICBpZiAoc2VsZi5maWxlKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIHNlbGYucHJldmlld0hlYWRlci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZi5maWxlKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyVGV4dC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi5idG5IZWFkZXJDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICBzZWxmLmlucHV0SGVhZGVyLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyVGV4dC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuZ2V0Q1NSRiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRoaXMuZGF0YS5hcHBlbmQoXCJ0b2tlbl9uYW1lXCIsIFwicG9zdFwiKTtcclxuICAgICAgdGhpcy51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZ2V0X3Rva2VuXCIpO1xyXG4gICAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogdGhpcy5kYXRhLFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnByZXBhcmVGZXRjaCA9ICgpID0+IHtcclxuICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3Bvc3QtdHlwZVwiKTtcclxuICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICBsZXQgZm9sZGVyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fdmFsdWVcIikuZ2V0QXR0cmlidXRlKFwiZm9sZGVyXCIpO1xyXG4gICAgICBkYXRhLmFwcGVuZChcInBvc3RbZm9sZGVyXVwiLCBmb2xkZXIpO1xyXG5cclxuICAgICAgbGV0IHRhZ3Nfc2VsZWN0ZWQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhZ3NfX3NlbGVjdGVkXCIpO1xyXG4gICAgICBsZXQgdGFncyA9IHRhZ3Nfc2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbChcIi50YWdcIik7XHJcbiAgICAgIGxldCB0YWdfbmFtZXMgPSBbXTtcclxuICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgbGV0IHRhZ19uYW1lID0gdGFnLnF1ZXJ5U2VsZWN0b3IoXCIudGFnX19uYW1lXCIpLmlubmVySFRNTDtcclxuICAgICAgICAgdGFnX25hbWVzLnB1c2godGFnX25hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgZGF0YS5hcHBlbmQoXCJwb3N0W3RhZ3NdXCIsIHRhZ19uYW1lcyk7XHJcbiAgICAgIC8vIGRhdGEuYXBwZW5kKFwicG9zdFtpZF1cIiwgbnVsbCk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuY3JlYXRlUG9zdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImNyZWF0ZV9wb3N0XCIpO1xyXG4gICAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCB8fCB0eXBlb2Ygb3ZlcmxheSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkpIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGVFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuZXJyb3JfZmllbGRzLmZvckVhY2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgIGVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5kaXNwbGF5RXJyb3JzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZXJyb3JzID0gW107XHJcblxyXG4gICAgICBzZWxmLnJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICBsZXQgc3RyXzEgPSBlcnJvci5jYXVzZS5wcm9wZXJ0eVBhdGgucmVwbGFjZShcImRhdGFcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIik7XHJcbiAgICAgICAgIGxldCBjYXVzZSA9IHN0cl8xLnJlcGxhY2UoLyheLipcXFt8XFxdLiokKS9nLCBcIlwiKTtcclxuICAgICAgICAgbGV0IGUgPSB7IGNhdXNlOiBjYXVzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG5cclxuICAgICAgICAgZXJyb3JzLnB1c2goZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgIGlmIChzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjZXJyb3ItZmllbGRfXyR7ZXJyb3IuY2F1c2V9YCkpIHtcclxuICAgICAgICAgICAgc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihgI2Vycm9yLWZpZWxkX18ke2Vycm9yLmNhdXNlfWApLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLXRleHRfX2Vycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAgJHtlcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5odG1sID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHtvcHRpb25zLnN0eWxlX2NsYXNzfSc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXlfX21vZGFsLWl0ZW0nIGlkPVwiJHtvcHRpb25zLm1vZGFsX292ZXJsYXl9XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICAgIDxoNSBjbGFzcz1cInRleHRfX21vZGFsLWhlYWRlclwiPkNyZWF0ZSBQb3N0PC9oNT5cclxuICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgYnRuX19tb2RhbC1jbG9zZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2JvZHlcIj5cclxuICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtX19wb3N0LXR5cGVcIiBuYW1lPVwicG9zdFwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX3Jvd1wiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2Zyb250LWNvdmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9udC1jb3Zlcl9fbGFiZWxcIj5Gcm9udCBDb3ZlcjwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRfX2Zyb250LWNvdmVyXCIgY2xhc3M9XCJmcm9udC1jb3Zlcl9fYnRuLXVwbG9hZFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1pbWFnZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb250LWNvdmVyX19idG4tY2xlYXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbnQtY292ZXJfX2NvdmVyLXByZXZpZXdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJDb3ZlciBQcmV2aWV3XCIgY2xhc3M9XCJmcm9udC1jb3Zlci1wcmV2aWV3X19pbWFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyb250LWNvdmVyLXByZXZpZXdfX3RleHRcIj5QcmV2aWV3IEltYWdlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnB1dC1ncm91cF9faW5wdXQgaW5wdXRfX2Zyb250LWNvdmVyXCIgaWQ9XCJpbnB1dF9fZnJvbnQtY292ZXJcIiBuYW1lPVwicG9zdFtmcm9udF9jb3Zlcl1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWZpZWxkX19lcnJvci1tc2dcIiBpZD1cImVycm9yLWZpZWxkX19mcm9udF9jb3ZlclwiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cF9faGVhZGVyLWNvdmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY292ZXJfX2xhYmVsXCI+SGVhZGVyIENvdmVyPC9kaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dF9faGVhZGVyLWNvdmVyXCIgY2xhc3M9XCJoZWFkZXItY292ZXJfX2J0bi11cGxvYWRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaW1hZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY292ZXJfX2J0bi1jbGVhclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY292ZXJfX2NvdmVyLXByZXZpZXdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJDb3ZlciBQcmV2aWV3XCIgY2xhc3M9XCJoZWFkZXItY292ZXItcHJldmlld19faW1hZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItY292ZXItcHJldmlld19fdGV4dFwiPlByZXZpZXcgSW1hZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImlucHV0LWdyb3VwX19pbnB1dCBpbnB1dF9faGVhZGVyLWNvdmVyXCIgaWQ9XCJpbnB1dF9faGVhZGVyLWNvdmVyXCIgbmFtZT1cInBvc3RbaGVhZGVyX2NvdmVyXVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiIGlkPVwiZXJyb3ItZmllbGRfX2hlYWRlcl9jb3ZlclwiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+IFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBfX3RhZ3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3NfX2NyZWF0ZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dF9fdGFnXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3NfX3NlbGVjdGVkXCIgbmFtZT1cInBvc3RbdGFnc11cIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWZpZWxkX19lcnJvci1tc2dcIiBpZD1cImVycm9yLWZpZWxkX190YWdzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yb3dcIj4gXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9sZGVyXCI+Rm9sZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X19mb2xkZXJcIiBpZD1cImlucHV0X19mb2xkZXJcIiBuYW1lPVwicG9zdFtmb2xkZXJdXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1maWVsZF9fZXJyb3ItbXNnXCIgaWQ9XCJlcnJvci1maWVsZF9fZm9sZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yb3dcIj4gXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2lucHV0IGlucHV0X190aXRsZVwiIG5hbWU9XCJwb3N0W3RpdGxlXVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiIGlkPVwiZXJyb3ItZmllbGRfX3RpdGxlXCI+PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yb3dcIj4gXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYm9keVwiPlRleHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInBvc3RbYm9keV1cIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBjbGFzcz1cImlucHV0LWdyb3VwX19pbnB1dCBpbnB1dF9fdGV4dFwiIGlkPVwiaW5wdXRfX3RleHRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiIGlkPVwiZXJyb3ItZmllbGRfX2JvZHlcIj48L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicG9zdFtfdG9rZW5dXCIgdmFsdWU9XCJcIiBjbGFzcz1cImlucHV0X19jc3JmXCI+XHJcbiAgIDwvZm9ybT5cclxuXHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPiAgICAgXHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX21vZGFsLXN1Ym1pdFwiPkNyZWF0ZSBQb3N0PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX21vZGFsLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICA8L2Rpdj5cclxuICAgPC9kaXY+YDtcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHNlbGYucmVuZGVyTW9kYWwoKTtcclxuICAgICAgc2VsZi5hZGRFdigpO1xyXG4gICAgICBzZWxmLnByZXZpZXdGcm9udENvdmVyKCk7XHJcbiAgICAgIHNlbGYucHJldmlld0hlYWRlckNvdmVyKCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQoKTtcclxuICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZUNvbW1lbnQob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYucmVuZGVyTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuaHRtbCgpO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZSA9IG51bGw7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICAgc2VsZi5tb2RhbF93aW5kb3cgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX193aW5kb3dcIik7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTUFJTiBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5vdmVybGF5ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICAgICBzZWxmLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1PREFMIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSk7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheV9iZztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIElURU0gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuaXRlbV9vdmVybGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLml0ZW1fb3ZlcmxheSk7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLml0ZW1fb3ZlcmxheV9iZztcclxuICAgICAgICAgLy8gc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuekluZGV4ID0gXCI5OTlcIjtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgbGV0IGJ0bl9zdWJtaXQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtc3VibWl0XCIpO1xyXG4gICAgICBidG5fc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICBzZWxmLnByZXBhcmVGZXRjaCgpO1xyXG4gICAgICAgICBzZWxmLnJlc3BvbnNlID0gYXdhaXQgc2VsZi5mZXRjaERhdGEoKTtcclxuICAgICAgICAgc2VsZi51cGRhdGVET00oKTtcclxuICAgICAgICAgaWYgKG9wdGlvbnMub25zdWJtaXQpIG9wdGlvbnMub25zdWJtaXQoc2VsZi5yZXNwb25zZSk7XHJcbiAgICAgICAgIHNlbGYuaGlkZU1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJ0bl9jYW5jZWwgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtY2FuY2VsXCIpO1xyXG4gICAgICBidG5fY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICBzZWxmLmhpZGVNb2RhbCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBidG5fY2xvc2UgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtY2xvc2VcIik7XHJcbiAgICAgIGJ0bl9jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi5oaWRlTW9kYWwpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5wcmVwYXJlRmV0Y2ggPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBcImJveF9fY29tbWVudFwiKS5nZXRBdHRyaWJ1dGUoXCJjb21tZW50XCIpO1xyXG4gICAgICBzZWxmLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJkZWxldGVfY29tbWVudFwiKTtcclxuXHJcbiAgICAgIHNlbGYuZmV0Y2hfYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFwiaWRcIiwgc2VsZi5pZCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi5wcm9taXNlID0gZmV0Y2goc2VsZi51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogc2VsZi5mZXRjaF9ib2R5LFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnVwZGF0ZURPTSA9ICgpID0+IHtcclxuICAgICAgaWYgKHNlbGYucmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICBzZWxmLmNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NvbW1lbnQgPSBcIiR7c2VsZi5yZXNwb25zZS5pZH1cIl1gKTtcclxuICAgICAgICAgc2VsZi5jb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dF9fY29tbWVudC1jb3VudFwiKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7c2VsZi5yZXNwb25zZS5jb3VudH0pYDtcclxuXHJcbiAgICAgIHNlbGYucG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbcG9zdD1cIiR7c2VsZi5yZXNwb25zZS5wb3N0X2lkfVwiXWApO1xyXG4gICAgICBpZiAoc2VsZi5wb3N0cykge1xyXG4gICAgICAgICBzZWxmLnBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBvc3QucXVlcnlTZWxlY3RvcihcIi50cmlnZ2VyX19jb21tZW50cy1tb2RhbFwiKSkge1xyXG4gICAgICAgICAgICAgICBwb3N0LnF1ZXJ5U2VsZWN0b3IoXCIudHJpZ2dlcl9fY29tbWVudHMtbW9kYWxcIikuaW5uZXJIVE1MID0gYCgke3NlbGYucmVzcG9uc2UuY291bnR9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgaWYgKG92ZXJsYXkgIT09IG51bGwgfHwgdHlwZW9mIG92ZXJsYXkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkpIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgIGlmIChzZWxmLml0ZW1fb3ZlcmxheSkgc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmh0bWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWxfX3dpbmRvdyAke29wdGlvbnMuc3R5bGVfY2xhc3N9JyBpZD1cIiR7b3B0aW9ucy5tb2RhbF9vdmVybGF5fVwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0X19tb2RhbC1oZWFkZXJcIj5EZWxldGUgQ29tbWVudDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGJ0bl9fbW9kYWwtY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib2R5X190ZXh0XCI+VGhpcyB3aWxsIHJlbW92ZSBjb21tZW50PC9wPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj4gICAgIFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19tb2RhbC1zdWJtaXRcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbW9kYWwtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2VsZi5yZW5kZXJNb2RhbCgpO1xyXG4gICAgICBzZWxmLmFkZEV2KCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQoKTtcclxuICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZVBvc3Qob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYucmVuZGVyTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IHNlbGYuaHRtbCgpO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZSA9IG51bGw7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICAgc2VsZi5tb2RhbF93aW5kb3cgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX193aW5kb3dcIik7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTUFJTiBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5vdmVybGF5ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICAgICBzZWxmLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1PREFMIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSk7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheV9iZztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIElURU0gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuaXRlbV9vdmVybGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLml0ZW1fb3ZlcmxheSk7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLml0ZW1fb3ZlcmxheV9iZztcclxuICAgICAgICAgLy8gc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuekluZGV4ID0gXCI5OTlcIjtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgbGV0IGJ0bl9zdWJtaXQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtc3VibWl0XCIpO1xyXG4gICAgICBidG5fc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICBzZWxmLnByZXBhcmVGZXRjaCgpO1xyXG4gICAgICAgICBzZWxmLnJlc3BvbnNlID0gYXdhaXQgc2VsZi5mZXRjaERhdGEoKTtcclxuXHJcbiAgICAgICAgIGlmIChvcHRpb25zLm9uc3VibWl0KSBvcHRpb25zLm9uc3VibWl0KHNlbGYucmVzcG9uc2UpO1xyXG4gICAgICAgICBzZWxmLmhpZGVNb2RhbCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBidG5fY2FuY2VsID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNhbmNlbFwiKTtcclxuICAgICAgYnRuX2NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgc2VsZi5oaWRlTW9kYWwoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYnRuX2Nsb3NlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNsb3NlXCIpO1xyXG4gICAgICBidG5fY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuaGlkZU1vZGFsKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYucHJlcGFyZUZldGNoID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmlkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgXCJib3hfX3Bvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKTtcclxuICAgICAgc2VsZi51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZGVsZXRlX3Bvc3RcIik7XHJcblxyXG4gICAgICBzZWxmLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcImlkXCIsIHNlbGYuaWQpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5mZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNlbGYucHJvbWlzZSA9IGZldGNoKHNlbGYudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHNlbGYuZmV0Y2hfYm9keSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCB8fCB0eXBlb2Ygb3ZlcmxheSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkpIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgIGlmIChzZWxmLml0ZW1fb3ZlcmxheSkgc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmh0bWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWxfX3dpbmRvdyAke29wdGlvbnMuc3R5bGVfY2xhc3N9Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGV4dF9fbW9kYWwtaGVhZGVyXCI+RGVsZXRlIFBvc3Q8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBidG5fX21vZGFsLWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9keV9fdGV4dFwiPlRoaXMgd2lsbCByZW1vdmUgcG9zdCBhbmQgYWxsIHJlbGF0ZWQgZGF0YTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbW9kYWwtc3VibWl0XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX21vZGFsLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgIGlmIChvdmVybGF5ICE9PSBudWxsIHx8IHR5cGVvZiBvdmVybGF5ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZWxmLnNlY29uZGFyeV9vdmVybGF5KSBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICBpZiAoc2VsZi5pdGVtX292ZXJsYXkpIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLnJlbmRlck1vZGFsKCk7XHJcbiAgICAgIHNlbGYuYWRkRXYoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCgpO1xyXG4gICByZXR1cm4gc2VsZjtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRWRpdENvbW1lbnQob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYucmVuZGVyTW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNlbGYuZGF0YSA9IGF3YWl0IHNlbGYuZ2V0RGF0YSgpO1xyXG5cclxuICAgICAgc2VsZi5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKTtcclxuICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gc2VsZi5odG1sKCk7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlID0gbnVsbDtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTUFJTiBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5vdmVybGF5ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICAgICBzZWxmLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1PREFMIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSk7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheV9iZztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIElURU0gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuaXRlbV9vdmVybGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLml0ZW1fb3ZlcmxheSk7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLml0ZW1fb3ZlcmxheV9iZztcclxuICAgICAgICAgLy8gc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuekluZGV4ID0gXCI5OTlcIjtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5wcmV2aWV3SW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuaW1nX2F0dGFjaGVkID0gZmFsc2U7XHJcblxyXG4gICAgICBzZWxmLmlucEZpbGUgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19jb21tZW50LWltZ1wiKTtcclxuICAgICAgc2VsZi5wcmV2aWV3SW1hZ2UgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByZXZpZXdfX2ltZ1wiKTtcclxuICAgICAgc2VsZi5wcmV2aWV3VGV4dCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlld19fdGV4dFwiKTtcclxuICAgICAgc2VsZi5idG5DbGVhciA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW1nLWF0dGFjaGVkX19idG4tY2xlYXJcIik7XHJcblxyXG4gICAgICBzZWxmLmlucEZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHNlbGYuZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbiAgICAgICAgIGlmIChzZWxmLmZpbGUpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZi5maWxlKTtcclxuICAgICAgICAgICAgc2VsZi5pbWdfYXR0YWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdUZXh0LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5pbWdfYXR0YWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuYnRuQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgc2VsZi5pbnBGaWxlLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3VGV4dC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYuaW1nX2F0dGFjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgIHNlbGYucmVtb3ZlX2ltZyA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgbGV0IGJ0bl9zdWJtaXQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtc3VibWl0XCIpO1xyXG4gICAgICBidG5fc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICBzZWxmLnByZXBhcmVGZXRjaCgpO1xyXG4gICAgICAgICBzZWxmLnJlc3BvbnNlID0gYXdhaXQgc2VsZi5mZXRjaERhdGEoKTtcclxuICAgICAgICAgc2VsZi51cGRhdGVET00oKTtcclxuXHJcbiAgICAgICAgIGlmIChvcHRpb25zLm9uc3VibWl0KSBvcHRpb25zLm9uc3VibWl0KHNlbGYucmVzcG9uc2UpO1xyXG4gICAgICAgICBzZWxmLmhpZGVNb2RhbCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBidG5fY2FuY2VsID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNhbmNlbFwiKTtcclxuICAgICAgYnRuX2NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgc2VsZi5oaWRlTW9kYWwoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYnRuX2Nsb3NlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNsb3NlXCIpO1xyXG4gICAgICBidG5fY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuaGlkZU1vZGFsKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi5pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIFwiYm94X19jb21tZW50XCIpLmdldEF0dHJpYnV0ZShcImNvbW1lbnRcIik7XHJcbiAgICAgIHNlbGYuZmV0Y2hfYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFwiaWRcIiwgc2VsZi5pZCk7XHJcbiAgICAgIHNlbGYudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImdldF9jb21tZW50XCIpO1xyXG5cclxuICAgICAgcmV0dXJuIGZldGNoKHNlbGYudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHNlbGYuZmV0Y2hfYm9keSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRWYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX3RleHRcIikudmFsdWUgPSBzZWxmLmRhdGEuYm9keS50cmltKCk7XHJcblxyXG4gICAgICBpZiAoc2VsZi5kYXRhLmltZ19hdHRhY2hlZCkge1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2VsZi5kYXRhLmltZ19hdHRhY2hlZCk7XHJcbiAgICAgICAgIHNlbGYucHJldmlld1RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnByZXBhcmVGZXRjaCA9ICgpID0+IHtcclxuICAgICAgc2VsZi51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZWRpdF9jb21tZW50XCIpO1xyXG5cclxuICAgICAgc2VsZi50ZXh0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fdGV4dFwiKS52YWx1ZS50cmltKCk7XHJcbiAgICAgIHNlbGYuaW1hZ2UgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19jb21tZW50LWltZ1wiKS5maWxlc1swXTtcclxuICAgICAgc2VsZi5pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIFwiYm94X19jb21tZW50XCIpLmdldEF0dHJpYnV0ZShcImNvbW1lbnRcIik7XHJcblxyXG4gICAgICBzZWxmLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcImlkXCIsIHNlbGYuaWQpO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFwidGV4dFwiLCBzZWxmLnRleHQpO1xyXG5cclxuICAgICAgaWYgKHNlbGYuaW1nX2F0dGFjaGVkKSB7XHJcbiAgICAgICAgIHNlbGYuZmV0Y2hfYm9keS5hcHBlbmQoXCJpbWFnZVwiLCBzZWxmLmltYWdlKTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxmLnJlbW92ZV9pbWcpIHtcclxuICAgICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcImltYWdlXCIsIFwicmVtb3ZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFwiaW1hZ2VcIiwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLnByb21pc2UgPSBmZXRjaChzZWxmLnVybCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiBzZWxmLmZldGNoX2JvZHksXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHNlbGYucHJvbWlzZTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYudXBkYXRlRE9NID0gKCkgPT4ge1xyXG4gICAgICBpZiAoc2VsZi5yZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgIHNlbGYuY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjb21tZW50ID0gXCIke3NlbGYucmVzcG9uc2UuY29tbWVudF9kYXRhLmlkfVwiXWApO1xyXG5cclxuICAgICAgICAgc2VsZi5jb21tZW50LmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX3RleHRcIikuaW5uZXJIVE1MID0gc2VsZi5yZXNwb25zZS5jb21tZW50X2RhdGEuYm9keTtcclxuICAgICAgICAgICAgbGV0IGltZ19jb250YWluZXIgPSBjb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudF9faW1nX2F0dGFjaGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5yZXNwb25zZS5jb21tZW50X2RhdGEuaW1nX2F0dGFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgIGltZ19jb250YWluZXIuc3R5bGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICBsZXQgaW1nX2F0dGFjaGVkID0gY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZ19faW1nLWF0dGFjaGVkXCIpO1xyXG4gICAgICAgICAgICAgICBpbWdfYXR0YWNoZWQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGYucmVzcG9uc2UuY29tbWVudF9kYXRhLmltZ19hdHRhY2hlZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGltZ19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgIGlmIChvdmVybGF5ICE9PSBudWxsIHx8IHR5cGVvZiBvdmVybGF5ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZWxmLnNlY29uZGFyeV9vdmVybGF5KSBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICBpZiAoc2VsZi5pdGVtX292ZXJsYXkpIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5odG1sID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHtvcHRpb25zLnN0eWxlX2NsYXNzfSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHRfX21vZGFsLWhlYWRlclwiPkVkaXQgQ29tbWVudDwvaDU+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGJ0bl9fbW9kYWwtY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2VkaXQtY29tbWVudFwiPlxyXG4gICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+VGV4dDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgY2xhc3M9XCJpbnB1dC1ncm91cF9faW5wdXQgaW5wdXRfX3RleHRcIiBpZD1cImlucHV0X190ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2ltZy1hdHRhY2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWF0dGFjaGVkX19sYWJlbFwiPkltYWdlIEF0dGFjaGVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dF9fY29tbWVudC1pbWdcIiBjbGFzcz1cImltZy1hdHRhY2hlZF9fYnRuLXVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1pbWFnZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1hdHRhY2hlZF9fYnRuLWNsZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1hdHRhY2hlZF9fcHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIkNvdmVyIFByZXZpZXdcIiBjbGFzcz1cInByZXZpZXdfX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXdfX3RleHRcIj5QcmV2aWV3IEltYWdlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnB1dC1ncm91cF9faW5wdXQgaW5wdXRfX2NvbW1lbnQtaW1nXCIgaWQ9XCJpbnB1dF9fY29tbWVudC1pbWdcIj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj4gICAgIFxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19tb2RhbC1zdWJtaXRcIj5FZGl0IENvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbW9kYWwtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IHNlbGYucmVuZGVyTW9kYWwoKTtcclxuICAgICAgc2VsZi5hZGRFdigpO1xyXG4gICAgICBzZWxmLnByZXZpZXdJbWFnZSgpO1xyXG4gICAgICBzZWxmLmFkZFZhbHVlcygpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0KCk7XHJcbiAgIHJldHVybiBzZWxmO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRWRpdFBvc3Qob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYucmVuZGVyTW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IHNlbGYuaHRtbCgpO1xyXG5cclxuICAgICAgc2VsZi5jc3JmID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fY3NyZlwiKTtcclxuICAgICAgc2VsZi50b2tlbiA9IGF3YWl0IHNlbGYuZ2V0Q1NSRigpO1xyXG4gICAgICBzZWxmLmNzcmYudmFsdWUgPSBzZWxmLnRva2VuLnRva2VuO1xyXG5cclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUgPSBudWxsO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgIHNlbGYuZXJyb3JfZmllbGRzID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5lcnJvci1maWVsZF9fZXJyb3ItbXNnXCIpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1BSU4gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYub3ZlcmxheSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgICAgc2VsZi5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXlfYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJVEVNIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5pdGVtX292ZXJsYXlfYmc7XHJcbiAgICAgICAgIC8vIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLnJlbmRlcmRyb3Bkb3duKSBvcHRpb25zLnJlbmRlcmRyb3Bkb3duKCk7XHJcbiAgICAgIGlmIChvcHRpb25zLnJlbmRlcmF1dG9jb21wbGV0ZSkgb3B0aW9ucy5yZW5kZXJhdXRvY29tcGxldGUoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRXYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBidG5fc3VibWl0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLXN1Ym1pdFwiKTtcclxuICAgICAgYnRuX3N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgc2VsZi5wcmVwYXJlRmV0Y2goKTtcclxuICAgICAgICAgc2VsZi5yZXNwb25zZSA9IGF3YWl0IHNlbGYuZWRpdFBvc3QoKTtcclxuICAgICAgICAgc2VsZi51cGRhdGVET00oKTtcclxuXHJcbiAgICAgICAgIGlmIChzZWxmLnJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc2VsZi5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbnN1Ym1pdChzZWxmLnJlc3BvbnNlKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5oaWRlRXJyb3JzKCk7XHJcbiAgICAgICAgICAgIHNlbGYuZGlzcGxheUVycm9ycygpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJ0bl9jYW5jZWwgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtY2FuY2VsXCIpO1xyXG4gICAgICBidG5fY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICBzZWxmLmhpZGVNb2RhbCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBidG5fY2xvc2UgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtY2xvc2VcIik7XHJcbiAgICAgIGJ0bl9jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi5oaWRlTW9kYWwpO1xyXG5cclxuICAgICAgbGV0IHRhZ19pbnB1dCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfX3RhZ1wiKTtcclxuICAgICAgdGFnX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICBpZiAoZS5rZXkgPT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBERVBFTkRBTkNZIFRBR1MgQ1JFQVRFXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNlcnJvci1maWVsZF9fdGFnc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIG9wdGlvbnMub250YWdjcmVhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFnc19fbWF0Y2hcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYucHJldmlld0Zyb250Q292ZXIgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuaW5wdXRGcm9udCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX2Zyb250LWNvdmVyXCIpO1xyXG4gICAgICBzZWxmLnByZXZpZXdGcm9udCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbnQtY292ZXItcHJldmlld19faW1hZ2VcIik7XHJcbiAgICAgIHNlbGYucHJldmlld0Zyb250VGV4dCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbnQtY292ZXItcHJldmlld19fdGV4dFwiKTtcclxuICAgICAgc2VsZi5idG5Gcm9udENsZWFyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5mcm9udC1jb3Zlcl9fYnRuLWNsZWFyXCIpO1xyXG5cclxuICAgICAgc2VsZi5pbnB1dEZyb250LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBzZWxmLmZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICAgICBpZiAoc2VsZi5maWxlKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3RnJvbnRUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3RnJvbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBzZWxmLnByZXZpZXdGcm9udC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZi5maWxlKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3RnJvbnRUZXh0LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdGcm9udC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuYnRuRnJvbnRDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICBzZWxmLmlucHV0RnJvbnQudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdGcm9udFRleHQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld0Zyb250LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYucHJldmlld0hlYWRlckNvdmVyID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmlucHV0SGVhZGVyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9faGVhZGVyLWNvdmVyXCIpO1xyXG4gICAgICBzZWxmLnByZXZpZXdIZWFkZXIgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1jb3Zlci1wcmV2aWV3X19pbWFnZVwiKTtcclxuICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyVGV4dCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWNvdmVyLXByZXZpZXdfX3RleHRcIik7XHJcbiAgICAgIHNlbGYuYnRuSGVhZGVyQ2xlYXIgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1jb3Zlcl9fYnRuLWNsZWFyXCIpO1xyXG5cclxuICAgICAgc2VsZi5pbnB1dEhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgc2VsZi5maWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICAgaWYgKHNlbGYuZmlsZSkge1xyXG4gICAgICAgICAgICBzZWxmLnJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0hlYWRlclRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBzZWxmLnByZXZpZXdIZWFkZXIuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGYuZmlsZSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0hlYWRlclRleHQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbGYuYnRuSGVhZGVyQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgc2VsZi5pbnB1dEhlYWRlci52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld0hlYWRlclRleHQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmdldENTUkYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB0aGlzLmRhdGEuYXBwZW5kKFwidG9rZW5fbmFtZVwiLCBcInBvc3RcIik7XHJcbiAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImdldF90b2tlblwiKTtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHRoaXMuZGF0YSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5nZXRQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLnBvc3RfaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBcImJveF9fcG9zdFwiKS5nZXRBdHRyaWJ1dGUoXCJwb3N0XCIpO1xyXG4gICAgICBzZWxmLmRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgc2VsZi5kYXRhLmFwcGVuZChcInBvc3RfaWRcIiwgc2VsZi5wb3N0X2lkKTtcclxuICAgICAgc2VsZi51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZ2V0X3Bvc3RcIik7XHJcbiAgICAgIHJldHVybiBmZXRjaChzZWxmLnVybCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiBzZWxmLmRhdGEsXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkVmFsdWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X190aXRsZVwiKS52YWx1ZSA9IHNlbGYucG9zdF9kYXRhLnRpdGxlO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190ZXh0XCIpLnZhbHVlID0gc2VsZi5wb3N0X2RhdGEuYm9keTtcclxuXHJcbiAgICAgIHNlbGYucHJldmlld0Zyb250VGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHNlbGYucHJldmlld0Zyb250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNlbGYucHJldmlld0Zyb250LnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxmLnBvc3RfZGF0YS5mcm9udF9jb3Zlcl9saW5rKTtcclxuXHJcbiAgICAgIHNlbGYucHJldmlld0hlYWRlclRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBzZWxmLnByZXZpZXdIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxmLnBvc3RfZGF0YS5oZWFkZXJfY292ZXJfbGluayk7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogREVQRU5EQU5DWSBBREQgRVhJU1RJTkcgVEFHU1xyXG4gICAgICAgKi9cclxuICAgICAgb3B0aW9ucy5yZW5kZXJ0YWdzKHNlbGYucG9zdF9kYXRhLnRhZ3MpO1xyXG5cclxuICAgICAgc2VsZi5mb2xkZXIgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX192YWx1ZVwiKTtcclxuICAgICAgc2VsZi5mb2xkZXIuaW5uZXJIVE1MID0gc2VsZi5wb3N0X2RhdGEuZm9sZGVyLm5hbWU7XHJcbiAgICAgIHNlbGYuZm9sZGVyLnNldEF0dHJpYnV0ZShcImZvbGRlclwiLCBzZWxmLnBvc3RfZGF0YS5mb2xkZXIuZm9sZGVyX2lkKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYucHJlcGFyZUZldGNoID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fcG9zdC10eXBlXCIpO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICBsZXQgZm9sZGVyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fdmFsdWVcIikuZ2V0QXR0cmlidXRlKFwiZm9sZGVyXCIpO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFwicG9zdFtmb2xkZXJdXCIsIGZvbGRlcik7XHJcblxyXG4gICAgICBsZXQgdGFnc19zZWxlY3RlZCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFnc19fc2VsZWN0ZWRcIik7XHJcbiAgICAgIGxldCB0YWdzID0gdGFnc19zZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhZ1wiKTtcclxuICAgICAgbGV0IHRhZ19uYW1lcyA9IFtdO1xyXG4gICAgICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICBsZXQgdGFnX25hbWUgPSB0YWcucXVlcnlTZWxlY3RvcihcIi50YWdfX25hbWVcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICB0YWdfbmFtZXMucHVzaCh0YWdfbmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFwicG9zdFt0YWdzXVwiLCB0YWdfbmFtZXMpO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFxyXG4gICAgICAgICBcInBvc3RbaWRdXCIsXHJcbiAgICAgICAgIGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIFwiYm94X19wb3N0XCIpLmdldEF0dHJpYnV0ZShcInBvc3RcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiBzZWxmLmZldGNoX2JvZHk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmVkaXRQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJlZGl0X3Bvc3RcIik7XHJcbiAgICAgIHJldHVybiBmZXRjaChzZWxmLnVybCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiBzZWxmLmZldGNoX2JvZHksXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYudXBkYXRlRE9NID0gKCkgPT4ge1xyXG4gICAgICBpZiAoc2VsZi5yZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgIHNlbGYucG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwb3N0ID0gXCIke3NlbGYucmVzcG9uc2UucG9zdF9kYXRhLmlkfVwiXWApO1xyXG5cclxuICAgICAgICAgc2VsZi5wb3N0LmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgcG9zdC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9faW1nXCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxmLnJlc3BvbnNlLnBvc3RfZGF0YS5mcm9udF9jb3Zlcl9saW5rKTtcclxuXHJcbiAgICAgICAgICAgIHBvc3QucXVlcnlTZWxlY3RvcihcIi5ib2R5X190aXRsZVwiKS5pbm5lckhUTUwgPSBzZWxmLnJlc3BvbnNlLnBvc3RfZGF0YS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudGFnc19jb250YWluZXIgPSBwb3N0LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keV9fdGFnc1wiKTtcclxuICAgICAgICAgICAgc2VsZi50YWdzX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgc2VsZi50YWdzID0gc2VsZi5yZXNwb25zZS5wb3N0X2RhdGEudGFncztcclxuXHJcbiAgICAgICAgICAgIHNlbGYudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHRhZ19lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgIHRhZ19lbGVtZW50LnNldEF0dHJpYnV0ZShcInRhZ1wiLCB0YWcuaWQpO1xyXG4gICAgICAgICAgICAgICB0YWdfZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFnc19fdGFnXCIpO1xyXG4gICAgICAgICAgICAgICB0YWdfZWxlbWVudC5pbm5lckhUTUwgPSBgIyR7dGFnLm5hbWV9YDtcclxuICAgICAgICAgICAgICAgc2VsZi50YWdzX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdfZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCB8fCB0eXBlb2Ygb3ZlcmxheSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkpIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgIGlmIChzZWxmLml0ZW1fb3ZlcmxheSkgc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGVFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuZXJyb3JfZmllbGRzLmZvckVhY2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgIGVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5kaXNwbGF5RXJyb3JzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZXJyb3JzID0gW107XHJcblxyXG4gICAgICBzZWxmLnJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICBsZXQgc3RyXzEgPSBlcnJvci5jYXVzZS5wcm9wZXJ0eVBhdGgucmVwbGFjZShcImRhdGFcIiwgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIik7XHJcbiAgICAgICAgIGxldCBjYXVzZSA9IHN0cl8xLnJlcGxhY2UoLyheLipcXFt8XFxdLiokKS9nLCBcIlwiKTtcclxuICAgICAgICAgbGV0IGUgPSB7IGNhdXNlOiBjYXVzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG5cclxuICAgICAgICAgZXJyb3JzLnB1c2goZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgaWYgKHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCNlcnJvci1maWVsZF9fJHtlcnJvci5jYXVzZX1gKSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjZXJyb3ItZmllbGRfXyR7ZXJyb3IuY2F1c2V9YCkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItdGV4dF9fZXJyb3ItbXNnXCI+XHJcbiAgICAgICAgICAgICAke2Vycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmh0bWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBodG1sID0gYFxyXG4gICA8ZGl2IGNsYXNzPSdvdmVybGF5Jz48L2Rpdj5cclxuICAgPGRpdiBjbGFzcz0nbW9kYWxfX3dpbmRvdyAke29wdGlvbnMuc3R5bGVfY2xhc3N9Jz5cclxuICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheV9fbW9kYWwtaXRlbScgaWQ9XCIke29wdGlvbnMubW9kYWxfb3ZlcmxheX1cIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgPGg1IGNsYXNzPVwidGV4dF9fbW9kYWwtaGVhZGVyXCI+RWRpdCBQb3N0PC9oNT5cclxuICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgYnRuX19tb2RhbC1jbG9zZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2JvZHlcIj5cclxuICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtX19wb3N0LXR5cGVcIiBuYW1lPVwicG9zdFwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX3Jvd1wiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2Zyb250LWNvdmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9udC1jb3Zlcl9fbGFiZWxcIj5Gcm9udCBDb3ZlcjwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRfX2Zyb250LWNvdmVyXCIgY2xhc3M9XCJmcm9udC1jb3Zlcl9fYnRuLXVwbG9hZFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1pbWFnZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZyb250LWNvdmVyX19idG4tY2xlYXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbnQtY292ZXJfX2NvdmVyLXByZXZpZXdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJDb3ZlciBQcmV2aWV3XCIgY2xhc3M9XCJmcm9udC1jb3Zlci1wcmV2aWV3X19pbWFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyb250LWNvdmVyLXByZXZpZXdfX3RleHRcIj5QcmV2aWV3IEltYWdlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnB1dC1ncm91cF9faW5wdXQgaW5wdXRfX2Zyb250LWNvdmVyXCIgaWQ9XCJpbnB1dF9fZnJvbnQtY292ZXJcIiBuYW1lPVwicG9zdFtmcm9udF9jb3Zlcl1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWZpZWxkX19lcnJvci1tc2dcIiBpZD1cImVycm9yLWZpZWxkX19mcm9udF9jb3ZlclwiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cF9faGVhZGVyLWNvdmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY292ZXJfX2xhYmVsXCI+SGVhZGVyIENvdmVyPC9kaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dF9faGVhZGVyLWNvdmVyXCIgY2xhc3M9XCJoZWFkZXItY292ZXJfX2J0bi11cGxvYWRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaW1hZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY292ZXJfX2J0bi1jbGVhclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY292ZXJfX2NvdmVyLXByZXZpZXdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJDb3ZlciBQcmV2aWV3XCIgY2xhc3M9XCJoZWFkZXItY292ZXItcHJldmlld19faW1hZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItY292ZXItcHJldmlld19fdGV4dFwiPlByZXZpZXcgSW1hZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImlucHV0LWdyb3VwX19pbnB1dCBpbnB1dF9faGVhZGVyLWNvdmVyXCIgaWQ9XCJpbnB1dF9faGVhZGVyLWNvdmVyXCIgbmFtZT1cInBvc3RbaGVhZGVyX2NvdmVyXVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiIGlkPVwiZXJyb3ItZmllbGRfX2hlYWRlcl9jb3ZlclwiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+IFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBfX3RhZ3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3NfX2NyZWF0ZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dF9fdGFnXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3NfX3NlbGVjdGVkXCIgbmFtZT1cInBvc3RbdGFnc11cIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWZpZWxkX19lcnJvci1tc2dcIiBpZD1cImVycm9yLWZpZWxkX190YWdzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yb3dcIj4gXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9sZGVyXCI+Rm9sZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X19mb2xkZXJcIiBpZD1cImlucHV0X19mb2xkZXJcIiBuYW1lPVwicG9zdFtmb2xkZXJdXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1maWVsZF9fZXJyb3ItbXNnXCIgaWQ9XCJlcnJvci1maWVsZF9fZm9sZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yb3dcIj4gXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2lucHV0IGlucHV0X190aXRsZVwiIG5hbWU9XCJwb3N0W3RpdGxlXVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiIGlkPVwiZXJyb3ItZmllbGRfX3RpdGxlXCI+PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yb3dcIj4gXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYm9keVwiPlRleHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInBvc3RbYm9keV1cIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBjbGFzcz1cImlucHV0LWdyb3VwX19pbnB1dCBpbnB1dF9fdGV4dFwiIGlkPVwiaW5wdXRfX3RleHRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiIGlkPVwiZXJyb3ItZmllbGRfX2JvZHlcIj48L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicG9zdFtfdG9rZW5dXCIgdmFsdWU9XCJcIiBjbGFzcz1cImlucHV0X19jc3JmXCI+XHJcbiAgIDwvZm9ybT5cclxuXHJcbiAgIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPiAgICAgXHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX21vZGFsLXN1Ym1pdFwiPkVkaXQgUG9zdDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19tb2RhbC1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgPC9kaXY+XHJcbiAgIDwvZGl2PmA7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBzZWxmLnJlbmRlck1vZGFsKCk7XHJcbiAgICAgIHNlbGYuYWRkRXYoKTtcclxuICAgICAgc2VsZi5wcmV2aWV3RnJvbnRDb3ZlcigpO1xyXG4gICAgICBzZWxmLnByZXZpZXdIZWFkZXJDb3ZlcigpO1xyXG4gICAgICBzZWxmLnBvc3RfZGF0YSA9IGF3YWl0IHNlbGYuZ2V0UG9zdCgpO1xyXG4gICAgICBzZWxmLmFkZFZhbHVlcygpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0KCk7XHJcbiAgIHJldHVybiBzZWxmO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zZUxpc3Qob3B0aW9ucykge1xyXG4gICB0aGlzLnJlbmRlck1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgdGl0bGUgPSB0aGlzLmRhdGFfdGFyZ2V0ID09PSBcImxpa2VzXCIgPyBcIkxpa2VcIiA6IFwiRGlzbGlrZVwiO1xyXG4gICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHt0aGlzLnN0eWxlX2NsYXNzfSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHRfX21vZGFsLWhlYWRlclwiPiR7dGl0bGV9ICgke3RoaXMuZGF0YS5sZW5ndGh9KTwvaDU+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGJ0bl9fbW9kYWwtY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2JvZHlcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB2YXIgZWxlbSA9IHRoaXMuY29udGFpbmVyO1xyXG4gICAgICB0aGlzLmxpc3QgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2JvZHlcIik7XHJcbiAgICAgIHRoaXMuYm94ID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX193aW5kb3dcIik7XHJcblxyXG4gICAgICBodG1sID0gYGA7XHJcblxyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocHJvZmlsZSkgPT4ge1xyXG4gICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19pdGVtXCI+IFxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvZmlsZS5hdmF0YXJ9XCIgY2xhc3M9XCJpdGVtX19pbWdcIi8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke1JvdXRpbmcuZ2VuZXJhdGUoXCJwcm9maWxlX3BhZ2VcIiwgeyBwcm9maWxlOiBwcm9maWxlLmlkIH0pfVwiIGNsYXNzPVwiaXRlbV9fbmFtZVwiPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj4ke3Byb2ZpbGUuZmlyc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4+JHtwcm9maWxlLmxhc3RuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgYDtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1BSU4gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkpO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXlfYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJVEVNIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5pdGVtX292ZXJsYXlfYmc7XHJcbiAgICAgICAgIC8vIHRoaXMuaXRlbV9vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMucHJlcGFyZUZldGNoID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlkID0gaGVscGVyc1xyXG4gICAgICAgICAuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYXR0ci5jbGFzc25hbWUpXHJcbiAgICAgICAgIC5nZXRBdHRyaWJ1dGUob3B0aW9ucy5hdHRyLmF0dHIpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5LmFwcGVuZChcImlkXCIsIHRoaXMuaWQpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5mZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb21pc2UgPSBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKG9wdGlvbnMudXJsKSwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiB0aGlzLmZldGNoX2JvZHksXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgIGlmIChvdmVybGF5ICE9PSBudWxsIHx8IHR5cGVvZiBvdmVybGF5ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zZWNvbmRhcnlfb3ZlcmxheSkgdGhpcy5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgaWYgKHRoaXMuaXRlbV9vdmVybGF5KSB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBidG5fY2xvc2UgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtY2xvc2VcIik7XHJcbiAgICAgIGJ0bl9jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oaWRlTW9kYWwpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByZXBhcmVGZXRjaCgpO1xyXG4gICAgICB0aGlzLnJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaERhdGEob3B0aW9ucy50YXJnZXQpO1xyXG4gICAgICB0aGlzLmRhdGFfdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY291bnRlcl9fbGlrZXNcIikgPyBcImxpa2VzXCIgOiBcImRpc2xpa2VzXCI7XHJcblxyXG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGFfdGFyZ2V0ID09PSBcImxpa2VzXCIgPyB0aGlzLnJlc3BvbnNlLmxpa2VzX2Zyb20gOiB0aGlzLnJlc3BvbnNlLmRpc2xpa2VzX2Zyb207XHJcbiAgICAgIHRoaXMuc3R5bGVfY2xhc3MgPSBvcHRpb25zLnN0eWxlX2NsYXNzO1xyXG4gICAgICB0aGlzLmNiID0gb3B0aW9ucy5jYjtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyTW9kYWwoKTtcclxuICAgICAgdGhpcy5hZGRFdigpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0KCk7XHJcbiAgIHJldHVybiB0aGlzO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFnZ2VkUG9zdChvcHRpb25zKSB7XHJcbiAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgc2VsZi5yZW5kZXJNb2RhbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKTtcclxuICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5odG1sKCk7XHJcblxyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZSA9IG51bGw7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1BSU4gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkpO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXlfYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJVEVNIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5pdGVtX292ZXJsYXlfYmc7XHJcbiAgICAgICAgIHRoaXMuaXRlbV9vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9wdGlvbnMucmVuZGVyc29ydCgpO1xyXG4gICAgICBzZWxmLmRhdGEgPSBhd2FpdCBvcHRpb25zLnJlbmRlcnBhZ2luYXRlZCgpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRFdiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IGJ0bl9jbG9zZSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jbG9zZVwiKTtcclxuICAgICAgYnRuX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLmhpZGVNb2RhbCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgIGlmIChvdmVybGF5ICE9PSBudWxsIHx8IHR5cGVvZiBvdmVybGF5ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5odG1sID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHtvcHRpb25zLnN0eWxlX2NsYXNzfSc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXlfX21vZGFsLWl0ZW0nIGlkPVwiJHtvcHRpb25zLm1vZGFsX292ZXJsYXl9XCI+PC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxyXG4gICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0X19tb2RhbC1oZWFkZXJcIj48L2g1PlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBidG5fX21vZGFsLWNsb3NlXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYm9keVwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX2NvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3NvcnRcIiBpZD1cInNvcnRfX3RhZ1wiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X19wb3N0c1wiIGlkPVwiY29udGVudF9fdGFnXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj4gICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fcGFnaW5hdG9yXCIgaWQ9XCJ0YWdfX3BhZ2luYXRvclwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgYDtcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnNldEhlYWRlciA9ICgpID0+IHtcclxuICAgICAgc2VsZi5oZWFkZXIgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRleHRfX21vZGFsLWhlYWRlclwiKTtcclxuICAgICAgc2VsZi5oZWFkZXIuaW5uZXJIVE1MID0gYFBvc3RzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0X190YWdcIj4jJHtzZWxmLmRhdGEucGFnaW5hdGlvbl9kYXRhLnRhZy5uYW1lfTwvc3Bhbj5gO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBzZWxmLnJlbmRlck1vZGFsKCk7XHJcbiAgICAgIHNlbGYuYWRkRXYoKTtcclxuICAgICAgc2VsZi5zZXRIZWFkZXIoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCgpO1xyXG4gICByZXR1cm4gc2VsZjtcclxufVxyXG4iLCJjb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBwYWdpbmF0aW9uX3NldHRpbmdzXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb250YWluZXJfaWQg4oCTIHBhZ2luYXRpb24gcmVuZGVyIGNvbnRhaW5lclxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGFnZSDigJMgZGVmYXVsdCBcIjFcIlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc29ydCDigJMgZGVmYXVsdCBcImNyZWF0ZWRcIlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gcm91dGUg4oCTIHJvdXRlLm5hbWUgaXMgc3RyaW5nIGZvciBmZXRjaCBVUkwsXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLmRhdGEgaXMgb2JqZWN0IHdpdGggbWFuZGF0b3J5IGRhdGEgcmVxdWlyZWQgYnkgYmFja2VuZFxyXG4gKiBAbWV0aG9kIHtmdW5jdGlvbn0gY2FsbGJhY2sg4oCTIHJldHVybiBwYWdpbmF0ZWQgb2JqZWN0cyBkYXRhXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIGFkZFBhZ2luYXRpb24gZnVuY3Rpb24gcmVuZGVycyBwYWdpbmF0aW9uIGFuZCByZXR1cm5zIHByb21pc2Ugb2JqZWN0IHdpdGggcmVzcG9uc2UubWFpbl9kYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uX3NldHRpbmdzKSB7XHJcbiAgIHRoaXMucm91dGUgPSBwYWdpbmF0aW9uX3NldHRpbmdzLnJvdXRlO1xyXG4gICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2luYXRpb25fc2V0dGluZ3MuY29udGFpbmVyX2lkKTtcclxuICAgdGhpcy5jYiA9IHBhZ2luYXRpb25fc2V0dGluZ3MuY2I7XHJcbiAgIHRoaXMucHJvZmlsZV9pZCA9IHBhZ2luYXRpb25fc2V0dGluZ3MucHJvZmlsZV9pZDtcclxuXHJcbiAgIHRoaXMuaW5pdCA9IGFzeW5jIChwYWdpbmF0aW9uX3NldHRpbmdzKSA9PiB7XHJcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2luYXRpb25fc2V0dGluZ3MucGFnZTtcclxuICAgICAgdGhpcy5zb3J0X21ldGhvZCA9IHBhZ2luYXRpb25fc2V0dGluZ3Muc29ydF9tZXRob2Q7XHJcbiAgICAgIHRoaXMuZm9sZGVyX2lkID0gcGFnaW5hdGlvbl9zZXR0aW5ncy5mb2xkZXJfaWQ7XHJcbiAgICAgIHRoaXMudGFnX2lkID0gcGFnaW5hdGlvbl9zZXR0aW5ncy50YWdfaWQ7XHJcblxyXG4gICAgICBpZiAoIXRoaXMucGFnZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5yZXNwb25zZV9kYXRhID0gYXdhaXQgdGhpcy5nZXRQYWdlRGF0YSgpO1xyXG4gICAgICAgICB0aGlzLnBhZ2luYXRpb25fZGF0YSA9IHRoaXMucmVzcG9uc2VfZGF0YS5wYWdpbmF0aW9uX2RhdGE7XHJcbiAgICAgICAgIHRoaXMubWFpbl9kYXRhID0gdGhpcy5yZXNwb25zZV9kYXRhLm1haW5fZGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZ2V0UGFnZUNvdW50KCkgPT0gMCkge1xyXG4gICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgaWYgKHRoaXMuY2IpIHRoaXMuYWRkQ29udGVudCh0aGlzLmNiKTtcclxuXHJcbiAgICAgICAgIHJldHVybiB7IGF1dGhfZGF0YTogdGhpcy5yZXNwb25zZV9kYXRhLmF1dGhfZGF0YSB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnJlbmRlclBhZ2luYXRpb24oKTtcclxuICAgICAgICAgdGhpcy5kaXNwbGF5RG90cygpO1xyXG4gICAgICAgICB0aGlzLmFkZEV2KCk7XHJcbiAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICBpZiAodGhpcy5jYikgdGhpcy5hZGRDb250ZW50KHRoaXMuY2IpO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZV9kYXRhO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmdldFBhZ2VEYXRhID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBkYXRhLmFwcGVuZChcInBhZ2VcIiwgdGhpcy5wYWdlKTtcclxuICAgICAgZGF0YS5hcHBlbmQoXCJwcm9maWxlX2lkXCIsIHRoaXMucHJvZmlsZV9pZCk7XHJcbiAgICAgIGRhdGEuYXBwZW5kKFwiZm9sZGVyX2lkXCIsIHRoaXMuZm9sZGVyX2lkKTtcclxuICAgICAgZGF0YS5hcHBlbmQoXCJ0YWdfaWRcIiwgdGhpcy50YWdfaWQpO1xyXG4gICAgICBkYXRhLmFwcGVuZChcInNvcnRfbWV0aG9kXCIsIHRoaXMuc29ydF9tZXRob2QpO1xyXG4gICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSh0aGlzLnJvdXRlKTtcclxuXHJcbiAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZW5kZXJQYWdpbmF0aW9uID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImJveF9wYWdpbmF0aW9uXCI+ICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25fcGFuZWxcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uX2l0ZW0gcGFnaW5hdGlvbl9jb250cm9sXCIgaWQ9XCJidXR0b25fcHJldlwiPlByZXY8L3NwYW4+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25fcGFnZXNcIj5cclxuICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnaW5hdGlvbl9pdGVtIHBhZ2VfbnVtYmVyXCI+MTwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbl9pdGVtIHBhZ2luYXRpb25fY29udHJvbFwiIGlkPVwiYnV0dG9uX25leHRcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIGA7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICBsZXQgcGFnaW5hdGlvbl9wYWdlcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdGlvbl9wYWdlc1wiKTtcclxuICAgICAgbGV0IHBhZ2VfbnVtYmVyID0gXCJcIjtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgLSAxIDwgdGhpcy5nZXRQYWdlQ291bnQoKTsgaSsrKSB7XHJcbiAgICAgICAgIHBhZ2VfbnVtYmVyICs9IGA8bGkgY2xhc3M9XCJwYWdpbmF0aW9uX2l0ZW0gcGFnZV9udW1iZXJcIj4ke2l9PC9saT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHBhZ2luYXRpb25fcGFnZXMuaW5uZXJIVE1MID0gcGFnZV9udW1iZXI7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmdldFBhZ2VDb3VudCA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnBhZ2luYXRpb25fZGF0YS50b3RhbENvdW50IC8gdGhpcy5wYWdpbmF0aW9uX2RhdGEubnVtSXRlbXNQZXJQYWdlKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaGlkZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0UGFnZUNvdW50KCkgPD0gMSkge1xyXG4gICAgICAgICBpZiAodGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ib3hfcGFnaW5hdGlvblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJveF9wYWdpbmF0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmRpc3BsYXlEb3RzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2QnV0dG9uID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNidXR0b25fcHJldlwiKTtcclxuICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uX25leHRcIik7XHJcbiAgICAgIHZhciBwYWdlX251bWJlciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZV9udW1iZXJcIik7XHJcblxyXG4gICAgICBwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIDFdLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX2Rpc3BsYXlcIiwgXCJhY3RpdmVcIik7XHJcbiAgICAgIHBhZ2VfbnVtYmVyWzBdLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX2Rpc3BsYXlcIik7XHJcbiAgICAgIGhlbHBlcnMubGFzdChwYWdlX251bWJlcikuY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fZGlzcGxheVwiKTtcclxuXHJcbiAgICAgIGlmIChwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIDFdICE9IHBhZ2VfbnVtYmVyWzBdKSB7XHJcbiAgICAgICAgIHByZXZCdXR0b24uY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fZGlzcGxheVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGFnZV9udW1iZXJbdGhpcy5wYWdpbmF0aW9uX2RhdGEuY3VycmVudFBhZ2VOdW1iZXIgLSAxXSAhPSBoZWxwZXJzLmxhc3QocGFnZV9udW1iZXIpKSB7XHJcbiAgICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fZGlzcGxheVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgaWYgKHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gaV0pIHtcclxuICAgICAgICAgICAgcGFnZV9udW1iZXJbdGhpcy5wYWdpbmF0aW9uX2RhdGEuY3VycmVudFBhZ2VOdW1iZXIgLSBpXS5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGlvbl9kaXNwbGF5XCIpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAocGFnZV9udW1iZXJbdGhpcy5wYWdpbmF0aW9uX2RhdGEuY3VycmVudFBhZ2VOdW1iZXIgKyBpIC0gMV0pIHtcclxuICAgICAgICAgICAgcGFnZV9udW1iZXJbdGhpcy5wYWdpbmF0aW9uX2RhdGEuY3VycmVudFBhZ2VOdW1iZXIgKyBpIC0gMV0uY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fZGlzcGxheVwiKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKGkgPT0gMykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgIHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gaSAtIDFdICYmXHJcbiAgICAgICAgICAgICAgIHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gaSAtIDFdICE9IHBhZ2VfbnVtYmVyWzBdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICBwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIGkgLSAxXS5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGlvbl9kb3RzXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgIHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gMSArIGldICYmXHJcbiAgICAgICAgICAgICAgIHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gMSArIGldICE9IGhlbHBlcnMubGFzdChwYWdlX251bWJlcilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgIHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gMSArIGldLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX2RvdHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnBhZ2luYXRpb25Db250cm9sID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGxldCBwYWdlX251bWJlciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZV9udW1iZXJcIik7XHJcbiAgICAgIHZhciBjdXJyZW50UGFnZU51bWJlciA9IHBhZ2luYXRpb25fc2V0dGluZ3MuZ2V0UGFnZSgpO1xyXG5cclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlX251bWJlclwiKSkge1xyXG4gICAgICAgICBjdXJyZW50UGFnZU51bWJlciA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbl9zZXR0aW5ncy5zZXRQYWdlKGN1cnJlbnRQYWdlTnVtYmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT0gXCJidXR0b25fcHJldlwiICYmIGN1cnJlbnRQYWdlTnVtYmVyID4gMSkge1xyXG4gICAgICAgICBjdXJyZW50UGFnZU51bWJlci0tO1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbl9zZXR0aW5ncy5zZXRQYWdlKGN1cnJlbnRQYWdlTnVtYmVyKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT0gXCJidXR0b25fbmV4dFwiICYmIGN1cnJlbnRQYWdlTnVtYmVyIDwgcGFnZV9udW1iZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgIGN1cnJlbnRQYWdlTnVtYmVyKys7XHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uX3NldHRpbmdzLnNldFBhZ2UoY3VycmVudFBhZ2VOdW1iZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdfcGFnaW5hdGlvbiA9IHtcclxuICAgICAgICAgcGFnZTogcGFnaW5hdGlvbl9zZXR0aW5ncy5nZXRQYWdlKCksXHJcbiAgICAgICAgIGZvbGRlcl9pZDogcGFnaW5hdGlvbl9zZXR0aW5ncy5nZXRGb2xkZXIoKSxcclxuICAgICAgICAgdGFnX2lkOiBwYWdpbmF0aW9uX3NldHRpbmdzLmdldFRhZygpLFxyXG4gICAgICAgICBzb3J0X21ldGhvZDogcGFnaW5hdGlvbl9zZXR0aW5ncy5nZXRTb3J0TWV0aG9kKCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmluaXQobmV3X3BhZ2luYXRpb24pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRDb250ZW50ID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgICAgIGlmICh0aGlzLmNiKSBjYih0aGlzLnJlc3BvbnNlX2RhdGEpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgbGV0IHBhZ2luYXRpb25faXRlbSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnaW5hdGlvbl9pdGVtXCIpO1xyXG4gICAgICBwYWdpbmF0aW9uX2l0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnBhZ2luYXRpb25Db250cm9sKTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICByZXR1cm4gdGhpcy5pbml0KHBhZ2luYXRpb25fc2V0dGluZ3MpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWcobmFtZSkge1xyXG4gICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgdGFnLmNsYXNzTGlzdC5hZGQoXCJ0YWdcIik7XHJcblxyXG4gICBsZXQgaG10bCA9IGBcclxuICAgPHNwYW4gY2xhc3M9XCJ0YWdfX25hbWVcIj4ke25hbWV9PC9zcGFuPlxyXG4gICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyB0YWdfX3JlbW92ZVwiPjwvaT5cclxuICAgYDtcclxuXHJcbiAgIHRhZy5pbm5lckhUTUwgPSBobXRsO1xyXG4gICB0YWcucXVlcnlTZWxlY3RvcihcIi50YWdfX3JlbW92ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgcmVtb3ZlVGFnKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiB0YWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYWcodGFnKSB7XHJcbiAgIGxldCB0YWdzX3NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWdzX19zZWxlY3RlZFwiKTtcclxuICAgdGFnc19zZWxlY3RlZC5hcHBlbmRDaGlsZCh0YWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFnKHRhZykge1xyXG4gICBsZXQgdGFnc19zZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFnc19fc2VsZWN0ZWRcIik7XHJcbiAgIHRhZ3Nfc2VsZWN0ZWQucmVtb3ZlQ2hpbGQodGFnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhZ3MoKSB7XHJcbiAgIGxldCB0YWdzX3NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWdzX19zZWxlY3RlZFwiKTtcclxuICAgbGV0IHRhZ3MgPSB0YWdzX3NlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFnXCIpO1xyXG5cclxuICAgbGV0IG5hbWVzID0gW107XHJcbiAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIGxldCB0YWdfbmFtZSA9IHRhZy5xdWVyeVNlbGVjdG9yKFwiLnRhZ19fbmFtZVwiKS5pbm5lckhUTUw7XHJcbiAgICAgIG5hbWVzLnB1c2godGFnX25hbWUpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiBuYW1lcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhZ3Mob3B0aW9ucykge1xyXG4gICB0aGlzLnRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMudGFnKTtcclxuXHJcbiAgIHRoaXMudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgaGVscGVycy50aHJvdHRsZSgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0LCBcImJvZHlfX25hbWVcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgfSk7XHJcblxyXG4gICB0aGlzLnJlbW92ZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgIGlmICh0YWcgPT0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib3hfX3RhZ1wiKSkgcmV0dXJuO1xyXG4gICAgICAgICBlbHNlIHRhZy5jbGFzc0xpc3QucmVtb3ZlKFwidGFnX19hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRDbGFzcyA9ICgpID0+IHtcclxuICAgICAgaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib3hfX3RhZ1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwidGFnX19hY3RpdmVcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmdldEN1cnJlbnRUYWcgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBjdXJyZW50X3RhZyA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGhpcy50YXJnZXQsIFwiYm94X190YWdcIikuZ2V0QXR0cmlidXRlKFwidGFnXCIpO1xyXG4gICAgICByZXR1cm4gY3VycmVudF90YWc7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnNldFRhZyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNfdGFnID09IHRoaXMuY3VycmVudF90YWcpIHtcclxuICAgICAgICAgdGhpcy50YWcgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnRhZyA9IHRoaXMuY3VycmVudF90YWc7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50X3RhZyA9IHRoaXMuZ2V0Q3VycmVudFRhZygpO1xyXG4gICAgICB0aGlzLnByZXZpb3VzX3RhZyA9IG9wdGlvbnMuZ2V0VGFnKCk7XHJcbiAgICAgIHRoaXMuc2V0VGFnKCk7XHJcblxyXG4gICAgICBvcHRpb25zLnNldFRhZyh0aGlzLnRhZyk7XHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XHJcbiAgICAgIHRoaXMuYWRkQ2xhc3MoKTtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKHRoaXMudGFnLCB0aGlzLm5hbWUpO1xyXG4gICB9O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2xkZXIoZm9sZGVyLCBmb2xkZXJfYWN0aXZlLCB1c2VyKSB7XHJcbiAgIGxldCBib3hfX2ZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIGJveF9fZm9sZGVyLmNsYXNzTGlzdC5hZGQoXCJib3hfX2ZvbGRlclwiKTtcclxuICAgYm94X19mb2xkZXIuc2V0QXR0cmlidXRlKFwiZm9sZGVyXCIsIGZvbGRlci5mb2xkZXJfaWQpO1xyXG5cclxuICAgbGV0IGh0bWwgPSBgXHJcbiAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19mb2xkZXJcIj48L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duX19mb2xkZXJcIiBpZD1cImRyb3Bkb3duX19mb2xkZXItJHtmb2xkZXIuZm9sZGVyX2lkfVwiPjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwiZm9sZGVyX19pdGVtXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9sZGVyX19sZWZ0LXN0cmlwXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb2xkZXJfX2NvbnRlbnRcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvbGRlcl9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLWggZHJvcGRvd25fX3RyaWdnZXIgZm9sZGVyX19pY29uXCIgaWQ9XCJkcm9wZG93bl9fZm9sZGVyLXRyaWdnZXItJHtcclxuICAgICAgICAgICAgICAgZm9sZGVyLmZvbGRlcl9pZFxyXG4gICAgICAgICAgICB9XCI+PC9pPiAgIFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvbGRlcl9fYm9keVwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fbmFtZVwiPiR7Zm9sZGVyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5X19jcmVhdGVkLWF0XCI+JHtoZWxwZXJzLnRpbWVBZ28oZm9sZGVyLmNyZWF0ZWRfYXQpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+IFxyXG4gICA8L2Rpdj5cclxuICAgYDtcclxuXHJcbiAgIGJveF9fZm9sZGVyLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgIGxldCBmb2xkZXJfX2l0ZW0gPSBib3hfX2ZvbGRlci5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlcl9faXRlbVwiKTtcclxuXHJcbiAgIGxldCBkZCA9IGJveF9fZm9sZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2ZvbGRlclwiKTtcclxuICAgbGV0IGljb24gPSBib3hfX2ZvbGRlci5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlcl9faWNvblwiKTtcclxuICAgaWYgKGZvbGRlci5hdXRob3IuaWQgIT09IHVzZXIuaWQpIHtcclxuICAgICAgaWNvbi5yZW1vdmUoKTtcclxuICAgICAgZGQucmVtb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIGxldCBhY3RpdmUgPSBmb2xkZXIuZm9sZGVyX2lkID09IGZvbGRlcl9hY3RpdmUgPyBcImZvbGRlcl9fYWN0aXZlXCIgOiBudWxsO1xyXG4gICBpZiAoYWN0aXZlKSBmb2xkZXJfX2l0ZW0uY2xhc3NMaXN0LmFkZChhY3RpdmUpO1xyXG5cclxuICAgcmV0dXJuIGJveF9fZm9sZGVyO1xyXG59XHJcblxyXG4vKiA8ZGl2IGNsYXNzPVwiZHJvcGRvd25fX2ZvbGRlclwiIGlkPVwiZHJvcGRvd25fX2ZvbGRlci0ke2ZvbGRlci5mb2xkZXJfaWR9XCI+PC9kaXY+ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRm9sZGVyKGVsZW1lbnQpIHtcclxuICAgbGV0IGZvbGRlcnNfX2ZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRfX2ZvbGRlcnNcIik7XHJcbiAgIGZvbGRlcnNfX2ZvbGRlcnMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGb2xkZXIoZWxlbWVudCkge1xyXG4gICBsZXQgZm9sZGVyc19fZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudF9fZm9sZGVyc1wiKTtcclxuICAgZm9sZGVyc19fZm9sZGVycy5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvbGRlcnMob3B0aW9ucykge1xyXG4gICBsZXQgZm9sZGVyX2FjdGl2ZSA9IG9wdGlvbnMuZ2V0Rm9sZGVyKCk7XHJcbiAgIGxldCBmb2xkZXJzX19mb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19mb2xkZXJzXCIpO1xyXG4gICBsZXQgdXNlciA9IG9wdGlvbnMuZ2V0VXNlcigpO1xyXG5cclxuICAgZm9sZGVyc19fZm9sZGVycy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICBvcHRpb25zLmRhdGEuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XHJcbiAgICAgIGFkZEZvbGRlcihnZXRGb2xkZXIoZm9sZGVyLCBmb2xkZXJfYWN0aXZlLCB1c2VyKSk7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUZvbGRlcihlbGVtZW50KSB7XHJcbiAgIGxldCBmb2xkZXJzX19mb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19mb2xkZXJzXCIpO1xyXG4gICBmb2xkZXJzX19mb2xkZXJzLnJlcGxhY2VXaXRoKGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9Db250ZW50KGNvbnRhaW5lciwgdGV4dCkge1xyXG4gICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRfX25vLWNvbnRlbnRcIik7XHJcbiAgIGxldCBodG1sID0gYFxyXG4gICA8ZGl2IGNsYXNzPVwidGV4dF9fbm8tY29udGVudFwiPiR7dGV4dH08L2Rpdj5cclxuICAgYDtcclxuICAgZWxlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICBsZXQgY29udGVudF9fZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudF9fZm9sZGVyc1wiKTtcclxuICAgY29udGVudF9fZm9sZGVycy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICBjb250ZW50X19mb2xkZXJzLmFwcGVuZENoaWxkKGVsZW0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdChkYXRhLCBvcHRpb25zKSB7XHJcbiAgIGxldCBodG1sID0gYFxyXG4gICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9fcG9zdFwiPjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25fX3Bvc3RcIiBpZD1cIiR7b3B0aW9ucy5kcm9wZG93bl9jb250YWluZXJfaWR9LSR7ZGF0YS5pZH1cIj48L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cInBvc3QtaXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdF9faGVhZGVyXCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX3N0cmlwXCI+PC9kaXY+XHJcbiAgICAgICAgIDxpbWcgc3JjPVwiJHtcclxuICAgICAgICAgICAgZGF0YS5mcm9udF9jb3Zlcl9saW5rID8gZGF0YS5mcm9udF9jb3Zlcl9saW5rIDogXCIvdXBsb2Fkcy9kZWZhdWx0cy9ub2ltYWdlLmpwZ1wiXHJcbiAgICAgICAgIH1cIiBhbHQ9XCJcIiBjbGFzcz1cImhlYWRlcl9faW1nXCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RfX2JvZHlcIj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib2R5X19yb3dcIj5cclxuICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtaCBkcm9wZG93bl9fdHJpZ2dlciBwb3N0X19pY29uXCIgaWQ9XCIke29wdGlvbnMuZHJvcGRvd25fdHJpZ2dlcl9pZH0tJHtkYXRhLmlkfVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fcm93XCI+XHJcbiAgICAgICAgIDxhIGhyZWY9XCIke1JvdXRpbmcuZ2VuZXJhdGUoXCJyZWFkX3Bvc3RcIiwge1xyXG4gICAgICAgICAgICBwcm9maWxlOiBkYXRhLmF1dGhvci5pZCxcclxuICAgICAgICAgICAgcG9zdDogZGF0YS5pZCxcclxuICAgICAgICAgfSl9XCIgY2xhc3M9XCJib2R5X190aXRsZVwiPiR7ZGF0YS50aXRsZX08L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImJvZHlfX3Jvd1wiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicm93X19jb2x1bW5cIj4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fY3JlYXRlZC1hdFwiPiR7aGVscGVycy50aW1lQWdvKGRhdGEuY3JlYXRlZF9hdCl9PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicm93X19jb2x1bW5cIj4gICBcclxuICAgICAgICAgICAgPHNwYW4+Ynk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYm9keV9fYXV0aG9yXCIgaHJlZj1cIiR7Um91dGluZy5nZW5lcmF0ZShcInByb2ZpbGVfcGFnZVwiLCB7IHByb2ZpbGU6IGRhdGEuYXV0aG9yLmlkIH0pfVwiPiR7XHJcbiAgICAgIGRhdGEuYXV0aG9yLmZpcnN0bmFtZVxyXG4gICB9PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5X190YWdzXCI+PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RfX2Zvb3RlclwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy11cCB0b29nbGVfbGlrZXNcIiBzdGF0ZT1cIiR7ZGF0YS5zdGF0ZX1cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJpZ2dlcl9fbW9kYWwgY291bnRlcl9fbGlrZXNcIj4oJHtkYXRhLmxpa2VzfSk8L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRodW1icy1kb3duIHRvb2dsZV9saWtlc1wiIHN0YXRlPVwiJHtkYXRhLnN0YXRlfVwiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmlnZ2VyX19tb2RhbCBjb3VudGVyX19kaXNsaWtlc1wiPigke2RhdGEuZGlzbGlrZXN9KTwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvdW50ZXIgY29tbWVudHNfX2NvdW50ZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY29tbWVudFwiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cmlnZ2VyX19jb21tZW50cy1tb2RhbFwiPigke2RhdGEuY29tbWVudHN9KTwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgYDtcclxuXHJcbiAgIGNvbnN0IGJveF9wb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgYm94X3Bvc3QuY2xhc3NMaXN0LmFkZChcImJveF9fcG9zdFwiKTtcclxuICAgYm94X3Bvc3Quc2V0QXR0cmlidXRlKFwicG9zdFwiLCBkYXRhLmlkKTtcclxuICAgYm94X3Bvc3QuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgIGNvbnN0IGJveF90YWdzID0gYm94X3Bvc3QucXVlcnlTZWxlY3RvcihcIi5ib2R5X190YWdzXCIpO1xyXG5cclxuICAgYWRkUG9zdFRhZ3MoYm94X3RhZ3MsIGRhdGEudGFncyk7XHJcbiAgIGFkZEF0dHJpYnV0ZXMoYm94X3Bvc3QsIGRhdGEpO1xyXG5cclxuICAgbGV0IHVzZXIgPSBvcHRpb25zLmdldFVzZXIoKTtcclxuICAgbGV0IGRkID0gYm94X3Bvc3QucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fcG9zdFwiKTtcclxuICAgbGV0IGljb24gPSBib3hfcG9zdC5xdWVyeVNlbGVjdG9yKFwiLnBvc3RfX2ljb25cIik7XHJcblxyXG4gICBpZiAoZGF0YS5hdXRob3IuaWQgIT09IHVzZXIuaWQpIHtcclxuICAgICAgaWNvbi5yZW1vdmUoKTtcclxuICAgICAgZGQucmVtb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBib3hfcG9zdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvc3QocG9zdCwgY29udGFpbmVyKSB7XHJcbiAgIGxldCBwb3N0c19fcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XHJcbiAgIHBvc3RzX19wb3N0cy5hcHBlbmRDaGlsZChwb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvc3RzKG9wdGlvbnMpIHtcclxuICAgbGV0IHBvc3RzX19wb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpO1xyXG4gICBwb3N0c19fcG9zdHMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgb3B0aW9ucy5kYXRhLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgYWRkUG9zdChnZXRQb3N0KHBvc3QsIG9wdGlvbnMpLCBvcHRpb25zLmNvbnRhaW5lcik7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9zdFRhZ3MoY29udGFpbmVyLCB0YWdzKSB7XHJcbiAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQb3N0VGFnKHRhZykpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvc3RUYWcodGFnKSB7XHJcbiAgIGxldCB0YWdfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICB0YWdfZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YWdcIiwgdGFnLmlkKTtcclxuICAgdGFnX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhZ3NfX3RhZ1wiKTtcclxuICAgdGFnX2VsZW1lbnQuaW5uZXJIVE1MID0gYCMke3RhZy5uYW1lfWA7XHJcbiAgIHJldHVybiB0YWdfZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qb3N0KHJlcykge1xyXG4gICBsZXQgYm94X19wb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgYm94X19wb3N0LmNsYXNzTGlzdC5hZGQoXCJib3hfX3Bvc3RcIik7XHJcbiAgIGJveF9fcG9zdC5zZXRBdHRyaWJ1dGUoXCJwb3N0XCIsIHJlcy5pZCk7XHJcblxyXG4gICBsZXQgaHRtbCA9IGBcclxuICAgPGRpdiBjbGFzcz1cInBvc3RfX3RpdGxlXCI+JHtyZXMudGl0bGV9PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9XCJwb3N0X19jcmVhdGVkLWF0XCI+JHtoZWxwZXJzLnRpbWVBZ28ocmVzLmNyZWF0ZWRfYXQpfTwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwicG9zdF9fYm9keVwiPiR7cmVzLmJvZHl9PC9kaXY+XHJcbiAgIGA7XHJcblxyXG4gICBib3hfX3Bvc3QuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgIHJldHVybiBib3hfX3Bvc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRE9NKGVsZW1lbnQpIHtcclxuICAgbGV0IGJveF9wcm9maWxlX2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fcHJvZmlsZS1jb250ZW50XCIpO1xyXG4gICBib3hfcHJvZmlsZV9jb250ZW50LnJlcGxhY2VXaXRoKGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQXR0cmlidXRlcyhjb250YWluZXIsIGRhdGEpIHtcclxuICAgbGV0IGxpa2VfaWNvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZhLXRodW1icy11cFwiKTtcclxuICAgbGV0IGRpc2xpa2VfaWNvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZhLXRodW1icy1kb3duXCIpO1xyXG4gICBpZiAoZGF0YS5zdGF0ZSA9PSBcIm5ldXRyYWxcIikge1xyXG4gICAgICBsaWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJuZXV0cmFsXCIpO1xyXG4gICAgICBkaXNsaWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJuZXV0cmFsXCIpO1xyXG4gICB9IGVsc2UgaWYgKGRhdGEuc3RhdGUgPT0gXCJsaWtlZFwiKSB7XHJcbiAgICAgIGxpa2VfaWNvbi5jbGFzc0xpc3QuYWRkKFwic3RhdGVfX2FjdGl2ZVwiKTtcclxuICAgICAgbGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwibGlrZWRcIik7XHJcblxyXG4gICAgICBkaXNsaWtlX2ljb24uY2xhc3NMaXN0LmFkZChcInN0YXRlX19kaXNhYmxlZFwiKTtcclxuICAgICAgZGlzbGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwibGlrZWRcIik7XHJcbiAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0ZSA9PSBcImRpc2xpa2VkXCIpIHtcclxuICAgICAgZGlzbGlrZV9pY29uLmNsYXNzTGlzdC5hZGQoXCJzdGF0ZV9fYWN0aXZlXCIpO1xyXG4gICAgICBkaXNsaWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJkaXNsaWtlZFwiKTtcclxuXHJcbiAgICAgIGxpa2VfaWNvbi5jbGFzc0xpc3QuYWRkKFwic3RhdGVfX2Rpc2FibGVkXCIpO1xyXG4gICAgICBsaWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJkaXNsaWtlZFwiKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9Db250ZW50KGNvbnRhaW5lciwgdGV4dCkge1xyXG4gICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRfX25vLWNvbnRlbnRcIik7XHJcbiAgIGxldCBodG1sID0gYFxyXG4gICA8ZGl2IGNsYXNzPVwidGV4dF9fbm8tY29udGVudFwiPiR7dGV4dH08L2Rpdj5cclxuICAgYDtcclxuICAgZWxlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICBsZXQgY29udGVudF9fcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XHJcbiAgIGNvbnRlbnRfX3Bvc3RzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgIGNvbnRlbnRfX3Bvc3RzLmFwcGVuZENoaWxkKGVsZW0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnKHRhZykge1xyXG4gICBsZXQgYm94X190YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICBib3hfX3RhZy5jbGFzc0xpc3QuYWRkKFwiYm94X190YWdcIik7XHJcbiAgIGJveF9fdGFnLnNldEF0dHJpYnV0ZShcInRhZ1wiLCB0YWcuaWQpO1xyXG4gICBsZXQgaHRtbCA9IGBcclxuICAgXHJcbiAgIDxkaXYgY2xhc3M9XCJ0YWdfX2l0ZW1cIj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWdfX2xlZnQtc3RyaXBcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhZ19fY29udGVudFwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fbmFtZVwiPiMke3RhZy5uYW1lfTwvZGl2PlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgIDwvZGl2PiBcclxuICAgYDtcclxuICAgYm94X190YWcuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgcmV0dXJuIGJveF9fdGFnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFnKGVsZW1lbnQpIHtcclxuICAgbGV0IGNvbnRlbnRfX3RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRfX3RhZ3NcIik7XHJcbiAgIGNvbnRlbnRfX3RhZ3MuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYWdzKHRhZ3MpIHtcclxuICAgbGV0IGNvbnRlbnRfX3RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRfX3RhZ3NcIik7XHJcbiAgIGNvbnRlbnRfX3RhZ3MuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgYWRkVGFnKGdldFRhZyh0YWcpKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub0NvbnRlbnQoY29udGFpbmVyLCB0ZXh0KSB7XHJcbiAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiY29udGVudF9fbm8tY29udGVudFwiKTtcclxuICAgbGV0IGh0bWwgPSBgXHJcbiAgIDxkaXYgY2xhc3M9XCJ0ZXh0X19uby1jb250ZW50XCI+JHt0ZXh0fTwvZGl2PlxyXG4gICBgO1xyXG4gICBlbGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgIGxldCBjb250ZW50X190YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50X190YWdzXCIpO1xyXG4gICBjb250ZW50X190YWdzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgIGNvbnRlbnRfX3RhZ3MuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgRE9NIGZyb20gXCIuL2VkaXRET00vX2ZvbGRlclwiO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL2hlbHBlcnNcIjtcclxuaW1wb3J0ICogYXMgYWNjb3JkaW9uIGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uXCI7XHJcblxyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKGZvbGRlcl9uYW1lLCBwcm9maWxlX2lkKSB7XHJcbi8vICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbi8vICAgIGRhdGEuYXBwZW5kKFwiZm9sZGVyX25hbWVcIiwgZm9sZGVyX25hbWUpO1xyXG4vLyAgICBkYXRhLmFwcGVuZChcInByb2ZpbGVfaWRcIiwgcHJvZmlsZV9pZCk7XHJcbi8vICAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiY3JlYXRlX2ZvbGRlclwiKTtcclxuLy8gICAgbGV0IHByb21pc2UgPSBmZXRjaCh1cmwsIHtcclxuLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuLy8gICAgICAgYm9keTogZGF0YSxcclxuLy8gICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICB9KS50aGVuKChyZXMpID0+IHtcclxuLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbi8vICAgIH0pO1xyXG4vLyAgICByZXR1cm4gcHJvbWlzZTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZvbGRlcih0YXJnZXQpIHtcclxuICAgbGV0IGZvbGRlcl9pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGFyZ2V0LCBcImJveF9fZm9sZGVyXCIpLmdldEF0dHJpYnV0ZShcImZvbGRlclwiKTtcclxuICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgZGF0YS5hcHBlbmQoXCJmb2xkZXJfaWRcIiwgZm9sZGVyX2lkKTtcclxuICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJkZWxldGVfZm9sZGVyXCIpO1xyXG4gICBsZXQgcHJvbWlzZSA9IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBkYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgIH0sXHJcbiAgIH0pO1xyXG5cclxuICAgcmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5hbWVGb2xkZXIodGFyZ2V0LCBmb2xkZXJfbmFtZSkge1xyXG4gICBsZXQgZm9sZGVyX2lkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0YXJnZXQsIFwiYm94X19mb2xkZXJcIikuZ2V0QXR0cmlidXRlKFwiZm9sZGVyXCIpO1xyXG4gICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICBkYXRhLmFwcGVuZChcImZvbGRlcl9pZFwiLCBmb2xkZXJfaWQpO1xyXG4gICBkYXRhLmFwcGVuZChcImZvbGRlcl9uYW1lXCIsIGZvbGRlcl9uYW1lKTtcclxuICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJyZW5hbWVfZm9sZGVyXCIpO1xyXG4gICBsZXQgcHJvbWlzZSA9IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBkYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgIH0sXHJcbiAgIH0pO1xyXG5cclxuICAgcmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2xkZXJzTmFtZXMoKSB7XHJcbiAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZ2V0X2ZvbGRlcnNcIik7XHJcbiAgIGxldCBwcm9taXNlID0gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICB9LFxyXG4gICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgIGxldCBmb2xkZXJzID0gW107XHJcbiAgICAgICAgIHJlcy5mb3JFYWNoKChmb2xkZXIpID0+IHtcclxuICAgICAgICAgICAgZm9sZGVycy5wdXNoKFtmb2xkZXIubmFtZSwgZm9sZGVyLmZvbGRlcl9pZF0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgcmV0dXJuIGZvbGRlcnM7XHJcbiAgICAgIH0pO1xyXG4gICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZvbGRlcnMob3B0aW9ucykge1xyXG4gICB0aGlzLmZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuZm9sZGVyKTtcclxuXHJcbiAgIHRoaXMuZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcclxuICAgICAgZm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgaGVscGVycy50aHJvdHRsZSgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlfX25hbWVcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgfSk7XHJcblxyXG4gICB0aGlzLnJlbW92ZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XHJcbiAgICAgICAgIGlmIChmb2xkZXIgPT0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJmb2xkZXJfX2l0ZW1cIikpIHJldHVybjtcclxuICAgICAgICAgZWxzZSBmb2xkZXIuY2xhc3NMaXN0LnJlbW92ZShcImZvbGRlcl9fYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICAgIGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGhpcy50YXJnZXQsIFwiZm9sZGVyX19pdGVtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJmb2xkZXJfX2FjdGl2ZVwiKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuZ2V0Q3VycmVudEZvbGRlciA9ICgpID0+IHtcclxuICAgICAgbGV0IGN1cnJlbnRfZm9sZGVyID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib3hfX2ZvbGRlclwiKS5nZXRBdHRyaWJ1dGUoXCJmb2xkZXJcIik7XHJcbiAgICAgIHJldHVybiBjdXJyZW50X2ZvbGRlcjtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuc2V0Rm9sZGVyID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c19mb2xkZXIgPT0gdGhpcy5jdXJyZW50X2ZvbGRlcikge1xyXG4gICAgICAgICB0aGlzLmZvbGRlciA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuZm9sZGVyID0gdGhpcy5jdXJyZW50X2ZvbGRlcjtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRfZm9sZGVyID0gdGhpcy5nZXRDdXJyZW50Rm9sZGVyKCk7XHJcbiAgICAgIHRoaXMucHJldmlvdXNfZm9sZGVyID0gb3B0aW9ucy5nZXRGb2xkZXIoKTtcclxuICAgICAgdGhpcy5zZXRGb2xkZXIoKTtcclxuXHJcbiAgICAgIG9wdGlvbnMuc2V0Rm9sZGVyKHRoaXMuZm9sZGVyKTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoKTtcclxuICAgICAgdGhpcy5hZGRDbGFzcygpO1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IodGhpcy5mb2xkZXIsIHRoaXMubmFtZSk7XHJcbiAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGb2xkZXJzTGlzdChvcHRpb25zKSB7XHJcbiAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX2ZvbGRlclwiKS5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19pdGVtc1wiKTtcclxuICAgaXRlbXMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgIG9wdGlvbnMuZGF0YS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgIGxldCBkZF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25fX2l0ZW1cIik7XHJcbiAgICAgIGxldCBkZF9pdGVtX2F0dHIgPSBvcHRpb25zLmF0dHIgPyBvcHRpb25zLmF0dHIgOiBudWxsO1xyXG4gICAgICBpZiAoZGRfaXRlbV9hdHRyICYmIGVsZW1bMV0pIGRkX2l0ZW0uc2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0ciwgZWxlbVsxXSk7XHJcbiAgICAgIGRkX2l0ZW0uc2V0QXR0cmlidXRlKFwib25tb3VzZWRvd25cIiwgXCJ2YXIgc2VsZj1nZXRkZHYodGhpcyk7c2VsZi5jbGlja2VkKHRoaXMpXCIpO1xyXG5cclxuICAgICAgZGRfaXRlbS5pbm5lckhUTUwgPSBlbGVtWzBdO1xyXG4gICAgICBpdGVtcy5wcmVwZW5kKGRkX2l0ZW0pO1xyXG4gICB9KTtcclxuXHJcbiAgIGlmIChvcHRpb25zLmJvdHRvbV9pdGVtKSB7XHJcbiAgICAgIGxldCBkZF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25fX2l0ZW1cIiwgXCJpdGVtX19ib3R0b21cIik7XHJcbiAgICAgIGRkX2l0ZW0uc2V0QXR0cmlidXRlKFwib25tb3VzZWRvd25cIiwgXCJ2YXIgc2VsZj1nZXRkZHYodGhpcyk7c2VsZi5jbGlja2VkKHRoaXMpXCIpO1xyXG5cclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke29wdGlvbnMuYm90dG9tX2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICBkZF9pdGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGRkX2l0ZW0pO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgdGFncyBmcm9tIFwiLi9jb21wb25lbnRzL3RhZ3NcIjtcclxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5cclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5jb25zdCBhdXRvQ29tcGxldGUgPSByZXF1aXJlKFwiQHRhcmVrcmFhZmF0L2F1dG9jb21wbGV0ZS5qcy9kaXN0L2pzL2F1dG9Db21wbGV0ZVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBdXRvQ29tcGxldGUoKSB7XHJcbiAgIG5ldyBhdXRvQ29tcGxldGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgIHNyYzogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfX3RhZ1wiKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgZmV0Y2goUm91dGluZy5nZW5lcmF0ZShcImZpbmRfdGFnc1wiLCB7IHF1ZXJ5OiBxdWVyeSB9KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzb3VyY2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEudGFncztcclxuICAgICAgICAgfSxcclxuICAgICAgICAga2V5OiBbXCJuYW1lXCJdLFxyXG4gICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlSG9sZGVyOiBcIkVudGVyIFRhZ1wiLFxyXG4gICAgICBzZWxlY3RvcjogXCIjaW5wdXRfX3RhZ1wiLFxyXG4gICAgICB0aHJlc2hvbGQ6IDEsXHJcbiAgICAgIGRlYm91bmNlOiAzMDAsXHJcbiAgICAgIC8vIHNlYXJjaEVuZ2luZTogXCJzdHJpY3RcIixcclxuICAgICAgcmVzdWx0c0xpc3Q6IHtcclxuICAgICAgICAgcmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICBjb250YWluZXI6IChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFnc19fbWF0Y2hcIik7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGRlc3RpbmF0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIiksXHJcbiAgICAgICAgIHBvc2l0aW9uOiBcImFmdGVyZW5kXCIsXHJcbiAgICAgICAgIGVsZW1lbnQ6IFwiZGl2XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgcmVzdWx0SXRlbToge1xyXG4gICAgICAgICBjb250ZW50OiAoZGF0YSwgc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5pbm5lckhUTUwgPSBkYXRhLm1hdGNoO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBlbGVtZW50OiBcImRpdlwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbm9SZXN1bHRzOiAoKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT5gO1xyXG4gICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub19yZXN1bHRcIik7XHJcbiAgICAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjFcIik7XHJcbiAgICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBcIkNyZWF0ZSBuZXcgdGFnIFwiO1xyXG4gICAgICAgICByZXN1bHQuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFnc19fbWF0Y2hcIikuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuXHJcbiAgICAgICAgIHJlc3VsdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHRhZ3MuYWRkVGFnKHRhZ3MuY3JlYXRlVGFnKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfX3RhZ1wiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFnc19fbWF0Y2hcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2VsZWN0aW9uOiAoZmVlZGJhY2spID0+IHtcclxuICAgICAgICAgdGFncy5hZGRUYWcodGFncy5jcmVhdGVUYWcoZmVlZGJhY2suc2VsZWN0aW9uLm1hdGNoKSk7XHJcbiAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfX3RhZ1wiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0sXHJcbiAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQmFyKG9wdGlvbnMpIHtcclxuICAgdGhpcy5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpO1xyXG4gICAgICB0aGlzLnJlc3VsdHNMaXN0KCk7XHJcbiAgICAgIHRoaXMuYWRkRXYoKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuc3JjID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IGF3YWl0IGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoXCJicm93c2VcIiwgeyBxdWVyeTogdGhpcy5xdWVyeSB9KSk7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGF3YWl0IHRoaXMuc291cmNlLmpzb24oKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVzdWx0UG9zdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB0aGlzLmRhdGEucG9zdHNfZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgIGxldCB0YWdzID0gXCJcIjtcclxuICAgICAgICAgaXRlbS50YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICB0YWdzICs9IGBcclxuICAgICAgICAgICAgPHNwYW4+IyR7dGhpcy5oaWdobGlnaHQodGFnLm5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19jb2xcIj5cclxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uZnJvbnRfY292ZXJfbGlua31cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fcm93XCI+JHt0aGlzLmhpZ2hsaWdodChpdGVtLnRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19yb3dcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2PiR7dGFnc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3VsLWl0ZW1fX3R5cGVcIj5Qb3N0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICBsZXQgcmVzdWx0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiYm94X19yZXN1bHQtaXRlbVwiKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgdGhpcy5yZXN1bHRzTGlzdC5hcHBlbmRDaGlsZChyZXN1bHRfaXRlbSk7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoXCJyZWFkX3Bvc3RcIiwgaXRlbS5pZCwgaXRlbS5hdXRob3IuaWQpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZXN1bHRBdXRob3IgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YS5wcm9maWxlc19kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmF2YXRhcn1cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fcm93XCI+JHt0aGlzLmhpZ2hsaWdodChpdGVtLmZpcnN0bmFtZSl9ICR7dGhpcy5oaWdobGlnaHQoaXRlbS5sYXN0bmFtZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzdWwtaXRlbV9fbmlja25hbWVcIj4ke2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodChpdGVtLm5pY2tuYW1lKSA/IFwiQFwiICsgdGhpcy5oaWdobGlnaHQoaXRlbS5uaWNrbmFtZSkgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXN1bC1pdGVtX190eXBlXCI+QXV0aG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIGA7XHJcbiAgICAgICAgIGxldCByZXN1bHRfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJib3hfX3Jlc3VsdC1pdGVtXCIpO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICB0aGlzLnJlc3VsdHNMaXN0LmFwcGVuZENoaWxkKHJlc3VsdF9pdGVtKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdChcInByb2ZpbGVfcGFnZVwiLCBudWxsLCBpdGVtLmlkKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMubm9SZXN1bHRzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19jb2xcIj5cclxuICAgICAgICAgPGltZyBjbGFzcz1cImltZ19fbm90LWZvdW5kXCIgc3JjPVwiL2ltZy9kZWZhdWx0cy9ub3RfZm91bmQuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3JvdyByZXN1bHQtaXRlbV9fbm8tcmVzdWx0c1wiPk5vIHJlc3VsdHMgZm91bmQhPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fcm93XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICBgO1xyXG4gICAgICBsZXQgcmVzdWx0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICByZXN1bHRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiYm94X19yZXN1bHQtaXRlbVwiKTtcclxuICAgICAgcmVzdWx0X2l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdC5hcHBlbmRDaGlsZChyZXN1bHRfaXRlbSk7XHJcbiAgICAgIHJlc3VsdF9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgdGhpcy5yZXN1bHRzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaGlnaGxpZ2h0ID0gKHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoIXN0cmluZykgcmV0dXJuO1xyXG4gICAgICBpZiAoc3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICBsZXQgc3RhcnQgPSBzdHJpbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMucXVlcnkpO1xyXG4gICAgICAgICBsZXQgZW5kID0gc3RhcnQgKyB0aGlzLnF1ZXJ5Lmxlbmd0aDtcclxuICAgICAgICAgbGV0IHN1YnN0ciA9IHN0cmluZy5zbGljZShzdGFydCwgZW5kKTtcclxuXHJcbiAgICAgICAgIGxldCBoaWdobGlnaHRlZCA9IHN0cmluZ1xyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAucmVwbGFjZSh0aGlzLnF1ZXJ5LnRvTG93ZXJDYXNlKCksIGA8c3BhbiBjbGFzcz1cInRleHRfX2hpZ2hsaWdodFwiPiR7c3Vic3RyfTwvc3Bhbj5gKTtcclxuICAgICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gc3RyaW5nO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnJlc3VsdHNMaXN0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc3VsdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBvcHRpb25zLnJlc3VsdHNMaXN0KTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZXN1bHRzTGlzdCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmFkZEV2ID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2VhcmNoX2lucHV0KS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICBcImlucHV0XCIsXHJcbiAgICAgICAgIGhlbHBlcnMudGhyb3R0bGVMYXN0KGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnkubGVuZ3RoID49IG9wdGlvbnMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3JjKCk7XHJcblxyXG4gICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnBvc3RzX2RhdGEubGVuZ3RoIDw9IDAgJiYgdGhpcy5kYXRhLnByb2ZpbGVzX2RhdGEubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5ub1Jlc3VsdHMoKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRQb3N0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0QXV0aG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlc3VsdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSwgb3B0aW9ucy50aHJvdHRsZSlcclxuICAgICAgKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuc2V0UG9zaXRpb24gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSBoZWxwZXJzLmdldFBvc2l0aW9ucyh0YXJnZXQpO1xyXG4gICAgICB0aGlzLnJlc3VsdHNMaXN0LnN0eWxlLnRvcCA9IHRoaXMubG9jYXRpb24udG9wICsgNjMgKyBcInB4XCI7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnJlZGlyZWN0ID0gKGxvYywgcG9zdCA9IG51bGwsIGF1dGhvciA9IG51bGwpID0+IHtcclxuICAgICAgaWYgKGxvYyA9PSBcInByb2ZpbGVfcGFnZVwiKSB7XHJcbiAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUm91dGluZy5nZW5lcmF0ZShsb2MsIHsgcHJvZmlsZTogYXV0aG9yIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFJvdXRpbmcuZ2VuZXJhdGUobG9jLCB7IHByb2ZpbGU6IGF1dGhvciwgcG9zdDogcG9zdCB9KTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0KCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG4gICB2YXIgdGltZW91dDtcclxuICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIG9iaiA9IHRoaXMsXHJcbiAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcbiAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XHJcbiAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUsIHByZWZvbWF0dGVkRGF0ZSA9IGZhbHNlLCBoaWRlWWVhciA9IGZhbHNlKSB7XHJcbiAgIGNvbnN0IE1PTlRIX05BTUVTID0gW1xyXG4gICAgICBcIkphbnVhcnlcIixcclxuICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICBcIk1hcmNoXCIsXHJcbiAgICAgIFwiQXByaWxcIixcclxuICAgICAgXCJNYXlcIixcclxuICAgICAgXCJKdW5lXCIsXHJcbiAgICAgIFwiSnVseVwiLFxyXG4gICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICBcIkRlY2VtYmVyXCIsXHJcbiAgIF07XHJcbiAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICBjb25zdCBtb250aCA9IE1PTlRIX05BTUVTW2RhdGUuZ2V0TW9udGgoKV07XHJcbiAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG5cclxuICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xyXG4gICAgICAvLyBBZGRpbmcgbGVhZGluZyB6ZXJvIHRvIG1pbnV0ZXNcclxuICAgICAgbWludXRlcyA9IGAwJHttaW51dGVzfWA7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChwcmVmb21hdHRlZERhdGUpIHtcclxuICAgICAgLy8gVG9kYXkgYXQgMTA6MjBcclxuICAgICAgLy8gWWVzdGVyZGF5IGF0IDEwOjIwXHJcbiAgICAgIHJldHVybiBgJHtwcmVmb21hdHRlZERhdGV9IGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICB9XHJcblxyXG4gICBpZiAoaGlkZVllYXIpIHtcclxuICAgICAgLy8gMTAuIEphbnVhcnkgYXQgMTA6MjBcclxuICAgICAgcmV0dXJuIGAke2RheX0gJHttb250aH0gYXQgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgIH1cclxuXHJcbiAgIC8vIDEwLiBKYW51YXJ5IDIwMTcuIGF0IDEwOjIwXHJcbiAgIHJldHVybiBgJHtkYXl9ICR7bW9udGh9ICR7eWVhcn0uIGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG59XHJcblxyXG4vLyAtLS0gTWFpbiBmdW5jdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gdGltZUFnbyhkYXRlUGFyYW0pIHtcclxuICAgaWYgKCFkYXRlUGFyYW0pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IGRhdGUgPSB0eXBlb2YgZGF0ZVBhcmFtID09PSBcIm9iamVjdFwiID8gZGF0ZVBhcmFtIDogbmV3IERhdGUoZGF0ZVBhcmFtKTtcclxuICAgY29uc3QgREFZX0lOX01TID0gODY0MDAwMDA7IC8vIDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICBjb25zdCB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZSh0b2RheSAtIERBWV9JTl9NUyk7XHJcbiAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLnJvdW5kKCh0b2RheSAtIGRhdGUpIC8gMTAwMCk7XHJcbiAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlY29uZHMgLyA2MCk7XHJcbiAgIGNvbnN0IGlzVG9kYXkgPSB0b2RheS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKTtcclxuICAgY29uc3QgaXNZZXN0ZXJkYXkgPSB5ZXN0ZXJkYXkudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCk7XHJcbiAgIGNvbnN0IGlzVGhpc1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICBpZiAoc2Vjb25kcyA8IDUpIHtcclxuICAgICAgcmV0dXJuIFwibm93XCI7XHJcbiAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XHJcbiAgICAgIHJldHVybiBgJHtzZWNvbmRzfSBzZWNvbmRzIGFnb2A7XHJcbiAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDkwKSB7XHJcbiAgICAgIHJldHVybiBcImFib3V0IGEgbWludXRlIGFnb1wiO1xyXG4gICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkge1xyXG4gICAgICByZXR1cm4gYCR7bWludXRlc30gbWludXRlcyBhZ29gO1xyXG4gICB9IGVsc2UgaWYgKGlzVG9kYXkpIHtcclxuICAgICAgcmV0dXJuIGdldEZvcm1hdHRlZERhdGUoZGF0ZSwgXCJUb2RheVwiKTsgLy8gVG9kYXkgYXQgMTA6MjBcclxuICAgfSBlbHNlIGlmIChpc1llc3RlcmRheSkge1xyXG4gICAgICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlLCBcIlllc3RlcmRheVwiKTsgLy8gWWVzdGVyZGF5IGF0IDEwOjIwXHJcbiAgIH0gZWxzZSBpZiAoaXNUaGlzWWVhcikge1xyXG4gICAgICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlLCBmYWxzZSwgdHJ1ZSk7IC8vIDEwLiBKYW51YXJ5IGF0IDEwOjIwXHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpOyAvLyAxMC4gSmFudWFyeSAyMDE3LiBhdCAxMDoyMFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NuYW1lKSB7XHJcbiAgIC8vIGxvb2sgZm9yIGRpcmVjdCBwYXJlbnRcclxuICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzbmFtZSkpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIC8vIGlmIG5vIGRpcmVjdCBwYXJlbnQgZm91bmQgbG9vayBieSBjbGFzc25hbWVcclxuICAgfSBlbHNlIGlmICghZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzbmFtZSkubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc25hbWUpWzBdO1xyXG4gICAgICAvL2lmIGVsZW1lbnQgaGF2ZSBubyBwYXJlbnQgdGhyb3cgZXJyb3JcclxuICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgLy8gdGhyb3cgYGVycm9yIGZyb20gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZTogd2hlcmUgd2FzIGFuIGVycm9yIGluIGZpbmRpbmcgdGFyZ2V0IGVsZW1lbnQg4oCTICR7Y2xhc3NuYW1lfWA7XHJcbiAgIH1cclxuICAgcmV0dXJuIGdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJPck51bGwoY2xhc3NsaXN0LCBhdHRyKSB7XHJcbiAgIHZhciBjdXJyZW50X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc2xpc3Quc2hpZnQoKX1gKTtcclxuXHJcbiAgIGNsYXNzbGlzdC5mb3JFYWNoKChjbGFzc25hbWUpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICB2YXIgYXR0cmlidXRlID0gY3VycmVudF9lbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcclxuICAgfVxyXG5cclxuICAgdmFyIHJldHVybl92YWx1ZSA9IGF0dHJpYnV0ZSA/IGF0dHJpYnV0ZSA6IG51bGw7XHJcbiAgIHJldHVybiByZXR1cm5fdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyT3JGYWxzZShjbGFzc2xpc3QsIG5hbWUsIGF0dHIpIHtcclxuICAgdmFyIGN1cnJlbnRfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzbGlzdC5zaGlmdCgpfWApO1xyXG5cclxuICAgY2xhc3NsaXN0LmZvckVhY2goKGNsYXNzbmFtZSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudF9lbGVtZW50KSB7XHJcbiAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGN1cnJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc25hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcblxyXG4gICBpZiAoY3VycmVudF9lbGVtZW50KSB7XHJcbiAgICAgIGN1cnJlbnRfZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cik7XHJcbiAgIH1cclxuXHJcbiAgIHZhciByZXR1cm5fdmFsdWUgPSBjdXJyZW50X2VsZW1lbnQgPyB0cnVlIDogZmFsc2U7XHJcbiAgIHJldHVybiByZXR1cm5fdmFsdWU7XHJcbn1cclxuXHJcbi8vIGxhc3QgZWxlbWVudCBpbiBhcnJheVxyXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkge1xyXG4gICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbi8vcmV0dXJuIGFic29sdXRlIHBvc2l0aW9uIG9mIGVsZW1lbnRcclxuZXhwb3J0IHZhciBnZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgIHZhciB0b3AgPSAwLFxyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgZG8ge1xyXG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcclxuICAgICAgbGVmdCArPSBlbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcclxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xyXG4gICB9IHdoaWxlIChlbGVtZW50KTtcclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogdG9wLFxyXG4gICAgICBsZWZ0OiBsZWZ0LFxyXG4gICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBnZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICB2YXIgdG9wID0gMCxcclxuICAgICAgbGVmdCA9IDA7XHJcbiAgIHZhciByaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcclxuICAgZG8ge1xyXG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcclxuICAgICAgbGVmdCArPSBlbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcclxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xyXG4gICB9IHdoaWxlIChlbGVtZW50KTtcclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogdG9wLFxyXG4gICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICByaWdodDogcmlnaHQsXHJcbiAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnQob2JqZWN0LCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICBpZiAob2JqZWN0ID09IG51bGwgfHwgdHlwZW9mIG9iamVjdCA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcbiAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gICB9IGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudCkge1xyXG4gICAgICBvYmplY3QuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RbXCJvblwiICsgdHlwZV0gPSBjYWxsYmFjaztcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgbGltaXQpIHtcclxuICAgbGV0IGluVGhyb3R0bGU7XHJcbiAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICBpZiAoIWluVGhyb3R0bGUpIHtcclxuICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgaW5UaHJvdHRsZSA9IHRydWU7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGluVGhyb3R0bGUgPSBmYWxzZSksIGxpbWl0KTtcclxuICAgICAgfVxyXG4gICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVMYXN0KGZ1bmMsIGxpbWl0KSB7XHJcbiAgIGxldCBsYXN0RnVuYztcclxuICAgbGV0IGxhc3RSYW47XHJcbiAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICBpZiAoIWxhc3RSYW4pIHtcclxuICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGNsZWFyVGltZW91dChsYXN0RnVuYyk7XHJcbiAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdFJhbiA+PSBsaW1pdCkge1xyXG4gICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcbn1cclxuXHJcbi8vICoqIEZBREUgT1VUIEZVTkNUSU9OICoqXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlT3V0KGVsKSB7XHJcbiAgIGVsLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAoZnVuY3Rpb24gZmFkZSgpIHtcclxuICAgICAgaWYgKChlbC5zdHlsZS5vcGFjaXR5IC09IDAuMSkgPCAwKSB7XHJcbiAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG4gICAgICB9XHJcbiAgIH0pKCk7XHJcbn1cclxuXHJcbi8vICoqIEZBREUgSU4gRlVOQ1RJT04gKipcclxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVJbihlbCwgZGlzcGxheSkge1xyXG4gICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgZWwuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG4gICAoZnVuY3Rpb24gZmFkZSgpIHtcclxuICAgICAgdmFyIHZhbCA9IHBhcnNlRmxvYXQoZWwuc3R5bGUub3BhY2l0eSk7XHJcbiAgICAgIGlmICghKCh2YWwgKz0gMC4xKSA+IDEpKSB7XHJcbiAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB2YWw7XHJcbiAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxuICAgICAgfVxyXG4gICB9KSgpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgKiBhcyBhY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcclxuaW1wb3J0ICogYXMgcGFnaW5hdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0ICogYXMgbGlrZXMgZnJvbSBcIi4vbGlrZXNcIjtcclxuaW1wb3J0ICogYXMgcG9zdCBmcm9tIFwiLi9wb3N0X2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0ICogYXMgcG9zdERPTSBmcm9tIFwiLi9lZGl0RE9NL19wb3N0XCI7XHJcbmltcG9ydCAqIGFzIHJlc3BvbnNlTGlzdE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxzL19yZXNwb25zZV9saXN0XCI7XHJcbmltcG9ydCAqIGFzIGNvbW1lbnRzTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbHMvX2NvbW1lbnRzX2xpc3RcIjtcclxuaW1wb3J0ICogYXMgY3JlYXRlUG9zdE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxzL19jcmVhdGVfcG9zdFwiO1xyXG5pbXBvcnQgKiBhcyBjcmVhdGVGb2xkZXJNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFscy9fY3JlYXRlX2ZvbGRlclwiO1xyXG5pbXBvcnQgKiBhcyBlZGl0UG9zdE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxzL19lZGl0X3Bvc3RcIjtcclxuaW1wb3J0ICogYXMgZHJvcGRvd24gZnJvbSBcIi4vY29tcG9uZW50cy9kcm9wZG93blwiO1xyXG5pbXBvcnQgKiBhcyBkZWxldGVQb3N0TW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbHMvX2RlbGV0ZV9wb3N0XCI7XHJcbmltcG9ydCAqIGFzIGZvbGRlciBmcm9tIFwiLi9mb2xkZXJcIjtcclxuaW1wb3J0ICogYXMgZm9ybV9wb3N0IGZyb20gXCIuL2Zvcm1fcG9zdFwiO1xyXG5pbXBvcnQgKiBhcyB0YWdzIGZyb20gXCIuL2NvbXBvbmVudHMvdGFnc1wiO1xyXG5pbXBvcnQgKiBhcyB0YWdzRE9NIGZyb20gXCIuL2VkaXRET00vX3RhZ1wiO1xyXG5pbXBvcnQgKiBhcyBlZGl0Q29tbWVudE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxzL19lZGl0X2NvbW1lbnRcIjtcclxuaW1wb3J0ICogYXMgZGVsZXRlQ29tbWVudE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxzL19kZWxldGVfY29tbWVudFwiO1xyXG5pbXBvcnQgKiBhcyBjb21tZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1lbnRzXCI7XHJcbmltcG9ydCAqIGFzIHRhZ2dlZFBvc3QgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbHMvX3RhZ2dlZF9wb3N0XCI7XHJcblxyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYuY29sb3JzID0ge1xyXG4gICAgICBpdGVtX292ZXJsYXk6IHtcclxuICAgICAgICAgbGlzdFJlc3BvbnNlOiBcInJnYmEoODQsIDE2MCwgMjU1LCAwLjQpXCIsXHJcbiAgICAgICAgIGxpc3RSZXNwb25zZVNlY29uZGFyeTogXCJyZ2JhKDg0LCAxNjAsIDI1NSwgMC40KVwiLFxyXG4gICAgICAgICBjb21tZW50c01vZGFsOiBcInJnYmEoMCwgMTY4LCAyNTUsIDAuMylcIixcclxuICAgICAgICAgY29tbWVudHNNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDAsIDE2OCwgMjU1LCAwLjMpXCIsXHJcbiAgICAgICAgIGRyb3Bkb3duOiBcInJnYmEoMzQsIDQ3LCA2MiwgMC41KVwiLFxyXG4gICAgICAgICBkcm9wZG93blNlY29uZGFyeTogXCJyZ2JhKDAsIDE2OCwgMjU1LCAwLjMpXCIsXHJcbiAgICAgICAgIGRlbGV0ZUNvbW1lbnRNb2RhbDogXCJyZ2JhKDIzMiwgNjUsIDI0LCAwLjQpXCIsXHJcbiAgICAgICAgIGRlbGV0ZUNvbW1lbnRNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDIzMiwgNjUsIDI0LCAwLjQpXCIsXHJcbiAgICAgICAgIGRlbGV0ZVBvc3RNb2RhbDogXCJyZ2JhKDIzMiwgNjUsIDI0LCAwLjQpXCIsXHJcbiAgICAgICAgIGRlbGV0ZVBvc3RNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDIzMiwgNjUsIDI0LCAwLjQpXCIsXHJcbiAgICAgICAgIGVkaXRQb3N0TW9kYWw6IFwicmdiYSgwLCAyMTAsIDIxMSwgMC4zKVwiLFxyXG4gICAgICAgICBlZGl0UG9zdE1vZGFsU2Vjb25kYXJ5OiBcInJnYmEoMCwgMjEwLCAyMTEsIDAuMylcIixcclxuICAgICAgICAgZWRpdENvbW1lbnRNb2RhbDogXCJyZ2JhKDAsIDE2OCwgMjU1LCAwLjMpXCIsXHJcbiAgICAgICAgIGVkaXRDb21tZW50TW9kYWxTZWNvbmRhcnk6IFwicmdiYSgyMzIsIDY1LCAyNCwgMC40KVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnlfb3ZlcmxheToge1xyXG4gICAgICAgICBsaXN0UmVzcG9uc2VTZWNvbmRhcnk6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgICAgIGRlbGV0ZUNvbW1lbnRNb2RhbDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICAgICAgICAgZWRpdENvbW1lbnRNb2RhbDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICAgICAgICAgZWRpdENvbW1lbnRNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICAgICAgICAgY29tbWVudHNNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICAgICAgICAgY3JlYXRlRm9sZGVyTW9kYWxTZWNvbmRhcnk6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgICAgIGRlbGV0ZVBvc3RNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICAgICAgICAgZWRpdFBvc3RNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICAgICAgfSxcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHRVQgVVNFUiBEQVRBXHJcbiAgICAqL1xyXG4gICB0aGlzLmdldFByb2ZpbGVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2goUm91dGluZy5nZW5lcmF0ZShzZWxmLnJvdXRlcy5nZXRfdXNlcl9kYXRhKSwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgIC8vIGJvZHk6IHRoaXMuZGF0YSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFJPVVRFU1xyXG4gICAgKi9cclxuICAgdGhpcy5yb3V0ZXMgPSB7XHJcbiAgICAgIGdldF9wcm9maWxlOiBcImdldF9wcm9maWxlXCIsXHJcbiAgICAgIHVwZGF0ZV9wcm9maWxlOiBcInVwZGF0ZV9wcm9maWxlXCIsXHJcbiAgICAgIGdldF9mb2xsb3dlcnM6IFwiZ2V0X2ZvbGxvd2Vyc1wiLFxyXG4gICAgICBnZXRfZm9sbG93aW5nOiBcImdldF9mb2xsb3dpbmdcIixcclxuICAgICAgZ2V0X2ZvbGRlcnM6IFwiZ2V0X2ZvbGRlcnNcIixcclxuICAgICAgZ2V0X3Bvc3RzOiBcImdldF9wb3N0c1wiLFxyXG4gICAgICBnZXRfcG9zdHNfYWxsOiBcImdldF9wb3N0c19hbGxcIixcclxuICAgICAgZ2V0X3VzZXJfZGF0YTogXCJnZXRfdXNlcl9kYXRhXCIsXHJcbiAgICAgIGdldF90YWdzOiBcImdldF90YWdzXCIsXHJcbiAgICAgIGdldF9mb2xsb3c6IFwiZ2V0X2ZvbGxvd1wiLFxyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIERFRkFVTFQgUEFHSU5BVElPTiBTRVRUSU5HU1xyXG4gICAgKi9cclxuICAgdGhpcy5wYWdpbmF0aW9uX2RhdGEgPSB7XHJcbiAgICAgIGZvbGRlcnNfcGFnZTogMSxcclxuICAgICAgZm9sZGVyc19zb3J0OiBcImNyZWF0ZWRcIixcclxuICAgICAgZm9sZGVyOiBudWxsLFxyXG4gICAgICBmb2xkZXJzX3BhZ2luYXRpb25fY29udGFpbmVyOiBcImZvbGRlcnNfX3BhZ2luYXRvclwiLFxyXG4gICAgICBwb3N0c19wYWdlOiAxLFxyXG4gICAgICBwb3N0c19zb3J0OiBcImRlc2NcIixcclxuICAgICAgcG9zdHNfcGFnaW5hdGlvbl9jb250YWluZXI6IFwicG9zdHNfX3BhZ2luYXRvclwiLFxyXG4gICAgICB0YWdzX3BhZ2U6IDEsXHJcbiAgICAgIHRhZ3Nfc29ydDogXCJwb3B1bGFyXCIsXHJcbiAgICAgIHRhZzogbnVsbCxcclxuICAgICAgdGFnc19wYWdpbmF0aW9uX2NvbnRhaW5lcjogXCJ0YWdzX19wYWdpbmF0b3JcIixcclxuICAgICAgZm9sbG93X3BhZ2U6IDEsXHJcbiAgICAgIGZvbGxvd19zb3J0OiBcImRlc2NcIixcclxuICAgICAgZm9sbG93X3BhZ2luYXRpb25fY29udGFpbmVyOiBcImZvbGxvd19fcGFnaW5hdG9yXCIsXHJcbiAgICAgIHRhZ19tb2RhbF9wYWdlOiAxLFxyXG4gICAgICB0YWdfbW9kYWxfc29ydDogXCJkZXNjXCIsXHJcbiAgICAgIHRhZ19tb2RhbF9wYWdpbmF0aW9uX2NvbnRhaW5lcjogXCJ0YWdfX3BhZ2luYXRvclwiLFxyXG4gICAgICB0YWdfbW9kYWxfdGFnOiBudWxsLFxyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEVWRU5UIExJU1RFTkVSU1xyXG4gICAgKi9cclxuICAgdGhpcy5hZGRFdiA9IHtcclxuICAgICAgZm9sbG93VG9nZ2xlcjogKCkgPT4ge1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fZm9sbG93XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9maWxlX2RhdGEubG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgIGZvbGxvdy5Ub2dnbGVGb2xsb3coZS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJsb2dpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0VGFnOiAoY29udGFpbmVyKSA9PiB7XHJcbiAgICAgICAgIGxldCB0YWdzX3RhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhZ3NfX3RhZ1wiKTtcclxuXHJcbiAgICAgICAgIHRhZ3NfdGFnLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF90YWcgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0YWdcIik7XHJcblxyXG4gICAgICAgICAgICAgICBuZXcgdGFnZ2VkUG9zdC5UYWdnZWRQb3N0KHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fdGFnZ2VkLXBvc3RcIixcclxuICAgICAgICAgICAgICAgICAgcmVuZGVycGFnaW5hdGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhZ2dlZFBvc3RQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcnNvcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgbmV3IGRyb3Bkb3duLkRyb3Bkb3duKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic29ydF9fdGFnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IFwic29ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0X2F0dHI6IFtcInNvcnRcIiwgXCJkZXNjXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIk5ld2VzdFwiLCBcImRlc2NcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIk1vc3QgbGlrZWRcIiwgXCJsaWtlZFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiTW9zdCBjb21tZW50ZWRcIiwgXCJjb21tZW50ZWRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNvcnQgYnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2I6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF9zb3J0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJzb3J0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRhZ2dlZFBvc3RQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBsaXN0UmVzcG9uc2U6IChjb250YWluZXIpID0+IHtcclxuICAgICAgICAgbGV0IHRvb2x0aXBfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJpZ2dlcl9fbW9kYWxcIik7XHJcbiAgICAgICAgIHRvb2x0aXBfdG9nZ2xlLmZvckVhY2goKHNwYW4pID0+IHtcclxuICAgICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgbmV3IHJlc3BvbnNlTGlzdE1vZGFsLnJlc3BvbnNlTGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYm94X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGF0dHI6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFwicG9zdF9saWtlc1wiLFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fcmVzcG9uc2UtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5saXN0UmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxpc3RSZXNwb25zZVNlY29uZGFyeTogKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICAgICBsZXQgdG9vbHRpcF90b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbChcIi50cmlnZ2VyX19tb2RhbFwiKTtcclxuICAgICAgICAgdG9vbHRpcF90b2dnbGUuZm9yRWFjaCgoc3BhbikgPT4ge1xyXG4gICAgICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBuZXcgcmVzcG9uc2VMaXN0TW9kYWwucmVzcG9uc2VMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgbW9kYWxfb3ZlcmxheTogXCJvdmVybGF5X19yZXNwb25zZS1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5saXN0UmVzcG9uc2VTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5Lmxpc3RSZXNwb25zZVNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYm94X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGF0dHI6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFwicG9zdF9saWtlc1wiLFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fcmVzcG9uc2UtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvcGVuQ29tbWVudHM6IChjb250YWluZXIpID0+IHtcclxuICAgICAgICAgbGV0IGNvbW1lbnRzX3RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyaWdnZXJfX2NvbW1lbnRzLW1vZGFsXCIpO1xyXG4gICAgICAgICBjb21tZW50c190b2dnbGUuZm9yRWFjaCgoc3BhbikgPT4ge1xyXG4gICAgICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBuZXcgY29tbWVudHNNb2RhbC5Db21tZW50c0xpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJveF9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICBhdHRyOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcImdldF9jb21tZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fY29tbWVudHMtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5jb21tZW50c01vZGFsLFxyXG4gICAgICAgICAgICAgICAgICBkcm9wZG93bl9jb250YWluZXI6IFwiY29udGFpbmVyX19kZC1jb21tZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICBkcm9wZG93bl90cmlnZ2VyOiBcInRyaWdnZXJfX2RkLWNvbW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGdldFVzZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZV9kYXRhO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBkcm9wZG93bjogKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuY29tbWVudGVkX3Bvc3QuYXV0aG9yLmlkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJFZGl0XCIsIFwiZmFyIGZhLWVkaXRcIiwgXCJkZF9fZWRpdFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRGVsZXRlXCIsIFwiZmFzIGZhLXRyYXNoXCIsIFwiZGRfX2RlbGV0ZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBbW1wiRGVsZXRlXCIsIFwiZmFzIGZhLXRyYXNoXCIsIFwiZGRfX2RlbGV0ZVwiXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJFZGl0XCIsIFwiZmFyIGZhLWVkaXRcIiwgXCJkZF9fZWRpdFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRGVsZXRlXCIsIFwiZmFzIGZhLXRyYXNoXCIsIFwiZGRfX2RlbGV0ZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY29tbWVudGVkX3Bvc3QuYXV0aG9yLmlkICE9IHRoaXMucHJvZmlsZV9kYXRhLmlkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuY29tbWVudF9hdXRob3IuaWQgIT0gdGhpcy5wcm9maWxlX2RhdGEuaWRcclxuICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgZHJvcGRvd24uSWNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgY29udGFpbmVyX19kZC1jb21tZW50cy0ke2NvbW1lbnQuaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogYCN0cmlnZ2VyX19kZC1jb21tZW50cy0ke2NvbW1lbnQuaWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX2NvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZHJvcGRvd25TZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBhc3luYyAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNT0RBTCBERUxFVEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGRfX2RlbGV0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgZGVsZXRlQ29tbWVudE1vZGFsLkRlbGV0ZUNvbW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2NvbW1lbnQtZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5kZWxldGVDb21tZW50TW9kYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRlbGV0ZUNvbW1lbnRNb2RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25zdWJtaXQ6IGFzeW5jICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE1PREFMIEVESVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19lZGl0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBlZGl0Q29tbWVudE1vZGFsLkVkaXRDb21tZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19jb21tZW50LWVkaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXk6IFwiLm92ZXJsYXlfX21vZGFsLWl0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLnNlY29uZGFyeV9vdmVybGF5LmVkaXRDb21tZW50TW9kYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmVkaXRDb21tZW50TW9kYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uc3VibWl0OiBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHMuRWRpdENvbW1lbnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgb25jbGlja0xpa2VzOiAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgKiBUT0dHTEUgTElLRVNcclxuICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBsaWtlcy5VcGRhdGVMaWtlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBpZDogaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0YXJnZXQsIFwiYm94X19jb21tZW50XCIpLmdldEF0dHJpYnV0ZShcImNvbW1lbnRcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U6IFwiY29tbWVudF9saWtlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2xpa2U6IFwiY29tbWVudF9kaXNsaWtlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubGlrZTogXCJjb21tZW50X3VubGlrZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRpc2xpa2U6IFwiY29tbWVudF91bmRpc2xpa2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2tDb3VudDogKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgcmVzcG9uc2VMaXN0TW9kYWwucmVzcG9uc2VMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJveF9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBcImNvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImNvbW1lbnRfbGlrZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX3Jlc3BvbnNlLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXk6IFwiLm92ZXJsYXlfX21vZGFsLWl0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLnNlY29uZGFyeV9vdmVybGF5Lmxpc3RSZXNwb25zZVNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX2NvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkubGlzdFJlc3BvbnNlU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb3BlbkNvbW1lbnRzU2Vjb25kYXJ5OiAoY29udGFpbmVyKSA9PiB7XHJcbiAgICAgICAgIGxldCBjb21tZW50c190b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbChcIi50cmlnZ2VyX19jb21tZW50cy1tb2RhbFwiKTtcclxuICAgICAgICAgY29tbWVudHNfdG9nZ2xlLmZvckVhY2goKHNwYW4pID0+IHtcclxuICAgICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgbmV3IGNvbW1lbnRzTW9kYWwuQ29tbWVudHNMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYm94X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGF0dHI6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFwiZ2V0X2NvbW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19jb21tZW50cy1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1vZGFsX292ZXJsYXk6IFwib3ZlcmxheV9fY29tbWVudHMtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIub3ZlcmxheV9fbW9kYWwtaXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkuY29tbWVudHNNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuY29tbWVudHNNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd25fY29udGFpbmVyOiBcImNvbnRhaW5lcl9fZGQtY29tbWVudHMtbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd25fdHJpZ2dlcjogXCJ0cmlnZ2VyX19kZC1jb21tZW50cy1tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICBnZXRVc2VyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVfZGF0YTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd246IChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmNvbW1lbnRlZF9wb3N0LmF1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5jb21tZW50X2F1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRWRpdFwiLCBcImZhciBmYS1lZGl0XCIsIFwiZGRfX2VkaXRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW1tcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWVudC5jb21tZW50X2F1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRWRpdFwiLCBcImZhciBmYS1lZGl0XCIsIFwiZGRfX2VkaXRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNvbW1lbnRlZF9wb3N0LmF1dGhvci5pZCAhPSB0aGlzLnByb2ZpbGVfZGF0YS5pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkICE9IHRoaXMucHJvZmlsZV9kYXRhLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgbmV3IGRyb3Bkb3duLkljb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYGNvbnRhaW5lcl9fZGQtY29tbWVudHMtbW9kYWwtJHtjb21tZW50LmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IGAjdHJpZ2dlcl9fZGQtY29tbWVudHMtbW9kYWwtJHtjb21tZW50LmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRyb3Bkb3duU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYjogYXN5bmMgKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTU9EQUwgREVMRVRFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19kZWxldGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGRlbGV0ZUNvbW1lbnRNb2RhbC5EZWxldGVDb21tZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC10aGlyZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2NvbW1lbnQtZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIiNvdmVybGF5X19jb21tZW50cy1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5kZWxldGVDb21tZW50TW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRlbGV0ZUNvbW1lbnRNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25zdWJtaXQ6IGFzeW5jICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE1PREFMIEVESVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19lZGl0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBlZGl0Q29tbWVudE1vZGFsLkVkaXRDb21tZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC10aGlyZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2NvbW1lbnQtZWRpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIjb3ZlcmxheV9fY29tbWVudHMtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkuZGVsZXRlQ29tbWVudE1vZGFsU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5lZGl0Q29tbWVudE1vZGFsU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBvbmNsaWNrTGlrZXM6ICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAqIFRPR0dMRSBMSUtFU1xyXG4gICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgbmV3IGxpa2VzLlVwZGF0ZUxpa2VzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7IGlkOiBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRhcmdldCwgXCJib3hfX2NvbW1lbnRcIikuZ2V0QXR0cmlidXRlKFwiY29tbWVudFwiKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZTogXCJjb21tZW50X2xpa2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzbGlrZTogXCJjb21tZW50X2Rpc2xpa2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5saWtlOiBcImNvbW1lbnRfdW5saWtlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGlzbGlrZTogXCJjb21tZW50X3VuZGlzbGlrZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgb25jbGlja0NvdW50OiAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyByZXNwb25zZUxpc3RNb2RhbC5yZXNwb25zZUxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsLXRoaXJkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJib3hfX2NvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJjb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJjb21tZW50X2xpa2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19yZXNwb25zZS1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIiNvdmVybGF5X19jb21tZW50cy1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5saXN0UmVzcG9uc2VTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5Lmxpc3RSZXNwb25zZVNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgIH07XHJcblxyXG4gICAvKipcclxuICAgICogRFJPUERPV05TXHJcbiAgICAqL1xyXG4gICB0aGlzLmRkID0ge1xyXG4gICAgICBwb3N0RHJvcGRvd246IChwKSA9PiB7XHJcbiAgICAgICAgIGlmIChwLmF1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICBuZXcgZHJvcGRvd24uSWNvbih7XHJcbiAgICAgICAgICAgICAgIGlkOiBgZGQtY29udGFpbmVyX19wb3N0LSR7cC5pZH1gLFxyXG4gICAgICAgICAgICAgICB0cmlnZ2VyOiBgI2RkLXRyaWdnZXJfX3Bvc3QtJHtwLmlkfWAsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgW1wiRWRpdFwiLCBcImZhciBmYS1lZGl0XCIsIFwiZGRfX2VkaXRcIl0sXHJcbiAgICAgICAgICAgICAgICAgIFtcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl0sXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRyb3Bkb3duLFxyXG4gICAgICAgICAgICAgICBjYjogYXN5bmMgKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICogREVMRVRFIFBPU1QgTU9EQUxcclxuICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGRfX2RlbGV0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgZGVsZXRlUG9zdE1vZGFsLkRlbGV0ZVBvc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fcG9zdC1kZWxldGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZGVsZXRlUG9zdE1vZGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBvc3RzUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAqIEVESVQgUE9TVCBNT0RBTFxyXG4gICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGRfX2VkaXRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlcnNfbmFtZXMgPSBhd2FpdCBmb2xkZXIuZ2V0Rm9sZGVyc05hbWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBlZGl0UG9zdE1vZGFsLkVkaXRQb3N0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2VkaXQtcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5lZGl0UG9zdE1vZGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEV2LnNlbGVjdFRhZyhcIiNjb250ZW50X19wb3N0c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb250YWdjcmVhdGU6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJ0YWdzOiAodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0LmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyh0YWcubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZHJvcGRvd246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGRyb3Bkb3duLkRyb3Bkb3duKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXRfX2ZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBcImZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0X2F0dHI6IFtcImZvbGRlclwiLCBcIlwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9sZGVyc19uYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21faXRlbTogXCJDcmVhdGUgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2I6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcIml0ZW1fX2JvdHRvbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY3JlYXRlRm9sZGVyTW9kYWwuQ3JlYXRlRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19mb2xkZXItY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5jcmVhdGVGb2xkZXJNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2I6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlcnNfbmFtZXMgPSBhd2FpdCBmb2xkZXIuZ2V0Rm9sZGVyc05hbWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlci51cGRhdGVGb2xkZXJzTGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IFwiZm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvbGRlcnNfbmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbV9pdGVtOiBcIkNyZWF0ZSBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZm9sZGVyc1BhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmF1dG9jb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtX3Bvc3QucmVuZGVyQXV0b0NvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc3REcm9wZG93blNlY29uZGFyeTogKHApID0+IHtcclxuICAgICAgICAgaWYgKHAuYXV0aG9yLmlkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIG5ldyBkcm9wZG93bi5JY29uKHtcclxuICAgICAgICAgICAgICAgaWQ6IGBkZC1jb250YWluZXJfX3Bvc3QtbW9kYWwtJHtwLmlkfWAsXHJcbiAgICAgICAgICAgICAgIHRyaWdnZXI6IGAjZGQtdHJpZ2dlcl9fcG9zdC1tb2RhbC0ke3AuaWR9YCxcclxuICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICBbXCJFZGl0XCIsIFwiZmFyIGZhLWVkaXRcIiwgXCJkZF9fZWRpdFwiXSxcclxuICAgICAgICAgICAgICAgICAgW1wiRGVsZXRlXCIsIFwiZmFzIGZhLXRyYXNoXCIsIFwiZGRfX2RlbGV0ZVwiXSxcclxuICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZHJvcGRvd24sXHJcbiAgICAgICAgICAgICAgIGNiOiBhc3luYyBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgKiBNT0RBTCBERUxFVEUgUE9TVFxyXG4gICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZF9fZGVsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBkZWxldGVQb3N0TW9kYWwuRGVsZXRlUG9zdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5kZWxldGVQb3N0TW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fcG9zdC1kZWxldGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZGVsZXRlUG9zdE1vZGFsU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBvc3RzUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAqIE1PREFMIEVESVQgUE9TVFxyXG4gICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGRfX2VkaXRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlcnNfbmFtZXMgPSBhd2FpdCBmb2xkZXIuZ2V0Rm9sZGVyc05hbWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBlZGl0UG9zdE1vZGFsLkVkaXRQb3N0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXk6IFwiLm92ZXJsYXlfX21vZGFsLWl0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLnNlY29uZGFyeV9vdmVybGF5LmVkaXRQb3N0TW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZWRpdC1wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmVkaXRQb3N0TW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uc3VibWl0OiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkRXYuc2VsZWN0VGFnKFwiI2NvbnRlbnRfX3RhZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb250YWdjcmVhdGU6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJ0YWdzOiAodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0LmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyh0YWcubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZHJvcGRvd246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGRyb3Bkb3duLkRyb3Bkb3duKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXRfX2ZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBcImZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0X2F0dHI6IFtcImZvbGRlclwiLCBcIlwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9sZGVyc19uYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21faXRlbTogXCJDcmVhdGUgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2I6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcIml0ZW1fX2JvdHRvbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY3JlYXRlRm9sZGVyTW9kYWwuQ3JlYXRlRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXk6IFwiLm92ZXJsYXlfX21vZGFsLWl0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19mb2xkZXItY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2xkZXJzX25hbWVzID0gYXdhaXQgZm9sZGVyLmdldEZvbGRlcnNOYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXIudXBkYXRlRm9sZGVyc0xpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBcImZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb2xkZXJzX25hbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21faXRlbTogXCJDcmVhdGUgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZvbGRlcnNQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJhdXRvY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybV9wb3N0LnJlbmRlckF1dG9Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIE1PREFMU1xyXG4gICAgKi9cclxuICAgdGhpcy5tb2RhbHMgPSB7XHJcbiAgICAgIGVkaXRQcm9maWxlOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIGxldCBwcm9maWxlX2lkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX21haW4tY29udGVudFwiKS5nZXRBdHRyaWJ1dGUoXCJwcm9maWxlXCIpO1xyXG4gICAgICAgICBpZiAodGhpcy5wcm9maWxlX2RhdGEuaWQgPT0gcGFyc2VJbnQocHJvZmlsZV9pZCkpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uX19wcm9maWxlLWVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIG5ldyBlZGl0UHJvZmlsZU1vZGFsLkVkaXRQcm9maWxlKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZWRpdC1wcm9maWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG9uc3VibWl0OiBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZURPTS5lZGl0RE9NKHJlc3BvbnNlLnByb2ZpbGVfZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmb2xsb3dlcnNNb2RhbDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGxvd2Vyc19fY291bnRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgbmV3IGZvbGxvd0xpc3RNb2RhbC5mb2xsb3dMaXN0KHtcclxuICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJib3hfX21haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBhdHRyOiBcInByb2ZpbGVcIixcclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgdXJsOiBzZWxmLnJvdXRlcy5nZXRfZm9sbG93ZXJzLFxyXG4gICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZm9sbG93ZXJzLWxpc3RcIixcclxuICAgICAgICAgICAgICAgaGVhZGVyOiBcIkZvbGxvd2Vyc1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZvbGxvd2luZ01vZGFsOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93aW5nX19jb3VudGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgZm9sbG93TGlzdE1vZGFsLmZvbGxvd0xpc3Qoe1xyXG4gICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsXCIsXHJcbiAgICAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJveF9fbWFpbi1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHI6IFwicHJvZmlsZVwiLFxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICB1cmw6IHNlbGYucm91dGVzLmdldF9mb2xsb3dpbmcsXHJcbiAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19mb2xsb3dlcnMtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICBoZWFkZXI6IFwiRm9sbG93aW5nXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlRm9sZGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIGxldCBwcm9maWxlX2lkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX21haW4tY29udGVudFwiKS5nZXRBdHRyaWJ1dGUoXCJwcm9maWxlXCIpO1xyXG4gICAgICAgICBpZiAocHJvZmlsZV9pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICBsZXQgYnRuX2NyZWF0ZV9mb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvbGRlcnNfY3JlYXRlXCIpO1xyXG4gICAgICAgICAgICBidG5fY3JlYXRlX2ZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgIG5ldyBjcmVhdGVGb2xkZXJNb2RhbC5DcmVhdGVGb2xkZXIoe1xyXG4gICAgICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZm9sZGVyLWNyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLmZvbGRlcnNQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJ0bl9jcmVhdGVfZm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXJzX2NyZWF0ZVwiKTtcclxuICAgICAgICAgICAgYnRuX2NyZWF0ZV9mb2xkZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlUG9zdDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICBsZXQgcHJvZmlsZV9pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19tYWluLWNvbnRlbnRcIikuZ2V0QXR0cmlidXRlKFwicHJvZmlsZVwiKTtcclxuICAgICAgICAgaWYgKHByb2ZpbGVfaWQgPT0gdGhpcy5wcm9maWxlX2RhdGEuaWQpIHtcclxuICAgICAgICAgICAgbGV0IGJ0bl9jcmVhdGVfcG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdHNfY3JlYXRlXCIpO1xyXG4gICAgICAgICAgICBidG5fY3JlYXRlX3Bvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgZm9sZGVyc19uYW1lcyA9IGF3YWl0IGZvbGRlci5nZXRGb2xkZXJzTmFtZXMoKTtcclxuICAgICAgICAgICAgICAgbmV3IGNyZWF0ZVBvc3RNb2RhbC5DcmVhdGVQb3N0KHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2NyZWF0ZS1wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG9uc3VibWl0OiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNlbGYucG9zdHNQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIG9udGFnY3JlYXRlOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MuYWRkVGFnKHRhZ3MuY3JlYXRlVGFnKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcmVuZGVyZHJvcGRvd246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgbmV3IGRyb3Bkb3duLkRyb3Bkb3duKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXRfX2ZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBcImZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0X2F0dHI6IFtcImZvbGRlclwiLCBcIlwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9sZGVyc19uYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b21faXRlbTogXCJDcmVhdGUgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2I6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcIml0ZW1fX2JvdHRvbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY3JlYXRlRm9sZGVyTW9kYWwuQ3JlYXRlRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19mb2xkZXItY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9sZGVyc19uYW1lcyA9IGF3YWl0IGZvbGRlci5nZXRGb2xkZXJzTmFtZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyLnVwZGF0ZUZvbGRlcnNMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJmb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9sZGVyc19uYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tX2l0ZW06IFwiQ3JlYXRlIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mb2xkZXJzUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgcmVuZGVyYXV0b2NvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvcm1fcG9zdC5yZW5kZXJBdXRvQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYnRuX2NyZWF0ZV9wb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0c19jcmVhdGVcIik7XHJcbiAgICAgICAgICAgIGJ0bl9jcmVhdGVfcG9zdC5yZW1vdmUoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFRBR1MgUEFHSU5BVElPTlxyXG4gICAgKi9cclxuICAgdGhpcy50YWdzUGFnaW5hdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHRhZ3NfcGFnaW5hdGlvbl9zZXR0aW5ncyA9IHtcclxuICAgICAgICAgY29udGFpbmVyX2lkOiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWdzX3BhZ2luYXRpb25fY29udGFpbmVyLFxyXG4gICAgICAgICByb3V0ZTogc2VsZi5yb3V0ZXMuZ2V0X3RhZ3MsXHJcbiAgICAgICAgIHBhZ2U6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ3NfcGFnZSxcclxuICAgICAgICAgc29ydF9tZXRob2Q6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ3Nfc29ydCxcclxuICAgICAgICAgcHJvZmlsZV9pZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX21haW4tY29udGVudFwiKS5nZXRBdHRyaWJ1dGUoXCJwcm9maWxlXCIpLFxyXG4gICAgICAgICBmb2xkZXJfaWQ6IHNlbGYucGFnaW5hdGlvbl9kYXRhLmZvbGRlcixcclxuICAgICAgICAgdGFnX2lkOiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWcsXHJcbiAgICAgICAgIGNiOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlclRhZ3NQYWdpbmF0ZWQoZGF0YSwgXCIjY29udGVudF9fcG9zdHNcIik7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFBhZ2U6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ3NfcGFnZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0U29ydE1ldGhvZDogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnc19zb3J0O1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRGb2xkZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLmZvbGRlcjtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGFnOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWc7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHNldFBhZ2U6IChwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ3NfcGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gbmV3IHBhZ2luYXRpb24uQ3JlYXRlUGFnaW5hdGlvbih0YWdzX3BhZ2luYXRpb25fc2V0dGluZ3MpO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFBPU1RTIFBBR0lOQVRJT05cclxuICAgICovXHJcbiAgIHRoaXMucG9zdHNQYWdpbmF0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgcG9zdHNfcGFnaW5hdGlvbl9zZXR0aW5ncyA9IHtcclxuICAgICAgICAgY29udGFpbmVyX2lkOiBzZWxmLnBhZ2luYXRpb25fZGF0YS5wb3N0c19wYWdpbmF0aW9uX2NvbnRhaW5lcixcclxuICAgICAgICAgcm91dGU6IHNlbGYucm91dGVzLmdldF9wb3N0c19hbGwsXHJcbiAgICAgICAgIHBhZ2U6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3BhZ2UsXHJcbiAgICAgICAgIHNvcnRfbWV0aG9kOiBzZWxmLnBhZ2luYXRpb25fZGF0YS5wb3N0c19zb3J0LFxyXG4gICAgICAgICBwcm9maWxlX2lkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fbWFpbi1jb250ZW50XCIpLmdldEF0dHJpYnV0ZShcInByb2ZpbGVcIiksXHJcbiAgICAgICAgIGZvbGRlcl9pZDogc2VsZi5wYWdpbmF0aW9uX2RhdGEuZm9sZGVyLFxyXG4gICAgICAgICB0YWdfaWQ6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZyxcclxuICAgICAgICAgY2I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYucmVuZGVyUG9zdHNQYWdpbmF0ZWQoZGF0YSwgXCIjY29udGVudF9fcG9zdHNcIik7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFBhZ2U6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3BhZ2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFNvcnRNZXRob2Q6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3NvcnQ7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldEZvbGRlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5wYWdpbmF0aW9uX2RhdGEuZm9sZGVyO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUYWc6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZztcclxuICAgICAgICAgfSxcclxuICAgICAgICAgc2V0UGFnZTogKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEucG9zdHNfcGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gbmV3IHBhZ2luYXRpb24uQ3JlYXRlUGFnaW5hdGlvbihwb3N0c19wYWdpbmF0aW9uX3NldHRpbmdzKTtcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBGT0xMT1cgUEFHSU5BVElPTlxyXG4gICAgKi9cclxuICAgdGhpcy5mb2xsb3dQYWdpbmF0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgZm9sbG93X3BhZ2luYXRpb25fc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgIGNvbnRhaW5lcl9pZDogc2VsZi5wYWdpbmF0aW9uX2RhdGEuZm9sbG93X3BhZ2luYXRpb25fY29udGFpbmVyLFxyXG4gICAgICAgICByb3V0ZTogc2VsZi5yb3V0ZXMuZ2V0X2ZvbGxvdyxcclxuICAgICAgICAgcGFnZTogc2VsZi5wYWdpbmF0aW9uX2RhdGEuZm9sbG93X3BhZ2UsXHJcbiAgICAgICAgIHNvcnRfbWV0aG9kOiBzZWxmLnBhZ2luYXRpb25fZGF0YS5mb2xsb3dfc29ydCxcclxuICAgICAgICAgcHJvZmlsZV9pZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX21haW4tY29udGVudFwiKS5nZXRBdHRyaWJ1dGUoXCJwcm9maWxlXCIpLFxyXG4gICAgICAgICBmb2xkZXJfaWQ6IHNlbGYucGFnaW5hdGlvbl9kYXRhLmZvbGRlcixcclxuICAgICAgICAgdGFnX2lkOiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWcsXHJcbiAgICAgICAgIGNiOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnJlbmRlclBvc3RzUGFnaW5hdGVkKGRhdGEsIFwiI2NvbnRlbnRfX2ZvbGxvd1wiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGRhdGEucGFnaW5hdGlvbl9kYXRhLnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyX19mb2xsb3dpbmdcIikuaW5uZXJIVE1MID0gYEZvbGxvd2luZyAoJHtjb3VudH0pYDtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0UGFnZTogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5wYWdpbmF0aW9uX2RhdGEuZm9sbG93X3BhZ2U7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFNvcnRNZXRob2Q6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLmZvbGxvd19zb3J0O1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRGb2xkZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLmZvbGRlcjtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGFnOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWc7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHNldFBhZ2U6IChwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYucGFnaW5hdGlvbl9kYXRhLmZvbGxvd19wYWdlID0gcGFnZTtcclxuICAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgcGFnaW5hdGlvbi5DcmVhdGVQYWdpbmF0aW9uKGZvbGxvd19wYWdpbmF0aW9uX3NldHRpbmdzKTtcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUQUcgUEFHSU5BVElPTlxyXG4gICAgKi9cclxuICAgdGhpcy50YWdnZWRQb3N0UGFnaW5hdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHRhZ19wYWdpbmF0aW9uX3NldHRpbmdzID0ge1xyXG4gICAgICAgICBjb250YWluZXJfaWQ6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF9wYWdpbmF0aW9uX2NvbnRhaW5lcixcclxuICAgICAgICAgcm91dGU6IHNlbGYucm91dGVzLmdldF9wb3N0c19hbGwsXHJcbiAgICAgICAgIHBhZ2U6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF9wYWdlLFxyXG4gICAgICAgICBzb3J0X21ldGhvZDogc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3NvcnQsXHJcbiAgICAgICAgIHByb2ZpbGVfaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19tYWluLWNvbnRlbnRcIikuZ2V0QXR0cmlidXRlKFwicHJvZmlsZVwiKSxcclxuICAgICAgICAgZm9sZGVyX2lkOiBzZWxmLnBhZ2luYXRpb25fZGF0YS5mb2xkZXIsXHJcbiAgICAgICAgIHRhZ19pZDogc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3RhZyxcclxuICAgICAgICAgY2I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYucmVuZGVyUG9zdHNCeVRhZyhkYXRhLCBcIiNjb250ZW50X190YWdcIik7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFBhZ2U6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF9wYWdlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRTb3J0TWV0aG9kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWdfbW9kYWxfc29ydDtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0Rm9sZGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb25fZGF0YS5mb2xkZXI7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRhZzogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3RhZztcclxuICAgICAgICAgfSxcclxuICAgICAgICAgc2V0UGFnZTogKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3BhZ2UgPSBwYWdlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBwYWdpbmF0aW9uLkNyZWF0ZVBhZ2luYXRpb24odGFnX3BhZ2luYXRpb25fc2V0dGluZ3MpO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFNPUlQgVEFHU1xyXG4gICAgKi9cclxuICAgdGhpcy5zb3J0VGFncyA9ICgpID0+IHtcclxuICAgICAgbmV3IGRyb3Bkb3duLkRyb3Bkb3duKHtcclxuICAgICAgICAgaWQ6IFwidGFnc19fc29ydFwiLFxyXG4gICAgICAgICBhdHRyOiBcInNvcnRcIixcclxuICAgICAgICAgZGVmYXVsdF9hdHRyOiBbXCJzb3J0XCIsIFwicG9wdWxhclwiXSxcclxuICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICBbXCJNb3N0IFVzZWRcIiwgXCJwb3B1bGFyXCJdLFxyXG4gICAgICAgICAgICBbXCJCeSBOYW1lXCIsIFwibmFtZVwiXSxcclxuICAgICAgICAgXSxcclxuICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU29ydCBieVwiLFxyXG4gICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBjYjogZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnc19zb3J0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJzb3J0XCIpO1xyXG4gICAgICAgICAgICBzZWxmLnRhZ3NQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFNPUlQgUE9UU1xyXG4gICAgKi9cclxuICAgdGhpcy5zb3J0UG9zdHMgPSAoKSA9PiB7XHJcbiAgICAgIG5ldyBkcm9wZG93bi5Ecm9wZG93bih7XHJcbiAgICAgICAgIGlkOiBcInBvc3RzX19zb3J0XCIsXHJcbiAgICAgICAgIGF0dHI6IFwic29ydFwiLFxyXG4gICAgICAgICBkZWZhdWx0X2F0dHI6IFtcInNvcnRcIiwgXCJkZXNjXCJdLFxyXG4gICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIFtcIk5ld2VzdFwiLCBcImRlc2NcIl0sXHJcbiAgICAgICAgICAgIFtcIk1vc3QgbGlrZWRcIiwgXCJsaWtlZFwiXSxcclxuICAgICAgICAgICAgW1wiTW9zdCBjb21tZW50ZWRcIiwgXCJjb21tZW50ZWRcIl0sXHJcbiAgICAgICAgIF0sXHJcbiAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNvcnQgYnlcIixcclxuICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgfSxcclxuICAgICAgICAgY2I6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgIHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3NvcnQgPSBlbGVtLmdldEF0dHJpYnV0ZShcInNvcnRcIik7XHJcbiAgICAgICAgICAgIHNlbGYucG9zdHNQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFNPUlQgRk9MTE9XRUQgUE9UU1xyXG4gICAgKi9cclxuICAgdGhpcy5zb3J0Rm9sbG93ID0gKCkgPT4ge1xyXG4gICAgICBuZXcgZHJvcGRvd24uRHJvcGRvd24oe1xyXG4gICAgICAgICBpZDogXCJmb2xsb3dfX3NvcnRcIixcclxuICAgICAgICAgYXR0cjogXCJzb3J0XCIsXHJcbiAgICAgICAgIGRlZmF1bHRfYXR0cjogW1wic29ydFwiLCBcImRlc2NcIl0sXHJcbiAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgW1wiTmV3ZXN0XCIsIFwiZGVzY1wiXSxcclxuICAgICAgICAgICAgW1wiTW9zdCBsaWtlZFwiLCBcImxpa2VkXCJdLFxyXG4gICAgICAgICAgICBbXCJNb3N0IGNvbW1lbnRlZFwiLCBcImNvbW1lbnRlZFwiXSxcclxuICAgICAgICAgXSxcclxuICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU29ydCBieVwiLFxyXG4gICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBjYjogZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEuZm9sbG93X3NvcnQgPSBlbGVtLmdldEF0dHJpYnV0ZShcInNvcnRcIik7XHJcbiAgICAgICAgICAgIHNlbGYuZm9sbG93UGFnaW5hdGlvbigpO1xyXG4gICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSRU5ERVIgVEFHUyBQQUdJTkFURURcclxuICAgICovXHJcbiAgIHRoaXMucmVuZGVyVGFnc1BhZ2luYXRlZCA9IGFzeW5jIChkYXRhLCBjb250YWluZXIpID0+IHtcclxuICAgICAgaWYgKGRhdGEubWFpbl9kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgIGxldCB0ZXh0ID0gXCJObyB0YWdzIGNyZWF0ZWRcIjtcclxuICAgICAgICAgdGFnc0RPTS5ub0NvbnRlbnQoY29udGFpbmVyLCB0ZXh0KTtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRhZ3NET00uYWRkVGFncyhkYXRhLm1haW5fZGF0YSk7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogU0VMRUNUIFRBR1xyXG4gICAgICAgKi9cclxuICAgICAgbmV3IHRhZ3MudG9nZ2xlVGFncyh7XHJcbiAgICAgICAgIHRhZzogXCIuYm94X190YWdcIixcclxuICAgICAgICAgZ2V0VGFnOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWc7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHNldFRhZzogKHRhZykgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWcgPSB0YWc7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGNiOiAodGFnLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3N0c19wYWdpbmF0aW9uX3NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAgICBjb250YWluZXJfaWQ6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3BhZ2luYXRpb25fY29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICByb3V0ZTogc2VsZi5yb3V0ZXMuZ2V0X3Bvc3RzX2FsbCxcclxuICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgc29ydF9tZXRob2Q6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3NvcnQsXHJcbiAgICAgICAgICAgICAgIHByb2ZpbGVfaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19tYWluLWNvbnRlbnRcIikuZ2V0QXR0cmlidXRlKFwicHJvZmlsZVwiKSxcclxuICAgICAgICAgICAgICAgZm9sZGVyX2lkOiBzZWxmLnBhZ2luYXRpb25fZGF0YS5mb2xkZXIsXHJcbiAgICAgICAgICAgICAgIHRhZ19pZDogc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnLFxyXG4gICAgICAgICAgICAgICBjYjogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5yZW5kZXJQb3N0c1BhZ2luYXRlZChkYXRhLCBcIiNjb250ZW50X19wb3N0c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gZGF0YS5wYWdpbmF0aW9uX2RhdGEudG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJfX3Bvc3RzXCIpLmlubmVySFRNTCA9IGAke25hbWV9ICgke2NvdW50fSlgO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSBkYXRhLnBhZ2luYXRpb25fZGF0YS50b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlcl9fcG9zdHNcIikuaW5uZXJIVE1MID0gYFVzZXJzIFBvc3RzICgke2NvdW50fSlgO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIGdldFBhZ2U6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3BhZ2U7XHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIGdldFNvcnRNZXRob2Q6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnBvc3RzX3NvcnQ7XHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIGdldEZvbGRlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wYWdpbmF0aW9uX2RhdGEuZm9sZGVyO1xyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICBnZXRUYWc6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZztcclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgc2V0UGFnZTogKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEucG9zdHNfcGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBuZXcgcGFnaW5hdGlvbi5DcmVhdGVQYWdpbmF0aW9uKHBvc3RzX3BhZ2luYXRpb25fc2V0dGluZ3MpO1xyXG4gICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSRU5ERVIgUE9TVFMgUEFHSU5BVEVEIChQT1NUUyAvIERST1BET1dOIC9NT0RBTCBFRElUIC8gTU9EQUwgREVMRVRFIC8gTU9EQUwgUkVTUE9OU0UgTElTVClcclxuICAgICovXHJcbiAgIHRoaXMucmVuZGVyUG9zdHNQYWdpbmF0ZWQgPSBhc3luYyAoZGF0YSwgY29udGFpbmVyKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLm1haW5fZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICBsZXQgdGV4dCA9IFwiTm8gY29udGVudFwiO1xyXG4gICAgICAgICBwb3N0RE9NLm5vQ29udGVudChjb250YWluZXIsIHRleHQpO1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBvc3RET00uYWRkUG9zdHMoe1xyXG4gICAgICAgICBkYXRhOiBkYXRhLm1haW5fZGF0YSxcclxuICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgICAgIGRyb3Bkb3duX3RyaWdnZXJfaWQ6IFwiZGQtdHJpZ2dlcl9fcG9zdFwiLFxyXG4gICAgICAgICBkcm9wZG93bl9jb250YWluZXJfaWQ6IFwiZGQtY29udGFpbmVyX19wb3N0XCIsXHJcbiAgICAgICAgIGdldFVzZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZV9kYXRhO1xyXG4gICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxpa2VzLnRvZ2dsZUxpa2VzKCk7XHJcbiAgICAgIGFjY29yZGlvbi5leHBhbmRBY2NvcmRpb25zKCk7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogVE9HR0xFIExJS0VTXHJcbiAgICAgICAqL1xyXG4gICAgICBsaWtlcy50b2dnbGVMaWtlcygpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE9QRU4gVEFHXHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLmFkZEV2LnNlbGVjdFRhZyhjb250YWluZXIpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIExJU1QgTElLRVMgLyBESVNMSUtFU1xyXG4gICAgICAgKi9cclxuICAgICAgdGhpcy5hZGRFdi5saXN0UmVzcG9uc2UoY29udGFpbmVyKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBDT01NRU5UU1xyXG4gICAgICAgKi9cclxuICAgICAgdGhpcy5hZGRFdi5vcGVuQ29tbWVudHMoY29udGFpbmVyKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBQT1NUIERST1BET1dOXHJcbiAgICAgICAqL1xyXG4gICAgICBkYXRhLm1haW5fZGF0YS5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgIHRoaXMuZGQucG9zdERyb3Bkb3duKHApO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSRU5ERVIgTU9EQUwgUE9TVFMgUEFHSU5BVEVEXHJcbiAgICAqL1xyXG4gICB0aGlzLnJlbmRlclBvc3RzQnlUYWcgPSBhc3luYyAoZGF0YSwgY29udGFpbmVyKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLm1haW5fZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICBsZXQgdGV4dCA9IFwiTm8gcG9zdHMgY3JlYXRlZFwiO1xyXG4gICAgICAgICBwb3N0RE9NLm5vQ29udGVudChjb250YWluZXIsIHRleHQpO1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBvc3RET00uYWRkUG9zdHMoe1xyXG4gICAgICAgICBkYXRhOiBkYXRhLm1haW5fZGF0YSxcclxuICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgICAgIGRyb3Bkb3duX3RyaWdnZXJfaWQ6IFwiZGQtdHJpZ2dlcl9fcG9zdC1tb2RhbFwiLFxyXG4gICAgICAgICBkcm9wZG93bl9jb250YWluZXJfaWQ6IFwiZGQtY29udGFpbmVyX19wb3N0LW1vZGFsXCIsXHJcbiAgICAgICAgIGdldFVzZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZV9kYXRhO1xyXG4gICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgYWNjb3JkaW9uLmV4cGFuZEFjY29yZGlvbnMoKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBUT0dHTEUgTElLRVNcclxuICAgICAgICovXHJcbiAgICAgIGxpa2VzLnRvZ2dsZUxpa2VzKCk7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogT1BFTiBUQUdcclxuICAgICAgICovXHJcbiAgICAgIHRoaXMuYWRkRXYuc2VsZWN0VGFnKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTElTVCBMSUtFUyAvIERJU0xJS0VTXHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLmFkZEV2Lmxpc3RSZXNwb25zZVNlY29uZGFyeShjb250YWluZXIpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1PREFMIENPTU1FTlRTXHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLmFkZEV2Lm9wZW5Db21tZW50c1NlY29uZGFyeShjb250YWluZXIpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFBPU1QgRFJPUERPV05cclxuICAgICAgICovXHJcbiAgICAgIGRhdGEubWFpbl9kYXRhLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgdGhpcy5kZC5wb3N0RHJvcGRvd25TZWNvbmRhcnkocCk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIElOSVQgSU5ERVggUEFHRSBDT05URU5UXHJcbiAgICAqL1xyXG4gICB0aGlzLmluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZmlsZV9kYXRhID0gYXdhaXQgdGhpcy5nZXRQcm9maWxlRGF0YSgpO1xyXG5cclxuICAgICAgdGhpcy5zb3J0VGFncygpO1xyXG4gICAgICB0aGlzLnRhZ3NQYWdpbmF0aW9uKCk7XHJcblxyXG4gICAgICB0aGlzLnNvcnRQb3N0cygpO1xyXG4gICAgICB0aGlzLnBvc3RzUGFnaW5hdGlvbigpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucHJvZmlsZV9kYXRhLmxvZ2dlZCkge1xyXG4gICAgICAgICB0aGlzLnNvcnRGb2xsb3coKTtcclxuICAgICAgICAgdGhpcy5mb2xsb3dQYWdpbmF0aW9uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFjY29yZGlvbi5leHBhbmRBY2NvcmRpb25zKCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQoKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICBuZXcgSW5kZXhQYWdlKCk7XHJcbn0pO1xyXG4iLCJjb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMaWtlcygpIHtcclxuICAgbGV0IHRvZ2dsZV9saWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vZ2xlX2xpa2VzXCIpO1xyXG4gICB0b2dnbGVfbGlrZXMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIG5ldyBVcGRhdGVMaWtlcyh7XHJcbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxyXG4gICAgICAgICAgICBpZDogeyBpZDogaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShldmVudC50YXJnZXQsIFwiYm94X19wb3N0XCIpLmdldEF0dHJpYnV0ZShcInBvc3RcIikgfSxcclxuICAgICAgICAgICAgdXJsOiB7XHJcbiAgICAgICAgICAgICAgIGxpa2U6IFwicG9zdF9saWtlXCIsXHJcbiAgICAgICAgICAgICAgIGRpc2xpa2U6IFwicG9zdF9kaXNsaWtlXCIsXHJcbiAgICAgICAgICAgICAgIHVubGlrZTogXCJwb3N0X3VubGlrZVwiLFxyXG4gICAgICAgICAgICAgICB1bmRpc2xpa2U6IFwicG9zdF91bmRpc2xpa2VcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZUxpa2VzID0gaGVscGVycy50aHJvdHRsZShmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgIHRoaXMuaW5pdCA9IGFzeW5jICh0YXJnZXQpID0+IHtcclxuICAgICAgdGhpcy5wcmVwYXJlRmV0Y2godGFyZ2V0KTtcclxuICAgICAgdGhpcy5kYXRhID0gYXdhaXQgdGhpcy5mZXRjaERhdGEoKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5kYXRhLmxvZ2dlZCkge1xyXG4gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShSb3V0aW5nLmdlbmVyYXRlKFwibG9naW5cIikpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWtlc19jb3VudGVyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyX19saWtlc1wiKTtcclxuICAgICAgdGhpcy5saWtlc19jb3VudGVyLmlubmVySFRNTCA9IGAoJHt0aGlzLmRhdGEubGlrZXN9KWA7XHJcbiAgICAgIHRoaXMuZGlzbGlrZXNfY291bnRlciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlcl9fZGlzbGlrZXNcIik7XHJcbiAgICAgIHRoaXMuZGlzbGlrZXNfY291bnRlci5pbm5lckhUTUwgPSBgKCR7dGhpcy5kYXRhLmRpc2xpa2VzfSlgO1xyXG5cclxuICAgICAgdGhpcy50b2dnbGVJY29uKCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGlrZV9pY29uLnJlbW92ZUF0dHJpYnV0ZShcInN0YXRlXCIpO1xyXG4gICAgICB0aGlzLmRpc2xpa2VfaWNvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0ZVwiKTtcclxuXHJcbiAgICAgIHRoaXMubGlrZV9pY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0ZV9fZGlzYWJsZWRcIik7XHJcbiAgICAgIHRoaXMubGlrZV9pY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0ZV9fYWN0aXZlXCIpO1xyXG5cclxuICAgICAgdGhpcy5kaXNsaWtlX2ljb24uY2xhc3NMaXN0LnJlbW92ZShcInN0YXRlX19kaXNhYmxlZFwiKTtcclxuICAgICAgdGhpcy5kaXNsaWtlX2ljb24uY2xhc3NMaXN0LnJlbW92ZShcInN0YXRlX19hY3RpdmVcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnRvZ2dsZUljb24gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGlrZV9pY29uID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5mYS10aHVtYnMtdXBcIik7XHJcbiAgICAgIHRoaXMuZGlzbGlrZV9pY29uID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5mYS10aHVtYnMtZG93blwiKTtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5zdGF0ZSA9PSBcIm5ldXRyYWxcIikge1xyXG4gICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoKTtcclxuICAgICAgICAgdGhpcy5saWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJuZXV0cmFsXCIpO1xyXG4gICAgICAgICB0aGlzLmRpc2xpa2VfaWNvbi5zZXRBdHRyaWJ1dGUoXCJzdGF0ZVwiLCBcIm5ldXRyYWxcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnN0YXRlID09IFwibGlrZWRcIikge1xyXG4gICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoKTtcclxuICAgICAgICAgdGhpcy5saWtlX2ljb24uY2xhc3NMaXN0LmFkZChcInN0YXRlX19hY3RpdmVcIik7XHJcbiAgICAgICAgIHRoaXMubGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwibGlrZWRcIik7XHJcblxyXG4gICAgICAgICB0aGlzLmRpc2xpa2VfaWNvbi5jbGFzc0xpc3QuYWRkKFwic3RhdGVfX2Rpc2FibGVkXCIpO1xyXG4gICAgICAgICB0aGlzLmRpc2xpa2VfaWNvbi5zZXRBdHRyaWJ1dGUoXCJzdGF0ZVwiLCBcImxpa2VkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5zdGF0ZSA9PSBcImRpc2xpa2VkXCIpIHtcclxuICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgIHRoaXMuZGlzbGlrZV9pY29uLmNsYXNzTGlzdC5hZGQoXCJzdGF0ZV9fYWN0aXZlXCIpO1xyXG4gICAgICAgICB0aGlzLmRpc2xpa2VfaWNvbi5zZXRBdHRyaWJ1dGUoXCJzdGF0ZVwiLCBcImRpc2xpa2VkXCIpO1xyXG5cclxuICAgICAgICAgdGhpcy5saWtlX2ljb24uY2xhc3NMaXN0LmFkZChcInN0YXRlX19kaXNhYmxlZFwiKTtcclxuICAgICAgICAgdGhpcy5saWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJkaXNsaWtlZFwiKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5wcmVwYXJlRmV0Y2ggPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwic3RhdGVcIik7XHJcbiAgICAgIHRoaXMuYnRuX3R5cGUgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmEtdGh1bWJzLXVwXCIpID8gXCJsaWtlXCIgOiBcImRpc2xpa2VcIjtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09IFwibmV1dHJhbFwiKSB7XHJcbiAgICAgICAgIGlmICh0aGlzLmJ0bl90eXBlID09IFwibGlrZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShvcHRpb25zLnVybC5saWtlKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKG9wdGlvbnMudXJsLmRpc2xpa2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSBcImxpa2VkXCIpIHtcclxuICAgICAgICAgdGhpcy51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKG9wdGlvbnMudXJsLnVubGlrZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSBcImRpc2xpa2VkXCIpIHtcclxuICAgICAgICAgdGhpcy51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKG9wdGlvbnMudXJsLnVuZGlzbGlrZSk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMuZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9taXNlID0gZmV0Y2godGhpcy51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5pZCksXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQob3B0aW9ucy50YXJnZXQpO1xyXG59LCAzMDApO1xyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQb3N0KHRhcmdldCkge1xyXG4gICBsZXQgcG9zdF9pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGFyZ2V0LCBcImJveF9fcG9zdFwiKS5nZXRBdHRyaWJ1dGUoXCJwb3N0XCIpO1xyXG4gICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICBkYXRhLmFwcGVuZChcInBvc3RfaWRcIiwgcG9zdF9pZCk7XHJcbiAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZGVsZXRlX3Bvc3RcIik7XHJcbiAgIGxldCBwcm9taXNlID0gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgfSxcclxuICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiBwcm9taXNlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdCh0YXJnZXQpIHtcclxuICAgbGV0IHBvc3RfaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRhcmdldCwgXCJib3hfX3Bvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKTtcclxuICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgZGF0YS5hcHBlbmQoXCJwb3N0X2lkXCIsIHBvc3RfaWQpO1xyXG4gICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcImdldF9wb3N0XCIpO1xyXG4gICBsZXQgcHJvbWlzZSA9IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBkYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgIH0sXHJcbiAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvc3QoZGF0YSkge1xyXG4gICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcImNyZWF0ZV9wb3N0XCIpO1xyXG4gICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgfSxcclxuICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQb3N0KGRhdGEpIHtcclxuICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJlZGl0X3Bvc3RcIik7XHJcbiAgIGNvbnN0IHByb21pc2UgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogZGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICB9LFxyXG4gICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgIH0pO1xyXG5cclxuICAgcmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VIZWFkZXJzKGNvdW50KSB7XHJcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX190ZXh0XCIpLmlubmVySFRNTCA9IGBQb3N0cyAke2NvdW50fWA7XHJcbn1cclxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLmF1dG9Db21wbGV0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgdmFyIGRhdGFBdHRyaWJ1dGUgPSBcImRhdGEtaWRcIjtcbiAgdmFyIHNlbGVjdCA9IHtcbiAgICByZXN1bHRzTGlzdDogXCJhdXRvQ29tcGxldGVfbGlzdFwiLFxuICAgIHJlc3VsdDogXCJhdXRvQ29tcGxldGVfcmVzdWx0XCIsXG4gICAgaGlnaGxpZ2h0OiBcImF1dG9Db21wbGV0ZV9oaWdobGlnaHRlZFwiLFxuICAgIHNlbGVjdGVkUmVzdWx0OiBcImF1dG9Db21wbGV0ZV9zZWxlY3RlZFwiXG4gIH07XG4gIHZhciBrZXlzID0ge1xuICAgIEVOVEVSOiAxMyxcbiAgICBBUlJPV19VUDogMzgsXG4gICAgQVJST1dfRE9XTjogNDBcbiAgfTtcbiAgdmFyIGdldElucHV0ID0gZnVuY3Rpb24gZ2V0SW5wdXQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcigpO1xuICB9O1xuICB2YXIgY3JlYXRlUmVzdWx0c0xpc3QgPSBmdW5jdGlvbiBjcmVhdGVSZXN1bHRzTGlzdChyZW5kZXJSZXN1bHRzKSB7XG4gICAgdmFyIHJlc3VsdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyZW5kZXJSZXN1bHRzLmVsZW1lbnQpO1xuICAgIHJlc3VsdHNMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHNlbGVjdC5yZXN1bHRzTGlzdCk7XG4gICAgaWYgKHJlbmRlclJlc3VsdHMuY29udGFpbmVyKSB7XG4gICAgICByZW5kZXJSZXN1bHRzLmNvbnRhaW5lcihyZXN1bHRzTGlzdCk7XG4gICAgfVxuICAgIHJlbmRlclJlc3VsdHMuZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHJlbmRlclJlc3VsdHMucG9zaXRpb24sIHJlc3VsdHNMaXN0KTtcbiAgICByZXR1cm4gcmVzdWx0c0xpc3Q7XG4gIH07XG4gIHZhciBoaWdobGlnaHQgPSBmdW5jdGlvbiBoaWdobGlnaHQodmFsdWUpIHtcbiAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz1cIi5jb25jYXQoc2VsZWN0LmhpZ2hsaWdodCwgXCI+XCIpLmNvbmNhdCh2YWx1ZSwgXCI8L3NwYW4+XCIpO1xuICB9O1xuICB2YXIgYWRkUmVzdWx0c1RvTGlzdCA9IGZ1bmN0aW9uIGFkZFJlc3VsdHNUb0xpc3QocmVzdWx0c0xpc3QsIGRhdGFTcmMsIHJlc3VsdEl0ZW0pIHtcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZGF0YVNyYy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgcmVjb3JkKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyZXN1bHRJdGVtLmVsZW1lbnQpO1xuICAgICAgdmFyIHJlc3VsdEluZGV4ID0gZGF0YVNyY1tyZWNvcmRdLmluZGV4O1xuICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlLCByZXN1bHRJbmRleCk7XG4gICAgICByZXN1bHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc2VsZWN0LnJlc3VsdCk7XG4gICAgICByZXN1bHRJdGVtLmNvbnRlbnQgPyByZXN1bHRJdGVtLmNvbnRlbnQoZXZlbnQsIHJlc3VsdCkgOiByZXN1bHQuaW5uZXJIVE1MID0gZXZlbnQubWF0Y2ggfHwgZXZlbnQ7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChyZXN1bHQpO1xuICAgIH0pO1xuICAgIHJlc3VsdHNMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgfTtcbiAgdmFyIGNsZWFyUmVzdWx0cyA9IGZ1bmN0aW9uIGNsZWFyUmVzdWx0cyhyZXN1bHRzTGlzdCkge1xuICAgIHJldHVybiByZXN1bHRzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuICB2YXIgb25TZWxlY3Rpb24gPSBmdW5jdGlvbiBvblNlbGVjdGlvbihldmVudCwgZmllbGQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcywgc2VsZWN0aW9uKSB7XG4gICAgZmVlZGJhY2soe1xuICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgcXVlcnk6IGZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCA/IGZpZWxkLnZhbHVlIDogZmllbGQuaW5uZXJIVE1MLFxuICAgICAgbWF0Y2hlczogcmVzdWx0c1ZhbHVlcy5tYXRjaGVzLFxuICAgICAgcmVzdWx0czogcmVzdWx0c1ZhbHVlcy5saXN0Lm1hcChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudmFsdWU7XG4gICAgICB9KSxcbiAgICAgIHNlbGVjdGlvbjogcmVzdWx0c1ZhbHVlcy5saXN0LmZpbmQoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBrZXlzLkVOVEVSKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmluZGV4ID09PSBOdW1iZXIoc2VsZWN0aW9uLmdldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5pbmRleCA9PT0gTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgICBjbGVhclJlc3VsdHMocmVzdWx0c0xpc3QpO1xuICB9O1xuICB2YXIgbmF2aWdhdGlvbiA9IGZ1bmN0aW9uIG5hdmlnYXRpb24oaW5wdXQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcykge1xuICAgIHZhciBsaSA9IHJlc3VsdHNMaXN0LmNoaWxkTm9kZXMsXG4gICAgICAgIGxpTGVuZ3RoID0gbGkubGVuZ3RoIC0gMTtcbiAgICB2YXIgbGlTZWxlY3RlZCA9IHVuZGVmaW5lZCxcbiAgICAgICAgbmV4dDtcbiAgICB2YXIgcmVtb3ZlU2VsZWN0aW9uID0gZnVuY3Rpb24gcmVtb3ZlU2VsZWN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgbGlTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdC5zZWxlY3RlZFJlc3VsdCk7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIG5leHQgPSBsaVNlbGVjdGVkLm5leHRTaWJsaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCA9IGxpU2VsZWN0ZWQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGhpZ2hsaWdodFNlbGVjdGlvbiA9IGZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGlvbihjdXJyZW50KSB7XG4gICAgICBsaVNlbGVjdGVkID0gY3VycmVudDtcbiAgICAgIGxpU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChzZWxlY3Quc2VsZWN0ZWRSZXN1bHQpO1xuICAgIH07XG4gICAgaW5wdXQub25rZXlkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAobGkubGVuZ3RoID4gMCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICBjYXNlIGtleXMuQVJST1dfVVA6XG4gICAgICAgICAgICBpZiAobGlTZWxlY3RlZCkge1xuICAgICAgICAgICAgICByZW1vdmVTZWxlY3Rpb24oMCk7XG4gICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKG5leHQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihsaVtsaUxlbmd0aF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoaWdobGlnaHRTZWxlY3Rpb24obGlbbGlMZW5ndGhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2Uga2V5cy5BUlJPV19ET1dOOlxuICAgICAgICAgICAgaWYgKGxpU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0aW9uKDEpO1xuICAgICAgICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihuZXh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRTZWxlY3Rpb24obGlbMF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoaWdobGlnaHRTZWxlY3Rpb24obGlbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBrZXlzLkVOVEVSOlxuICAgICAgICAgICAgaWYgKGxpU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgb25TZWxlY3Rpb24oZXZlbnQsIGlucHV0LCByZXN1bHRzTGlzdCwgZmVlZGJhY2ssIHJlc3VsdHNWYWx1ZXMsIGxpU2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBsaS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcbiAgICAgIHNlbGVjdGlvbi5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gb25TZWxlY3Rpb24oZXZlbnQsIGlucHV0LCByZXN1bHRzTGlzdCwgZmVlZGJhY2ssIHJlc3VsdHNWYWx1ZXMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIGF1dG9Db21wbGV0ZVZpZXcgPSB7XG4gICAgZ2V0SW5wdXQ6IGdldElucHV0LFxuICAgIGNyZWF0ZVJlc3VsdHNMaXN0OiBjcmVhdGVSZXN1bHRzTGlzdCxcbiAgICBoaWdobGlnaHQ6IGhpZ2hsaWdodCxcbiAgICBhZGRSZXN1bHRzVG9MaXN0OiBhZGRSZXN1bHRzVG9MaXN0LFxuICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb24sXG4gICAgY2xlYXJSZXN1bHRzOiBjbGVhclJlc3VsdHNcbiAgfTtcblxuICB2YXIgQ3VzdG9tRXZlbnRQb2x5ZmlsbCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50UG9seWZpbGwoZXZlbnQsIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfTtcbiAgQ3VzdG9tRXZlbnRQb2x5ZmlsbC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuICB2YXIgQ3VzdG9tRXZlbnRXcmFwcGVyID0gdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICYmIHdpbmRvdy5DdXN0b21FdmVudCB8fCBDdXN0b21FdmVudFBvbHlmaWxsO1xuICB2YXIgaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGwgPSBmdW5jdGlvbiBpbml0RWxlbWVudENsb3Nlc3RQb2x5ZmlsbCgpIHtcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG4gICAgfVxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCkge1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZTtcbiAgICAgICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICB2YXIgUG9seWZpbGwgPSB7XG4gICAgQ3VzdG9tRXZlbnRXcmFwcGVyOiBDdXN0b21FdmVudFdyYXBwZXIsXG4gICAgaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGw6IGluaXRFbGVtZW50Q2xvc2VzdFBvbHlmaWxsXG4gIH07XG5cbiAgdmFyIGF1dG9Db21wbGV0ZSA9XG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBhdXRvQ29tcGxldGUoY29uZmlnKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXV0b0NvbXBsZXRlKTtcbiAgICAgIHZhciBfY29uZmlnJHNlbGVjdG9yID0gY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgIHNlbGVjdG9yID0gX2NvbmZpZyRzZWxlY3RvciA9PT0gdm9pZCAwID8gXCIjYXV0b0NvbXBsZXRlXCIgOiBfY29uZmlnJHNlbGVjdG9yLFxuICAgICAgICAgIF9jb25maWckZGF0YSA9IGNvbmZpZy5kYXRhLFxuICAgICAgICAgIGtleSA9IF9jb25maWckZGF0YS5rZXksXG4gICAgICAgICAgX3NyYyA9IF9jb25maWckZGF0YS5zcmMsXG4gICAgICAgICAgX2NvbmZpZyRkYXRhJGNhY2hlID0gX2NvbmZpZyRkYXRhLmNhY2hlLFxuICAgICAgICAgIGNhY2hlID0gX2NvbmZpZyRkYXRhJGNhY2hlID09PSB2b2lkIDAgPyB0cnVlIDogX2NvbmZpZyRkYXRhJGNhY2hlLFxuICAgICAgICAgIHF1ZXJ5ID0gY29uZmlnLnF1ZXJ5LFxuICAgICAgICAgIF9jb25maWckdHJpZ2dlciA9IGNvbmZpZy50cmlnZ2VyO1xuICAgICAgX2NvbmZpZyR0cmlnZ2VyID0gX2NvbmZpZyR0cmlnZ2VyID09PSB2b2lkIDAgPyB7fSA6IF9jb25maWckdHJpZ2dlcjtcbiAgICAgIHZhciBfY29uZmlnJHRyaWdnZXIkZXZlbnQgPSBfY29uZmlnJHRyaWdnZXIuZXZlbnQsXG4gICAgICAgICAgZXZlbnQgPSBfY29uZmlnJHRyaWdnZXIkZXZlbnQgPT09IHZvaWQgMCA/IFtcImlucHV0XCJdIDogX2NvbmZpZyR0cmlnZ2VyJGV2ZW50LFxuICAgICAgICAgIF9jb25maWckdHJpZ2dlciRjb25kaSA9IF9jb25maWckdHJpZ2dlci5jb25kaXRpb24sXG4gICAgICAgICAgY29uZGl0aW9uID0gX2NvbmZpZyR0cmlnZ2VyJGNvbmRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckdHJpZ2dlciRjb25kaSxcbiAgICAgICAgICBfY29uZmlnJHNlYXJjaEVuZ2luZSA9IGNvbmZpZy5zZWFyY2hFbmdpbmUsXG4gICAgICAgICAgc2VhcmNoRW5naW5lID0gX2NvbmZpZyRzZWFyY2hFbmdpbmUgPT09IHZvaWQgMCA/IFwic3RyaWN0XCIgOiBfY29uZmlnJHNlYXJjaEVuZ2luZSxcbiAgICAgICAgICBfY29uZmlnJHRocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQsXG4gICAgICAgICAgdGhyZXNob2xkID0gX2NvbmZpZyR0aHJlc2hvbGQgPT09IHZvaWQgMCA/IDAgOiBfY29uZmlnJHRocmVzaG9sZCxcbiAgICAgICAgICBfY29uZmlnJGRlYm91bmNlID0gY29uZmlnLmRlYm91bmNlLFxuICAgICAgICAgIGRlYm91bmNlID0gX2NvbmZpZyRkZWJvdW5jZSA9PT0gdm9pZCAwID8gMCA6IF9jb25maWckZGVib3VuY2UsXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCA9IGNvbmZpZy5yZXN1bHRzTGlzdDtcbiAgICAgIF9jb25maWckcmVzdWx0c0xpc3QgPSBfY29uZmlnJHJlc3VsdHNMaXN0ID09PSB2b2lkIDAgPyB7fSA6IF9jb25maWckcmVzdWx0c0xpc3Q7XG4gICAgICB2YXIgX2NvbmZpZyRyZXN1bHRzTGlzdCRyID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5yZW5kZXIsXG4gICAgICAgICAgcmVuZGVyID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckcmVzdWx0c0xpc3QkcixcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdHNMaXN0JGMgPSBfY29uZmlnJHJlc3VsdHNMaXN0LmNvbnRhaW5lcixcbiAgICAgICAgICBjb250YWluZXIgPSBfY29uZmlnJHJlc3VsdHNMaXN0JGMgPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRjLFxuICAgICAgICAgIGRlc3RpbmF0aW9uID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5kZXN0aW5hdGlvbixcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdHNMaXN0JHAgPSBfY29uZmlnJHJlc3VsdHNMaXN0LnBvc2l0aW9uLFxuICAgICAgICAgIHBvc2l0aW9uID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRwID09PSB2b2lkIDAgPyBcImFmdGVyZW5kXCIgOiBfY29uZmlnJHJlc3VsdHNMaXN0JHAsXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCRlID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5lbGVtZW50LFxuICAgICAgICAgIHJlc3VsdHNMaXN0RWxlbWVudCA9IF9jb25maWckcmVzdWx0c0xpc3QkZSA9PT0gdm9pZCAwID8gXCJ1bFwiIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRlLFxuICAgICAgICAgIF9jb25maWckcmVzdWx0c0xpc3QkbiA9IF9jb25maWckcmVzdWx0c0xpc3QubmF2aWdhdGlvbixcbiAgICAgICAgICBuYXZpZ2F0aW9uID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRuID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckcmVzdWx0c0xpc3QkbixcbiAgICAgICAgICBfY29uZmlnJHNvcnQgPSBjb25maWcuc29ydCxcbiAgICAgICAgICBzb3J0ID0gX2NvbmZpZyRzb3J0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckc29ydCxcbiAgICAgICAgICBwbGFjZUhvbGRlciA9IGNvbmZpZy5wbGFjZUhvbGRlcixcbiAgICAgICAgICBfY29uZmlnJG1heFJlc3VsdHMgPSBjb25maWcubWF4UmVzdWx0cyxcbiAgICAgICAgICBtYXhSZXN1bHRzID0gX2NvbmZpZyRtYXhSZXN1bHRzID09PSB2b2lkIDAgPyA1IDogX2NvbmZpZyRtYXhSZXN1bHRzLFxuICAgICAgICAgIF9jb25maWckcmVzdWx0SXRlbSA9IGNvbmZpZy5yZXN1bHRJdGVtO1xuICAgICAgX2NvbmZpZyRyZXN1bHRJdGVtID0gX2NvbmZpZyRyZXN1bHRJdGVtID09PSB2b2lkIDAgPyB7fSA6IF9jb25maWckcmVzdWx0SXRlbTtcbiAgICAgIHZhciBfY29uZmlnJHJlc3VsdEl0ZW0kY28gPSBfY29uZmlnJHJlc3VsdEl0ZW0uY29udGVudCxcbiAgICAgICAgICBjb250ZW50ID0gX2NvbmZpZyRyZXN1bHRJdGVtJGNvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckcmVzdWx0SXRlbSRjbyxcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdEl0ZW0kZWwgPSBfY29uZmlnJHJlc3VsdEl0ZW0uZWxlbWVudCxcbiAgICAgICAgICByZXN1bHRJdGVtRWxlbWVudCA9IF9jb25maWckcmVzdWx0SXRlbSRlbCA9PT0gdm9pZCAwID8gXCJsaVwiIDogX2NvbmZpZyRyZXN1bHRJdGVtJGVsLFxuICAgICAgICAgIG5vUmVzdWx0cyA9IGNvbmZpZy5ub1Jlc3VsdHMsXG4gICAgICAgICAgX2NvbmZpZyRoaWdobGlnaHQgPSBjb25maWcuaGlnaGxpZ2h0LFxuICAgICAgICAgIGhpZ2hsaWdodCA9IF9jb25maWckaGlnaGxpZ2h0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckaGlnaGxpZ2h0LFxuICAgICAgICAgIG9uU2VsZWN0aW9uID0gY29uZmlnLm9uU2VsZWN0aW9uO1xuICAgICAgdmFyIHJlc3VsdHNMaXN0VmlldyA9IHJlbmRlciA/IGF1dG9Db21wbGV0ZVZpZXcuY3JlYXRlUmVzdWx0c0xpc3Qoe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uIHx8IGF1dG9Db21wbGV0ZVZpZXcuZ2V0SW5wdXQoc2VsZWN0b3IpLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIGVsZW1lbnQ6IHJlc3VsdHNMaXN0RWxlbWVudFxuICAgICAgfSkgOiBudWxsO1xuICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICBzcmM6IGZ1bmN0aW9uIHNyYygpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIF9zcmMgPT09IFwiZnVuY3Rpb25cIiA/IF9zcmMoKSA6IF9zcmM7XG4gICAgICAgIH0sXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBjYWNoZTogY2FjaGVcbiAgICAgIH07XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICB0aGlzLnRyaWdnZXIgPSB7XG4gICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAgIH07XG4gICAgICB0aGlzLnNlYXJjaEVuZ2luZSA9IHNlYXJjaEVuZ2luZSA9PT0gXCJsb29zZVwiID8gXCJsb29zZVwiIDogdHlwZW9mIHNlYXJjaEVuZ2luZSA9PT0gXCJmdW5jdGlvblwiID8gc2VhcmNoRW5naW5lIDogXCJzdHJpY3RcIjtcbiAgICAgIHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAgICAgdGhpcy5kZWJvdW5jZSA9IGRlYm91bmNlO1xuICAgICAgdGhpcy5yZXN1bHRzTGlzdCA9IHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHZpZXc6IHJlc3VsdHNMaXN0VmlldyxcbiAgICAgICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvblxuICAgICAgfTtcbiAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICB0aGlzLnBsYWNlSG9sZGVyID0gcGxhY2VIb2xkZXI7XG4gICAgICB0aGlzLm1heFJlc3VsdHMgPSBtYXhSZXN1bHRzO1xuICAgICAgdGhpcy5yZXN1bHRJdGVtID0ge1xuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBlbGVtZW50OiByZXN1bHRJdGVtRWxlbWVudFxuICAgICAgfTtcbiAgICAgIHRoaXMubm9SZXN1bHRzID0gbm9SZXN1bHRzO1xuICAgICAgdGhpcy5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG4gICAgICB0aGlzLm9uU2VsZWN0aW9uID0gb25TZWxlY3Rpb247XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUNsYXNzKGF1dG9Db21wbGV0ZSwgW3tcbiAgICAgIGtleTogXCJzZWFyY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2gocXVlcnksIHJlY29yZCkge1xuICAgICAgICB2YXIgcmVjb3JkTG93ZXJDYXNlID0gcmVjb3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEVuZ2luZSA9PT0gXCJsb29zZVwiKSB7XG4gICAgICAgICAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC8gL2csIFwiXCIpO1xuICAgICAgICAgIHZhciBtYXRjaCA9IFtdO1xuICAgICAgICAgIHZhciBzZWFyY2hQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmVjb3JkTG93ZXJDYXNlLmxlbmd0aDsgbnVtYmVyKyspIHtcbiAgICAgICAgICAgIHZhciByZWNvcmRDaGFyID0gcmVjb3JkW251bWJlcl07XG4gICAgICAgICAgICBpZiAoc2VhcmNoUG9zaXRpb24gPCBxdWVyeS5sZW5ndGggJiYgcmVjb3JkTG93ZXJDYXNlW251bWJlcl0gPT09IHF1ZXJ5W3NlYXJjaFBvc2l0aW9uXSkge1xuICAgICAgICAgICAgICByZWNvcmRDaGFyID0gdGhpcy5oaWdobGlnaHQgPyBhdXRvQ29tcGxldGVWaWV3LmhpZ2hsaWdodChyZWNvcmRDaGFyKSA6IHJlY29yZENoYXI7XG4gICAgICAgICAgICAgIHNlYXJjaFBvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaC5wdXNoKHJlY29yZENoYXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VhcmNoUG9zaXRpb24gIT09IHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWF0Y2guam9pbihcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocmVjb3JkTG93ZXJDYXNlLmluY2x1ZGVzKHF1ZXJ5KSkge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KHF1ZXJ5KSwgXCJpXCIpO1xuICAgICAgICAgICAgcXVlcnkgPSBwYXR0ZXJuLmV4ZWMocmVjb3JkKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodCA/IHJlY29yZC5yZXBsYWNlKHF1ZXJ5LCBhdXRvQ29tcGxldGVWaWV3LmhpZ2hsaWdodChxdWVyeSkpIDogcmVjb3JkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsaXN0TWF0Y2hlZFJlc3VsdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0TWF0Y2hlZFJlc3VsdHMoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICB2YXIgcmVzTGlzdCA9IFtdO1xuICAgICAgICAgIGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyZWNvcmQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKGtleSkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkVmFsdWUgPSBrZXkgPyByZWNvcmRba2V5XSA6IHJlY29yZDtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdHlwZW9mIF90aGlzLnNlYXJjaEVuZ2luZSA9PT0gXCJmdW5jdGlvblwiID8gX3RoaXMuc2VhcmNoRW5naW5lKF90aGlzLnF1ZXJ5VmFsdWUsIHJlY29yZFZhbHVlKSA6IF90aGlzLnNlYXJjaChfdGhpcy5xdWVyeVZhbHVlLCByZWNvcmRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIGtleSkge1xuICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoICYmICFrZXkpIHtcbiAgICAgICAgICAgICAgICAgIHJlc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGF0YS5rZXkpIHtcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF90aGlzLmRhdGEua2V5W1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgc2VhcmNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIGxpc3QgPSBfdGhpcy5zb3J0ID8gcmVzTGlzdC5zb3J0KF90aGlzLnNvcnQpLnNsaWNlKDAsIF90aGlzLm1heFJlc3VsdHMpIDogcmVzTGlzdC5zbGljZSgwLCBfdGhpcy5tYXhSZXN1bHRzKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7XG4gICAgICAgICAgICBtYXRjaGVzOiByZXNMaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIGxpc3Q6IGxpc3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlnbml0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlnbml0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICAgIHZhciBpbnB1dCA9IGF1dG9Db21wbGV0ZVZpZXcuZ2V0SW5wdXQodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlSG9sZGVyKSB7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgdGhpcy5wbGFjZUhvbGRlcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlYm91bmNlID0gZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgICAgICAgICB2YXIgaW5EZWJvdW5jZTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaW5EZWJvdW5jZSk7XG4gICAgICAgICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBleGVjID0gZnVuY3Rpb24gZXhlYyhldmVudCkge1xuICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGlucHV0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCA/IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkgOiBpbnB1dC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB2YXIgcXVlcnlWYWx1ZSA9IF90aGlzMi5xdWVyeVZhbHVlID0gX3RoaXMyLnF1ZXJ5ICYmIF90aGlzMi5xdWVyeS5tYW5pcHVsYXRlID8gX3RoaXMyLnF1ZXJ5Lm1hbmlwdWxhdGUoaW5wdXRWYWx1ZSkgOiBpbnB1dFZhbHVlO1xuICAgICAgICAgIHZhciByZW5kZXJSZXN1bHRzTGlzdCA9IF90aGlzMi5yZXN1bHRzTGlzdC5yZW5kZXI7XG4gICAgICAgICAgdmFyIHRyaWdnZXJDb25kaXRpb24gPSBfdGhpczIudHJpZ2dlci5jb25kaXRpb24gPyBfdGhpczIudHJpZ2dlci5jb25kaXRpb24ocXVlcnlWYWx1ZSkgOiBxdWVyeVZhbHVlLmxlbmd0aCA+IF90aGlzMi50aHJlc2hvbGQgJiYgcXVlcnlWYWx1ZS5yZXBsYWNlKC8gL2csIFwiXCIpLmxlbmd0aDtcbiAgICAgICAgICB2YXIgZXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gZXZlbnRFbWl0dGVyKGV2ZW50LCByZXN1bHRzKSB7XG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBQb2x5ZmlsbC5DdXN0b21FdmVudFdyYXBwZXIoXCJhdXRvQ29tcGxldGVcIiwge1xuICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGlucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgbWF0Y2hlczogcmVzdWx0cyA/IHJlc3VsdHMubWF0Y2hlcyA6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVzdWx0czogcmVzdWx0cyA/IHJlc3VsdHMubGlzdCA6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHJlbmRlclJlc3VsdHNMaXN0KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0c0xpc3QgPSBfdGhpczIucmVzdWx0c0xpc3QudmlldztcbiAgICAgICAgICAgIHZhciBjbGVhclJlc3VsdHMgPSBhdXRvQ29tcGxldGVWaWV3LmNsZWFyUmVzdWx0cyhyZXN1bHRzTGlzdCk7XG4gICAgICAgICAgICBpZiAodHJpZ2dlckNvbmRpdGlvbikge1xuICAgICAgICAgICAgICBfdGhpczIubGlzdE1hdGNoZWRSZXN1bHRzKF90aGlzMi5kYXRhU3RyZWFtLCBldmVudCkudGhlbihmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlcihldmVudCwgbGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5yZXN1bHRzTGlzdC5yZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxpc3QubGVuZ3RoID09PSAwICYmIF90aGlzMi5ub1Jlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLm5vUmVzdWx0cygpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlVmlldy5hZGRSZXN1bHRzVG9MaXN0KHJlc3VsdHNMaXN0LCBsaXN0Lmxpc3QsIF90aGlzMi5yZXN1bHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMi5vblNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZXN1bHRzTGlzdC5uYXZpZ2F0aW9uID8gX3RoaXMyLnJlc3VsdHNMaXN0Lm5hdmlnYXRpb24oZXZlbnQsIGlucHV0LCByZXN1bHRzTGlzdCwgX3RoaXMyLm9uU2VsZWN0aW9uLCBsaXN0KSA6IGF1dG9Db21wbGV0ZVZpZXcubmF2aWdhdGlvbihpbnB1dCwgcmVzdWx0c0xpc3QsIF90aGlzMi5vblNlbGVjdGlvbiwgbGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFyZW5kZXJSZXN1bHRzTGlzdCAmJiB0cmlnZ2VyQ29uZGl0aW9uKSB7XG4gICAgICAgICAgICBfdGhpczIubGlzdE1hdGNoZWRSZXN1bHRzKF90aGlzMi5kYXRhU3RyZWFtLCBldmVudCkudGhlbihmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgICBldmVudEVtaXR0ZXIoZXZlbnQsIGxpc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcnVuID0gZnVuY3Rpb24gcnVuKGV2ZW50KSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKF90aGlzMi5kYXRhLmNhY2hlID8gX3RoaXMyLmRhdGFTdHJlYW0gOiBfdGhpczIuZGF0YS5zcmMoKSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMyLmRhdGFTdHJlYW0gPSBkYXRhO1xuICAgICAgICAgICAgZXhlYyhldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJpZ2dlci5ldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFR5cGUpIHtcbiAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZGVib3VuY2UoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcnVuKGV2ZW50KTtcbiAgICAgICAgICB9LCBfdGhpczIuZGVib3VuY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWNoZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh0aGlzLmRhdGEuc3JjKCkpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzMy5kYXRhU3RyZWFtID0gZGF0YTtcbiAgICAgICAgICAgIF90aGlzMy5pZ25pdGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlnbml0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFBvbHlmaWxsLmluaXRFbGVtZW50Q2xvc2VzdFBvbHlmaWxsKCk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBhdXRvQ29tcGxldGU7XG4gIH0oKTtcblxuICByZXR1cm4gYXV0b0NvbXBsZXRlO1xuXG59KSkpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICB2YXIgcm91dGluZyA9IGZhY3RvcnkoKTtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCByb3V0aW5nLlJvdXRpbmcpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcm91dGluZy5Sb3V0aW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QuUm91dGluZyA9IHJvdXRpbmcuUm91dGluZztcbiAgICAgICAgcm9vdC5mb3MgPSB7XG4gICAgICAgICAgICBSb3V0ZXI6IHJvdXRpbmcuUm91dGVyXG4gICAgICAgIH07XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgdGhlIFJvdXRlciBjbGFzcy5cbiAqXG4gKiBZb3UgY2FuIGNvbXBpbGUgdGhpcyBmaWxlIGJ5IHJ1bm5pbmcgdGhlIGZvbGxvd2luZyBjb21tYW5kIGZyb20gdGhlIFJlc291cmNlcyBmb2xkZXI6XG4gKlxuICogICAgbnBtIGluc3RhbGwgJiYgbnBtIHJ1biBidWlsZFxuICovXG5cbi8qKlxuICogQ2xhc3MgUm91dGVyXG4gKi9cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUm91dGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtSb3V0ZXIuQ29udGV4dD19IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+PX0gcm91dGVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gUm91dGVyKGNvbnRleHQsIHJvdXRlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgICAgICB0aGlzLmNvbnRleHRfID0gY29udGV4dCB8fCB7IGJhc2VfdXJsOiAnJywgcHJlZml4OiAnJywgaG9zdDogJycsIHBvcnQ6ICcnLCBzY2hlbWU6ICcnLCBsb2NhbGU6ICcnIH07XG4gICAgICAgIHRoaXMuc2V0Um91dGVzKHJvdXRlcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJucyB7Um91dGVyfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUm91dGVyLCBbe1xuICAgICAgICBrZXk6ICdzZXRSb3V0aW5nRGF0YScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBkYXRhIGZvciB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvdXRpbmdEYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFzZVVybChkYXRhWydiYXNlX3VybCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Um91dGVzKGRhdGFbJ3JvdXRlcyddKTtcblxuICAgICAgICAgICAgaWYgKCdwcmVmaXgnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZpeChkYXRhWydwcmVmaXgnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ3BvcnQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvcnQoZGF0YVsncG9ydCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnbG9jYWxlJyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbGUoZGF0YVsnbG9jYWxlJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEhvc3QoZGF0YVsnaG9zdCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NoZW1lKGRhdGFbJ3NjaGVtZSddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+fSByb3V0ZXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFJvdXRlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlc18gPSBPYmplY3QuZnJlZXplKHJvdXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT59IHJvdXRlc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Um91dGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc187XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEJhc2VVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QmFzZVVybChiYXNlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmJhc2VfdXJsID0gYmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRCYXNlVXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJhc2VVcmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRQcmVmaXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0U2NoZW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjaGVtZShzY2hlbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uc2NoZW1lID0gc2NoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNjaGVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY2hlbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SG9zdChob3N0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmhvc3QgPSBob3N0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SG9zdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnRcbiAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3J0KHBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucG9ydCA9IHBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3J0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0TG9jYWxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TG9jYWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYnVpbGRRdWVyeVBhcmFtcycsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHF1ZXJ5IHN0cmluZyBwYXJhbXMgYWRkZWQgdG8gYSBVUkwuXG4gICAgICAgICAqIFBvcnQgb2YgalF1ZXJ5J3MgJC5wYXJhbSgpIGZ1bmN0aW9uLCBzbyBjcmVkaXQgaXMgZHVlIHRoZXJlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFkZFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCBwYXJhbXMsIGFkZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIG5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgcmJyYWNrZXQgPSBuZXcgUmVnRXhwKC9cXFtcXF0kLyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkKHByZWZpeCwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcgPyBpIDogJycpICsgJ10nLCB2YWwsIGFkZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhcmFtcykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCArICdbJyArIG5hbWUgKyAnXScsIHBhcmFtc1tuYW1lXSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHJhdyByb3V0ZSBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEByZXR1cm4ge1JvdXRlci5Sb3V0ZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFJvdXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXhlZE5hbWUgPSB0aGlzLmNvbnRleHRfLnByZWZpeCArIG5hbWU7XG4gICAgICAgICAgICB2YXIgc2Y0MWkxOG5OYW1lID0gbmFtZSArICcuJyArIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkU2Y0MWkxOG5OYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgICAgICB2YXIgdmFyaWFudHMgPSBbcHJlZml4ZWROYW1lLCBzZjQxaTE4bk5hbWUsIHByZWZpeGVkU2Y0MWkxOG5OYW1lLCBuYW1lXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2YXJpYW50cykge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYW50c1tpXSBpbiB0aGlzLnJvdXRlc18pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzX1t2YXJpYW50c1tpXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyB0aGUgVVJMIGZvciBhIHJvdXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRfcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWJzb2x1dGVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2VuZXJhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGUobmFtZSwgb3B0X3BhcmFtcykge1xuICAgICAgICAgICAgdmFyIGFic29sdXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHJvdXRlID0gdGhpcy5nZXRSb3V0ZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBvcHRfcGFyYW1zIHx8IHt9LFxuICAgICAgICAgICAgICAgIHVudXNlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBwYXJhbXMpLFxuICAgICAgICAgICAgICAgIHVybCA9ICcnLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3N0ID0gJycsXG4gICAgICAgICAgICAgICAgcG9ydCA9IHR5cGVvZiB0aGlzLmdldFBvcnQoKSA9PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuZ2V0UG9ydCgpID09PSBudWxsID8gJycgOiB0aGlzLmdldFBvcnQoKTtcblxuICAgICAgICAgICAgcm91dGUudG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gUm91dGVyLmVuY29kZVBhdGhDb21wb25lbnQodG9rZW5bMV0pICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0RlZmF1bHQgPSByb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSBvcHRpb25hbCB8fCAhaGFzRGVmYXVsdCB8fCB0b2tlblszXSBpbiBwYXJhbXMgJiYgcGFyYW1zW3Rva2VuWzNdXSAhPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyArIHRva2VuWzNdICsgJ1wiLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1wdHkgPSB0cnVlID09PSB2YWx1ZSB8fCBmYWxzZSA9PT0gdmFsdWUgfHwgJycgPT09IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcHR5IHx8ICFvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmNvZGVkVmFsdWUgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ251bGwnID09PSBlbmNvZGVkVmFsdWUgJiYgbnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBlbmNvZGVkVmFsdWUgKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCAmJiB0b2tlblszXSBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInICsgdG9rZW5bMF0gKyAnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXJsID09PSAnJykge1xuICAgICAgICAgICAgICAgIHVybCA9ICcvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm91dGUuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgIGlmICgndGV4dCcgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIGhvc3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5bM10gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBob3N0ID0gdG9rZW5bMV0gKyB2YWx1ZSArIGhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBGb28tYmFyIVxuICAgICAgICAgICAgdXJsID0gdGhpcy5jb250ZXh0Xy5iYXNlX3VybCArIHVybDtcblxuICAgICAgICAgICAgaWYgKHJvdXRlLnJlcXVpcmVtZW50cyAmJiBcIl9zY2hlbWVcIiBpbiByb3V0ZS5yZXF1aXJlbWVudHMgJiYgdGhpcy5nZXRTY2hlbWUoKSAhPSByb3V0ZS5yZXF1aXJlbWVudHNbXCJfc2NoZW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcblxuICAgICAgICAgICAgICAgIHVybCA9IHJvdXRlLnJlcXVpcmVtZW50c1tcIl9zY2hlbWVcIl0gKyBcIjovL1wiICsgY3VycmVudEhvc3QgKyAoY3VycmVudEhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXMgJiYgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXNbMF0gJiYgdGhpcy5nZXRTY2hlbWUoKSAhPT0gcm91dGUuc2NoZW1lc1swXSkge1xuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEhvc3QgPSBob3N0IHx8IHRoaXMuZ2V0SG9zdCgpO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gcm91dGUuc2NoZW1lc1swXSArIFwiOi8vXCIgKyBfY3VycmVudEhvc3QgKyAoX2N1cnJlbnRIb3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvc3QgJiYgdGhpcy5nZXRIb3N0KCkgIT09IGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRTY2hlbWUoKSArIFwiOi8vXCIgKyBob3N0ICsgKGhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzb2x1dGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIHRoaXMuZ2V0SG9zdCgpICsgKHRoaXMuZ2V0SG9zdCgpLmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1bnVzZWRQYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gY2FsbCBpdCBhbmQgYXNzaWduIGl0J3MgcmV0dXJuIHZhbHVlIGFzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoKSA6IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBudWxsIHRvIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKFJvdXRlci5lbmNvZGVRdWVyeUNvbXBvbmVudChrZXkpICsgJz0nICsgUm91dGVyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAocHJlZml4IGluIHVudXNlZFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCB1bnVzZWRQYXJhbXNbcHJlZml4XSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBxdWVyeVBhcmFtcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gc3RyaW5nIGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdnZXRJbnN0YW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0aW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3VyZXMgdGhlIGN1cnJlbnQgUm91dGVyIGluc3RhbmNlIHdpdGggdGhlIHByb3ZpZGVkIGRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERhdGEoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJvdXRlciA9IFJvdXRlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgICAgICByb3V0ZXIuc2V0Um91dGluZ0RhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2N1c3RvbUVuY29kZVVSSUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUyRi9nLCAnLycpLnJlcGxhY2UoLyU0MC9nLCAnQCcpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyMS9nLCAnIScpLnJlcGxhY2UoLyUzQi9nLCAnOycpLnJlcGxhY2UoLyUyQy9nLCAnLCcpLnJlcGxhY2UoLyUyQS9nLCAnKicpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC8nL2csICclMjcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBwYXRoIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUGF0aENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVQYXRoQ29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTNEL2csICc9JykucmVwbGFjZSgvJTJCL2csICcrJykucmVwbGFjZSgvJTIxL2csICchJykucmVwbGFjZSgvJTdDL2csICd8Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1ldGVyIG9yIHZhbHVlIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUXVlcnlDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5jb2RlUXVlcnlDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lM0YvZywgJz8nKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3V0ZXI7XG59KCk7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgICB0b2tlbnM6IChBcnJheS48QXJyYXkuPHN0cmluZz4+KSxcbiAqICAgICBkZWZhdWx0czogKE9iamVjdC48c3RyaW5nLCBzdHJpbmc+KSxcbiAqICAgICByZXF1aXJlbWVudHM6IE9iamVjdCxcbiAqICAgICBob3N0dG9rZW5zOiAoQXJyYXkuPHN0cmluZz4pXG4gKiB9fVxuICovXG5cblxuUm91dGVyLlJvdXRlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgICAgYmFzZV91cmw6IChzdHJpbmcpXG4gKiB9fVxuICovXG5Sb3V0ZXIuQ29udGV4dDtcblxuLyoqXG4gKiBSb3V0ZXIgc2luZ2xldG9uLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7Um91dGVyfVxuICovXG52YXIgUm91dGluZyA9IG5ldyBSb3V0ZXIoKTtcblxuICAgIHJldHVybiB7IFJvdXRlcjogUm91dGVyLCBSb3V0aW5nOiBSb3V0aW5nIH07XG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==