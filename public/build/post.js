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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/post.js");
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

/***/ "./assets/js/post.js":
/*!***************************!*\
  !*** ./assets/js/post.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pagination */ "./assets/js/components/pagination.js");
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes */ "./assets/js/likes.js");
/* harmony import */ var _post_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post_controller */ "./assets/js/post_controller.js");
/* harmony import */ var _editDOM_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editDOM/_post */ "./assets/js/editDOM/_post.js");
/* harmony import */ var _components_modals_response_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modals/_response_list */ "./assets/js/components/modals/_response_list.js");
/* harmony import */ var _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modals/_comments_list */ "./assets/js/components/modals/_comments_list.js");
/* harmony import */ var _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modals/_edit_post */ "./assets/js/components/modals/_edit_post.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dropdown */ "./assets/js/components/dropdown.js");
/* harmony import */ var _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modals/_delete_post */ "./assets/js/components/modals/_delete_post.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./folder */ "./assets/js/folder.js");
/* harmony import */ var _form_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form_post */ "./assets/js/form_post.js");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tags */ "./assets/js/components/tags.js");
/* harmony import */ var _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modals/_edit_comment */ "./assets/js/components/modals/_edit_comment.js");
/* harmony import */ var _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modals/_delete_comment */ "./assets/js/components/modals/_delete_comment.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/comments */ "./assets/js/components/comments.js");
/* harmony import */ var _components_modals_tagged_post__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modals/_tagged_post */ "./assets/js/components/modals/_tagged_post.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_17__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




















var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes);

function ReadPost() {
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
          new _components_modals_tagged_post__WEBPACK_IMPORTED_MODULE_16__["TaggedPost"]({
            id: "box__modal",
            target: e.target,
            style_class: "style-class__tagged-post",
            renderpaginated: function renderpaginated() {
              return _this.taggedPostPagination();
            },
            rendersort: function rendersort() {
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"]({
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
          new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_5__["responseList"]({
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
          new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_5__["responseList"]({
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
          new _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_6__["CommentsList"]({
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
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Icon"]({
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
                              new _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_14__["DeleteComment"]({
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
                              new _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_13__["EditComment"]({
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
                                            _components_comments__WEBPACK_IMPORTED_MODULE_15__["EditComment"](response);

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
              new _likes__WEBPACK_IMPORTED_MODULE_2__["UpdateLikes"]({
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
              new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_5__["responseList"]({
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
          new _components_modals_comments_list__WEBPACK_IMPORTED_MODULE_6__["CommentsList"]({
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
              new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Icon"]({
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
                              new _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_14__["DeleteComment"]({
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
                              new _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_13__["EditComment"]({
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
              new _likes__WEBPACK_IMPORTED_MODULE_2__["UpdateLikes"]({
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
              new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_5__["responseList"]({
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
        new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Icon"]({
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

                      new _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_9__["DeletePost"]({
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
                      return _folder__WEBPACK_IMPORTED_MODULE_10__["getFoldersNames"]();

                    case 7:
                      folders_names = _context11.sent;
                      new _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_7__["EditPost"]({
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
                          _components_tags__WEBPACK_IMPORTED_MODULE_12__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_12__["createTag"](value));
                        },
                        rendertags: function rendertags(t) {
                          t.forEach(function (tag) {
                            _components_tags__WEBPACK_IMPORTED_MODULE_12__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_12__["createTag"](tag.name));
                          });
                        },
                        renderdropdown: function renderdropdown() {
                          new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"]({
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
                                new createFolderModal.CreateFolder({
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
                                              return _folder__WEBPACK_IMPORTED_MODULE_10__["getFoldersNames"]();

                                            case 2:
                                              folders_names = _context10.sent;
                                              _folder__WEBPACK_IMPORTED_MODULE_10__["updateFoldersList"]({
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
                          _form_post__WEBPACK_IMPORTED_MODULE_11__["renderAutoComplete"]();
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
        new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Icon"]({
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

                      new _components_modals_delete_post__WEBPACK_IMPORTED_MODULE_9__["DeletePost"]({
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
                      return _folder__WEBPACK_IMPORTED_MODULE_10__["getFoldersNames"]();

                    case 7:
                      folders_names = _context15.sent;
                      new _components_modals_edit_post__WEBPACK_IMPORTED_MODULE_7__["EditPost"]({
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
                          _components_tags__WEBPACK_IMPORTED_MODULE_12__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_12__["createTag"](value));
                        },
                        rendertags: function rendertags(t) {
                          t.forEach(function (tag) {
                            _components_tags__WEBPACK_IMPORTED_MODULE_12__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_12__["createTag"](tag.name));
                          });
                        },
                        renderdropdown: function renderdropdown() {
                          new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"]({
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
                                new createFolderModal.CreateFolder({
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
                                              return _folder__WEBPACK_IMPORTED_MODULE_10__["getFoldersNames"]();

                                            case 2:
                                              folders_names = _context14.sent;
                                              _folder__WEBPACK_IMPORTED_MODULE_10__["updateFoldersList"]({
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
                          _form_post__WEBPACK_IMPORTED_MODULE_11__["renderAutoComplete"]();
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
                    new createFolderModal.CreateFolder({
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
                              return _folder__WEBPACK_IMPORTED_MODULE_10__["getFoldersNames"]();

                            case 2:
                              folders_names = _context24.sent;
                              new createPostModal.CreatePost({
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
                                    _components_tags__WEBPACK_IMPORTED_MODULE_12__["addTag"](_components_tags__WEBPACK_IMPORTED_MODULE_12__["createTag"](value));
                                  }
                                },
                                renderdropdown: function renderdropdown() {
                                  new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"]({
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
                                        new createFolderModal.CreateFolder({
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
                                                      return _folder__WEBPACK_IMPORTED_MODULE_10__["getFoldersNames"]();

                                                    case 2:
                                                      folders_names = _context23.sent;
                                                      _folder__WEBPACK_IMPORTED_MODULE_10__["updateFoldersList"]({
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
                                  _form_post__WEBPACK_IMPORTED_MODULE_11__["renderAutoComplete"]();
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
   * TAG PAGINATION
   */

  this.taggedPostPagination = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
    var tag_pagination_settings;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
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
            return _context26.abrupt("return", new _components_pagination__WEBPACK_IMPORTED_MODULE_1__["CreatePagination"](tag_pagination_settings));

          case 2:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  this.openTag = function () {
    /**
     * OPEN TAG
     */
    var tags_tag = document.querySelectorAll(".post__tag");
    tags_tag.forEach(function (tag) {
      tag.addEventListener("click", function (e) {
        self.pagination_data.tag_modal_tag = e.target.getAttribute("tag");
        new _components_modals_tagged_post__WEBPACK_IMPORTED_MODULE_16__["TaggedPost"]({
          id: "box__modal",
          target: e.target,
          style_class: "style-class__tagged-post",
          renderpaginated: function renderpaginated() {
            return _this.taggedPostPagination();
          },
          rendersort: function rendersort() {
            new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"]({
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
  };
  /**
   * TOGGLE LIKES
   */


  this.toggleLikes = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
    var toggle_likes;
    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            toggle_likes = document.querySelectorAll(".toogle_likes");
            toggle_likes.forEach(function (btn) {
              btn.addEventListener("click", function (event) {
                new _likes__WEBPACK_IMPORTED_MODULE_2__["UpdateLikes"]({
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

          case 2:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));
  /**
   * MODAL RESPONSE LIST
   */

  this.responseListModal = function () {
    var tooltip_toggle = document.querySelectorAll(".trigger__modal");
    tooltip_toggle.forEach(function (span) {
      span.addEventListener("click", function (e) {
        new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_5__["responseList"]({
          id: "box__modal",
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
  };

  this.commentsController = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
    return regeneratorRuntime.wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            /**
             * CREATE COMMENT
             */
            _components_comments__WEBPACK_IMPORTED_MODULE_15__["CommentsController"]({
              container: ".box__comments",
              input_comment: ".input__comment",
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
                new _components_dropdown__WEBPACK_IMPORTED_MODULE_8__["Icon"]({
                  id: "menu__dropdown-".concat(comment.id),
                  data: data,
                  trigger: ".icon__comment-".concat(comment.id),
                  item_overlay: "overlay__comment",
                  item_overlay_bg: self.colors.item_overlay.dropdown,
                  cb: function () {
                    var _cb9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(target) {
                      var _data;

                      return regeneratorRuntime.wrap(function _callee30$(_context30) {
                        while (1) {
                          switch (_context30.prev = _context30.next) {
                            case 0:
                              if (!target.classList.contains("dd__delete")) {
                                _context30.next = 4;
                                break;
                              }

                              new _components_modals_delete_comment__WEBPACK_IMPORTED_MODULE_14__["DeleteComment"]({
                                id: "box__modal",
                                target: target,
                                style_class: "style-class__comment-delete",
                                item_overlay: "overlay__comment",
                                item_overlay_bg: self.colors.item_overlay.deletePostModalSecondary,
                                cb: function () {
                                  var _cb10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(btn) {
                                    return regeneratorRuntime.wrap(function _callee28$(_context28) {
                                      while (1) {
                                        switch (_context28.prev = _context28.next) {
                                          case 0:
                                            if (btn) {}

                                          case 1:
                                          case "end":
                                            return _context28.stop();
                                        }
                                      }
                                    }, _callee28);
                                  }));

                                  function cb(_x9) {
                                    return _cb10.apply(this, arguments);
                                  }

                                  return cb;
                                }()
                              });
                              /**
                               * MODAL EDIT
                               */

                              _context30.next = 9;
                              break;

                            case 4:
                              if (!target.classList.contains("dd__edit")) {
                                _context30.next = 9;
                                break;
                              }

                              _context30.next = 7;
                              return _components_comments__WEBPACK_IMPORTED_MODULE_15__["getComment"](target);

                            case 7:
                              _data = _context30.sent;
                              new _components_modals_edit_comment__WEBPACK_IMPORTED_MODULE_13__["EditComment"]({
                                id: "box__modal",
                                target: target,
                                data: _data,
                                style_class: "style-class__comment-edit",
                                item_overlay: "overlay__comment",
                                item_overlay_bg: self.colors.item_overlay.editPostModalSecondary,
                                onsubmit: function () {
                                  var _onsubmit11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(comment) {
                                    return regeneratorRuntime.wrap(function _callee29$(_context29) {
                                      while (1) {
                                        switch (_context29.prev = _context29.next) {
                                          case 0:
                                          case "end":
                                            return _context29.stop();
                                        }
                                      }
                                    }, _callee29);
                                  }));

                                  function onsubmit(_x10) {
                                    return _onsubmit11.apply(this, arguments);
                                  }

                                  return onsubmit;
                                }()
                              });

                            case 9:
                            case "end":
                              return _context30.stop();
                          }
                        }
                      }, _callee30);
                    }));

                    function cb(_x8) {
                      return _cb9.apply(this, arguments);
                    }

                    return cb;
                  }()
                });
              },
              onclickLikes: function onclickLikes(target) {
                /**
                 * TOGGLE LIKES
                 */
                new _likes__WEBPACK_IMPORTED_MODULE_2__["UpdateLikes"]({
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
                new _components_modals_response_list__WEBPACK_IMPORTED_MODULE_5__["responseList"]({
                  id: "box__modal",
                  target: target,
                  attr: {
                    classname: "box__comment",
                    attr: "comment"
                  },
                  url: "comment_likes",
                  style_class: "style-class__response-list"
                });
              }
            });

          case 1:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  }));
  /**
   * RENDER MODAL POSTS PAGINATED
   */

  this.renderPostsByTag = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(data, container) {
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
              _editDOM_post__WEBPACK_IMPORTED_MODULE_4__["noContent"](container, text);
              return _context32.abrupt("return", false);

            case 4:
              _editDOM_post__WEBPACK_IMPORTED_MODULE_4__["addPosts"]({
                data: data.main_data,
                container: container,
                dropdown_trigger_id: "dd-trigger__post-modal",
                dropdown_container_id: "dd-container__post-modal",
                getUser: function getUser() {
                  return _this.profile_data;
                }
              }); // accordion.expandAccordions();

              /**
               * TOGGLE LIKES
               */

              _likes__WEBPACK_IMPORTED_MODULE_2__["toggleLikes"]();
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

            case 10:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }();

  this.disableComments = function () {
    if (_this.profile_data.logged) return;
    var placeholder = "To write a comment please sign in";
    var comment_input = document.querySelector(".input__comment");
    comment_input.setAttribute("placeholder", placeholder);
    comment_input.setAttribute("disabled", "disabled");
  };
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

            _this.toggleLikes();

            _this.responseListModal();

            _this.commentsController();

            _this.openTag();

            _this.disableComments();

          case 8:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  }));
  this.init();
}

document.addEventListener("DOMContentLoaded", function () {
  new ReadPost();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vZGFscy9fY29tbWVudHNfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tb2RhbHMvX2RlbGV0ZV9jb21tZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vZGFscy9fZGVsZXRlX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9kYWxzL19lZGl0X2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9kYWxzL19lZGl0X3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbW9kYWxzL19yZXNwb25zZV9saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21vZGFscy9fdGFnZ2VkX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy90YWdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lZGl0RE9NL19mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VkaXRET00vX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybV9wb3N0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWtlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9zdF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGFyZWtyYWFmYXQvYXV0b2NvbXBsZXRlLmpzL2Rpc3QvanMvYXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJhZGRFdiIsImFjY29yZGlvbl9fdHJpZ2dlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0cmFuc2Zvcm0iLCJzY3JvbGxIZWlnaHQiLCJleHBhbmRBY2NvcmRpb25zIiwiUm91dGluZyIsInJlcXVpcmUiLCJSb3V0ZXMiLCJzZXRSb3V0aW5nRGF0YSIsIkNvbW1lbnRzQ29udHJvbGxlciIsIm9wdGlvbnMiLCJzZWxmIiwiaW5pdCIsImNvbnRhaW5lciIsImFkZElucHV0RXYiLCJwcmV2aWV3SW1hZ2UiLCJwcmVwYXJlRmV0Y2hHZXRDb21tZW50cyIsImZldGNoRGF0YSIsImRhdGEiLCJ1c2VyIiwiZ2V0VXNlciIsImNvbW1lbnRfZGF0YSIsImNvbW1lbnQiLCJyZW5kZXIiLCJjb21tZW50c0RhdGEiLCJpbnB1dCIsImlucHV0X2NvbW1lbnQiLCJlIiwia2V5Q29kZSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsInByZXZlbnREZWZhdWx0IiwicHJlcGFyZUZldGNoUG9zdENvbW1lbnQiLCJpbm5lckhUTUwiLCJjb3VudCIsImZpbGUiLCJpbnBGaWxlIiwiZGlzcGxheSIsInByZXZpZXdDb250YWluZXIiLCJwb3N0X2lkIiwiaGVscGVycyIsImdldEF0dHJpYnV0ZSIsImZldGNoX2JvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsImdlbmVyYXRlIiwiY29tbWVudF90ZXh0IiwicHJvbWlzZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImh0bWwiLCJjb21tZW50X2F1dGhvciIsImF2YXRhciIsInByb2ZpbGUiLCJmaXJzdG5hbWUiLCJpbWdfYXR0YWNoZWQiLCJzdGF0ZSIsImxpa2VzIiwiZGlzbGlrZXMiLCJjcmVhdGVkQXQiLCJjb21tZW50c19jb250YWluZXIiLCJhcHBlbmRDaGlsZCIsInByZXBlbmQiLCJhZGRMaWtlc0V2IiwiZHJvcGRvd24iLCJhZGRSZXNwb25zZUxpc3RFdiIsImNvbW1lbnRlZF9wb3N0IiwiYXV0aG9yIiwicmVtb3ZlIiwidG9nZ2xlcnMiLCJ0b2dnbGVyIiwib25jbGlja0xpa2VzIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyIiwib25jbGlja0NvdW50IiwiYnRuQ2xlYXIiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZ2V0Q29tbWVudCIsIlJlbmRlckNvbW1lbnQiLCJyZW5kZXJDb21tZW50IiwiY29tbWVudHMiLCJyZXNwb25zZSIsIkRlbGV0ZUNvbW1lbnQiLCJzdWNjZXNzIiwiRWRpdENvbW1lbnQiLCJpbWdfY29udGFpbmVyIiwiSWNvbiIsImdldEVsZW1lbnRCeUlkIiwicGFuZWwiLCJjYXJkIiwiaXRlbXMiLCJpdGVtX292ZXJsYXkiLCJ1bmRlZmluZWQiLCJ2aXNpYmlsaXR5IiwiaXRlbSIsImljb25fY2xhc3MiLCJidG5fdGV4dCIsImJ0bl9jdXN0b21fY2xhc3MiLCJodG1sMiIsIm92ZXJsYXkiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJoaWRlIiwic2hvdyIsImJ1dHRvbnMiLCJjbGlja2VkIiwiYWRkRHJvcGRvd24iLCJ3aW5kb3ciLCJkcm9wZG93bnMiLCJhZGRHZXR0ZXIiLCJnZXRkZCIsImVsZW0iLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsImRkIiwiYmFja2dyb3VuZCIsIml0ZW1fb3ZlcmxheV9iZyIsIm92ZXJsYXlzIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY2IiLCJEcm9wZG93biIsImN1c3RvbVN0eWxlIiwid2lkdGgiLCJkZWZhdWx0X2F0dHIiLCJhcnJvdyIsInBsYWNlaG9sZGVyIiwiZGRfaXRlbSIsImRkX2l0ZW1fYXR0ciIsImF0dHIiLCJib3R0b21faXRlbSIsImdldGRkdiIsImNvbnRhaW5zIiwibmV3dmFsIiwib25tb3VzZWRvd24iLCJhdXRvY2xvc2UiLCJDb21tZW50c0xpc3QiLCJyZW5kZXJNb2RhbEJvZHkiLCJzdHlsZV9jbGFzcyIsIm1vZGFsX292ZXJsYXkiLCJsZW5ndGgiLCJib3giLCJsaXN0Iiwib3BhY2l0eSIsInNlY29uZGFyeV9vdmVybGF5Iiwic2Vjb25kYXJ5X292ZXJsYXlfYmciLCJyZW5kZXJNb2RhbEl0ZW0iLCJkcm9wZG93bl9jb250YWluZXIiLCJkcm9wZG93bl90cmlnZ2VyIiwicmVuZGVySW5wdXQiLCJkZWZhdWx0X2ltZyIsInByb2ZpbGVfZGF0YSIsImxvY2siLCJsb2dnZWQiLCJjb3VudGVycyIsImNvdW50ZXIiLCJwb3N0cyIsInBvc3QiLCJoaWRlTW9kYWwiLCJidG5fY2xvc2UiLCJyZW5kZXJNb2RhbCIsIm1vZGFsX3dpbmRvdyIsImJ0bl9zdWJtaXQiLCJwcmVwYXJlRmV0Y2giLCJ1cGRhdGVET00iLCJvbnN1Ym1pdCIsImJ0bl9jYW5jZWwiLCJEZWxldGVQb3N0IiwiZ2V0RGF0YSIsInByZXZpZXdUZXh0IiwicmVtb3ZlX2ltZyIsImFkZFZhbHVlcyIsInRleHQiLCJpbWFnZSIsIkVkaXRQb3N0IiwiY3NyZiIsImdldENTUkYiLCJ0b2tlbiIsImVycm9yX2ZpZWxkcyIsInJlbmRlcmRyb3Bkb3duIiwicmVuZGVyYXV0b2NvbXBsZXRlIiwiZWRpdFBvc3QiLCJoaWRlRXJyb3JzIiwiZGlzcGxheUVycm9ycyIsInRhZ19pbnB1dCIsImtleSIsIm9udGFnY3JlYXRlIiwicHJldmlld0Zyb250Q292ZXIiLCJpbnB1dEZyb250IiwicHJldmlld0Zyb250IiwicHJldmlld0Zyb250VGV4dCIsImJ0bkZyb250Q2xlYXIiLCJwcmV2aWV3SGVhZGVyQ292ZXIiLCJpbnB1dEhlYWRlciIsInByZXZpZXdIZWFkZXIiLCJwcmV2aWV3SGVhZGVyVGV4dCIsImJ0bkhlYWRlckNsZWFyIiwiZ2V0UG9zdCIsInBvc3RfZGF0YSIsInRpdGxlIiwiZnJvbnRfY292ZXJfbGluayIsImhlYWRlcl9jb3Zlcl9saW5rIiwicmVuZGVydGFncyIsInRhZ3MiLCJmb2xkZXIiLCJuYW1lIiwiZm9sZGVyX2lkIiwiZm9ybSIsInRhZ3Nfc2VsZWN0ZWQiLCJ0YWdfbmFtZXMiLCJ0YWciLCJ0YWdfbmFtZSIsInRhZ3NfY29udGFpbmVyIiwidGFnX2VsZW1lbnQiLCJlcnJvciIsImVycm9ycyIsInN0cl8xIiwiY2F1c2UiLCJwcm9wZXJ0eVBhdGgiLCJyZXBsYWNlIiwibWVzc2FnZSIsInJlc3BvbnNlTGlzdCIsImRhdGFfdGFyZ2V0IiwibGFzdG5hbWUiLCJjbGFzc25hbWUiLCJsaWtlc19mcm9tIiwiZGlzbGlrZXNfZnJvbSIsIlRhZ2dlZFBvc3QiLCJ6SW5kZXgiLCJyZW5kZXJzb3J0IiwicmVuZGVycGFnaW5hdGVkIiwic2V0SGVhZGVyIiwiaGVhZGVyIiwicGFnaW5hdGlvbl9kYXRhIiwiQ3JlYXRlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25fc2V0dGluZ3MiLCJyb3V0ZSIsImNvbnRhaW5lcl9pZCIsInByb2ZpbGVfaWQiLCJwYWdlIiwic29ydF9tZXRob2QiLCJ0YWdfaWQiLCJnZXRQYWdlRGF0YSIsInJlc3BvbnNlX2RhdGEiLCJtYWluX2RhdGEiLCJnZXRQYWdlQ291bnQiLCJhZGRDb250ZW50IiwiYXV0aF9kYXRhIiwicmVuZGVyUGFnaW5hdGlvbiIsImRpc3BsYXlEb3RzIiwicGFnaW5hdGlvbl9wYWdlcyIsInBhZ2VfbnVtYmVyIiwiaSIsIk1hdGgiLCJjZWlsIiwidG90YWxDb3VudCIsIm51bUl0ZW1zUGVyUGFnZSIsInByZXZCdXR0b24iLCJuZXh0QnV0dG9uIiwiY3VycmVudFBhZ2VOdW1iZXIiLCJwYWdpbmF0aW9uQ29udHJvbCIsImV2ZW50IiwiZ2V0UGFnZSIsInBhcnNlSW50Iiwic2V0UGFnZSIsIm5ld19wYWdpbmF0aW9uIiwiZ2V0Rm9sZGVyIiwiZ2V0VGFnIiwiZ2V0U29ydE1ldGhvZCIsInBhZ2luYXRpb25faXRlbSIsImNyZWF0ZVRhZyIsImhtdGwiLCJyZW1vdmVUYWciLCJhZGRUYWciLCJyZW1vdmVDaGlsZCIsImdldFRhZ3MiLCJuYW1lcyIsInRvZ2dsZVRhZ3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidG9nZ2xlIiwiZ2V0Q3VycmVudFRhZyIsImN1cnJlbnRfdGFnIiwic2V0VGFnIiwicHJldmlvdXNfdGFnIiwiZm9sZGVyX2FjdGl2ZSIsImJveF9fZm9sZGVyIiwiY3JlYXRlZF9hdCIsImZvbGRlcl9faXRlbSIsImFjdGl2ZSIsImFkZEZvbGRlciIsImVsZW1lbnQiLCJmb2xkZXJzX19mb2xkZXJzIiwiZGVsZXRlRm9sZGVyIiwiYWRkRm9sZGVycyIsInJlcGxhY2VGb2xkZXIiLCJyZXBsYWNlV2l0aCIsIm5vQ29udGVudCIsImNvbnRlbnRfX2ZvbGRlcnMiLCJkcm9wZG93bl9jb250YWluZXJfaWQiLCJkcm9wZG93bl90cmlnZ2VyX2lkIiwiYm94X3Bvc3QiLCJib3hfdGFncyIsImFkZFBvc3RUYWdzIiwiYWRkQXR0cmlidXRlcyIsImFkZFBvc3QiLCJwb3N0c19fcG9zdHMiLCJhZGRQb3N0cyIsImFkZFBvc3RUYWciLCJvcGVuUG9zdCIsImJveF9fcG9zdCIsInJlcGxhY2VET00iLCJib3hfcHJvZmlsZV9jb250ZW50IiwibGlrZV9pY29uIiwiZGlzbGlrZV9pY29uIiwiY29udGVudF9fcG9zdHMiLCJyZW5hbWVGb2xkZXIiLCJmb2xkZXJfbmFtZSIsImdldEZvbGRlcnNOYW1lcyIsImZvbGRlcnMiLCJ0b2dnbGVGb2xkZXJzIiwiZ2V0Q3VycmVudEZvbGRlciIsImN1cnJlbnRfZm9sZGVyIiwic2V0Rm9sZGVyIiwicHJldmlvdXNfZm9sZGVyIiwidXBkYXRlRm9sZGVyc0xpc3QiLCJhdXRvQ29tcGxldGUiLCJyZW5kZXJBdXRvQ29tcGxldGUiLCJzcmMiLCJxdWVyeSIsInNvdXJjZSIsImNhY2hlIiwicGxhY2VIb2xkZXIiLCJzZWxlY3RvciIsInRocmVzaG9sZCIsImRlYm91bmNlIiwicmVzdWx0c0xpc3QiLCJkZXN0aW5hdGlvbiIsInBvc2l0aW9uIiwicmVzdWx0SXRlbSIsIm1hdGNoIiwibm9SZXN1bHRzIiwic3BhbiIsIm9uU2VsZWN0aW9uIiwiZmVlZGJhY2siLCJzZWxlY3Rpb24iLCJTZWFyY2hCYXIiLCJyZXN1bHRQb3N0IiwicG9zdHNfZGF0YSIsImhpZ2hsaWdodCIsInJlc3VsdF9pdGVtIiwicmVkaXJlY3QiLCJyZXN1bHRBdXRob3IiLCJwcm9maWxlc19kYXRhIiwibmlja25hbWUiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0IiwiZW5kIiwic3Vic3RyIiwic2xpY2UiLCJoaWdobGlnaHRlZCIsInNlYXJjaF9pbnB1dCIsInNldFBvc2l0aW9uIiwidGhyb3R0bGUiLCJsb2NhdGlvbiIsInRvcCIsImxvYyIsImhyZWYiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJvYmoiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJwcmVmb21hdHRlZERhdGUiLCJoaWRlWWVhciIsIk1PTlRIX05BTUVTIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJ0aW1lQWdvIiwiZGF0ZVBhcmFtIiwiRGF0ZSIsIkRBWV9JTl9NUyIsInRvZGF5IiwieWVzdGVyZGF5Iiwic2Vjb25kcyIsInJvdW5kIiwiaXNUb2RheSIsInRvRGF0ZVN0cmluZyIsImlzWWVzdGVyZGF5IiwiaXNUaGlzWWVhciIsImdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJPck51bGwiLCJjbGFzc2xpc3QiLCJjdXJyZW50X2VsZW1lbnQiLCJzaGlmdCIsImF0dHJpYnV0ZSIsInJldHVybl92YWx1ZSIsInNldEF0dHJPckZhbHNlIiwibGFzdCIsImFycmF5IiwiZ2V0UG9zaXRpb24iLCJsZWZ0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsImdldFBvc2l0aW9ucyIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50Iiwib2JqZWN0IiwidHlwZSIsImNhbGxiYWNrIiwiYXR0YWNoRXZlbnQiLCJsaW1pdCIsImluVGhyb3R0bGUiLCJjb250ZXh0IiwidGhyb3R0bGVMYXN0IiwibGFzdEZ1bmMiLCJsYXN0UmFuIiwibm93IiwiZmFkZU91dCIsImVsIiwiZmFkZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZhZGVJbiIsInZhbCIsInBhcnNlRmxvYXQiLCJ0b2dnbGVMaWtlcyIsInRvZ2dsZV9saWtlcyIsIlVwZGF0ZUxpa2VzIiwibGlrZSIsImRpc2xpa2UiLCJ1bmxpa2UiLCJ1bmRpc2xpa2UiLCJsaWtlc19jb3VudGVyIiwiZGlzbGlrZXNfY291bnRlciIsInRvZ2dsZUljb24iLCJyZW1vdmVBdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwiYnRuX3R5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiUmVhZFBvc3QiLCJjb2xvcnMiLCJsaXN0UmVzcG9uc2UiLCJsaXN0UmVzcG9uc2VTZWNvbmRhcnkiLCJjb21tZW50c01vZGFsIiwiY29tbWVudHNNb2RhbFNlY29uZGFyeSIsImRyb3Bkb3duU2Vjb25kYXJ5IiwiZGVsZXRlQ29tbWVudE1vZGFsIiwiZGVsZXRlQ29tbWVudE1vZGFsU2Vjb25kYXJ5IiwiZGVsZXRlUG9zdE1vZGFsIiwiZGVsZXRlUG9zdE1vZGFsU2Vjb25kYXJ5IiwiZWRpdFBvc3RNb2RhbCIsImVkaXRQb3N0TW9kYWxTZWNvbmRhcnkiLCJlZGl0Q29tbWVudE1vZGFsIiwiZWRpdENvbW1lbnRNb2RhbFNlY29uZGFyeSIsImNyZWF0ZUZvbGRlck1vZGFsU2Vjb25kYXJ5IiwiZ2V0UHJvZmlsZURhdGEiLCJyb3V0ZXMiLCJnZXRfdXNlcl9kYXRhIiwiZ2V0X3Byb2ZpbGUiLCJ1cGRhdGVfcHJvZmlsZSIsImdldF9mb2xsb3dlcnMiLCJnZXRfZm9sbG93aW5nIiwiZ2V0X2ZvbGRlcnMiLCJnZXRfcG9zdHMiLCJnZXRfcG9zdHNfYWxsIiwiZ2V0X3RhZ3MiLCJnZXRfZm9sbG93IiwiZm9sZGVyc19wYWdlIiwiZm9sZGVyc19zb3J0IiwiZm9sZGVyc19wYWdpbmF0aW9uX2NvbnRhaW5lciIsInBvc3RzX3BhZ2UiLCJwb3N0c19zb3J0IiwicG9zdHNfcGFnaW5hdGlvbl9jb250YWluZXIiLCJ0YWdzX3BhZ2UiLCJ0YWdzX3NvcnQiLCJ0YWdzX3BhZ2luYXRpb25fY29udGFpbmVyIiwiZm9sbG93X3BhZ2UiLCJmb2xsb3dfc29ydCIsImZvbGxvd19wYWdpbmF0aW9uX2NvbnRhaW5lciIsInRhZ19tb2RhbF9wYWdlIiwidGFnX21vZGFsX3NvcnQiLCJ0YWdfbW9kYWxfcGFnaW5hdGlvbl9jb250YWluZXIiLCJ0YWdfbW9kYWxfdGFnIiwiZm9sbG93VG9nZ2xlciIsImZvbGxvdyIsIlRvZ2dsZUZvbGxvdyIsInNlbGVjdFRhZyIsInRhZ3NfdGFnIiwidGFnZ2VkUG9zdCIsInRhZ2dlZFBvc3RQYWdpbmF0aW9uIiwidG9vbHRpcF90b2dnbGUiLCJyZXNwb25zZUxpc3RNb2RhbCIsIm9wZW5Db21tZW50cyIsImNvbW1lbnRzX3RvZ2dsZSIsIm9wZW5Db21tZW50c1NlY29uZGFyeSIsInBvc3REcm9wZG93biIsInAiLCJwb3N0c1BhZ2luYXRpb24iLCJmb2xkZXJzX25hbWVzIiwidCIsImNyZWF0ZUZvbGRlck1vZGFsIiwiQ3JlYXRlRm9sZGVyIiwiZm9sZGVyc1BhZ2luYXRpb24iLCJmb3JtX3Bvc3QiLCJwb3N0RHJvcGRvd25TZWNvbmRhcnkiLCJtb2RhbHMiLCJlZGl0UHJvZmlsZSIsImVkaXRQcm9maWxlTW9kYWwiLCJFZGl0UHJvZmlsZSIsInByb2ZpbGVET00iLCJlZGl0RE9NIiwiZm9sbG93ZXJzTW9kYWwiLCJmb2xsb3dMaXN0TW9kYWwiLCJmb2xsb3dMaXN0IiwiZm9sbG93aW5nTW9kYWwiLCJjcmVhdGVGb2xkZXIiLCJidG5fY3JlYXRlX2ZvbGRlciIsImNyZWF0ZVBvc3QiLCJidG5fY3JlYXRlX3Bvc3QiLCJjcmVhdGVQb3N0TW9kYWwiLCJDcmVhdGVQb3N0IiwidGFnX3BhZ2luYXRpb25fc2V0dGluZ3MiLCJyZW5kZXJQb3N0c0J5VGFnIiwicGFnaW5hdGlvbiIsIm9wZW5UYWciLCJjb21tZW50c0NvbnRyb2xsZXIiLCJwb3N0RE9NIiwiZGlzYWJsZUNvbW1lbnRzIiwiY29tbWVudF9pbnB1dCIsImRlbGV0ZVBvc3QiLCJjaGFuZ2VIZWFkZXJzIiwicm9vdCIsImZhY3RvcnkiLCJyb3V0aW5nIiwiZGVmaW5lIiwiX2V4dGVuZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJSb3V0ZXIiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiYmFzZVVybCIsImdldEJhc2VVcmwiLCJnZXRTY2hlbWUiLCJnZXRIb3N0IiwiZ2V0UG9ydCIsImdldExvY2FsZSIsImJ1aWxkUXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJfdGhpcyIsInJicmFja2V0IiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJwcmVmaXhlZE5hbWUiLCJzZjQxaTE4bk5hbWUiLCJwcmVmaXhlZFNmNDFpMThuTmFtZSIsInZhcmlhbnRzIiwiRXJyb3IiLCJvcHRfcGFyYW1zIiwiYWJzb2x1dGUiLCJ1bnVzZWRQYXJhbXMiLCJvcHRpb25hbCIsInRva2VucyIsImVuY29kZVBhdGhDb21wb25lbnQiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdHMiLCJlbXB0eSIsImVuY29kZWRWYWx1ZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJjdXJyZW50SG9zdCIsInNjaGVtZXMiLCJfY3VycmVudEhvc3QiLCJrZXlzIiwicXVlcnlQYXJhbXMiLCJlbmNvZGVRdWVyeUNvbXBvbmVudCIsImpvaW4iLCJnZXRJbnN0YW5jZSIsInNldERhdGEiLCJyb3V0ZXIiLCJjdXN0b21FbmNvZGVVUklDb21wb25lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJSb3V0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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxnRUFBZ0U7QUFDOUk7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQy9jRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FB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QUFkO0FBRUksU0FBTztBQUFFQSxVQUFNLEVBQUVBLE1BQVY7QUFBa0JwbEIsV0FBTyxFQUFFQTtBQUEzQixHQUFQO0FBQ0gsQ0EvZUEsQ0FBRCxDIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvcG9zdC5qc1wiKTtcbiIsIi8qKlxyXG4gKiB0b2dnbGUgYWNjb3JkaW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkRXYoKSB7XHJcbiAgIGxldCBhY2NvcmRpb25fX3RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbl9fdHJpZ2dlclwiKTtcclxuICAgYWNjb3JkaW9uX190cmlnZ2VyLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgbGV0IGljb24gPSBidG4ucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2ljb25cIik7XHJcbiAgICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCAhPT0gbnVsbCAmJiBjb250ZW50LnN0eWxlLm1heEhlaWdodCAhPT0gXCIwcHhcIikge1xyXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gbnVsbDtcclxuICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCA9PSBcIjBweFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMTgwZGVnKVwiO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIG9wZW5zIGFjY29yZGlvbnMg4oCTIGFkZHMgYWRkTWF4SGVpZ2h0IGFuZCByb3RhdGVzIGljb25cclxuICogbmVlZHMgdG8gYmUgYWRkZWQgYWZ0ZXIgZm9sZGVyIGFuZCBwb3N0IGRhdGEgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRBY2NvcmRpb25zKCkge1xyXG4gICBsZXQgYWNjb3JkaW9uX190cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25fX3RyaWdnZXJcIik7XHJcbiAgIGFjY29yZGlvbl9fdHJpZ2dlci5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgYnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19pY29uXCIpLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDE4MGRlZylcIjtcclxuICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgYWRkRXYoKTtcclxufSk7XHJcbiIsImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lbnRzQ29udHJvbGxlcihvcHRpb25zKSB7XHJcbiAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgdGhpcy5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpO1xyXG4gICAgICB0aGlzLmFkZElucHV0RXYoKTtcclxuICAgICAgdGhpcy5wcmV2aWV3SW1hZ2UoKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSRU5ERVIgQUxMIENPTU1FTlRTXHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLnByZXBhcmVGZXRjaEdldENvbW1lbnRzKCk7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICB0aGlzLnVzZXIgPSBvcHRpb25zLmdldFVzZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5jb21tZW50X2RhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcihjb21tZW50LCBcImFwcGVuZFwiKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChvcHRpb25zLmNvbW1lbnRzRGF0YSkgb3B0aW9ucy5jb21tZW50c0RhdGEodGhpcy5kYXRhLmNvbW1lbnRfZGF0YSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmFkZElucHV0RXYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuaW5wdXRfY29tbWVudCk7XHJcbiAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgZS50YXJnZXQudmFsdWUudHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENSRUFURSBBTkQgUkVOREVSIFNJTkdMRSBDT01NRU5UXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVGZXRjaFBvc3RDb21tZW50KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gYXdhaXQgdGhpcy5mZXRjaERhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRoaXMuZGF0YSwgXCJwcmVwZW5kXCIpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0X19jb21tZW50LWNvdW50XCIpLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHt0aGlzLmRhdGEuY291bnR9KWA7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDTEVBUiBJTUFHRVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VsZi5maWxlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5pbnBGaWxlLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucHJlcGFyZUZldGNoR2V0Q29tbWVudHMgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucG9zdF9pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGhpcy5jb250YWluZXIsIFwiYm94X19tYWluLXBvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJwb3N0X2lkXCIsIHRoaXMucG9zdF9pZCk7XHJcbiAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImdldF9jb21tZW50c1wiKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucHJlcGFyZUZldGNoUG9zdENvbW1lbnQgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29tbWVudF90ZXh0ID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgICB0aGlzLnBvc3RfaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRhcmdldCwgXCJib3hfX21haW4tcG9zdFwiKS5nZXRBdHRyaWJ1dGUoXCJwb3N0XCIpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5LmFwcGVuZChcImNvbW1lbnRfdGV4dFwiLCB0aGlzLmNvbW1lbnRfdGV4dCk7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJwb3N0X2lkXCIsIHRoaXMucG9zdF9pZCk7XHJcbiAgICAgIGlmICh0aGlzLmZpbGUpIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJpbWFnZVwiLCB0aGlzLmZpbGUpO1xyXG4gICAgICB0aGlzLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJwb3N0X2NvbW1lbnRcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvbWlzZSA9IGZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHRoaXMuZmV0Y2hfYm9keSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVuZGVyID0gKGNvbW1lbnQsIG1ldGhvZCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aGlzLmNvbW1lbnQuY2xhc3NMaXN0LmFkZChcImJveF9fY29tbWVudFwiKTtcclxuICAgICAgdGhpcy5jb21tZW50LnNldEF0dHJpYnV0ZShcImNvbW1lbnRcIiwgY29tbWVudC5pZCk7XHJcbiAgICAgIHRoaXMuaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlfX2NvbW1lbnRcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfcHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgPGltZyBzcmM9XCIke2NvbW1lbnQuY29tbWVudF9hdXRob3IuYXZhdGFyfVwiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiBjbGFzcz1cImltZ19jb21tZW50LXByb2ZpbGVcIj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fYm9keVwiPlxyXG4gICAgICAgICA8YSBjbGFzcz1cImNvbW1lbnRfX2F1dGhvclwiIGhyZWY9XCIke1JvdXRpbmcuZ2VuZXJhdGUoXCJwcm9maWxlX3BhZ2VcIiwge1xyXG4gICAgICAgICAgICBwcm9maWxlOiBjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkLFxyXG4gICAgICAgICB9KX1cIj4ke2NvbW1lbnQuY29tbWVudF9hdXRob3IuZmlyc3RuYW1lfTwvYT5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX3RleHRcIj4ke2NvbW1lbnQuYm9keX08L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19pbWdfYXR0YWNoZWRcIj4gXHJcbiAgICAgICAgICAgIDxpbWcgJHtjb21tZW50LmltZ19hdHRhY2hlZCA/IFwic3JjPVwiICsgY29tbWVudC5pbWdfYXR0YWNoZWQgOiBcIm5vbmVcIn0gY2xhc3M9XCJpbWdfX2ltZy1hdHRhY2hlZFwiIGFsdD1cIlwiPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fZm9vdGVyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19yb3dcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtdGh1bWJzLXVwIHRvZ2dsZV9fbGlrZXMgJHtjb21tZW50LnN0YXRlID09IFwibGlrZWRcIiA/IFwic3RhdGVfX2FjdGl2ZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgY29tbWVudC5zdGF0ZSA9PSBcImRpc2xpa2VkXCIgPyBcInN0YXRlX19kaXNhYmxlZFwiIDogXCJcIlxyXG4gICAgICB9XCIgc3RhdGU9XCIke2NvbW1lbnQuc3RhdGUgPyBjb21tZW50LnN0YXRlIDogXCJuZXV0cmFsXCJ9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyaWdnZXJfX21vZGFsIGNvdW50ZXJfX2xpa2VzXCI+KCR7Y29tbWVudC5saWtlc30pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtdGh1bWJzLWRvd24gdG9nZ2xlX19saWtlcyAke2NvbW1lbnQuc3RhdGUgPT0gXCJkaXNsaWtlZFwiID8gXCJzdGF0ZV9fYWN0aXZlXCIgOiBcIlwifSAke1xyXG4gICAgICAgICBjb21tZW50LnN0YXRlID09IFwibGlrZWRcIiA/IFwic3RhdGVfX2Rpc2FibGVkXCIgOiBcIlwiXHJcbiAgICAgIH1cIiBzdGF0ZT1cIiR7Y29tbWVudC5zdGF0ZSA/IGNvbW1lbnQuc3RhdGUgOiBcIm5ldXRyYWxcIn1cIj48L2k+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJpZ2dlcl9fbW9kYWwgY291bnRlcl9fZGlzbGlrZXNcIj4oJHtjb21tZW50LmRpc2xpa2VzfSk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3Jvd1wiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2NyZWF0ZWRBdFwiPiR7aGVscGVycy50aW1lQWdvKGNvbW1lbnQuY3JlYXRlZEF0KX08L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19tZW51XCI+XHJcbiAgICAgICAgIDxkaXYgaWQ9XCJtZW51X19kcm9wZG93bi0ke2NvbW1lbnQuaWR9XCIgY2xhc3M9XCJkcm9wZG93bl9fYm94XCI+PC9kaXY+XHJcbiAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLWggZHJvcGRvd25fX3RyaWdnZXIgaWNvbl9fY29tbWVudC0ke2NvbW1lbnQuaWR9XCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgdGhpcy5jb21tZW50LmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgICAgaWYgKCFjb21tZW50LmltZ19hdHRhY2hlZCkgdGhpcy5jb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudF9faW1nX2F0dGFjaGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgdGhpcy5jb21tZW50c19jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRzX19jb21tZW50c1wiKTtcclxuXHJcbiAgICAgIGlmIChtZXRob2QgPT0gXCJhcHBlbmRcIikge1xyXG4gICAgICAgICB0aGlzLmNvbW1lbnRzX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbW1lbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLmNvbW1lbnRzX2NvbnRhaW5lci5wcmVwZW5kKHRoaXMuY29tbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hZGRMaWtlc0V2KCk7XHJcbiAgICAgIGlmIChvcHRpb25zLmRyb3Bkb3duKSBvcHRpb25zLmRyb3Bkb3duKGNvbW1lbnQpO1xyXG4gICAgICB0aGlzLmFkZFJlc3BvbnNlTGlzdEV2KCk7XHJcblxyXG4gICAgICBpZiAoY29tbWVudC5jb21tZW50ZWRfcG9zdC5hdXRob3IuaWQgIT0gdGhpcy51c2VyLmlkICYmIGNvbW1lbnQuY29tbWVudF9hdXRob3IuaWQgIT0gdGhpcy51c2VyLmlkKSB7XHJcbiAgICAgICAgIHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX21lbnVcIikucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkTGlrZXNFdiA9ICgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVycyA9IHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZ2dsZV9fbGlrZXNcIik7XHJcbiAgICAgIHRoaXMudG9nZ2xlcnMuZm9yRWFjaCgodG9nZ2xlcikgPT4ge1xyXG4gICAgICAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbmNsaWNrTGlrZXMpIG9wdGlvbnMub25jbGlja0xpa2VzKGUudGFyZ2V0KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRSZXNwb25zZUxpc3RFdiA9ICgpID0+IHtcclxuICAgICAgdGhpcy50cmlnZ2VycyA9IHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyaWdnZXJfX21vZGFsXCIpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25jbGlja0NvdW50KSBvcHRpb25zLm9uY2xpY2tDb3VudChlLnRhcmdldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucHJldmlld0ltYWdlID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlucEZpbGUgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnQtaW5wdXRfX2NvbW1lbnQtaW1hZ2VcIik7XHJcbiAgICAgIHRoaXMucHJldmlld0ltYWdlID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNjb21tZW50LWltYWdlLXByZXZpZXdfX2ltYWdlXCIpO1xyXG5cclxuICAgICAgdGhpcy5idG5DbGVhciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudF9faW1hZ2UtY2xlYXJcIik7XHJcbiAgICAgIHRoaXMucHJldmlld0NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudF9faW1hZ2UtcHJldmlld1wiKTtcclxuXHJcbiAgICAgIHNlbGYuaW5wRmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgc2VsZi5maWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICAgaWYgKHNlbGYuZmlsZSkge1xyXG4gICAgICAgICAgICBzZWxmLnJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZi5maWxlKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLmJ0bkNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgIHNlbGYuaW5wRmlsZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYuZmlsZSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICByZXR1cm4gdGhpcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1lbnQodGFyZ2V0KSB7XHJcbiAgIHRoaXMucHJlcGFyZUZldGNoR2V0Q29tbWVudHMgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRhcmdldCwgXCJib3hfX2NvbW1lbnRcIikuZ2V0QXR0cmlidXRlKFwiY29tbWVudFwiKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJpZFwiLCB0aGlzLmlkKTtcclxuICAgICAgdGhpcy51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZ2V0X2NvbW1lbnRcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9taXNlID0gZmV0Y2godGhpcy51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogdGhpcy5mZXRjaF9ib2R5LFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJlcGFyZUZldGNoR2V0Q29tbWVudHMoKTtcclxuICAgICAgYXdhaXQgdGhpcy5mZXRjaERhdGEoKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlbmRlckNvbW1lbnQob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYucmVuZGVyQ29tbWVudCA9IChjb21tZW50KSA9PiB7XHJcbiAgICAgIHNlbGYuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNlbGYuY29tbWVudC5jbGFzc0xpc3QuYWRkKFwiYm94X19jb21tZW50XCIpO1xyXG4gICAgICBzZWxmLmNvbW1lbnQuc2V0QXR0cmlidXRlKFwiY29tbWVudFwiLCBjb21tZW50LmlkKTtcclxuICAgICAgc2VsZi5odG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9fY29tbWVudFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fcHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgPGltZyBzcmM9XCIke2NvbW1lbnQuY29tbWVudF9hdXRob3IuYXZhdGFyfVwiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiBjbGFzcz1cImltZ19fY29tbWVudC1wcm9maWxlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2JvZHlcIj5cclxuICAgICAgICAgPGEgY2xhc3M9XCJjb21tZW50X19hdXRob3JcIiBocmVmPVwiXCI+JHtjb21tZW50LmNvbW1lbnRfYXV0aG9yLmZpcnN0bmFtZX08L2E+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X190ZXh0XCI+JHtjb21tZW50LmJvZHl9PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19pbWdfYXR0YWNoZWRcIj4gXHJcbiAgICAgICAgICAgIDxpbWcgJHtjb21tZW50LmltZ19hdHRhY2hlZCA/IFwic3JjPVwiICsgY29tbWVudC5pbWdfYXR0YWNoZWQgOiBcIm5vbmVcIn0gY2xhc3M9XCJpbWdfX2ltZy1hdHRhY2hlZFwiIGFsdD1cIlwiPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fZm9vdGVyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19yb3dcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtdGh1bWJzLXVwIHRvZ2dsZV9fbGlrZXMgJHtjb21tZW50LnN0YXRlID09IFwibGlrZWRcIiA/IFwic3RhdGVfX2FjdGl2ZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgY29tbWVudC5zdGF0ZSA9PSBcImRpc2xpa2VkXCIgPyBcInN0YXRlX19kaXNhYmxlZFwiIDogXCJcIlxyXG4gICAgICB9XCIgc3RhdGU9XCIke2NvbW1lbnQuc3RhdGUgPyBjb21tZW50LnN0YXRlIDogXCJuZXV0cmFsXCJ9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyaWdnZXJfX21vZGFsIGNvdW50ZXJfX2xpa2VzXCI+KCR7Y29tbWVudC5saWtlc30pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtdGh1bWJzLWRvd24gdG9nZ2xlX19saWtlcyAke2NvbW1lbnQuc3RhdGUgPT0gXCJkaXNsaWtlZFwiID8gXCJzdGF0ZV9fYWN0aXZlXCIgOiBcIlwifSAke1xyXG4gICAgICAgICBjb21tZW50LnN0YXRlID09IFwibGlrZWRcIiA/IFwic3RhdGVfX2Rpc2FibGVkXCIgOiBcIlwiXHJcbiAgICAgIH1cIiBzdGF0ZT1cIiR7Y29tbWVudC5zdGF0ZSA/IGNvbW1lbnQuc3RhdGUgOiBcIm5ldXRyYWxcIn1cIj48L2k+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJpZ2dlcl9fbW9kYWwgY291bnRlcl9fZGlzbGlrZXNcIj4oJHtjb21tZW50LmRpc2xpa2VzfSk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3Jvd1wiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2NyZWF0ZWRBdFwiPiR7aGVscGVycy50aW1lQWdvKGNvbW1lbnQuY3JlYXRlZEF0KX08L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19tZW51XCI+XHJcbiAgICAgICAgIDxkaXYgaWQ9XCJtZW51X19kcm9wZG93bi0ke2NvbW1lbnQuaWR9XCIgY2xhc3M9XCJkcm9wZG93bl9fYm94XCI+PC9kaXY+XHJcbiAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLWggaWNvbl9fY29tbWVudC0ke2NvbW1lbnQuaWR9XCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgc2VsZi5jb21tZW50LmlubmVySFRNTCA9IHNlbGYuaHRtbDtcclxuICAgICAgaWYgKCFjb21tZW50LmltZ19hdHRhY2hlZCkgc2VsZi5jb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudF9faW1nX2F0dGFjaGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgIHNlbGYuY29tbWVudHMucHJlcGVuZChzZWxmLmNvbW1lbnQpO1xyXG4gICAgICBzZWxmLmFkZExpa2VzRXYoKTtcclxuICAgICAgaWYgKG9wdGlvbnMuZHJvcGRvd24pIG9wdGlvbnMuZHJvcGRvd24oY29tbWVudCk7XHJcbiAgICAgIHNlbGYuYWRkUmVzcG9uc2VMaXN0RXYoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkTGlrZXNFdiA9ICgpID0+IHtcclxuICAgICAgc2VsZi50b2dnbGVycyA9IHNlbGYuY29tbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZ2dsZV9fbGlrZXNcIik7XHJcbiAgICAgIHNlbGYudG9nZ2xlcnMuZm9yRWFjaCgodG9nZ2xlcikgPT4ge1xyXG4gICAgICAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbmNsaWNrTGlrZXMpIG9wdGlvbnMub25jbGlja0xpa2VzKGUudGFyZ2V0KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRSZXNwb25zZUxpc3RFdiA9ICgpID0+IHtcclxuICAgICAgc2VsZi50cmlnZ2VycyA9IHNlbGYuY29tbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyaWdnZXJfX21vZGFsXCIpO1xyXG4gICAgICBzZWxmLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25jbGlja0NvdW50KSBvcHRpb25zLm9uY2xpY2tDb3VudChlLnRhcmdldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2VsZi5jb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudHNfX2NvbW1lbnRzXCIpO1xyXG4gICAgICBzZWxmLmNvbW1lbnRzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHNlbGYuY29tbWVudF9kYXRhID0gb3B0aW9ucy5yZXNwb25zZS5jb21tZW50X2RhdGE7XHJcblxyXG4gICAgICBzZWxmLmNvbW1lbnRfZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgIHNlbGYucmVuZGVyQ29tbWVudChjb21tZW50KTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQoKTtcclxuICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVDb21tZW50KHJlc3BvbnNlKSB7XHJcbiAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjb21tZW50ID0gXCIke3Jlc3BvbnNlLmlkfVwiXWApLnJlbW92ZSgpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFZGl0Q29tbWVudChyZXNwb25zZSkge1xyXG4gICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtjb21tZW50ID0gXCIke3Jlc3BvbnNlLmNvbW1lbnRfZGF0YS5pZH1cIl1gKTtcclxuXHJcbiAgICAgIGxldCBjb21tZW50X3RleHQgPSBjb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudF9fdGV4dFwiKTtcclxuICAgICAgY29tbWVudF90ZXh0LmlubmVySFRNTCA9IHJlc3BvbnNlLmNvbW1lbnRfZGF0YS5ib2R5O1xyXG5cclxuICAgICAgbGV0IGltZ19jb250YWluZXIgPSBjb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudF9faW1nX2F0dGFjaGVkXCIpO1xyXG4gICAgICBpZiAocmVzcG9uc2UuY29tbWVudF9kYXRhLmltZ19hdHRhY2hlZCkge1xyXG4gICAgICAgICBpbWdfY29udGFpbmVyLnN0eWxlID0gbnVsbDtcclxuICAgICAgICAgbGV0IGltZ19hdHRhY2hlZCA9IGNvbW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfX2ltZy1hdHRhY2hlZFwiKTtcclxuICAgICAgICAgaW1nX2F0dGFjaGVkLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXNwb25zZS5jb21tZW50X2RhdGEuaW1nX2F0dGFjaGVkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgaW1nX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJY29uKG9wdGlvbnMpIHtcclxuICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgc2VsZi5yZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IHNlbGYuaHRtbCgpO1xyXG4gICAgICBzZWxmLnBhbmVsID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fcGFuZWxcIik7XHJcbiAgICAgIHNlbGYuY2FyZCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2NhcmRcIik7XHJcbiAgICAgIHNlbGYuaXRlbXMgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2l0ZW1zXCIpO1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMuaXRlbV9vdmVybGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHNlbGYuY29udGFpbmVyLCBvcHRpb25zLml0ZW1fb3ZlcmxheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYucGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcIjBcIjtcclxuXHJcbiAgICAgIGxldCBodG1sID0gYGA7XHJcbiAgICAgIG9wdGlvbnMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgIGxldCBpY29uX2NsYXNzID0gaXRlbVsxXSxcclxuICAgICAgICAgICAgYnRuX3RleHQgPSBpdGVtWzBdLFxyXG4gICAgICAgICAgICBidG5fY3VzdG9tX2NsYXNzID0gaXRlbVsyXTtcclxuXHJcbiAgICAgICAgIGh0bWwgKz0gc2VsZi5odG1sMihidG5fY3VzdG9tX2NsYXNzLCBpY29uX2NsYXNzLCBidG5fdGV4dCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxmLml0ZW1zLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmFkZEV2ID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLnRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudHJpZ2dlcik7XHJcbiAgICAgIHNlbGYudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgaWYgKHNlbGYub3ZlcmxheSkge1xyXG4gICAgICAgICAgICBzZWxmLm92ZXJsYXkuc3R5bGUgPSBudWxsO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJpY29uX19hY3RpdmVcIik7XHJcbiAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgIGlmIChzZWxmLmlzVmlzaWJsZSkgc2VsZi5oaWRlKCk7XHJcbiAgICAgICAgIGVsc2Ugc2VsZi5zaG93KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJ1dHRvbnMgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1zX19pdGVtXCIpO1xyXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuY2xpY2tlZChlLnRhcmdldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgIGlmICghd2luZG93LmRyb3Bkb3ducykgd2luZG93LmRyb3Bkb3ducyA9IHt9O1xyXG4gICAgICB3aW5kb3cuZHJvcGRvd25zW29wdGlvbnMuaWRdID0gc2VsZjtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkR2V0dGVyID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZ2V0ZGQgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICBsZXQgaWQgPSBlbGVtLmNsb3Nlc3QoXCIuZHJvcGRvd25fX3BhbmVsXCIpLnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICAgICAgIHJldHVybiB3aW5kb3cuZHJvcGRvd25zW2lkXTtcclxuICAgICAgfTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuc2hvdyA9ICgpID0+IHtcclxuICAgICAgZm9yICh2YXIgZGQgaW4gd2luZG93LmRyb3Bkb3ducykgd2luZG93LmRyb3Bkb3duc1tkZF0uaGlkZSgpO1xyXG5cclxuICAgICAgc2VsZi5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICBzZWxmLmNhcmQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMHB4LDBweClcIjtcclxuICAgICAgaGVscGVycy5mYWRlSW4oc2VsZi5wYW5lbCk7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pdGVtX292ZXJsYXkpIHtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuaXRlbV9vdmVybGF5X2JnO1xyXG5cclxuICAgICAgICAgaWYgKCF3aW5kb3cub3ZlcmxheXMpIHdpbmRvdy5vdmVybGF5cyA9IFtdO1xyXG4gICAgICAgICBpZiAoIXdpbmRvdy5vdmVybGF5cy5pbmNsdWRlcyhzZWxmLml0ZW1fb3ZlcmxheSkpIHtcclxuICAgICAgICAgICAgd2luZG93Lm92ZXJsYXlzLnB1c2goc2VsZi5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaGlkZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCFzZWxmLmlzVmlzaWJsZSkgcmV0dXJuO1xyXG4gICAgICBzZWxmLnRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZShcImljb25fX2FjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHNlbGYuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHNlbGYuY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwcHgsLTI1NXB4KVwiO1xyXG4gICAgICBoZWxwZXJzLmZhZGVPdXQoc2VsZi5wYW5lbCk7XHJcblxyXG4gICAgICBpZiAoc2VsZi5pdGVtX292ZXJsYXkpIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgaWYgKCF3aW5kb3cub3ZlcmxheXMpIHdpbmRvdy5vdmVybGF5cyA9IFtdO1xyXG4gICAgICBpZiAod2luZG93Lm92ZXJsYXlzLmluY2x1ZGVzKHNlbGYuaXRlbV9vdmVybGF5KSkge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB3aW5kb3cub3ZlcmxheXMuaW5kZXhPZihzZWxmLml0ZW1fb3ZlcmxheSk7XHJcbiAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93Lm92ZXJsYXlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5jbGlja2VkID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICBzZWxmLmhpZGUoKTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IodGFyZ2V0KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaHRtbCA9ICgpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9J2Ryb3Bkb3duX19wYW5lbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bl9fY2FyZFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faXRlbXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmh0bWwyID0gKGJ0bl9jdXN0b21fY2xhc3MsIGljb25fY2xhc3MsIGJ0bl90ZXh0KSA9PiB7XHJcbiAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbXNfX2l0ZW0gJHtidG5fY3VzdG9tX2NsYXNzfVwiPlxyXG4gICAgICAgICA8aSBjbGFzcz1cIiR7aWNvbl9jbGFzc31cIj48L2k+XHJcbiAgICAgICAgIDxzcGFuPiR7YnRuX3RleHR9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYucmVuZGVyKCk7XHJcbiAgICAgIHNlbGYuYWRkRHJvcGRvd24oKTtcclxuICAgICAgc2VsZi5hZGRHZXR0ZXIoKTtcclxuICAgICAgc2VsZi5hZGRFdigpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0KCk7XHJcbiAgIHJldHVybiBzZWxmO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRHJvcGRvd24ob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYuY3VzdG9tU3R5bGUgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYud2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICAgIGlmIChvcHRpb25zLnN0eWxlKSB7XHJcbiAgICAgICAgIHNlbGYud2lkdGggPSBvcHRpb25zLnN0eWxlLndpZHRoID8gb3B0aW9ucy5zdHlsZS53aWR0aCA6IFwiMjUwcHhcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgc2VsZi53aWR0aCA9IFwiMjAwcHhcIjtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5yZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcblxyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgPGRpdiBjbGFzcz0nZHJvcGRvd24tc2ltcGxlJz5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Ryb3Bkb3duX192YWx1ZSc+PC9kaXY+XHJcblx0XHQgICAgICAgICA8ZGl2IGNsYXNzPSdkcm9wZG93bl9fYXJyb3cnPuKWvjwvZGl2PlxyXG5cdFx0ICAgICAgICAgPGRpdiBjbGFzcz0nZHJvcGRvd25fX3BhbmVsJz5cclxuXHRcdCAgICAgICAgICBcdDxkaXYgY2xhc3M9J2Ryb3Bkb3duX19pdGVtcyc+PC9kaXY+XHJcblx0XHQgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICBzZWxmLmRyb3Bkb3duID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1zaW1wbGVcIik7XHJcbiAgICAgIHNlbGYuZHJvcGRvd24uc3R5bGUud2lkdGggPSBzZWxmLndpZHRoO1xyXG5cclxuICAgICAgc2VsZi5pdGVtcyA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2l0ZW1zXCIpO1xyXG4gICAgICBzZWxmLml0ZW1zLnN0eWxlLndpZHRoID0gc2VsZi53aWR0aDtcclxuXHJcbiAgICAgIHNlbGYudmFsdWUgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX192YWx1ZVwiKTtcclxuICAgICAgc2VsZi5kZWZhdWx0X2F0dHIgPSBvcHRpb25zLmRlZmF1bHRfYXR0ciA/IG9wdGlvbnMuZGVmYXVsdF9hdHRyIDogbnVsbDtcclxuICAgICAgaWYgKHNlbGYuZGVmYXVsdF9hdHRyKSBzZWxmLnZhbHVlLnNldEF0dHJpYnV0ZShvcHRpb25zLmRlZmF1bHRfYXR0clswXSwgb3B0aW9ucy5kZWZhdWx0X2F0dHJbMV0pO1xyXG5cclxuICAgICAgc2VsZi5wYW5lbCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX3BhbmVsXCIpO1xyXG4gICAgICBzZWxmLmFycm93ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fYXJyb3dcIik7XHJcbiAgICAgIHNlbGYudmFsdWUuaW5uZXJIVE1MID0gb3B0aW9ucy5wbGFjZWhvbGRlcjtcclxuXHJcbiAgICAgIG9wdGlvbnMuZGF0YS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgIGxldCBkZF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgZGRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25fX2l0ZW1cIik7XHJcbiAgICAgICAgIGxldCBkZF9pdGVtX2F0dHIgPSBvcHRpb25zLmF0dHIgPyBvcHRpb25zLmF0dHIgOiBudWxsO1xyXG4gICAgICAgICBpZiAoZGRfaXRlbV9hdHRyICYmIGVsZW1bMV0pIGRkX2l0ZW0uc2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0ciwgZWxlbVsxXSk7XHJcbiAgICAgICAgIGRkX2l0ZW0uc2V0QXR0cmlidXRlKFwib25tb3VzZWRvd25cIiwgXCJ2YXIgc2VsZj1nZXRkZHYodGhpcyk7c2VsZi5jbGlja2VkKHRoaXMpXCIpO1xyXG5cclxuICAgICAgICAgZGRfaXRlbS5pbm5lckhUTUwgPSBlbGVtWzBdO1xyXG4gICAgICAgICBzZWxmLml0ZW1zLnByZXBlbmQoZGRfaXRlbSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMuYm90dG9tX2l0ZW0pIHtcclxuICAgICAgICAgbGV0IGRkX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICBkZF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bl9faXRlbVwiLCBcIml0ZW1fX2JvdHRvbVwiKTtcclxuICAgICAgICAgZGRfaXRlbS5zZXRBdHRyaWJ1dGUoXCJvbm1vdXNlZG93blwiLCBcInZhciBzZWxmPWdldGRkdih0aGlzKTtzZWxmLmNsaWNrZWQodGhpcylcIik7XHJcblxyXG4gICAgICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPiR7b3B0aW9ucy5ib3R0b21faXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgIGRkX2l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgc2VsZi5pdGVtcy5hcHBlbmRDaGlsZChkZF9pdGVtKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGREcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgaWYgKCF3aW5kb3cuZHJvcGRvd25zKSB3aW5kb3cuZHJvcGRvd25zID0ge307XHJcbiAgICAgIHdpbmRvdy5kcm9wZG93bnNbb3B0aW9ucy5pZF0gPSBzZWxmO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRHZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5nZXRkZHYgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICBsZXQgaWQgPSBlbGVtLmNsb3Nlc3QoXCIuZHJvcGRvd24tc2ltcGxlXCIpLnBhcmVudEVsZW1lbnQuaWQ7XHJcbiAgICAgICAgIHJldHVybiB3aW5kb3cuZHJvcGRvd25zW2lkXTtcclxuICAgICAgfTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuY2xpY2tlZCA9IChlbGVtKSA9PiB7XHJcbiAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcIml0ZW1fX2JvdHRvbVwiKSkge1xyXG4gICAgICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihlbGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgbGV0IG5ld3ZhbCA9IGVsZW0uaW5uZXJIVE1MO1xyXG4gICAgICAgICBzZWxmLnZhbHVlLmlubmVySFRNTCA9IG5ld3ZhbDtcclxuICAgICAgICAgc2VsZi52YWx1ZS5zZXRBdHRyaWJ1dGUob3B0aW9ucy5hdHRyLCBlbGVtLmdldEF0dHJpYnV0ZShvcHRpb25zLmF0dHIpKTtcclxuICAgICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoZWxlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuaGlkZSgpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgc2VsZi52YWx1ZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICBpZiAoc2VsZi5pc1Zpc2libGUpIHNlbGYuaGlkZSgpO1xyXG4gICAgICAgICBlbHNlIHNlbGYuc2hvdygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgaWYgKHNlbGYuaXNWaXNpYmxlKSBzZWxmLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnNob3cgPSAoKSA9PiB7XHJcbiAgICAgIGZvciAodmFyIGRkIGluIHdpbmRvdy5kcm9wZG93bnMpIHdpbmRvdy5kcm9wZG93bnNbZGRdLmhpZGUoKTtcclxuXHJcbiAgICAgIHNlbGYuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgc2VsZi5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwcHgsMHB4KVwiO1xyXG4gICAgICBzZWxmLmFycm93LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDE4MGRlZylcIjtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaGlkZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCFzZWxmLmlzVmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgc2VsZi5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgc2VsZi5pdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwcHgsLTI1NXB4KVwiO1xyXG4gICAgICBzZWxmLmFycm93LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY3VzdG9tU3R5bGUoKTtcclxuICAgICAgc2VsZi5yZW5kZXIoKTtcclxuICAgICAgc2VsZi5hZGREcm9wZG93bigpO1xyXG4gICAgICBzZWxmLmFkZEdldHRlcigpO1xyXG4gICAgICBzZWxmLmFkZEV2KCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQoKTtcclxuICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuXHJcbmRvY3VtZW50Lm9ubW91c2Vkb3duID0gYXV0b2Nsb3NlO1xyXG5mdW5jdGlvbiBhdXRvY2xvc2UoZSkge1xyXG4gICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX3BhbmVsXCIpKSByZXR1cm47XHJcbiAgIGlmICghaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShlLnRhcmdldCwgXCJkcm9wZG93bl9fcGFuZWxcIikpIHJldHVybjtcclxuICAgbGV0IGVsZW0gPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKGUudGFyZ2V0LCBcImRyb3Bkb3duX19wYW5lbFwiKS5wYXJlbnRFbGVtZW50O1xyXG4gICBpZiAoZWxlbS5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd25fX3RyaWdnZXJcIikpIHJldHVybjtcclxuICAgLy8gaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duX190cmlnZ2VyXCIpKSByZXR1cm47XHJcbiAgIGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBkZCBpbiB3aW5kb3cuZHJvcGRvd25zKSB3aW5kb3cuZHJvcGRvd25zW2RkXS5oaWRlKGRkKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50c0xpc3Qob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHRoaXMucmVuZGVyTW9kYWxCb2R5ID0gKCkgPT4ge1xyXG4gICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHt0aGlzLnN0eWxlX2NsYXNzfSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19tb2RhbC1pdGVtXCIgaWQ9XCIke29wdGlvbnMubW9kYWxfb3ZlcmxheX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGV4dF9fbW9kYWwtaGVhZGVyIHRleHRfX2NvbW1lbnQtY291bnRcIj5Db21tZW50cyAoJHt0aGlzLnJlc3BvbnNlLmNvbW1lbnRfZGF0YS5sZW5ndGh9KTwvaDU+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGJ0bl9fbW9kYWwtY2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzX19hdXRob3ItaW5wdXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzX19jb21tZW50c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgYDtcclxuXHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICB0aGlzLmJveCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3dpbmRvd1wiKTtcclxuICAgICAgdGhpcy5saXN0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fYm9keVwiKTtcclxuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudHNfX2F1dGhvci1pbnB1dFwiKTtcclxuICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudHNfX2NvbW1lbnRzXCIpO1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgIHRoaXMudXNlciA9IG9wdGlvbnMuZ2V0VXNlcigpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1BSU4gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkpO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXlfYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJVEVNIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5pdGVtX292ZXJsYXlfYmc7XHJcbiAgICAgICAgIC8vIHRoaXMuaXRlbV9vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMucHJlcGFyZUZldGNoR2V0Q29tbWVudHMgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucG9zdF9pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIFwiYm94X19wb3N0XCIpLmdldEF0dHJpYnV0ZShcInBvc3RcIik7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkuYXBwZW5kKFwicG9zdF9pZFwiLCB0aGlzLnBvc3RfaWQpO1xyXG4gICAgICB0aGlzLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJnZXRfY29tbWVudHNcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnByZXBhcmVGZXRjaFBvc3RDb21tZW50ID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbW1lbnRfdGV4dCA9IHRhcmdldC52YWx1ZTtcclxuICAgICAgdGhpcy5wb3N0X2lkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgXCJib3hfX3Bvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJjb21tZW50X3RleHRcIiwgdGhpcy5jb21tZW50X3RleHQpO1xyXG4gICAgICB0aGlzLmZldGNoX2JvZHkuYXBwZW5kKFwicG9zdF9pZFwiLCB0aGlzLnBvc3RfaWQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsZSkgdGhpcy5mZXRjaF9ib2R5LmFwcGVuZChcImltYWdlXCIsIHRoaXMuZmlsZSk7XHJcbiAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShcInBvc3RfY29tbWVudFwiKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9taXNlID0gZmV0Y2godGhpcy51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogdGhpcy5mZXRjaF9ib2R5LFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZW5kZXJNb2RhbEl0ZW0gPSAoY29tbWVudCwgbWV0aG9kKSA9PiB7XHJcbiAgICAgIHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRoaXMuY29tbWVudC5jbGFzc0xpc3QuYWRkKFwiYm94X19jb21tZW50XCIpO1xyXG4gICAgICB0aGlzLmNvbW1lbnQuc2V0QXR0cmlidXRlKFwiY29tbWVudFwiLCBjb21tZW50LmlkKTtcclxuICAgICAgdGhpcy5odG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9fY29tbWVudFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fcHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgPGltZyBzcmM9XCIke2NvbW1lbnQuY29tbWVudF9hdXRob3IuYXZhdGFyfVwiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiBjbGFzcz1cImltZ19fY29tbWVudC1wcm9maWxlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2JvZHlcIj5cclxuICAgICAgICAgPGEgY2xhc3M9XCJjb21tZW50X19hdXRob3JcIiBocmVmPVwiJHtSb3V0aW5nLmdlbmVyYXRlKFwicHJvZmlsZV9wYWdlXCIsIHtcclxuICAgICAgICAgICAgcHJvZmlsZTogY29tbWVudC5jb21tZW50X2F1dGhvci5pZCxcclxuICAgICAgICAgfSl9XCI+JHtjb21tZW50LmNvbW1lbnRfYXV0aG9yLmZpcnN0bmFtZX08L2E+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X190ZXh0XCI+JHtjb21tZW50LmJvZHl9PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19pbWdfYXR0YWNoZWRcIj4gXHJcbiAgICAgICAgICAgIDxpbWcgJHtjb21tZW50LmltZ19hdHRhY2hlZCA/IFwic3JjPVwiICsgY29tbWVudC5pbWdfYXR0YWNoZWQgOiBcIm5vbmVcIn0gY2xhc3M9XCJpbWdfX2ltZy1hdHRhY2hlZFwiIGFsdD1cIlwiPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fZm9vdGVyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19yb3dcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtdGh1bWJzLXVwIHRvZ2dsZV9fbGlrZXMgJHtjb21tZW50LnN0YXRlID09IFwibGlrZWRcIiA/IFwic3RhdGVfX2FjdGl2ZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgY29tbWVudC5zdGF0ZSA9PSBcImRpc2xpa2VkXCIgPyBcInN0YXRlX19kaXNhYmxlZFwiIDogXCJcIlxyXG4gICAgICB9XCIgc3RhdGU9XCIke2NvbW1lbnQuc3RhdGUgPyBjb21tZW50LnN0YXRlIDogXCJuZXV0cmFsXCJ9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyaWdnZXJfX21vZGFsIGNvdW50ZXJfX2xpa2VzXCI+KCR7Y29tbWVudC5saWtlc30pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX2NvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtdGh1bWJzLWRvd24gdG9nZ2xlX19saWtlcyAke2NvbW1lbnQuc3RhdGUgPT0gXCJkaXNsaWtlZFwiID8gXCJzdGF0ZV9fYWN0aXZlXCIgOiBcIlwifSAke1xyXG4gICAgICAgICBjb21tZW50LnN0YXRlID09IFwibGlrZWRcIiA/IFwic3RhdGVfX2Rpc2FibGVkXCIgOiBcIlwiXHJcbiAgICAgIH1cIiBzdGF0ZT1cIiR7Y29tbWVudC5zdGF0ZSA/IGNvbW1lbnQuc3RhdGUgOiBcIm5ldXRyYWxcIn1cIj48L2k+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJpZ2dlcl9fbW9kYWwgY291bnRlcl9fZGlzbGlrZXNcIj4oJHtjb21tZW50LmRpc2xpa2VzfSk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3Jvd1wiPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2NyZWF0ZWRBdFwiPiR7aGVscGVycy50aW1lQWdvKGNvbW1lbnQuY3JlYXRlZEF0KX08L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19tZW51XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bl9fYm94XCIgaWQ9XCIke29wdGlvbnMuZHJvcGRvd25fY29udGFpbmVyfS0ke2NvbW1lbnQuaWR9XCI+PC9kaXY+XHJcbiAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLWggZHJvcGRvd25fX3RyaWdnZXJcIiBpZD1cIiR7b3B0aW9ucy5kcm9wZG93bl90cmlnZ2VyfS0ke2NvbW1lbnQuaWR9XCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgdGhpcy5jb21tZW50LmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgICAgaWYgKCFjb21tZW50LmltZ19hdHRhY2hlZCkgdGhpcy5jb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudF9faW1nX2F0dGFjaGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgIHRoaXMuY29tbWVudHMuYXBwZW5kQ2hpbGQodGhpcy5jb21tZW50KTtcclxuXHJcbiAgICAgIGlmIChtZXRob2QgPT0gXCJhcHBlbmRcIikge1xyXG4gICAgICAgICB0aGlzLmNvbW1lbnRzLmFwcGVuZENoaWxkKHRoaXMuY29tbWVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuY29tbWVudHMucHJlcGVuZCh0aGlzLmNvbW1lbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFkZExpa2VzRXYoKTtcclxuICAgICAgaWYgKG9wdGlvbnMuZHJvcGRvd24pIG9wdGlvbnMuZHJvcGRvd24oY29tbWVudCk7XHJcbiAgICAgIHRoaXMuYWRkUmVzcG9uc2VMaXN0RXYoKTtcclxuXHJcbiAgICAgIGlmIChjb21tZW50LmNvbW1lbnRlZF9wb3N0LmF1dGhvci5pZCAhPSB0aGlzLnVzZXIuaWQgJiYgY29tbWVudC5jb21tZW50X2F1dGhvci5pZCAhPSB0aGlzLnVzZXIuaWQpIHtcclxuICAgICAgICAgdGhpcy5jb21tZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudF9fbWVudVwiKS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZW5kZXJJbnB1dCA9ICgpID0+IHtcclxuICAgICAgbGV0IGRlZmF1bHRfaW1nID0gXCIvaW1nL2RlZmF1bHRzL3Byb2ZpbGUucG5nXCI7XHJcbiAgICAgIGxldCBhdmF0YXIgPSB0aGlzLnJlc3BvbnNlLnByb2ZpbGVfZGF0YSA/IHRoaXMucmVzcG9uc2UucHJvZmlsZV9kYXRhLmF2YXRhciA6IGRlZmF1bHRfaW1nO1xyXG4gICAgICBsZXQgbG9jayA9IHRoaXMudXNlci5sb2dnZWQgPyBcIlwiIDogXCJkaXNhYmxlZFwiO1xyXG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSB0aGlzLnVzZXIubG9nZ2VkID8gXCJXcml0ZSBhIGNvbW1lbnQuLi5cIiA6IFwiVG8gd3JpdGUgYSBjb21tZW50IHBsZWFzZSBzaWduIGluXCI7XHJcblxyXG4gICAgICB0aGlzLmh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3hfX3Jvd1wiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudF9fcHJvZmlsZS1pbWdcIj4gICAgIFxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7YXZhdGFyfVwiIGFsdD1cIlwiIHdpZHRoPVwiNDBcIiBjbGFzcz1cImltZ19fY29tbWVudC1wcm9maWxlXCI+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm94X19yb3dcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJveF9faW5wdXRcIj4gICAgIFxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIlwiIHBsYWNlaG9sZGVyPVwiJHtwbGFjZWhvbGRlcn1cIiBjbGFzcz1cImlucHV0X19jb21tZW50XCIgJHtsb2NrfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImlucHV0X19jb21tZW50LWltYWdlXCIgY2xhc3M9XCJpbnB1dF9fY29tbWVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRfX2NvbW1lbnQtaW1hZ2VcIiBjbGFzcz1cImxhYmVsX19maWxlXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWltYWdlc1wiPjwvaT5cclxuICAgICAgICAgICAgPC9sYWJlbD4gICBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgPGRpdiBjbGFzcz1cImJveF9fcm93XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50X19pbWFnZS1wcmV2aWV3XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiSW1hZ2UgUHJldmlld1wiIGNsYXNzPVwiaW1hZ2UtcHJldmlld19faW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRfX2ltYWdlLWNsZWFyXCI+XHJcbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImJveF9fcm93XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0X19lbnRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5QcmVzcyBFbnRlciB0byBwb3N0Ljwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgICB0aGlzLmlucHV0LmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkSW5wdXRFdiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX2NvbW1lbnRcIik7XHJcbiAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgZS50YXJnZXQudmFsdWUudHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENSRUFURSBBTkQgUkVOREVSIFNJTkdMRSBDT01NRU5UXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVGZXRjaFBvc3RDb21tZW50KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gYXdhaXQgdGhpcy5mZXRjaERhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJNb2RhbEl0ZW0odGhpcy5kYXRhLCBcInByZXBlbmRcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHRfX2NvbW1lbnQtY291bnRcIik7XHJcbiAgICAgICAgICAgIGNvdW50ZXJzLmZvckVhY2goKGNvdW50ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7dGhpcy5kYXRhLmNvdW50fSlgO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGV4dF9fY29tbWVudC1jb3VudFwiKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7dGhpcy5kYXRhLmNvdW50fSlgO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtwb3N0PVwiJHt0aGlzLnBvc3RfaWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3N0cykge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHBvc3QucXVlcnlTZWxlY3RvcihcIi50cmlnZ2VyX19jb21tZW50cy1tb2RhbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBwb3N0LnF1ZXJ5U2VsZWN0b3IoXCIudHJpZ2dlcl9fY29tbWVudHMtbW9kYWxcIikuaW5uZXJIVE1MID0gYCgke3RoaXMuZGF0YS5jb3VudH0pYDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENMRUFSIElNQUdFXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgc2VsZi5maWxlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5pbnBGaWxlLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkTGlrZXNFdiA9ICgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVycyA9IHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZ2dsZV9fbGlrZXNcIik7XHJcbiAgICAgIHRoaXMudG9nZ2xlcnMuZm9yRWFjaCgodG9nZ2xlcikgPT4ge1xyXG4gICAgICAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbmNsaWNrTGlrZXMpIG9wdGlvbnMub25jbGlja0xpa2VzKGUudGFyZ2V0KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRSZXNwb25zZUxpc3RFdiA9ICgpID0+IHtcclxuICAgICAgdGhpcy50cmlnZ2VycyA9IHRoaXMuY29tbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyaWdnZXJfX21vZGFsXCIpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcclxuICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25jbGlja0NvdW50KSBvcHRpb25zLm9uY2xpY2tDb3VudChlLnRhcmdldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucHJldmlld0ltYWdlID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlucEZpbGUgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19jb21tZW50LWltYWdlXCIpO1xyXG4gICAgICB0aGlzLnByZXZpZXdJbWFnZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2UtcHJldmlld19faW1hZ2VcIik7XHJcbiAgICAgIHRoaXMuYnRuQ2xlYXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX2ltYWdlLWNsZWFyXCIpO1xyXG4gICAgICB0aGlzLnByZXZpZXdDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX2ltYWdlLXByZXZpZXdcIik7XHJcblxyXG4gICAgICBzZWxmLmlucEZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHNlbGYuZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbiAgICAgICAgIGlmIChzZWxmLmZpbGUpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGYuZmlsZSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VsZi5idG5DbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICBzZWxmLmZpbGUgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLmlucEZpbGUudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdJbWFnZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgaWYgKG92ZXJsYXkgIT09IG51bGwgfHwgdHlwZW9mIG92ZXJsYXkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNlY29uZGFyeV9vdmVybGF5KSB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICBpZiAodGhpcy5pdGVtX292ZXJsYXkpIHRoaXMuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgbGV0IGJ0bl9jbG9zZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jbG9zZVwiKTtcclxuICAgICAgYnRuX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhpZGVNb2RhbCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJlcGFyZUZldGNoR2V0Q29tbWVudHMoKTtcclxuICAgICAgdGhpcy5yZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICB0aGlzLnN0eWxlX2NsYXNzID0gb3B0aW9ucy5zdHlsZV9jbGFzcztcclxuICAgICAgdGhpcy5jYiA9IG9wdGlvbnMuY2I7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlck1vZGFsQm9keSgpO1xyXG4gICAgICB0aGlzLnJlbmRlcklucHV0KCk7XHJcblxyXG4gICAgICB0aGlzLnJlc3BvbnNlLmNvbW1lbnRfZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyTW9kYWxJdGVtKGNvbW1lbnQsIFwiYXBwZW5kXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYWRkSW5wdXRFdigpO1xyXG4gICAgICB0aGlzLnByZXZpZXdJbWFnZSgpO1xyXG5cclxuICAgICAgdGhpcy5hZGRFdigpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0KCk7XHJcbiAgIHJldHVybiB0aGlzO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVDb21tZW50KG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLnJlbmRlck1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLmh0bWwoKTtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUgPSBudWxsO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgIHNlbGYubW9kYWxfd2luZG93ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fd2luZG93XCIpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1BSU4gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYub3ZlcmxheSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgICAgc2VsZi5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXlfYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJVEVNIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5pdGVtX292ZXJsYXlfYmc7XHJcbiAgICAgICAgIC8vIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBidG5fc3VibWl0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLXN1Ym1pdFwiKTtcclxuICAgICAgYnRuX3N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgc2VsZi5wcmVwYXJlRmV0Y2goKTtcclxuICAgICAgICAgc2VsZi5yZXNwb25zZSA9IGF3YWl0IHNlbGYuZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgIHNlbGYudXBkYXRlRE9NKCk7XHJcbiAgICAgICAgIGlmIChvcHRpb25zLm9uc3VibWl0KSBvcHRpb25zLm9uc3VibWl0KHNlbGYucmVzcG9uc2UpO1xyXG4gICAgICAgICBzZWxmLmhpZGVNb2RhbCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBidG5fY2FuY2VsID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNhbmNlbFwiKTtcclxuICAgICAgYnRuX2NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgc2VsZi5oaWRlTW9kYWwoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYnRuX2Nsb3NlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNsb3NlXCIpO1xyXG4gICAgICBidG5fY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuaGlkZU1vZGFsKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYucHJlcGFyZUZldGNoID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmlkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgXCJib3hfX2NvbW1lbnRcIikuZ2V0QXR0cmlidXRlKFwiY29tbWVudFwiKTtcclxuICAgICAgc2VsZi51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZGVsZXRlX2NvbW1lbnRcIik7XHJcblxyXG4gICAgICBzZWxmLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcImlkXCIsIHNlbGYuaWQpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5mZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNlbGYucHJvbWlzZSA9IGZldGNoKHNlbGYudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IHNlbGYuZmV0Y2hfYm9keSxcclxuICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi51cGRhdGVET00gPSAoKSA9PiB7XHJcbiAgICAgIGlmIChzZWxmLnJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgc2VsZi5jb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjb21tZW50ID0gXCIke3NlbGYucmVzcG9uc2UuaWR9XCJdYCk7XHJcbiAgICAgICAgIHNlbGYuY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHRfX2NvbW1lbnQtY291bnRcIikuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke3NlbGYucmVzcG9uc2UuY291bnR9KWA7XHJcblxyXG4gICAgICBzZWxmLnBvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3Bvc3Q9XCIke3NlbGYucmVzcG9uc2UucG9zdF9pZH1cIl1gKTtcclxuICAgICAgaWYgKHNlbGYucG9zdHMpIHtcclxuICAgICAgICAgc2VsZi5wb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwb3N0LnF1ZXJ5U2VsZWN0b3IoXCIudHJpZ2dlcl9fY29tbWVudHMtbW9kYWxcIikpIHtcclxuICAgICAgICAgICAgICAgcG9zdC5xdWVyeVNlbGVjdG9yKFwiLnRyaWdnZXJfX2NvbW1lbnRzLW1vZGFsXCIpLmlubmVySFRNTCA9IGAoJHtzZWxmLnJlc3BvbnNlLmNvdW50fSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgIGlmIChvdmVybGF5ICE9PSBudWxsIHx8IHR5cGVvZiBvdmVybGF5ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZWxmLnNlY29uZGFyeV9vdmVybGF5KSBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICBpZiAoc2VsZi5pdGVtX292ZXJsYXkpIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5odG1sID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHtvcHRpb25zLnN0eWxlX2NsYXNzfScgaWQ9XCIke29wdGlvbnMubW9kYWxfb3ZlcmxheX1cIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGV4dF9fbW9kYWwtaGVhZGVyXCI+RGVsZXRlIENvbW1lbnQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBidG5fX21vZGFsLWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9keV9fdGV4dFwiPlRoaXMgd2lsbCByZW1vdmUgY29tbWVudDwvcD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+ICAgICBcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbW9kYWwtc3VibWl0XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX21vZGFsLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYucmVuZGVyTW9kYWwoKTtcclxuICAgICAgc2VsZi5hZGRFdigpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0KCk7XHJcbiAgIHJldHVybiBzZWxmO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vLi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVQb3N0KG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLnJlbmRlck1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSBzZWxmLmh0bWwoKTtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUgPSBudWxsO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgIHNlbGYubW9kYWxfd2luZG93ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fd2luZG93XCIpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1BSU4gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYub3ZlcmxheSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgICAgc2VsZi5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXlfYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJVEVNIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5pdGVtX292ZXJsYXlfYmc7XHJcbiAgICAgICAgIC8vIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBidG5fc3VibWl0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLXN1Ym1pdFwiKTtcclxuICAgICAgYnRuX3N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgc2VsZi5wcmVwYXJlRmV0Y2goKTtcclxuICAgICAgICAgc2VsZi5yZXNwb25zZSA9IGF3YWl0IHNlbGYuZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICAgICBpZiAob3B0aW9ucy5vbnN1Ym1pdCkgb3B0aW9ucy5vbnN1Ym1pdChzZWxmLnJlc3BvbnNlKTtcclxuICAgICAgICAgc2VsZi5oaWRlTW9kYWwoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYnRuX2NhbmNlbCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jYW5jZWxcIik7XHJcbiAgICAgIGJ0bl9jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgIHNlbGYuaGlkZU1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJ0bl9jbG9zZSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jbG9zZVwiKTtcclxuICAgICAgYnRuX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLmhpZGVNb2RhbCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnByZXBhcmVGZXRjaCA9ICgpID0+IHtcclxuICAgICAgc2VsZi5pZCA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIFwiYm94X19wb3N0XCIpLmdldEF0dHJpYnV0ZShcInBvc3RcIik7XHJcbiAgICAgIHNlbGYudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImRlbGV0ZV9wb3N0XCIpO1xyXG5cclxuICAgICAgc2VsZi5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHNlbGYuZmV0Y2hfYm9keS5hcHBlbmQoXCJpZFwiLCBzZWxmLmlkKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLnByb21pc2UgPSBmZXRjaChzZWxmLnVybCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiBzZWxmLmZldGNoX2JvZHksXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgaWYgKG92ZXJsYXkgIT09IG51bGwgfHwgdHlwZW9mIG92ZXJsYXkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzZWxmLnNlY29uZGFyeV9vdmVybGF5KSBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICBpZiAoc2VsZi5pdGVtX292ZXJsYXkpIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5odG1sID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHtvcHRpb25zLnN0eWxlX2NsYXNzfSc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHRfX21vZGFsLWhlYWRlclwiPkRlbGV0ZSBQb3N0PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgYnRuX19tb2RhbC1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvZHlfX3RleHRcIj5UaGlzIHdpbGwgcmVtb3ZlIHBvc3QgYW5kIGFsbCByZWxhdGVkIGRhdGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX21vZGFsLXN1Ym1pdFwiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19tb2RhbC1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCB8fCB0eXBlb2Ygb3ZlcmxheSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgc2VsZi5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2VsZi5zZWNvbmRhcnlfb3ZlcmxheSkgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgaWYgKHNlbGYuaXRlbV9vdmVybGF5KSBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi5yZW5kZXJNb2RhbCgpO1xyXG4gICAgICBzZWxmLmFkZEV2KCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQoKTtcclxuICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRDb21tZW50KG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLnJlbmRlck1vZGFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLmRhdGEgPSBhd2FpdCBzZWxmLmdldERhdGEoKTtcclxuXHJcbiAgICAgIHNlbGYuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IHNlbGYuaHRtbCgpO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZSA9IG51bGw7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE1BSU4gT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYub3ZlcmxheSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgICAgc2VsZi5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNT0RBTCBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5zZWNvbmRhcnlfb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgIHNlbGYuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXlfYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBJVEVNIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLml0ZW1fb3ZlcmxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHNlbGYuaXRlbV9vdmVybGF5ID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5pdGVtX292ZXJsYXkpO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5pdGVtX292ZXJsYXlfYmc7XHJcbiAgICAgICAgIC8vIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYucHJldmlld0ltYWdlID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmltZ19hdHRhY2hlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgc2VsZi5pbnBGaWxlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fY29tbWVudC1pbWdcIik7XHJcbiAgICAgIHNlbGYucHJldmlld0ltYWdlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcmV2aWV3X19pbWdcIik7XHJcbiAgICAgIHNlbGYucHJldmlld1RleHQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByZXZpZXdfX3RleHRcIik7XHJcbiAgICAgIHNlbGYuYnRuQ2xlYXIgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmltZy1hdHRhY2hlZF9fYnRuLWNsZWFyXCIpO1xyXG5cclxuICAgICAgc2VsZi5pbnBGaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBzZWxmLmZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyXG4gICAgICAgICBpZiAoc2VsZi5maWxlKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3VGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGYuZmlsZSk7XHJcbiAgICAgICAgICAgIHNlbGYuaW1nX2F0dGFjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3VGV4dC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYuaW1nX2F0dGFjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLmJ0bkNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgIHNlbGYuaW5wRmlsZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld1RleHQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIHNlbGYucHJldmlld0ltYWdlLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLmltZ19hdHRhY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICBzZWxmLnJlbW92ZV9pbWcgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBidG5fc3VibWl0ID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLXN1Ym1pdFwiKTtcclxuICAgICAgYnRuX3N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgc2VsZi5wcmVwYXJlRmV0Y2goKTtcclxuICAgICAgICAgc2VsZi5yZXNwb25zZSA9IGF3YWl0IHNlbGYuZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgIHNlbGYudXBkYXRlRE9NKCk7XHJcblxyXG4gICAgICAgICBpZiAob3B0aW9ucy5vbnN1Ym1pdCkgb3B0aW9ucy5vbnN1Ym1pdChzZWxmLnJlc3BvbnNlKTtcclxuICAgICAgICAgc2VsZi5oaWRlTW9kYWwoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYnRuX2NhbmNlbCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jYW5jZWxcIik7XHJcbiAgICAgIGJ0bl9jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgIHNlbGYuaGlkZU1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGJ0bl9jbG9zZSA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1jbG9zZVwiKTtcclxuICAgICAgYnRuX2Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLmhpZGVNb2RhbCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNlbGYuaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBcImJveF9fY29tbWVudFwiKS5nZXRBdHRyaWJ1dGUoXCJjb21tZW50XCIpO1xyXG4gICAgICBzZWxmLmZldGNoX2JvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcImlkXCIsIHNlbGYuaWQpO1xyXG4gICAgICBzZWxmLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJnZXRfY29tbWVudFwiKTtcclxuXHJcbiAgICAgIHJldHVybiBmZXRjaChzZWxmLnVybCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiBzZWxmLmZldGNoX2JvZHksXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkVmFsdWVzID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X190ZXh0XCIpLnZhbHVlID0gc2VsZi5kYXRhLmJvZHkudHJpbSgpO1xyXG5cclxuICAgICAgaWYgKHNlbGYuZGF0YS5pbWdfYXR0YWNoZWQpIHtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGYuZGF0YS5pbWdfYXR0YWNoZWQpO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3SW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5wcmVwYXJlRmV0Y2ggPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImVkaXRfY29tbWVudFwiKTtcclxuXHJcbiAgICAgIHNlbGYudGV4dCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX3RleHRcIikudmFsdWUudHJpbSgpO1xyXG4gICAgICBzZWxmLmltYWdlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fY29tbWVudC1pbWdcIikuZmlsZXNbMF07XHJcbiAgICAgIHNlbGYuaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBcImJveF9fY29tbWVudFwiKS5nZXRBdHRyaWJ1dGUoXCJjb21tZW50XCIpO1xyXG5cclxuICAgICAgc2VsZi5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHNlbGYuZmV0Y2hfYm9keS5hcHBlbmQoXCJpZFwiLCBzZWxmLmlkKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcInRleHRcIiwgc2VsZi50ZXh0KTtcclxuXHJcbiAgICAgIGlmIChzZWxmLmltZ19hdHRhY2hlZCkge1xyXG4gICAgICAgICBzZWxmLmZldGNoX2JvZHkuYXBwZW5kKFwiaW1hZ2VcIiwgc2VsZi5pbWFnZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5yZW1vdmVfaW1nKSB7XHJcbiAgICAgICAgIHNlbGYuZmV0Y2hfYm9keS5hcHBlbmQoXCJpbWFnZVwiLCBcInJlbW92ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcImltYWdlXCIsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi5wcm9taXNlID0gZmV0Y2goc2VsZi51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogc2VsZi5mZXRjaF9ib2R5LFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzZWxmLnByb21pc2U7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnVwZGF0ZURPTSA9ICgpID0+IHtcclxuICAgICAgaWYgKHNlbGYucmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICBzZWxmLmNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY29tbWVudCA9IFwiJHtzZWxmLnJlc3BvbnNlLmNvbW1lbnRfZGF0YS5pZH1cIl1gKTtcclxuXHJcbiAgICAgICAgIHNlbGYuY29tbWVudC5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21tZW50X190ZXh0XCIpLmlubmVySFRNTCA9IHNlbGYucmVzcG9uc2UuY29tbWVudF9kYXRhLmJvZHk7XHJcbiAgICAgICAgICAgIGxldCBpbWdfY29udGFpbmVyID0gY29tbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRfX2ltZ19hdHRhY2hlZFwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYucmVzcG9uc2UuY29tbWVudF9kYXRhLmltZ19hdHRhY2hlZCkge1xyXG4gICAgICAgICAgICAgICBpbWdfY29udGFpbmVyLnN0eWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgbGV0IGltZ19hdHRhY2hlZCA9IGNvbW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfX2ltZy1hdHRhY2hlZFwiKTtcclxuICAgICAgICAgICAgICAgaW1nX2F0dGFjaGVkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxmLnJlc3BvbnNlLmNvbW1lbnRfZGF0YS5pbWdfYXR0YWNoZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBpbWdfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgc2VsZi5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCB8fCB0eXBlb2Ygb3ZlcmxheSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2VsZi5zZWNvbmRhcnlfb3ZlcmxheSkgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgaWYgKHNlbGYuaXRlbV9vdmVybGF5KSBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaHRtbCA9ICgpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbF9fd2luZG93ICR7b3B0aW9ucy5zdHlsZV9jbGFzc30nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0X19tb2RhbC1oZWFkZXJcIj5FZGl0IENvbW1lbnQ8L2g1PlxyXG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBidG5fX21vZGFsLWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19lZGl0LWNvbW1lbnRcIj5cclxuICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPlRleHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2lucHV0IGlucHV0X190ZXh0XCIgaWQ9XCJpbnB1dF9fdGV4dFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwX19pbWctYXR0YWNoZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1hdHRhY2hlZF9fbGFiZWxcIj5JbWFnZSBBdHRhY2hlZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRfX2NvbW1lbnQtaW1nXCIgY2xhc3M9XCJpbWctYXR0YWNoZWRfX2J0bi11cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaW1hZ2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctYXR0YWNoZWRfX2J0bi1jbGVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctYXR0YWNoZWRfX3ByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJDb3ZlciBQcmV2aWV3XCIgY2xhc3M9XCJwcmV2aWV3X19pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3X190ZXh0XCI+UHJldmlldyBJbWFnZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2lucHV0IGlucHV0X19jb21tZW50LWltZ1wiIGlkPVwiaW5wdXRfX2NvbW1lbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+ICAgICBcclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbW9kYWwtc3VibWl0XCI+RWRpdCBDb21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX21vZGFsLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5pbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBzZWxmLnJlbmRlck1vZGFsKCk7XHJcbiAgICAgIHNlbGYuYWRkRXYoKTtcclxuICAgICAgc2VsZi5wcmV2aWV3SW1hZ2UoKTtcclxuICAgICAgc2VsZi5hZGRWYWx1ZXMoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCgpO1xyXG4gICByZXR1cm4gc2VsZjtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRQb3N0KG9wdGlvbnMpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLnJlbmRlck1vZGFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZWxmLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuaWQpO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSBzZWxmLmh0bWwoKTtcclxuXHJcbiAgICAgIHNlbGYuY3NyZiA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX2NzcmZcIik7XHJcbiAgICAgIHNlbGYudG9rZW4gPSBhd2FpdCBzZWxmLmdldENTUkYoKTtcclxuICAgICAgc2VsZi5jc3JmLnZhbHVlID0gc2VsZi50b2tlbi50b2tlbjtcclxuXHJcbiAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlID0gbnVsbDtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG4gICAgICBzZWxmLmVycm9yX2ZpZWxkcyA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNQUlOIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICBzZWxmLm92ZXJsYXkgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgICAgIHNlbGYub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTU9EQUwgT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICBzZWxmLnNlY29uZGFyeV9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5KTtcclxuICAgICAgICAgc2VsZi5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5X2JnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSVRFTSBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5pdGVtX292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICBzZWxmLml0ZW1fb3ZlcmxheSA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuaXRlbV9vdmVybGF5KTtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgc2VsZi5pdGVtX292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuaXRlbV9vdmVybGF5X2JnO1xyXG4gICAgICAgICAvLyBzZWxmLml0ZW1fb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjk5OVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5yZW5kZXJkcm9wZG93bikgb3B0aW9ucy5yZW5kZXJkcm9wZG93bigpO1xyXG4gICAgICBpZiAob3B0aW9ucy5yZW5kZXJhdXRvY29tcGxldGUpIG9wdGlvbnMucmVuZGVyYXV0b2NvbXBsZXRlKCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmFkZEV2ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgYnRuX3N1Ym1pdCA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19tb2RhbC1zdWJtaXRcIik7XHJcbiAgICAgIGJ0bl9zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgIHNlbGYucHJlcGFyZUZldGNoKCk7XHJcbiAgICAgICAgIHNlbGYucmVzcG9uc2UgPSBhd2FpdCBzZWxmLmVkaXRQb3N0KCk7XHJcbiAgICAgICAgIHNlbGYudXBkYXRlRE9NKCk7XHJcblxyXG4gICAgICAgICBpZiAoc2VsZi5yZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25zdWJtaXQoc2VsZi5yZXNwb25zZSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuaGlkZUVycm9ycygpO1xyXG4gICAgICAgICAgICBzZWxmLmRpc3BsYXlFcnJvcnMoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBidG5fY2FuY2VsID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNhbmNlbFwiKTtcclxuICAgICAgYnRuX2NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgc2VsZi5oaWRlTW9kYWwoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYnRuX2Nsb3NlID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNsb3NlXCIpO1xyXG4gICAgICBidG5fY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuaGlkZU1vZGFsKTtcclxuXHJcbiAgICAgIGxldCB0YWdfaW5wdXQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIik7XHJcbiAgICAgIHRhZ19pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogREVQRU5EQU5DWSBUQUdTIENSRUFURVxyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3ItZmllbGRfX3RhZ3NcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICBvcHRpb25zLm9udGFnY3JlYXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3NfX21hdGNoXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnByZXZpZXdGcm9udENvdmVyID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmlucHV0RnJvbnQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19mcm9udC1jb3ZlclwiKTtcclxuICAgICAgc2VsZi5wcmV2aWV3RnJvbnQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZyb250LWNvdmVyLXByZXZpZXdfX2ltYWdlXCIpO1xyXG4gICAgICBzZWxmLnByZXZpZXdGcm9udFRleHQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZyb250LWNvdmVyLXByZXZpZXdfX3RleHRcIik7XHJcbiAgICAgIHNlbGYuYnRuRnJvbnRDbGVhciA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbnQtY292ZXJfX2J0bi1jbGVhclwiKTtcclxuXHJcbiAgICAgIHNlbGYuaW5wdXRGcm9udC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgc2VsZi5maWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICAgaWYgKHNlbGYuZmlsZSkge1xyXG4gICAgICAgICAgICBzZWxmLnJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0Zyb250VGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0Zyb250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgc2VsZi5wcmV2aWV3RnJvbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMucmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGYuZmlsZSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYucHJldmlld0Zyb250VGV4dC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3RnJvbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLmJ0bkZyb250Q2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgc2VsZi5pbnB1dEZyb250LnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgc2VsZi5wcmV2aWV3RnJvbnRUZXh0LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdGcm9udC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnByZXZpZXdIZWFkZXJDb3ZlciA9ICgpID0+IHtcclxuICAgICAgc2VsZi5pbnB1dEhlYWRlciA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfX2hlYWRlci1jb3ZlclwiKTtcclxuICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItY292ZXItcHJldmlld19faW1hZ2VcIik7XHJcbiAgICAgIHNlbGYucHJldmlld0hlYWRlclRleHQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1jb3Zlci1wcmV2aWV3X190ZXh0XCIpO1xyXG4gICAgICBzZWxmLmJ0bkhlYWRlckNsZWFyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItY292ZXJfX2J0bi1jbGVhclwiKTtcclxuXHJcbiAgICAgIHNlbGYuaW5wdXRIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHNlbGYuZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJcbiAgICAgICAgIGlmIChzZWxmLmZpbGUpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdIZWFkZXJUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNlbGYucmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5yZWFkZXIucmVhZEFzRGF0YVVSTChzZWxmLmZpbGUpO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdIZWFkZXJUZXh0LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLnByZXZpZXdIZWFkZXIuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWxmLmJ0bkhlYWRlckNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgIHNlbGYuaW5wdXRIZWFkZXIudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdIZWFkZXJUZXh0LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICBzZWxmLnByZXZpZXdIZWFkZXIuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5nZXRDU1JGID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgdGhpcy5kYXRhLmFwcGVuZChcInRva2VuX25hbWVcIiwgXCJwb3N0XCIpO1xyXG4gICAgICB0aGlzLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJnZXRfdG9rZW5cIik7XHJcbiAgICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwge1xyXG4gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICBib2R5OiB0aGlzLmRhdGEsXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuZ2V0UG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi5wb3N0X2lkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShvcHRpb25zLnRhcmdldCwgXCJib3hfX3Bvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKTtcclxuICAgICAgc2VsZi5kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHNlbGYuZGF0YS5hcHBlbmQoXCJwb3N0X2lkXCIsIHNlbGYucG9zdF9pZCk7XHJcbiAgICAgIHNlbGYudXJsID0gUm91dGluZy5nZW5lcmF0ZShcImdldF9wb3N0XCIpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goc2VsZi51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogc2VsZi5kYXRhLFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmFkZFZhbHVlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fdGl0bGVcIikudmFsdWUgPSBzZWxmLnBvc3RfZGF0YS50aXRsZTtcclxuICAgICAgc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGV4dFwiKS52YWx1ZSA9IHNlbGYucG9zdF9kYXRhLmJvZHk7XHJcblxyXG4gICAgICBzZWxmLnByZXZpZXdGcm9udFRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBzZWxmLnByZXZpZXdGcm9udC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBzZWxmLnByZXZpZXdGcm9udC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2VsZi5wb3N0X2RhdGEuZnJvbnRfY292ZXJfbGluayk7XHJcblxyXG4gICAgICBzZWxmLnByZXZpZXdIZWFkZXJUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNlbGYucHJldmlld0hlYWRlci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2VsZi5wb3N0X2RhdGEuaGVhZGVyX2NvdmVyX2xpbmspO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIERFUEVOREFOQ1kgQUREIEVYSVNUSU5HIFRBR1NcclxuICAgICAgICovXHJcbiAgICAgIG9wdGlvbnMucmVuZGVydGFncyhzZWxmLnBvc3RfZGF0YS50YWdzKTtcclxuXHJcbiAgICAgIHNlbGYuZm9sZGVyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fdmFsdWVcIik7XHJcbiAgICAgIHNlbGYuZm9sZGVyLmlubmVySFRNTCA9IHNlbGYucG9zdF9kYXRhLmZvbGRlci5uYW1lO1xyXG4gICAgICBzZWxmLmZvbGRlci5zZXRBdHRyaWJ1dGUoXCJmb2xkZXJcIiwgc2VsZi5wb3N0X2RhdGEuZm9sZGVyLmZvbGRlcl9pZCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnByZXBhcmVGZXRjaCA9ICgpID0+IHtcclxuICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX3Bvc3QtdHlwZVwiKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgbGV0IGZvbGRlciA9IHNlbGYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX3ZhbHVlXCIpLmdldEF0dHJpYnV0ZShcImZvbGRlclwiKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcInBvc3RbZm9sZGVyXVwiLCBmb2xkZXIpO1xyXG5cclxuICAgICAgbGV0IHRhZ3Nfc2VsZWN0ZWQgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhZ3NfX3NlbGVjdGVkXCIpO1xyXG4gICAgICBsZXQgdGFncyA9IHRhZ3Nfc2VsZWN0ZWQucXVlcnlTZWxlY3RvckFsbChcIi50YWdcIik7XHJcbiAgICAgIGxldCB0YWdfbmFtZXMgPSBbXTtcclxuICAgICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgbGV0IHRhZ19uYW1lID0gdGFnLnF1ZXJ5U2VsZWN0b3IoXCIudGFnX19uYW1lXCIpLmlubmVySFRNTDtcclxuICAgICAgICAgdGFnX25hbWVzLnB1c2godGFnX25hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcInBvc3RbdGFnc11cIiwgdGFnX25hbWVzKTtcclxuICAgICAgc2VsZi5mZXRjaF9ib2R5LmFwcGVuZChcclxuICAgICAgICAgXCJwb3N0W2lkXVwiLFxyXG4gICAgICAgICBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBcImJveF9fcG9zdFwiKS5nZXRBdHRyaWJ1dGUoXCJwb3N0XCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gc2VsZi5mZXRjaF9ib2R5O1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5lZGl0UG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2VsZi51cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZWRpdF9wb3N0XCIpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goc2VsZi51cmwsIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogc2VsZi5mZXRjaF9ib2R5LFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLnVwZGF0ZURPTSA9ICgpID0+IHtcclxuICAgICAgaWYgKHNlbGYucmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICBzZWxmLnBvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbcG9zdCA9IFwiJHtzZWxmLnJlc3BvbnNlLnBvc3RfZGF0YS5pZH1cIl1gKTtcclxuXHJcbiAgICAgICAgIHNlbGYucG9zdC5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIHBvc3QucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2ltZ1wiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2VsZi5yZXNwb25zZS5wb3N0X2RhdGEuZnJvbnRfY292ZXJfbGluayk7XHJcblxyXG4gICAgICAgICAgICBwb3N0LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keV9fdGl0bGVcIikuaW5uZXJIVE1MID0gc2VsZi5yZXNwb25zZS5wb3N0X2RhdGEudGl0bGU7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRhZ3NfY29udGFpbmVyID0gcG9zdC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlfX3RhZ3NcIik7XHJcbiAgICAgICAgICAgIHNlbGYudGFnc19jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudGFncyA9IHNlbGYucmVzcG9uc2UucG9zdF9kYXRhLnRhZ3M7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCB0YWdfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICAgICB0YWdfZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YWdcIiwgdGFnLmlkKTtcclxuICAgICAgICAgICAgICAgdGFnX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhZ3NfX3RhZ1wiKTtcclxuICAgICAgICAgICAgICAgdGFnX2VsZW1lbnQuaW5uZXJIVE1MID0gYCMke3RhZy5uYW1lfWA7XHJcbiAgICAgICAgICAgICAgIHNlbGYudGFnc19jb250YWluZXIuYXBwZW5kQ2hpbGQodGFnX2VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgICAgaWYgKG92ZXJsYXkgIT09IG51bGwgfHwgdHlwZW9mIG92ZXJsYXkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICBzZWxmLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzZWxmLnNlY29uZGFyeV9vdmVybGF5KSBzZWxmLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICBpZiAoc2VsZi5pdGVtX292ZXJsYXkpIHNlbGYuaXRlbV9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5oaWRlRXJyb3JzID0gKCkgPT4ge1xyXG4gICAgICBzZWxmLmVycm9yX2ZpZWxkcy5mb3JFYWNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICBlcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuZGlzcGxheUVycm9ycyA9ICgpID0+IHtcclxuICAgICAgbGV0IGVycm9ycyA9IFtdO1xyXG5cclxuICAgICAgc2VsZi5yZXNwb25zZS5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgbGV0IHN0cl8xID0gZXJyb3IuY2F1c2UucHJvcGVydHlQYXRoLnJlcGxhY2UoXCJkYXRhXCIsIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xyXG4gICAgICAgICBsZXQgY2F1c2UgPSBzdHJfMS5yZXBsYWNlKC8oXi4qXFxbfFxcXS4qJCkvZywgXCJcIik7XHJcbiAgICAgICAgIGxldCBlID0geyBjYXVzZTogY2F1c2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuXHJcbiAgICAgICAgIGVycm9ycy5wdXNoKGUpO1xyXG4gICAgICB9KTtcclxuICAgICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgIGlmIChzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjZXJyb3ItZmllbGRfXyR7ZXJyb3IuY2F1c2V9YCkpIHtcclxuICAgICAgICAgICAgc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihgI2Vycm9yLWZpZWxkX18ke2Vycm9yLmNhdXNlfWApLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLXRleHRfX2Vycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAgJHtlcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5odG1sID0gKCkgPT4ge1xyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgPGRpdiBjbGFzcz0nb3ZlcmxheSc+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9J21vZGFsX193aW5kb3cgJHtvcHRpb25zLnN0eWxlX2NsYXNzfSc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXlfX21vZGFsLWl0ZW0nIGlkPVwiJHtvcHRpb25zLm1vZGFsX292ZXJsYXl9XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICAgIDxoNSBjbGFzcz1cInRleHRfX21vZGFsLWhlYWRlclwiPkVkaXQgUG9zdDwvaDU+XHJcbiAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGJ0bl9fbW9kYWwtY2xvc2VcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybV9fcG9zdC10eXBlXCIgbmFtZT1cInBvc3RcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yb3dcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwX19mcm9udC1jb3ZlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbnQtY292ZXJfX2xhYmVsXCI+RnJvbnQgQ292ZXI8L2Rpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0X19mcm9udC1jb3ZlclwiIGNsYXNzPVwiZnJvbnQtY292ZXJfX2J0bi11cGxvYWRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaW1hZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcm9udC1jb3Zlcl9fYnRuLWNsZWFyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZyb250LWNvdmVyX19jb3Zlci1wcmV2aWV3XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiQ292ZXIgUHJldmlld1wiIGNsYXNzPVwiZnJvbnQtY292ZXItcHJldmlld19faW1hZ2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcm9udC1jb3Zlci1wcmV2aWV3X190ZXh0XCI+UHJldmlldyBJbWFnZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2lucHV0IGlucHV0X19mcm9udC1jb3ZlclwiIGlkPVwiaW5wdXRfX2Zyb250LWNvdmVyXCIgbmFtZT1cInBvc3RbZnJvbnRfY292ZXJdXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1maWVsZF9fZXJyb3ItbXNnXCIgaWQ9XCJlcnJvci1maWVsZF9fZnJvbnRfY292ZXJcIj48L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX3Jvd1wiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBfX2hlYWRlci1jb3ZlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvdmVyX19sYWJlbFwiPkhlYWRlciBDb3ZlcjwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRfX2hlYWRlci1jb3ZlclwiIGNsYXNzPVwiaGVhZGVyLWNvdmVyX19idG4tdXBsb2FkXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWltYWdlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvdmVyX19idG4tY2xlYXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvdmVyX19jb3Zlci1wcmV2aWV3XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiQ292ZXIgUHJldmlld1wiIGNsYXNzPVwiaGVhZGVyLWNvdmVyLXByZXZpZXdfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWNvdmVyLXByZXZpZXdfX3RleHRcIj5QcmV2aWV3IEltYWdlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnB1dC1ncm91cF9faW5wdXQgaW5wdXRfX2hlYWRlci1jb3ZlclwiIGlkPVwiaW5wdXRfX2hlYWRlci1jb3ZlclwiIG5hbWU9XCJwb3N0W2hlYWRlcl9jb3Zlcl1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWZpZWxkX19lcnJvci1tc2dcIiBpZD1cImVycm9yLWZpZWxkX19oZWFkZXJfY292ZXJcIj48L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX3Jvd1wiPiBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwX190YWdzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzX19jcmVhdGVcIj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5wdXRfX3RhZ1wiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzX19zZWxlY3RlZFwiIG5hbWU9XCJwb3N0W3RhZ3NdXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1maWVsZF9fZXJyb3ItbXNnXCIgaWQ9XCJlcnJvci1maWVsZF9fdGFnc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+IFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZvbGRlclwiPkZvbGRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dF9fZm9sZGVyXCIgaWQ9XCJpbnB1dF9fZm9sZGVyXCIgbmFtZT1cInBvc3RbZm9sZGVyXVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItZmllbGRfX2Vycm9yLW1zZ1wiIGlkPVwiZXJyb3ItZmllbGRfX2ZvbGRlclwiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+IFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LWdyb3VwX19pbnB1dCBpbnB1dF9fdGl0bGVcIiBuYW1lPVwicG9zdFt0aXRsZV1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWZpZWxkX19lcnJvci1tc2dcIiBpZD1cImVycm9yLWZpZWxkX190aXRsZVwiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fcm93XCI+IFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJvZHlcIj5UZXh0PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJwb3N0W2JvZHldXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgY2xhc3M9XCJpbnB1dC1ncm91cF9faW5wdXQgaW5wdXRfX3RleHRcIiBpZD1cImlucHV0X190ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWZpZWxkX19lcnJvci1tc2dcIiBpZD1cImVycm9yLWZpZWxkX19ib2R5XCI+PC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInBvc3RbX3Rva2VuXVwiIHZhbHVlPVwiXCIgY2xhc3M9XCJpbnB1dF9fY3NyZlwiPlxyXG4gICA8L2Zvcm0+XHJcblxyXG4gICA8L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj4gICAgIFxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19tb2RhbC1zdWJtaXRcIj5FZGl0IFBvc3Q8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbW9kYWwtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgIDwvZGl2PlxyXG4gICA8L2Rpdj5gO1xyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgc2VsZi5yZW5kZXJNb2RhbCgpO1xyXG4gICAgICBzZWxmLmFkZEV2KCk7XHJcbiAgICAgIHNlbGYucHJldmlld0Zyb250Q292ZXIoKTtcclxuICAgICAgc2VsZi5wcmV2aWV3SGVhZGVyQ292ZXIoKTtcclxuICAgICAgc2VsZi5wb3N0X2RhdGEgPSBhd2FpdCBzZWxmLmdldFBvc3QoKTtcclxuICAgICAgc2VsZi5hZGRWYWx1ZXMoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCgpO1xyXG4gICByZXR1cm4gc2VsZjtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4uLy4uL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2VMaXN0KG9wdGlvbnMpIHtcclxuICAgdGhpcy5yZW5kZXJNb2RhbCA9ICgpID0+IHtcclxuICAgICAgbGV0IHRpdGxlID0gdGhpcy5kYXRhX3RhcmdldCA9PT0gXCJsaWtlc1wiID8gXCJMaWtlXCIgOiBcIkRpc2xpa2VcIjtcclxuICAgICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbF9fd2luZG93ICR7dGhpcy5zdHlsZV9jbGFzc30nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0X19tb2RhbC1oZWFkZXJcIj4ke3RpdGxlfSAoJHt0aGlzLmRhdGEubGVuZ3RofSk8L2g1PlxyXG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyBidG5fX21vZGFsLWNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19ib2R5XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmlkKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgdmFyIGVsZW0gPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5saXN0ID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19ib2R5XCIpO1xyXG4gICAgICB0aGlzLmJveCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fd2luZG93XCIpO1xyXG5cclxuICAgICAgaHRtbCA9IGBgO1xyXG5cclxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHByb2ZpbGUpID0+IHtcclxuICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faXRlbVwiPiBcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Byb2ZpbGUuYXZhdGFyfVwiIGNsYXNzPVwiaXRlbV9faW1nXCIvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtSb3V0aW5nLmdlbmVyYXRlKFwicHJvZmlsZV9wYWdlXCIsIHsgcHJvZmlsZTogcHJvZmlsZS5pZCB9KX1cIiBjbGFzcz1cIml0ZW1fX25hbWVcIj5cclxuICAgICAgICAgICAgICAgPHNwYW4+JHtwcm9maWxlLmZpcnN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPiR7cHJvZmlsZS5sYXN0bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIGA7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNQUlOIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTU9EQUwgT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5X2JnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSVRFTSBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5pdGVtX292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheSA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuaXRlbV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuaXRlbV9vdmVybGF5X2JnO1xyXG4gICAgICAgICAvLyB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjk5OVwiO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnByZXBhcmVGZXRjaCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5pZCA9IGhlbHBlcnNcclxuICAgICAgICAgLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmF0dHIuY2xhc3NuYW1lKVxyXG4gICAgICAgICAuZ2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0ci5hdHRyKTtcclxuICAgICAgdGhpcy5mZXRjaF9ib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHRoaXMuZmV0Y2hfYm9keS5hcHBlbmQoXCJpZFwiLCB0aGlzLmlkKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9taXNlID0gZmV0Y2goUm91dGluZy5nZW5lcmF0ZShvcHRpb25zLnVybCksIHtcclxuICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgYm9keTogdGhpcy5mZXRjaF9ib2R5LFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCB8fCB0eXBlb2Ygb3ZlcmxheSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkpIHRoaXMuc2Vjb25kYXJ5X292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgIGlmICh0aGlzLml0ZW1fb3ZlcmxheSkgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmFkZEV2ID0gKCkgPT4ge1xyXG4gICAgICBsZXQgYnRuX2Nsb3NlID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5idG5fX21vZGFsLWNsb3NlXCIpO1xyXG4gICAgICBidG5fY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGlkZU1vZGFsKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5wcmVwYXJlRmV0Y2goKTtcclxuICAgICAgdGhpcy5yZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKG9wdGlvbnMudGFyZ2V0KTtcclxuICAgICAgdGhpcy5kYXRhX3RhcmdldCA9IG9wdGlvbnMudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvdW50ZXJfX2xpa2VzXCIpID8gXCJsaWtlc1wiIDogXCJkaXNsaWtlc1wiO1xyXG5cclxuICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhX3RhcmdldCA9PT0gXCJsaWtlc1wiID8gdGhpcy5yZXNwb25zZS5saWtlc19mcm9tIDogdGhpcy5yZXNwb25zZS5kaXNsaWtlc19mcm9tO1xyXG4gICAgICB0aGlzLnN0eWxlX2NsYXNzID0gb3B0aW9ucy5zdHlsZV9jbGFzcztcclxuICAgICAgdGhpcy5jYiA9IG9wdGlvbnMuY2I7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlck1vZGFsKCk7XHJcbiAgICAgIHRoaXMuYWRkRXYoKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCgpO1xyXG4gICByZXR1cm4gdGhpcztcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi8uLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhZ2dlZFBvc3Qob3B0aW9ucykge1xyXG4gICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgIHNlbGYucmVuZGVyTW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5pZCk7XHJcbiAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuaHRtbCgpO1xyXG5cclxuICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUgPSBudWxsO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBzZWxmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNQUlOIE9WRVJMQVlcclxuICAgICAgICovXHJcbiAgICAgIGlmIChvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTU9EQUwgT1ZFUkxBWVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kYXJ5X292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5zZWNvbmRhcnlfb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICB0aGlzLnNlY29uZGFyeV9vdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBvcHRpb25zLnNlY29uZGFyeV9vdmVybGF5X2JnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSVRFTSBPVkVSTEFZXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAob3B0aW9ucy5pdGVtX292ZXJsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheSA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUob3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuaXRlbV9vdmVybGF5KTtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgdGhpcy5pdGVtX292ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuaXRlbV9vdmVybGF5X2JnO1xyXG4gICAgICAgICB0aGlzLml0ZW1fb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjk5OVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvcHRpb25zLnJlbmRlcnNvcnQoKTtcclxuICAgICAgc2VsZi5kYXRhID0gYXdhaXQgb3B0aW9ucy5yZW5kZXJwYWdpbmF0ZWQoKTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuYWRkRXYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBidG5fY2xvc2UgPSBzZWxmLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fbW9kYWwtY2xvc2VcIik7XHJcbiAgICAgIGJ0bl9jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi5oaWRlTW9kYWwpO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5oaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gICAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCB8fCB0eXBlb2Ygb3ZlcmxheSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgIHNlbGYuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaHRtbCA9ICgpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgIDxkaXYgY2xhc3M9J292ZXJsYXknPjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPSdtb2RhbF9fd2luZG93ICR7b3B0aW9ucy5zdHlsZV9jbGFzc30nPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdvdmVybGF5X19tb2RhbC1pdGVtJyBpZD1cIiR7b3B0aW9ucy5tb2RhbF9vdmVybGF5fVwiPjwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgPGg1IGNsYXNzPVwidGV4dF9fbW9kYWwtaGVhZGVyXCI+PC9oNT5cclxuICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgYnRuX19tb2RhbC1jbG9zZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2JvZHlcIj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X19jb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X19zb3J0XCIgaWQ9XCJzb3J0X190YWdcIj48L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fcG9zdHNcIiBpZD1cImNvbnRlbnRfX3RhZ1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+ICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3BhZ2luYXRvclwiIGlkPVwidGFnX19wYWdpbmF0b3JcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIGA7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICB9O1xyXG5cclxuICAgc2VsZi5zZXRIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgIHNlbGYuaGVhZGVyID0gc2VsZi5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50ZXh0X19tb2RhbC1oZWFkZXJcIik7XHJcbiAgICAgIHNlbGYuaGVhZGVyLmlubmVySFRNTCA9IGBQb3N0cyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodF9fdGFnXCI+IyR7c2VsZi5kYXRhLnBhZ2luYXRpb25fZGF0YS50YWcubmFtZX08L3NwYW4+YDtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYuaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgc2VsZi5yZW5kZXJNb2RhbCgpO1xyXG4gICAgICBzZWxmLmFkZEV2KCk7XHJcbiAgICAgIHNlbGYuc2V0SGVhZGVyKCk7XHJcbiAgIH07XHJcblxyXG4gICBzZWxmLmluaXQoKTtcclxuICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuIiwiY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG4vKipcclxuICogcGFnaW5hdGlvbl9zZXR0aW5nc1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY29udGFpbmVyX2lkIOKAkyBwYWdpbmF0aW9uIHJlbmRlciBjb250YWluZXJcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhZ2Ug4oCTIGRlZmF1bHQgXCIxXCJcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNvcnQg4oCTIGRlZmF1bHQgXCJjcmVhdGVkXCJcclxuICogQHByb3BlcnR5IHtvYmplY3R9IHJvdXRlIOKAkyByb3V0ZS5uYW1lIGlzIHN0cmluZyBmb3IgZmV0Y2ggVVJMLFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5kYXRhIGlzIG9iamVjdCB3aXRoIG1hbmRhdG9yeSBkYXRhIHJlcXVpcmVkIGJ5IGJhY2tlbmRcclxuICogQG1ldGhvZCB7ZnVuY3Rpb259IGNhbGxiYWNrIOKAkyByZXR1cm4gcGFnaW5hdGVkIG9iamVjdHMgZGF0YVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBhZGRQYWdpbmF0aW9uIGZ1bmN0aW9uIHJlbmRlcnMgcGFnaW5hdGlvbiBhbmQgcmV0dXJucyBwcm9taXNlIG9iamVjdCB3aXRoIHJlc3BvbnNlLm1haW5fZGF0YVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENyZWF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbl9zZXR0aW5ncykge1xyXG4gICB0aGlzLnJvdXRlID0gcGFnaW5hdGlvbl9zZXR0aW5ncy5yb3V0ZTtcclxuICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdpbmF0aW9uX3NldHRpbmdzLmNvbnRhaW5lcl9pZCk7XHJcbiAgIHRoaXMuY2IgPSBwYWdpbmF0aW9uX3NldHRpbmdzLmNiO1xyXG4gICB0aGlzLnByb2ZpbGVfaWQgPSBwYWdpbmF0aW9uX3NldHRpbmdzLnByb2ZpbGVfaWQ7XHJcblxyXG4gICB0aGlzLmluaXQgPSBhc3luYyAocGFnaW5hdGlvbl9zZXR0aW5ncykgPT4ge1xyXG4gICAgICB0aGlzLnBhZ2UgPSBwYWdpbmF0aW9uX3NldHRpbmdzLnBhZ2U7XHJcbiAgICAgIHRoaXMuc29ydF9tZXRob2QgPSBwYWdpbmF0aW9uX3NldHRpbmdzLnNvcnRfbWV0aG9kO1xyXG4gICAgICB0aGlzLmZvbGRlcl9pZCA9IHBhZ2luYXRpb25fc2V0dGluZ3MuZm9sZGVyX2lkO1xyXG4gICAgICB0aGlzLnRhZ19pZCA9IHBhZ2luYXRpb25fc2V0dGluZ3MudGFnX2lkO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnBhZ2UpIHJldHVybiBmYWxzZTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMucmVzcG9uc2VfZGF0YSA9IGF3YWl0IHRoaXMuZ2V0UGFnZURhdGEoKTtcclxuICAgICAgICAgdGhpcy5wYWdpbmF0aW9uX2RhdGEgPSB0aGlzLnJlc3BvbnNlX2RhdGEucGFnaW5hdGlvbl9kYXRhO1xyXG4gICAgICAgICB0aGlzLm1haW5fZGF0YSA9IHRoaXMucmVzcG9uc2VfZGF0YS5tYWluX2RhdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFBhZ2VDb3VudCgpID09IDApIHtcclxuICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgIGlmICh0aGlzLmNiKSB0aGlzLmFkZENvbnRlbnQodGhpcy5jYik7XHJcblxyXG4gICAgICAgICByZXR1cm4geyBhdXRoX2RhdGE6IHRoaXMucmVzcG9uc2VfZGF0YS5hdXRoX2RhdGEgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgIHRoaXMuZGlzcGxheURvdHMoKTtcclxuICAgICAgICAgdGhpcy5hZGRFdigpO1xyXG4gICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgaWYgKHRoaXMuY2IpIHRoaXMuYWRkQ29udGVudCh0aGlzLmNiKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VfZGF0YTtcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5nZXRQYWdlRGF0YSA9ICgpID0+IHtcclxuICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZGF0YS5hcHBlbmQoXCJwYWdlXCIsIHRoaXMucGFnZSk7XHJcbiAgICAgIGRhdGEuYXBwZW5kKFwicHJvZmlsZV9pZFwiLCB0aGlzLnByb2ZpbGVfaWQpO1xyXG4gICAgICBkYXRhLmFwcGVuZChcImZvbGRlcl9pZFwiLCB0aGlzLmZvbGRlcl9pZCk7XHJcbiAgICAgIGRhdGEuYXBwZW5kKFwidGFnX2lkXCIsIHRoaXMudGFnX2lkKTtcclxuICAgICAgZGF0YS5hcHBlbmQoXCJzb3J0X21ldGhvZFwiLCB0aGlzLnNvcnRfbWV0aG9kKTtcclxuICAgICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUodGhpcy5yb3V0ZSk7XHJcblxyXG4gICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVuZGVyUGFnaW5hdGlvbiA9ICgpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3hfcGFnaW5hdGlvblwiPiAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uX3BhbmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbl9pdGVtIHBhZ2luYXRpb25fY29udHJvbFwiIGlkPVwiYnV0dG9uX3ByZXZcIj5QcmV2PC9zcGFuPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uX3BhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2luYXRpb25faXRlbSBwYWdlX251bWJlclwiPjE8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb25faXRlbSBwYWdpbmF0aW9uX2NvbnRyb2xcIiBpZD1cImJ1dHRvbl9uZXh0XCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICBgO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgbGV0IHBhZ2luYXRpb25fcGFnZXMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBhZ2luYXRpb25fcGFnZXNcIik7XHJcbiAgICAgIGxldCBwYWdlX251bWJlciA9IFwiXCI7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIC0gMSA8IHRoaXMuZ2V0UGFnZUNvdW50KCk7IGkrKykge1xyXG4gICAgICAgICBwYWdlX251bWJlciArPSBgPGxpIGNsYXNzPVwicGFnaW5hdGlvbl9pdGVtIHBhZ2VfbnVtYmVyXCI+JHtpfTwvbGk+YDtcclxuICAgICAgfVxyXG4gICAgICBwYWdpbmF0aW9uX3BhZ2VzLmlubmVySFRNTCA9IHBhZ2VfbnVtYmVyO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5nZXRQYWdlQ291bnQgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5wYWdpbmF0aW9uX2RhdGEudG90YWxDb3VudCAvIHRoaXMucGFnaW5hdGlvbl9kYXRhLm51bUl0ZW1zUGVyUGFnZSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmhpZGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldFBhZ2VDb3VudCgpIDw9IDEpIHtcclxuICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYm94X3BhZ2luYXRpb25cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ib3hfcGFnaW5hdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5kaXNwbGF5RG90cyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJldkJ1dHRvbiA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uX3ByZXZcIik7XHJcbiAgICAgIGNvbnN0IG5leHRCdXR0b24gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbl9uZXh0XCIpO1xyXG4gICAgICB2YXIgcGFnZV9udW1iZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2VfbnVtYmVyXCIpO1xyXG5cclxuICAgICAgcGFnZV9udW1iZXJbdGhpcy5wYWdpbmF0aW9uX2RhdGEuY3VycmVudFBhZ2VOdW1iZXIgLSAxXS5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGlvbl9kaXNwbGF5XCIsIFwiYWN0aXZlXCIpO1xyXG4gICAgICBwYWdlX251bWJlclswXS5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGlvbl9kaXNwbGF5XCIpO1xyXG4gICAgICBoZWxwZXJzLmxhc3QocGFnZV9udW1iZXIpLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX2Rpc3BsYXlcIik7XHJcblxyXG4gICAgICBpZiAocGFnZV9udW1iZXJbdGhpcy5wYWdpbmF0aW9uX2RhdGEuY3VycmVudFBhZ2VOdW1iZXIgLSAxXSAhPSBwYWdlX251bWJlclswXSkge1xyXG4gICAgICAgICBwcmV2QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX2Rpc3BsYXlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gMV0gIT0gaGVscGVycy5sYXN0KHBhZ2VfbnVtYmVyKSkge1xyXG4gICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX2Rpc3BsYXlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgIGlmIChwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIGldKSB7XHJcbiAgICAgICAgICAgIHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyIC0gaV0uY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fZGlzcGxheVwiKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyICsgaSAtIDFdKSB7XHJcbiAgICAgICAgICAgIHBhZ2VfbnVtYmVyW3RoaXMucGFnaW5hdGlvbl9kYXRhLmN1cnJlbnRQYWdlTnVtYmVyICsgaSAtIDFdLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX2Rpc3BsYXlcIik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmIChpID09IDMpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICBwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIGkgLSAxXSAmJlxyXG4gICAgICAgICAgICAgICBwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIGkgLSAxXSAhPSBwYWdlX251bWJlclswXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgcGFnZV9udW1iZXJbdGhpcy5wYWdpbmF0aW9uX2RhdGEuY3VycmVudFBhZ2VOdW1iZXIgLSBpIC0gMV0uY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fZG90c1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICBwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIDEgKyBpXSAmJlxyXG4gICAgICAgICAgICAgICBwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIDEgKyBpXSAhPSBoZWxwZXJzLmxhc3QocGFnZV9udW1iZXIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICBwYWdlX251bWJlclt0aGlzLnBhZ2luYXRpb25fZGF0YS5jdXJyZW50UGFnZU51bWJlciAtIDEgKyBpXS5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGlvbl9kb3RzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5wYWdpbmF0aW9uQ29udHJvbCA9IChldmVudCkgPT4ge1xyXG4gICAgICBsZXQgcGFnZV9udW1iZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2VfbnVtYmVyXCIpO1xyXG4gICAgICB2YXIgY3VycmVudFBhZ2VOdW1iZXIgPSBwYWdpbmF0aW9uX3NldHRpbmdzLmdldFBhZ2UoKTtcclxuXHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZV9udW1iZXJcIikpIHtcclxuICAgICAgICAgY3VycmVudFBhZ2VOdW1iZXIgPSBwYXJzZUludChldmVudC50YXJnZXQuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb25fc2V0dGluZ3Muc2V0UGFnZShjdXJyZW50UGFnZU51bWJlcik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09IFwiYnV0dG9uX3ByZXZcIiAmJiBjdXJyZW50UGFnZU51bWJlciA+IDEpIHtcclxuICAgICAgICAgY3VycmVudFBhZ2VOdW1iZXItLTtcclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb25fc2V0dGluZ3Muc2V0UGFnZShjdXJyZW50UGFnZU51bWJlcik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09IFwiYnV0dG9uX25leHRcIiAmJiBjdXJyZW50UGFnZU51bWJlciA8IHBhZ2VfbnVtYmVyLmxlbmd0aCkge1xyXG4gICAgICAgICBjdXJyZW50UGFnZU51bWJlcisrO1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbl9zZXR0aW5ncy5zZXRQYWdlKGN1cnJlbnRQYWdlTnVtYmVyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3X3BhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgIHBhZ2U6IHBhZ2luYXRpb25fc2V0dGluZ3MuZ2V0UGFnZSgpLFxyXG4gICAgICAgICBmb2xkZXJfaWQ6IHBhZ2luYXRpb25fc2V0dGluZ3MuZ2V0Rm9sZGVyKCksXHJcbiAgICAgICAgIHRhZ19pZDogcGFnaW5hdGlvbl9zZXR0aW5ncy5nZXRUYWcoKSxcclxuICAgICAgICAgc29ydF9tZXRob2Q6IHBhZ2luYXRpb25fc2V0dGluZ3MuZ2V0U29ydE1ldGhvZCgpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5pbml0KG5ld19wYWdpbmF0aW9uKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkQ29udGVudCA9IGZ1bmN0aW9uIChjYikge1xyXG4gICAgICBpZiAodGhpcy5jYikgY2IodGhpcy5yZXNwb25zZV9kYXRhKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBwYWdpbmF0aW9uX2l0ZW0gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2luYXRpb25faXRlbVwiKTtcclxuICAgICAgcGFnaW5hdGlvbl9pdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5wYWdpbmF0aW9uQ29udHJvbCk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgcmV0dXJuIHRoaXMuaW5pdChwYWdpbmF0aW9uX3NldHRpbmdzKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFnKG5hbWUpIHtcclxuICAgbGV0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIHRhZy5jbGFzc0xpc3QuYWRkKFwidGFnXCIpO1xyXG5cclxuICAgbGV0IGhtdGwgPSBgXHJcbiAgIDxzcGFuIGNsYXNzPVwidGFnX19uYW1lXCI+JHtuYW1lfTwvc3Bhbj5cclxuICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgdGFnX19yZW1vdmVcIj48L2k+XHJcbiAgIGA7XHJcblxyXG4gICB0YWcuaW5uZXJIVE1MID0gaG10bDtcclxuICAgdGFnLnF1ZXJ5U2VsZWN0b3IoXCIudGFnX19yZW1vdmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHJlbW92ZVRhZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gdGFnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFnKHRhZykge1xyXG4gICBsZXQgdGFnc19zZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFnc19fc2VsZWN0ZWRcIik7XHJcbiAgIHRhZ3Nfc2VsZWN0ZWQuYXBwZW5kQ2hpbGQodGFnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhZyh0YWcpIHtcclxuICAgbGV0IHRhZ3Nfc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhZ3NfX3NlbGVjdGVkXCIpO1xyXG4gICB0YWdzX3NlbGVjdGVkLnJlbW92ZUNoaWxkKHRhZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWdzKCkge1xyXG4gICBsZXQgdGFnc19zZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFnc19fc2VsZWN0ZWRcIik7XHJcbiAgIGxldCB0YWdzID0gdGFnc19zZWxlY3RlZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhZ1wiKTtcclxuXHJcbiAgIGxldCBuYW1lcyA9IFtdO1xyXG4gICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICBsZXQgdGFnX25hbWUgPSB0YWcucXVlcnlTZWxlY3RvcihcIi50YWdfX25hbWVcIikuaW5uZXJIVE1MO1xyXG4gICAgICBuYW1lcy5wdXNoKHRhZ19uYW1lKTtcclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gbmFtZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYWdzKG9wdGlvbnMpIHtcclxuICAgdGhpcy50YWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnRhZyk7XHJcblxyXG4gICB0aGlzLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgIGhlbHBlcnMudGhyb3R0bGUoKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib2R5X19uYW1lXCIpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgIH0pO1xyXG5cclxuICAgdGhpcy5yZW1vdmVDbGFzcyA9ICgpID0+IHtcclxuICAgICAgdGhpcy50YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICBpZiAodGFnID09IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGhpcy50YXJnZXQsIFwiYm94X190YWdcIikpIHJldHVybjtcclxuICAgICAgICAgZWxzZSB0YWcuY2xhc3NMaXN0LnJlbW92ZShcInRhZ19fYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICAgIGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGhpcy50YXJnZXQsIFwiYm94X190YWdcIikuY2xhc3NMaXN0LnRvZ2dsZShcInRhZ19fYWN0aXZlXCIpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5nZXRDdXJyZW50VGFnID0gKCkgPT4ge1xyXG4gICAgICBsZXQgY3VycmVudF90YWcgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0LCBcImJveF9fdGFnXCIpLmdldEF0dHJpYnV0ZShcInRhZ1wiKTtcclxuICAgICAgcmV0dXJuIGN1cnJlbnRfdGFnO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5zZXRUYWcgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzX3RhZyA9PSB0aGlzLmN1cnJlbnRfdGFnKSB7XHJcbiAgICAgICAgIHRoaXMudGFnID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy50YWcgPSB0aGlzLmN1cnJlbnRfdGFnO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudF90YWcgPSB0aGlzLmdldEN1cnJlbnRUYWcoKTtcclxuICAgICAgdGhpcy5wcmV2aW91c190YWcgPSBvcHRpb25zLmdldFRhZygpO1xyXG4gICAgICB0aGlzLnNldFRhZygpO1xyXG5cclxuICAgICAgb3B0aW9ucy5zZXRUYWcodGhpcy50YWcpO1xyXG5cclxuICAgICAgdGhpcy5yZW1vdmVDbGFzcygpO1xyXG4gICAgICB0aGlzLmFkZENsYXNzKCk7XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYih0aGlzLnRhZywgdGhpcy5uYW1lKTtcclxuICAgfTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9sZGVyKGZvbGRlciwgZm9sZGVyX2FjdGl2ZSwgdXNlcikge1xyXG4gICBsZXQgYm94X19mb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICBib3hfX2ZvbGRlci5jbGFzc0xpc3QuYWRkKFwiYm94X19mb2xkZXJcIik7XHJcbiAgIGJveF9fZm9sZGVyLnNldEF0dHJpYnV0ZShcImZvbGRlclwiLCBmb2xkZXIuZm9sZGVyX2lkKTtcclxuXHJcbiAgIGxldCBodG1sID0gYFxyXG4gICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9fZm9sZGVyXCI+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bl9fZm9sZGVyXCIgaWQ9XCJkcm9wZG93bl9fZm9sZGVyLSR7Zm9sZGVyLmZvbGRlcl9pZH1cIj48L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cImZvbGRlcl9faXRlbVwiPiBcclxuICAgICAgPGRpdiBjbGFzcz1cImZvbGRlcl9fbGVmdC1zdHJpcFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9sZGVyX19jb250ZW50XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJmb2xkZXJfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy1oIGRyb3Bkb3duX190cmlnZ2VyIGZvbGRlcl9faWNvblwiIGlkPVwiZHJvcGRvd25fX2ZvbGRlci10cmlnZ2VyLSR7XHJcbiAgICAgICAgICAgICAgIGZvbGRlci5mb2xkZXJfaWRcclxuICAgICAgICAgICAgfVwiPjwvaT4gICBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb2xkZXJfX2JvZHlcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlfX25hbWVcIj4ke2ZvbGRlci5uYW1lfTwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fY3JlYXRlZC1hdFwiPiR7aGVscGVycy50aW1lQWdvKGZvbGRlci5jcmVhdGVkX2F0KX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgPC9kaXY+XHJcbiAgIGA7XHJcblxyXG4gICBib3hfX2ZvbGRlci5pbm5lckhUTUwgPSBodG1sO1xyXG4gICBsZXQgZm9sZGVyX19pdGVtID0gYm94X19mb2xkZXIucXVlcnlTZWxlY3RvcihcIi5mb2xkZXJfX2l0ZW1cIik7XHJcblxyXG4gICBsZXQgZGQgPSBib3hfX2ZvbGRlci5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duX19mb2xkZXJcIik7XHJcbiAgIGxldCBpY29uID0gYm94X19mb2xkZXIucXVlcnlTZWxlY3RvcihcIi5mb2xkZXJfX2ljb25cIik7XHJcbiAgIGlmIChmb2xkZXIuYXV0aG9yLmlkICE9PSB1c2VyLmlkKSB7XHJcbiAgICAgIGljb24ucmVtb3ZlKCk7XHJcbiAgICAgIGRkLnJlbW92ZSgpO1xyXG4gICB9XHJcblxyXG4gICBsZXQgYWN0aXZlID0gZm9sZGVyLmZvbGRlcl9pZCA9PSBmb2xkZXJfYWN0aXZlID8gXCJmb2xkZXJfX2FjdGl2ZVwiIDogbnVsbDtcclxuICAgaWYgKGFjdGl2ZSkgZm9sZGVyX19pdGVtLmNsYXNzTGlzdC5hZGQoYWN0aXZlKTtcclxuXHJcbiAgIHJldHVybiBib3hfX2ZvbGRlcjtcclxufVxyXG5cclxuLyogPGRpdiBjbGFzcz1cImRyb3Bkb3duX19mb2xkZXJcIiBpZD1cImRyb3Bkb3duX19mb2xkZXItJHtmb2xkZXIuZm9sZGVyX2lkfVwiPjwvZGl2PiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvbGRlcihlbGVtZW50KSB7XHJcbiAgIGxldCBmb2xkZXJzX19mb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19mb2xkZXJzXCIpO1xyXG4gICBmb2xkZXJzX19mb2xkZXJzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGVsZW1lbnQpIHtcclxuICAgbGV0IGZvbGRlcnNfX2ZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRfX2ZvbGRlcnNcIik7XHJcbiAgIGZvbGRlcnNfX2ZvbGRlcnMucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRGb2xkZXJzKG9wdGlvbnMpIHtcclxuICAgbGV0IGZvbGRlcl9hY3RpdmUgPSBvcHRpb25zLmdldEZvbGRlcigpO1xyXG4gICBsZXQgZm9sZGVyc19fZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudF9fZm9sZGVyc1wiKTtcclxuICAgbGV0IHVzZXIgPSBvcHRpb25zLmdldFVzZXIoKTtcclxuXHJcbiAgIGZvbGRlcnNfX2ZvbGRlcnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgb3B0aW9ucy5kYXRhLmZvckVhY2goKGZvbGRlcikgPT4ge1xyXG4gICAgICBhZGRGb2xkZXIoZ2V0Rm9sZGVyKGZvbGRlciwgZm9sZGVyX2FjdGl2ZSwgdXNlcikpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VGb2xkZXIoZWxlbWVudCkge1xyXG4gICBsZXQgZm9sZGVyc19fZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudF9fZm9sZGVyc1wiKTtcclxuICAgZm9sZGVyc19fZm9sZGVycy5yZXBsYWNlV2l0aChlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vQ29udGVudChjb250YWluZXIsIHRleHQpIHtcclxuICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50X19uby1jb250ZW50XCIpO1xyXG4gICBsZXQgaHRtbCA9IGBcclxuICAgPGRpdiBjbGFzcz1cInRleHRfX25vLWNvbnRlbnRcIj4ke3RleHR9PC9kaXY+XHJcbiAgIGA7XHJcbiAgIGVsZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgbGV0IGNvbnRlbnRfX2ZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRfX2ZvbGRlcnNcIik7XHJcbiAgIGNvbnRlbnRfX2ZvbGRlcnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgY29udGVudF9fZm9sZGVycy5hcHBlbmRDaGlsZChlbGVtKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3QoZGF0YSwgb3B0aW9ucykge1xyXG4gICBsZXQgaHRtbCA9IGBcclxuICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlfX3Bvc3RcIj48L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duX19wb3N0XCIgaWQ9XCIke29wdGlvbnMuZHJvcGRvd25fY29udGFpbmVyX2lkfS0ke2RhdGEuaWR9XCI+PC9kaXY+XHJcbiAgIDxkaXYgY2xhc3M9XCJwb3N0LWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RfX2hlYWRlclwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19zdHJpcFwiPjwvZGl2PlxyXG4gICAgICAgICA8aW1nIHNyYz1cIiR7XHJcbiAgICAgICAgICAgIGRhdGEuZnJvbnRfY292ZXJfbGluayA/IGRhdGEuZnJvbnRfY292ZXJfbGluayA6IFwiL3VwbG9hZHMvZGVmYXVsdHMvbm9pbWFnZS5qcGdcIlxyXG4gICAgICAgICB9XCIgYWx0PVwiXCIgY2xhc3M9XCJoZWFkZXJfX2ltZ1wiPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0X19ib2R5XCI+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fcm93XCI+XHJcbiAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLWggZHJvcGRvd25fX3RyaWdnZXIgcG9zdF9faWNvblwiIGlkPVwiJHtvcHRpb25zLmRyb3Bkb3duX3RyaWdnZXJfaWR9LSR7ZGF0YS5pZH1cIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImJvZHlfX3Jvd1wiPlxyXG4gICAgICAgICA8YSBocmVmPVwiJHtSb3V0aW5nLmdlbmVyYXRlKFwicmVhZF9wb3N0XCIsIHtcclxuICAgICAgICAgICAgcHJvZmlsZTogZGF0YS5hdXRob3IuaWQsXHJcbiAgICAgICAgICAgIHBvc3Q6IGRhdGEuaWQsXHJcbiAgICAgICAgIH0pfVwiIGNsYXNzPVwiYm9keV9fdGl0bGVcIj4ke2RhdGEudGl0bGV9PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib2R5X19yb3dcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInJvd19fY29sdW1uXCI+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlfX2NyZWF0ZWQtYXRcIj4ke2hlbHBlcnMudGltZUFnbyhkYXRhLmNyZWF0ZWRfYXQpfTwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInJvd19fY29sdW1uXCI+ICAgXHJcbiAgICAgICAgICAgIDxzcGFuPmJ5PC9zcGFuPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImJvZHlfX2F1dGhvclwiIGhyZWY9XCIke1JvdXRpbmcuZ2VuZXJhdGUoXCJwcm9maWxlX3BhZ2VcIiwgeyBwcm9maWxlOiBkYXRhLmF1dGhvci5pZCB9KX1cIj4ke1xyXG4gICAgICBkYXRhLmF1dGhvci5maXJzdG5hbWVcclxuICAgfTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlfX3Jvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keV9fdGFnc1wiPjwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0X19mb290ZXJcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fY291bnRlclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS10aHVtYnMtdXAgdG9vZ2xlX2xpa2VzXCIgc3RhdGU9XCIke2RhdGEuc3RhdGV9XCI+PC9pPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRyaWdnZXJfX21vZGFsIGNvdW50ZXJfX2xpa2VzXCI+KCR7ZGF0YS5saWtlc30pPC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fY291bnRlclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS10aHVtYnMtZG93biB0b29nbGVfbGlrZXNcIiBzdGF0ZT1cIiR7ZGF0YS5zdGF0ZX1cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJpZ2dlcl9fbW9kYWwgY291bnRlcl9fZGlzbGlrZXNcIj4oJHtkYXRhLmRpc2xpa2VzfSk8L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19jb3VudGVyIGNvbW1lbnRzX19jb3VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNvbW1lbnRcIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJpZ2dlcl9fY29tbWVudHMtbW9kYWxcIj4oJHtkYXRhLmNvbW1lbnRzfSk8L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgIGA7XHJcblxyXG4gICBjb25zdCBib3hfcG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIGJveF9wb3N0LmNsYXNzTGlzdC5hZGQoXCJib3hfX3Bvc3RcIik7XHJcbiAgIGJveF9wb3N0LnNldEF0dHJpYnV0ZShcInBvc3RcIiwgZGF0YS5pZCk7XHJcbiAgIGJveF9wb3N0LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICBjb25zdCBib3hfdGFncyA9IGJveF9wb3N0LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keV9fdGFnc1wiKTtcclxuXHJcbiAgIGFkZFBvc3RUYWdzKGJveF90YWdzLCBkYXRhLnRhZ3MpO1xyXG4gICBhZGRBdHRyaWJ1dGVzKGJveF9wb3N0LCBkYXRhKTtcclxuXHJcbiAgIGxldCB1c2VyID0gb3B0aW9ucy5nZXRVc2VyKCk7XHJcbiAgIGxldCBkZCA9IGJveF9wb3N0LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX3Bvc3RcIik7XHJcbiAgIGxldCBpY29uID0gYm94X3Bvc3QucXVlcnlTZWxlY3RvcihcIi5wb3N0X19pY29uXCIpO1xyXG5cclxuICAgaWYgKGRhdGEuYXV0aG9yLmlkICE9PSB1c2VyLmlkKSB7XHJcbiAgICAgIGljb24ucmVtb3ZlKCk7XHJcbiAgICAgIGRkLnJlbW92ZSgpO1xyXG4gICB9XHJcblxyXG4gICByZXR1cm4gYm94X3Bvc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQb3N0KHBvc3QsIGNvbnRhaW5lcikge1xyXG4gICBsZXQgcG9zdHNfX3Bvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xyXG4gICBwb3N0c19fcG9zdHMuYXBwZW5kQ2hpbGQocG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQb3N0cyhvcHRpb25zKSB7XHJcbiAgIGxldCBwb3N0c19fcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKTtcclxuICAgcG9zdHNfX3Bvc3RzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgIG9wdGlvbnMuZGF0YS5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgIGFkZFBvc3QoZ2V0UG9zdChwb3N0LCBvcHRpb25zKSwgb3B0aW9ucy5jb250YWluZXIpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvc3RUYWdzKGNvbnRhaW5lciwgdGFncykge1xyXG4gICB0YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUG9zdFRhZyh0YWcpKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQb3N0VGFnKHRhZykge1xyXG4gICBsZXQgdGFnX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgdGFnX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFnXCIsIHRhZy5pZCk7XHJcbiAgIHRhZ19lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWdzX190YWdcIik7XHJcbiAgIHRhZ19lbGVtZW50LmlubmVySFRNTCA9IGAjJHt0YWcubmFtZX1gO1xyXG4gICByZXR1cm4gdGFnX2VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuUG9zdChyZXMpIHtcclxuICAgbGV0IGJveF9fcG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIGJveF9fcG9zdC5jbGFzc0xpc3QuYWRkKFwiYm94X19wb3N0XCIpO1xyXG4gICBib3hfX3Bvc3Quc2V0QXR0cmlidXRlKFwicG9zdFwiLCByZXMuaWQpO1xyXG5cclxuICAgbGV0IGh0bWwgPSBgXHJcbiAgIDxkaXYgY2xhc3M9XCJwb3N0X190aXRsZVwiPiR7cmVzLnRpdGxlfTwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwicG9zdF9fY3JlYXRlZC1hdFwiPiR7aGVscGVycy50aW1lQWdvKHJlcy5jcmVhdGVkX2F0KX08L2Rpdj5cclxuICAgPGRpdiBjbGFzcz1cInBvc3RfX2JvZHlcIj4ke3Jlcy5ib2R5fTwvZGl2PlxyXG4gICBgO1xyXG5cclxuICAgYm94X19wb3N0LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICByZXR1cm4gYm94X19wb3N0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZURPTShlbGVtZW50KSB7XHJcbiAgIGxldCBib3hfcHJvZmlsZV9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hfX3Byb2ZpbGUtY29udGVudFwiKTtcclxuICAgYm94X3Byb2ZpbGVfY29udGVudC5yZXBsYWNlV2l0aChlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZXMoY29udGFpbmVyLCBkYXRhKSB7XHJcbiAgIGxldCBsaWtlX2ljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5mYS10aHVtYnMtdXBcIik7XHJcbiAgIGxldCBkaXNsaWtlX2ljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5mYS10aHVtYnMtZG93blwiKTtcclxuICAgaWYgKGRhdGEuc3RhdGUgPT0gXCJuZXV0cmFsXCIpIHtcclxuICAgICAgbGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwibmV1dHJhbFwiKTtcclxuICAgICAgZGlzbGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwibmV1dHJhbFwiKTtcclxuICAgfSBlbHNlIGlmIChkYXRhLnN0YXRlID09IFwibGlrZWRcIikge1xyXG4gICAgICBsaWtlX2ljb24uY2xhc3NMaXN0LmFkZChcInN0YXRlX19hY3RpdmVcIik7XHJcbiAgICAgIGxpa2VfaWNvbi5zZXRBdHRyaWJ1dGUoXCJzdGF0ZVwiLCBcImxpa2VkXCIpO1xyXG5cclxuICAgICAgZGlzbGlrZV9pY29uLmNsYXNzTGlzdC5hZGQoXCJzdGF0ZV9fZGlzYWJsZWRcIik7XHJcbiAgICAgIGRpc2xpa2VfaWNvbi5zZXRBdHRyaWJ1dGUoXCJzdGF0ZVwiLCBcImxpa2VkXCIpO1xyXG4gICB9IGVsc2UgaWYgKGRhdGEuc3RhdGUgPT0gXCJkaXNsaWtlZFwiKSB7XHJcbiAgICAgIGRpc2xpa2VfaWNvbi5jbGFzc0xpc3QuYWRkKFwic3RhdGVfX2FjdGl2ZVwiKTtcclxuICAgICAgZGlzbGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwiZGlzbGlrZWRcIik7XHJcblxyXG4gICAgICBsaWtlX2ljb24uY2xhc3NMaXN0LmFkZChcInN0YXRlX19kaXNhYmxlZFwiKTtcclxuICAgICAgbGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwiZGlzbGlrZWRcIik7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vQ29udGVudChjb250YWluZXIsIHRleHQpIHtcclxuICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50X19uby1jb250ZW50XCIpO1xyXG4gICBsZXQgaHRtbCA9IGBcclxuICAgPGRpdiBjbGFzcz1cInRleHRfX25vLWNvbnRlbnRcIj4ke3RleHR9PC9kaXY+XHJcbiAgIGA7XHJcbiAgIGVsZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgbGV0IGNvbnRlbnRfX3Bvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xyXG4gICBjb250ZW50X19wb3N0cy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICBjb250ZW50X19wb3N0cy5hcHBlbmRDaGlsZChlbGVtKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBET00gZnJvbSBcIi4vZWRpdERPTS9fZm9sZGVyXCI7XHJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgKiBhcyBhY2NvcmRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcclxuXHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb2xkZXIoZm9sZGVyX25hbWUsIHByb2ZpbGVfaWQpIHtcclxuLy8gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuLy8gICAgZGF0YS5hcHBlbmQoXCJmb2xkZXJfbmFtZVwiLCBmb2xkZXJfbmFtZSk7XHJcbi8vICAgIGRhdGEuYXBwZW5kKFwicHJvZmlsZV9pZFwiLCBwcm9maWxlX2lkKTtcclxuLy8gICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJjcmVhdGVfZm9sZGVyXCIpO1xyXG4vLyAgICBsZXQgcHJvbWlzZSA9IGZldGNoKHVybCwge1xyXG4vLyAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgICBib2R5OiBkYXRhLFxyXG4vLyAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuLy8gICAgfSk7XHJcbi8vICAgIHJldHVybiBwcm9taXNlO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKHRhcmdldCkge1xyXG4gICBsZXQgZm9sZGVyX2lkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0YXJnZXQsIFwiYm94X19mb2xkZXJcIikuZ2V0QXR0cmlidXRlKFwiZm9sZGVyXCIpO1xyXG4gICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICBkYXRhLmFwcGVuZChcImZvbGRlcl9pZFwiLCBmb2xkZXJfaWQpO1xyXG4gICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcImRlbGV0ZV9mb2xkZXJcIik7XHJcbiAgIGxldCBwcm9taXNlID0gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgfSxcclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZUZvbGRlcih0YXJnZXQsIGZvbGRlcl9uYW1lKSB7XHJcbiAgIGxldCBmb2xkZXJfaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRhcmdldCwgXCJib3hfX2ZvbGRlclwiKS5nZXRBdHRyaWJ1dGUoXCJmb2xkZXJcIik7XHJcbiAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgIGRhdGEuYXBwZW5kKFwiZm9sZGVyX2lkXCIsIGZvbGRlcl9pZCk7XHJcbiAgIGRhdGEuYXBwZW5kKFwiZm9sZGVyX25hbWVcIiwgZm9sZGVyX25hbWUpO1xyXG4gICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcInJlbmFtZV9mb2xkZXJcIik7XHJcbiAgIGxldCBwcm9taXNlID0gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgfSxcclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbGRlcnNOYW1lcygpIHtcclxuICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJnZXRfZm9sZGVyc1wiKTtcclxuICAgbGV0IHByb21pc2UgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgIH0sXHJcbiAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgbGV0IGZvbGRlcnMgPSBbXTtcclxuICAgICAgICAgcmVzLmZvckVhY2goKGZvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBmb2xkZXJzLnB1c2goW2ZvbGRlci5uYW1lLCBmb2xkZXIuZm9sZGVyX2lkXSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICByZXR1cm4gZm9sZGVycztcclxuICAgICAgfSk7XHJcbiAgIHJldHVybiBwcm9taXNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRm9sZGVycyhvcHRpb25zKSB7XHJcbiAgIHRoaXMuZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5mb2xkZXIpO1xyXG5cclxuICAgdGhpcy5mb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xyXG4gICAgICBmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgICBoZWxwZXJzLnRocm90dGxlKChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keV9fbmFtZVwiKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICB9KTtcclxuXHJcbiAgIHRoaXMucmVtb3ZlQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcclxuICAgICAgICAgaWYgKGZvbGRlciA9PSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0LCBcImZvbGRlcl9faXRlbVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICBlbHNlIGZvbGRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZm9sZGVyX19hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRDbGFzcyA9ICgpID0+IHtcclxuICAgICAgaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJmb2xkZXJfX2l0ZW1cIikuY2xhc3NMaXN0LnRvZ2dsZShcImZvbGRlcl9fYWN0aXZlXCIpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5nZXRDdXJyZW50Rm9sZGVyID0gKCkgPT4ge1xyXG4gICAgICBsZXQgY3VycmVudF9mb2xkZXIgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0LCBcImJveF9fZm9sZGVyXCIpLmdldEF0dHJpYnV0ZShcImZvbGRlclwiKTtcclxuICAgICAgcmV0dXJuIGN1cnJlbnRfZm9sZGVyO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5zZXRGb2xkZXIgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzX2ZvbGRlciA9PSB0aGlzLmN1cnJlbnRfZm9sZGVyKSB7XHJcbiAgICAgICAgIHRoaXMuZm9sZGVyID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5mb2xkZXIgPSB0aGlzLmN1cnJlbnRfZm9sZGVyO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudF9mb2xkZXIgPSB0aGlzLmdldEN1cnJlbnRGb2xkZXIoKTtcclxuICAgICAgdGhpcy5wcmV2aW91c19mb2xkZXIgPSBvcHRpb25zLmdldEZvbGRlcigpO1xyXG4gICAgICB0aGlzLnNldEZvbGRlcigpO1xyXG5cclxuICAgICAgb3B0aW9ucy5zZXRGb2xkZXIodGhpcy5mb2xkZXIpO1xyXG5cclxuICAgICAgdGhpcy5yZW1vdmVDbGFzcygpO1xyXG4gICAgICB0aGlzLmFkZENsYXNzKCk7XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYih0aGlzLmZvbGRlciwgdGhpcy5uYW1lKTtcclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZvbGRlcnNMaXN0KG9wdGlvbnMpIHtcclxuICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9fZm9sZGVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2l0ZW1zXCIpO1xyXG4gICBpdGVtcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgb3B0aW9ucy5kYXRhLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgbGV0IGRkX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkZF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bl9faXRlbVwiKTtcclxuICAgICAgbGV0IGRkX2l0ZW1fYXR0ciA9IG9wdGlvbnMuYXR0ciA/IG9wdGlvbnMuYXR0ciA6IG51bGw7XHJcbiAgICAgIGlmIChkZF9pdGVtX2F0dHIgJiYgZWxlbVsxXSkgZGRfaXRlbS5zZXRBdHRyaWJ1dGUob3B0aW9ucy5hdHRyLCBlbGVtWzFdKTtcclxuICAgICAgZGRfaXRlbS5zZXRBdHRyaWJ1dGUoXCJvbm1vdXNlZG93blwiLCBcInZhciBzZWxmPWdldGRkdih0aGlzKTtzZWxmLmNsaWNrZWQodGhpcylcIik7XHJcblxyXG4gICAgICBkZF9pdGVtLmlubmVySFRNTCA9IGVsZW1bMF07XHJcbiAgICAgIGl0ZW1zLnByZXBlbmQoZGRfaXRlbSk7XHJcbiAgIH0pO1xyXG5cclxuICAgaWYgKG9wdGlvbnMuYm90dG9tX2l0ZW0pIHtcclxuICAgICAgbGV0IGRkX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkZF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bl9faXRlbVwiLCBcIml0ZW1fX2JvdHRvbVwiKTtcclxuICAgICAgZGRfaXRlbS5zZXRBdHRyaWJ1dGUoXCJvbm1vdXNlZG93blwiLCBcInZhciBzZWxmPWdldGRkdih0aGlzKTtzZWxmLmNsaWNrZWQodGhpcylcIik7XHJcblxyXG4gICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1cy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7b3B0aW9ucy5ib3R0b21faXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgIGRkX2l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoZGRfaXRlbSk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyB0YWdzIGZyb20gXCIuL2NvbXBvbmVudHMvdGFnc1wiO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL2hlbHBlcnNcIjtcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcblxyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcbmNvbnN0IGF1dG9Db21wbGV0ZSA9IHJlcXVpcmUoXCJAdGFyZWtyYWFmYXQvYXV0b2NvbXBsZXRlLmpzL2Rpc3QvanMvYXV0b0NvbXBsZXRlXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckF1dG9Db21wbGV0ZSgpIHtcclxuICAgbmV3IGF1dG9Db21wbGV0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAgc3JjOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKFwiZmluZF90YWdzXCIsIHsgcXVlcnk6IHF1ZXJ5IH0pKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNvdXJjZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS50YWdzO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBrZXk6IFtcIm5hbWVcIl0sXHJcbiAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgcGxhY2VIb2xkZXI6IFwiRW50ZXIgVGFnXCIsXHJcbiAgICAgIHNlbGVjdG9yOiBcIiNpbnB1dF9fdGFnXCIsXHJcbiAgICAgIHRocmVzaG9sZDogMSxcclxuICAgICAgZGVib3VuY2U6IDMwMCxcclxuICAgICAgLy8gc2VhcmNoRW5naW5lOiBcInN0cmljdFwiLFxyXG4gICAgICByZXN1bHRzTGlzdDoge1xyXG4gICAgICAgICByZW5kZXI6IHRydWUsXHJcbiAgICAgICAgIGNvbnRhaW5lcjogKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YWdzX19tYXRjaFwiKTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZGVzdGluYXRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfX3RhZ1wiKSxcclxuICAgICAgICAgcG9zaXRpb246IFwiYWZ0ZXJlbmRcIixcclxuICAgICAgICAgZWxlbWVudDogXCJkaXZcIixcclxuICAgICAgfSxcclxuICAgICAgLy8gaGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICByZXN1bHRJdGVtOiB7XHJcbiAgICAgICAgIGNvbnRlbnQ6IChkYXRhLCBzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgc291cmNlLmlubmVySFRNTCA9IGRhdGEubWF0Y2g7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGVsZW1lbnQ6IFwiZGl2XCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBub1Jlc3VsdHM6ICgpID0+IHtcclxuICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICBzcGFuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPmA7XHJcbiAgICAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vX3Jlc3VsdFwiKTtcclxuICAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMVwiKTtcclxuICAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IFwiQ3JlYXRlIG5ldyB0YWcgXCI7XHJcbiAgICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdzX19tYXRjaFwiKS5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG5cclxuICAgICAgICAgcmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRfX3RhZ1wiKS52YWx1ZTtcclxuICAgICAgICAgICAgdGFncy5hZGRUYWcodGFncy5jcmVhdGVUYWcodmFsdWUpKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWdzX19tYXRjaFwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25TZWxlY3Rpb246IChmZWVkYmFjaykgPT4ge1xyXG4gICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyhmZWVkYmFjay5zZWxlY3Rpb24ubWF0Y2gpKTtcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgfSxcclxuICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hCYXIob3B0aW9ucykge1xyXG4gICB0aGlzLmluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3QoKTtcclxuICAgICAgdGhpcy5hZGRFdigpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5zcmMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gYXdhaXQgZmV0Y2goUm91dGluZy5nZW5lcmF0ZShcImJyb3dzZVwiLCB7IHF1ZXJ5OiB0aGlzLnF1ZXJ5IH0pKTtcclxuICAgICAgdGhpcy5kYXRhID0gYXdhaXQgdGhpcy5zb3VyY2UuanNvbigpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZXN1bHRQb3N0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc3VsdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHRoaXMuZGF0YS5wb3N0c19kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgbGV0IHRhZ3MgPSBcIlwiO1xyXG4gICAgICAgICBpdGVtLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHRhZ3MgKz0gYFxyXG4gICAgICAgICAgICA8c3Bhbj4jJHt0aGlzLmhpZ2hsaWdodCh0YWcubmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5mcm9udF9jb3Zlcl9saW5rfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19jb2xcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19yb3dcIj4ke3RoaXMuaGlnaGxpZ2h0KGl0ZW0udGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXY+JHt0YWdzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzdWwtaXRlbV9fdHlwZVwiPlBvc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgIGxldCByZXN1bHRfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJib3hfX3Jlc3VsdC1pdGVtXCIpO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICB0aGlzLnJlc3VsdHNMaXN0LmFwcGVuZENoaWxkKHJlc3VsdF9pdGVtKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdChcInJlYWRfcG9zdFwiLCBpdGVtLmlkLCBpdGVtLmF1dGhvci5pZCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnJlc3VsdEF1dGhvciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5kYXRhLnByb2ZpbGVzX2RhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19jb2xcIj5cclxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uYXZhdGFyfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19jb2xcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19yb3dcIj4ke3RoaXMuaGlnaGxpZ2h0KGl0ZW0uZmlyc3RuYW1lKX0gJHt0aGlzLmhpZ2hsaWdodChpdGVtLmxhc3RuYW1lKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXN1bC1pdGVtX19uaWNrbmFtZVwiPiR7YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGl0ZW0ubmlja25hbWUpID8gXCJAXCIgKyB0aGlzLmhpZ2hsaWdodChpdGVtLm5pY2tuYW1lKSA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfWB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3VsLWl0ZW1fX3R5cGVcIj5BdXRob3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgYDtcclxuICAgICAgICAgbGV0IHJlc3VsdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uY2xhc3NMaXN0LmFkZChcImJveF9fcmVzdWx0LWl0ZW1cIik7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuYXBwZW5kQ2hpbGQocmVzdWx0X2l0ZW0pO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KFwicHJvZmlsZV9wYWdlXCIsIG51bGwsIGl0ZW0uaWQpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5ub1Jlc3VsdHMgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICA8aW1nIGNsYXNzPVwiaW1nX19ub3QtZm91bmRcIiBzcmM9XCIvaW1nL2RlZmF1bHRzL25vdF9mb3VuZC5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fcm93IHJlc3VsdC1pdGVtX19uby1yZXN1bHRzXCI+Tm8gcmVzdWx0cyBmb3VuZCE8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19yb3dcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIGA7XHJcbiAgICAgIGxldCByZXN1bHRfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHJlc3VsdF9pdGVtLmNsYXNzTGlzdC5hZGQoXCJib3hfX3Jlc3VsdC1pdGVtXCIpO1xyXG4gICAgICByZXN1bHRfaXRlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLnJlc3VsdHNMaXN0LmFwcGVuZENoaWxkKHJlc3VsdF9pdGVtKTtcclxuICAgICAgcmVzdWx0X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgdGhpcy50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICB0aGlzLnJlc3VsdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5oaWdobGlnaHQgPSAoc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICghc3RyaW5nKSByZXR1cm47XHJcbiAgICAgIGlmIChzdHJpbmcudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgIGxldCBzdGFydCA9IHN0cmluZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5xdWVyeSk7XHJcbiAgICAgICAgIGxldCBlbmQgPSBzdGFydCArIHRoaXMucXVlcnkubGVuZ3RoO1xyXG4gICAgICAgICBsZXQgc3Vic3RyID0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG5cclxuICAgICAgICAgbGV0IGhpZ2hsaWdodGVkID0gc3RyaW5nXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSwgYDxzcGFuIGNsYXNzPVwidGV4dF9faGlnaGxpZ2h0XCI+JHtzdWJzdHJ9PC9zcGFuPmApO1xyXG4gICAgICAgICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVzdWx0c0xpc3QgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0aGlzLnJlc3VsdHNMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIG9wdGlvbnMucmVzdWx0c0xpc3QpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJlc3VsdHNMaXN0KTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuYWRkRXYgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5zZWFyY2hfaW5wdXQpLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgIFwiaW5wdXRcIixcclxuICAgICAgICAgaGVscGVycy50aHJvdHRsZUxhc3QoYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdWVyeS5sZW5ndGggPj0gb3B0aW9ucy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zcmMoKTtcclxuXHJcbiAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucG9zdHNfZGF0YS5sZW5ndGggPD0gMCAmJiB0aGlzLmRhdGEucHJvZmlsZXNfZGF0YS5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm5vUmVzdWx0cygpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdFBvc3QoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRBdXRob3IoKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpKVxyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9LCBvcHRpb25zLnRocm90dGxlKVxyXG4gICAgICApO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5zZXRQb3NpdGlvbiA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgdGhpcy5sb2NhdGlvbiA9IGhlbHBlcnMuZ2V0UG9zaXRpb25zKHRhcmdldCk7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3Quc3R5bGUudG9wID0gdGhpcy5sb2NhdGlvbi50b3AgKyA2MyArIFwicHhcIjtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVkaXJlY3QgPSAobG9jLCBwb3N0ID0gbnVsbCwgYXV0aG9yID0gbnVsbCkgPT4ge1xyXG4gICAgICBpZiAobG9jID09IFwicHJvZmlsZV9wYWdlXCIpIHtcclxuICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBSb3V0aW5nLmdlbmVyYXRlKGxvYywgeyBwcm9maWxlOiBhdXRob3IgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUm91dGluZy5nZW5lcmF0ZShsb2MsIHsgcHJvZmlsZTogYXV0aG9yLCBwb3N0OiBwb3N0IH0pO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmluaXQoKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcbiAgIHZhciB0aW1lb3V0O1xyXG4gICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgb2JqID0gdGhpcyxcclxuICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcclxuXHJcbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XHJcbiAgICAgIH07XHJcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkob2JqLCBhcmdzKTtcclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGUoZGF0ZSwgcHJlZm9tYXR0ZWREYXRlID0gZmFsc2UsIGhpZGVZZWFyID0gZmFsc2UpIHtcclxuICAgY29uc3QgTU9OVEhfTkFNRVMgPSBbXHJcbiAgICAgIFwiSmFudWFyeVwiLFxyXG4gICAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICAgIFwiTWFyY2hcIixcclxuICAgICAgXCJBcHJpbFwiLFxyXG4gICAgICBcIk1heVwiLFxyXG4gICAgICBcIkp1bmVcIixcclxuICAgICAgXCJKdWx5XCIsXHJcbiAgICAgIFwiQXVndXN0XCIsXHJcbiAgICAgIFwiU2VwdGVtYmVyXCIsXHJcbiAgICAgIFwiT2N0b2JlclwiLFxyXG4gICAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICAgIFwiRGVjZW1iZXJcIixcclxuICAgXTtcclxuICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgIGNvbnN0IG1vbnRoID0gTU9OVEhfTkFNRVNbZGF0ZS5nZXRNb250aCgpXTtcclxuICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcblxyXG4gICBpZiAobWludXRlcyA8IDEwKSB7XHJcbiAgICAgIC8vIEFkZGluZyBsZWFkaW5nIHplcm8gdG8gbWludXRlc1xyXG4gICAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcclxuICAgfVxyXG5cclxuICAgaWYgKHByZWZvbWF0dGVkRGF0ZSkge1xyXG4gICAgICAvLyBUb2RheSBhdCAxMDoyMFxyXG4gICAgICAvLyBZZXN0ZXJkYXkgYXQgMTA6MjBcclxuICAgICAgcmV0dXJuIGAke3ByZWZvbWF0dGVkRGF0ZX0gYXQgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChoaWRlWWVhcikge1xyXG4gICAgICAvLyAxMC4gSmFudWFyeSBhdCAxMDoyMFxyXG4gICAgICByZXR1cm4gYCR7ZGF5fSAke21vbnRofSBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgfVxyXG5cclxuICAgLy8gMTAuIEphbnVhcnkgMjAxNy4gYXQgMTA6MjBcclxuICAgcmV0dXJuIGAke2RheX0gJHttb250aH0gJHt5ZWFyfS4gYXQgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbn1cclxuXHJcbi8vIC0tLSBNYWluIGZ1bmN0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lQWdvKGRhdGVQYXJhbSkge1xyXG4gICBpZiAoIWRhdGVQYXJhbSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgfVxyXG5cclxuICAgY29uc3QgZGF0ZSA9IHR5cGVvZiBkYXRlUGFyYW0gPT09IFwib2JqZWN0XCIgPyBkYXRlUGFyYW0gOiBuZXcgRGF0ZShkYXRlUGFyYW0pO1xyXG4gICBjb25zdCBEQVlfSU5fTVMgPSA4NjQwMDAwMDsgLy8gMjQgKiA2MCAqIDYwICogMTAwMFxyXG4gICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKHRvZGF5IC0gREFZX0lOX01TKTtcclxuICAgY29uc3Qgc2Vjb25kcyA9IE1hdGgucm91bmQoKHRvZGF5IC0gZGF0ZSkgLyAxMDAwKTtcclxuICAgY29uc3QgbWludXRlcyA9IE1hdGgucm91bmQoc2Vjb25kcyAvIDYwKTtcclxuICAgY29uc3QgaXNUb2RheSA9IHRvZGF5LnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpO1xyXG4gICBjb25zdCBpc1llc3RlcmRheSA9IHllc3RlcmRheS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKTtcclxuICAgY29uc3QgaXNUaGlzWWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgIGlmIChzZWNvbmRzIDwgNSkge1xyXG4gICAgICByZXR1cm4gXCJub3dcIjtcclxuICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcclxuICAgICAgcmV0dXJuIGAke3NlY29uZHN9IHNlY29uZHMgYWdvYDtcclxuICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgOTApIHtcclxuICAgICAgcmV0dXJuIFwiYWJvdXQgYSBtaW51dGUgYWdvXCI7XHJcbiAgIH0gZWxzZSBpZiAobWludXRlcyA8IDYwKSB7XHJcbiAgICAgIHJldHVybiBgJHttaW51dGVzfSBtaW51dGVzIGFnb2A7XHJcbiAgIH0gZWxzZSBpZiAoaXNUb2RheSkge1xyXG4gICAgICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlLCBcIlRvZGF5XCIpOyAvLyBUb2RheSBhdCAxMDoyMFxyXG4gICB9IGVsc2UgaWYgKGlzWWVzdGVyZGF5KSB7XHJcbiAgICAgIHJldHVybiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUsIFwiWWVzdGVyZGF5XCIpOyAvLyBZZXN0ZXJkYXkgYXQgMTA6MjBcclxuICAgfSBlbHNlIGlmIChpc1RoaXNZZWFyKSB7XHJcbiAgICAgIHJldHVybiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUsIGZhbHNlLCB0cnVlKTsgLy8gMTAuIEphbnVhcnkgYXQgMTA6MjBcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIGdldEZvcm1hdHRlZERhdGUoZGF0ZSk7IC8vIDEwLiBKYW51YXJ5IDIwMTcuIGF0IDEwOjIwXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShlbGVtZW50LCBjbGFzc25hbWUpIHtcclxuICAgLy8gbG9vayBmb3IgZGlyZWN0IHBhcmVudFxyXG4gICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NuYW1lKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgLy8gaWYgbm8gZGlyZWN0IHBhcmVudCBmb3VuZCBsb29rIGJ5IGNsYXNzbmFtZVxyXG4gICB9IGVsc2UgaWYgKCFlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NuYW1lKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzbmFtZSlbMF07XHJcbiAgICAgIC8vaWYgZWxlbWVudCBoYXZlIG5vIHBhcmVudCB0aHJvdyBlcnJvclxyXG4gICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAvLyB0aHJvdyBgZXJyb3IgZnJvbSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lOiB3aGVyZSB3YXMgYW4gZXJyb3IgaW4gZmluZGluZyB0YXJnZXQgZWxlbWVudCDigJMgJHtjbGFzc25hbWV9YDtcclxuICAgfVxyXG4gICByZXR1cm4gZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBjbGFzc25hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0ck9yTnVsbChjbGFzc2xpc3QsIGF0dHIpIHtcclxuICAgdmFyIGN1cnJlbnRfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzbGlzdC5zaGlmdCgpfWApO1xyXG5cclxuICAgY2xhc3NsaXN0LmZvckVhY2goKGNsYXNzbmFtZSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudF9lbGVtZW50KSB7XHJcbiAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGN1cnJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc25hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcblxyXG4gICBpZiAoY3VycmVudF9lbGVtZW50KSB7XHJcbiAgICAgIHZhciBhdHRyaWJ1dGUgPSBjdXJyZW50X2VsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xyXG4gICB9XHJcblxyXG4gICB2YXIgcmV0dXJuX3ZhbHVlID0gYXR0cmlidXRlID8gYXR0cmlidXRlIDogbnVsbDtcclxuICAgcmV0dXJuIHJldHVybl92YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJPckZhbHNlKGNsYXNzbGlzdCwgbmFtZSwgYXR0cikge1xyXG4gICB2YXIgY3VycmVudF9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NsaXN0LnNoaWZ0KCl9YCk7XHJcblxyXG4gICBjbGFzc2xpc3QuZm9yRWFjaCgoY2xhc3NuYW1lKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50X2VsZW1lbnQpIHtcclxuICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzbmFtZX1gKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxuXHJcbiAgIGlmIChjdXJyZW50X2VsZW1lbnQpIHtcclxuICAgICAgY3VycmVudF9lbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyKTtcclxuICAgfVxyXG5cclxuICAgdmFyIHJldHVybl92YWx1ZSA9IGN1cnJlbnRfZWxlbWVudCA/IHRydWUgOiBmYWxzZTtcclxuICAgcmV0dXJuIHJldHVybl92YWx1ZTtcclxufVxyXG5cclxuLy8gbGFzdCBlbGVtZW50IGluIGFycmF5XHJcbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7XHJcbiAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuLy9yZXR1cm4gYWJzb2x1dGUgcG9zaXRpb24gb2YgZWxlbWVudFxyXG5leHBvcnQgdmFyIGdldFBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgdmFyIHRvcCA9IDAsXHJcbiAgICAgIGxlZnQgPSAwO1xyXG4gICBkbyB7XHJcbiAgICAgIHRvcCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xyXG4gICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xyXG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XHJcbiAgIH0gd2hpbGUgKGVsZW1lbnQpO1xyXG5cclxuICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiB0b3AsXHJcbiAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgIHZhciB0b3AgPSAwLFxyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgdmFyIHJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0O1xyXG4gICBkbyB7XHJcbiAgICAgIHRvcCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xyXG4gICAgICBsZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xyXG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XHJcbiAgIH0gd2hpbGUgKGVsZW1lbnQpO1xyXG5cclxuICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiB0b3AsXHJcbiAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgIHJpZ2h0OiByaWdodCxcclxuICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChvYmplY3QsIHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgIGlmIChvYmplY3QgPT0gbnVsbCB8fCB0eXBlb2Ygb2JqZWN0ID09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcclxuICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgIH0gZWxzZSBpZiAob2JqZWN0LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgIG9iamVjdC5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBjYWxsYmFjayk7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdFtcIm9uXCIgKyB0eXBlXSA9IGNhbGxiYWNrO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xyXG4gICBsZXQgaW5UaHJvdHRsZTtcclxuICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgIGlmICghaW5UaHJvdHRsZSkge1xyXG4gICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICBpblRocm90dGxlID0gdHJ1ZTtcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAoaW5UaHJvdHRsZSA9IGZhbHNlKSwgbGltaXQpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUxhc3QoZnVuYywgbGltaXQpIHtcclxuICAgbGV0IGxhc3RGdW5jO1xyXG4gICBsZXQgbGFzdFJhbjtcclxuICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgIGlmICghbGFzdFJhbikge1xyXG4gICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcclxuICAgICAgICAgbGFzdEZ1bmMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBsYXN0UmFuID49IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XHJcbiAgICAgIH1cclxuICAgfTtcclxufVxyXG5cclxuLy8gKiogRkFERSBPVVQgRlVOQ1RJT04gKipcclxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVPdXQoZWwpIHtcclxuICAgZWwuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgIChmdW5jdGlvbiBmYWRlKCkge1xyXG4gICAgICBpZiAoKGVsLnN0eWxlLm9wYWNpdHkgLT0gMC4xKSA8IDApIHtcclxuICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgIH1cclxuICAgfSkoKTtcclxufVxyXG5cclxuLy8gKiogRkFERSBJTiBGVU5DVElPTiAqKlxyXG5leHBvcnQgZnVuY3Rpb24gZmFkZUluKGVsLCBkaXNwbGF5KSB7XHJcbiAgIGVsLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICBlbC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSB8fCBcImJsb2NrXCI7XHJcbiAgIChmdW5jdGlvbiBmYWRlKCkge1xyXG4gICAgICB2YXIgdmFsID0gcGFyc2VGbG9hdChlbC5zdHlsZS5vcGFjaXR5KTtcclxuICAgICAgaWYgKCEoKHZhbCArPSAwLjEpID4gMSkpIHtcclxuICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IHZhbDtcclxuICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG4gICAgICB9XHJcbiAgIH0pKCk7XHJcbn1cclxuIiwiY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTGlrZXMoKSB7XHJcbiAgIGxldCB0b2dnbGVfbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvb2dsZV9saWtlc1wiKTtcclxuICAgdG9nZ2xlX2xpa2VzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICBuZXcgVXBkYXRlTGlrZXMoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgaWQ6IHsgaWQ6IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUoZXZlbnQudGFyZ2V0LCBcImJveF9fcG9zdFwiKS5nZXRBdHRyaWJ1dGUoXCJwb3N0XCIpIH0sXHJcbiAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICBsaWtlOiBcInBvc3RfbGlrZVwiLFxyXG4gICAgICAgICAgICAgICBkaXNsaWtlOiBcInBvc3RfZGlzbGlrZVwiLFxyXG4gICAgICAgICAgICAgICB1bmxpa2U6IFwicG9zdF91bmxpa2VcIixcclxuICAgICAgICAgICAgICAgdW5kaXNsaWtlOiBcInBvc3RfdW5kaXNsaWtlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGVMaWtlcyA9IGhlbHBlcnMudGhyb3R0bGUoZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICB0aGlzLmluaXQgPSBhc3luYyAodGFyZ2V0KSA9PiB7XHJcbiAgICAgIHRoaXMucHJlcGFyZUZldGNoKHRhcmdldCk7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5sb2dnZWQpIHtcclxuICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoUm91dGluZy5nZW5lcmF0ZShcImxvZ2luXCIpKTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlrZXNfY291bnRlciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRlcl9fbGlrZXNcIik7XHJcbiAgICAgIHRoaXMubGlrZXNfY291bnRlci5pbm5lckhUTUwgPSBgKCR7dGhpcy5kYXRhLmxpa2VzfSlgO1xyXG4gICAgICB0aGlzLmRpc2xpa2VzX2NvdW50ZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJfX2Rpc2xpa2VzXCIpO1xyXG4gICAgICB0aGlzLmRpc2xpa2VzX2NvdW50ZXIuaW5uZXJIVE1MID0gYCgke3RoaXMuZGF0YS5kaXNsaWtlc30pYDtcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlSWNvbigpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmxpa2VfaWNvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzdGF0ZVwiKTtcclxuICAgICAgdGhpcy5kaXNsaWtlX2ljb24ucmVtb3ZlQXR0cmlidXRlKFwic3RhdGVcIik7XHJcblxyXG4gICAgICB0aGlzLmxpa2VfaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic3RhdGVfX2Rpc2FibGVkXCIpO1xyXG4gICAgICB0aGlzLmxpa2VfaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic3RhdGVfX2FjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHRoaXMuZGlzbGlrZV9pY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0ZV9fZGlzYWJsZWRcIik7XHJcbiAgICAgIHRoaXMuZGlzbGlrZV9pY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGF0ZV9fYWN0aXZlXCIpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy50b2dnbGVJY29uID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmxpa2VfaWNvbiA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdGh1bWJzLXVwXCIpO1xyXG4gICAgICB0aGlzLmRpc2xpa2VfaWNvbiA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdGh1bWJzLWRvd25cIik7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuc3RhdGUgPT0gXCJuZXV0cmFsXCIpIHtcclxuICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgIHRoaXMubGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwibmV1dHJhbFwiKTtcclxuICAgICAgICAgdGhpcy5kaXNsaWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJuZXV0cmFsXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5zdGF0ZSA9PSBcImxpa2VkXCIpIHtcclxuICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgIHRoaXMubGlrZV9pY29uLmNsYXNzTGlzdC5hZGQoXCJzdGF0ZV9fYWN0aXZlXCIpO1xyXG4gICAgICAgICB0aGlzLmxpa2VfaWNvbi5zZXRBdHRyaWJ1dGUoXCJzdGF0ZVwiLCBcImxpa2VkXCIpO1xyXG5cclxuICAgICAgICAgdGhpcy5kaXNsaWtlX2ljb24uY2xhc3NMaXN0LmFkZChcInN0YXRlX19kaXNhYmxlZFwiKTtcclxuICAgICAgICAgdGhpcy5kaXNsaWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJsaWtlZFwiKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuc3RhdGUgPT0gXCJkaXNsaWtlZFwiKSB7XHJcbiAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlcygpO1xyXG4gICAgICAgICB0aGlzLmRpc2xpa2VfaWNvbi5jbGFzc0xpc3QuYWRkKFwic3RhdGVfX2FjdGl2ZVwiKTtcclxuICAgICAgICAgdGhpcy5kaXNsaWtlX2ljb24uc2V0QXR0cmlidXRlKFwic3RhdGVcIiwgXCJkaXNsaWtlZFwiKTtcclxuXHJcbiAgICAgICAgIHRoaXMubGlrZV9pY29uLmNsYXNzTGlzdC5hZGQoXCJzdGF0ZV9fZGlzYWJsZWRcIik7XHJcbiAgICAgICAgIHRoaXMubGlrZV9pY29uLnNldEF0dHJpYnV0ZShcInN0YXRlXCIsIFwiZGlzbGlrZWRcIik7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMucHJlcGFyZUZldGNoID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInN0YXRlXCIpO1xyXG4gICAgICB0aGlzLmJ0bl90eXBlID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZhLXRodW1icy11cFwiKSA/IFwibGlrZVwiIDogXCJkaXNsaWtlXCI7XHJcblxyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PSBcIm5ldXRyYWxcIikge1xyXG4gICAgICAgICBpZiAodGhpcy5idG5fdHlwZSA9PSBcImxpa2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IFJvdXRpbmcuZ2VuZXJhdGUob3B0aW9ucy51cmwubGlrZSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShvcHRpb25zLnVybC5kaXNsaWtlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gXCJsaWtlZFwiKSB7XHJcbiAgICAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShvcHRpb25zLnVybC51bmxpa2UpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gXCJkaXNsaWtlZFwiKSB7XHJcbiAgICAgICAgIHRoaXMudXJsID0gUm91dGluZy5nZW5lcmF0ZShvcHRpb25zLnVybC51bmRpc2xpa2UpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvbWlzZSA9IGZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaWQpLFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5pbml0KG9wdGlvbnMudGFyZ2V0KTtcclxufSwgMzAwKTtcclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBwYWdpbmF0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBsaWtlcyBmcm9tIFwiLi9saWtlc1wiO1xyXG5pbXBvcnQgKiBhcyBwb3N0IGZyb20gXCIuL3Bvc3RfY29udHJvbGxlclwiO1xyXG5pbXBvcnQgKiBhcyBwb3N0RE9NIGZyb20gXCIuL2VkaXRET00vX3Bvc3RcIjtcclxuaW1wb3J0ICogYXMgcmVzcG9uc2VMaXN0TW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbHMvX3Jlc3BvbnNlX2xpc3RcIjtcclxuaW1wb3J0ICogYXMgY29tbWVudHNNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFscy9fY29tbWVudHNfbGlzdFwiO1xyXG5cclxuaW1wb3J0ICogYXMgZWRpdFBvc3RNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFscy9fZWRpdF9wb3N0XCI7XHJcbmltcG9ydCAqIGFzIGRyb3Bkb3duIGZyb20gXCIuL2NvbXBvbmVudHMvZHJvcGRvd25cIjtcclxuaW1wb3J0ICogYXMgZGVsZXRlUG9zdE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWxzL19kZWxldGVfcG9zdFwiO1xyXG5pbXBvcnQgKiBhcyBmb2xkZXIgZnJvbSBcIi4vZm9sZGVyXCI7XHJcbmltcG9ydCAqIGFzIGZvcm1fcG9zdCBmcm9tIFwiLi9mb3JtX3Bvc3RcIjtcclxuaW1wb3J0ICogYXMgdGFncyBmcm9tIFwiLi9jb21wb25lbnRzL3RhZ3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIGVkaXRDb21tZW50TW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbHMvX2VkaXRfY29tbWVudFwiO1xyXG5pbXBvcnQgKiBhcyBkZWxldGVDb21tZW50TW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbHMvX2RlbGV0ZV9jb21tZW50XCI7XHJcbmltcG9ydCAqIGFzIGNvbW1lbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvY29tbWVudHNcIjtcclxuaW1wb3J0ICogYXMgdGFnZ2VkUG9zdCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFscy9fdGFnZ2VkX3Bvc3RcIjtcclxuXHJcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5mdW5jdGlvbiBSZWFkUG9zdCgpIHtcclxuICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICBzZWxmLmNvbG9ycyA9IHtcclxuICAgICAgaXRlbV9vdmVybGF5OiB7XHJcbiAgICAgICAgIGxpc3RSZXNwb25zZTogXCJyZ2JhKDg0LCAxNjAsIDI1NSwgMC40KVwiLFxyXG4gICAgICAgICBsaXN0UmVzcG9uc2VTZWNvbmRhcnk6IFwicmdiYSg4NCwgMTYwLCAyNTUsIDAuNClcIixcclxuICAgICAgICAgY29tbWVudHNNb2RhbDogXCJyZ2JhKDAsIDE2OCwgMjU1LCAwLjMpXCIsXHJcbiAgICAgICAgIGNvbW1lbnRzTW9kYWxTZWNvbmRhcnk6IFwicmdiYSgwLCAxNjgsIDI1NSwgMC4zKVwiLFxyXG4gICAgICAgICBkcm9wZG93bjogXCJyZ2JhKDM0LCA0NywgNjIsIDAuNSlcIixcclxuICAgICAgICAgZHJvcGRvd25TZWNvbmRhcnk6IFwicmdiYSgwLCAxNjgsIDI1NSwgMC4zKVwiLFxyXG4gICAgICAgICBkZWxldGVDb21tZW50TW9kYWw6IFwicmdiYSgyMzIsIDY1LCAyNCwgMC40KVwiLFxyXG4gICAgICAgICBkZWxldGVDb21tZW50TW9kYWxTZWNvbmRhcnk6IFwicmdiYSgyMzIsIDY1LCAyNCwgMC40KVwiLFxyXG4gICAgICAgICBkZWxldGVQb3N0TW9kYWw6IFwicmdiYSgyMzIsIDY1LCAyNCwgMC40KVwiLFxyXG4gICAgICAgICBkZWxldGVQb3N0TW9kYWxTZWNvbmRhcnk6IFwicmdiYSgyMzIsIDY1LCAyNCwgMC40KVwiLFxyXG4gICAgICAgICBlZGl0UG9zdE1vZGFsOiBcInJnYmEoMCwgMjEwLCAyMTEsIDAuMylcIixcclxuICAgICAgICAgZWRpdFBvc3RNb2RhbFNlY29uZGFyeTogXCJyZ2JhKDAsIDIxMCwgMjExLCAwLjMpXCIsXHJcbiAgICAgICAgIGVkaXRDb21tZW50TW9kYWw6IFwicmdiYSgwLCAxNjgsIDI1NSwgMC4zKVwiLFxyXG4gICAgICAgICBlZGl0Q29tbWVudE1vZGFsU2Vjb25kYXJ5OiBcInJnYmEoMjMyLCA2NSwgMjQsIDAuNClcIixcclxuICAgICAgfSxcclxuICAgICAgc2Vjb25kYXJ5X292ZXJsYXk6IHtcclxuICAgICAgICAgbGlzdFJlc3BvbnNlU2Vjb25kYXJ5OiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG4gICAgICAgICBkZWxldGVDb21tZW50TW9kYWw6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgICAgIGVkaXRDb21tZW50TW9kYWw6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgICAgIGVkaXRDb21tZW50TW9kYWxTZWNvbmRhcnk6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgICAgIGNvbW1lbnRzTW9kYWxTZWNvbmRhcnk6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgICAgIGNyZWF0ZUZvbGRlck1vZGFsU2Vjb25kYXJ5OiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG4gICAgICAgICBkZWxldGVQb3N0TW9kYWxTZWNvbmRhcnk6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgICAgIGVkaXRQb3N0TW9kYWxTZWNvbmRhcnk6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgICAgIH0sXHJcbiAgIH07XHJcblxyXG4gICAvKipcclxuICAgICogR0VUIFVTRVIgREFUQVxyXG4gICAgKi9cclxuICAgdGhpcy5nZXRQcm9maWxlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoc2VsZi5yb3V0ZXMuZ2V0X3VzZXJfZGF0YSksIHtcclxuICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAvLyBib2R5OiB0aGlzLmRhdGEsXHJcbiAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICB9KTtcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBST1VURVNcclxuICAgICovXHJcbiAgIHRoaXMucm91dGVzID0ge1xyXG4gICAgICBnZXRfcHJvZmlsZTogXCJnZXRfcHJvZmlsZVwiLFxyXG4gICAgICB1cGRhdGVfcHJvZmlsZTogXCJ1cGRhdGVfcHJvZmlsZVwiLFxyXG4gICAgICBnZXRfZm9sbG93ZXJzOiBcImdldF9mb2xsb3dlcnNcIixcclxuICAgICAgZ2V0X2ZvbGxvd2luZzogXCJnZXRfZm9sbG93aW5nXCIsXHJcbiAgICAgIGdldF9mb2xkZXJzOiBcImdldF9mb2xkZXJzXCIsXHJcbiAgICAgIGdldF9wb3N0czogXCJnZXRfcG9zdHNcIixcclxuICAgICAgZ2V0X3Bvc3RzX2FsbDogXCJnZXRfcG9zdHNfYWxsXCIsXHJcbiAgICAgIGdldF91c2VyX2RhdGE6IFwiZ2V0X3VzZXJfZGF0YVwiLFxyXG4gICAgICBnZXRfdGFnczogXCJnZXRfdGFnc1wiLFxyXG4gICAgICBnZXRfZm9sbG93OiBcImdldF9mb2xsb3dcIixcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBERUZBVUxUIFBBR0lOQVRJT04gU0VUVElOR1NcclxuICAgICovXHJcbiAgIHRoaXMucGFnaW5hdGlvbl9kYXRhID0ge1xyXG4gICAgICBmb2xkZXJzX3BhZ2U6IDEsXHJcbiAgICAgIGZvbGRlcnNfc29ydDogXCJjcmVhdGVkXCIsXHJcbiAgICAgIGZvbGRlcjogbnVsbCxcclxuICAgICAgZm9sZGVyc19wYWdpbmF0aW9uX2NvbnRhaW5lcjogXCJmb2xkZXJzX19wYWdpbmF0b3JcIixcclxuICAgICAgcG9zdHNfcGFnZTogMSxcclxuICAgICAgcG9zdHNfc29ydDogXCJkZXNjXCIsXHJcbiAgICAgIHBvc3RzX3BhZ2luYXRpb25fY29udGFpbmVyOiBcInBvc3RzX19wYWdpbmF0b3JcIixcclxuICAgICAgdGFnc19wYWdlOiAxLFxyXG4gICAgICB0YWdzX3NvcnQ6IFwicG9wdWxhclwiLFxyXG4gICAgICB0YWc6IG51bGwsXHJcbiAgICAgIHRhZ3NfcGFnaW5hdGlvbl9jb250YWluZXI6IFwidGFnc19fcGFnaW5hdG9yXCIsXHJcbiAgICAgIGZvbGxvd19wYWdlOiAxLFxyXG4gICAgICBmb2xsb3dfc29ydDogXCJkZXNjXCIsXHJcbiAgICAgIGZvbGxvd19wYWdpbmF0aW9uX2NvbnRhaW5lcjogXCJmb2xsb3dfX3BhZ2luYXRvclwiLFxyXG4gICAgICB0YWdfbW9kYWxfcGFnZTogMSxcclxuICAgICAgdGFnX21vZGFsX3NvcnQ6IFwiZGVzY1wiLFxyXG4gICAgICB0YWdfbW9kYWxfcGFnaW5hdGlvbl9jb250YWluZXI6IFwidGFnX19wYWdpbmF0b3JcIixcclxuICAgICAgdGFnX21vZGFsX3RhZzogbnVsbCxcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBFVkVOVCBMSVNURU5FUlNcclxuICAgICovXHJcbiAgIHRoaXMuYWRkRXYgPSB7XHJcbiAgICAgIGZvbGxvd1RvZ2dsZXI6ICgpID0+IHtcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX2ZvbGxvd1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZmlsZV9kYXRhLmxvZ2dlZCkge1xyXG4gICAgICAgICAgICAgICBmb2xsb3cuVG9nZ2xlRm9sbG93KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBSb3V0aW5nLmdlbmVyYXRlKFwibG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdFRhZzogKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICAgICBsZXQgdGFnc190YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbChcIi50YWdzX190YWdcIik7XHJcblxyXG4gICAgICAgICB0YWdzX3RhZy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWdfbW9kYWxfdGFnID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGFnXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgbmV3IHRhZ2dlZFBvc3QuVGFnZ2VkUG9zdCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX3RhZ2dlZC1wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcnBhZ2luYXRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YWdnZWRQb3N0UGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJzb3J0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBkcm9wZG93bi5Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNvcnRfX3RhZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBcInNvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdF9hdHRyOiBbXCJzb3J0XCIsIFwiZGVzY1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJOZXdlc3RcIiwgXCJkZXNjXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJNb3N0IGxpa2VkXCIsIFwibGlrZWRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIk1vc3QgY29tbWVudGVkXCIsIFwiY29tbWVudGVkXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTb3J0IGJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWdfbW9kYWxfc29ydCA9IGVsZW0uZ2V0QXR0cmlidXRlKFwic29ydFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50YWdnZWRQb3N0UGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgbGlzdFJlc3BvbnNlOiAoY29udGFpbmVyKSA9PiB7XHJcbiAgICAgICAgIGxldCB0b29sdGlwX3RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyaWdnZXJfX21vZGFsXCIpO1xyXG4gICAgICAgICB0b29sdGlwX3RvZ2dsZS5mb3JFYWNoKChzcGFuKSA9PiB7XHJcbiAgICAgICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIG5ldyByZXNwb25zZUxpc3RNb2RhbC5yZXNwb25zZUxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJveF9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICBhdHRyOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcInBvc3RfbGlrZXNcIixcclxuICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX3Jlc3BvbnNlLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkubGlzdFJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBsaXN0UmVzcG9uc2VTZWNvbmRhcnk6IChjb250YWluZXIpID0+IHtcclxuICAgICAgICAgbGV0IHRvb2x0aXBfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJpZ2dlcl9fbW9kYWxcIik7XHJcbiAgICAgICAgIHRvb2x0aXBfdG9nZ2xlLmZvckVhY2goKHNwYW4pID0+IHtcclxuICAgICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgbmV3IHJlc3BvbnNlTGlzdE1vZGFsLnJlc3BvbnNlTGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1vZGFsX292ZXJsYXk6IFwib3ZlcmxheV9fcmVzcG9uc2UtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIub3ZlcmxheV9fbW9kYWwtaXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkubGlzdFJlc3BvbnNlU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5saXN0UmVzcG9uc2VTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJveF9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICBhdHRyOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcInBvc3RfbGlrZXNcIixcclxuICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX3Jlc3BvbnNlLWxpc3RcIixcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb3BlbkNvbW1lbnRzOiAoY29udGFpbmVyKSA9PiB7XHJcbiAgICAgICAgIGxldCBjb21tZW50c190b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbChcIi50cmlnZ2VyX19jb21tZW50cy1tb2RhbFwiKTtcclxuICAgICAgICAgY29tbWVudHNfdG9nZ2xlLmZvckVhY2goKHNwYW4pID0+IHtcclxuICAgICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgbmV3IGNvbW1lbnRzTW9kYWwuQ29tbWVudHNMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJib3hfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHVybDogXCJnZXRfY29tbWVudHNcIixcclxuICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2NvbW1lbnRzLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuY29tbWVudHNNb2RhbCxcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd25fY29udGFpbmVyOiBcImNvbnRhaW5lcl9fZGQtY29tbWVudHNcIixcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd25fdHJpZ2dlcjogXCJ0cmlnZ2VyX19kZC1jb21tZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICBnZXRVc2VyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVfZGF0YTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZHJvcGRvd246IChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmNvbW1lbnRlZF9wb3N0LmF1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5jb21tZW50X2F1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRWRpdFwiLCBcImZhciBmYS1lZGl0XCIsIFwiZGRfX2VkaXRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW1tcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWVudC5jb21tZW50X2F1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRWRpdFwiLCBcImZhciBmYS1lZGl0XCIsIFwiZGRfX2VkaXRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNvbW1lbnRlZF9wb3N0LmF1dGhvci5pZCAhPSB0aGlzLnByb2ZpbGVfZGF0YS5pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkICE9IHRoaXMucHJvZmlsZV9kYXRhLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgbmV3IGRyb3Bkb3duLkljb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYGNvbnRhaW5lcl9fZGQtY29tbWVudHMtJHtjb21tZW50LmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IGAjdHJpZ2dlcl9fZGQtY29tbWVudHMtJHtjb21tZW50LmlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRyb3Bkb3duU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYjogYXN5bmMgKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTU9EQUwgREVMRVRFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19kZWxldGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGRlbGV0ZUNvbW1lbnRNb2RhbC5EZWxldGVDb21tZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19jb21tZW50LWRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIub3ZlcmxheV9fbW9kYWwtaXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkuZGVsZXRlQ29tbWVudE1vZGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5kZWxldGVDb21tZW50TW9kYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uc3VibWl0OiBhc3luYyAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNT0RBTCBFRElUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZF9fZWRpdFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgZWRpdENvbW1lbnRNb2RhbC5FZGl0Q29tbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fY29tbWVudC1lZGl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5lZGl0Q29tbWVudE1vZGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5lZGl0Q29tbWVudE1vZGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLkVkaXRDb21tZW50KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2tMaWtlczogKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICogVE9HR0xFIExJS0VTXHJcbiAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgbGlrZXMuVXBkYXRlTGlrZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgaWQ6IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGFyZ2V0LCBcImJveF9fY29tbWVudFwiKS5nZXRBdHRyaWJ1dGUoXCJjb21tZW50XCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsaWtlOiBcImNvbW1lbnRfbGlrZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNsaWtlOiBcImNvbW1lbnRfZGlzbGlrZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1bmxpa2U6IFwiY29tbWVudF91bmxpa2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kaXNsaWtlOiBcImNvbW1lbnRfdW5kaXNsaWtlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBvbmNsaWNrQ291bnQ6ICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgbmV3IHJlc3BvbnNlTGlzdE1vZGFsLnJlc3BvbnNlTGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJib3hfX2NvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJjb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJjb21tZW50X2xpa2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19yZXNwb25zZS1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5saXN0UmVzcG9uc2VTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5Lmxpc3RSZXNwb25zZVNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5Db21tZW50c1NlY29uZGFyeTogKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICAgICBsZXQgY29tbWVudHNfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJpZ2dlcl9fY29tbWVudHMtbW9kYWxcIik7XHJcbiAgICAgICAgIGNvbW1lbnRzX3RvZ2dsZS5mb3JFYWNoKChzcGFuKSA9PiB7XHJcbiAgICAgICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgIG5ldyBjb21tZW50c01vZGFsLkNvbW1lbnRzTGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJveF9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICBhdHRyOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcImdldF9jb21tZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fY29tbWVudHMtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICBtb2RhbF9vdmVybGF5OiBcIm92ZXJsYXlfX2NvbW1lbnRzLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXk6IFwiLm92ZXJsYXlfX21vZGFsLWl0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLnNlY29uZGFyeV9vdmVybGF5LmNvbW1lbnRzTW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmNvbW1lbnRzTW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgIGRyb3Bkb3duX2NvbnRhaW5lcjogXCJjb250YWluZXJfX2RkLWNvbW1lbnRzLW1vZGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRyb3Bkb3duX3RyaWdnZXI6IFwidHJpZ2dlcl9fZGQtY29tbWVudHMtbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgZ2V0VXNlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlX2RhdGE7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGRyb3Bkb3duOiAoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5jb21tZW50ZWRfcG9zdC5hdXRob3IuaWQgPT0gdGhpcy5wcm9maWxlX2RhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuY29tbWVudF9hdXRob3IuaWQgPT0gdGhpcy5wcm9maWxlX2RhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkVkaXRcIiwgXCJmYXIgZmEtZWRpdFwiLCBcImRkX19lZGl0XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJEZWxldGVcIiwgXCJmYXMgZmEtdHJhc2hcIiwgXCJkZF9fZGVsZXRlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtbXCJEZWxldGVcIiwgXCJmYXMgZmEtdHJhc2hcIiwgXCJkZF9fZGVsZXRlXCJdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1lbnQuY29tbWVudF9hdXRob3IuaWQgPT0gdGhpcy5wcm9maWxlX2RhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkVkaXRcIiwgXCJmYXIgZmEtZWRpdFwiLCBcImRkX19lZGl0XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJEZWxldGVcIiwgXCJmYXMgZmEtdHJhc2hcIiwgXCJkZF9fZGVsZXRlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jb21tZW50ZWRfcG9zdC5hdXRob3IuaWQgIT0gdGhpcy5wcm9maWxlX2RhdGEuaWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jb21tZW50X2F1dGhvci5pZCAhPSB0aGlzLnByb2ZpbGVfZGF0YS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBkcm9wZG93bi5JY29uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGBjb250YWluZXJfX2RkLWNvbW1lbnRzLW1vZGFsLSR7Y29tbWVudC5pZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBgI3RyaWdnZXJfX2RkLWNvbW1lbnRzLW1vZGFsLSR7Y29tbWVudC5pZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5kcm9wZG93blNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2I6IGFzeW5jICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE1PREFMIERFTEVURVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZF9fZGVsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBkZWxldGVDb21tZW50TW9kYWwuRGVsZXRlQ29tbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtdGhpcmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19jb21tZW50LWRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIjb3ZlcmxheV9fY29tbWVudHMtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkuZGVsZXRlQ29tbWVudE1vZGFsU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5kZWxldGVDb21tZW50TW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uc3VibWl0OiBhc3luYyAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNT0RBTCBFRElUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZF9fZWRpdFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgZWRpdENvbW1lbnRNb2RhbC5FZGl0Q29tbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtdGhpcmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19jb21tZW50LWVkaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXk6IFwiI292ZXJsYXlfX2NvbW1lbnRzLWxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5X292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLnNlY29uZGFyeV9vdmVybGF5LmRlbGV0ZUNvbW1lbnRNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX2NvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZWRpdENvbW1lbnRNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25zdWJtaXQ6IGFzeW5jICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgb25jbGlja0xpa2VzOiAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgKiBUT0dHTEUgTElLRVNcclxuICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBsaWtlcy5VcGRhdGVMaWtlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBpZDogaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0YXJnZXQsIFwiYm94X19jb21tZW50XCIpLmdldEF0dHJpYnV0ZShcImNvbW1lbnRcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2U6IFwiY29tbWVudF9saWtlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2xpa2U6IFwiY29tbWVudF9kaXNsaWtlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubGlrZTogXCJjb21tZW50X3VubGlrZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRpc2xpa2U6IFwiY29tbWVudF91bmRpc2xpa2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIG9uY2xpY2tDb3VudDogKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgcmVzcG9uc2VMaXN0TW9kYWwucmVzcG9uc2VMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbC10aGlyZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYm94X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IFwiY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiY29tbWVudF9saWtlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fcmVzcG9uc2UtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIjb3ZlcmxheV9fY29tbWVudHMtbGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkubGlzdFJlc3BvbnNlU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5saXN0UmVzcG9uc2VTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIERST1BET1dOU1xyXG4gICAgKi9cclxuICAgdGhpcy5kZCA9IHtcclxuICAgICAgcG9zdERyb3Bkb3duOiAocCkgPT4ge1xyXG4gICAgICAgICBpZiAocC5hdXRob3IuaWQgPT0gdGhpcy5wcm9maWxlX2RhdGEuaWQpIHtcclxuICAgICAgICAgICAgbmV3IGRyb3Bkb3duLkljb24oe1xyXG4gICAgICAgICAgICAgICBpZDogYGRkLWNvbnRhaW5lcl9fcG9zdC0ke3AuaWR9YCxcclxuICAgICAgICAgICAgICAgdHJpZ2dlcjogYCNkZC10cmlnZ2VyX19wb3N0LSR7cC5pZH1gLFxyXG4gICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgIFtcIkVkaXRcIiwgXCJmYXIgZmEtZWRpdFwiLCBcImRkX19lZGl0XCJdLFxyXG4gICAgICAgICAgICAgICAgICBbXCJEZWxldGVcIiwgXCJmYXMgZmEtdHJhc2hcIiwgXCJkZF9fZGVsZXRlXCJdLFxyXG4gICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5kcm9wZG93bixcclxuICAgICAgICAgICAgICAgY2I6IGFzeW5jICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAqIERFTEVURSBQT1NUIE1PREFMXHJcbiAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19kZWxldGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgbmV3IGRlbGV0ZVBvc3RNb2RhbC5EZWxldGVQb3N0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX3Bvc3QtZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRlbGV0ZVBvc3RNb2RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25zdWJtaXQ6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3N0c1BhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgKiBFRElUIFBPU1QgTU9EQUxcclxuICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19lZGl0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCBmb2xkZXJzX25hbWVzID0gYXdhaXQgZm9sZGVyLmdldEZvbGRlcnNOYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgZWRpdFBvc3RNb2RhbC5FZGl0UG9zdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19lZGl0LXBvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX3Bvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZWRpdFBvc3RNb2RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25zdWJtaXQ6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRFdi5zZWxlY3RUYWcoXCIjY29udGVudF9fcG9zdHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9udGFnY3JlYXRlOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5hZGRUYWcodGFncy5jcmVhdGVUYWcodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVydGFnczogKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5hZGRUYWcodGFncy5jcmVhdGVUYWcodGFnLm5hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmRyb3Bkb3duOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBkcm9wZG93bi5Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0X19mb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJmb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdF9hdHRyOiBbXCJmb2xkZXJcIiwgXCJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvbGRlcnNfbmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tX2l0ZW06IFwiQ3JlYXRlIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGVtX19ib3R0b21cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNyZWF0ZUZvbGRlck1vZGFsLkNyZWF0ZUZvbGRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZm9sZGVyLWNyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIub3ZlcmxheV9fbW9kYWwtaXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkuY3JlYXRlRm9sZGVyTW9kYWxTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2xkZXJzX25hbWVzID0gYXdhaXQgZm9sZGVyLmdldEZvbGRlcnNOYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXIudXBkYXRlRm9sZGVyc0xpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiBcImZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb2xkZXJzX25hbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21faXRlbTogXCJDcmVhdGUgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZvbGRlcnNQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJhdXRvY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybV9wb3N0LnJlbmRlckF1dG9Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwb3N0RHJvcGRvd25TZWNvbmRhcnk6IChwKSA9PiB7XHJcbiAgICAgICAgIGlmIChwLmF1dGhvci5pZCA9PSB0aGlzLnByb2ZpbGVfZGF0YS5pZCkge1xyXG4gICAgICAgICAgICBuZXcgZHJvcGRvd24uSWNvbih7XHJcbiAgICAgICAgICAgICAgIGlkOiBgZGQtY29udGFpbmVyX19wb3N0LW1vZGFsLSR7cC5pZH1gLFxyXG4gICAgICAgICAgICAgICB0cmlnZ2VyOiBgI2RkLXRyaWdnZXJfX3Bvc3QtbW9kYWwtJHtwLmlkfWAsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgW1wiRWRpdFwiLCBcImZhciBmYS1lZGl0XCIsIFwiZGRfX2VkaXRcIl0sXHJcbiAgICAgICAgICAgICAgICAgIFtcIkRlbGV0ZVwiLCBcImZhcyBmYS10cmFzaFwiLCBcImRkX19kZWxldGVcIl0sXHJcbiAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRyb3Bkb3duLFxyXG4gICAgICAgICAgICAgICBjYjogYXN5bmMgZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICogTU9EQUwgREVMRVRFIFBPU1RcclxuICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGRfX2RlbGV0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgZGVsZXRlUG9zdE1vZGFsLkRlbGV0ZVBvc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIub3ZlcmxheV9fbW9kYWwtaXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuc2Vjb25kYXJ5X292ZXJsYXkuZGVsZXRlUG9zdE1vZGFsU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX3Bvc3QtZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRlbGV0ZVBvc3RNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25zdWJtaXQ6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3N0c1BhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgKiBNT0RBTCBFRElUIFBPU1RcclxuICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19lZGl0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCBmb2xkZXJzX25hbWVzID0gYXdhaXQgZm9sZGVyLmdldEZvbGRlcnNOYW1lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgZWRpdFBvc3RNb2RhbC5FZGl0UG9zdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5zZWNvbmRhcnlfb3ZlcmxheS5lZGl0UG9zdE1vZGFsU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2VkaXQtcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXk6IFwib3ZlcmxheV9fcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtX292ZXJsYXlfYmc6IHNlbGYuY29sb3JzLml0ZW1fb3ZlcmxheS5lZGl0UG9zdE1vZGFsU2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEV2LnNlbGVjdFRhZyhcIiNjb250ZW50X190YWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9udGFnY3JlYXRlOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5hZGRUYWcodGFncy5jcmVhdGVUYWcodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVydGFnczogKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5hZGRUYWcodGFncy5jcmVhdGVUYWcodGFnLm5hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmRyb3Bkb3duOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBkcm9wZG93bi5Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0X19mb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJmb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdF9hdHRyOiBbXCJmb2xkZXJcIiwgXCJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvbGRlcnNfbmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tX2l0ZW06IFwiQ3JlYXRlIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGVtX19ib3R0b21cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNyZWF0ZUZvbGRlck1vZGFsLkNyZWF0ZUZvbGRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeV9vdmVybGF5OiBcIi5vdmVybGF5X19tb2RhbC1pdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZm9sZGVyLWNyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9sZGVyc19uYW1lcyA9IGF3YWl0IGZvbGRlci5nZXRGb2xkZXJzTmFtZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVyLnVwZGF0ZUZvbGRlcnNMaXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJmb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9sZGVyc19uYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tX2l0ZW06IFwiQ3JlYXRlIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mb2xkZXJzUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyYXV0b2NvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1fcG9zdC5yZW5kZXJBdXRvQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNT0RBTFNcclxuICAgICovXHJcbiAgIHRoaXMubW9kYWxzID0ge1xyXG4gICAgICBlZGl0UHJvZmlsZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICBsZXQgcHJvZmlsZV9pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19tYWluLWNvbnRlbnRcIikuZ2V0QXR0cmlidXRlKFwicHJvZmlsZVwiKTtcclxuICAgICAgICAgaWYgKHRoaXMucHJvZmlsZV9kYXRhLmlkID09IHBhcnNlSW50KHByb2ZpbGVfaWQpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvbl9fcHJvZmlsZS1lZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBuZXcgZWRpdFByb2ZpbGVNb2RhbC5FZGl0UHJvZmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2VkaXQtcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVET00uZWRpdERPTShyZXNwb25zZS5wcm9maWxlX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZm9sbG93ZXJzTW9kYWw6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xsb3dlcnNfX2NvdW50ZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBmb2xsb3dMaXN0TW9kYWwuZm9sbG93TGlzdCh7XHJcbiAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYm94X19tYWluLWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgYXR0cjogXCJwcm9maWxlXCIsXHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIHVybDogc2VsZi5yb3V0ZXMuZ2V0X2ZvbGxvd2VycyxcclxuICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2ZvbGxvd2Vycy1saXN0XCIsXHJcbiAgICAgICAgICAgICAgIGhlYWRlcjogXCJGb2xsb3dlcnNcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBmb2xsb3dpbmdNb2RhbDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGxvd2luZ19fY291bnRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgbmV3IGZvbGxvd0xpc3RNb2RhbC5mb2xsb3dMaXN0KHtcclxuICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICB0YXJnZXQ6IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJib3hfX21haW4tY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBhdHRyOiBcInByb2ZpbGVcIixcclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgdXJsOiBzZWxmLnJvdXRlcy5nZXRfZm9sbG93aW5nLFxyXG4gICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZm9sbG93ZXJzLWxpc3RcIixcclxuICAgICAgICAgICAgICAgaGVhZGVyOiBcIkZvbGxvd2luZ1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZUZvbGRlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICBsZXQgcHJvZmlsZV9pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19tYWluLWNvbnRlbnRcIikuZ2V0QXR0cmlidXRlKFwicHJvZmlsZVwiKTtcclxuICAgICAgICAgaWYgKHByb2ZpbGVfaWQgPT0gdGhpcy5wcm9maWxlX2RhdGEuaWQpIHtcclxuICAgICAgICAgICAgbGV0IGJ0bl9jcmVhdGVfZm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXJzX2NyZWF0ZVwiKTtcclxuICAgICAgICAgICAgYnRuX2NyZWF0ZV9mb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICBuZXcgY3JlYXRlRm9sZGVyTW9kYWwuQ3JlYXRlRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2ZvbGRlci1jcmVhdGVcIixcclxuICAgICAgICAgICAgICAgICAgY2I6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgc2VsZi5mb2xkZXJzUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBidG5fY3JlYXRlX2ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyc19jcmVhdGVcIik7XHJcbiAgICAgICAgICAgIGJ0bl9jcmVhdGVfZm9sZGVyLnJlbW92ZSgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZVBvc3Q6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgbGV0IHByb2ZpbGVfaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveF9fbWFpbi1jb250ZW50XCIpLmdldEF0dHJpYnV0ZShcInByb2ZpbGVcIik7XHJcbiAgICAgICAgIGlmIChwcm9maWxlX2lkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIGxldCBidG5fY3JlYXRlX3Bvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3RzX2NyZWF0ZVwiKTtcclxuICAgICAgICAgICAgYnRuX2NyZWF0ZV9wb3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IGZvbGRlcnNfbmFtZXMgPSBhd2FpdCBmb2xkZXIuZ2V0Rm9sZGVyc05hbWVzKCk7XHJcbiAgICAgICAgICAgICAgIG5ldyBjcmVhdGVQb3N0TW9kYWwuQ3JlYXRlUG9zdCh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19jcmVhdGUtcG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICBvbnN1Ym1pdDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBzZWxmLnBvc3RzUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBvbnRhZ2NyZWF0ZTogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50cmltKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcmRyb3Bkb3duOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5ldyBkcm9wZG93bi5Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0X19mb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJmb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdF9hdHRyOiBbXCJmb2xkZXJcIiwgXCJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvbGRlcnNfbmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tX2l0ZW06IFwiQ3JlYXRlIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGVtX19ib3R0b21cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNyZWF0ZUZvbGRlck1vZGFsLkNyZWF0ZUZvbGRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWwtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fZm9sZGVyLWNyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheTogXCIub3ZlcmxheV9fbW9kYWwtaXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlfb3ZlcmxheV9iZzogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2I6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbGRlcnNfbmFtZXMgPSBhd2FpdCBmb2xkZXIuZ2V0Rm9sZGVyc05hbWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlci51cGRhdGVGb2xkZXJzTGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IFwiZm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvbGRlcnNfbmFtZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbV9pdGVtOiBcIkNyZWF0ZSBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZm9sZGVyc1BhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcmF1dG9jb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBmb3JtX3Bvc3QucmVuZGVyQXV0b0NvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJ0bl9jcmVhdGVfcG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdHNfY3JlYXRlXCIpO1xyXG4gICAgICAgICAgICBidG5fY3JlYXRlX3Bvc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgfTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUQUcgUEFHSU5BVElPTlxyXG4gICAgKi9cclxuICAgdGhpcy50YWdnZWRQb3N0UGFnaW5hdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHRhZ19wYWdpbmF0aW9uX3NldHRpbmdzID0ge1xyXG4gICAgICAgICBjb250YWluZXJfaWQ6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF9wYWdpbmF0aW9uX2NvbnRhaW5lcixcclxuICAgICAgICAgcm91dGU6IHNlbGYucm91dGVzLmdldF9wb3N0c19hbGwsXHJcbiAgICAgICAgIHBhZ2U6IHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF9wYWdlLFxyXG4gICAgICAgICBzb3J0X21ldGhvZDogc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3NvcnQsXHJcbiAgICAgICAgIHByb2ZpbGVfaWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94X19tYWluLWNvbnRlbnRcIikuZ2V0QXR0cmlidXRlKFwicHJvZmlsZVwiKSxcclxuICAgICAgICAgZm9sZGVyX2lkOiBzZWxmLnBhZ2luYXRpb25fZGF0YS5mb2xkZXIsXHJcbiAgICAgICAgIHRhZ19pZDogc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3RhZyxcclxuICAgICAgICAgY2I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYucmVuZGVyUG9zdHNCeVRhZyhkYXRhLCBcIiNjb250ZW50X190YWdcIik7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFBhZ2U6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFnaW5hdGlvbl9kYXRhLnRhZ19tb2RhbF9wYWdlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRTb3J0TWV0aG9kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb25fZGF0YS50YWdfbW9kYWxfc29ydDtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0Rm9sZGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb25fZGF0YS5mb2xkZXI7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRhZzogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3RhZztcclxuICAgICAgICAgfSxcclxuICAgICAgICAgc2V0UGFnZTogKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3BhZ2UgPSBwYWdlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBwYWdpbmF0aW9uLkNyZWF0ZVBhZ2luYXRpb24odGFnX3BhZ2luYXRpb25fc2V0dGluZ3MpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5vcGVuVGFnID0gKCkgPT4ge1xyXG4gICAgICAvKipcclxuICAgICAgICogT1BFTiBUQUdcclxuICAgICAgICovXHJcbiAgICAgIGxldCB0YWdzX3RhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9zdF9fdGFnXCIpO1xyXG5cclxuICAgICAgdGFnc190YWcuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3RhZyA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRhZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyB0YWdnZWRQb3N0LlRhZ2dlZFBvc3Qoe1xyXG4gICAgICAgICAgICAgICBpZDogXCJib3hfX21vZGFsXCIsXHJcbiAgICAgICAgICAgICAgIHRhcmdldDogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX190YWdnZWQtcG9zdFwiLFxyXG4gICAgICAgICAgICAgICByZW5kZXJwYWdpbmF0ZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFnZ2VkUG9zdFBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgcmVuZGVyc29ydDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBuZXcgZHJvcGRvd24uRHJvcGRvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgICBpZDogXCJzb3J0X190YWdcIixcclxuICAgICAgICAgICAgICAgICAgICAgYXR0cjogXCJzb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRfYXR0cjogW1wic29ydFwiLCBcImRlc2NcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1wiTmV3ZXN0XCIsIFwiZGVzY1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1wiTW9zdCBsaWtlZFwiLCBcImxpa2VkXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXCJNb3N0IGNvbW1lbnRlZFwiLCBcImNvbW1lbnRlZFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU29ydCBieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICBjYjogZnVuY3Rpb24gKGVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wYWdpbmF0aW9uX2RhdGEudGFnX21vZGFsX3NvcnQgPSBlbGVtLmdldEF0dHJpYnV0ZShcInNvcnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGFnZ2VkUG9zdFBhZ2luYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICAvKipcclxuICAgICogVE9HR0xFIExJS0VTXHJcbiAgICAqL1xyXG4gICB0aGlzLnRvZ2dsZUxpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgdG9nZ2xlX2xpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b29nbGVfbGlrZXNcIik7XHJcbiAgICAgIHRvZ2dsZV9saWtlcy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbmV3IGxpa2VzLlVwZGF0ZUxpa2VzKHtcclxuICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXHJcbiAgICAgICAgICAgICAgIGlkOiB7IGlkOiBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKGV2ZW50LnRhcmdldCwgXCJib3hfX3Bvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKSB9LFxyXG4gICAgICAgICAgICAgICB1cmw6IHtcclxuICAgICAgICAgICAgICAgICAgbGlrZTogXCJwb3N0X2xpa2VcIixcclxuICAgICAgICAgICAgICAgICAgZGlzbGlrZTogXCJwb3N0X2Rpc2xpa2VcIixcclxuICAgICAgICAgICAgICAgICAgdW5saWtlOiBcInBvc3RfdW5saWtlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHVuZGlzbGlrZTogXCJwb3N0X3VuZGlzbGlrZVwiLFxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIE1PREFMIFJFU1BPTlNFIExJU1RcclxuICAgICovXHJcbiAgIHRoaXMucmVzcG9uc2VMaXN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCB0b29sdGlwX3RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJpZ2dlcl9fbW9kYWxcIik7XHJcbiAgICAgIHRvb2x0aXBfdG9nZ2xlLmZvckVhY2goKHNwYW4pID0+IHtcclxuICAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgbmV3IHJlc3BvbnNlTGlzdE1vZGFsLnJlc3BvbnNlTGlzdCh7XHJcbiAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgdGFyZ2V0OiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwiYm94X19wb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHI6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICB1cmw6IFwicG9zdF9saWtlc1wiLFxyXG4gICAgICAgICAgICAgICBzdHlsZV9jbGFzczogXCJzdHlsZS1jbGFzc19fcmVzcG9uc2UtbGlzdFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5jb21tZW50c0NvbnRyb2xsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDUkVBVEUgQ09NTUVOVFxyXG4gICAgICAgKi9cclxuICAgICAgY29tbWVudHMuQ29tbWVudHNDb250cm9sbGVyKHtcclxuICAgICAgICAgY29udGFpbmVyOiBcIi5ib3hfX2NvbW1lbnRzXCIsXHJcbiAgICAgICAgIGlucHV0X2NvbW1lbnQ6IFwiLmlucHV0X19jb21tZW50XCIsXHJcbiAgICAgICAgIGdldFVzZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZV9kYXRhO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBkcm9wZG93bjogKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbW1lbnQuY29tbWVudGVkX3Bvc3QuYXV0aG9yLmlkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgIGlmIChjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICBbXCJFZGl0XCIsIFwiZmFyIGZhLWVkaXRcIiwgXCJkZF9fZWRpdFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgW1wiRGVsZXRlXCIsIFwiZmFzIGZhLXRyYXNoXCIsIFwiZGRfX2RlbGV0ZVwiXSxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBbW1wiRGVsZXRlXCIsIFwiZmFzIGZhLXRyYXNoXCIsIFwiZGRfX2RlbGV0ZVwiXV07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tZW50LmNvbW1lbnRfYXV0aG9yLmlkID09IHRoaXMucHJvZmlsZV9kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgICAgICAgICAgICBbXCJFZGl0XCIsIFwiZmFyIGZhLWVkaXRcIiwgXCJkZF9fZWRpdFwiXSxcclxuICAgICAgICAgICAgICAgICAgW1wiRGVsZXRlXCIsIFwiZmFzIGZhLXRyYXNoXCIsIFwiZGRfX2RlbGV0ZVwiXSxcclxuICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgIGNvbW1lbnQuY29tbWVudGVkX3Bvc3QuYXV0aG9yLmlkICE9IHRoaXMucHJvZmlsZV9kYXRhLmlkICYmXHJcbiAgICAgICAgICAgICAgIGNvbW1lbnQuY29tbWVudF9hdXRob3IuaWQgIT0gdGhpcy5wcm9maWxlX2RhdGEuaWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBuZXcgZHJvcGRvd24uSWNvbih7XHJcbiAgICAgICAgICAgICAgIGlkOiBgbWVudV9fZHJvcGRvd24tJHtjb21tZW50LmlkfWAsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgIHRyaWdnZXI6IGAuaWNvbl9fY29tbWVudC0ke2NvbW1lbnQuaWR9YCxcclxuICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX2NvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZHJvcGRvd24sXHJcblxyXG4gICAgICAgICAgICAgICBjYjogYXN5bmMgKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICogTU9EQUwgREVMRVRFXHJcbiAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19kZWxldGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgbmV3IGRlbGV0ZUNvbW1lbnRNb2RhbC5EZWxldGVDb21tZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYm94X19tb2RhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX2NvbW1lbnQtZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheTogXCJvdmVybGF5X19jb21tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fb3ZlcmxheV9iZzogc2VsZi5jb2xvcnMuaXRlbV9vdmVybGF5LmRlbGV0ZVBvc3RNb2RhbFNlY29uZGFyeSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiOiBhc3luYyAoYnRuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAqIE1PREFMIEVESVRcclxuICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRkX19lZGl0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb21tZW50cy5nZXRDb21tZW50KHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBuZXcgZWRpdENvbW1lbnRNb2RhbC5FZGl0Q29tbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2NsYXNzOiBcInN0eWxlLWNsYXNzX19jb21tZW50LWVkaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5OiBcIm92ZXJsYXlfX2NvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9vdmVybGF5X2JnOiBzZWxmLmNvbG9ycy5pdGVtX292ZXJsYXkuZWRpdFBvc3RNb2RhbFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25zdWJtaXQ6IGFzeW5jIChjb21tZW50KSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIG9uY2xpY2tMaWtlczogKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVE9HR0xFIExJS0VTXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBuZXcgbGlrZXMuVXBkYXRlTGlrZXMoe1xyXG4gICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgaWQ6IHsgaWQ6IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGFyZ2V0LCBcImJveF9fY29tbWVudFwiKS5nZXRBdHRyaWJ1dGUoXCJjb21tZW50XCIpIH0sXHJcbiAgICAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICAgICBsaWtlOiBcImNvbW1lbnRfbGlrZVwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNsaWtlOiBcImNvbW1lbnRfZGlzbGlrZVwiLFxyXG4gICAgICAgICAgICAgICAgICB1bmxpa2U6IFwiY29tbWVudF91bmxpa2VcIixcclxuICAgICAgICAgICAgICAgICAgdW5kaXNsaWtlOiBcImNvbW1lbnRfdW5kaXNsaWtlXCIsXHJcbiAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBvbmNsaWNrQ291bnQ6ICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgbmV3IHJlc3BvbnNlTGlzdE1vZGFsLnJlc3BvbnNlTGlzdCh7XHJcbiAgICAgICAgICAgICAgIGlkOiBcImJveF9fbW9kYWxcIixcclxuICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcImJveF9fY29tbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBhdHRyOiBcImNvbW1lbnRcIixcclxuICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgdXJsOiBcImNvbW1lbnRfbGlrZXNcIixcclxuICAgICAgICAgICAgICAgc3R5bGVfY2xhc3M6IFwic3R5bGUtY2xhc3NfX3Jlc3BvbnNlLWxpc3RcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFJFTkRFUiBNT0RBTCBQT1NUUyBQQUdJTkFURURcclxuICAgICovXHJcbiAgIHRoaXMucmVuZGVyUG9zdHNCeVRhZyA9IGFzeW5jIChkYXRhLCBjb250YWluZXIpID0+IHtcclxuICAgICAgaWYgKGRhdGEubWFpbl9kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgIGxldCB0ZXh0ID0gXCJObyBwb3N0cyBjcmVhdGVkXCI7XHJcbiAgICAgICAgIHBvc3RET00ubm9Db250ZW50KGNvbnRhaW5lciwgdGV4dCk7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcG9zdERPTS5hZGRQb3N0cyh7XHJcbiAgICAgICAgIGRhdGE6IGRhdGEubWFpbl9kYXRhLFxyXG4gICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgICAgICAgZHJvcGRvd25fdHJpZ2dlcl9pZDogXCJkZC10cmlnZ2VyX19wb3N0LW1vZGFsXCIsXHJcbiAgICAgICAgIGRyb3Bkb3duX2NvbnRhaW5lcl9pZDogXCJkZC1jb250YWluZXJfX3Bvc3QtbW9kYWxcIixcclxuICAgICAgICAgZ2V0VXNlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlX2RhdGE7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBhY2NvcmRpb24uZXhwYW5kQWNjb3JkaW9ucygpO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFRPR0dMRSBMSUtFU1xyXG4gICAgICAgKi9cclxuICAgICAgbGlrZXMudG9nZ2xlTGlrZXMoKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBPUEVOIFRBR1xyXG4gICAgICAgKi9cclxuICAgICAgdGhpcy5hZGRFdi5zZWxlY3RUYWcoY29udGFpbmVyKTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMSVNUIExJS0VTIC8gRElTTElLRVNcclxuICAgICAgICovXHJcbiAgICAgIHRoaXMuYWRkRXYubGlzdFJlc3BvbnNlU2Vjb25kYXJ5KGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTU9EQUwgQ09NTUVOVFNcclxuICAgICAgICovXHJcbiAgICAgIHRoaXMuYWRkRXYub3BlbkNvbW1lbnRzU2Vjb25kYXJ5KGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogUE9TVCBEUk9QRE9XTlxyXG4gICAgICAgKi9cclxuICAgICAgZGF0YS5tYWluX2RhdGEuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmRkLnBvc3REcm9wZG93blNlY29uZGFyeShwKTtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmRpc2FibGVDb21tZW50cyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMucHJvZmlsZV9kYXRhLmxvZ2dlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gXCJUbyB3cml0ZSBhIGNvbW1lbnQgcGxlYXNlIHNpZ24gaW5cIjtcclxuICAgICAgbGV0IGNvbW1lbnRfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19jb21tZW50XCIpO1xyXG4gICAgICBjb21tZW50X2lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcclxuICAgICAgY29tbWVudF9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICB9O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIElOSVQgSU5ERVggUEFHRSBDT05URU5UXHJcbiAgICAqL1xyXG4gICB0aGlzLmluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZmlsZV9kYXRhID0gYXdhaXQgdGhpcy5nZXRQcm9maWxlRGF0YSgpO1xyXG5cclxuICAgICAgdGhpcy50b2dnbGVMaWtlcygpO1xyXG4gICAgICB0aGlzLnJlc3BvbnNlTGlzdE1vZGFsKCk7XHJcbiAgICAgIHRoaXMuY29tbWVudHNDb250cm9sbGVyKCk7XHJcbiAgICAgIHRoaXMub3BlblRhZygpO1xyXG5cclxuICAgICAgdGhpcy5kaXNhYmxlQ29tbWVudHMoKTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCgpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgIG5ldyBSZWFkUG9zdCgpO1xyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XHJcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCIuL2pzX3JvdXRlcy5qc29uXCIpO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdCh0YXJnZXQpIHtcclxuICAgbGV0IHBvc3RfaWQgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRhcmdldCwgXCJib3hfX3Bvc3RcIikuZ2V0QXR0cmlidXRlKFwicG9zdFwiKTtcclxuICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgZGF0YS5hcHBlbmQoXCJwb3N0X2lkXCIsIHBvc3RfaWQpO1xyXG4gICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZShcImRlbGV0ZV9wb3N0XCIpO1xyXG4gICBsZXQgcHJvbWlzZSA9IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBkYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgIH0sXHJcbiAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3QodGFyZ2V0KSB7XHJcbiAgIGxldCBwb3N0X2lkID0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0YXJnZXQsIFwiYm94X19wb3N0XCIpLmdldEF0dHJpYnV0ZShcInBvc3RcIik7XHJcbiAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgIGRhdGEuYXBwZW5kKFwicG9zdF9pZFwiLCBwb3N0X2lkKTtcclxuICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJnZXRfcG9zdFwiKTtcclxuICAgbGV0IHByb21pc2UgPSBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogZGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICB9LFxyXG4gICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgIH0pO1xyXG5cclxuICAgcmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3N0KGRhdGEpIHtcclxuICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoXCJjcmVhdGVfcG9zdFwiKTtcclxuICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBkYXRhLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgIH0sXHJcbiAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0UG9zdChkYXRhKSB7XHJcbiAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKFwiZWRpdF9wb3N0XCIpO1xyXG4gICBjb25zdCBwcm9taXNlID0gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgfSxcclxuICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiBwcm9taXNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSGVhZGVycyhjb3VudCkge1xyXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fdGV4dFwiKS5pbm5lckhUTUwgPSBgUG9zdHMgJHtjb3VudH1gO1xyXG59XHJcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxyXG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XHJcbiAgKGdsb2JhbC5hdXRvQ29tcGxldGUgPSBmYWN0b3J5KCkpO1xyXG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcclxuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xyXG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XHJcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcclxuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xyXG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRhdGFBdHRyaWJ1dGUgPSBcImRhdGEtaWRcIjtcclxuICB2YXIgc2VsZWN0ID0ge1xyXG4gICAgcmVzdWx0c0xpc3Q6IFwiYXV0b0NvbXBsZXRlX2xpc3RcIixcclxuICAgIHJlc3VsdDogXCJhdXRvQ29tcGxldGVfcmVzdWx0XCIsXHJcbiAgICBoaWdobGlnaHQ6IFwiYXV0b0NvbXBsZXRlX2hpZ2hsaWdodGVkXCIsXHJcbiAgICBzZWxlY3RlZFJlc3VsdDogXCJhdXRvQ29tcGxldGVfc2VsZWN0ZWRcIlxyXG4gIH07XHJcbiAgdmFyIGtleXMgPSB7XHJcbiAgICBFTlRFUjogMTMsXHJcbiAgICBBUlJPV19VUDogMzgsXHJcbiAgICBBUlJPV19ET1dOOiA0MFxyXG4gIH07XHJcbiAgdmFyIGdldElucHV0ID0gZnVuY3Rpb24gZ2V0SW5wdXQoc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yKCk7XHJcbiAgfTtcclxuICB2YXIgY3JlYXRlUmVzdWx0c0xpc3QgPSBmdW5jdGlvbiBjcmVhdGVSZXN1bHRzTGlzdChyZW5kZXJSZXN1bHRzKSB7XHJcbiAgICB2YXIgcmVzdWx0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHJlbmRlclJlc3VsdHMuZWxlbWVudCk7XHJcbiAgICByZXN1bHRzTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzZWxlY3QucmVzdWx0c0xpc3QpO1xyXG4gICAgaWYgKHJlbmRlclJlc3VsdHMuY29udGFpbmVyKSB7XHJcbiAgICAgIHJlbmRlclJlc3VsdHMuY29udGFpbmVyKHJlc3VsdHNMaXN0KTtcclxuICAgIH1cclxuICAgIHJlbmRlclJlc3VsdHMuZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHJlbmRlclJlc3VsdHMucG9zaXRpb24sIHJlc3VsdHNMaXN0KTtcclxuICAgIHJldHVybiByZXN1bHRzTGlzdDtcclxuICB9O1xyXG4gIHZhciBoaWdobGlnaHQgPSBmdW5jdGlvbiBoaWdobGlnaHQodmFsdWUpIHtcclxuICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPVwiLmNvbmNhdChzZWxlY3QuaGlnaGxpZ2h0LCBcIj5cIikuY29uY2F0KHZhbHVlLCBcIjwvc3Bhbj5cIik7XHJcbiAgfTtcclxuICB2YXIgYWRkUmVzdWx0c1RvTGlzdCA9IGZ1bmN0aW9uIGFkZFJlc3VsdHNUb0xpc3QocmVzdWx0c0xpc3QsIGRhdGFTcmMsIHJlc3VsdEl0ZW0pIHtcclxuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGRhdGFTcmMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIHJlY29yZCkge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyZXN1bHRJdGVtLmVsZW1lbnQpO1xyXG4gICAgICB2YXIgcmVzdWx0SW5kZXggPSBkYXRhU3JjW3JlY29yZF0uaW5kZXg7XHJcbiAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSwgcmVzdWx0SW5kZXgpO1xyXG4gICAgICByZXN1bHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc2VsZWN0LnJlc3VsdCk7XHJcbiAgICAgIHJlc3VsdEl0ZW0uY29udGVudCA/IHJlc3VsdEl0ZW0uY29udGVudChldmVudCwgcmVzdWx0KSA6IHJlc3VsdC5pbm5lckhUTUwgPSBldmVudC5tYXRjaCB8fCBldmVudDtcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgcmVzdWx0c0xpc3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH07XHJcbiAgdmFyIGNsZWFyUmVzdWx0cyA9IGZ1bmN0aW9uIGNsZWFyUmVzdWx0cyhyZXN1bHRzTGlzdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfTtcclxuICB2YXIgb25TZWxlY3Rpb24gPSBmdW5jdGlvbiBvblNlbGVjdGlvbihldmVudCwgZmllbGQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcywgc2VsZWN0aW9uKSB7XHJcbiAgICBmZWVkYmFjayh7XHJcbiAgICAgIGV2ZW50OiBldmVudCxcclxuICAgICAgcXVlcnk6IGZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCA/IGZpZWxkLnZhbHVlIDogZmllbGQuaW5uZXJIVE1MLFxyXG4gICAgICBtYXRjaGVzOiByZXN1bHRzVmFsdWVzLm1hdGNoZXMsXHJcbiAgICAgIHJlc3VsdHM6IHJlc3VsdHNWYWx1ZXMubGlzdC5tYXAoZnVuY3Rpb24gKHJlY29yZCkge1xyXG4gICAgICAgIHJldHVybiByZWNvcmQudmFsdWU7XHJcbiAgICAgIH0pLFxyXG4gICAgICBzZWxlY3Rpb246IHJlc3VsdHNWYWx1ZXMubGlzdC5maW5kKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBrZXlzLkVOVEVSKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUuaW5kZXggPT09IE51bWJlcihzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5pbmRleCA9PT0gTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGNsZWFyUmVzdWx0cyhyZXN1bHRzTGlzdCk7XHJcbiAgfTtcclxuICB2YXIgbmF2aWdhdGlvbiA9IGZ1bmN0aW9uIG5hdmlnYXRpb24oaW5wdXQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcykge1xyXG4gICAgdmFyIGxpID0gcmVzdWx0c0xpc3QuY2hpbGROb2RlcyxcclxuICAgICAgICBsaUxlbmd0aCA9IGxpLmxlbmd0aCAtIDE7XHJcbiAgICB2YXIgbGlTZWxlY3RlZCA9IHVuZGVmaW5lZCxcclxuICAgICAgICBuZXh0O1xyXG4gICAgdmFyIHJlbW92ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIHJlbW92ZVNlbGVjdGlvbihkaXJlY3Rpb24pIHtcclxuICAgICAgbGlTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdC5zZWxlY3RlZFJlc3VsdCk7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgICBuZXh0ID0gbGlTZWxlY3RlZC5uZXh0U2libGluZztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXh0ID0gbGlTZWxlY3RlZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgaGlnaGxpZ2h0U2VsZWN0aW9uID0gZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0aW9uKGN1cnJlbnQpIHtcclxuICAgICAgbGlTZWxlY3RlZCA9IGN1cnJlbnQ7XHJcbiAgICAgIGxpU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChzZWxlY3Quc2VsZWN0ZWRSZXN1bHQpO1xyXG4gICAgfTtcclxuICAgIGlucHV0Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAobGkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgY2FzZSBrZXlzLkFSUk9XX1VQOlxyXG4gICAgICAgICAgICBpZiAobGlTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGlvbigwKTtcclxuICAgICAgICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKG5leHQpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRTZWxlY3Rpb24obGlbbGlMZW5ndGhdKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKGxpW2xpTGVuZ3RoXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIGtleXMuQVJST1dfRE9XTjpcclxuICAgICAgICAgICAgaWYgKGxpU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICByZW1vdmVTZWxlY3Rpb24oMSk7XHJcbiAgICAgICAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihuZXh0KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKGxpWzBdKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKGxpWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2Uga2V5cy5FTlRFUjpcclxuICAgICAgICAgICAgaWYgKGxpU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICBvblNlbGVjdGlvbihldmVudCwgaW5wdXQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcywgbGlTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBsaS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rpb24pIHtcclxuICAgICAgc2VsZWN0aW9uLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG9uU2VsZWN0aW9uKGV2ZW50LCBpbnB1dCwgcmVzdWx0c0xpc3QsIGZlZWRiYWNrLCByZXN1bHRzVmFsdWVzKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdmFyIGF1dG9Db21wbGV0ZVZpZXcgPSB7XHJcbiAgICBnZXRJbnB1dDogZ2V0SW5wdXQsXHJcbiAgICBjcmVhdGVSZXN1bHRzTGlzdDogY3JlYXRlUmVzdWx0c0xpc3QsXHJcbiAgICBoaWdobGlnaHQ6IGhpZ2hsaWdodCxcclxuICAgIGFkZFJlc3VsdHNUb0xpc3Q6IGFkZFJlc3VsdHNUb0xpc3QsXHJcbiAgICBuYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uLFxyXG4gICAgY2xlYXJSZXN1bHRzOiBjbGVhclJlc3VsdHNcclxuICB9O1xyXG5cclxuICB2YXIgQ3VzdG9tRXZlbnRQb2x5ZmlsbCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50UG9seWZpbGwoZXZlbnQsIHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcclxuICAgICAgYnViYmxlczogZmFsc2UsXHJcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICBkZXRhaWw6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xyXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclxuICAgIHJldHVybiBldnQ7XHJcbiAgfTtcclxuICBDdXN0b21FdmVudFBvbHlmaWxsLnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XHJcbiAgdmFyIEN1c3RvbUV2ZW50V3JhcHBlciA9IHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiAmJiB3aW5kb3cuQ3VzdG9tRXZlbnQgfHwgQ3VzdG9tRXZlbnRQb2x5ZmlsbDtcclxuICB2YXIgaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGwgPSBmdW5jdGlvbiBpbml0RWxlbWVudENsb3Nlc3RQb2x5ZmlsbCgpIHtcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xyXG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgfVxyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XHJcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHZhciBlbCA9IHRoaXM7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgaWYgKGVsLm1hdGNoZXMocykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdmFyIFBvbHlmaWxsID0ge1xyXG4gICAgQ3VzdG9tRXZlbnRXcmFwcGVyOiBDdXN0b21FdmVudFdyYXBwZXIsXHJcbiAgICBpbml0RWxlbWVudENsb3Nlc3RQb2x5ZmlsbDogaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGxcclxuICB9O1xyXG5cclxuICB2YXIgYXV0b0NvbXBsZXRlID1cclxuICBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBhdXRvQ29tcGxldGUoY29uZmlnKSB7XHJcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhdXRvQ29tcGxldGUpO1xyXG4gICAgICB2YXIgX2NvbmZpZyRzZWxlY3RvciA9IGNvbmZpZy5zZWxlY3RvcixcclxuICAgICAgICAgIHNlbGVjdG9yID0gX2NvbmZpZyRzZWxlY3RvciA9PT0gdm9pZCAwID8gXCIjYXV0b0NvbXBsZXRlXCIgOiBfY29uZmlnJHNlbGVjdG9yLFxyXG4gICAgICAgICAgX2NvbmZpZyRkYXRhID0gY29uZmlnLmRhdGEsXHJcbiAgICAgICAgICBrZXkgPSBfY29uZmlnJGRhdGEua2V5LFxyXG4gICAgICAgICAgX3NyYyA9IF9jb25maWckZGF0YS5zcmMsXHJcbiAgICAgICAgICBfY29uZmlnJGRhdGEkY2FjaGUgPSBfY29uZmlnJGRhdGEuY2FjaGUsXHJcbiAgICAgICAgICBjYWNoZSA9IF9jb25maWckZGF0YSRjYWNoZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jb25maWckZGF0YSRjYWNoZSxcclxuICAgICAgICAgIHF1ZXJ5ID0gY29uZmlnLnF1ZXJ5LFxyXG4gICAgICAgICAgX2NvbmZpZyR0cmlnZ2VyID0gY29uZmlnLnRyaWdnZXI7XHJcbiAgICAgIF9jb25maWckdHJpZ2dlciA9IF9jb25maWckdHJpZ2dlciA9PT0gdm9pZCAwID8ge30gOiBfY29uZmlnJHRyaWdnZXI7XHJcbiAgICAgIHZhciBfY29uZmlnJHRyaWdnZXIkZXZlbnQgPSBfY29uZmlnJHRyaWdnZXIuZXZlbnQsXHJcbiAgICAgICAgICBldmVudCA9IF9jb25maWckdHJpZ2dlciRldmVudCA9PT0gdm9pZCAwID8gW1wiaW5wdXRcIl0gOiBfY29uZmlnJHRyaWdnZXIkZXZlbnQsXHJcbiAgICAgICAgICBfY29uZmlnJHRyaWdnZXIkY29uZGkgPSBfY29uZmlnJHRyaWdnZXIuY29uZGl0aW9uLFxyXG4gICAgICAgICAgY29uZGl0aW9uID0gX2NvbmZpZyR0cmlnZ2VyJGNvbmRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckdHJpZ2dlciRjb25kaSxcclxuICAgICAgICAgIF9jb25maWckc2VhcmNoRW5naW5lID0gY29uZmlnLnNlYXJjaEVuZ2luZSxcclxuICAgICAgICAgIHNlYXJjaEVuZ2luZSA9IF9jb25maWckc2VhcmNoRW5naW5lID09PSB2b2lkIDAgPyBcInN0cmljdFwiIDogX2NvbmZpZyRzZWFyY2hFbmdpbmUsXHJcbiAgICAgICAgICBfY29uZmlnJHRocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQsXHJcbiAgICAgICAgICB0aHJlc2hvbGQgPSBfY29uZmlnJHRocmVzaG9sZCA9PT0gdm9pZCAwID8gMCA6IF9jb25maWckdGhyZXNob2xkLFxyXG4gICAgICAgICAgX2NvbmZpZyRkZWJvdW5jZSA9IGNvbmZpZy5kZWJvdW5jZSxcclxuICAgICAgICAgIGRlYm91bmNlID0gX2NvbmZpZyRkZWJvdW5jZSA9PT0gdm9pZCAwID8gMCA6IF9jb25maWckZGVib3VuY2UsXHJcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdHNMaXN0ID0gY29uZmlnLnJlc3VsdHNMaXN0O1xyXG4gICAgICBfY29uZmlnJHJlc3VsdHNMaXN0ID0gX2NvbmZpZyRyZXN1bHRzTGlzdCA9PT0gdm9pZCAwID8ge30gOiBfY29uZmlnJHJlc3VsdHNMaXN0O1xyXG4gICAgICB2YXIgX2NvbmZpZyRyZXN1bHRzTGlzdCRyID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5yZW5kZXIsXHJcbiAgICAgICAgICByZW5kZXIgPSBfY29uZmlnJHJlc3VsdHNMaXN0JHIgPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRyLFxyXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCRjID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5jb250YWluZXIsXHJcbiAgICAgICAgICBjb250YWluZXIgPSBfY29uZmlnJHJlc3VsdHNMaXN0JGMgPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRjLFxyXG4gICAgICAgICAgZGVzdGluYXRpb24gPSBfY29uZmlnJHJlc3VsdHNMaXN0LmRlc3RpbmF0aW9uLFxyXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCRwID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5wb3NpdGlvbixcclxuICAgICAgICAgIHBvc2l0aW9uID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRwID09PSB2b2lkIDAgPyBcImFmdGVyZW5kXCIgOiBfY29uZmlnJHJlc3VsdHNMaXN0JHAsXHJcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdHNMaXN0JGUgPSBfY29uZmlnJHJlc3VsdHNMaXN0LmVsZW1lbnQsXHJcbiAgICAgICAgICByZXN1bHRzTGlzdEVsZW1lbnQgPSBfY29uZmlnJHJlc3VsdHNMaXN0JGUgPT09IHZvaWQgMCA/IFwidWxcIiA6IF9jb25maWckcmVzdWx0c0xpc3QkZSxcclxuICAgICAgICAgIF9jb25maWckcmVzdWx0c0xpc3QkbiA9IF9jb25maWckcmVzdWx0c0xpc3QubmF2aWdhdGlvbixcclxuICAgICAgICAgIG5hdmlnYXRpb24gPSBfY29uZmlnJHJlc3VsdHNMaXN0JG4gPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRuLFxyXG4gICAgICAgICAgX2NvbmZpZyRzb3J0ID0gY29uZmlnLnNvcnQsXHJcbiAgICAgICAgICBzb3J0ID0gX2NvbmZpZyRzb3J0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckc29ydCxcclxuICAgICAgICAgIHBsYWNlSG9sZGVyID0gY29uZmlnLnBsYWNlSG9sZGVyLFxyXG4gICAgICAgICAgX2NvbmZpZyRtYXhSZXN1bHRzID0gY29uZmlnLm1heFJlc3VsdHMsXHJcbiAgICAgICAgICBtYXhSZXN1bHRzID0gX2NvbmZpZyRtYXhSZXN1bHRzID09PSB2b2lkIDAgPyA1IDogX2NvbmZpZyRtYXhSZXN1bHRzLFxyXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRJdGVtID0gY29uZmlnLnJlc3VsdEl0ZW07XHJcbiAgICAgIF9jb25maWckcmVzdWx0SXRlbSA9IF9jb25maWckcmVzdWx0SXRlbSA9PT0gdm9pZCAwID8ge30gOiBfY29uZmlnJHJlc3VsdEl0ZW07XHJcbiAgICAgIHZhciBfY29uZmlnJHJlc3VsdEl0ZW0kY28gPSBfY29uZmlnJHJlc3VsdEl0ZW0uY29udGVudCxcclxuICAgICAgICAgIGNvbnRlbnQgPSBfY29uZmlnJHJlc3VsdEl0ZW0kY28gPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRJdGVtJGNvLFxyXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRJdGVtJGVsID0gX2NvbmZpZyRyZXN1bHRJdGVtLmVsZW1lbnQsXHJcbiAgICAgICAgICByZXN1bHRJdGVtRWxlbWVudCA9IF9jb25maWckcmVzdWx0SXRlbSRlbCA9PT0gdm9pZCAwID8gXCJsaVwiIDogX2NvbmZpZyRyZXN1bHRJdGVtJGVsLFxyXG4gICAgICAgICAgbm9SZXN1bHRzID0gY29uZmlnLm5vUmVzdWx0cyxcclxuICAgICAgICAgIF9jb25maWckaGlnaGxpZ2h0ID0gY29uZmlnLmhpZ2hsaWdodCxcclxuICAgICAgICAgIGhpZ2hsaWdodCA9IF9jb25maWckaGlnaGxpZ2h0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckaGlnaGxpZ2h0LFxyXG4gICAgICAgICAgb25TZWxlY3Rpb24gPSBjb25maWcub25TZWxlY3Rpb247XHJcbiAgICAgIHZhciByZXN1bHRzTGlzdFZpZXcgPSByZW5kZXIgPyBhdXRvQ29tcGxldGVWaWV3LmNyZWF0ZVJlc3VsdHNMaXN0KHtcclxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24gfHwgYXV0b0NvbXBsZXRlVmlldy5nZXRJbnB1dChzZWxlY3RvciksXHJcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgIGVsZW1lbnQ6IHJlc3VsdHNMaXN0RWxlbWVudFxyXG4gICAgICB9KSA6IG51bGw7XHJcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgIHNyYzogZnVuY3Rpb24gc3JjKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBfc3JjID09PSBcImZ1bmN0aW9uXCIgPyBfc3JjKCkgOiBfc3JjO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgY2FjaGU6IGNhY2hlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgICAgdGhpcy50cmlnZ2VyID0ge1xyXG4gICAgICAgIGV2ZW50OiBldmVudCxcclxuICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvblxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNlYXJjaEVuZ2luZSA9IHNlYXJjaEVuZ2luZSA9PT0gXCJsb29zZVwiID8gXCJsb29zZVwiIDogdHlwZW9mIHNlYXJjaEVuZ2luZSA9PT0gXCJmdW5jdGlvblwiID8gc2VhcmNoRW5naW5lIDogXCJzdHJpY3RcIjtcclxuICAgICAgdGhpcy50aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XHJcbiAgICAgIHRoaXMuZGVib3VuY2UgPSBkZWJvdW5jZTtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdCA9IHtcclxuICAgICAgICByZW5kZXI6IHJlbmRlcixcclxuICAgICAgICB2aWV3OiByZXN1bHRzTGlzdFZpZXcsXHJcbiAgICAgICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvblxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNvcnQgPSBzb3J0O1xyXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyID0gcGxhY2VIb2xkZXI7XHJcbiAgICAgIHRoaXMubWF4UmVzdWx0cyA9IG1heFJlc3VsdHM7XHJcbiAgICAgIHRoaXMucmVzdWx0SXRlbSA9IHtcclxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgIGVsZW1lbnQ6IHJlc3VsdEl0ZW1FbGVtZW50XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubm9SZXN1bHRzID0gbm9SZXN1bHRzO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcclxuICAgICAgdGhpcy5vblNlbGVjdGlvbiA9IG9uU2VsZWN0aW9uO1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVDbGFzcyhhdXRvQ29tcGxldGUsIFt7XHJcbiAgICAgIGtleTogXCJzZWFyY2hcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaChxdWVyeSwgcmVjb3JkKSB7XHJcbiAgICAgICAgdmFyIHJlY29yZExvd2VyQ2FzZSA9IHJlY29yZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEVuZ2luZSA9PT0gXCJsb29zZVwiKSB7XHJcbiAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoLyAvZywgXCJcIik7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBbXTtcclxuICAgICAgICAgIHZhciBzZWFyY2hQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICBmb3IgKHZhciBudW1iZXIgPSAwOyBudW1iZXIgPCByZWNvcmRMb3dlckNhc2UubGVuZ3RoOyBudW1iZXIrKykge1xyXG4gICAgICAgICAgICB2YXIgcmVjb3JkQ2hhciA9IHJlY29yZFtudW1iZXJdO1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUG9zaXRpb24gPCBxdWVyeS5sZW5ndGggJiYgcmVjb3JkTG93ZXJDYXNlW251bWJlcl0gPT09IHF1ZXJ5W3NlYXJjaFBvc2l0aW9uXSkge1xyXG4gICAgICAgICAgICAgIHJlY29yZENoYXIgPSB0aGlzLmhpZ2hsaWdodCA/IGF1dG9Db21wbGV0ZVZpZXcuaGlnaGxpZ2h0KHJlY29yZENoYXIpIDogcmVjb3JkQ2hhcjtcclxuICAgICAgICAgICAgICBzZWFyY2hQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hdGNoLnB1c2gocmVjb3JkQ2hhcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc2VhcmNoUG9zaXRpb24gIT09IHF1ZXJ5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbWF0Y2guam9pbihcIlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHJlY29yZExvd2VyQ2FzZS5pbmNsdWRlcyhxdWVyeSkpIHtcclxuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KHF1ZXJ5KSwgXCJpXCIpO1xyXG4gICAgICAgICAgICBxdWVyeSA9IHBhdHRlcm4uZXhlYyhyZWNvcmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHQgPyByZWNvcmQucmVwbGFjZShxdWVyeSwgYXV0b0NvbXBsZXRlVmlldy5oaWdobGlnaHQocXVlcnkpKSA6IHJlY29yZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAga2V5OiBcImxpc3RNYXRjaGVkUmVzdWx0c1wiLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdE1hdGNoZWRSZXN1bHRzKGRhdGEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgdmFyIHJlc0xpc3QgPSBbXTtcclxuICAgICAgICAgIGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyZWNvcmQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goa2V5KSB7XHJcbiAgICAgICAgICAgICAgdmFyIHJlY29yZFZhbHVlID0ga2V5ID8gcmVjb3JkW2tleV0gOiByZWNvcmQ7XHJcbiAgICAgICAgICAgICAgaWYgKHJlY29yZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSB0eXBlb2YgX3RoaXMuc2VhcmNoRW5naW5lID09PSBcImZ1bmN0aW9uXCIgPyBfdGhpcy5zZWFyY2hFbmdpbmUoX3RoaXMucXVlcnlWYWx1ZSwgcmVjb3JkVmFsdWUpIDogX3RoaXMuc2VhcmNoKF90aGlzLnF1ZXJ5VmFsdWUsIHJlY29yZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmRcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoICYmICFrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmRcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZGF0YS5rZXkpIHtcclxuICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfdGhpcy5kYXRhLmtleVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9zdGVwLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICBzZWFyY2goa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xyXG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2VhcmNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIGxpc3QgPSBfdGhpcy5zb3J0ID8gcmVzTGlzdC5zb3J0KF90aGlzLnNvcnQpLnNsaWNlKDAsIF90aGlzLm1heFJlc3VsdHMpIDogcmVzTGlzdC5zbGljZSgwLCBfdGhpcy5tYXhSZXN1bHRzKTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHtcclxuICAgICAgICAgICAgbWF0Y2hlczogcmVzTGlzdC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxpc3Q6IGxpc3RcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogXCJpZ25pdGVcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlnbml0ZSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuICAgICAgICB2YXIgaW5wdXQgPSBhdXRvQ29tcGxldGVWaWV3LmdldElucHV0KHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYWNlSG9sZGVyKSB7XHJcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCB0aGlzLnBsYWNlSG9sZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlYm91bmNlID0gZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcclxuICAgICAgICAgIHZhciBpbkRlYm91bmNlO1xyXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGluRGVib3VuY2UpO1xyXG4gICAgICAgICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZXhlYyA9IGZ1bmN0aW9uIGV4ZWMoZXZlbnQpIHtcclxuICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGlucHV0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCA/IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkgOiBpbnB1dC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIHZhciBxdWVyeVZhbHVlID0gX3RoaXMyLnF1ZXJ5VmFsdWUgPSBfdGhpczIucXVlcnkgJiYgX3RoaXMyLnF1ZXJ5Lm1hbmlwdWxhdGUgPyBfdGhpczIucXVlcnkubWFuaXB1bGF0ZShpbnB1dFZhbHVlKSA6IGlucHV0VmFsdWU7XHJcbiAgICAgICAgICB2YXIgcmVuZGVyUmVzdWx0c0xpc3QgPSBfdGhpczIucmVzdWx0c0xpc3QucmVuZGVyO1xyXG4gICAgICAgICAgdmFyIHRyaWdnZXJDb25kaXRpb24gPSBfdGhpczIudHJpZ2dlci5jb25kaXRpb24gPyBfdGhpczIudHJpZ2dlci5jb25kaXRpb24ocXVlcnlWYWx1ZSkgOiBxdWVyeVZhbHVlLmxlbmd0aCA+IF90aGlzMi50aHJlc2hvbGQgJiYgcXVlcnlWYWx1ZS5yZXBsYWNlKC8gL2csIFwiXCIpLmxlbmd0aDtcclxuICAgICAgICAgIHZhciBldmVudEVtaXR0ZXIgPSBmdW5jdGlvbiBldmVudEVtaXR0ZXIoZXZlbnQsIHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgUG9seWZpbGwuQ3VzdG9tRXZlbnRXcmFwcGVyKFwiYXV0b0NvbXBsZXRlXCIsIHtcclxuICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG1hdGNoZXM6IHJlc3VsdHMgPyByZXN1bHRzLm1hdGNoZXMgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0czogcmVzdWx0cyA/IHJlc3VsdHMubGlzdCA6IG51bGxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChyZW5kZXJSZXN1bHRzTGlzdCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0c0xpc3QgPSBfdGhpczIucmVzdWx0c0xpc3QudmlldztcclxuICAgICAgICAgICAgdmFyIGNsZWFyUmVzdWx0cyA9IGF1dG9Db21wbGV0ZVZpZXcuY2xlYXJSZXN1bHRzKHJlc3VsdHNMaXN0KTtcclxuICAgICAgICAgICAgaWYgKHRyaWdnZXJDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICBfdGhpczIubGlzdE1hdGNoZWRSZXN1bHRzKF90aGlzMi5kYXRhU3RyZWFtLCBldmVudCkudGhlbihmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyKGV2ZW50LCBsaXN0KTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpczIucmVzdWx0c0xpc3QucmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxpc3QubGVuZ3RoID09PSAwICYmIF90aGlzMi5ub1Jlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpczIubm9SZXN1bHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlVmlldy5hZGRSZXN1bHRzVG9MaXN0KHJlc3VsdHNMaXN0LCBsaXN0Lmxpc3QsIF90aGlzMi5yZXN1bHRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLm9uU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVzdWx0c0xpc3QubmF2aWdhdGlvbiA/IF90aGlzMi5yZXN1bHRzTGlzdC5uYXZpZ2F0aW9uKGV2ZW50LCBpbnB1dCwgcmVzdWx0c0xpc3QsIF90aGlzMi5vblNlbGVjdGlvbiwgbGlzdCkgOiBhdXRvQ29tcGxldGVWaWV3Lm5hdmlnYXRpb24oaW5wdXQsIHJlc3VsdHNMaXN0LCBfdGhpczIub25TZWxlY3Rpb24sIGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGV2ZW50RW1pdHRlcihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlbmRlclJlc3VsdHNMaXN0ICYmIHRyaWdnZXJDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgX3RoaXMyLmxpc3RNYXRjaGVkUmVzdWx0cyhfdGhpczIuZGF0YVN0cmVhbSwgZXZlbnQpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICAgICAgICBldmVudEVtaXR0ZXIoZXZlbnQsIGxpc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBydW4gPSBmdW5jdGlvbiBydW4oZXZlbnQpIHtcclxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZShfdGhpczIuZGF0YS5jYWNoZSA/IF90aGlzMi5kYXRhU3RyZWFtIDogX3RoaXMyLmRhdGEuc3JjKCkpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgX3RoaXMyLmRhdGFTdHJlYW0gPSBkYXRhO1xyXG4gICAgICAgICAgICBleGVjKGV2ZW50KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyLmV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGRlYm91bmNlKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcnVuKGV2ZW50KTtcclxuICAgICAgICAgIH0sIF90aGlzMi5kZWJvdW5jZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogXCJpbml0XCIsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FjaGUpIHtcclxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh0aGlzLmRhdGEuc3JjKCkpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgX3RoaXMzLmRhdGFTdHJlYW0gPSBkYXRhO1xyXG4gICAgICAgICAgICBfdGhpczMuaWduaXRlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pZ25pdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9seWZpbGwuaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgfV0pO1xyXG4gICAgcmV0dXJuIGF1dG9Db21wbGV0ZTtcclxuICB9KCk7XHJcblxyXG4gIHJldHVybiBhdXRvQ29tcGxldGU7XHJcblxyXG59KSkpO1xyXG4iLCIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcclxuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XHJcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXHJcbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcclxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xyXG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XHJcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcclxuXHJcbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqW2tleV07XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxyXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XHJcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cclxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xyXG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcclxuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xyXG5cclxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcclxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cclxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xyXG4gIH1cclxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xyXG5cclxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cclxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcclxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcclxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXHJcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxyXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcclxuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxyXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxyXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcclxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXHJcbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XHJcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XHJcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcclxuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xyXG5cclxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXHJcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxyXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XHJcblxyXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxyXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxyXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXHJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cclxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cclxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XHJcblxyXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcclxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxyXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xyXG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcclxuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XHJcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXHJcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxyXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XHJcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxyXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxyXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcclxuICB9XHJcblxyXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XHJcbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcclxuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxyXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXHJcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcclxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxyXG4gICk7XHJcblxyXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXHJcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cclxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XHJcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xyXG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIGN0b3JcclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxyXG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cclxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXHJcbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XHJcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcclxuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XHJcbiAgICByZXR1cm4gZ2VuRnVuO1xyXG4gIH07XHJcblxyXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xyXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XHJcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xyXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXHJcbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xyXG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XHJcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xyXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXHJcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cclxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcclxuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cclxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xyXG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cclxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXHJcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXHJcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxyXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXHJcbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXHJcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cclxuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XHJcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcclxuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXHJcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcclxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXHJcbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcclxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXHJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXHJcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xyXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXHJcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cclxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xyXG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xyXG5cclxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXHJcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXHJcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXHJcbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xyXG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcclxuXHJcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxyXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcclxuICAgICAgUHJvbWlzZUltcGxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxyXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxyXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcclxuICAgICAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcclxuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xyXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xyXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgdGhyb3cgYXJnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcclxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXHJcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xyXG5cclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xyXG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XHJcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xyXG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXHJcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xyXG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcclxuXHJcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxyXG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcclxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxyXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XHJcblxyXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXHJcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xyXG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxyXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cclxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxyXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcclxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcclxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cclxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xyXG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xyXG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuXHJcbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cclxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcclxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cclxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cclxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXHJcbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xyXG5cclxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XHJcblxyXG4gICAgaWYgKCEgaW5mbykge1xyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5mby5kb25lKSB7XHJcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XHJcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXHJcbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xyXG5cclxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxyXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xyXG5cclxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXHJcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcclxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cclxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXHJcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXHJcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cclxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cclxuICAgICAgcmV0dXJuIGluZm87XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcclxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXHJcbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcclxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXHJcbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcclxuXHJcbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XHJcblxyXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXHJcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcclxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxyXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxyXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XHJcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xyXG5cclxuICAgIGlmICgxIGluIGxvY3MpIHtcclxuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgyIGluIGxvY3MpIHtcclxuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XHJcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XHJcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcclxuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcclxuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xyXG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxyXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxyXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxyXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcclxuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcclxuICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcclxuICAgIHZhciBrZXlzID0gW107XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAga2V5cy5yZXZlcnNlKCk7XHJcblxyXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcclxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcclxuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XHJcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXHJcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXHJcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxyXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gbmV4dDtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XHJcbiAgICBpZiAoaXRlcmFibGUpIHtcclxuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xyXG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcclxuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xyXG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcclxuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxyXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xyXG4gIH1cclxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcclxuXHJcbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcclxuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xyXG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcclxuICAgICAgdGhpcy5wcmV2ID0gMDtcclxuICAgICAgdGhpcy5uZXh0ID0gMDtcclxuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcclxuXHJcbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xyXG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcclxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcclxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxyXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcclxuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xyXG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xyXG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5kb25lKSB7XHJcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xyXG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XHJcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xyXG5cclxuICAgICAgICBpZiAoY2F1Z2h0KSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxyXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cclxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XHJcblxyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XHJcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxyXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXHJcbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XHJcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcclxuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcclxuXHJcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcclxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcclxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcclxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXHJcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxyXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxyXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cclxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcclxuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xyXG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xyXG5cclxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XHJcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcclxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcclxuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xyXG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XHJcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcclxuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xyXG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XHJcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcclxuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXHJcbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xyXG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xyXG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxyXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXHJcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xyXG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XHJcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxyXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXHJcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXHJcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXHJcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cclxuICByZXR1cm4gZXhwb3J0cztcclxuXHJcbn0oXHJcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcclxuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxyXG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcclxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxyXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XHJcbikpO1xyXG5cclxudHJ5IHtcclxuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xyXG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xyXG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXHJcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XHJcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXHJcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXHJcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXHJcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcclxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxyXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxyXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxyXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XHJcbn1cclxuIiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgdmFyIHJvdXRpbmcgPSBmYWN0b3J5KCk7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbXSwgcm91dGluZy5Sb3V0aW5nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAgLy8gbGlrZSBOb2RlLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJvdXRpbmcuUm91dGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgICByb290LlJvdXRpbmcgPSByb3V0aW5nLlJvdXRpbmc7XG4gICAgICAgIHJvb3QuZm9zID0ge1xuICAgICAgICAgICAgUm91dGVyOiByb3V0aW5nLlJvdXRlclxuICAgICAgICB9O1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoaXMgZmlsZSBkZWZpbmVzIHRoZSBSb3V0ZXIgY2xhc3MuXG4gKlxuICogWW91IGNhbiBjb21waWxlIHRoaXMgZmlsZSBieSBydW5uaW5nIHRoZSBmb2xsb3dpbmcgY29tbWFuZCBmcm9tIHRoZSBSZXNvdXJjZXMgZm9sZGVyOlxuICpcbiAqICAgIG5wbSBpbnN0YWxsICYmIG5wbSBydW4gYnVpbGRcbiAqL1xuXG4vKipcbiAqIENsYXNzIFJvdXRlclxuICovXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7Um91dGVyLkNvbnRleHQ9fSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPj19IHJvdXRlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJvdXRlcihjb250ZXh0LCByb3V0ZXMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcik7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0XyA9IGNvbnRleHQgfHwgeyBiYXNlX3VybDogJycsIHByZWZpeDogJycsIGhvc3Q6ICcnLCBwb3J0OiAnJywgc2NoZW1lOiAnJywgbG9jYWxlOiAnJyB9O1xuICAgICAgICB0aGlzLnNldFJvdXRlcyhyb3V0ZXMgfHwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgaW5zdGFuY2UuXG4gICAgICogQHJldHVybnMge1JvdXRlcn1cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFJvdXRlciwgW3tcbiAgICAgICAga2V5OiAnc2V0Um91dGluZ0RhdGEnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgZGF0YSBmb3IgdGhlIGN1cnJlbnQgaW5zdGFuY2VcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSb3V0aW5nRGF0YShkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJhc2VVcmwoZGF0YVsnYmFzZV91cmwnXSk7XG4gICAgICAgICAgICB0aGlzLnNldFJvdXRlcyhkYXRhWydyb3V0ZXMnXSk7XG5cbiAgICAgICAgICAgIGlmICgncHJlZml4JyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmVmaXgoZGF0YVsncHJlZml4J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdwb3J0JyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3J0KGRhdGFbJ3BvcnQnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2xvY2FsZScgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxlKGRhdGFbJ2xvY2FsZSddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRIb3N0KGRhdGFbJ2hvc3QnXSk7XG4gICAgICAgICAgICB0aGlzLnNldFNjaGVtZShkYXRhWydzY2hlbWUnXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPn0gcm91dGVzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRSb3V0ZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um91dGVzKHJvdXRlcykge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXNfID0gT2JqZWN0LmZyZWV6ZShyb3V0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+fSByb3V0ZXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFJvdXRlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3V0ZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNfO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRCYXNlVXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEJhc2VVcmwoYmFzZVVybCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5iYXNlX3VybCA9IGJhc2VVcmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QmFzZVVybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCYXNlVXJsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0UHJlZml4JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFByZWZpeChwcmVmaXgpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucHJlZml4ID0gcHJlZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWVcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFNjaGVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY2hlbWUoc2NoZW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnNjaGVtZSA9IHNjaGVtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTY2hlbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2NoZW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRIb3N0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEhvc3QoaG9zdCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5ob3N0ID0gaG9zdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRIb3N0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhvc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0XG4gICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFBvcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9ydChwb3J0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnBvcnQgPSBwb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFBvcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLnBvcnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldExvY2FsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldExvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldExvY2FsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2J1aWxkUXVlcnlQYXJhbXMnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkcyBxdWVyeSBzdHJpbmcgcGFyYW1zIGFkZGVkIHRvIGEgVVJMLlxuICAgICAgICAgKiBQb3J0IG9mIGpRdWVyeSdzICQucGFyYW0oKSBmdW5jdGlvbiwgc28gY3JlZGl0IGlzIGR1ZSB0aGVyZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IHBhcmFtc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZGRcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCwgcGFyYW1zLCBhZGQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBuYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHJicmFja2V0ID0gbmV3IFJlZ0V4cCgvXFxbXFxdJC8pO1xuXG4gICAgICAgICAgICBpZiAocGFyYW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYnJhY2tldC50ZXN0KHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCArICdbJyArICgodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnID8gaSA6ICcnKSArICddJywgdmFsLCBhZGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXJhbXMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG5hbWUgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXggKyAnWycgKyBuYW1lICsgJ10nLCBwYXJhbXNbbmFtZV0sIGFkZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGQocHJlZml4LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgYSByYXcgcm91dGUgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIHtSb3V0ZXIuUm91dGV9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSb3V0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3V0ZShuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ZWROYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lO1xuICAgICAgICAgICAgdmFyIHNmNDFpMThuTmFtZSA9IG5hbWUgKyAnLicgKyB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgICAgIHZhciBwcmVmaXhlZFNmNDFpMThuTmFtZSA9IHRoaXMuY29udGV4dF8ucHJlZml4ICsgbmFtZSArICcuJyArIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICAgICAgdmFyIHZhcmlhbnRzID0gW3ByZWZpeGVkTmFtZSwgc2Y0MWkxOG5OYW1lLCBwcmVmaXhlZFNmNDFpMThuTmFtZSwgbmFtZV07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdmFyaWFudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNbaV0gaW4gdGhpcy5yb3V0ZXNfKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc19bdmFyaWFudHNbaV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgdGhlIFVSTCBmb3IgYSByb3V0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gb3B0X3BhcmFtc1xuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFic29sdXRlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dlbmVyYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlKG5hbWUsIG9wdF9wYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBhYnNvbHV0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciByb3V0ZSA9IHRoaXMuZ2V0Um91dGUobmFtZSksXG4gICAgICAgICAgICAgICAgcGFyYW1zID0gb3B0X3BhcmFtcyB8fCB7fSxcbiAgICAgICAgICAgICAgICB1bnVzZWRQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgcGFyYW1zKSxcbiAgICAgICAgICAgICAgICB1cmwgPSAnJyxcbiAgICAgICAgICAgICAgICBvcHRpb25hbCA9IHRydWUsXG4gICAgICAgICAgICAgICAgaG9zdCA9ICcnLFxuICAgICAgICAgICAgICAgIHBvcnQgPSB0eXBlb2YgdGhpcy5nZXRQb3J0KCkgPT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLmdldFBvcnQoKSA9PT0gbnVsbCA/ICcnIDogdGhpcy5nZXRQb3J0KCk7XG5cbiAgICAgICAgICAgIHJvdXRlLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIGlmICgndGV4dCcgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFJvdXRlci5lbmNvZGVQYXRoQ29tcG9uZW50KHRva2VuWzFdKSArIHVybDtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNEZWZhdWx0ID0gcm91dGUuZGVmYXVsdHMgJiYgdG9rZW5bM10gaW4gcm91dGUuZGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxzZSA9PT0gb3B0aW9uYWwgfHwgIWhhc0RlZmF1bHQgfHwgdG9rZW5bM10gaW4gcGFyYW1zICYmIHBhcmFtc1t0b2tlblszXV0gIT0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblszXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJyArIG5hbWUgKyAnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicgKyB0b2tlblszXSArICdcIi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVtcHR5ID0gdHJ1ZSA9PT0gdmFsdWUgfHwgZmFsc2UgPT09IHZhbHVlIHx8ICcnID09PSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbXB0eSB8fCAhb3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5jb2RlZFZhbHVlID0gUm91dGVyLmVuY29kZVBhdGhDb21wb25lbnQodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdudWxsJyA9PT0gZW5jb2RlZFZhbHVlICYmIG51bGwgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRva2VuWzFdICsgZW5jb2RlZFZhbHVlICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0RlZmF1bHQgJiYgdG9rZW5bM10gaW4gdW51c2VkUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyArIHRva2VuWzBdICsgJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHVybCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnLyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvdXRlLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3RleHQnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICBob3N0ID0gdG9rZW5bMV0gKyBob3N0O1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuZGVmYXVsdHMgJiYgdG9rZW5bM10gaW4gcm91dGUuZGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaG9zdCA9IHRva2VuWzFdICsgdmFsdWUgKyBob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gRm9vLWJhciFcbiAgICAgICAgICAgIHVybCA9IHRoaXMuY29udGV4dF8uYmFzZV91cmwgKyB1cmw7XG5cbiAgICAgICAgICAgIGlmIChyb3V0ZS5yZXF1aXJlbWVudHMgJiYgXCJfc2NoZW1lXCIgaW4gcm91dGUucmVxdWlyZW1lbnRzICYmIHRoaXMuZ2V0U2NoZW1lKCkgIT0gcm91dGUucmVxdWlyZW1lbnRzW1wiX3NjaGVtZVwiXSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SG9zdCA9IGhvc3QgfHwgdGhpcy5nZXRIb3N0KCk7XG5cbiAgICAgICAgICAgICAgICB1cmwgPSByb3V0ZS5yZXF1aXJlbWVudHNbXCJfc2NoZW1lXCJdICsgXCI6Ly9cIiArIGN1cnJlbnRIb3N0ICsgKGN1cnJlbnRIb3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiByb3V0ZS5zY2hlbWVzICYmIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiByb3V0ZS5zY2hlbWVzWzBdICYmIHRoaXMuZ2V0U2NoZW1lKCkgIT09IHJvdXRlLnNjaGVtZXNbMF0pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2N1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcblxuICAgICAgICAgICAgICAgIHVybCA9IHJvdXRlLnNjaGVtZXNbMF0gKyBcIjovL1wiICsgX2N1cnJlbnRIb3N0ICsgKF9jdXJyZW50SG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3N0ICYmIHRoaXMuZ2V0SG9zdCgpICE9PSBob3N0ICsgKGhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0U2NoZW1lKCkgKyBcIjovL1wiICsgaG9zdCArIChob3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFic29sdXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRTY2hlbWUoKSArIFwiOi8vXCIgKyB0aGlzLmdldEhvc3QoKSArICh0aGlzLmdldEhvc3QoKS5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModW51c2VkUGFyYW1zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZWZpeCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgYWRkID0gZnVuY3Rpb24gYWRkKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGNhbGwgaXQgYW5kIGFzc2lnbiBpdCdzIHJldHVybiB2YWx1ZSBhcyB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKCkgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgbnVsbCB0byBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMucHVzaChSb3V0ZXIuZW5jb2RlUXVlcnlDb21wb25lbnQoa2V5KSArICc9JyArIFJvdXRlci5lbmNvZGVRdWVyeUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHByZWZpeCBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCwgdW51c2VkUGFyYW1zW3ByZWZpeF0sIGFkZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgcXVlcnlQYXJhbXMuam9pbignJicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHN0cmluZyBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnZ2V0SW5zdGFuY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWd1cmVzIHRoZSBjdXJyZW50IFJvdXRlciBpbnN0YW5jZSB3aXRoIHRoZSBwcm92aWRlZCBkYXRhLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0RGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciByb3V0ZXIgPSBSb3V0ZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICAgICAgcm91dGVyLnNldFJvdXRpbmdEYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjdXN0b21FbmNvZGVVUklDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lMkYvZywgJy8nKS5yZXBsYWNlKC8lNDAvZywgJ0AnKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMjEvZywgJyEnKS5yZXBsYWNlKC8lM0IvZywgJzsnKS5yZXBsYWNlKC8lMkMvZywgJywnKS5yZXBsYWNlKC8lMkEvZywgJyonKS5yZXBsYWNlKC9cXCgvZywgJyUyOCcpLnJlcGxhY2UoL1xcKS9nLCAnJTI5JykucmVwbGFjZSgvJy9nLCAnJTI3Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gcGF0aCBwcm9wZXJseSBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuY29kZVBhdGhDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5jb2RlUGF0aENvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUzRC9nLCAnPScpLnJlcGxhY2UoLyUyQi9nLCAnKycpLnJlcGxhY2UoLyUyMS9nLCAnIScpLnJlcGxhY2UoLyU3Qy9nLCAnfCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtZXRlciBvciB2YWx1ZSBwcm9wZXJseSBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2VuY29kZVF1ZXJ5Q29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5Q29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTNGL2csICc/Jyk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUm91dGVyO1xufSgpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgICAgdG9rZW5zOiAoQXJyYXkuPEFycmF5LjxzdHJpbmc+PiksXG4gKiAgICAgZGVmYXVsdHM6IChPYmplY3QuPHN0cmluZywgc3RyaW5nPiksXG4gKiAgICAgcmVxdWlyZW1lbnRzOiBPYmplY3QsXG4gKiAgICAgaG9zdHRva2VuczogKEFycmF5LjxzdHJpbmc+KVxuICogfX1cbiAqL1xuXG5cblJvdXRlci5Sb3V0ZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICAgIGJhc2VfdXJsOiAoc3RyaW5nKVxuICogfX1cbiAqL1xuUm91dGVyLkNvbnRleHQ7XG5cbi8qKlxuICogUm91dGVyIHNpbmdsZXRvbi5cbiAqIEBjb25zdFxuICogQHR5cGUge1JvdXRlcn1cbiAqL1xudmFyIFJvdXRpbmcgPSBuZXcgUm91dGVyKCk7XG5cbiAgICByZXR1cm4geyBSb3V0ZXI6IFJvdXRlciwgUm91dGluZzogUm91dGluZyB9O1xufSkpOyJdLCJzb3VyY2VSb290IjoiIn0=