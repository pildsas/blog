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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/form_post.js");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybV9wb3N0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGFyZWtyYWFmYXQvYXV0b2NvbXBsZXRlLmpzL2Rpc3QvanMvYXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUYWciLCJuYW1lIiwidGFnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaG10bCIsImlubmVySFRNTCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZVRhZyIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJhZGRUYWciLCJ0YWdzX3NlbGVjdGVkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImdldFRhZ3MiLCJ0YWdzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hbWVzIiwiZm9yRWFjaCIsInRhZ19uYW1lIiwicHVzaCIsInRvZ2dsZVRhZ3MiLCJvcHRpb25zIiwiaGVscGVycyIsImluaXQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImFkZENsYXNzIiwidG9nZ2xlIiwiZ2V0Q3VycmVudFRhZyIsImN1cnJlbnRfdGFnIiwiZ2V0QXR0cmlidXRlIiwic2V0VGFnIiwicHJldmlvdXNfdGFnIiwiZ2V0VGFnIiwiY2IiLCJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsInNldFJvdXRpbmdEYXRhIiwiYXV0b0NvbXBsZXRlIiwicmVuZGVyQXV0b0NvbXBsZXRlIiwiZGF0YSIsInNyYyIsInF1ZXJ5IiwidmFsdWUiLCJmZXRjaCIsImdlbmVyYXRlIiwic291cmNlIiwianNvbiIsImtleSIsImNhY2hlIiwicGxhY2VIb2xkZXIiLCJzZWxlY3RvciIsInRocmVzaG9sZCIsImRlYm91bmNlIiwicmVzdWx0c0xpc3QiLCJyZW5kZXIiLCJjb250YWluZXIiLCJzZXRBdHRyaWJ1dGUiLCJkZXN0aW5hdGlvbiIsInBvc2l0aW9uIiwiZWxlbWVudCIsInJlc3VsdEl0ZW0iLCJjb250ZW50IiwibWF0Y2giLCJub1Jlc3VsdHMiLCJyZXN1bHQiLCJzcGFuIiwib25TZWxlY3Rpb24iLCJmZWVkYmFjayIsInNlbGVjdGlvbiIsIlNlYXJjaEJhciIsImFkZEV2IiwicmVzdWx0UG9zdCIsInBvc3RzX2RhdGEiLCJpdGVtIiwiaGlnaGxpZ2h0IiwiaHRtbCIsImZyb250X2NvdmVyX2xpbmsiLCJ0aXRsZSIsInJlc3VsdF9pdGVtIiwicmVkaXJlY3QiLCJpZCIsImF1dGhvciIsInJlc3VsdEF1dGhvciIsInByb2ZpbGVzX2RhdGEiLCJhdmF0YXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm5pY2tuYW1lIiwic3R5bGUiLCJkaXNwbGF5Iiwic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0YXJ0IiwiaW5kZXhPZiIsImVuZCIsImxlbmd0aCIsInN1YnN0ciIsInNsaWNlIiwiaGlnaGxpZ2h0ZWQiLCJyZXBsYWNlIiwic2VhcmNoX2lucHV0Iiwic2V0UG9zaXRpb24iLCJ0aHJvdHRsZSIsImxvY2F0aW9uIiwidG9wIiwibG9jIiwicG9zdCIsIndpbmRvdyIsImhyZWYiLCJwcm9maWxlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0Iiwib2JqIiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImdldEZvcm1hdHRlZERhdGUiLCJkYXRlIiwicHJlZm9tYXR0ZWREYXRlIiwiaGlkZVllYXIiLCJNT05USF9OQU1FUyIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidGltZUFnbyIsImRhdGVQYXJhbSIsIkRhdGUiLCJEQVlfSU5fTVMiLCJ0b2RheSIsInllc3RlcmRheSIsInNlY29uZHMiLCJNYXRoIiwicm91bmQiLCJpc1RvZGF5IiwidG9EYXRlU3RyaW5nIiwiaXNZZXN0ZXJkYXkiLCJpc1RoaXNZZWFyIiwiZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUiLCJjbGFzc25hbWUiLCJjb250YWlucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRBdHRyT3JOdWxsIiwiY2xhc3NsaXN0IiwiYXR0ciIsImN1cnJlbnRfZWxlbWVudCIsInNoaWZ0IiwiYXR0cmlidXRlIiwicmV0dXJuX3ZhbHVlIiwic2V0QXR0ck9yRmFsc2UiLCJsYXN0IiwiYXJyYXkiLCJnZXRQb3NpdGlvbiIsImxlZnQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiZ2V0UG9zaXRpb25zIiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYWRkRXZlbnQiLCJvYmplY3QiLCJ0eXBlIiwiY2FsbGJhY2siLCJhdHRhY2hFdmVudCIsImxpbWl0IiwiaW5UaHJvdHRsZSIsImNvbnRleHQiLCJ0aHJvdHRsZUxhc3QiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJub3ciLCJmYWRlT3V0IiwiZWwiLCJvcGFjaXR5IiwiZmFkZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZhZGVJbiIsInZhbCIsInBhcnNlRmxvYXQiLCJyb290IiwiZmFjdG9yeSIsInJvdXRpbmciLCJkZWZpbmUiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsImkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJSb3V0ZXIiLCJyb3V0ZXMiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiYmFzZVVybCIsImdldEJhc2VVcmwiLCJnZXRTY2hlbWUiLCJnZXRIb3N0IiwiZ2V0UG9ydCIsImdldExvY2FsZSIsImJ1aWxkUXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJfdGhpcyIsInJicmFja2V0IiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJwcmVmaXhlZE5hbWUiLCJzZjQxaTE4bk5hbWUiLCJwcmVmaXhlZFNmNDFpMThuTmFtZSIsInZhcmlhbnRzIiwiRXJyb3IiLCJvcHRfcGFyYW1zIiwiYWJzb2x1dGUiLCJ1bmRlZmluZWQiLCJyb3V0ZSIsInVudXNlZFBhcmFtcyIsInVybCIsIm9wdGlvbmFsIiwidG9rZW5zIiwidG9rZW4iLCJlbmNvZGVQYXRoQ29tcG9uZW50IiwiaGFzRGVmYXVsdCIsImRlZmF1bHRzIiwiZW1wdHkiLCJlbmNvZGVkVmFsdWUiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiY3VycmVudEhvc3QiLCJzY2hlbWVzIiwiX2N1cnJlbnRIb3N0Iiwia2V5cyIsInF1ZXJ5UGFyYW1zIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJzZXREYXRhIiwicm91dGVyIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUM3QixNQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FGLEtBQUcsQ0FBQ0csU0FBSixDQUFjQyxHQUFkLENBQWtCLEtBQWxCO0FBRUEsTUFBSUMsSUFBSSw0Q0FDa0JOLElBRGxCLGdFQUFSO0FBS0FDLEtBQUcsQ0FB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QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFD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QVA7QUFDSDtBQUVEOzs7Ozs7O0FBTkQsS0EvQkMsRUE0Q0Q7QUFDQ3JELFNBQUcsRUFBRSxzQkFETjtBQUVDTCxXQUFLLEVBQUUsU0FBU2dQLG9CQUFULENBQThCaFAsS0FBOUIsRUFBcUM7QUFDeEMsZUFBT3FMLE1BQU0sQ0FBQ2dFLHdCQUFQLENBQWdDclAsS0FBaEMsRUFBdUMwRCxPQUF2QyxDQUErQyxNQUEvQyxFQUF1RCxHQUF2RCxDQUFQO0FBQ0g7QUFKRixLQTVDQyxDQWxXUSxDQUFaOztBQXFaQSxXQUFPMkgsTUFBUDtBQUNILEdBMWFZLEVBQWI7QUE0YUE7Ozs7Ozs7Ozs7QUFVQUEsUUFBTSxDQUFDa0UsS0FBUDtBQUVBOzs7Ozs7QUFLQWxFLFFBQU0sQ0FBQ21FLE9BQVA7QUFFQTs7Ozs7O0FBS0EsTUFBSWpRLE9BQU8sR0FBRyxJQUFJOEwsTUFBSixFQUFkO0FBRUksU0FBTztBQUFFQSxVQUFNLEVBQUVBLE1BQVY7QUFBa0I5TCxXQUFPLEVBQUVBO0FBQTNCLEdBQVA7QUFDSCxDQS9lQSxDQUFELEMiLCJmaWxlIjoiZm9ybV9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2Zvcm1fcG9zdC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWcobmFtZSkge1xyXG4gICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgdGFnLmNsYXNzTGlzdC5hZGQoXCJ0YWdcIik7XHJcblxyXG4gICBsZXQgaG10bCA9IGBcclxuICAgPHNwYW4gY2xhc3M9XCJ0YWdfX25hbWVcIj4ke25hbWV9PC9zcGFuPlxyXG4gICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyB0YWdfX3JlbW92ZVwiPjwvaT5cclxuICAgYDtcclxuXHJcbiAgIHRhZy5pbm5lckhUTUwgPSBobXRsO1xyXG4gICB0YWcucXVlcnlTZWxlY3RvcihcIi50YWdfX3JlbW92ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgcmVtb3ZlVGFnKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiB0YWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYWcodGFnKSB7XHJcbiAgIGxldCB0YWdzX3NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWdzX19zZWxlY3RlZFwiKTtcclxuICAgdGFnc19zZWxlY3RlZC5hcHBlbmRDaGlsZCh0YWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFnKHRhZykge1xyXG4gICBsZXQgdGFnc19zZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFnc19fc2VsZWN0ZWRcIik7XHJcbiAgIHRhZ3Nfc2VsZWN0ZWQucmVtb3ZlQ2hpbGQodGFnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhZ3MoKSB7XHJcbiAgIGxldCB0YWdzX3NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWdzX19zZWxlY3RlZFwiKTtcclxuICAgbGV0IHRhZ3MgPSB0YWdzX3NlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFnXCIpO1xyXG5cclxuICAgbGV0IG5hbWVzID0gW107XHJcbiAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIGxldCB0YWdfbmFtZSA9IHRhZy5xdWVyeVNlbGVjdG9yKFwiLnRhZ19fbmFtZVwiKS5pbm5lckhUTUw7XHJcbiAgICAgIG5hbWVzLnB1c2godGFnX25hbWUpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiBuYW1lcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhZ3Mob3B0aW9ucykge1xyXG4gICB0aGlzLnRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMudGFnKTtcclxuXHJcbiAgIHRoaXMudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgaGVscGVycy50aHJvdHRsZSgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0LCBcImJvZHlfX25hbWVcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgfSk7XHJcblxyXG4gICB0aGlzLnJlbW92ZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgIGlmICh0YWcgPT0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib3hfX3RhZ1wiKSkgcmV0dXJuO1xyXG4gICAgICAgICBlbHNlIHRhZy5jbGFzc0xpc3QucmVtb3ZlKFwidGFnX19hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRDbGFzcyA9ICgpID0+IHtcclxuICAgICAgaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib3hfX3RhZ1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwidGFnX19hY3RpdmVcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmdldEN1cnJlbnRUYWcgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBjdXJyZW50X3RhZyA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGhpcy50YXJnZXQsIFwiYm94X190YWdcIikuZ2V0QXR0cmlidXRlKFwidGFnXCIpO1xyXG4gICAgICByZXR1cm4gY3VycmVudF90YWc7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnNldFRhZyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNfdGFnID09IHRoaXMuY3VycmVudF90YWcpIHtcclxuICAgICAgICAgdGhpcy50YWcgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnRhZyA9IHRoaXMuY3VycmVudF90YWc7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50X3RhZyA9IHRoaXMuZ2V0Q3VycmVudFRhZygpO1xyXG4gICAgICB0aGlzLnByZXZpb3VzX3RhZyA9IG9wdGlvbnMuZ2V0VGFnKCk7XHJcbiAgICAgIHRoaXMuc2V0VGFnKCk7XHJcblxyXG4gICAgICBvcHRpb25zLnNldFRhZyh0aGlzLnRhZyk7XHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XHJcbiAgICAgIHRoaXMuYWRkQ2xhc3MoKTtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKHRoaXMudGFnLCB0aGlzLm5hbWUpO1xyXG4gICB9O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIHRhZ3MgZnJvbSBcIi4vY29tcG9uZW50cy90YWdzXCI7XHJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuXHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuY29uc3QgYXV0b0NvbXBsZXRlID0gcmVxdWlyZShcIkB0YXJla3JhYWZhdC9hdXRvY29tcGxldGUuanMvZGlzdC9qcy9hdXRvQ29tcGxldGVcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQXV0b0NvbXBsZXRlKCkge1xyXG4gICBuZXcgYXV0b0NvbXBsZXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICBzcmM6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoXCJmaW5kX3RhZ3NcIiwgeyBxdWVyeTogcXVlcnkgfSkpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc291cmNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRhZ3M7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGtleTogW1wibmFtZVwiXSxcclxuICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBwbGFjZUhvbGRlcjogXCJFbnRlciBUYWdcIixcclxuICAgICAgc2VsZWN0b3I6IFwiI2lucHV0X190YWdcIixcclxuICAgICAgdGhyZXNob2xkOiAxLFxyXG4gICAgICBkZWJvdW5jZTogMzAwLFxyXG4gICAgICAvLyBzZWFyY2hFbmdpbmU6IFwic3RyaWN0XCIsXHJcbiAgICAgIHJlc3VsdHNMaXN0OiB7XHJcbiAgICAgICAgIHJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgY29udGFpbmVyOiAoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhZ3NfX21hdGNoXCIpO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBkZXN0aW5hdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpLFxyXG4gICAgICAgICBwb3NpdGlvbjogXCJhZnRlcmVuZFwiLFxyXG4gICAgICAgICBlbGVtZW50OiBcImRpdlwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBoaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgIHJlc3VsdEl0ZW06IHtcclxuICAgICAgICAgY29udGVudDogKGRhdGEsIHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBzb3VyY2UuaW5uZXJIVE1MID0gZGF0YS5tYXRjaDtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZWxlbWVudDogXCJkaXZcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG5vUmVzdWx0czogKCkgPT4ge1xyXG4gICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+YDtcclxuICAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm9fcmVzdWx0XCIpO1xyXG4gICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIxXCIpO1xyXG4gICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gXCJDcmVhdGUgbmV3IHRhZyBcIjtcclxuICAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3NfX21hdGNoXCIpLmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3NfX21hdGNoXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvblNlbGVjdGlvbjogKGZlZWRiYWNrKSA9PiB7XHJcbiAgICAgICAgIHRhZ3MuYWRkVGFnKHRhZ3MuY3JlYXRlVGFnKGZlZWRiYWNrLnNlbGVjdGlvbi5tYXRjaCkpO1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9LFxyXG4gICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEJhcihvcHRpb25zKSB7XHJcbiAgIHRoaXMuaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdCgpO1xyXG4gICAgICB0aGlzLmFkZEV2KCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnNyYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBhd2FpdCBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKFwiYnJvd3NlXCIsIHsgcXVlcnk6IHRoaXMucXVlcnkgfSkpO1xyXG4gICAgICB0aGlzLmRhdGEgPSBhd2FpdCB0aGlzLnNvdXJjZS5qc29uKCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnJlc3VsdFBvc3QgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGhpcy5kYXRhLnBvc3RzX2RhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICBsZXQgdGFncyA9IFwiXCI7XHJcbiAgICAgICAgIGl0ZW0udGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgdGFncyArPSBgXHJcbiAgICAgICAgICAgIDxzcGFuPiMke3RoaXMuaGlnaGxpZ2h0KHRhZy5uYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmZyb250X2NvdmVyX2xpbmt9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPiR7dGhpcy5oaWdobGlnaHQoaXRlbS50aXRsZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdj4ke3RhZ3N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXN1bC1pdGVtX190eXBlXCI+UG9zdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBgO1xyXG5cclxuICAgICAgICAgbGV0IHJlc3VsdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uY2xhc3NMaXN0LmFkZChcImJveF9fcmVzdWx0LWl0ZW1cIik7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuYXBwZW5kQ2hpbGQocmVzdWx0X2l0ZW0pO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KFwicmVhZF9wb3N0XCIsIGl0ZW0uaWQsIGl0ZW0uYXV0aG9yLmlkKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVzdWx0QXV0aG9yID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGEucHJvZmlsZXNfZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5hdmF0YXJ9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPiR7dGhpcy5oaWdobGlnaHQoaXRlbS5maXJzdG5hbWUpfSAke3RoaXMuaGlnaGxpZ2h0KGl0ZW0ubGFzdG5hbWUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3VsLWl0ZW1fX25pY2tuYW1lXCI+JHtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQoaXRlbS5uaWNrbmFtZSkgPyBcIkBcIiArIHRoaXMuaGlnaGxpZ2h0KGl0ZW0ubmlja25hbWUpIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzdWwtaXRlbV9fdHlwZVwiPkF1dGhvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBgO1xyXG4gICAgICAgICBsZXQgcmVzdWx0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiYm94X19yZXN1bHQtaXRlbVwiKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgdGhpcy5yZXN1bHRzTGlzdC5hcHBlbmRDaGlsZChyZXN1bHRfaXRlbSk7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoXCJwcm9maWxlX3BhZ2VcIiwgbnVsbCwgaXRlbS5pZCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLm5vUmVzdWx0cyA9ICgpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWdfX25vdC1mb3VuZFwiIHNyYz1cIi9pbWcvZGVmYXVsdHMvbm90X2ZvdW5kLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19jb2xcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19yb3cgcmVzdWx0LWl0ZW1fX25vLXJlc3VsdHNcIj5ObyByZXN1bHRzIGZvdW5kITwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgYDtcclxuICAgICAgbGV0IHJlc3VsdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcmVzdWx0X2l0ZW0uY2xhc3NMaXN0LmFkZChcImJveF9fcmVzdWx0LWl0ZW1cIik7XHJcbiAgICAgIHJlc3VsdF9pdGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3QuYXBwZW5kQ2hpbGQocmVzdWx0X2l0ZW0pO1xyXG4gICAgICByZXN1bHRfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmhpZ2hsaWdodCA9IChzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKCFzdHJpbmcpIHJldHVybjtcclxuICAgICAgaWYgKHN0cmluZy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgbGV0IHN0YXJ0ID0gc3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnF1ZXJ5KTtcclxuICAgICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgdGhpcy5xdWVyeS5sZW5ndGg7XHJcbiAgICAgICAgIGxldCBzdWJzdHIgPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgICAgICBsZXQgaGlnaGxpZ2h0ZWQgPSBzdHJpbmdcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpLCBgPHNwYW4gY2xhc3M9XCJ0ZXh0X19oaWdobGlnaHRcIj4ke3N1YnN0cn08L3NwYW4+YCk7XHJcbiAgICAgICAgIHJldHVybiBoaWdobGlnaHRlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHN0cmluZztcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZXN1bHRzTGlzdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgb3B0aW9ucy5yZXN1bHRzTGlzdCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVzdWx0c0xpc3QpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlYXJjaF9pbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgXCJpbnB1dFwiLFxyXG4gICAgICAgICBoZWxwZXJzLnRocm90dGxlTGFzdChhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5Lmxlbmd0aCA+PSBvcHRpb25zLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNyYygpO1xyXG5cclxuICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wb3N0c19kYXRhLmxlbmd0aCA8PSAwICYmIHRoaXMuZGF0YS5wcm9maWxlc19kYXRhLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubm9SZXN1bHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0UG9zdCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdEF1dGhvcigpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sIG9wdGlvbnMudGhyb3R0bGUpXHJcbiAgICAgICk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnNldFBvc2l0aW9uID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uID0gaGVscGVycy5nZXRQb3NpdGlvbnModGFyZ2V0KTtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdC5zdHlsZS50b3AgPSB0aGlzLmxvY2F0aW9uLnRvcCArIDYzICsgXCJweFwiO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZWRpcmVjdCA9IChsb2MsIHBvc3QgPSBudWxsLCBhdXRob3IgPSBudWxsKSA9PiB7XHJcbiAgICAgIGlmIChsb2MgPT0gXCJwcm9maWxlX3BhZ2VcIikge1xyXG4gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFJvdXRpbmcuZ2VuZXJhdGUobG9jLCB7IHByb2ZpbGU6IGF1dGhvciB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBSb3V0aW5nLmdlbmVyYXRlKGxvYywgeyBwcm9maWxlOiBhdXRob3IsIHBvc3Q6IHBvc3QgfSk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuICAgdmFyIHRpbWVvdXQ7XHJcbiAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBvYmogPSB0aGlzLFxyXG4gICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkob2JqLCBhcmdzKTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xyXG4gICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlLCBwcmVmb21hdHRlZERhdGUgPSBmYWxzZSwgaGlkZVllYXIgPSBmYWxzZSkge1xyXG4gICBjb25zdCBNT05USF9OQU1FUyA9IFtcclxuICAgICAgXCJKYW51YXJ5XCIsXHJcbiAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgXCJNYXJjaFwiLFxyXG4gICAgICBcIkFwcmlsXCIsXHJcbiAgICAgIFwiTWF5XCIsXHJcbiAgICAgIFwiSnVuZVwiLFxyXG4gICAgICBcIkp1bHlcIixcclxuICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgXCJTZXB0ZW1iZXJcIixcclxuICAgICAgXCJPY3RvYmVyXCIsXHJcbiAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgXCJEZWNlbWJlclwiLFxyXG4gICBdO1xyXG4gICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgY29uc3QgbW9udGggPSBNT05USF9OQU1FU1tkYXRlLmdldE1vbnRoKCldO1xyXG4gICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgIGlmIChtaW51dGVzIDwgMTApIHtcclxuICAgICAgLy8gQWRkaW5nIGxlYWRpbmcgemVybyB0byBtaW51dGVzXHJcbiAgICAgIG1pbnV0ZXMgPSBgMCR7bWludXRlc31gO1xyXG4gICB9XHJcblxyXG4gICBpZiAocHJlZm9tYXR0ZWREYXRlKSB7XHJcbiAgICAgIC8vIFRvZGF5IGF0IDEwOjIwXHJcbiAgICAgIC8vIFllc3RlcmRheSBhdCAxMDoyMFxyXG4gICAgICByZXR1cm4gYCR7cHJlZm9tYXR0ZWREYXRlfSBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgfVxyXG5cclxuICAgaWYgKGhpZGVZZWFyKSB7XHJcbiAgICAgIC8vIDEwLiBKYW51YXJ5IGF0IDEwOjIwXHJcbiAgICAgIHJldHVybiBgJHtkYXl9ICR7bW9udGh9IGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICB9XHJcblxyXG4gICAvLyAxMC4gSmFudWFyeSAyMDE3LiBhdCAxMDoyMFxyXG4gICByZXR1cm4gYCR7ZGF5fSAke21vbnRofSAke3llYXJ9LiBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcclxufVxyXG5cclxuLy8gLS0tIE1haW4gZnVuY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBZ28oZGF0ZVBhcmFtKSB7XHJcbiAgIGlmICghZGF0ZVBhcmFtKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCBkYXRlID0gdHlwZW9mIGRhdGVQYXJhbSA9PT0gXCJvYmplY3RcIiA/IGRhdGVQYXJhbSA6IG5ldyBEYXRlKGRhdGVQYXJhbSk7XHJcbiAgIGNvbnN0IERBWV9JTl9NUyA9IDg2NDAwMDAwOyAvLyAyNCAqIDYwICogNjAgKiAxMDAwXHJcbiAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUodG9kYXkgLSBEQVlfSU5fTVMpO1xyXG4gICBjb25zdCBzZWNvbmRzID0gTWF0aC5yb3VuZCgodG9kYXkgLSBkYXRlKSAvIDEwMDApO1xyXG4gICBjb25zdCBtaW51dGVzID0gTWF0aC5yb3VuZChzZWNvbmRzIC8gNjApO1xyXG4gICBjb25zdCBpc1RvZGF5ID0gdG9kYXkudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCk7XHJcbiAgIGNvbnN0IGlzWWVzdGVyZGF5ID0geWVzdGVyZGF5LnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpO1xyXG4gICBjb25zdCBpc1RoaXNZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgaWYgKHNlY29uZHMgPCA1KSB7XHJcbiAgICAgIHJldHVybiBcIm5vd1wiO1xyXG4gICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xyXG4gICAgICByZXR1cm4gYCR7c2Vjb25kc30gc2Vjb25kcyBhZ29gO1xyXG4gICB9IGVsc2UgaWYgKHNlY29uZHMgPCA5MCkge1xyXG4gICAgICByZXR1cm4gXCJhYm91dCBhIG1pbnV0ZSBhZ29cIjtcclxuICAgfSBlbHNlIGlmIChtaW51dGVzIDwgNjApIHtcclxuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9IG1pbnV0ZXMgYWdvYDtcclxuICAgfSBlbHNlIGlmIChpc1RvZGF5KSB7XHJcbiAgICAgIHJldHVybiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUsIFwiVG9kYXlcIik7IC8vIFRvZGF5IGF0IDEwOjIwXHJcbiAgIH0gZWxzZSBpZiAoaXNZZXN0ZXJkYXkpIHtcclxuICAgICAgcmV0dXJuIGdldEZvcm1hdHRlZERhdGUoZGF0ZSwgXCJZZXN0ZXJkYXlcIik7IC8vIFllc3RlcmRheSBhdCAxMDoyMFxyXG4gICB9IGVsc2UgaWYgKGlzVGhpc1llYXIpIHtcclxuICAgICAgcmV0dXJuIGdldEZvcm1hdHRlZERhdGUoZGF0ZSwgZmFsc2UsIHRydWUpOyAvLyAxMC4gSmFudWFyeSBhdCAxMDoyMFxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKTsgLy8gMTAuIEphbnVhcnkgMjAxNy4gYXQgMTA6MjBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzbmFtZSkge1xyXG4gICAvLyBsb29rIGZvciBkaXJlY3QgcGFyZW50XHJcbiAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc25hbWUpKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAvLyBpZiBubyBkaXJlY3QgcGFyZW50IGZvdW5kIGxvb2sgYnkgY2xhc3NuYW1lXHJcbiAgIH0gZWxzZSBpZiAoIWVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc25hbWUpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NuYW1lKVswXTtcclxuICAgICAgLy9pZiBlbGVtZW50IGhhdmUgbm8gcGFyZW50IHRocm93IGVycm9yXHJcbiAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIC8vIHRocm93IGBlcnJvciBmcm9tIGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWU6IHdoZXJlIHdhcyBhbiBlcnJvciBpbiBmaW5kaW5nIHRhcmdldCBlbGVtZW50IOKAkyAke2NsYXNzbmFtZX1gO1xyXG4gICB9XHJcbiAgIHJldHVybiBnZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShlbGVtZW50LnBhcmVudEVsZW1lbnQsIGNsYXNzbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyT3JOdWxsKGNsYXNzbGlzdCwgYXR0cikge1xyXG4gICB2YXIgY3VycmVudF9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NsaXN0LnNoaWZ0KCl9YCk7XHJcblxyXG4gICBjbGFzc2xpc3QuZm9yRWFjaCgoY2xhc3NuYW1lKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50X2VsZW1lbnQpIHtcclxuICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzbmFtZX1gKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxuXHJcbiAgIGlmIChjdXJyZW50X2VsZW1lbnQpIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSA9IGN1cnJlbnRfZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XHJcbiAgIH1cclxuXHJcbiAgIHZhciByZXR1cm5fdmFsdWUgPSBhdHRyaWJ1dGUgPyBhdHRyaWJ1dGUgOiBudWxsO1xyXG4gICByZXR1cm4gcmV0dXJuX3ZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0ck9yRmFsc2UoY2xhc3NsaXN0LCBuYW1lLCBhdHRyKSB7XHJcbiAgIHZhciBjdXJyZW50X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc2xpc3Quc2hpZnQoKX1gKTtcclxuXHJcbiAgIGNsYXNzbGlzdC5mb3JFYWNoKChjbGFzc25hbWUpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICBjdXJyZW50X2VsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHIpO1xyXG4gICB9XHJcblxyXG4gICB2YXIgcmV0dXJuX3ZhbHVlID0gY3VycmVudF9lbGVtZW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICByZXR1cm4gcmV0dXJuX3ZhbHVlO1xyXG59XHJcblxyXG4vLyBsYXN0IGVsZW1lbnQgaW4gYXJyYXlcclxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcclxuICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG4vL3JldHVybiBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBlbGVtZW50XHJcbmV4cG9ydCB2YXIgZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICB2YXIgdG9wID0gMCxcclxuICAgICAgbGVmdCA9IDA7XHJcbiAgIGRvIHtcclxuICAgICAgdG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XHJcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0IHx8IDA7XHJcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcclxuICAgfSB3aGlsZSAoZWxlbWVudCk7XHJcblxyXG4gICByZXR1cm4ge1xyXG4gICAgICB0b3A6IHRvcCxcclxuICAgICAgbGVmdDogbGVmdCxcclxuICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgdmFyIHRvcCA9IDAsXHJcbiAgICAgIGxlZnQgPSAwO1xyXG4gICB2YXIgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQ7XHJcbiAgIGRvIHtcclxuICAgICAgdG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XHJcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0IHx8IDA7XHJcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcclxuICAgfSB3aGlsZSAoZWxlbWVudCk7XHJcblxyXG4gICByZXR1cm4ge1xyXG4gICAgICB0b3A6IHRvcCxcclxuICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgaWYgKG9iamVjdCA9PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG4gICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgfSBlbHNlIGlmIChvYmplY3QuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGNhbGxiYWNrKTtcclxuICAgfSBlbHNlIHtcclxuICAgICAgb2JqZWN0W1wib25cIiArIHR5cGVdID0gY2FsbGJhY2s7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XHJcbiAgIGxldCBpblRocm90dGxlO1xyXG4gICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgICAgaWYgKCFpblRocm90dGxlKSB7XHJcbiAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChpblRocm90dGxlID0gZmFsc2UpLCBsaW1pdCk7XHJcbiAgICAgIH1cclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlTGFzdChmdW5jLCBsaW1pdCkge1xyXG4gICBsZXQgbGFzdEZ1bmM7XHJcbiAgIGxldCBsYXN0UmFuO1xyXG4gICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgaWYgKCFsYXN0UmFuKSB7XHJcbiAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xyXG4gICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RSYW4gPj0gbGltaXQpIHtcclxuICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSwgbGltaXQgLSAoRGF0ZS5ub3coKSAtIGxhc3RSYW4pKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG59XHJcblxyXG4vLyAqKiBGQURFIE9VVCBGVU5DVElPTiAqKlxyXG5leHBvcnQgZnVuY3Rpb24gZmFkZU91dChlbCkge1xyXG4gICBlbC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgKGZ1bmN0aW9uIGZhZGUoKSB7XHJcbiAgICAgIGlmICgoZWwuc3R5bGUub3BhY2l0eSAtPSAwLjEpIDwgMCkge1xyXG4gICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxuICAgICAgfVxyXG4gICB9KSgpO1xyXG59XHJcblxyXG4vLyAqKiBGQURFIElOIEZVTkNUSU9OICoqXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW4oZWwsIGRpc3BsYXkpIHtcclxuICAgZWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgIGVsLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuICAgKGZ1bmN0aW9uIGZhZGUoKSB7XHJcbiAgICAgIHZhciB2YWwgPSBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpO1xyXG4gICAgICBpZiAoISgodmFsICs9IDAuMSkgPiAxKSkge1xyXG4gICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdmFsO1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgIH1cclxuICAgfSkoKTtcclxufVxyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwuYXV0b0NvbXBsZXRlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICB2YXIgZGF0YUF0dHJpYnV0ZSA9IFwiZGF0YS1pZFwiO1xuICB2YXIgc2VsZWN0ID0ge1xuICAgIHJlc3VsdHNMaXN0OiBcImF1dG9Db21wbGV0ZV9saXN0XCIsXG4gICAgcmVzdWx0OiBcImF1dG9Db21wbGV0ZV9yZXN1bHRcIixcbiAgICBoaWdobGlnaHQ6IFwiYXV0b0NvbXBsZXRlX2hpZ2hsaWdodGVkXCIsXG4gICAgc2VsZWN0ZWRSZXN1bHQ6IFwiYXV0b0NvbXBsZXRlX3NlbGVjdGVkXCJcbiAgfTtcbiAgdmFyIGtleXMgPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIEFSUk9XX1VQOiAzOCxcbiAgICBBUlJPV19ET1dOOiA0MFxuICB9O1xuICB2YXIgZ2V0SW5wdXQgPSBmdW5jdGlvbiBnZXRJbnB1dChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yKCk7XG4gIH07XG4gIHZhciBjcmVhdGVSZXN1bHRzTGlzdCA9IGZ1bmN0aW9uIGNyZWF0ZVJlc3VsdHNMaXN0KHJlbmRlclJlc3VsdHMpIHtcbiAgICB2YXIgcmVzdWx0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHJlbmRlclJlc3VsdHMuZWxlbWVudCk7XG4gICAgcmVzdWx0c0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgc2VsZWN0LnJlc3VsdHNMaXN0KTtcbiAgICBpZiAocmVuZGVyUmVzdWx0cy5jb250YWluZXIpIHtcbiAgICAgIHJlbmRlclJlc3VsdHMuY29udGFpbmVyKHJlc3VsdHNMaXN0KTtcbiAgICB9XG4gICAgcmVuZGVyUmVzdWx0cy5kZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQocmVuZGVyUmVzdWx0cy5wb3NpdGlvbiwgcmVzdWx0c0xpc3QpO1xuICAgIHJldHVybiByZXN1bHRzTGlzdDtcbiAgfTtcbiAgdmFyIGhpZ2hsaWdodCA9IGZ1bmN0aW9uIGhpZ2hsaWdodCh2YWx1ZSkge1xuICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPVwiLmNvbmNhdChzZWxlY3QuaGlnaGxpZ2h0LCBcIj5cIikuY29uY2F0KHZhbHVlLCBcIjwvc3Bhbj5cIik7XG4gIH07XG4gIHZhciBhZGRSZXN1bHRzVG9MaXN0ID0gZnVuY3Rpb24gYWRkUmVzdWx0c1RvTGlzdChyZXN1bHRzTGlzdCwgZGF0YVNyYywgcmVzdWx0SXRlbSkge1xuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBkYXRhU3JjLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCByZWNvcmQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHJlc3VsdEl0ZW0uZWxlbWVudCk7XG4gICAgICB2YXIgcmVzdWx0SW5kZXggPSBkYXRhU3JjW3JlY29yZF0uaW5kZXg7XG4gICAgICByZXN1bHQuc2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUsIHJlc3VsdEluZGV4KTtcbiAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzZWxlY3QucmVzdWx0KTtcbiAgICAgIHJlc3VsdEl0ZW0uY29udGVudCA/IHJlc3VsdEl0ZW0uY29udGVudChldmVudCwgcmVzdWx0KSA6IHJlc3VsdC5pbm5lckhUTUwgPSBldmVudC5tYXRjaCB8fCBldmVudDtcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJlc3VsdCk7XG4gICAgfSk7XG4gICAgcmVzdWx0c0xpc3QuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICB9O1xuICB2YXIgY2xlYXJSZXN1bHRzID0gZnVuY3Rpb24gY2xlYXJSZXN1bHRzKHJlc3VsdHNMaXN0KSB7XG4gICAgcmV0dXJuIHJlc3VsdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG4gIHZhciBvblNlbGVjdGlvbiA9IGZ1bmN0aW9uIG9uU2VsZWN0aW9uKGV2ZW50LCBmaWVsZCwgcmVzdWx0c0xpc3QsIGZlZWRiYWNrLCByZXN1bHRzVmFsdWVzLCBzZWxlY3Rpb24pIHtcbiAgICBmZWVkYmFjayh7XG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICBxdWVyeTogZmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ID8gZmllbGQudmFsdWUgOiBmaWVsZC5pbm5lckhUTUwsXG4gICAgICBtYXRjaGVzOiByZXN1bHRzVmFsdWVzLm1hdGNoZXMsXG4gICAgICByZXN1bHRzOiByZXN1bHRzVmFsdWVzLmxpc3QubWFwKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZC52YWx1ZTtcbiAgICAgIH0pLFxuICAgICAgc2VsZWN0aW9uOiByZXN1bHRzVmFsdWVzLmxpc3QuZmluZChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGtleXMuRU5URVIpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuaW5kZXggPT09IE51bWJlcihzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlZG93blwiKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmluZGV4ID09PSBOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICAgIGNsZWFyUmVzdWx0cyhyZXN1bHRzTGlzdCk7XG4gIH07XG4gIHZhciBuYXZpZ2F0aW9uID0gZnVuY3Rpb24gbmF2aWdhdGlvbihpbnB1dCwgcmVzdWx0c0xpc3QsIGZlZWRiYWNrLCByZXN1bHRzVmFsdWVzKSB7XG4gICAgdmFyIGxpID0gcmVzdWx0c0xpc3QuY2hpbGROb2RlcyxcbiAgICAgICAgbGlMZW5ndGggPSBsaS5sZW5ndGggLSAxO1xuICAgIHZhciBsaVNlbGVjdGVkID0gdW5kZWZpbmVkLFxuICAgICAgICBuZXh0O1xuICAgIHZhciByZW1vdmVTZWxlY3Rpb24gPSBmdW5jdGlvbiByZW1vdmVTZWxlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICBsaVNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0LnNlbGVjdGVkUmVzdWx0KTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgbmV4dCA9IGxpU2VsZWN0ZWQubmV4dFNpYmxpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0ID0gbGlTZWxlY3RlZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgaGlnaGxpZ2h0U2VsZWN0aW9uID0gZnVuY3Rpb24gaGlnaGxpZ2h0U2VsZWN0aW9uKGN1cnJlbnQpIHtcbiAgICAgIGxpU2VsZWN0ZWQgPSBjdXJyZW50O1xuICAgICAgbGlTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKHNlbGVjdC5zZWxlY3RlZFJlc3VsdCk7XG4gICAgfTtcbiAgICBpbnB1dC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChsaS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2Uga2V5cy5BUlJPV19VUDpcbiAgICAgICAgICAgIGlmIChsaVNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgIHJlbW92ZVNlbGVjdGlvbigwKTtcbiAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRTZWxlY3Rpb24obmV4dCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKGxpW2xpTGVuZ3RoXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihsaVtsaUxlbmd0aF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBrZXlzLkFSUk9XX0RPV046XG4gICAgICAgICAgICBpZiAobGlTZWxlY3RlZCkge1xuICAgICAgICAgICAgICByZW1vdmVTZWxlY3Rpb24oMSk7XG4gICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKG5leHQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihsaVswXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihsaVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGtleXMuRU5URVI6XG4gICAgICAgICAgICBpZiAobGlTZWxlY3RlZCkge1xuICAgICAgICAgICAgICBvblNlbGVjdGlvbihldmVudCwgaW5wdXQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcywgbGlTZWxlY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxpLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgc2VsZWN0aW9uLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBvblNlbGVjdGlvbihldmVudCwgaW5wdXQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICB2YXIgYXV0b0NvbXBsZXRlVmlldyA9IHtcbiAgICBnZXRJbnB1dDogZ2V0SW5wdXQsXG4gICAgY3JlYXRlUmVzdWx0c0xpc3Q6IGNyZWF0ZVJlc3VsdHNMaXN0LFxuICAgIGhpZ2hsaWdodDogaGlnaGxpZ2h0LFxuICAgIGFkZFJlc3VsdHNUb0xpc3Q6IGFkZFJlc3VsdHNUb0xpc3QsXG4gICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvbixcbiAgICBjbGVhclJlc3VsdHM6IGNsZWFyUmVzdWx0c1xuICB9O1xuXG4gIHZhciBDdXN0b21FdmVudFBvbHlmaWxsID0gZnVuY3Rpb24gQ3VzdG9tRXZlbnRQb2x5ZmlsbChldmVudCwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICBkZXRhaWw6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcbiAgICByZXR1cm4gZXZ0O1xuICB9O1xuICBDdXN0b21FdmVudFBvbHlmaWxsLnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gIHZhciBDdXN0b21FdmVudFdyYXBwZXIgPSB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIgJiYgd2luZG93LkN1c3RvbUV2ZW50IHx8IEN1c3RvbUV2ZW50UG9seWZpbGw7XG4gIHZhciBpbml0RWxlbWVudENsb3Nlc3RQb2x5ZmlsbCA9IGZ1bmN0aW9uIGluaXRFbGVtZW50Q2xvc2VzdFBvbHlmaWxsKCkge1xuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICB9XG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcztcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudCB8fCBlbC5wYXJlbnROb2RlO1xuICAgICAgICB9IHdoaWxlIChlbCAhPT0gbnVsbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIHZhciBQb2x5ZmlsbCA9IHtcbiAgICBDdXN0b21FdmVudFdyYXBwZXI6IEN1c3RvbUV2ZW50V3JhcHBlcixcbiAgICBpbml0RWxlbWVudENsb3Nlc3RQb2x5ZmlsbDogaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGxcbiAgfTtcblxuICB2YXIgYXV0b0NvbXBsZXRlID1cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGF1dG9Db21wbGV0ZShjb25maWcpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhdXRvQ29tcGxldGUpO1xuICAgICAgdmFyIF9jb25maWckc2VsZWN0b3IgPSBjb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgc2VsZWN0b3IgPSBfY29uZmlnJHNlbGVjdG9yID09PSB2b2lkIDAgPyBcIiNhdXRvQ29tcGxldGVcIiA6IF9jb25maWckc2VsZWN0b3IsXG4gICAgICAgICAgX2NvbmZpZyRkYXRhID0gY29uZmlnLmRhdGEsXG4gICAgICAgICAga2V5ID0gX2NvbmZpZyRkYXRhLmtleSxcbiAgICAgICAgICBfc3JjID0gX2NvbmZpZyRkYXRhLnNyYyxcbiAgICAgICAgICBfY29uZmlnJGRhdGEkY2FjaGUgPSBfY29uZmlnJGRhdGEuY2FjaGUsXG4gICAgICAgICAgY2FjaGUgPSBfY29uZmlnJGRhdGEkY2FjaGUgPT09IHZvaWQgMCA/IHRydWUgOiBfY29uZmlnJGRhdGEkY2FjaGUsXG4gICAgICAgICAgcXVlcnkgPSBjb25maWcucXVlcnksXG4gICAgICAgICAgX2NvbmZpZyR0cmlnZ2VyID0gY29uZmlnLnRyaWdnZXI7XG4gICAgICBfY29uZmlnJHRyaWdnZXIgPSBfY29uZmlnJHRyaWdnZXIgPT09IHZvaWQgMCA/IHt9IDogX2NvbmZpZyR0cmlnZ2VyO1xuICAgICAgdmFyIF9jb25maWckdHJpZ2dlciRldmVudCA9IF9jb25maWckdHJpZ2dlci5ldmVudCxcbiAgICAgICAgICBldmVudCA9IF9jb25maWckdHJpZ2dlciRldmVudCA9PT0gdm9pZCAwID8gW1wiaW5wdXRcIl0gOiBfY29uZmlnJHRyaWdnZXIkZXZlbnQsXG4gICAgICAgICAgX2NvbmZpZyR0cmlnZ2VyJGNvbmRpID0gX2NvbmZpZyR0cmlnZ2VyLmNvbmRpdGlvbixcbiAgICAgICAgICBjb25kaXRpb24gPSBfY29uZmlnJHRyaWdnZXIkY29uZGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyR0cmlnZ2VyJGNvbmRpLFxuICAgICAgICAgIF9jb25maWckc2VhcmNoRW5naW5lID0gY29uZmlnLnNlYXJjaEVuZ2luZSxcbiAgICAgICAgICBzZWFyY2hFbmdpbmUgPSBfY29uZmlnJHNlYXJjaEVuZ2luZSA9PT0gdm9pZCAwID8gXCJzdHJpY3RcIiA6IF9jb25maWckc2VhcmNoRW5naW5lLFxuICAgICAgICAgIF9jb25maWckdGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBfY29uZmlnJHRocmVzaG9sZCA9PT0gdm9pZCAwID8gMCA6IF9jb25maWckdGhyZXNob2xkLFxuICAgICAgICAgIF9jb25maWckZGVib3VuY2UgPSBjb25maWcuZGVib3VuY2UsXG4gICAgICAgICAgZGVib3VuY2UgPSBfY29uZmlnJGRlYm91bmNlID09PSB2b2lkIDAgPyAwIDogX2NvbmZpZyRkZWJvdW5jZSxcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdHNMaXN0ID0gY29uZmlnLnJlc3VsdHNMaXN0O1xuICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCA9IF9jb25maWckcmVzdWx0c0xpc3QgPT09IHZvaWQgMCA/IHt9IDogX2NvbmZpZyRyZXN1bHRzTGlzdDtcbiAgICAgIHZhciBfY29uZmlnJHJlc3VsdHNMaXN0JHIgPSBfY29uZmlnJHJlc3VsdHNMaXN0LnJlbmRlcixcbiAgICAgICAgICByZW5kZXIgPSBfY29uZmlnJHJlc3VsdHNMaXN0JHIgPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRyLFxuICAgICAgICAgIF9jb25maWckcmVzdWx0c0xpc3QkYyA9IF9jb25maWckcmVzdWx0c0xpc3QuY29udGFpbmVyLFxuICAgICAgICAgIGNvbnRhaW5lciA9IF9jb25maWckcmVzdWx0c0xpc3QkYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfY29uZmlnJHJlc3VsdHNMaXN0JGMsXG4gICAgICAgICAgZGVzdGluYXRpb24gPSBfY29uZmlnJHJlc3VsdHNMaXN0LmRlc3RpbmF0aW9uLFxuICAgICAgICAgIF9jb25maWckcmVzdWx0c0xpc3QkcCA9IF9jb25maWckcmVzdWx0c0xpc3QucG9zaXRpb24sXG4gICAgICAgICAgcG9zaXRpb24gPSBfY29uZmlnJHJlc3VsdHNMaXN0JHAgPT09IHZvaWQgMCA/IFwiYWZ0ZXJlbmRcIiA6IF9jb25maWckcmVzdWx0c0xpc3QkcCxcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdHNMaXN0JGUgPSBfY29uZmlnJHJlc3VsdHNMaXN0LmVsZW1lbnQsXG4gICAgICAgICAgcmVzdWx0c0xpc3RFbGVtZW50ID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRlID09PSB2b2lkIDAgPyBcInVsXCIgOiBfY29uZmlnJHJlc3VsdHNMaXN0JGUsXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCRuID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5uYXZpZ2F0aW9uLFxuICAgICAgICAgIG5hdmlnYXRpb24gPSBfY29uZmlnJHJlc3VsdHNMaXN0JG4gPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRuLFxuICAgICAgICAgIF9jb25maWckc29ydCA9IGNvbmZpZy5zb3J0LFxuICAgICAgICAgIHNvcnQgPSBfY29uZmlnJHNvcnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRzb3J0LFxuICAgICAgICAgIHBsYWNlSG9sZGVyID0gY29uZmlnLnBsYWNlSG9sZGVyLFxuICAgICAgICAgIF9jb25maWckbWF4UmVzdWx0cyA9IGNvbmZpZy5tYXhSZXN1bHRzLFxuICAgICAgICAgIG1heFJlc3VsdHMgPSBfY29uZmlnJG1heFJlc3VsdHMgPT09IHZvaWQgMCA/IDUgOiBfY29uZmlnJG1heFJlc3VsdHMsXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRJdGVtID0gY29uZmlnLnJlc3VsdEl0ZW07XG4gICAgICBfY29uZmlnJHJlc3VsdEl0ZW0gPSBfY29uZmlnJHJlc3VsdEl0ZW0gPT09IHZvaWQgMCA/IHt9IDogX2NvbmZpZyRyZXN1bHRJdGVtO1xuICAgICAgdmFyIF9jb25maWckcmVzdWx0SXRlbSRjbyA9IF9jb25maWckcmVzdWx0SXRlbS5jb250ZW50LFxuICAgICAgICAgIGNvbnRlbnQgPSBfY29uZmlnJHJlc3VsdEl0ZW0kY28gPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRyZXN1bHRJdGVtJGNvLFxuICAgICAgICAgIF9jb25maWckcmVzdWx0SXRlbSRlbCA9IF9jb25maWckcmVzdWx0SXRlbS5lbGVtZW50LFxuICAgICAgICAgIHJlc3VsdEl0ZW1FbGVtZW50ID0gX2NvbmZpZyRyZXN1bHRJdGVtJGVsID09PSB2b2lkIDAgPyBcImxpXCIgOiBfY29uZmlnJHJlc3VsdEl0ZW0kZWwsXG4gICAgICAgICAgbm9SZXN1bHRzID0gY29uZmlnLm5vUmVzdWx0cyxcbiAgICAgICAgICBfY29uZmlnJGhpZ2hsaWdodCA9IGNvbmZpZy5oaWdobGlnaHQsXG4gICAgICAgICAgaGlnaGxpZ2h0ID0gX2NvbmZpZyRoaWdobGlnaHQgPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyRoaWdobGlnaHQsXG4gICAgICAgICAgb25TZWxlY3Rpb24gPSBjb25maWcub25TZWxlY3Rpb247XG4gICAgICB2YXIgcmVzdWx0c0xpc3RWaWV3ID0gcmVuZGVyID8gYXV0b0NvbXBsZXRlVmlldy5jcmVhdGVSZXN1bHRzTGlzdCh7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24gfHwgYXV0b0NvbXBsZXRlVmlldy5nZXRJbnB1dChzZWxlY3RvciksXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgZWxlbWVudDogcmVzdWx0c0xpc3RFbGVtZW50XG4gICAgICB9KSA6IG51bGw7XG4gICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgIHNyYzogZnVuY3Rpb24gc3JjKCkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgX3NyYyA9PT0gXCJmdW5jdGlvblwiID8gX3NyYygpIDogX3NyYztcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGNhY2hlOiBjYWNoZVxuICAgICAgfTtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgIHRoaXMudHJpZ2dlciA9IHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvblxuICAgICAgfTtcbiAgICAgIHRoaXMuc2VhcmNoRW5naW5lID0gc2VhcmNoRW5naW5lID09PSBcImxvb3NlXCIgPyBcImxvb3NlXCIgOiB0eXBlb2Ygc2VhcmNoRW5naW5lID09PSBcImZ1bmN0aW9uXCIgPyBzZWFyY2hFbmdpbmUgOiBcInN0cmljdFwiO1xuICAgICAgdGhpcy50aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gICAgICB0aGlzLmRlYm91bmNlID0gZGVib3VuY2U7XG4gICAgICB0aGlzLnJlc3VsdHNMaXN0ID0ge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgdmlldzogcmVzdWx0c0xpc3RWaWV3LFxuICAgICAgICBuYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uXG4gICAgICB9O1xuICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgIHRoaXMucGxhY2VIb2xkZXIgPSBwbGFjZUhvbGRlcjtcbiAgICAgIHRoaXMubWF4UmVzdWx0cyA9IG1heFJlc3VsdHM7XG4gICAgICB0aGlzLnJlc3VsdEl0ZW0gPSB7XG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHJlc3VsdEl0ZW1FbGVtZW50XG4gICAgICB9O1xuICAgICAgdGhpcy5ub1Jlc3VsdHMgPSBub1Jlc3VsdHM7XG4gICAgICB0aGlzLmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcbiAgICAgIHRoaXMub25TZWxlY3Rpb24gPSBvblNlbGVjdGlvbjtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBfY3JlYXRlQ2xhc3MoYXV0b0NvbXBsZXRlLCBbe1xuICAgICAga2V5OiBcInNlYXJjaFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlYXJjaChxdWVyeSwgcmVjb3JkKSB7XG4gICAgICAgIHZhciByZWNvcmRMb3dlckNhc2UgPSByZWNvcmQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoRW5naW5lID09PSBcImxvb3NlXCIpIHtcbiAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoLyAvZywgXCJcIik7XG4gICAgICAgICAgdmFyIG1hdGNoID0gW107XG4gICAgICAgICAgdmFyIHNlYXJjaFBvc2l0aW9uID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBudW1iZXIgPSAwOyBudW1iZXIgPCByZWNvcmRMb3dlckNhc2UubGVuZ3RoOyBudW1iZXIrKykge1xuICAgICAgICAgICAgdmFyIHJlY29yZENoYXIgPSByZWNvcmRbbnVtYmVyXTtcbiAgICAgICAgICAgIGlmIChzZWFyY2hQb3NpdGlvbiA8IHF1ZXJ5Lmxlbmd0aCAmJiByZWNvcmRMb3dlckNhc2VbbnVtYmVyXSA9PT0gcXVlcnlbc2VhcmNoUG9zaXRpb25dKSB7XG4gICAgICAgICAgICAgIHJlY29yZENoYXIgPSB0aGlzLmhpZ2hsaWdodCA/IGF1dG9Db21wbGV0ZVZpZXcuaGlnaGxpZ2h0KHJlY29yZENoYXIpIDogcmVjb3JkQ2hhcjtcbiAgICAgICAgICAgICAgc2VhcmNoUG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoLnB1c2gocmVjb3JkQ2hhcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWFyY2hQb3NpdGlvbiAhPT0gcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXRjaC5qb2luKFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZWNvcmRMb3dlckNhc2UuaW5jbHVkZXMocXVlcnkpKSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQocXVlcnkpLCBcImlcIik7XG4gICAgICAgICAgICBxdWVyeSA9IHBhdHRlcm4uZXhlYyhyZWNvcmQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0ID8gcmVjb3JkLnJlcGxhY2UocXVlcnksIGF1dG9Db21wbGV0ZVZpZXcuaGlnaGxpZ2h0KHF1ZXJ5KSkgOiByZWNvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxpc3RNYXRjaGVkUmVzdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RNYXRjaGVkUmVzdWx0cyhkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIHZhciByZXNMaXN0ID0gW107XG4gICAgICAgICAgZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goa2V5KSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmRWYWx1ZSA9IGtleSA/IHJlY29yZFtrZXldIDogcmVjb3JkO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSB0eXBlb2YgX3RoaXMuc2VhcmNoRW5naW5lID09PSBcImZ1bmN0aW9uXCIgPyBfdGhpcy5zZWFyY2hFbmdpbmUoX3RoaXMucXVlcnlWYWx1ZSwgcmVjb3JkVmFsdWUpIDogX3RoaXMuc2VhcmNoKF90aGlzLnF1ZXJ5VmFsdWUsIHJlY29yZFZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYga2V5KSB7XG4gICAgICAgICAgICAgICAgICByZXNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggJiYgIWtleSkge1xuICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5kYXRhLmtleSkge1xuICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX3RoaXMuZGF0YS5rZXlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgICBzZWFyY2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWFyY2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgbGlzdCA9IF90aGlzLnNvcnQgPyByZXNMaXN0LnNvcnQoX3RoaXMuc29ydCkuc2xpY2UoMCwgX3RoaXMubWF4UmVzdWx0cykgOiByZXNMaXN0LnNsaWNlKDAsIF90aGlzLm1heFJlc3VsdHMpO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHtcbiAgICAgICAgICAgIG1hdGNoZXM6IHJlc0xpc3QubGVuZ3RoLFxuICAgICAgICAgICAgbGlzdDogbGlzdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaWduaXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaWduaXRlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgICAgdmFyIGlucHV0ID0gYXV0b0NvbXBsZXRlVmlldy5nZXRJbnB1dCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VIb2xkZXIpIHtcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCB0aGlzLnBsYWNlSG9sZGVyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVib3VuY2UgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICAgICAgICAgIHZhciBpbkRlYm91bmNlO1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcbiAgICAgICAgICAgIGluRGVib3VuY2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGV4ZWMgPSBmdW5jdGlvbiBleGVjKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBpbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgaW5wdXQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50ID8gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA6IGlucHV0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHZhciBxdWVyeVZhbHVlID0gX3RoaXMyLnF1ZXJ5VmFsdWUgPSBfdGhpczIucXVlcnkgJiYgX3RoaXMyLnF1ZXJ5Lm1hbmlwdWxhdGUgPyBfdGhpczIucXVlcnkubWFuaXB1bGF0ZShpbnB1dFZhbHVlKSA6IGlucHV0VmFsdWU7XG4gICAgICAgICAgdmFyIHJlbmRlclJlc3VsdHNMaXN0ID0gX3RoaXMyLnJlc3VsdHNMaXN0LnJlbmRlcjtcbiAgICAgICAgICB2YXIgdHJpZ2dlckNvbmRpdGlvbiA9IF90aGlzMi50cmlnZ2VyLmNvbmRpdGlvbiA/IF90aGlzMi50cmlnZ2VyLmNvbmRpdGlvbihxdWVyeVZhbHVlKSA6IHF1ZXJ5VmFsdWUubGVuZ3RoID4gX3RoaXMyLnRocmVzaG9sZCAmJiBxdWVyeVZhbHVlLnJlcGxhY2UoLyAvZywgXCJcIikubGVuZ3RoO1xuICAgICAgICAgIHZhciBldmVudEVtaXR0ZXIgPSBmdW5jdGlvbiBldmVudEVtaXR0ZXIoZXZlbnQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IFBvbHlmaWxsLkN1c3RvbUV2ZW50V3JhcHBlcihcImF1dG9Db21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICBtYXRjaGVzOiByZXN1bHRzID8gcmVzdWx0cy5tYXRjaGVzIDogbnVsbCxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzID8gcmVzdWx0cy5saXN0IDogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAocmVuZGVyUmVzdWx0c0xpc3QpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzTGlzdCA9IF90aGlzMi5yZXN1bHRzTGlzdC52aWV3O1xuICAgICAgICAgICAgdmFyIGNsZWFyUmVzdWx0cyA9IGF1dG9Db21wbGV0ZVZpZXcuY2xlYXJSZXN1bHRzKHJlc3VsdHNMaXN0KTtcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyQ29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5saXN0TWF0Y2hlZFJlc3VsdHMoX3RoaXMyLmRhdGFTdHJlYW0sIGV2ZW50KS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyKGV2ZW50LCBsaXN0KTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnJlc3VsdHNMaXN0LnJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgaWYgKGxpc3QubGlzdC5sZW5ndGggPT09IDAgJiYgX3RoaXMyLm5vUmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIubm9SZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGVWaWV3LmFkZFJlc3VsdHNUb0xpc3QocmVzdWx0c0xpc3QsIGxpc3QubGlzdCwgX3RoaXMyLnJlc3VsdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLm9uU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlc3VsdHNMaXN0Lm5hdmlnYXRpb24gPyBfdGhpczIucmVzdWx0c0xpc3QubmF2aWdhdGlvbihldmVudCwgaW5wdXQsIHJlc3VsdHNMaXN0LCBfdGhpczIub25TZWxlY3Rpb24sIGxpc3QpIDogYXV0b0NvbXBsZXRlVmlldy5uYXZpZ2F0aW9uKGlucHV0LCByZXN1bHRzTGlzdCwgX3RoaXMyLm9uU2VsZWN0aW9uLCBsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBldmVudEVtaXR0ZXIoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlbmRlclJlc3VsdHNMaXN0ICYmIHRyaWdnZXJDb25kaXRpb24pIHtcbiAgICAgICAgICAgIF90aGlzMi5saXN0TWF0Y2hlZFJlc3VsdHMoX3RoaXMyLmRhdGFTdHJlYW0sIGV2ZW50KS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICAgIGV2ZW50RW1pdHRlcihldmVudCwgbGlzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBydW4gPSBmdW5jdGlvbiBydW4oZXZlbnQpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoX3RoaXMyLmRhdGEuY2FjaGUgPyBfdGhpczIuZGF0YVN0cmVhbSA6IF90aGlzMi5kYXRhLnNyYygpKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBfdGhpczIuZGF0YVN0cmVhbSA9IGRhdGE7XG4gICAgICAgICAgICBleGVjKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xuICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBkZWJvdW5jZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBydW4oZXZlbnQpO1xuICAgICAgICAgIH0sIF90aGlzMi5kZWJvdW5jZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5kYXRhLmNhY2hlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuZGF0YS5zcmMoKSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMzLmRhdGFTdHJlYW0gPSBkYXRhO1xuICAgICAgICAgICAgX3RoaXMzLmlnbml0ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaWduaXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgUG9seWZpbGwuaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGwoKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIGF1dG9Db21wbGV0ZTtcbiAgfSgpO1xuXG4gIHJldHVybiBhdXRvQ29tcGxldGU7XG5cbn0pKSk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIHZhciByb3V0aW5nID0gZmFjdG9yeSgpO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIHJvdXRpbmcuUm91dGluZyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgIC8vIGxpa2UgTm9kZS5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByb3V0aW5nLlJvdXRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgICAgcm9vdC5Sb3V0aW5nID0gcm91dGluZy5Sb3V0aW5nO1xuICAgICAgICByb290LmZvcyA9IHtcbiAgICAgICAgICAgIFJvdXRlcjogcm91dGluZy5Sb3V0ZXJcbiAgICAgICAgfTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIGZpbGUgZGVmaW5lcyB0aGUgUm91dGVyIGNsYXNzLlxuICpcbiAqIFlvdSBjYW4gY29tcGlsZSB0aGlzIGZpbGUgYnkgcnVubmluZyB0aGUgZm9sbG93aW5nIGNvbW1hbmQgZnJvbSB0aGUgUmVzb3VyY2VzIGZvbGRlcjpcbiAqXG4gKiAgICBucG0gaW5zdGFsbCAmJiBucG0gcnVuIGJ1aWxkXG4gKi9cblxuLyoqXG4gKiBDbGFzcyBSb3V0ZXJcbiAqL1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge1JvdXRlci5Db250ZXh0PX0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT49fSByb3V0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSb3V0ZXIoY29udGV4dCwgcm91dGVzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZXIpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dF8gPSBjb250ZXh0IHx8IHsgYmFzZV91cmw6ICcnLCBwcmVmaXg6ICcnLCBob3N0OiAnJywgcG9ydDogJycsIHNjaGVtZTogJycsIGxvY2FsZTogJycgfTtcbiAgICAgICAgdGhpcy5zZXRSb3V0ZXMocm91dGVzIHx8IHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGluc3RhbmNlLlxuICAgICAqIEByZXR1cm5zIHtSb3V0ZXJ9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSb3V0ZXIsIFt7XG4gICAgICAgIGtleTogJ3NldFJvdXRpbmdEYXRhJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGRhdGEgZm9yIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um91dGluZ0RhdGEoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRCYXNlVXJsKGRhdGFbJ2Jhc2VfdXJsJ10pO1xuICAgICAgICAgICAgdGhpcy5zZXRSb3V0ZXMoZGF0YVsncm91dGVzJ10pO1xuXG4gICAgICAgICAgICBpZiAoJ3ByZWZpeCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJlZml4KGRhdGFbJ3ByZWZpeCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgncG9ydCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9ydChkYXRhWydwb3J0J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdsb2NhbGUnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsZShkYXRhWydsb2NhbGUnXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SG9zdChkYXRhWydob3N0J10pO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2hlbWUoZGF0YVsnc2NoZW1lJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT59IHJvdXRlc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Um91dGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVzXyA9IE9iamVjdC5mcmVlemUocm91dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPn0gcm91dGVzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSb3V0ZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzXztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0QmFzZVVybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRCYXNlVXJsKGJhc2VVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uYmFzZV91cmwgPSBiYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEJhc2VVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFByZWZpeCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQcmVmaXgocHJlZml4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnByZWZpeCA9IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRTY2hlbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2NoZW1lKHNjaGVtZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5zY2hlbWUgPSBzY2hlbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U2NoZW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjaGVtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0SG9zdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRIb3N0KGhvc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uaG9zdCA9IGhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SG9zdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIb3N0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydFxuICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRQb3J0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvcnQocG9ydCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wb3J0ID0gcG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRQb3J0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRMb2NhbGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRMb2NhbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidWlsZFF1ZXJ5UGFyYW1zJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZHMgcXVlcnkgc3RyaW5nIHBhcmFtcyBhZGRlZCB0byBhIFVSTC5cbiAgICAgICAgICogUG9ydCBvZiBqUXVlcnkncyAkLnBhcmFtKCkgZnVuY3Rpb24sIHNvIGNyZWRpdCBpcyBkdWUgdGhlcmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBwYXJhbXNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWRkXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXgsIHBhcmFtcywgYWRkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciByYnJhY2tldCA9IG5ldyBSZWdFeHAoL1xcW1xcXSQvKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmJyYWNrZXQudGVzdChwcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQocHJlZml4LCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXggKyAnWycgKyAoKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbCkpID09PSAnb2JqZWN0JyA/IGkgOiAnJykgKyAnXScsIHZhbCwgYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGFyYW1zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgbmFtZSArICddJywgcGFyYW1zW25hbWVdLCBhZGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkKHByZWZpeCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgcmF3IHJvdXRlIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7Um91dGVyLlJvdXRlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Um91dGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGUobmFtZSkge1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkTmFtZSA9IHRoaXMuY29udGV4dF8ucHJlZml4ICsgbmFtZTtcbiAgICAgICAgICAgIHZhciBzZjQxaTE4bk5hbWUgPSBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgICAgICB2YXIgcHJlZml4ZWRTZjQxaTE4bk5hbWUgPSB0aGlzLmNvbnRleHRfLnByZWZpeCArIG5hbWUgKyAnLicgKyB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgICAgIHZhciB2YXJpYW50cyA9IFtwcmVmaXhlZE5hbWUsIHNmNDFpMThuTmFtZSwgcHJlZml4ZWRTZjQxaTE4bk5hbWUsIG5hbWVdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHZhcmlhbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnRzW2ldIGluIHRoaXMucm91dGVzXykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNfW3ZhcmlhbnRzW2ldXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIHRoZSBVUkwgZm9yIGEgcm91dGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IG9wdF9wYXJhbXNcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBhYnNvbHV0ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZW5lcmF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZShuYW1lLCBvcHRfcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgYWJzb2x1dGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgcm91dGUgPSB0aGlzLmdldFJvdXRlKG5hbWUpLFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IG9wdF9wYXJhbXMgfHwge30sXG4gICAgICAgICAgICAgICAgdW51c2VkUGFyYW1zID0gX2V4dGVuZHMoe30sIHBhcmFtcyksXG4gICAgICAgICAgICAgICAgdXJsID0gJycsXG4gICAgICAgICAgICAgICAgb3B0aW9uYWwgPSB0cnVlLFxuICAgICAgICAgICAgICAgIGhvc3QgPSAnJyxcbiAgICAgICAgICAgICAgICBwb3J0ID0gdHlwZW9mIHRoaXMuZ2V0UG9ydCgpID09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5nZXRQb3J0KCkgPT09IG51bGwgPyAnJyA6IHRoaXMuZ2V0UG9ydCgpO1xuXG4gICAgICAgICAgICByb3V0ZS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3RleHQnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh0b2tlblsxXSkgKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzRGVmYXVsdCA9IHJvdXRlLmRlZmF1bHRzICYmIHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IG9wdGlvbmFsIHx8ICFoYXNEZWZhdWx0IHx8IHRva2VuWzNdIGluIHBhcmFtcyAmJiBwYXJhbXNbdG9rZW5bM11dICE9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5bM10gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInICsgdG9rZW5bM10gKyAnXCIuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbXB0eSA9IHRydWUgPT09IHZhbHVlIHx8IGZhbHNlID09PSB2YWx1ZSB8fCAnJyA9PT0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW1wdHkgfHwgIW9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuY29kZWRWYWx1ZSA9IFJvdXRlci5lbmNvZGVQYXRoQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnbnVsbCcgPT09IGVuY29kZWRWYWx1ZSAmJiBudWxsID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0b2tlblsxXSArIGVuY29kZWRWYWx1ZSArIHVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNEZWZhdWx0ICYmIHRva2VuWzNdIGluIHVudXNlZFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicgKyB0b2tlblswXSArICdcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gJy8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3V0ZS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdCA9IHRva2VuWzFdICsgaG9zdDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblszXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmRlZmF1bHRzICYmIHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIHZhbHVlICsgaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEZvby1iYXIhXG4gICAgICAgICAgICB1cmwgPSB0aGlzLmNvbnRleHRfLmJhc2VfdXJsICsgdXJsO1xuXG4gICAgICAgICAgICBpZiAocm91dGUucmVxdWlyZW1lbnRzICYmIFwiX3NjaGVtZVwiIGluIHJvdXRlLnJlcXVpcmVtZW50cyAmJiB0aGlzLmdldFNjaGVtZSgpICE9IHJvdXRlLnJlcXVpcmVtZW50c1tcIl9zY2hlbWVcIl0pIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhvc3QgPSBob3N0IHx8IHRoaXMuZ2V0SG9zdCgpO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gcm91dGUucmVxdWlyZW1lbnRzW1wiX3NjaGVtZVwiXSArIFwiOi8vXCIgKyBjdXJyZW50SG9zdCArIChjdXJyZW50SG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygcm91dGUuc2NoZW1lcyAmJiBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygcm91dGUuc2NoZW1lc1swXSAmJiB0aGlzLmdldFNjaGVtZSgpICE9PSByb3V0ZS5zY2hlbWVzWzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jdXJyZW50SG9zdCA9IGhvc3QgfHwgdGhpcy5nZXRIb3N0KCk7XG5cbiAgICAgICAgICAgICAgICB1cmwgPSByb3V0ZS5zY2hlbWVzWzBdICsgXCI6Ly9cIiArIF9jdXJyZW50SG9zdCArIChfY3VycmVudEhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG9zdCAmJiB0aGlzLmdldEhvc3QoKSAhPT0gaG9zdCArIChob3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhYnNvbHV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0U2NoZW1lKCkgKyBcIjovL1wiICsgdGhpcy5nZXRIb3N0KCkgKyAodGhpcy5nZXRIb3N0KCkuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVudXNlZFBhcmFtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmVmaXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uIGFkZChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBjYWxsIGl0IGFuZCBhc3NpZ24gaXQncyByZXR1cm4gdmFsdWUgYXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSgpIDogdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIG51bGwgdG8gZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnB1c2goUm91dGVyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KGtleSkgKyAnPScgKyBSb3V0ZXIuZW5jb2RlUXVlcnlDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZm9yIChwcmVmaXggaW4gdW51c2VkUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXgsIHVudXNlZFBhcmFtc1twcmVmaXhdLCBhZGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVybCA9IHVybCArICc/JyArIHF1ZXJ5UGFyYW1zLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBzdHJpbmcgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2dldEluc3RhbmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uZmlndXJlcyB0aGUgY3VycmVudCBSb3V0ZXIgaW5zdGFuY2Ugd2l0aCB0aGUgcHJvdmlkZWQgZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcm91dGVyID0gUm91dGVyLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgICAgIHJvdXRlci5zZXRSb3V0aW5nRGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTJGL2csICcvJykucmVwbGFjZSgvJTQwL2csICdAJykucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTIxL2csICchJykucmVwbGFjZSgvJTNCL2csICc7JykucmVwbGFjZSgvJTJDL2csICcsJykucmVwbGFjZSgvJTJBL2csICcqJykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoLycvZywgJyUyNycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHBhdGggcHJvcGVybHkgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmNvZGVQYXRoQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuY29kZVBhdGhDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lM0QvZywgJz0nKS5yZXBsYWNlKC8lMkIvZywgJysnKS5yZXBsYWNlKC8lMjEvZywgJyEnKS5yZXBsYWNlKC8lN0MvZywgJ3wnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBxdWVyeSBwYXJhbWV0ZXIgb3IgdmFsdWUgcHJvcGVybHkgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmNvZGVRdWVyeUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVRdWVyeUNvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUzRi9nLCAnPycpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJvdXRlcjtcbn0oKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICAgIHRva2VuczogKEFycmF5LjxBcnJheS48c3RyaW5nPj4pLFxuICogICAgIGRlZmF1bHRzOiAoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz4pLFxuICogICAgIHJlcXVpcmVtZW50czogT2JqZWN0LFxuICogICAgIGhvc3R0b2tlbnM6IChBcnJheS48c3RyaW5nPilcbiAqIH19XG4gKi9cblxuXG5Sb3V0ZXIuUm91dGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgICBiYXNlX3VybDogKHN0cmluZylcbiAqIH19XG4gKi9cblJvdXRlci5Db250ZXh0O1xuXG4vKipcbiAqIFJvdXRlciBzaW5nbGV0b24uXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtSb3V0ZXJ9XG4gKi9cbnZhciBSb3V0aW5nID0gbmV3IFJvdXRlcigpO1xuXG4gICAgcmV0dXJuIHsgUm91dGVyOiBSb3V0ZXIsIFJvdXRpbmc6IFJvdXRpbmcgfTtcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9