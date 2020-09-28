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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvdGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybV9wb3N0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGFyZWtyYWFmYXQvYXV0b2NvbXBsZXRlLmpzL2Rpc3QvanMvYXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVUYWciLCJuYW1lIiwidGFnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaG10bCIsImlubmVySFRNTCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZVRhZyIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJhZGRUYWciLCJ0YWdzX3NlbGVjdGVkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImdldFRhZ3MiLCJ0YWdzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hbWVzIiwiZm9yRWFjaCIsInRhZ19uYW1lIiwicHVzaCIsInRvZ2dsZVRhZ3MiLCJvcHRpb25zIiwiaGVscGVycyIsImluaXQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImFkZENsYXNzIiwidG9nZ2xlIiwiZ2V0Q3VycmVudFRhZyIsImN1cnJlbnRfdGFnIiwiZ2V0QXR0cmlidXRlIiwic2V0VGFnIiwicHJldmlvdXNfdGFnIiwiZ2V0VGFnIiwiY2IiLCJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsInNldFJvdXRpbmdEYXRhIiwiYXV0b0NvbXBsZXRlIiwicmVuZGVyQXV0b0NvbXBsZXRlIiwiZGF0YSIsInNyYyIsInF1ZXJ5IiwidmFsdWUiLCJmZXRjaCIsImdlbmVyYXRlIiwic291cmNlIiwianNvbiIsImtleSIsImNhY2hlIiwicGxhY2VIb2xkZXIiLCJzZWxlY3RvciIsInRocmVzaG9sZCIsImRlYm91bmNlIiwicmVzdWx0c0xpc3QiLCJyZW5kZXIiLCJjb250YWluZXIiLCJzZXRBdHRyaWJ1dGUiLCJkZXN0aW5hdGlvbiIsInBvc2l0aW9uIiwiZWxlbWVudCIsInJlc3VsdEl0ZW0iLCJjb250ZW50IiwibWF0Y2giLCJub1Jlc3VsdHMiLCJyZXN1bHQiLCJzcGFuIiwib25TZWxlY3Rpb24iLCJmZWVkYmFjayIsInNlbGVjdGlvbiIsIlNlYXJjaEJhciIsImFkZEV2IiwicmVzdWx0UG9zdCIsInBvc3RzX2RhdGEiLCJpdGVtIiwiaGlnaGxpZ2h0IiwiaHRtbCIsImZyb250X2NvdmVyX2xpbmsiLCJ0aXRsZSIsInJlc3VsdF9pdGVtIiwicmVkaXJlY3QiLCJpZCIsImF1dGhvciIsInJlc3VsdEF1dGhvciIsInByb2ZpbGVzX2RhdGEiLCJhdmF0YXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm5pY2tuYW1lIiwic3R5bGUiLCJkaXNwbGF5Iiwic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0YXJ0IiwiaW5kZXhPZiIsImVuZCIsImxlbmd0aCIsInN1YnN0ciIsInNsaWNlIiwiaGlnaGxpZ2h0ZWQiLCJyZXBsYWNlIiwic2VhcmNoX2lucHV0Iiwic2V0UG9zaXRpb24iLCJ0aHJvdHRsZSIsImxvY2F0aW9uIiwidG9wIiwibG9jIiwicG9zdCIsIndpbmRvdyIsImhyZWYiLCJwcm9maWxlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0Iiwib2JqIiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImdldEZvcm1hdHRlZERhdGUiLCJkYXRlIiwicHJlZm9tYXR0ZWREYXRlIiwiaGlkZVllYXIiLCJNT05USF9OQU1FUyIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidGltZUFnbyIsImRhdGVQYXJhbSIsIkRhdGUiLCJEQVlfSU5fTVMiLCJ0b2RheSIsInllc3RlcmRheSIsInNlY29uZHMiLCJNYXRoIiwicm91bmQiLCJpc1RvZGF5IiwidG9EYXRlU3RyaW5nIiwiaXNZZXN0ZXJkYXkiLCJpc1RoaXNZZWFyIiwiZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUiLCJjbGFzc25hbWUiLCJjb250YWlucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRBdHRyT3JOdWxsIiwiY2xhc3NsaXN0IiwiYXR0ciIsImN1cnJlbnRfZWxlbWVudCIsInNoaWZ0IiwiYXR0cmlidXRlIiwicmV0dXJuX3ZhbHVlIiwic2V0QXR0ck9yRmFsc2UiLCJsYXN0IiwiYXJyYXkiLCJnZXRQb3NpdGlvbiIsImxlZnQiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiZ2V0UG9zaXRpb25zIiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYWRkRXZlbnQiLCJvYmplY3QiLCJ0eXBlIiwiY2FsbGJhY2siLCJhdHRhY2hFdmVudCIsImxpbWl0IiwiaW5UaHJvdHRsZSIsImNvbnRleHQiLCJ0aHJvdHRsZUxhc3QiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJub3ciLCJmYWRlT3V0IiwiZWwiLCJvcGFjaXR5IiwiZmFkZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZhZGVJbiIsInZhbCIsInBhcnNlRmxvYXQiLCJyb290IiwiZmFjdG9yeSIsInJvdXRpbmciLCJkZWZpbmUiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsImkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJSb3V0ZXIiLCJyb3V0ZXMiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiYmFzZVVybCIsImdldEJhc2VVcmwiLCJnZXRTY2hlbWUiLCJnZXRIb3N0IiwiZ2V0UG9ydCIsImdldExvY2FsZSIsImJ1aWxkUXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJfdGhpcyIsInJicmFja2V0IiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJwcmVmaXhlZE5hbWUiLCJzZjQxaTE4bk5hbWUiLCJwcmVmaXhlZFNmNDFpMThuTmFtZSIsInZhcmlhbnRzIiwiRXJyb3IiLCJvcHRfcGFyYW1zIiwiYWJzb2x1dGUiLCJ1bmRlZmluZWQiLCJyb3V0ZSIsInVudXNlZFBhcmFtcyIsInVybCIsIm9wdGlvbmFsIiwidG9rZW5zIiwidG9rZW4iLCJlbmNvZGVQYXRoQ29tcG9uZW50IiwiaGFzRGVmYXVsdCIsImRlZmF1bHRzIiwiZW1wdHkiLCJlbmNvZGVkVmFsdWUiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiY3VycmVudEhvc3QiLCJzY2hlbWVzIiwiX2N1cnJlbnRIb3N0Iiwia2V5cyIsInF1ZXJ5UGFyYW1zIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJzZXREYXRhIiwicm91dGVyIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUM3QixNQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FGLEtBQUcsQ0FBQ0csU0FBSixDQUFjQyxHQUFkLENBQWtCLEtBQWxCO0FBRUEsTUFBSUMsSUFBSSw0Q0FDa0JOLElBRGxCLGdFQUFSO0FBS0FDLEtBQUcsQ0FB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QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFD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QVA7QUFDSDtBQUVEOzs7Ozs7O0FBTkQsS0EvQkMsRUE0Q0Q7QUFDQ3JELFNBQUcsRUFBRSxzQkFETjtBQUVDTCxXQUFLLEVBQUUsU0FBU2dQLG9CQUFULENBQThCaFAsS0FBOUIsRUFBcUM7QUFDeEMsZUFBT3FMLE1BQU0sQ0FBQ2dFLHdCQUFQLENBQWdDclAsS0FBaEMsRUFBdUMwRCxPQUF2QyxDQUErQyxNQUEvQyxFQUF1RCxHQUF2RCxDQUFQO0FBQ0g7QUFKRixLQTVDQyxDQWxXUSxDQUFaOztBQXFaQSxXQUFPMkgsTUFBUDtBQUNILEdBMWFZLEVBQWI7QUE0YUE7Ozs7Ozs7Ozs7QUFVQUEsUUFBTSxDQUFDa0UsS0FBUDtBQUVBOzs7Ozs7QUFLQWxFLFFBQU0sQ0FBQ21FLE9BQVA7QUFFQTs7Ozs7O0FBS0EsTUFBSWpRLE9BQU8sR0FBRyxJQUFJOEwsTUFBSixFQUFkO0FBRUksU0FBTztBQUFFQSxVQUFNLEVBQUVBLE1BQVY7QUFBa0I5TCxXQUFPLEVBQUVBO0FBQTNCLEdBQVA7QUFDSCxDQS9lQSxDQUFELEMiLCJmaWxlIjoiZm9ybV9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2Zvcm1fcG9zdC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWcobmFtZSkge1xyXG4gICBsZXQgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgdGFnLmNsYXNzTGlzdC5hZGQoXCJ0YWdcIik7XHJcblxyXG4gICBsZXQgaG10bCA9IGBcclxuICAgPHNwYW4gY2xhc3M9XCJ0YWdfX25hbWVcIj4ke25hbWV9PC9zcGFuPlxyXG4gICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcyB0YWdfX3JlbW92ZVwiPjwvaT5cclxuICAgYDtcclxuXHJcbiAgIHRhZy5pbm5lckhUTUwgPSBobXRsO1xyXG4gICB0YWcucXVlcnlTZWxlY3RvcihcIi50YWdfX3JlbW92ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgcmVtb3ZlVGFnKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiB0YWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYWcodGFnKSB7XHJcbiAgIGxldCB0YWdzX3NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWdzX19zZWxlY3RlZFwiKTtcclxuICAgdGFnc19zZWxlY3RlZC5hcHBlbmRDaGlsZCh0YWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFnKHRhZykge1xyXG4gICBsZXQgdGFnc19zZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFnc19fc2VsZWN0ZWRcIik7XHJcbiAgIHRhZ3Nfc2VsZWN0ZWQucmVtb3ZlQ2hpbGQodGFnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhZ3MoKSB7XHJcbiAgIGxldCB0YWdzX3NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWdzX19zZWxlY3RlZFwiKTtcclxuICAgbGV0IHRhZ3MgPSB0YWdzX3NlbGVjdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFnXCIpO1xyXG5cclxuICAgbGV0IG5hbWVzID0gW107XHJcbiAgIHRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIGxldCB0YWdfbmFtZSA9IHRhZy5xdWVyeVNlbGVjdG9yKFwiLnRhZ19fbmFtZVwiKS5pbm5lckhUTUw7XHJcbiAgICAgIG5hbWVzLnB1c2godGFnX25hbWUpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiBuYW1lcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRhZ3Mob3B0aW9ucykge1xyXG4gICB0aGlzLnRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMudGFnKTtcclxuXHJcbiAgIHRoaXMudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAgaGVscGVycy50aHJvdHRsZSgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBoZWxwZXJzLmdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0LCBcImJvZHlfX25hbWVcIikuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgfSk7XHJcblxyXG4gICB0aGlzLnJlbW92ZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgIGlmICh0YWcgPT0gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib3hfX3RhZ1wiKSkgcmV0dXJuO1xyXG4gICAgICAgICBlbHNlIHRhZy5jbGFzc0xpc3QucmVtb3ZlKFwidGFnX19hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRDbGFzcyA9ICgpID0+IHtcclxuICAgICAgaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZSh0aGlzLnRhcmdldCwgXCJib3hfX3RhZ1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwidGFnX19hY3RpdmVcIik7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmdldEN1cnJlbnRUYWcgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBjdXJyZW50X3RhZyA9IGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUodGhpcy50YXJnZXQsIFwiYm94X190YWdcIikuZ2V0QXR0cmlidXRlKFwidGFnXCIpO1xyXG4gICAgICByZXR1cm4gY3VycmVudF90YWc7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnNldFRhZyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNfdGFnID09IHRoaXMuY3VycmVudF90YWcpIHtcclxuICAgICAgICAgdGhpcy50YWcgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnRhZyA9IHRoaXMuY3VycmVudF90YWc7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50X3RhZyA9IHRoaXMuZ2V0Q3VycmVudFRhZygpO1xyXG4gICAgICB0aGlzLnByZXZpb3VzX3RhZyA9IG9wdGlvbnMuZ2V0VGFnKCk7XHJcbiAgICAgIHRoaXMuc2V0VGFnKCk7XHJcblxyXG4gICAgICBvcHRpb25zLnNldFRhZyh0aGlzLnRhZyk7XHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XHJcbiAgICAgIHRoaXMuYWRkQ2xhc3MoKTtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKHRoaXMudGFnLCB0aGlzLm5hbWUpO1xyXG4gICB9O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIHRhZ3MgZnJvbSBcIi4vY29tcG9uZW50cy90YWdzXCI7XHJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuXHJcbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcIi4vanNfcm91dGVzLmpzb25cIik7XHJcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcclxuY29uc3QgYXV0b0NvbXBsZXRlID0gcmVxdWlyZShcIkB0YXJla3JhYWZhdC9hdXRvY29tcGxldGUuanMvZGlzdC9qcy9hdXRvQ29tcGxldGVcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQXV0b0NvbXBsZXRlKCkge1xyXG4gICBuZXcgYXV0b0NvbXBsZXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICBzcmM6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoXCJmaW5kX3RhZ3NcIiwgeyBxdWVyeTogcXVlcnkgfSkpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc291cmNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRhZ3M7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGtleTogW1wibmFtZVwiXSxcclxuICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBwbGFjZUhvbGRlcjogXCJFbnRlciBUYWdcIixcclxuICAgICAgc2VsZWN0b3I6IFwiI2lucHV0X190YWdcIixcclxuICAgICAgdGhyZXNob2xkOiAxLFxyXG4gICAgICBkZWJvdW5jZTogMzAwLFxyXG4gICAgICAvLyBzZWFyY2hFbmdpbmU6IFwic3RyaWN0XCIsXHJcbiAgICAgIHJlc3VsdHNMaXN0OiB7XHJcbiAgICAgICAgIHJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgY29udGFpbmVyOiAoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhZ3NfX21hdGNoXCIpO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBkZXN0aW5hdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpLFxyXG4gICAgICAgICBwb3NpdGlvbjogXCJhZnRlcmVuZFwiLFxyXG4gICAgICAgICBlbGVtZW50OiBcImRpdlwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBoaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgIHJlc3VsdEl0ZW06IHtcclxuICAgICAgICAgY29udGVudDogKGRhdGEsIHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBzb3VyY2UuaW5uZXJIVE1MID0gZGF0YS5tYXRjaDtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZWxlbWVudDogXCJkaXZcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG5vUmVzdWx0czogKCkgPT4ge1xyXG4gICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+YDtcclxuICAgICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm9fcmVzdWx0XCIpO1xyXG4gICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIxXCIpO1xyXG4gICAgICAgICByZXN1bHQuaW5uZXJIVE1MID0gXCJDcmVhdGUgbmV3IHRhZyBcIjtcclxuICAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3NfX21hdGNoXCIpLmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICByZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dF9fdGFnXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICB0YWdzLmFkZFRhZyh0YWdzLmNyZWF0ZVRhZyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhZ3NfX21hdGNoXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBvblNlbGVjdGlvbjogKGZlZWRiYWNrKSA9PiB7XHJcbiAgICAgICAgIHRhZ3MuYWRkVGFnKHRhZ3MuY3JlYXRlVGFnKGZlZWRiYWNrLnNlbGVjdGlvbi5tYXRjaCkpO1xyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0X190YWdcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9LFxyXG4gICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEJhcihvcHRpb25zKSB7XHJcbiAgIHRoaXMuaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdCgpO1xyXG4gICAgICB0aGlzLmFkZEV2KCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnNyYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBhd2FpdCBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKFwiYnJvd3NlXCIsIHsgcXVlcnk6IHRoaXMucXVlcnkgfSkpO1xyXG4gICAgICB0aGlzLmRhdGEgPSBhd2FpdCB0aGlzLnNvdXJjZS5qc29uKCk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnJlc3VsdFBvc3QgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGhpcy5kYXRhLnBvc3RzX2RhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICBsZXQgdGFncyA9IFwiXCI7XHJcbiAgICAgICAgIGl0ZW0udGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgdGFncyArPSBgXHJcbiAgICAgICAgICAgIDxzcGFuPiMke3RoaXMuaGlnaGxpZ2h0KHRhZy5uYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmZyb250X2NvdmVyX2xpbmt9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPiR7dGhpcy5oaWdobGlnaHQoaXRlbS50aXRsZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdj4ke3RhZ3N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXN1bC1pdGVtX190eXBlXCI+UG9zdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBgO1xyXG5cclxuICAgICAgICAgbGV0IHJlc3VsdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uY2xhc3NMaXN0LmFkZChcImJveF9fcmVzdWx0LWl0ZW1cIik7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuYXBwZW5kQ2hpbGQocmVzdWx0X2l0ZW0pO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KFwicmVhZF9wb3N0XCIsIGl0ZW0uaWQsIGl0ZW0uYXV0aG9yLmlkKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfTtcclxuXHJcbiAgIHRoaXMucmVzdWx0QXV0aG9yID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGEucHJvZmlsZXNfZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5hdmF0YXJ9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX2NvbFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPiR7dGhpcy5oaWdobGlnaHQoaXRlbS5maXJzdG5hbWUpfSAke3RoaXMuaGlnaGxpZ2h0KGl0ZW0ubGFzdG5hbWUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3VsLWl0ZW1fX25pY2tuYW1lXCI+JHtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQoaXRlbS5uaWNrbmFtZSkgPyBcIkBcIiArIHRoaXMuaGlnaGxpZ2h0KGl0ZW0ubmlja25hbWUpIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVzdWwtaXRlbV9fdHlwZVwiPkF1dGhvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBgO1xyXG4gICAgICAgICBsZXQgcmVzdWx0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICByZXN1bHRfaXRlbS5jbGFzc0xpc3QuYWRkKFwiYm94X19yZXN1bHQtaXRlbVwiKTtcclxuICAgICAgICAgcmVzdWx0X2l0ZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgdGhpcy5yZXN1bHRzTGlzdC5hcHBlbmRDaGlsZChyZXN1bHRfaXRlbSk7XHJcbiAgICAgICAgIHJlc3VsdF9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoXCJwcm9maWxlX3BhZ2VcIiwgbnVsbCwgaXRlbS5pZCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLm5vUmVzdWx0cyA9ICgpID0+IHtcclxuICAgICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaXRlbV9fY29sXCI+XHJcbiAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWdfX25vdC1mb3VuZFwiIHNyYz1cIi9pbWcvZGVmYXVsdHMvbm90X2ZvdW5kLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19jb2xcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pdGVtX19yb3cgcmVzdWx0LWl0ZW1fX25vLXJlc3VsdHNcIj5ObyByZXN1bHRzIGZvdW5kITwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWl0ZW1fX3Jvd1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgYDtcclxuICAgICAgbGV0IHJlc3VsdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcmVzdWx0X2l0ZW0uY2xhc3NMaXN0LmFkZChcImJveF9fcmVzdWx0LWl0ZW1cIik7XHJcbiAgICAgIHJlc3VsdF9pdGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3QuYXBwZW5kQ2hpbGQocmVzdWx0X2l0ZW0pO1xyXG4gICAgICByZXN1bHRfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLmhpZ2hsaWdodCA9IChzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKCFzdHJpbmcpIHJldHVybjtcclxuICAgICAgaWYgKHN0cmluZy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgbGV0IHN0YXJ0ID0gc3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnF1ZXJ5KTtcclxuICAgICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgdGhpcy5xdWVyeS5sZW5ndGg7XHJcbiAgICAgICAgIGxldCBzdWJzdHIgPSBzdHJpbmcuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgICAgICBsZXQgaGlnaGxpZ2h0ZWQgPSBzdHJpbmdcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpLCBgPHNwYW4gY2xhc3M9XCJ0ZXh0X19oaWdobGlnaHRcIj4ke3N1YnN0cn08L3NwYW4+YCk7XHJcbiAgICAgICAgIHJldHVybiBoaWdobGlnaHRlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHN0cmluZztcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZXN1bHRzTGlzdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgb3B0aW9ucy5yZXN1bHRzTGlzdCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVzdWx0c0xpc3QpO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5hZGRFdiA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnNlYXJjaF9pbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgXCJpbnB1dFwiLFxyXG4gICAgICAgICBoZWxwZXJzLnRocm90dGxlTGFzdChhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5Lmxlbmd0aCA+PSBvcHRpb25zLnRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNyYygpO1xyXG5cclxuICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wb3N0c19kYXRhLmxlbmd0aCA8PSAwICYmIHRoaXMuZGF0YS5wcm9maWxlc19kYXRhLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubm9SZXN1bHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX21haW4tY29udGVudFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0UG9zdCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdEF1dGhvcigpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X19tYWluLWNvbnRlbnRcIikpXHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9fbWFpbi1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sIG9wdGlvbnMudGhyb3R0bGUpXHJcbiAgICAgICk7XHJcbiAgIH07XHJcblxyXG4gICB0aGlzLnNldFBvc2l0aW9uID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uID0gaGVscGVycy5nZXRQb3NpdGlvbnModGFyZ2V0KTtcclxuICAgICAgdGhpcy5yZXN1bHRzTGlzdC5zdHlsZS50b3AgPSB0aGlzLmxvY2F0aW9uLnRvcCArIDYzICsgXCJweFwiO1xyXG4gICB9O1xyXG5cclxuICAgdGhpcy5yZWRpcmVjdCA9IChsb2MsIHBvc3QgPSBudWxsLCBhdXRob3IgPSBudWxsKSA9PiB7XHJcbiAgICAgIGlmIChsb2MgPT0gXCJwcm9maWxlX3BhZ2VcIikge1xyXG4gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFJvdXRpbmcuZ2VuZXJhdGUobG9jLCB7IHByb2ZpbGU6IGF1dGhvciB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBSb3V0aW5nLmdlbmVyYXRlKGxvYywgeyBwcm9maWxlOiBhdXRob3IsIHBvc3Q6IHBvc3QgfSk7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHRoaXMuaW5pdCgpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuICAgdmFyIHRpbWVvdXQ7XHJcbiAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBvYmogPSB0aGlzLFxyXG4gICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkob2JqLCBhcmdzKTtcclxuICAgICAgfTtcclxuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xyXG4gICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlLCBwcmVmb21hdHRlZERhdGUgPSBmYWxzZSwgaGlkZVllYXIgPSBmYWxzZSkge1xyXG4gICBjb25zdCBNT05USF9OQU1FUyA9IFtcclxuICAgICAgXCJKYW51YXJ5XCIsXHJcbiAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgXCJNYXJjaFwiLFxyXG4gICAgICBcIkFwcmlsXCIsXHJcbiAgICAgIFwiTWF5XCIsXHJcbiAgICAgIFwiSnVuZVwiLFxyXG4gICAgICBcIkp1bHlcIixcclxuICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgXCJTZXB0ZW1iZXJcIixcclxuICAgICAgXCJPY3RvYmVyXCIsXHJcbiAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgXCJEZWNlbWJlclwiLFxyXG4gICBdO1xyXG4gICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgY29uc3QgbW9udGggPSBNT05USF9OQU1FU1tkYXRlLmdldE1vbnRoKCldO1xyXG4gICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuXHJcbiAgIGlmIChtaW51dGVzIDwgMTApIHtcclxuICAgICAgLy8gQWRkaW5nIGxlYWRpbmcgemVybyB0byBtaW51dGVzXHJcbiAgICAgIG1pbnV0ZXMgPSBgMCR7bWludXRlc31gO1xyXG4gICB9XHJcblxyXG4gICBpZiAocHJlZm9tYXR0ZWREYXRlKSB7XHJcbiAgICAgIC8vIFRvZGF5IGF0IDEwOjIwXHJcbiAgICAgIC8vIFllc3RlcmRheSBhdCAxMDoyMFxyXG4gICAgICByZXR1cm4gYCR7cHJlZm9tYXR0ZWREYXRlfSBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgfVxyXG5cclxuICAgaWYgKGhpZGVZZWFyKSB7XHJcbiAgICAgIC8vIDEwLiBKYW51YXJ5IGF0IDEwOjIwXHJcbiAgICAgIHJldHVybiBgJHtkYXl9ICR7bW9udGh9IGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICB9XHJcblxyXG4gICAvLyAxMC4gSmFudWFyeSAyMDE3LiBhdCAxMDoyMFxyXG4gICByZXR1cm4gYCR7ZGF5fSAke21vbnRofSAke3llYXJ9LiBhdCAke2hvdXJzfToke21pbnV0ZXN9YDtcclxufVxyXG5cclxuLy8gLS0tIE1haW4gZnVuY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBZ28oZGF0ZVBhcmFtKSB7XHJcbiAgIGlmICghZGF0ZVBhcmFtKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCBkYXRlID0gdHlwZW9mIGRhdGVQYXJhbSA9PT0gXCJvYmplY3RcIiA/IGRhdGVQYXJhbSA6IG5ldyBEYXRlKGRhdGVQYXJhbSk7XHJcbiAgIGNvbnN0IERBWV9JTl9NUyA9IDg2NDAwMDAwOyAvLyAyNCAqIDYwICogNjAgKiAxMDAwXHJcbiAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUodG9kYXkgLSBEQVlfSU5fTVMpO1xyXG4gICBjb25zdCBzZWNvbmRzID0gTWF0aC5yb3VuZCgodG9kYXkgLSBkYXRlKSAvIDEwMDApO1xyXG4gICBjb25zdCBtaW51dGVzID0gTWF0aC5yb3VuZChzZWNvbmRzIC8gNjApO1xyXG4gICBjb25zdCBpc1RvZGF5ID0gdG9kYXkudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCk7XHJcbiAgIGNvbnN0IGlzWWVzdGVyZGF5ID0geWVzdGVyZGF5LnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpO1xyXG4gICBjb25zdCBpc1RoaXNZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgaWYgKHNlY29uZHMgPCA1KSB7XHJcbiAgICAgIHJldHVybiBcIm5vd1wiO1xyXG4gICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xyXG4gICAgICByZXR1cm4gYCR7c2Vjb25kc30gc2Vjb25kcyBhZ29gO1xyXG4gICB9IGVsc2UgaWYgKHNlY29uZHMgPCA5MCkge1xyXG4gICAgICByZXR1cm4gXCJhYm91dCBhIG1pbnV0ZSBhZ29cIjtcclxuICAgfSBlbHNlIGlmIChtaW51dGVzIDwgNjApIHtcclxuICAgICAgcmV0dXJuIGAke21pbnV0ZXN9IG1pbnV0ZXMgYWdvYDtcclxuICAgfSBlbHNlIGlmIChpc1RvZGF5KSB7XHJcbiAgICAgIHJldHVybiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUsIFwiVG9kYXlcIik7IC8vIFRvZGF5IGF0IDEwOjIwXHJcbiAgIH0gZWxzZSBpZiAoaXNZZXN0ZXJkYXkpIHtcclxuICAgICAgcmV0dXJuIGdldEZvcm1hdHRlZERhdGUoZGF0ZSwgXCJZZXN0ZXJkYXlcIik7IC8vIFllc3RlcmRheSBhdCAxMDoyMFxyXG4gICB9IGVsc2UgaWYgKGlzVGhpc1llYXIpIHtcclxuICAgICAgcmV0dXJuIGdldEZvcm1hdHRlZERhdGUoZGF0ZSwgZmFsc2UsIHRydWUpOyAvLyAxMC4gSmFudWFyeSBhdCAxMDoyMFxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKTsgLy8gMTAuIEphbnVhcnkgMjAxNy4gYXQgMTA6MjBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKGVsZW1lbnQsIGNsYXNzbmFtZSkge1xyXG4gICAvLyBsb29rIGZvciBkaXJlY3QgcGFyZW50XHJcbiAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc25hbWUpKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAvLyBpZiBubyBkaXJlY3QgcGFyZW50IGZvdW5kIGxvb2sgYnkgY2xhc3NuYW1lXHJcbiAgIH0gZWxzZSBpZiAoIWVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc25hbWUpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NuYW1lKVswXTtcclxuICAgICAgLy9pZiBlbGVtZW50IGhhdmUgbm8gcGFyZW50IHRocm93IGVycm9yXHJcbiAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIC8vIHRocm93IGBlcnJvciBmcm9tIGhlbHBlcnMuZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWU6IHdoZXJlIHdhcyBhbiBlcnJvciBpbiBmaW5kaW5nIHRhcmdldCBlbGVtZW50IOKAkyAke2NsYXNzbmFtZX1gO1xyXG4gICB9XHJcbiAgIHJldHVybiBnZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZShlbGVtZW50LnBhcmVudEVsZW1lbnQsIGNsYXNzbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyT3JOdWxsKGNsYXNzbGlzdCwgYXR0cikge1xyXG4gICB2YXIgY3VycmVudF9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NsaXN0LnNoaWZ0KCl9YCk7XHJcblxyXG4gICBjbGFzc2xpc3QuZm9yRWFjaCgoY2xhc3NuYW1lKSA9PiB7XHJcbiAgICAgIGlmIChjdXJyZW50X2VsZW1lbnQpIHtcclxuICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzbmFtZX1gKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxuXHJcbiAgIGlmIChjdXJyZW50X2VsZW1lbnQpIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSA9IGN1cnJlbnRfZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XHJcbiAgIH1cclxuXHJcbiAgIHZhciByZXR1cm5fdmFsdWUgPSBhdHRyaWJ1dGUgPyBhdHRyaWJ1dGUgOiBudWxsO1xyXG4gICByZXR1cm4gcmV0dXJuX3ZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0ck9yRmFsc2UoY2xhc3NsaXN0LCBuYW1lLCBhdHRyKSB7XHJcbiAgIHZhciBjdXJyZW50X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc2xpc3Quc2hpZnQoKX1gKTtcclxuXHJcbiAgIGNsYXNzbGlzdC5mb3JFYWNoKChjbGFzc25hbWUpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICBjdXJyZW50X2VsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHIpO1xyXG4gICB9XHJcblxyXG4gICB2YXIgcmV0dXJuX3ZhbHVlID0gY3VycmVudF9lbGVtZW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICByZXR1cm4gcmV0dXJuX3ZhbHVlO1xyXG59XHJcblxyXG4vLyBsYXN0IGVsZW1lbnQgaW4gYXJyYXlcclxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcclxuICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG4vL3JldHVybiBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBlbGVtZW50XHJcbmV4cG9ydCB2YXIgZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICB2YXIgdG9wID0gMCxcclxuICAgICAgbGVmdCA9IDA7XHJcbiAgIGRvIHtcclxuICAgICAgdG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XHJcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0IHx8IDA7XHJcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcclxuICAgfSB3aGlsZSAoZWxlbWVudCk7XHJcblxyXG4gICByZXR1cm4ge1xyXG4gICAgICB0b3A6IHRvcCxcclxuICAgICAgbGVmdDogbGVmdCxcclxuICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgdmFyIHRvcCA9IDAsXHJcbiAgICAgIGxlZnQgPSAwO1xyXG4gICB2YXIgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQ7XHJcbiAgIGRvIHtcclxuICAgICAgdG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XHJcbiAgICAgIGxlZnQgKz0gZWxlbWVudC5vZmZzZXRMZWZ0IHx8IDA7XHJcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcclxuICAgfSB3aGlsZSAoZWxlbWVudCk7XHJcblxyXG4gICByZXR1cm4ge1xyXG4gICAgICB0b3A6IHRvcCxcclxuICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgaWYgKG9iamVjdCA9PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG4gICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgfSBlbHNlIGlmIChvYmplY3QuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGNhbGxiYWNrKTtcclxuICAgfSBlbHNlIHtcclxuICAgICAgb2JqZWN0W1wib25cIiArIHR5cGVdID0gY2FsbGJhY2s7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XHJcbiAgIGxldCBpblRocm90dGxlO1xyXG4gICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgICAgaWYgKCFpblRocm90dGxlKSB7XHJcbiAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChpblRocm90dGxlID0gZmFsc2UpLCBsaW1pdCk7XHJcbiAgICAgIH1cclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlTGFzdChmdW5jLCBsaW1pdCkge1xyXG4gICBsZXQgbGFzdEZ1bmM7XHJcbiAgIGxldCBsYXN0UmFuO1xyXG4gICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgaWYgKCFsYXN0UmFuKSB7XHJcbiAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xyXG4gICAgICAgICBsYXN0RnVuYyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RSYW4gPj0gbGltaXQpIHtcclxuICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSwgbGltaXQgLSAoRGF0ZS5ub3coKSAtIGxhc3RSYW4pKTtcclxuICAgICAgfVxyXG4gICB9O1xyXG59XHJcblxyXG4vLyAqKiBGQURFIE9VVCBGVU5DVElPTiAqKlxyXG5leHBvcnQgZnVuY3Rpb24gZmFkZU91dChlbCkge1xyXG4gICBlbC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgKGZ1bmN0aW9uIGZhZGUoKSB7XHJcbiAgICAgIGlmICgoZWwuc3R5bGUub3BhY2l0eSAtPSAwLjEpIDwgMCkge1xyXG4gICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxuICAgICAgfVxyXG4gICB9KSgpO1xyXG59XHJcblxyXG4vLyAqKiBGQURFIElOIEZVTkNUSU9OICoqXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW4oZWwsIGRpc3BsYXkpIHtcclxuICAgZWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgIGVsLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuICAgKGZ1bmN0aW9uIGZhZGUoKSB7XHJcbiAgICAgIHZhciB2YWwgPSBwYXJzZUZsb2F0KGVsLnN0eWxlLm9wYWNpdHkpO1xyXG4gICAgICBpZiAoISgodmFsICs9IDAuMSkgPiAxKSkge1xyXG4gICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdmFsO1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZSk7XHJcbiAgICAgIH1cclxuICAgfSkoKTtcclxufVxyXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcclxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxyXG4gIChnbG9iYWwuYXV0b0NvbXBsZXRlID0gZmFjdG9yeSgpKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XHJcblxyXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcclxuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XHJcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcclxuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xyXG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XHJcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcclxuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcclxuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcclxuICB9XHJcblxyXG4gIHZhciBkYXRhQXR0cmlidXRlID0gXCJkYXRhLWlkXCI7XHJcbiAgdmFyIHNlbGVjdCA9IHtcclxuICAgIHJlc3VsdHNMaXN0OiBcImF1dG9Db21wbGV0ZV9saXN0XCIsXHJcbiAgICByZXN1bHQ6IFwiYXV0b0NvbXBsZXRlX3Jlc3VsdFwiLFxyXG4gICAgaGlnaGxpZ2h0OiBcImF1dG9Db21wbGV0ZV9oaWdobGlnaHRlZFwiLFxyXG4gICAgc2VsZWN0ZWRSZXN1bHQ6IFwiYXV0b0NvbXBsZXRlX3NlbGVjdGVkXCJcclxuICB9O1xyXG4gIHZhciBrZXlzID0ge1xyXG4gICAgRU5URVI6IDEzLFxyXG4gICAgQVJST1dfVVA6IDM4LFxyXG4gICAgQVJST1dfRE9XTjogNDBcclxuICB9O1xyXG4gIHZhciBnZXRJbnB1dCA9IGZ1bmN0aW9uIGdldElucHV0KHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcigpO1xyXG4gIH07XHJcbiAgdmFyIGNyZWF0ZVJlc3VsdHNMaXN0ID0gZnVuY3Rpb24gY3JlYXRlUmVzdWx0c0xpc3QocmVuZGVyUmVzdWx0cykge1xyXG4gICAgdmFyIHJlc3VsdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyZW5kZXJSZXN1bHRzLmVsZW1lbnQpO1xyXG4gICAgcmVzdWx0c0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgc2VsZWN0LnJlc3VsdHNMaXN0KTtcclxuICAgIGlmIChyZW5kZXJSZXN1bHRzLmNvbnRhaW5lcikge1xyXG4gICAgICByZW5kZXJSZXN1bHRzLmNvbnRhaW5lcihyZXN1bHRzTGlzdCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJSZXN1bHRzLmRlc3RpbmF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudChyZW5kZXJSZXN1bHRzLnBvc2l0aW9uLCByZXN1bHRzTGlzdCk7XHJcbiAgICByZXR1cm4gcmVzdWx0c0xpc3Q7XHJcbiAgfTtcclxuICB2YXIgaGlnaGxpZ2h0ID0gZnVuY3Rpb24gaGlnaGxpZ2h0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz1cIi5jb25jYXQoc2VsZWN0LmhpZ2hsaWdodCwgXCI+XCIpLmNvbmNhdCh2YWx1ZSwgXCI8L3NwYW4+XCIpO1xyXG4gIH07XHJcbiAgdmFyIGFkZFJlc3VsdHNUb0xpc3QgPSBmdW5jdGlvbiBhZGRSZXN1bHRzVG9MaXN0KHJlc3VsdHNMaXN0LCBkYXRhU3JjLCByZXN1bHRJdGVtKSB7XHJcbiAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBkYXRhU3JjLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCByZWNvcmQpIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocmVzdWx0SXRlbS5lbGVtZW50KTtcclxuICAgICAgdmFyIHJlc3VsdEluZGV4ID0gZGF0YVNyY1tyZWNvcmRdLmluZGV4O1xyXG4gICAgICByZXN1bHQuc2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUsIHJlc3VsdEluZGV4KTtcclxuICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHNlbGVjdC5yZXN1bHQpO1xyXG4gICAgICByZXN1bHRJdGVtLmNvbnRlbnQgPyByZXN1bHRJdGVtLmNvbnRlbnQoZXZlbnQsIHJlc3VsdCkgOiByZXN1bHQuaW5uZXJIVE1MID0gZXZlbnQubWF0Y2ggfHwgZXZlbnQ7XHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHJlc3VsdHNMaXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9O1xyXG4gIHZhciBjbGVhclJlc3VsdHMgPSBmdW5jdGlvbiBjbGVhclJlc3VsdHMocmVzdWx0c0xpc3QpIHtcclxuICAgIHJldHVybiByZXN1bHRzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH07XHJcbiAgdmFyIG9uU2VsZWN0aW9uID0gZnVuY3Rpb24gb25TZWxlY3Rpb24oZXZlbnQsIGZpZWxkLCByZXN1bHRzTGlzdCwgZmVlZGJhY2ssIHJlc3VsdHNWYWx1ZXMsIHNlbGVjdGlvbikge1xyXG4gICAgZmVlZGJhY2soe1xyXG4gICAgICBldmVudDogZXZlbnQsXHJcbiAgICAgIHF1ZXJ5OiBmaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgPyBmaWVsZC52YWx1ZSA6IGZpZWxkLmlubmVySFRNTCxcclxuICAgICAgbWF0Y2hlczogcmVzdWx0c1ZhbHVlcy5tYXRjaGVzLFxyXG4gICAgICByZXN1bHRzOiByZXN1bHRzVmFsdWVzLmxpc3QubWFwKGZ1bmN0aW9uIChyZWNvcmQpIHtcclxuICAgICAgICByZXR1cm4gcmVjb3JkLnZhbHVlO1xyXG4gICAgICB9KSxcclxuICAgICAgc2VsZWN0aW9uOiByZXN1bHRzVmFsdWVzLmxpc3QuZmluZChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0ga2V5cy5FTlRFUikge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmluZGV4ID09PSBOdW1iZXIoc2VsZWN0aW9uLmdldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlZG93blwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUuaW5kZXggPT09IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBjbGVhclJlc3VsdHMocmVzdWx0c0xpc3QpO1xyXG4gIH07XHJcbiAgdmFyIG5hdmlnYXRpb24gPSBmdW5jdGlvbiBuYXZpZ2F0aW9uKGlucHV0LCByZXN1bHRzTGlzdCwgZmVlZGJhY2ssIHJlc3VsdHNWYWx1ZXMpIHtcclxuICAgIHZhciBsaSA9IHJlc3VsdHNMaXN0LmNoaWxkTm9kZXMsXHJcbiAgICAgICAgbGlMZW5ndGggPSBsaS5sZW5ndGggLSAxO1xyXG4gICAgdmFyIGxpU2VsZWN0ZWQgPSB1bmRlZmluZWQsXHJcbiAgICAgICAgbmV4dDtcclxuICAgIHZhciByZW1vdmVTZWxlY3Rpb24gPSBmdW5jdGlvbiByZW1vdmVTZWxlY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICAgIGxpU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShzZWxlY3Quc2VsZWN0ZWRSZXN1bHQpO1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XHJcbiAgICAgICAgbmV4dCA9IGxpU2VsZWN0ZWQubmV4dFNpYmxpbmc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV4dCA9IGxpU2VsZWN0ZWQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGhpZ2hsaWdodFNlbGVjdGlvbiA9IGZ1bmN0aW9uIGhpZ2hsaWdodFNlbGVjdGlvbihjdXJyZW50KSB7XHJcbiAgICAgIGxpU2VsZWN0ZWQgPSBjdXJyZW50O1xyXG4gICAgICBsaVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoc2VsZWN0LnNlbGVjdGVkUmVzdWx0KTtcclxuICAgIH07XHJcbiAgICBpbnB1dC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGxpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgIGNhc2Uga2V5cy5BUlJPV19VUDpcclxuICAgICAgICAgICAgaWYgKGxpU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICByZW1vdmVTZWxlY3Rpb24oMCk7XHJcbiAgICAgICAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihuZXh0KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U2VsZWN0aW9uKGxpW2xpTGVuZ3RoXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihsaVtsaUxlbmd0aF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBrZXlzLkFSUk9XX0RPV046XHJcbiAgICAgICAgICAgIGlmIChsaVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgcmVtb3ZlU2VsZWN0aW9uKDEpO1xyXG4gICAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRTZWxlY3Rpb24obmV4dCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihsaVswXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodFNlbGVjdGlvbihsaVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIGtleXMuRU5URVI6XHJcbiAgICAgICAgICAgIGlmIChsaVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Rpb24oZXZlbnQsIGlucHV0LCByZXN1bHRzTGlzdCwgZmVlZGJhY2ssIHJlc3VsdHNWYWx1ZXMsIGxpU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGkuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XHJcbiAgICAgIHNlbGVjdGlvbi5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHJldHVybiBvblNlbGVjdGlvbihldmVudCwgaW5wdXQsIHJlc3VsdHNMaXN0LCBmZWVkYmFjaywgcmVzdWx0c1ZhbHVlcyk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHZhciBhdXRvQ29tcGxldGVWaWV3ID0ge1xyXG4gICAgZ2V0SW5wdXQ6IGdldElucHV0LFxyXG4gICAgY3JlYXRlUmVzdWx0c0xpc3Q6IGNyZWF0ZVJlc3VsdHNMaXN0LFxyXG4gICAgaGlnaGxpZ2h0OiBoaWdobGlnaHQsXHJcbiAgICBhZGRSZXN1bHRzVG9MaXN0OiBhZGRSZXN1bHRzVG9MaXN0LFxyXG4gICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvbixcclxuICAgIGNsZWFyUmVzdWx0czogY2xlYXJSZXN1bHRzXHJcbiAgfTtcclxuXHJcbiAgdmFyIEN1c3RvbUV2ZW50UG9seWZpbGwgPSBmdW5jdGlvbiBDdXN0b21FdmVudFBvbHlmaWxsKGV2ZW50LCBwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XHJcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxyXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcclxuICAgIH07XHJcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcclxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcbiAgICByZXR1cm4gZXZ0O1xyXG4gIH07XHJcbiAgQ3VzdG9tRXZlbnRQb2x5ZmlsbC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXG4gIHZhciBDdXN0b21FdmVudFdyYXBwZXIgPSB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIgJiYgd2luZG93LkN1c3RvbUV2ZW50IHx8IEN1c3RvbUV2ZW50UG9seWZpbGw7XHJcbiAgdmFyIGluaXRFbGVtZW50Q2xvc2VzdFBvbHlmaWxsID0gZnVuY3Rpb24gaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGwoKSB7XHJcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcclxuICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcclxuICAgIH1cclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCkge1xyXG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICB2YXIgZWwgPSB0aGlzO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudCB8fCBlbC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG4gIHZhciBQb2x5ZmlsbCA9IHtcclxuICAgIEN1c3RvbUV2ZW50V3JhcHBlcjogQ3VzdG9tRXZlbnRXcmFwcGVyLFxyXG4gICAgaW5pdEVsZW1lbnRDbG9zZXN0UG9seWZpbGw6IGluaXRFbGVtZW50Q2xvc2VzdFBvbHlmaWxsXHJcbiAgfTtcclxuXHJcbiAgdmFyIGF1dG9Db21wbGV0ZSA9XHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gYXV0b0NvbXBsZXRlKGNvbmZpZykge1xyXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXV0b0NvbXBsZXRlKTtcclxuICAgICAgdmFyIF9jb25maWckc2VsZWN0b3IgPSBjb25maWcuc2VsZWN0b3IsXHJcbiAgICAgICAgICBzZWxlY3RvciA9IF9jb25maWckc2VsZWN0b3IgPT09IHZvaWQgMCA/IFwiI2F1dG9Db21wbGV0ZVwiIDogX2NvbmZpZyRzZWxlY3RvcixcclxuICAgICAgICAgIF9jb25maWckZGF0YSA9IGNvbmZpZy5kYXRhLFxyXG4gICAgICAgICAga2V5ID0gX2NvbmZpZyRkYXRhLmtleSxcclxuICAgICAgICAgIF9zcmMgPSBfY29uZmlnJGRhdGEuc3JjLFxyXG4gICAgICAgICAgX2NvbmZpZyRkYXRhJGNhY2hlID0gX2NvbmZpZyRkYXRhLmNhY2hlLFxyXG4gICAgICAgICAgY2FjaGUgPSBfY29uZmlnJGRhdGEkY2FjaGUgPT09IHZvaWQgMCA/IHRydWUgOiBfY29uZmlnJGRhdGEkY2FjaGUsXHJcbiAgICAgICAgICBxdWVyeSA9IGNvbmZpZy5xdWVyeSxcclxuICAgICAgICAgIF9jb25maWckdHJpZ2dlciA9IGNvbmZpZy50cmlnZ2VyO1xyXG4gICAgICBfY29uZmlnJHRyaWdnZXIgPSBfY29uZmlnJHRyaWdnZXIgPT09IHZvaWQgMCA/IHt9IDogX2NvbmZpZyR0cmlnZ2VyO1xyXG4gICAgICB2YXIgX2NvbmZpZyR0cmlnZ2VyJGV2ZW50ID0gX2NvbmZpZyR0cmlnZ2VyLmV2ZW50LFxyXG4gICAgICAgICAgZXZlbnQgPSBfY29uZmlnJHRyaWdnZXIkZXZlbnQgPT09IHZvaWQgMCA/IFtcImlucHV0XCJdIDogX2NvbmZpZyR0cmlnZ2VyJGV2ZW50LFxyXG4gICAgICAgICAgX2NvbmZpZyR0cmlnZ2VyJGNvbmRpID0gX2NvbmZpZyR0cmlnZ2VyLmNvbmRpdGlvbixcclxuICAgICAgICAgIGNvbmRpdGlvbiA9IF9jb25maWckdHJpZ2dlciRjb25kaSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfY29uZmlnJHRyaWdnZXIkY29uZGksXHJcbiAgICAgICAgICBfY29uZmlnJHNlYXJjaEVuZ2luZSA9IGNvbmZpZy5zZWFyY2hFbmdpbmUsXHJcbiAgICAgICAgICBzZWFyY2hFbmdpbmUgPSBfY29uZmlnJHNlYXJjaEVuZ2luZSA9PT0gdm9pZCAwID8gXCJzdHJpY3RcIiA6IF9jb25maWckc2VhcmNoRW5naW5lLFxyXG4gICAgICAgICAgX2NvbmZpZyR0aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLFxyXG4gICAgICAgICAgdGhyZXNob2xkID0gX2NvbmZpZyR0aHJlc2hvbGQgPT09IHZvaWQgMCA/IDAgOiBfY29uZmlnJHRocmVzaG9sZCxcclxuICAgICAgICAgIF9jb25maWckZGVib3VuY2UgPSBjb25maWcuZGVib3VuY2UsXHJcbiAgICAgICAgICBkZWJvdW5jZSA9IF9jb25maWckZGVib3VuY2UgPT09IHZvaWQgMCA/IDAgOiBfY29uZmlnJGRlYm91bmNlLFxyXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCA9IGNvbmZpZy5yZXN1bHRzTGlzdDtcclxuICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCA9IF9jb25maWckcmVzdWx0c0xpc3QgPT09IHZvaWQgMCA/IHt9IDogX2NvbmZpZyRyZXN1bHRzTGlzdDtcclxuICAgICAgdmFyIF9jb25maWckcmVzdWx0c0xpc3QkciA9IF9jb25maWckcmVzdWx0c0xpc3QucmVuZGVyLFxyXG4gICAgICAgICAgcmVuZGVyID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckcmVzdWx0c0xpc3QkcixcclxuICAgICAgICAgIF9jb25maWckcmVzdWx0c0xpc3QkYyA9IF9jb25maWckcmVzdWx0c0xpc3QuY29udGFpbmVyLFxyXG4gICAgICAgICAgY29udGFpbmVyID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRjID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckcmVzdWx0c0xpc3QkYyxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5kZXN0aW5hdGlvbixcclxuICAgICAgICAgIF9jb25maWckcmVzdWx0c0xpc3QkcCA9IF9jb25maWckcmVzdWx0c0xpc3QucG9zaXRpb24sXHJcbiAgICAgICAgICBwb3NpdGlvbiA9IF9jb25maWckcmVzdWx0c0xpc3QkcCA9PT0gdm9pZCAwID8gXCJhZnRlcmVuZFwiIDogX2NvbmZpZyRyZXN1bHRzTGlzdCRwLFxyXG4gICAgICAgICAgX2NvbmZpZyRyZXN1bHRzTGlzdCRlID0gX2NvbmZpZyRyZXN1bHRzTGlzdC5lbGVtZW50LFxyXG4gICAgICAgICAgcmVzdWx0c0xpc3RFbGVtZW50ID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRlID09PSB2b2lkIDAgPyBcInVsXCIgOiBfY29uZmlnJHJlc3VsdHNMaXN0JGUsXHJcbiAgICAgICAgICBfY29uZmlnJHJlc3VsdHNMaXN0JG4gPSBfY29uZmlnJHJlc3VsdHNMaXN0Lm5hdmlnYXRpb24sXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uID0gX2NvbmZpZyRyZXN1bHRzTGlzdCRuID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckcmVzdWx0c0xpc3QkbixcclxuICAgICAgICAgIF9jb25maWckc29ydCA9IGNvbmZpZy5zb3J0LFxyXG4gICAgICAgICAgc29ydCA9IF9jb25maWckc29ydCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfY29uZmlnJHNvcnQsXHJcbiAgICAgICAgICBwbGFjZUhvbGRlciA9IGNvbmZpZy5wbGFjZUhvbGRlcixcclxuICAgICAgICAgIF9jb25maWckbWF4UmVzdWx0cyA9IGNvbmZpZy5tYXhSZXN1bHRzLFxyXG4gICAgICAgICAgbWF4UmVzdWx0cyA9IF9jb25maWckbWF4UmVzdWx0cyA9PT0gdm9pZCAwID8gNSA6IF9jb25maWckbWF4UmVzdWx0cyxcclxuICAgICAgICAgIF9jb25maWckcmVzdWx0SXRlbSA9IGNvbmZpZy5yZXN1bHRJdGVtO1xyXG4gICAgICBfY29uZmlnJHJlc3VsdEl0ZW0gPSBfY29uZmlnJHJlc3VsdEl0ZW0gPT09IHZvaWQgMCA/IHt9IDogX2NvbmZpZyRyZXN1bHRJdGVtO1xyXG4gICAgICB2YXIgX2NvbmZpZyRyZXN1bHRJdGVtJGNvID0gX2NvbmZpZyRyZXN1bHRJdGVtLmNvbnRlbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gX2NvbmZpZyRyZXN1bHRJdGVtJGNvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jb25maWckcmVzdWx0SXRlbSRjbyxcclxuICAgICAgICAgIF9jb25maWckcmVzdWx0SXRlbSRlbCA9IF9jb25maWckcmVzdWx0SXRlbS5lbGVtZW50LFxyXG4gICAgICAgICAgcmVzdWx0SXRlbUVsZW1lbnQgPSBfY29uZmlnJHJlc3VsdEl0ZW0kZWwgPT09IHZvaWQgMCA/IFwibGlcIiA6IF9jb25maWckcmVzdWx0SXRlbSRlbCxcclxuICAgICAgICAgIG5vUmVzdWx0cyA9IGNvbmZpZy5ub1Jlc3VsdHMsXHJcbiAgICAgICAgICBfY29uZmlnJGhpZ2hsaWdodCA9IGNvbmZpZy5oaWdobGlnaHQsXHJcbiAgICAgICAgICBoaWdobGlnaHQgPSBfY29uZmlnJGhpZ2hsaWdodCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfY29uZmlnJGhpZ2hsaWdodCxcclxuICAgICAgICAgIG9uU2VsZWN0aW9uID0gY29uZmlnLm9uU2VsZWN0aW9uO1xyXG4gICAgICB2YXIgcmVzdWx0c0xpc3RWaWV3ID0gcmVuZGVyID8gYXV0b0NvbXBsZXRlVmlldy5jcmVhdGVSZXN1bHRzTGlzdCh7XHJcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgICAgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uIHx8IGF1dG9Db21wbGV0ZVZpZXcuZ2V0SW5wdXQoc2VsZWN0b3IpLFxyXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgICBlbGVtZW50OiByZXN1bHRzTGlzdEVsZW1lbnRcclxuICAgICAgfSkgOiBudWxsO1xyXG4gICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICBzcmM6IGZ1bmN0aW9uIHNyYygpIHtcclxuICAgICAgICAgIHJldHVybiB0eXBlb2YgX3NyYyA9PT0gXCJmdW5jdGlvblwiID8gX3NyYygpIDogX3NyYztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleToga2V5LFxyXG4gICAgICAgIGNhY2hlOiBjYWNoZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgICAgIHRoaXMudHJpZ2dlciA9IHtcclxuICAgICAgICBldmVudDogZXZlbnQsXHJcbiAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zZWFyY2hFbmdpbmUgPSBzZWFyY2hFbmdpbmUgPT09IFwibG9vc2VcIiA/IFwibG9vc2VcIiA6IHR5cGVvZiBzZWFyY2hFbmdpbmUgPT09IFwiZnVuY3Rpb25cIiA/IHNlYXJjaEVuZ2luZSA6IFwic3RyaWN0XCI7XHJcbiAgICAgIHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xyXG4gICAgICB0aGlzLmRlYm91bmNlID0gZGVib3VuY2U7XHJcbiAgICAgIHRoaXMucmVzdWx0c0xpc3QgPSB7XHJcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXHJcbiAgICAgICAgdmlldzogcmVzdWx0c0xpc3RWaWV3LFxyXG4gICAgICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb25cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zb3J0ID0gc29ydDtcclxuICAgICAgdGhpcy5wbGFjZUhvbGRlciA9IHBsYWNlSG9sZGVyO1xyXG4gICAgICB0aGlzLm1heFJlc3VsdHMgPSBtYXhSZXN1bHRzO1xyXG4gICAgICB0aGlzLnJlc3VsdEl0ZW0gPSB7XHJcbiAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICBlbGVtZW50OiByZXN1bHRJdGVtRWxlbWVudFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm5vUmVzdWx0cyA9IG5vUmVzdWx0cztcclxuICAgICAgdGhpcy5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XHJcbiAgICAgIHRoaXMub25TZWxlY3Rpb24gPSBvblNlbGVjdGlvbjtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlQ2xhc3MoYXV0b0NvbXBsZXRlLCBbe1xyXG4gICAgICBrZXk6IFwic2VhcmNoXCIsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWFyY2gocXVlcnksIHJlY29yZCkge1xyXG4gICAgICAgIHZhciByZWNvcmRMb3dlckNhc2UgPSByZWNvcmQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hFbmdpbmUgPT09IFwibG9vc2VcIikge1xyXG4gICAgICAgICAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC8gL2csIFwiXCIpO1xyXG4gICAgICAgICAgdmFyIG1hdGNoID0gW107XHJcbiAgICAgICAgICB2YXIgc2VhcmNoUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgZm9yICh2YXIgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmVjb3JkTG93ZXJDYXNlLmxlbmd0aDsgbnVtYmVyKyspIHtcclxuICAgICAgICAgICAgdmFyIHJlY29yZENoYXIgPSByZWNvcmRbbnVtYmVyXTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaFBvc2l0aW9uIDwgcXVlcnkubGVuZ3RoICYmIHJlY29yZExvd2VyQ2FzZVtudW1iZXJdID09PSBxdWVyeVtzZWFyY2hQb3NpdGlvbl0pIHtcclxuICAgICAgICAgICAgICByZWNvcmRDaGFyID0gdGhpcy5oaWdobGlnaHQgPyBhdXRvQ29tcGxldGVWaWV3LmhpZ2hsaWdodChyZWNvcmRDaGFyKSA6IHJlY29yZENoYXI7XHJcbiAgICAgICAgICAgICAgc2VhcmNoUG9zaXRpb24rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXRjaC5wdXNoKHJlY29yZENoYXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNlYXJjaFBvc2l0aW9uICE9PSBxdWVyeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmpvaW4oXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChyZWNvcmRMb3dlckNhc2UuaW5jbHVkZXMocXVlcnkpKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChxdWVyeSksIFwiaVwiKTtcclxuICAgICAgICAgICAgcXVlcnkgPSBwYXR0ZXJuLmV4ZWMocmVjb3JkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0ID8gcmVjb3JkLnJlcGxhY2UocXVlcnksIGF1dG9Db21wbGV0ZVZpZXcuaGlnaGxpZ2h0KHF1ZXJ5KSkgOiByZWNvcmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgIGtleTogXCJsaXN0TWF0Y2hlZFJlc3VsdHNcIixcclxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RNYXRjaGVkUmVzdWx0cyhkYXRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgIHZhciByZXNMaXN0ID0gW107XHJcbiAgICAgICAgICBkYXRhLmZpbHRlcihmdW5jdGlvbiAocmVjb3JkLCBpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKGtleSkge1xyXG4gICAgICAgICAgICAgIHZhciByZWNvcmRWYWx1ZSA9IGtleSA/IHJlY29yZFtrZXldIDogcmVjb3JkO1xyXG4gICAgICAgICAgICAgIGlmIChyZWNvcmRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gdHlwZW9mIF90aGlzLnNlYXJjaEVuZ2luZSA9PT0gXCJmdW5jdGlvblwiID8gX3RoaXMuc2VhcmNoRW5naW5lKF90aGlzLnF1ZXJ5VmFsdWUsIHJlY29yZFZhbHVlKSA6IF90aGlzLnNlYXJjaChfdGhpcy5xdWVyeVZhbHVlLCByZWNvcmRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaCAmJiAha2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmRhdGEua2V5KSB7XHJcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX3RoaXMuZGF0YS5rZXlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgc2VhcmNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcclxuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvcltcInJldHVyblwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNlYXJjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHZhciBsaXN0ID0gX3RoaXMuc29ydCA/IHJlc0xpc3Quc29ydChfdGhpcy5zb3J0KS5zbGljZSgwLCBfdGhpcy5tYXhSZXN1bHRzKSA6IHJlc0xpc3Quc2xpY2UoMCwgX3RoaXMubWF4UmVzdWx0cyk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgIG1hdGNoZXM6IHJlc0xpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgICBsaXN0OiBsaXN0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6IFwiaWduaXRlXCIsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpZ25pdGUoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gYXV0b0NvbXBsZXRlVmlldy5nZXRJbnB1dCh0aGlzLnNlbGVjdG9yKTtcclxuICAgICAgICBpZiAodGhpcy5wbGFjZUhvbGRlcikge1xyXG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgdGhpcy5wbGFjZUhvbGRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XHJcbiAgICAgICAgICB2YXIgaW5EZWJvdW5jZTtcclxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcclxuICAgICAgICAgICAgaW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGV4ZWMgPSBmdW5jdGlvbiBleGVjKGV2ZW50KSB7XHJcbiAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBpbnB1dCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgPyBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpIDogaW5wdXQuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB2YXIgcXVlcnlWYWx1ZSA9IF90aGlzMi5xdWVyeVZhbHVlID0gX3RoaXMyLnF1ZXJ5ICYmIF90aGlzMi5xdWVyeS5tYW5pcHVsYXRlID8gX3RoaXMyLnF1ZXJ5Lm1hbmlwdWxhdGUoaW5wdXRWYWx1ZSkgOiBpbnB1dFZhbHVlO1xyXG4gICAgICAgICAgdmFyIHJlbmRlclJlc3VsdHNMaXN0ID0gX3RoaXMyLnJlc3VsdHNMaXN0LnJlbmRlcjtcclxuICAgICAgICAgIHZhciB0cmlnZ2VyQ29uZGl0aW9uID0gX3RoaXMyLnRyaWdnZXIuY29uZGl0aW9uID8gX3RoaXMyLnRyaWdnZXIuY29uZGl0aW9uKHF1ZXJ5VmFsdWUpIDogcXVlcnlWYWx1ZS5sZW5ndGggPiBfdGhpczIudGhyZXNob2xkICYmIHF1ZXJ5VmFsdWUucmVwbGFjZSgvIC9nLCBcIlwiKS5sZW5ndGg7XHJcbiAgICAgICAgICB2YXIgZXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gZXZlbnRFbWl0dGVyKGV2ZW50LCByZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IFBvbHlmaWxsLkN1c3RvbUV2ZW50V3JhcHBlcihcImF1dG9Db21wbGV0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcclxuICAgICAgICAgICAgICAgIGlucHV0OiBpbnB1dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzOiByZXN1bHRzID8gcmVzdWx0cy5tYXRjaGVzIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHJlc3VsdHMgPyByZXN1bHRzLmxpc3QgOiBudWxsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAocmVuZGVyUmVzdWx0c0xpc3QpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdHNMaXN0ID0gX3RoaXMyLnJlc3VsdHNMaXN0LnZpZXc7XHJcbiAgICAgICAgICAgIHZhciBjbGVhclJlc3VsdHMgPSBhdXRvQ29tcGxldGVWaWV3LmNsZWFyUmVzdWx0cyhyZXN1bHRzTGlzdCk7XHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMyLmxpc3RNYXRjaGVkUmVzdWx0cyhfdGhpczIuZGF0YVN0cmVhbSwgZXZlbnQpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlcihldmVudCwgbGlzdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnJlc3VsdHNMaXN0LnJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICBpZiAobGlzdC5saXN0Lmxlbmd0aCA9PT0gMCAmJiBfdGhpczIubm9SZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLm5vUmVzdWx0cygpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZVZpZXcuYWRkUmVzdWx0c1RvTGlzdChyZXN1bHRzTGlzdCwgbGlzdC5saXN0LCBfdGhpczIucmVzdWx0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMi5vblNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlc3VsdHNMaXN0Lm5hdmlnYXRpb24gPyBfdGhpczIucmVzdWx0c0xpc3QubmF2aWdhdGlvbihldmVudCwgaW5wdXQsIHJlc3VsdHNMaXN0LCBfdGhpczIub25TZWxlY3Rpb24sIGxpc3QpIDogYXV0b0NvbXBsZXRlVmlldy5uYXZpZ2F0aW9uKGlucHV0LCByZXN1bHRzTGlzdCwgX3RoaXMyLm9uU2VsZWN0aW9uLCBsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBldmVudEVtaXR0ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCFyZW5kZXJSZXN1bHRzTGlzdCAmJiB0cmlnZ2VyQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIF90aGlzMi5saXN0TWF0Y2hlZFJlc3VsdHMoX3RoaXMyLmRhdGFTdHJlYW0sIGV2ZW50KS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyKGV2ZW50LCBsaXN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcnVuID0gZnVuY3Rpb24gcnVuKGV2ZW50KSB7XHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoX3RoaXMyLmRhdGEuY2FjaGUgPyBfdGhpczIuZGF0YVN0cmVhbSA6IF90aGlzMi5kYXRhLnNyYygpKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIF90aGlzMi5kYXRhU3RyZWFtID0gZGF0YTtcclxuICAgICAgICAgICAgZXhlYyhldmVudCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudHJpZ2dlci5ldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFR5cGUpIHtcclxuICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBkZWJvdW5jZShmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJ1bihldmVudCk7XHJcbiAgICAgICAgICB9LCBfdGhpczIuZGVib3VuY2UpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBrZXk6IFwiaW5pdFwiLFxyXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhY2hlKSB7XHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUodGhpcy5kYXRhLnNyYygpKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIF90aGlzMy5kYXRhU3RyZWFtID0gZGF0YTtcclxuICAgICAgICAgICAgX3RoaXMzLmlnbml0ZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWduaXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvbHlmaWxsLmluaXRFbGVtZW50Q2xvc2VzdFBvbHlmaWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH1dKTtcclxuICAgIHJldHVybiBhdXRvQ29tcGxldGU7XHJcbiAgfSgpO1xyXG5cclxuICByZXR1cm4gYXV0b0NvbXBsZXRlO1xyXG5cclxufSkpKTtcclxuIiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XHJcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xyXG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxyXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XHJcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcclxuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xyXG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XHJcblxyXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9ialtrZXldO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cclxuICAgIGRlZmluZSh7fSwgXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xyXG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXHJcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcclxuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XHJcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcclxuXHJcbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXHJcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXHJcbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcclxuICB9XHJcbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcclxuXHJcbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXHJcbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXHJcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXHJcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxyXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcclxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXHJcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcclxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcclxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXHJcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxyXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xyXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xyXG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XHJcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcclxuXHJcbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xyXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cclxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xyXG5cclxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcclxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cclxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxyXG5cclxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XHJcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cclxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcclxuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XHJcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xyXG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxyXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcclxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xyXG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcclxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cclxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XHJcbiAgfVxyXG5cclxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxyXG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcclxuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcclxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxyXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXHJcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcclxuICApO1xyXG5cclxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxyXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXHJcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xyXG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcclxuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcclxuICAgIHJldHVybiBjdG9yXHJcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcclxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXHJcbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxyXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xyXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xyXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XHJcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xyXG4gICAgfVxyXG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xyXG4gICAgcmV0dXJuIGdlbkZ1bjtcclxuICB9O1xyXG5cclxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cclxuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxyXG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcclxuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxyXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcclxuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xyXG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xyXG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcclxuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxyXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXHJcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXHJcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXHJcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcclxuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XHJcbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxyXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxyXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcclxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xyXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxyXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXHJcbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxyXG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXHJcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcclxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxyXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XHJcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxyXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXHJcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxyXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcclxuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXHJcbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xyXG4gIH1cclxuXHJcbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcclxuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcclxuXHJcbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxyXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxyXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxyXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcclxuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XHJcblxyXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcclxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXHJcbiAgICAgIFByb21pc2VJbXBsXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcclxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cclxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcclxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcclxuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHRocm93IGFyZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxyXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcclxuXHJcbiAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcclxuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcclxuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xyXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcclxuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XHJcblxyXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cclxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cclxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXHJcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcclxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xyXG5cclxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxyXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcclxuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcclxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcclxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXHJcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXHJcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXHJcbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xyXG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcclxuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcclxuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcblxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXHJcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXHJcbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxyXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcclxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcclxuXHJcbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xyXG5cclxuICAgIGlmICghIGluZm8pIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZm8uZG9uZSkge1xyXG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxyXG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxyXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcclxuXHJcbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxyXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXHJcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXHJcbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xyXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxyXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXHJcbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXHJcbiAgICAgIHJldHVybiBpbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXHJcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICB9XHJcblxyXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXHJcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XHJcblxyXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xyXG5cclxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxyXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXHJcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cclxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cclxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xyXG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcclxuXHJcbiAgICBpZiAoMSBpbiBsb2NzKSB7XHJcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoMiBpbiBsb2NzKSB7XHJcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xyXG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xyXG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XHJcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XHJcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcclxuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XHJcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcclxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cclxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cclxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XHJcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XHJcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XHJcbiAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xyXG4gICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGtleXMucmV2ZXJzZSgpO1xyXG5cclxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXHJcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xyXG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xyXG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxyXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xyXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cclxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xyXG4gICAgaWYgKGl0ZXJhYmxlKSB7XHJcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcclxuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XHJcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcclxuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XHJcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cclxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcclxuICB9XHJcbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XHJcblxyXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XHJcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XHJcbiAgICAgIHRoaXMucHJldiA9IDA7XHJcbiAgICAgIHRoaXMubmV4dCA9IDA7XHJcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXHJcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcclxuXHJcbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XHJcblxyXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcclxuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XHJcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXHJcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XHJcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcclxuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcclxuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcclxuICAgICAgaWYgKHRoaXMuZG9uZSkge1xyXG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcclxuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcclxuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xyXG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcclxuXHJcbiAgICAgICAgaWYgKGNhdWdodCkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcclxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xyXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcclxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xyXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cclxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xyXG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XHJcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XHJcblxyXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXHJcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcclxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXHJcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XHJcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxyXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcclxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcclxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXHJcbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XHJcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcclxuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcclxuXHJcbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xyXG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XHJcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcclxuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcclxuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xyXG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH0sXHJcblxyXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xyXG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XHJcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcclxuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xyXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxyXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcclxuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcclxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxyXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxyXG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cclxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxyXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxyXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxyXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXHJcbiAgcmV0dXJuIGV4cG9ydHM7XHJcblxyXG59KFxyXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXHJcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcclxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXHJcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cclxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxyXG4pKTtcclxuXHJcbnRyeSB7XHJcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcclxufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcclxuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxyXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxyXG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxyXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxyXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxyXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXHJcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcclxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcclxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cclxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xyXG59XHJcbiIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIHZhciByb3V0aW5nID0gZmFjdG9yeSgpO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIHJvdXRpbmcuUm91dGluZyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgIC8vIGxpa2UgTm9kZS5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByb3V0aW5nLlJvdXRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgICAgcm9vdC5Sb3V0aW5nID0gcm91dGluZy5Sb3V0aW5nO1xuICAgICAgICByb290LmZvcyA9IHtcbiAgICAgICAgICAgIFJvdXRlcjogcm91dGluZy5Sb3V0ZXJcbiAgICAgICAgfTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIGZpbGUgZGVmaW5lcyB0aGUgUm91dGVyIGNsYXNzLlxuICpcbiAqIFlvdSBjYW4gY29tcGlsZSB0aGlzIGZpbGUgYnkgcnVubmluZyB0aGUgZm9sbG93aW5nIGNvbW1hbmQgZnJvbSB0aGUgUmVzb3VyY2VzIGZvbGRlcjpcbiAqXG4gKiAgICBucG0gaW5zdGFsbCAmJiBucG0gcnVuIGJ1aWxkXG4gKi9cblxuLyoqXG4gKiBDbGFzcyBSb3V0ZXJcbiAqL1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge1JvdXRlci5Db250ZXh0PX0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT49fSByb3V0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSb3V0ZXIoY29udGV4dCwgcm91dGVzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZXIpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dF8gPSBjb250ZXh0IHx8IHsgYmFzZV91cmw6ICcnLCBwcmVmaXg6ICcnLCBob3N0OiAnJywgcG9ydDogJycsIHNjaGVtZTogJycsIGxvY2FsZTogJycgfTtcbiAgICAgICAgdGhpcy5zZXRSb3V0ZXMocm91dGVzIHx8IHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGluc3RhbmNlLlxuICAgICAqIEByZXR1cm5zIHtSb3V0ZXJ9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSb3V0ZXIsIFt7XG4gICAgICAgIGtleTogJ3NldFJvdXRpbmdEYXRhJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGRhdGEgZm9yIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um91dGluZ0RhdGEoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRCYXNlVXJsKGRhdGFbJ2Jhc2VfdXJsJ10pO1xuICAgICAgICAgICAgdGhpcy5zZXRSb3V0ZXMoZGF0YVsncm91dGVzJ10pO1xuXG4gICAgICAgICAgICBpZiAoJ3ByZWZpeCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJlZml4KGRhdGFbJ3ByZWZpeCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgncG9ydCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9ydChkYXRhWydwb3J0J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdsb2NhbGUnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsZShkYXRhWydsb2NhbGUnXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SG9zdChkYXRhWydob3N0J10pO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2hlbWUoZGF0YVsnc2NoZW1lJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT59IHJvdXRlc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Um91dGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVzXyA9IE9iamVjdC5mcmVlemUocm91dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPn0gcm91dGVzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSb3V0ZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzXztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0QmFzZVVybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRCYXNlVXJsKGJhc2VVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uYmFzZV91cmwgPSBiYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEJhc2VVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFByZWZpeCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQcmVmaXgocHJlZml4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnByZWZpeCA9IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRTY2hlbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2NoZW1lKHNjaGVtZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5zY2hlbWUgPSBzY2hlbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U2NoZW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjaGVtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0SG9zdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRIb3N0KGhvc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uaG9zdCA9IGhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SG9zdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIb3N0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydFxuICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRQb3J0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvcnQocG9ydCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wb3J0ID0gcG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRQb3J0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRMb2NhbGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRMb2NhbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidWlsZFF1ZXJ5UGFyYW1zJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZHMgcXVlcnkgc3RyaW5nIHBhcmFtcyBhZGRlZCB0byBhIFVSTC5cbiAgICAgICAgICogUG9ydCBvZiBqUXVlcnkncyAkLnBhcmFtKCkgZnVuY3Rpb24sIHNvIGNyZWRpdCBpcyBkdWUgdGhlcmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBwYXJhbXNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWRkXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXgsIHBhcmFtcywgYWRkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciByYnJhY2tldCA9IG5ldyBSZWdFeHAoL1xcW1xcXSQvKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmJyYWNrZXQudGVzdChwcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQocHJlZml4LCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXggKyAnWycgKyAoKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbCkpID09PSAnb2JqZWN0JyA/IGkgOiAnJykgKyAnXScsIHZhbCwgYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGFyYW1zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgbmFtZSArICddJywgcGFyYW1zW25hbWVdLCBhZGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkKHByZWZpeCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgcmF3IHJvdXRlIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7Um91dGVyLlJvdXRlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Um91dGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGUobmFtZSkge1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkTmFtZSA9IHRoaXMuY29udGV4dF8ucHJlZml4ICsgbmFtZTtcbiAgICAgICAgICAgIHZhciBzZjQxaTE4bk5hbWUgPSBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgICAgICB2YXIgcHJlZml4ZWRTZjQxaTE4bk5hbWUgPSB0aGlzLmNvbnRleHRfLnByZWZpeCArIG5hbWUgKyAnLicgKyB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgICAgIHZhciB2YXJpYW50cyA9IFtwcmVmaXhlZE5hbWUsIHNmNDFpMThuTmFtZSwgcHJlZml4ZWRTZjQxaTE4bk5hbWUsIG5hbWVdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHZhcmlhbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnRzW2ldIGluIHRoaXMucm91dGVzXykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNfW3ZhcmlhbnRzW2ldXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIHRoZSBVUkwgZm9yIGEgcm91dGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IG9wdF9wYXJhbXNcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBhYnNvbHV0ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZW5lcmF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZShuYW1lLCBvcHRfcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgYWJzb2x1dGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgcm91dGUgPSB0aGlzLmdldFJvdXRlKG5hbWUpLFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IG9wdF9wYXJhbXMgfHwge30sXG4gICAgICAgICAgICAgICAgdW51c2VkUGFyYW1zID0gX2V4dGVuZHMoe30sIHBhcmFtcyksXG4gICAgICAgICAgICAgICAgdXJsID0gJycsXG4gICAgICAgICAgICAgICAgb3B0aW9uYWwgPSB0cnVlLFxuICAgICAgICAgICAgICAgIGhvc3QgPSAnJyxcbiAgICAgICAgICAgICAgICBwb3J0ID0gdHlwZW9mIHRoaXMuZ2V0UG9ydCgpID09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5nZXRQb3J0KCkgPT09IG51bGwgPyAnJyA6IHRoaXMuZ2V0UG9ydCgpO1xuXG4gICAgICAgICAgICByb3V0ZS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3RleHQnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh0b2tlblsxXSkgKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzRGVmYXVsdCA9IHJvdXRlLmRlZmF1bHRzICYmIHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IG9wdGlvbmFsIHx8ICFoYXNEZWZhdWx0IHx8IHRva2VuWzNdIGluIHBhcmFtcyAmJiBwYXJhbXNbdG9rZW5bM11dICE9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5bM10gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInICsgdG9rZW5bM10gKyAnXCIuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbXB0eSA9IHRydWUgPT09IHZhbHVlIHx8IGZhbHNlID09PSB2YWx1ZSB8fCAnJyA9PT0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW1wdHkgfHwgIW9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuY29kZWRWYWx1ZSA9IFJvdXRlci5lbmNvZGVQYXRoQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnbnVsbCcgPT09IGVuY29kZWRWYWx1ZSAmJiBudWxsID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0b2tlblsxXSArIGVuY29kZWRWYWx1ZSArIHVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNEZWZhdWx0ICYmIHRva2VuWzNdIGluIHVudXNlZFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicgKyB0b2tlblswXSArICdcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gJy8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3V0ZS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdCA9IHRva2VuWzFdICsgaG9zdDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblszXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmRlZmF1bHRzICYmIHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIHZhbHVlICsgaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEZvby1iYXIhXG4gICAgICAgICAgICB1cmwgPSB0aGlzLmNvbnRleHRfLmJhc2VfdXJsICsgdXJsO1xuXG4gICAgICAgICAgICBpZiAocm91dGUucmVxdWlyZW1lbnRzICYmIFwiX3NjaGVtZVwiIGluIHJvdXRlLnJlcXVpcmVtZW50cyAmJiB0aGlzLmdldFNjaGVtZSgpICE9IHJvdXRlLnJlcXVpcmVtZW50c1tcIl9zY2hlbWVcIl0pIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhvc3QgPSBob3N0IHx8IHRoaXMuZ2V0SG9zdCgpO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gcm91dGUucmVxdWlyZW1lbnRzW1wiX3NjaGVtZVwiXSArIFwiOi8vXCIgKyBjdXJyZW50SG9zdCArIChjdXJyZW50SG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygcm91dGUuc2NoZW1lcyAmJiBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygcm91dGUuc2NoZW1lc1swXSAmJiB0aGlzLmdldFNjaGVtZSgpICE9PSByb3V0ZS5zY2hlbWVzWzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jdXJyZW50SG9zdCA9IGhvc3QgfHwgdGhpcy5nZXRIb3N0KCk7XG5cbiAgICAgICAgICAgICAgICB1cmwgPSByb3V0ZS5zY2hlbWVzWzBdICsgXCI6Ly9cIiArIF9jdXJyZW50SG9zdCArIChfY3VycmVudEhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG9zdCAmJiB0aGlzLmdldEhvc3QoKSAhPT0gaG9zdCArIChob3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhYnNvbHV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0U2NoZW1lKCkgKyBcIjovL1wiICsgdGhpcy5nZXRIb3N0KCkgKyAodGhpcy5nZXRIb3N0KCkuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVudXNlZFBhcmFtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmVmaXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uIGFkZChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBjYWxsIGl0IGFuZCBhc3NpZ24gaXQncyByZXR1cm4gdmFsdWUgYXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSgpIDogdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIG51bGwgdG8gZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnB1c2goUm91dGVyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KGtleSkgKyAnPScgKyBSb3V0ZXIuZW5jb2RlUXVlcnlDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZm9yIChwcmVmaXggaW4gdW51c2VkUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXgsIHVudXNlZFBhcmFtc1twcmVmaXhdLCBhZGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVybCA9IHVybCArICc/JyArIHF1ZXJ5UGFyYW1zLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBzdHJpbmcgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2dldEluc3RhbmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uZmlndXJlcyB0aGUgY3VycmVudCBSb3V0ZXIgaW5zdGFuY2Ugd2l0aCB0aGUgcHJvdmlkZWQgZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcm91dGVyID0gUm91dGVyLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgICAgIHJvdXRlci5zZXRSb3V0aW5nRGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTJGL2csICcvJykucmVwbGFjZSgvJTQwL2csICdAJykucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTIxL2csICchJykucmVwbGFjZSgvJTNCL2csICc7JykucmVwbGFjZSgvJTJDL2csICcsJykucmVwbGFjZSgvJTJBL2csICcqJykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoLycvZywgJyUyNycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHBhdGggcHJvcGVybHkgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmNvZGVQYXRoQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuY29kZVBhdGhDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lM0QvZywgJz0nKS5yZXBsYWNlKC8lMkIvZywgJysnKS5yZXBsYWNlKC8lMjEvZywgJyEnKS5yZXBsYWNlKC8lN0MvZywgJ3wnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBxdWVyeSBwYXJhbWV0ZXIgb3IgdmFsdWUgcHJvcGVybHkgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmNvZGVRdWVyeUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVRdWVyeUNvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUzRi9nLCAnPycpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJvdXRlcjtcbn0oKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICAgIHRva2VuczogKEFycmF5LjxBcnJheS48c3RyaW5nPj4pLFxuICogICAgIGRlZmF1bHRzOiAoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz4pLFxuICogICAgIHJlcXVpcmVtZW50czogT2JqZWN0LFxuICogICAgIGhvc3R0b2tlbnM6IChBcnJheS48c3RyaW5nPilcbiAqIH19XG4gKi9cblxuXG5Sb3V0ZXIuUm91dGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgICBiYXNlX3VybDogKHN0cmluZylcbiAqIH19XG4gKi9cblJvdXRlci5Db250ZXh0O1xuXG4vKipcbiAqIFJvdXRlciBzaW5nbGV0b24uXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtSb3V0ZXJ9XG4gKi9cbnZhciBSb3V0aW5nID0gbmV3IFJvdXRlcigpO1xuXG4gICAgcmV0dXJuIHsgUm91dGVyOiBSb3V0ZXIsIFJvdXRpbmc6IFJvdXRpbmcgfTtcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9