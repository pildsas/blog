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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/register.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./assets/js/register.js":
/*!*******************************!*\
  !*** ./assets/js/register.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./assets/js/helpers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);



var Routing = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js_routes.json */ "./assets/js/js_routes.json");

Routing.setRoutingData(Routes); // document.addEventListener("DOMContentLoaded", () => {
//    let submit = document.querySelector(".btn__register-form");
//    let form = document.querySelector(".form__register");
//    submit.addEventListener("click", (e) => {
//       e.preventDefault();
//       let data = new FormData(form);
//       fetch(Routing.generate("register"), {
//          method: "POST",
//          body: data,
//       })
//          .then((res) => {
//             return res.json();
//          })
//          .then((res) => {
//             if (res.completion) {
//                window.location.href = Routing.generate("profile_page", { profile: res.profile_id });
//             } else {
//                let errors = {};
//                res.errors.forEach((error) => {
//                   let name = error.cause.propertyPath.includes("password")
//                      ? "password"
//                      : error.cause.propertyPath.split(".")[1];
//                   errors[name] = error.message;
//                });
//                DisplayErrors(errors);
//             }
//          });
//    });
// });
// const DisplayErrors = (errors) => {
//    let i = document.querySelectorAll(".input_form");
//    i.forEach((input) => {
//       input.classList.remove("active__error");
//    });
//    let e = document.querySelectorAll(".input__error");
//    e.forEach((error) => {
//       error.style.display = null;
//    });
//    if (errors.firstname) {
//       let firstname = document.querySelector(".error__firstname");
//       let input_firstname = document.querySelector("#user_firstname");
//       input_firstname.classList.add("active__error");
//       firstname.style.display = "block";
//       firstname.innerHTML = errors.firstname;
//    }
//    if (errors.lastname) {
//       let lastname = document.querySelector(".error__lastname");
//       let input_lastname = document.querySelector("#user_lastname");
//       input_lastname.classList.add("active__error");
//       lastname.style.display = "block";
//       lastname.innerHTML = errors.lastname;
//    }
//    if (errors.email) {
//       let email = document.querySelector(".error__email");
//       let input_email = document.querySelector("#user_email");
//       input_email.classList.add("active__error");
//       email.style.display = "block";
//       email.innerHTML = errors.email;
//    }
//    if (errors.password) {
//       let password = document.querySelector(".error__password");
//       let input_password_first = document.querySelector("#user_password_first");
//       let input_password_second = document.querySelector("#user_password_second");
//       input_password_first.classList.add("active__error");
//       input_password_second.classList.add("active__error");
//       password.style.display = "block";
//       password.innerHTML = errors.password;
//    }
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsIm9iaiIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZGF0ZSIsInByZWZvbWF0dGVkRGF0ZSIsImhpZGVZZWFyIiwiTU9OVEhfTkFNRVMiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInRpbWVBZ28iLCJkYXRlUGFyYW0iLCJEYXRlIiwiREFZX0lOX01TIiwidG9kYXkiLCJ5ZXN0ZXJkYXkiLCJzZWNvbmRzIiwiTWF0aCIsInJvdW5kIiwiaXNUb2RheSIsInRvRGF0ZVN0cmluZyIsImlzWWVzdGVyZGF5IiwiaXNUaGlzWWVhciIsImdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lIiwiZWxlbWVudCIsImNsYXNzbmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyT3JOdWxsIiwiY2xhc3NsaXN0IiwiYXR0ciIsImN1cnJlbnRfZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNoaWZ0IiwiZm9yRWFjaCIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInJldHVybl92YWx1ZSIsInNldEF0dHJPckZhbHNlIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsImxhc3QiLCJhcnJheSIsImdldFBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJnZXRQb3NpdGlvbnMiLCJyaWdodCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhZGRFdmVudCIsIm9iamVjdCIsInR5cGUiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInRocm90dGxlIiwibGltaXQiLCJpblRocm90dGxlIiwiY29udGV4dCIsInRocm90dGxlTGFzdCIsImxhc3RGdW5jIiwibGFzdFJhbiIsIm5vdyIsImZhZGVPdXQiLCJlbCIsInN0eWxlIiwib3BhY2l0eSIsImZhZGUiLCJkaXNwbGF5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmFkZUluIiwidmFsIiwicGFyc2VGbG9hdCIsIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwic2V0Um91dGluZ0RhdGEiLCJyb290IiwiZmFjdG9yeSIsInJvdXRpbmciLCJkZWZpbmUiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJSb3V0ZXIiLCJyb3V0ZXMiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsImRhdGEiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiYmFzZVVybCIsImdldEJhc2VVcmwiLCJnZXRTY2hlbWUiLCJnZXRIb3N0IiwiZ2V0UG9ydCIsImdldExvY2FsZSIsImJ1aWxkUXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJhZGQiLCJfdGhpcyIsInJicmFja2V0IiwiUmVnRXhwIiwiQXJyYXkiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJwcmVmaXhlZE5hbWUiLCJzZjQxaTE4bk5hbWUiLCJwcmVmaXhlZFNmNDFpMThuTmFtZSIsInZhcmlhbnRzIiwiRXJyb3IiLCJnZW5lcmF0ZSIsIm9wdF9wYXJhbXMiLCJhYnNvbHV0ZSIsInVuZGVmaW5lZCIsInJvdXRlIiwidW51c2VkUGFyYW1zIiwidXJsIiwib3B0aW9uYWwiLCJ0b2tlbnMiLCJ0b2tlbiIsImVuY29kZVBhdGhDb21wb25lbnQiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdHMiLCJlbXB0eSIsImVuY29kZWRWYWx1ZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJjdXJyZW50SG9zdCIsImluZGV4T2YiLCJzY2hlbWVzIiwiX2N1cnJlbnRIb3N0Iiwia2V5cyIsInF1ZXJ5UGFyYW1zIiwicHVzaCIsImVuY29kZVF1ZXJ5Q29tcG9uZW50Iiwiam9pbiIsImdldEluc3RhbmNlIiwic2V0RGF0YSIsInJvdXRlciIsImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJSb3V0ZSIsIkNvbnRleHQiXSwibWFwcGluZ3Mi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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzdUJDLFdBQVVFLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3RCLE1BQUlDLE9BQU8sR0FBR0QsT0FBTyxFQUFyQjs7QUFDQSxNQUFJLElBQUosRUFBZ0Q7QUFDNUM7QUFDQUUscUNBQU8sRUFBRCxvQ0FBS0QsT0FBTyxDQUFDTixPQUFiO0FBQUE7QUFBQTtBQUFBLG9HQUFOO0FBQ0gsR0FIRCxNQUdPLEVBV047QUFDSixDQWpCQSxFQWlCQyxJQWpCRCxFQWlCTyxZQUFZO0FBQ2hCO0FBRUo7Ozs7Ozs7O0FBUUE7Ozs7QUFJQSxNQUFJUSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQixVQUFVQyxNQUFWLEVBQWtCO0FBQUUsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHekcsU0FBUyxDQUFDd0MsTUFBOUIsRUFBc0NpRSxDQUFDLEVBQXZDLEVBQTJDO0FBQUUsVUFBSUMsTUFBTSxHQUFHMUcsU0FBUyxDQUFDeUcsQ0FBRCxDQUF0Qjs7QUFBMkIsV0FBSyxJQUFJRSxHQUFULElBQWdCRCxNQUFoQixFQUF3QjtBQUFFLFlBQUlKLE1BQU0sQ0FBQ00sU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDSixNQUFyQyxFQUE2Q0MsR0FBN0MsQ0FBSixFQUF1RDtBQUFFSCxnQkFBTSxDQUFDRyxHQUFELENBQU4sR0FBY0QsTUFBTSxDQUFDQyxHQUFELENBQXBCO0FBQTRCO0FBQUU7QUFBRTs7QUFBQyxXQUFPSCxNQUFQO0FBQWdCLEdBQWhROztBQUVBLE1BQUlPLE9BQU8sR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLFNBQU9BLE1BQU0sQ0FBQ0MsUUFBZCxNQUEyQixRQUEzRCxHQUFzRSxVQUFVbkgsR0FBVixFQUFlO0FBQUUsb0JBQWNBLEdBQWQ7QUFBb0IsR0FBM0csR0FBOEcsVUFBVUEsR0FBVixFQUFlO0FBQUUsV0FBT0EsR0FBRyxJQUFJLE9BQU9rSCxNQUFQLEtBQWtCLFVBQXpCLElBQXVDbEgsR0FBRyxDQUFDb0gsV0FBSixLQUFvQkYsTUFBM0QsSUFBcUVsSCxHQUFHLEtBQUtrSCxNQUFNLENBQUNKLFNBQXBGLEdBQWdHLFFBQWhHLFlBQWtIOUcsR0FBbEgsQ0FBUDtBQUErSCxHQUE1UTs7QUFFQSxNQUFJcUgsWUFBWSxHQUFHLFlBQVk7QUFBRSxhQUFTQyxnQkFBVCxDQUEwQlosTUFBMUIsRUFBa0NhLEtBQWxDLEVBQXlDO0FBQUUsV0FBSyxJQUFJWixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWSxLQUFLLENBQUM3RSxNQUExQixFQUFrQ2lFLENBQUMsRUFBbkMsRUFBdUM7QUFBRSxZQUFJYSxVQUFVLEdBQUdELEtBQUssQ0FBQ1osQ0FBRCxDQUF0QjtBQUEyQmEsa0JBQVUsQ0FBQ0MsVUFBWCxHQUF3QkQsVUFBVSxDQUFDQyxVQUFYLElBQXlCLEtBQWpEO0FBQXdERCxrQkFBVSxDQUFDRSxZQUFYLEdBQTBCLElBQTFCO0FBQWdDLFlBQUksV0FBV0YsVUFBZixFQUEyQkEsVUFBVSxDQUFDRyxRQUFYLEdBQXNCLElBQXRCO0FBQTRCbkIsY0FBTSxDQUFDb0IsY0FBUCxDQUFzQmxCLE1BQXRCLEVBQThCYyxVQUFVLENBQUNYLEdBQXpDLEVBQThDVyxVQUE5QztBQUE0RDtBQUFFOztBQUFDLFdBQU8sVUFBVUssV0FBVixFQUF1QkMsVUFBdkIsRUFBbUNDLFdBQW5DLEVBQWdEO0FBQUUsVUFBSUQsVUFBSixFQUFnQlIsZ0JBQWdCLENBQUNPLFdBQVcsQ0FBQ2YsU0FBYixFQUF3QmdCLFVBQXhCLENBQWhCO0FBQXFELFVBQUlDLFdBQUosRUFBaUJULGdCQUFnQixDQUFDTyxXQUFELEVBQWNFLFdBQWQsQ0FBaEI7QUFBNEMsYUFBT0YsV0FBUDtBQUFxQixLQUFoTjtBQUFtTixHQUE5aEIsRUFBbkI7O0FBRUEsV0FBU0csZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNKLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFSSxRQUFRLFlBQVlKLFdBQXRCLENBQUosRUFBd0M7QUFBRSxZQUFNLElBQUlLLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQTJEO0FBQUU7O0FBRXpKLE1BQUlDLE1BQU0sR0FBRyxZQUFZO0FBRXJCOzs7OztBQUtBLGFBQVNBLE1BQVQsQ0FBZ0JuRCxPQUFoQixFQUF5Qm9ELE1BQXpCLEVBQWlDO0FBQzdCSixxQkFBZSxDQUFDLElBQUQsRUFBT0csTUFBUCxDQUFmOztBQUVBLFdBQUtFLFFBQUwsR0FBZ0JyRCxPQUFPLElBQUk7QUFBRXNELGdCQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBTSxFQUFFLEVBQXhCO0FBQTRCQyxZQUFJLEVBQUUsRUFBbEM7QUFBc0NDLFlBQUksRUFBRSxFQUE1QztBQUFnREMsY0FBTSxFQUFFLEVBQXhEO0FBQTREQyxjQUFNLEVBQUU7QUFBcEUsT0FBM0I7QUFDQSxXQUFLQyxTQUFMLENBQWVSLE1BQU0sSUFBSSxFQUF6QjtBQUNIO0FBRUQ7Ozs7OztBQU1BZixnQkFBWSxDQUFDYyxNQUFELEVBQVMsQ0FBQztBQUNsQnRCLFNBQUcsRUFBRSxnQkFEYTs7QUFJbEI7Ozs7QUFJQWdDLFdBQUssRUFBRSxTQUFTM0MsY0FBVCxDQUF3QjRDLElBQXhCLEVBQThCO0FBQ2pDLGFBQUtDLFVBQUwsQ0FBZ0JELElBQUksQ0FBQyxVQUFELENBQXBCO0FBQ0EsYUFBS0YsU0FBTCxDQUFlRSxJQUFJLENBQUMsUUFBRCxDQUFuQjs7QUFFQSxZQUFJLFlBQVlBLElBQWhCLEVBQXNCO0FBQ2xCLGVBQUtFLFNBQUwsQ0FBZUYsSUFBSSxDQUFDLFFBQUQsQ0FBbkI7QUFDSDs7QUFDRCxZQUFJLFVBQVVBLElBQWQsRUFBb0I7QUFDaEIsZUFBS0csT0FBTCxDQUFhSCxJQUFJLENBQUMsTUFBRCxDQUFqQjtBQUNIOztBQUNELFlBQUksWUFBWUEsSUFBaEIsRUFBc0I7QUFDbEIsZUFBS0ksU0FBTCxDQUFlSixJQUFJLENBQUMsUUFBRCxDQUFuQjtBQUNIOztBQUVELGFBQUtLLE9BQUwsQ0FBYUwsSUFBSSxDQUFDLE1BQUQsQ0FBakI7QUFDQSxhQUFLTSxTQUFMLENBQWVOLElBQUksQ0FBQyxRQUFELENBQW5CO0FBQ0g7QUFFRDs7OztBQTFCa0IsS0FBRCxFQThCbEI7QUFDQ2pDLFNBQUcsRUFBRSxXQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBU0QsU0FBVCxDQUFtQlIsTUFBbkIsRUFBMkI7QUFDOUIsYUFBS2lCLE9BQUwsR0FBZTdDLE1BQU0sQ0FBQzhDLE1BQVAsQ0FBY2xCLE1BQWQsQ0FBZjtBQUNIO0FBRUQ7Ozs7QUFORCxLQTlCa0IsRUF3Q2xCO0FBQ0N2QixTQUFHLEVBQUUsV0FETjtBQUVDZ0MsV0FBSyxFQUFFLFNBQVNVLFNBQVQsR0FBcUI7QUFDeEIsZUFBTyxLQUFLRixPQUFaO0FBQ0g7QUFFRDs7OztBQU5ELEtBeENrQixFQWtEbEI7QUFDQ3hDLFNBQUcsRUFBRSxZQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBU0UsVUFBVCxDQUFvQlMsT0FBcEIsRUFBNkI7QUFDaEMsYUFBS25CLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QmtCLE9BQXpCO0FBQ0g7QUFFRDs7OztBQU5ELEtBbERrQixFQTREbEI7QUFDQzNDLFNBQUcsRUFBRSxZQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBU1ksVUFBVCxHQUFzQjtBQUN6QixlQUFPLEtBQUtwQixRQUFMLENBQWNDLFFBQXJCO0FBQ0g7QUFFRDs7OztBQU5ELEtBNURrQixFQXNFbEI7QUFDQ3pCLFNBQUcsRUFBRSxXQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBU0csU0FBVCxDQUFtQlQsTUFBbkIsRUFBMkI7QUFDOUIsYUFBS0YsUUFBTCxDQUFjRSxNQUFkLEdBQXVCQSxNQUF2QjtBQUNIO0FBRUQ7Ozs7QUFORCxLQXRFa0IsRUFnRmxCO0FBQ0MxQixTQUFHLEVBQUUsV0FETjtBQUVDZ0MsV0FBSyxFQUFFLFNBQVNPLFNBQVQsQ0FBbUJWLE1BQW5CLEVBQTJCO0FBQzlCLGFBQUtMLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QkEsTUFBdkI7QUFDSDtBQUVEOzs7O0FBTkQsS0FoRmtCLEVBMEZsQjtBQUNDN0IsU0FBRyxFQUFFLFdBRE47QUFFQ2dDLFdBQUssRUFBRSxTQUFTYSxTQUFULEdBQXFCO0FBQ3hCLGVBQU8sS0FBS3JCLFFBQUwsQ0FBY0ssTUFBckI7QUFDSDtBQUVEOzs7O0FBTkQsS0ExRmtCLEVBb0dsQjtBQUNDN0IsU0FBRyxFQUFFLFNBRE47QUFFQ2dDLFdBQUssRUFBRSxTQUFTTSxPQUFULENBQWlCWCxJQUFqQixFQUF1QjtBQUMxQixhQUFLSCxRQUFMLENBQWNHLElBQWQsR0FBcUJBLElBQXJCO0FBQ0g7QUFFRDs7OztBQU5ELEtBcEdrQixFQThHbEI7QUFDQzNCLFNBQUcsRUFBRSxTQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBU2MsT0FBVCxHQUFtQjtBQUN0QixlQUFPLEtBQUt0QixRQUFMLENBQWNHLElBQXJCO0FBQ0g7QUFFRDs7OztBQU5ELEtBOUdrQixFQXdIbEI7QUFDQzNCLFNBQUcsRUFBRSxTQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBU0ksT0FBVCxDQUFpQlIsSUFBakIsRUFBdUI7QUFDMUIsYUFBS0osUUFBTCxDQUFjSSxJQUFkLEdBQXFCQSxJQUFyQjtBQUNIO0FBRUQ7Ozs7QUFORCxLQXhIa0IsRUFrSWxCO0FBQ0M1QixTQUFHLEVBQUUsU0FETjtBQUVDZ0MsV0FBSyxFQUFFLFNBQVNlLE9BQVQsR0FBbUI7QUFDdEIsZUFBTyxLQUFLdkIsUUFBTCxDQUFjSSxJQUFyQjtBQUNIO0FBSkYsS0FsSWtCLEVBdUlsQjtBQUNDNUIsU0FBRyxFQUFFLFdBRE47O0FBSUM7OztBQUdBZ0MsV0FBSyxFQUFFLFNBQVNLLFNBQVQsQ0FBbUJQLE1BQW5CLEVBQTJCO0FBQzlCLGFBQUtOLFFBQUwsQ0FBY00sTUFBZCxHQUF1QkEsTUFBdkI7QUFDSDtBQUVEOzs7O0FBWEQsS0F2SWtCLEVBc0psQjtBQUNDOUIsU0FBRyxFQUFFLFdBRE47QUFFQ2dDLFdBQUssRUFBRSxTQUFTZ0IsU0FBVCxHQUFxQjtBQUN4QixlQUFPLEtBQUt4QixRQUFMLENBQWNNLE1BQXJCO0FBQ0g7QUFKRixLQXRKa0IsRUEySmxCO0FBQ0M5QixTQUFHLEVBQUUsa0JBRE47O0FBSUM7Ozs7Ozs7O0FBUUFnQyxXQUFLLEVBQUUsU0FBU2lCLGdCQUFULENBQTBCdkIsTUFBMUIsRUFBa0N3QixNQUFsQyxFQUEwQ0MsR0FBMUMsRUFBK0M7QUFDbEQsWUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsWUFBSXpHLElBQUksR0FBRyxLQUFLLENBQWhCO0FBQ0EsWUFBSTBHLFFBQVEsR0FBRyxJQUFJQyxNQUFKLENBQVcsT0FBWCxDQUFmOztBQUVBLFlBQUlKLE1BQU0sWUFBWUssS0FBdEIsRUFBNkI7QUFDekJMLGdCQUFNLENBQUM1RyxPQUFQLENBQWUsVUFBVTBDLEdBQVYsRUFBZWMsQ0FBZixFQUFrQjtBQUM3QixnQkFBSXVELFFBQVEsQ0FBQ0csSUFBVCxDQUFjOUIsTUFBZCxDQUFKLEVBQTJCO0FBQ3ZCeUIsaUJBQUcsQ0FBQ3pCLE1BQUQsRUFBUzFDLEdBQVQsQ0FBSDtBQUNILGFBRkQsTUFFTztBQUNIb0UsbUJBQUssQ0FBQ0gsZ0JBQU4sQ0FBdUJ2QixNQUFNLEdBQUcsR0FBVCxJQUFnQixDQUFDLE9BQU8xQyxHQUFQLEtBQWUsV0FBZixHQUE2QixXQUE3QixHQUEyQ29CLE9BQU8sQ0FBQ3BCLEdBQUQsQ0FBbkQsTUFBOEQsUUFBOUQsR0FBeUVjLENBQXpFLEdBQTZFLEVBQTdGLElBQW1HLEdBQTFILEVBQStIZCxHQUEvSCxFQUFvSW1FLEdBQXBJO0FBQ0g7QUFDSixXQU5EO0FBT0gsU0FSRCxNQVFPLElBQUksQ0FBQyxPQUFPRCxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDLFdBQWhDLEdBQThDOUMsT0FBTyxDQUFDOEMsTUFBRCxDQUF0RCxNQUFvRSxRQUF4RSxFQUFrRjtBQUNyRixlQUFLdkcsSUFBTCxJQUFhdUcsTUFBYixFQUFxQjtBQUNqQixpQkFBS0QsZ0JBQUwsQ0FBc0J2QixNQUFNLEdBQUcsR0FBVCxHQUFlL0UsSUFBZixHQUFzQixHQUE1QyxFQUFpRHVHLE1BQU0sQ0FBQ3ZHLElBQUQsQ0FBdkQsRUFBK0R3RyxHQUEvRDtBQUNIO0FBQ0osU0FKTSxNQUlBO0FBQ0hBLGFBQUcsQ0FBQ3pCLE1BQUQsRUFBU3dCLE1BQVQsQ0FBSDtBQUNIO0FBQ0o7QUFFRDs7Ozs7OztBQW5DRCxLQTNKa0IsRUFxTWxCO0FBQ0NsRCxTQUFHLEVBQUUsVUFETjtBQUVDZ0MsV0FBSyxFQUFFLFNBQVN5QixRQUFULENBQWtCOUcsSUFBbEIsRUFBd0I7QUFDM0IsWUFBSStHLFlBQVksR0FBRyxLQUFLbEMsUUFBTCxDQUFjRSxNQUFkLEdBQXVCL0UsSUFBMUM7QUFDQSxZQUFJZ0gsWUFBWSxHQUFHaEgsSUFBSSxHQUFHLEdBQVAsR0FBYSxLQUFLNkUsUUFBTCxDQUFjTSxNQUE5QztBQUNBLFlBQUk4QixvQkFBb0IsR0FBRyxLQUFLcEMsUUFBTCxDQUFjRSxNQUFkLEdBQXVCL0UsSUFBdkIsR0FBOEIsR0FBOUIsR0FBb0MsS0FBSzZFLFFBQUwsQ0FBY00sTUFBN0U7QUFDQSxZQUFJK0IsUUFBUSxHQUFHLENBQUNILFlBQUQsRUFBZUMsWUFBZixFQUE2QkMsb0JBQTdCLEVBQW1EakgsSUFBbkQsQ0FBZjs7QUFFQSxhQUFLLElBQUltRCxDQUFULElBQWMrRCxRQUFkLEVBQXdCO0FBQ3BCLGNBQUlBLFFBQVEsQ0FBQy9ELENBQUQsQ0FBUixJQUFlLEtBQUswQyxPQUF4QixFQUFpQztBQUM3QixtQkFBTyxLQUFLQSxPQUFMLENBQWFxQixRQUFRLENBQUMvRCxDQUFELENBQXJCLENBQVA7QUFDSDtBQUNKOztBQUVELGNBQU0sSUFBSWdFLEtBQUosQ0FBVSxnQkFBZ0JuSCxJQUFoQixHQUF1QixtQkFBakMsQ0FBTjtBQUNIO0FBRUQ7Ozs7Ozs7OztBQWpCRCxLQXJNa0IsRUErTmxCO0FBQ0NxRCxTQUFHLEVBQUUsVUFETjtBQUVDZ0MsV0FBSyxFQUFFLFNBQVMrQixRQUFULENBQWtCcEgsSUFBbEIsRUFBd0JxSCxVQUF4QixFQUFvQztBQUN2QyxZQUFJQyxRQUFRLEdBQUc1SyxTQUFTLENBQUN3QyxNQUFWLEdBQW1CLENBQW5CLElBQXdCeEMsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQjZLLFNBQXpDLEdBQXFEN0ssU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsS0FBbkY7O0FBRUEsWUFBSThLLEtBQUssR0FBRyxLQUFLVixRQUFMLENBQWM5RyxJQUFkLENBQVo7QUFBQSxZQUNJdUcsTUFBTSxHQUFHYyxVQUFVLElBQUksRUFEM0I7QUFBQSxZQUVJSSxZQUFZLEdBQUcxRSxRQUFRLENBQUMsRUFBRCxFQUFLd0QsTUFBTCxDQUYzQjtBQUFBLFlBR0ltQixHQUFHLEdBQUcsRUFIVjtBQUFBLFlBSUlDLFFBQVEsR0FBRyxJQUpmO0FBQUEsWUFLSTNDLElBQUksR0FBRyxFQUxYO0FBQUEsWUFNSUMsSUFBSSxHQUFHLE9BQU8sS0FBS21CLE9BQUwsRUFBUCxJQUF5QixXQUF6QixJQUF3QyxLQUFLQSxPQUFMLE9BQW1CLElBQTNELEdBQWtFLEVBQWxFLEdBQXVFLEtBQUtBLE9BQUwsRUFObEY7O0FBUUFvQixhQUFLLENBQUNJLE1BQU4sQ0FBYWpJLE9BQWIsQ0FBcUIsVUFBVWtJLEtBQVYsRUFBaUI7QUFDbEMsY0FBSSxXQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QjtBQUNyQkgsZUFBRyxHQUFHL0MsTUFBTSxDQUFDbUQsbUJBQVAsQ0FBMkJELEtBQUssQ0FBQyxDQUFELENBQWhDLElBQXVDSCxHQUE3QztBQUNBQyxvQkFBUSxHQUFHLEtBQVg7QUFFQTtBQUNIOztBQUVELGNBQUksZUFBZUUsS0FBSyxDQUFDLENBQUQsQ0FBeEIsRUFBNkI7QUFDekIsZ0JBQUlFLFVBQVUsR0FBR1AsS0FBSyxDQUFDUSxRQUFOLElBQWtCSCxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVlMLEtBQUssQ0FBQ1EsUUFBckQ7O0FBQ0EsZ0JBQUksVUFBVUwsUUFBVixJQUFzQixDQUFDSSxVQUF2QixJQUFxQ0YsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZdEIsTUFBWixJQUFzQkEsTUFBTSxDQUFDc0IsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFOLElBQW9CTCxLQUFLLENBQUNRLFFBQU4sQ0FBZUgsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBbkYsRUFBNkc7QUFDekcsa0JBQUl4QyxLQUFLLEdBQUcsS0FBSyxDQUFqQjs7QUFFQSxrQkFBSXdDLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWXRCLE1BQWhCLEVBQXdCO0FBQ3BCbEIscUJBQUssR0FBR2tCLE1BQU0sQ0FBQ3NCLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBZDtBQUNBLHVCQUFPSixZQUFZLENBQUNJLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBbkI7QUFDSCxlQUhELE1BR08sSUFBSUUsVUFBSixFQUFnQjtBQUNuQjFDLHFCQUFLLEdBQUdtQyxLQUFLLENBQUNRLFFBQU4sQ0FBZUgsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBUjtBQUNILGVBRk0sTUFFQSxJQUFJRixRQUFKLEVBQWM7QUFDakI7QUFDSCxlQUZNLE1BRUE7QUFDSCxzQkFBTSxJQUFJUixLQUFKLENBQVUsZ0JBQWdCbkgsSUFBaEIsR0FBdUIsNEJBQXZCLEdBQXNENkgsS0FBSyxDQUFDLENBQUQsQ0FBM0QsR0FBaUUsSUFBM0UsQ0FBTjtBQUNIOztBQUVELGtCQUFJSSxLQUFLLEdBQUcsU0FBUzVDLEtBQVQsSUFBa0IsVUFBVUEsS0FBNUIsSUFBcUMsT0FBT0EsS0FBeEQ7O0FBRUEsa0JBQUksQ0FBQzRDLEtBQUQsSUFBVSxDQUFDTixRQUFmLEVBQXlCO0FBQ3JCLG9CQUFJTyxZQUFZLEdBQUd2RCxNQUFNLENBQUNtRCxtQkFBUCxDQUEyQnpDLEtBQTNCLENBQW5COztBQUVBLG9CQUFJLFdBQVc2QyxZQUFYLElBQTJCLFNBQVM3QyxLQUF4QyxFQUErQztBQUMzQzZDLDhCQUFZLEdBQUcsRUFBZjtBQUNIOztBQUVEUixtQkFBRyxHQUFHRyxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVdLLFlBQVgsR0FBMEJSLEdBQWhDO0FBQ0g7O0FBRURDLHNCQUFRLEdBQUcsS0FBWDtBQUNILGFBM0JELE1BMkJPLElBQUlJLFVBQVUsSUFBSUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZSixZQUE5QixFQUE0QztBQUMvQyxxQkFBT0EsWUFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQW5CO0FBQ0g7O0FBRUQ7QUFDSDs7QUFFRCxnQkFBTSxJQUFJVixLQUFKLENBQVUscUJBQXFCVSxLQUFLLENBQUMsQ0FBRCxDQUExQixHQUFnQyxxQkFBMUMsQ0FBTjtBQUNILFNBN0NEOztBQStDQSxZQUFJSCxHQUFHLEtBQUssRUFBWixFQUFnQjtBQUNaQSxhQUFHLEdBQUcsR0FBTjtBQUNIOztBQUVERixhQUFLLENBQUNXLFVBQU4sQ0FBaUJ4SSxPQUFqQixDQUF5QixVQUFVa0ksS0FBVixFQUFpQjtBQUN0QyxjQUFJeEMsS0FBSyxHQUFHLEtBQUssQ0FBakI7O0FBRUEsY0FBSSxXQUFXd0MsS0FBSyxDQUFDLENBQUQsQ0FBcEIsRUFBeUI7QUFDckI3QyxnQkFBSSxHQUFHNkMsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXN0MsSUFBbEI7QUFFQTtBQUNIOztBQUVELGNBQUksZUFBZTZDLEtBQUssQ0FBQyxDQUFELENBQXhCLEVBQTZCO0FBQ3pCLGdCQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVl0QixNQUFoQixFQUF3QjtBQUNwQmxCLG1CQUFLLEdBQUdrQixNQUFNLENBQUNzQixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQWQ7QUFDQSxxQkFBT0osWUFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQW5CO0FBQ0gsYUFIRCxNQUdPLElBQUlMLEtBQUssQ0FBQ1EsUUFBTixJQUFrQkgsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZTCxLQUFLLENBQUNRLFFBQXhDLEVBQWtEO0FBQ3JEM0MsbUJBQUssR0FBR21DLEtBQUssQ0FBQ1EsUUFBTixDQUFlSCxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUFSO0FBQ0g7O0FBRUQ3QyxnQkFBSSxHQUFHNkMsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXeEMsS0FBWCxHQUFtQkwsSUFBMUI7QUFDSDtBQUNKLFNBbkJELEVBOUR1QyxDQWtGdkM7O0FBQ0EwQyxXQUFHLEdBQUcsS0FBSzdDLFFBQUwsQ0FBY0MsUUFBZCxHQUF5QjRDLEdBQS9COztBQUVBLFlBQUlGLEtBQUssQ0FBQ1ksWUFBTixJQUFzQixhQUFhWixLQUFLLENBQUNZLFlBQXpDLElBQXlELEtBQUtsQyxTQUFMLE1BQW9Cc0IsS0FBSyxDQUFDWSxZQUFOLENBQW1CLFNBQW5CLENBQWpGLEVBQWdIO0FBQzVHLGNBQUlDLFdBQVcsR0FBR3JELElBQUksSUFBSSxLQUFLbUIsT0FBTCxFQUExQjtBQUVBdUIsYUFBRyxHQUFHRixLQUFLLENBQUNZLFlBQU4sQ0FBbUIsU0FBbkIsSUFBZ0MsS0FBaEMsR0FBd0NDLFdBQXhDLElBQXVEQSxXQUFXLENBQUNDLE9BQVosQ0FBb0IsTUFBTXJELElBQTFCLElBQWtDLENBQUMsQ0FBbkMsSUFBd0MsT0FBT0EsSUFBL0MsR0FBc0QsRUFBdEQsR0FBMkQsTUFBTUEsSUFBeEgsSUFBZ0l5QyxHQUF0STtBQUNILFNBSkQsTUFJTyxJQUFJLGdCQUFnQixPQUFPRixLQUFLLENBQUNlLE9BQTdCLElBQXdDLGdCQUFnQixPQUFPZixLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLENBQS9ELElBQW1GLEtBQUtyQyxTQUFMLE9BQXFCc0IsS0FBSyxDQUFDZSxPQUFOLENBQWMsQ0FBZCxDQUE1RyxFQUE4SDtBQUNqSSxjQUFJQyxZQUFZLEdBQUd4RCxJQUFJLElBQUksS0FBS21CLE9BQUwsRUFBM0I7O0FBRUF1QixhQUFHLEdBQUdGLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsSUFBbUIsS0FBbkIsR0FBMkJDLFlBQTNCLElBQTJDQSxZQUFZLENBQUNGLE9BQWIsQ0FBcUIsTUFBTXJELElBQTNCLElBQW1DLENBQUMsQ0FBcEMsSUFBeUMsT0FBT0EsSUFBaEQsR0FBdUQsRUFBdkQsR0FBNEQsTUFBTUEsSUFBN0csSUFBcUh5QyxHQUEzSDtBQUNILFNBSk0sTUFJQSxJQUFJMUMsSUFBSSxJQUFJLEtBQUttQixPQUFMLE9BQW1CbkIsSUFBSSxJQUFJQSxJQUFJLENBQUNzRCxPQUFMLENBQWEsTUFBTXJELElBQW5CLElBQTJCLENBQUMsQ0FBNUIsSUFBaUMsT0FBT0EsSUFBeEMsR0FBK0MsRUFBL0MsR0FBb0QsTUFBTUEsSUFBOUQsQ0FBbkMsRUFBd0c7QUFDM0d5QyxhQUFHLEdBQUcsS0FBS3hCLFNBQUwsS0FBbUIsS0FBbkIsR0FBMkJsQixJQUEzQixJQUFtQ0EsSUFBSSxDQUFDc0QsT0FBTCxDQUFhLE1BQU1yRCxJQUFuQixJQUEyQixDQUFDLENBQTVCLElBQWlDLE9BQU9BLElBQXhDLEdBQStDLEVBQS9DLEdBQW9ELE1BQU1BLElBQTdGLElBQXFHeUMsR0FBM0c7QUFDSCxTQUZNLE1BRUEsSUFBSUosUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQzFCSSxhQUFHLEdBQUcsS0FBS3hCLFNBQUwsS0FBbUIsS0FBbkIsR0FBMkIsS0FBS0MsT0FBTCxFQUEzQixJQUE2QyxLQUFLQSxPQUFMLEdBQWVtQyxPQUFmLENBQXVCLE1BQU1yRCxJQUE3QixJQUFxQyxDQUFDLENBQXRDLElBQTJDLE9BQU9BLElBQWxELEdBQXlELEVBQXpELEdBQThELE1BQU1BLElBQWpILElBQXlIeUMsR0FBL0g7QUFDSDs7QUFFRCxZQUFJMUUsTUFBTSxDQUFDeUYsSUFBUCxDQUFZaEIsWUFBWixFQUEwQnZJLE1BQTFCLEdBQW1DLENBQXZDLEVBQTBDO0FBQ3RDLGNBQUk2RixNQUFNLEdBQUcsS0FBSyxDQUFsQjtBQUNBLGNBQUkyRCxXQUFXLEdBQUcsRUFBbEI7O0FBQ0EsY0FBSWxDLEdBQUcsR0FBRyxTQUFTQSxHQUFULENBQWFuRCxHQUFiLEVBQWtCZ0MsS0FBbEIsRUFBeUI7QUFDL0I7QUFDQUEsaUJBQUssR0FBRyxPQUFPQSxLQUFQLEtBQWlCLFVBQWpCLEdBQThCQSxLQUFLLEVBQW5DLEdBQXdDQSxLQUFoRCxDQUYrQixDQUkvQjs7QUFDQUEsaUJBQUssR0FBR0EsS0FBSyxLQUFLLElBQVYsR0FBaUIsRUFBakIsR0FBc0JBLEtBQTlCO0FBRUFxRCx1QkFBVyxDQUFDQyxJQUFaLENBQWlCaEUsTUFBTSxDQUFDaUUsb0JBQVAsQ0FBNEJ2RixHQUE1QixJQUFtQyxHQUFuQyxHQUF5Q3NCLE1BQU0sQ0FBQ2lFLG9CQUFQLENBQTRCdkQsS0FBNUIsQ0FBMUQ7QUFDSCxXQVJEOztBQVVBLGVBQUtOLE1BQUwsSUFBZTBDLFlBQWYsRUFBNkI7QUFDekIsaUJBQUtuQixnQkFBTCxDQUFzQnZCLE1BQXRCLEVBQThCMEMsWUFBWSxDQUFDMUMsTUFBRCxDQUExQyxFQUFvRHlCLEdBQXBEO0FBQ0g7O0FBRURrQixhQUFHLEdBQUdBLEdBQUcsR0FBRyxHQUFOLEdBQVlnQixXQUFXLENBQUNHLElBQVosQ0FBaUIsR0FBakIsQ0FBbEI7QUFDSDs7QUFFRCxlQUFPbkIsR0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUE1SEQsS0EvTmtCLENBQVQsRUFrV1IsQ0FBQztBQUNEckUsU0FBRyxFQUFFLGFBREo7QUFFRGdDLFdBQUssRUFBRSxTQUFTeUQsV0FBVCxHQUF1QjtBQUMxQixlQUFPdkcsT0FBUDtBQUNIO0FBRUQ7Ozs7O0FBTkMsS0FBRCxFQVdEO0FBQ0NjLFNBQUcsRUFBRSxTQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBUzBELE9BQVQsQ0FBaUJ6RCxJQUFqQixFQUF1QjtBQUMxQixZQUFJMEQsTUFBTSxHQUFHckUsTUFBTSxDQUFDbUUsV0FBUCxFQUFiO0FBRUFFLGNBQU0sQ0FBQ3RHLGNBQVAsQ0FBc0I0QyxJQUF0QjtBQUNIO0FBTkYsS0FYQyxFQWtCRDtBQUNDakMsU0FBRyxFQUFFLDBCQUROO0FBRUNnQyxXQUFLLEVBQUUsU0FBUzRELHdCQUFULENBQWtDNUQsS0FBbEMsRUFBeUM7QUFDNUMsZUFBTzZELGtCQUFrQixDQUFDN0QsS0FBRCxDQUFsQixDQUEwQjhELE9BQTFCLENBQWtDLE1BQWxDLEVBQTBDLEdBQTFDLEVBQStDQSxPQUEvQyxDQUF1RCxNQUF2RCxFQUErRCxHQUEvRCxFQUFvRUEsT0FBcEUsQ0FBNEUsTUFBNUUsRUFBb0YsR0FBcEYsRUFBeUZBLE9BQXpGLENBQWlHLE1BQWpHLEVBQXlHLEdBQXpHLEVBQThHQSxPQUE5RyxDQUFzSCxNQUF0SCxFQUE4SCxHQUE5SCxFQUFtSUEsT0FBbkksQ0FBMkksTUFBM0ksRUFBbUosR0FBbkosRUFBd0pBLE9BQXhKLENBQWdLLE1BQWhLLEVBQXdLLEdBQXhLLEVBQTZLQSxPQUE3SyxDQUFxTCxLQUFyTCxFQUE0TCxLQUE1TCxFQUFtTUEsT0FBbk0sQ0FBMk0sS0FBM00sRUFBa04sS0FBbE4sRUFBeU5BLE9BQXpOLENBQWlPLElBQWpPLEVBQXVPLEtBQXZPLENBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBTkQsS0FsQkMsRUErQkQ7QUFDQzlGLFNBQUcsRUFBRSxxQkFETjtBQUVDZ0MsV0FBSyxFQUFFLFNBQVN5QyxtQkFBVCxDQUE2QnpDLEtBQTdCLEVBQW9DO0FBQ3ZDLGVBQU9WLE1BQU0sQ0FBQ3NFLHdCQUFQLENBQWdDNUQsS0FBaEMsRUFBdUM4RCxPQUF2QyxDQUErQyxNQUEvQyxFQUF1RCxHQUF2RCxFQUE0REEsT0FBNUQsQ0FBb0UsTUFBcEUsRUFBNEUsR0FBNUUsRUFBaUZBLE9BQWpGLENBQXlGLE1BQXpGLEVBQWlHLEdBQWpHLEVBQXNHQSxPQUF0RyxDQUE4RyxNQUE5RyxFQUFzSCxHQUF0SCxDQUFQO0FBQ0g7QUFFRDs7Ozs7OztBQU5ELEtBL0JDLEVBNENEO0FBQ0M5RixTQUFHLEVBQUUsc0JBRE47QUFFQ2dDLFdBQUssRUFBRSxTQUFTdUQsb0JBQVQsQ0FBOEJ2RCxLQUE5QixFQUFxQztBQUN4QyxlQUFPVixNQUFNLENBQUNzRSx3QkFBUCxDQUFnQzVELEtBQWhDLEVBQXVDOEQsT0FBdkMsQ0FBK0MsTUFBL0MsRUFBdUQsR0FBdkQsQ0FBUDtBQUNIO0FBSkYsS0E1Q0MsQ0FsV1EsQ0FBWjs7QUFxWkEsV0FBT3hFLE1BQVA7QUFDSCxHQTFhWSxFQUFiO0FBNGFBOzs7Ozs7Ozs7O0FBVUFBLFFBQU0sQ0FBQ3lFLEtBQVA7QUFFQTs7Ozs7O0FBS0F6RSxRQUFNLENBQUMwRSxPQUFQO0FBRUE7Ozs7OztBQUtBLE1BQUk5RyxPQUFPLEdBQUcsSUFBSW9DLE1BQUosRUFBZDtBQUVJLFNBQU87QUFBRUEsVUFBTSxFQUFFQSxNQUFWO0FBQWtCcEMsV0FBTyxFQUFFQTtBQUEzQixHQUFQO0FBQ0gsQ0EvZUEsQ0FBRCxDIiwiZmlsZSI6InJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL3JlZ2lzdGVyLmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG4gICB2YXIgdGltZW91dDtcclxuICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIG9iaiA9IHRoaXMsXHJcbiAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xyXG4gICAgICB9O1xyXG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcbiAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XHJcbiAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUsIHByZWZvbWF0dGVkRGF0ZSA9IGZhbHNlLCBoaWRlWWVhciA9IGZhbHNlKSB7XHJcbiAgIGNvbnN0IE1PTlRIX05BTUVTID0gW1xyXG4gICAgICBcIkphbnVhcnlcIixcclxuICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICBcIk1hcmNoXCIsXHJcbiAgICAgIFwiQXByaWxcIixcclxuICAgICAgXCJNYXlcIixcclxuICAgICAgXCJKdW5lXCIsXHJcbiAgICAgIFwiSnVseVwiLFxyXG4gICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICBcIkRlY2VtYmVyXCIsXHJcbiAgIF07XHJcbiAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICBjb25zdCBtb250aCA9IE1PTlRIX05BTUVTW2RhdGUuZ2V0TW9udGgoKV07XHJcbiAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICBsZXQgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG5cclxuICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xyXG4gICAgICAvLyBBZGRpbmcgbGVhZGluZyB6ZXJvIHRvIG1pbnV0ZXNcclxuICAgICAgbWludXRlcyA9IGAwJHttaW51dGVzfWA7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChwcmVmb21hdHRlZERhdGUpIHtcclxuICAgICAgLy8gVG9kYXkgYXQgMTA6MjBcclxuICAgICAgLy8gWWVzdGVyZGF5IGF0IDEwOjIwXHJcbiAgICAgIHJldHVybiBgJHtwcmVmb21hdHRlZERhdGV9IGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICB9XHJcblxyXG4gICBpZiAoaGlkZVllYXIpIHtcclxuICAgICAgLy8gMTAuIEphbnVhcnkgYXQgMTA6MjBcclxuICAgICAgcmV0dXJuIGAke2RheX0gJHttb250aH0gYXQgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgIH1cclxuXHJcbiAgIC8vIDEwLiBKYW51YXJ5IDIwMTcuIGF0IDEwOjIwXHJcbiAgIHJldHVybiBgJHtkYXl9ICR7bW9udGh9ICR7eWVhcn0uIGF0ICR7aG91cnN9OiR7bWludXRlc31gO1xyXG59XHJcblxyXG4vLyAtLS0gTWFpbiBmdW5jdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gdGltZUFnbyhkYXRlUGFyYW0pIHtcclxuICAgaWYgKCFkYXRlUGFyYW0pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IGRhdGUgPSB0eXBlb2YgZGF0ZVBhcmFtID09PSBcIm9iamVjdFwiID8gZGF0ZVBhcmFtIDogbmV3IERhdGUoZGF0ZVBhcmFtKTtcclxuICAgY29uc3QgREFZX0lOX01TID0gODY0MDAwMDA7IC8vIDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICBjb25zdCB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZSh0b2RheSAtIERBWV9JTl9NUyk7XHJcbiAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLnJvdW5kKCh0b2RheSAtIGRhdGUpIC8gMTAwMCk7XHJcbiAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnJvdW5kKHNlY29uZHMgLyA2MCk7XHJcbiAgIGNvbnN0IGlzVG9kYXkgPSB0b2RheS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKTtcclxuICAgY29uc3QgaXNZZXN0ZXJkYXkgPSB5ZXN0ZXJkYXkudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCk7XHJcbiAgIGNvbnN0IGlzVGhpc1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICBpZiAoc2Vjb25kcyA8IDUpIHtcclxuICAgICAgcmV0dXJuIFwibm93XCI7XHJcbiAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XHJcbiAgICAgIHJldHVybiBgJHtzZWNvbmRzfSBzZWNvbmRzIGFnb2A7XHJcbiAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDkwKSB7XHJcbiAgICAgIHJldHVybiBcImFib3V0IGEgbWludXRlIGFnb1wiO1xyXG4gICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkge1xyXG4gICAgICByZXR1cm4gYCR7bWludXRlc30gbWludXRlcyBhZ29gO1xyXG4gICB9IGVsc2UgaWYgKGlzVG9kYXkpIHtcclxuICAgICAgcmV0dXJuIGdldEZvcm1hdHRlZERhdGUoZGF0ZSwgXCJUb2RheVwiKTsgLy8gVG9kYXkgYXQgMTA6MjBcclxuICAgfSBlbHNlIGlmIChpc1llc3RlcmRheSkge1xyXG4gICAgICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlLCBcIlllc3RlcmRheVwiKTsgLy8gWWVzdGVyZGF5IGF0IDEwOjIwXHJcbiAgIH0gZWxzZSBpZiAoaXNUaGlzWWVhcikge1xyXG4gICAgICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlLCBmYWxzZSwgdHJ1ZSk7IC8vIDEwLiBKYW51YXJ5IGF0IDEwOjIwXHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpOyAvLyAxMC4gSmFudWFyeSAyMDE3LiBhdCAxMDoyMFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RFbGVtZW50QnlDbGFzc05hbWUoZWxlbWVudCwgY2xhc3NuYW1lKSB7XHJcbiAgIC8vIGxvb2sgZm9yIGRpcmVjdCBwYXJlbnRcclxuICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzbmFtZSkpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgIC8vIGlmIG5vIGRpcmVjdCBwYXJlbnQgZm91bmQgbG9vayBieSBjbGFzc25hbWVcclxuICAgfSBlbHNlIGlmICghZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzbmFtZSkubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc25hbWUpWzBdO1xyXG4gICAgICAvL2lmIGVsZW1lbnQgaGF2ZSBubyBwYXJlbnQgdGhyb3cgZXJyb3JcclxuICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgLy8gdGhyb3cgYGVycm9yIGZyb20gaGVscGVycy5nZXRGaXJzdEVsZW1lbnRCeUNsYXNzTmFtZTogd2hlcmUgd2FzIGFuIGVycm9yIGluIGZpbmRpbmcgdGFyZ2V0IGVsZW1lbnQg4oCTICR7Y2xhc3NuYW1lfWA7XHJcbiAgIH1cclxuICAgcmV0dXJuIGdldEZpcnN0RWxlbWVudEJ5Q2xhc3NOYW1lKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJPck51bGwoY2xhc3NsaXN0LCBhdHRyKSB7XHJcbiAgIHZhciBjdXJyZW50X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc2xpc3Quc2hpZnQoKX1gKTtcclxuXHJcbiAgIGNsYXNzbGlzdC5mb3JFYWNoKChjbGFzc25hbWUpID0+IHtcclxuICAgICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NuYW1lfWApO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgaWYgKGN1cnJlbnRfZWxlbWVudCkge1xyXG4gICAgICB2YXIgYXR0cmlidXRlID0gY3VycmVudF9lbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcclxuICAgfVxyXG5cclxuICAgdmFyIHJldHVybl92YWx1ZSA9IGF0dHJpYnV0ZSA/IGF0dHJpYnV0ZSA6IG51bGw7XHJcbiAgIHJldHVybiByZXR1cm5fdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyT3JGYWxzZShjbGFzc2xpc3QsIG5hbWUsIGF0dHIpIHtcclxuICAgdmFyIGN1cnJlbnRfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzbGlzdC5zaGlmdCgpfWApO1xyXG5cclxuICAgY2xhc3NsaXN0LmZvckVhY2goKGNsYXNzbmFtZSkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudF9lbGVtZW50KSB7XHJcbiAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGN1cnJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc25hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcblxyXG4gICBpZiAoY3VycmVudF9lbGVtZW50KSB7XHJcbiAgICAgIGN1cnJlbnRfZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cik7XHJcbiAgIH1cclxuXHJcbiAgIHZhciByZXR1cm5fdmFsdWUgPSBjdXJyZW50X2VsZW1lbnQgPyB0cnVlIDogZmFsc2U7XHJcbiAgIHJldHVybiByZXR1cm5fdmFsdWU7XHJcbn1cclxuXHJcbi8vIGxhc3QgZWxlbWVudCBpbiBhcnJheVxyXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkge1xyXG4gICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbi8vcmV0dXJuIGFic29sdXRlIHBvc2l0aW9uIG9mIGVsZW1lbnRcclxuZXhwb3J0IHZhciBnZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgIHZhciB0b3AgPSAwLFxyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgZG8ge1xyXG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcclxuICAgICAgbGVmdCArPSBlbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcclxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xyXG4gICB9IHdoaWxlIChlbGVtZW50KTtcclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogdG9wLFxyXG4gICAgICBsZWZ0OiBsZWZ0LFxyXG4gICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBnZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICB2YXIgdG9wID0gMCxcclxuICAgICAgbGVmdCA9IDA7XHJcbiAgIHZhciByaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcclxuICAgZG8ge1xyXG4gICAgICB0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcclxuICAgICAgbGVmdCArPSBlbGVtZW50Lm9mZnNldExlZnQgfHwgMDtcclxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xyXG4gICB9IHdoaWxlIChlbGVtZW50KTtcclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogdG9wLFxyXG4gICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICByaWdodDogcmlnaHQsXHJcbiAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnQob2JqZWN0LCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICBpZiAob2JqZWN0ID09IG51bGwgfHwgdHlwZW9mIG9iamVjdCA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcbiAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gICB9IGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudCkge1xyXG4gICAgICBvYmplY3QuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgY2FsbGJhY2spO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RbXCJvblwiICsgdHlwZV0gPSBjYWxsYmFjaztcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgbGltaXQpIHtcclxuICAgbGV0IGluVGhyb3R0bGU7XHJcbiAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICBpZiAoIWluVGhyb3R0bGUpIHtcclxuICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgaW5UaHJvdHRsZSA9IHRydWU7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGluVGhyb3R0bGUgPSBmYWxzZSksIGxpbWl0KTtcclxuICAgICAgfVxyXG4gICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVMYXN0KGZ1bmMsIGxpbWl0KSB7XHJcbiAgIGxldCBsYXN0RnVuYztcclxuICAgbGV0IGxhc3RSYW47XHJcbiAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICBpZiAoIWxhc3RSYW4pIHtcclxuICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGNsZWFyVGltZW91dChsYXN0RnVuYyk7XHJcbiAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdFJhbiA+PSBsaW1pdCkge1xyXG4gICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xyXG4gICAgICB9XHJcbiAgIH07XHJcbn1cclxuXHJcbi8vICoqIEZBREUgT1VUIEZVTkNUSU9OICoqXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWRlT3V0KGVsKSB7XHJcbiAgIGVsLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAoZnVuY3Rpb24gZmFkZSgpIHtcclxuICAgICAgaWYgKChlbC5zdHlsZS5vcGFjaXR5IC09IDAuMSkgPCAwKSB7XHJcbiAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZhZGUpO1xyXG4gICAgICB9XHJcbiAgIH0pKCk7XHJcbn1cclxuXHJcbi8vICoqIEZBREUgSU4gRlVOQ1RJT04gKipcclxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVJbihlbCwgZGlzcGxheSkge1xyXG4gICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgZWwuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkgfHwgXCJibG9ja1wiO1xyXG4gICAoZnVuY3Rpb24gZmFkZSgpIHtcclxuICAgICAgdmFyIHZhbCA9IHBhcnNlRmxvYXQoZWwuc3R5bGUub3BhY2l0eSk7XHJcbiAgICAgIGlmICghKCh2YWwgKz0gMC4xKSA+IDEpKSB7XHJcbiAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB2YWw7XHJcbiAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmYWRlKTtcclxuICAgICAgfVxyXG4gICB9KSgpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi8uLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xyXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwiLi9qc19yb3V0ZXMuanNvblwiKTtcclxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4vLyAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3JlZ2lzdGVyLWZvcm1cIik7XHJcbi8vICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19yZWdpc3RlclwiKTtcclxuXHJcbi8vICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuLy8gICAgICAgZmV0Y2goUm91dGluZy5nZW5lcmF0ZShcInJlZ2lzdGVyXCIpLCB7XHJcbi8vICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbi8vICAgICAgICAgIGJvZHk6IGRhdGEsXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbi8vICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuLy8gICAgICAgICAgICAgaWYgKHJlcy5jb21wbGV0aW9uKSB7XHJcbi8vICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUm91dGluZy5nZW5lcmF0ZShcInByb2ZpbGVfcGFnZVwiLCB7IHByb2ZpbGU6IHJlcy5wcm9maWxlX2lkIH0pO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0ge307XHJcbi8vICAgICAgICAgICAgICAgIHJlcy5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBlcnJvci5jYXVzZS5wcm9wZXJ0eVBhdGguaW5jbHVkZXMoXCJwYXNzd29yZFwiKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICA/IFwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLmNhdXNlLnByb3BlcnR5UGF0aC5zcGxpdChcIi5cIilbMV07XHJcbi8vICAgICAgICAgICAgICAgICAgIGVycm9yc1tuYW1lXSA9IGVycm9yLm1lc3NhZ2U7XHJcbi8vICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICBEaXNwbGF5RXJyb3JzKGVycm9ycyk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgfSk7XHJcbi8vICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IERpc3BsYXlFcnJvcnMgPSAoZXJyb3JzKSA9PiB7XHJcbi8vICAgIGxldCBpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dF9mb3JtXCIpO1xyXG4vLyAgICBpLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbi8vICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfX2Vycm9yXCIpO1xyXG4vLyAgICB9KTtcclxuXHJcbi8vICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dF9fZXJyb3JcIik7XHJcbi8vICAgIGUuZm9yRWFjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbi8vICAgIH0pO1xyXG5cclxuLy8gICAgaWYgKGVycm9ycy5maXJzdG5hbWUpIHtcclxuLy8gICAgICAgbGV0IGZpcnN0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JfX2ZpcnN0bmFtZVwiKTtcclxuLy8gICAgICAgbGV0IGlucHV0X2ZpcnN0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcl9maXJzdG5hbWVcIik7XHJcbi8vICAgICAgIGlucHV0X2ZpcnN0bmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX19lcnJvclwiKTtcclxuLy8gICAgICAgZmlyc3RuYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICAgIGZpcnN0bmFtZS5pbm5lckhUTUwgPSBlcnJvcnMuZmlyc3RuYW1lO1xyXG4vLyAgICB9XHJcblxyXG4vLyAgICBpZiAoZXJyb3JzLmxhc3RuYW1lKSB7XHJcbi8vICAgICAgIGxldCBsYXN0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JfX2xhc3RuYW1lXCIpO1xyXG4vLyAgICAgICBsZXQgaW5wdXRfbGFzdG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJfbGFzdG5hbWVcIik7XHJcbi8vICAgICAgIGlucHV0X2xhc3RuYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfX2Vycm9yXCIpO1xyXG4vLyAgICAgICBsYXN0bmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vLyAgICAgICBsYXN0bmFtZS5pbm5lckhUTUwgPSBlcnJvcnMubGFzdG5hbWU7XHJcbi8vICAgIH1cclxuXHJcbi8vICAgIGlmIChlcnJvcnMuZW1haWwpIHtcclxuLy8gICAgICAgbGV0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9fZW1haWxcIik7XHJcbi8vICAgICAgIGxldCBpbnB1dF9lbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcl9lbWFpbFwiKTtcclxuLy8gICAgICAgaW5wdXRfZW1haWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9fZXJyb3JcIik7XHJcbi8vICAgICAgIGVtYWlsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICAgIGVtYWlsLmlubmVySFRNTCA9IGVycm9ycy5lbWFpbDtcclxuLy8gICAgfVxyXG5cclxuLy8gICAgaWYgKGVycm9ycy5wYXNzd29yZCkge1xyXG4vLyAgICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yX19wYXNzd29yZFwiKTtcclxuLy8gICAgICAgbGV0IGlucHV0X3Bhc3N3b3JkX2ZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyX3Bhc3N3b3JkX2ZpcnN0XCIpO1xyXG4vLyAgICAgICBsZXQgaW5wdXRfcGFzc3dvcmRfc2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyX3Bhc3N3b3JkX3NlY29uZFwiKTtcclxuLy8gICAgICAgaW5wdXRfcGFzc3dvcmRfZmlyc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9fZXJyb3JcIik7XHJcbi8vICAgICAgIGlucHV0X3Bhc3N3b3JkX3NlY29uZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX19lcnJvclwiKTtcclxuLy8gICAgICAgcGFzc3dvcmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAgICAgcGFzc3dvcmQuaW5uZXJIVE1MID0gZXJyb3JzLnBhc3N3b3JkO1xyXG4vLyAgICB9XHJcbi8vIH07XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xyXG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcclxuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cclxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xyXG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XHJcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcclxuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xyXG5cclxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmpba2V5XTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXHJcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxyXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XHJcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XHJcblxyXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxyXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBnZW5lcmF0b3I7XHJcbiAgfVxyXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XHJcblxyXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxyXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxyXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxyXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcclxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXHJcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xyXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXHJcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXHJcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxyXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cclxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcclxuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xyXG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XHJcblxyXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcclxuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXHJcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcclxuXHJcbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXHJcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcclxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cclxuXHJcbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxyXG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXHJcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XHJcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcclxuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcclxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXHJcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcclxuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXHJcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXHJcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xyXG4gIH1cclxuXHJcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cclxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcclxuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXHJcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcclxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxyXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgKTtcclxuXHJcbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcclxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxyXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcclxuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gY3RvclxyXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XHJcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxyXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cclxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcclxuICAgICAgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcclxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcclxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcclxuICAgIHJldHVybiBnZW5GdW47XHJcbiAgfTtcclxuXHJcbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXHJcbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcclxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXHJcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cclxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XHJcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcclxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcclxuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXHJcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcclxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxyXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xyXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxyXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxyXG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcclxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXHJcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cclxuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xyXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcclxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xyXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcclxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxyXG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cclxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxyXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXHJcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcclxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxyXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcclxuICB9XHJcblxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XHJcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XHJcblxyXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcclxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcclxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cclxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XHJcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xyXG5cclxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXHJcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxyXG4gICAgICBQcm9taXNlSW1wbFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXHJcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXHJcbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xyXG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICB0aHJvdyBhcmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxyXG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcclxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xyXG5cclxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XHJcbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXHJcbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxyXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcclxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXHJcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXHJcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxyXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxyXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxyXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcclxuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XHJcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XHJcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxyXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxyXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cclxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcclxuXHJcbiAgICBpZiAoISBpbmZvKSB7XHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbmZvLmRvbmUpIHtcclxuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcclxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XHJcblxyXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXHJcbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XHJcblxyXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcclxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxyXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxyXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcclxuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcclxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxyXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cclxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxyXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xyXG5cclxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcclxuXHJcbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcclxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxyXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXHJcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXHJcbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcclxuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XHJcblxyXG4gICAgaWYgKDEgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKDIgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcclxuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcclxuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xyXG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xyXG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XHJcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xyXG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXHJcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXHJcbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXHJcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xyXG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xyXG4gICAgdmFyIGtleXMgPSBbXTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBrZXlzLnJldmVyc2UoKTtcclxuXHJcbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxyXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cclxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcclxuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcclxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcclxuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXHJcbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcbiAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcclxuICAgIGlmIChpdGVyYWJsZSkge1xyXG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XHJcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xyXG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XHJcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xyXG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXHJcbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XHJcbiAgfVxyXG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xyXG5cclxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xyXG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XHJcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xyXG4gICAgICB0aGlzLnByZXYgPSAwO1xyXG4gICAgICB0aGlzLm5leHQgPSAwO1xyXG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xyXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XHJcblxyXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xyXG5cclxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxyXG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxyXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xyXG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XHJcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XHJcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICB0aHJvdyBleGNlcHRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XHJcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XHJcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcclxuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XHJcblxyXG4gICAgICAgIGlmIChjYXVnaHQpIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXHJcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcclxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXHJcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cclxuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcclxuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xyXG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxyXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcclxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXHJcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXHJcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxyXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xyXG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XHJcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcclxuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xyXG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcclxuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XHJcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xyXG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0aHJvd247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cclxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XHJcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXHJcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcclxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcclxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXHJcbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcclxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcclxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcclxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxyXG4gIHJldHVybiBleHBvcnRzO1xyXG5cclxufShcclxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xyXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XHJcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxyXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXHJcbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cclxuKSk7XHJcblxyXG50cnkge1xyXG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XHJcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XHJcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcclxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcclxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcclxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcclxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcclxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxyXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXHJcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXHJcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXHJcbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcclxufVxyXG4iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICB2YXIgcm91dGluZyA9IGZhY3RvcnkoKTtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCByb3V0aW5nLlJvdXRpbmcpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcm91dGluZy5Sb3V0aW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QuUm91dGluZyA9IHJvdXRpbmcuUm91dGluZztcbiAgICAgICAgcm9vdC5mb3MgPSB7XG4gICAgICAgICAgICBSb3V0ZXI6IHJvdXRpbmcuUm91dGVyXG4gICAgICAgIH07XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgdGhlIFJvdXRlciBjbGFzcy5cbiAqXG4gKiBZb3UgY2FuIGNvbXBpbGUgdGhpcyBmaWxlIGJ5IHJ1bm5pbmcgdGhlIGZvbGxvd2luZyBjb21tYW5kIGZyb20gdGhlIFJlc291cmNlcyBmb2xkZXI6XG4gKlxuICogICAgbnBtIGluc3RhbGwgJiYgbnBtIHJ1biBidWlsZFxuICovXG5cbi8qKlxuICogQ2xhc3MgUm91dGVyXG4gKi9cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUm91dGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtSb3V0ZXIuQ29udGV4dD19IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+PX0gcm91dGVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gUm91dGVyKGNvbnRleHQsIHJvdXRlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgICAgICB0aGlzLmNvbnRleHRfID0gY29udGV4dCB8fCB7IGJhc2VfdXJsOiAnJywgcHJlZml4OiAnJywgaG9zdDogJycsIHBvcnQ6ICcnLCBzY2hlbWU6ICcnLCBsb2NhbGU6ICcnIH07XG4gICAgICAgIHRoaXMuc2V0Um91dGVzKHJvdXRlcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJucyB7Um91dGVyfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUm91dGVyLCBbe1xuICAgICAgICBrZXk6ICdzZXRSb3V0aW5nRGF0YScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBkYXRhIGZvciB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvdXRpbmdEYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFzZVVybChkYXRhWydiYXNlX3VybCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Um91dGVzKGRhdGFbJ3JvdXRlcyddKTtcblxuICAgICAgICAgICAgaWYgKCdwcmVmaXgnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZpeChkYXRhWydwcmVmaXgnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ3BvcnQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvcnQoZGF0YVsncG9ydCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnbG9jYWxlJyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbGUoZGF0YVsnbG9jYWxlJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEhvc3QoZGF0YVsnaG9zdCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NoZW1lKGRhdGFbJ3NjaGVtZSddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+fSByb3V0ZXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFJvdXRlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlc18gPSBPYmplY3QuZnJlZXplKHJvdXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT59IHJvdXRlc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Um91dGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc187XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEJhc2VVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QmFzZVVybChiYXNlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmJhc2VfdXJsID0gYmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRCYXNlVXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJhc2VVcmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRQcmVmaXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0U2NoZW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjaGVtZShzY2hlbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uc2NoZW1lID0gc2NoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNjaGVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY2hlbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SG9zdChob3N0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmhvc3QgPSBob3N0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SG9zdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnRcbiAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3J0KHBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucG9ydCA9IHBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3J0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0TG9jYWxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TG9jYWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYnVpbGRRdWVyeVBhcmFtcycsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHF1ZXJ5IHN0cmluZyBwYXJhbXMgYWRkZWQgdG8gYSBVUkwuXG4gICAgICAgICAqIFBvcnQgb2YgalF1ZXJ5J3MgJC5wYXJhbSgpIGZ1bmN0aW9uLCBzbyBjcmVkaXQgaXMgZHVlIHRoZXJlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFkZFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCBwYXJhbXMsIGFkZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIG5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgcmJyYWNrZXQgPSBuZXcgUmVnRXhwKC9cXFtcXF0kLyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkKHByZWZpeCwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcgPyBpIDogJycpICsgJ10nLCB2YWwsIGFkZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhcmFtcykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCArICdbJyArIG5hbWUgKyAnXScsIHBhcmFtc1tuYW1lXSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHJhdyByb3V0ZSBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEByZXR1cm4ge1JvdXRlci5Sb3V0ZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFJvdXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXhlZE5hbWUgPSB0aGlzLmNvbnRleHRfLnByZWZpeCArIG5hbWU7XG4gICAgICAgICAgICB2YXIgc2Y0MWkxOG5OYW1lID0gbmFtZSArICcuJyArIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkU2Y0MWkxOG5OYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgICAgICB2YXIgdmFyaWFudHMgPSBbcHJlZml4ZWROYW1lLCBzZjQxaTE4bk5hbWUsIHByZWZpeGVkU2Y0MWkxOG5OYW1lLCBuYW1lXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2YXJpYW50cykge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYW50c1tpXSBpbiB0aGlzLnJvdXRlc18pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzX1t2YXJpYW50c1tpXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyB0aGUgVVJMIGZvciBhIHJvdXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRfcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWJzb2x1dGVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2VuZXJhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGUobmFtZSwgb3B0X3BhcmFtcykge1xuICAgICAgICAgICAgdmFyIGFic29sdXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHJvdXRlID0gdGhpcy5nZXRSb3V0ZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBvcHRfcGFyYW1zIHx8IHt9LFxuICAgICAgICAgICAgICAgIHVudXNlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBwYXJhbXMpLFxuICAgICAgICAgICAgICAgIHVybCA9ICcnLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3N0ID0gJycsXG4gICAgICAgICAgICAgICAgcG9ydCA9IHR5cGVvZiB0aGlzLmdldFBvcnQoKSA9PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuZ2V0UG9ydCgpID09PSBudWxsID8gJycgOiB0aGlzLmdldFBvcnQoKTtcblxuICAgICAgICAgICAgcm91dGUudG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gUm91dGVyLmVuY29kZVBhdGhDb21wb25lbnQodG9rZW5bMV0pICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0RlZmF1bHQgPSByb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSBvcHRpb25hbCB8fCAhaGFzRGVmYXVsdCB8fCB0b2tlblszXSBpbiBwYXJhbXMgJiYgcGFyYW1zW3Rva2VuWzNdXSAhPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyArIHRva2VuWzNdICsgJ1wiLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1wdHkgPSB0cnVlID09PSB2YWx1ZSB8fCBmYWxzZSA9PT0gdmFsdWUgfHwgJycgPT09IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcHR5IHx8ICFvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmNvZGVkVmFsdWUgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ251bGwnID09PSBlbmNvZGVkVmFsdWUgJiYgbnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBlbmNvZGVkVmFsdWUgKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCAmJiB0b2tlblszXSBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInICsgdG9rZW5bMF0gKyAnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXJsID09PSAnJykge1xuICAgICAgICAgICAgICAgIHVybCA9ICcvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm91dGUuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgIGlmICgndGV4dCcgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIGhvc3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5bM10gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBob3N0ID0gdG9rZW5bMV0gKyB2YWx1ZSArIGhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBGb28tYmFyIVxuICAgICAgICAgICAgdXJsID0gdGhpcy5jb250ZXh0Xy5iYXNlX3VybCArIHVybDtcblxuICAgICAgICAgICAgaWYgKHJvdXRlLnJlcXVpcmVtZW50cyAmJiBcIl9zY2hlbWVcIiBpbiByb3V0ZS5yZXF1aXJlbWVudHMgJiYgdGhpcy5nZXRTY2hlbWUoKSAhPSByb3V0ZS5yZXF1aXJlbWVudHNbXCJfc2NoZW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcblxuICAgICAgICAgICAgICAgIHVybCA9IHJvdXRlLnJlcXVpcmVtZW50c1tcIl9zY2hlbWVcIl0gKyBcIjovL1wiICsgY3VycmVudEhvc3QgKyAoY3VycmVudEhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXMgJiYgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXNbMF0gJiYgdGhpcy5nZXRTY2hlbWUoKSAhPT0gcm91dGUuc2NoZW1lc1swXSkge1xuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEhvc3QgPSBob3N0IHx8IHRoaXMuZ2V0SG9zdCgpO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gcm91dGUuc2NoZW1lc1swXSArIFwiOi8vXCIgKyBfY3VycmVudEhvc3QgKyAoX2N1cnJlbnRIb3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvc3QgJiYgdGhpcy5nZXRIb3N0KCkgIT09IGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRTY2hlbWUoKSArIFwiOi8vXCIgKyBob3N0ICsgKGhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzb2x1dGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIHRoaXMuZ2V0SG9zdCgpICsgKHRoaXMuZ2V0SG9zdCgpLmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1bnVzZWRQYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gY2FsbCBpdCBhbmQgYXNzaWduIGl0J3MgcmV0dXJuIHZhbHVlIGFzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoKSA6IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBudWxsIHRvIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKFJvdXRlci5lbmNvZGVRdWVyeUNvbXBvbmVudChrZXkpICsgJz0nICsgUm91dGVyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAocHJlZml4IGluIHVudXNlZFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCB1bnVzZWRQYXJhbXNbcHJlZml4XSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBxdWVyeVBhcmFtcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gc3RyaW5nIGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdnZXRJbnN0YW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0aW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3VyZXMgdGhlIGN1cnJlbnQgUm91dGVyIGluc3RhbmNlIHdpdGggdGhlIHByb3ZpZGVkIGRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERhdGEoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJvdXRlciA9IFJvdXRlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgICAgICByb3V0ZXIuc2V0Um91dGluZ0RhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2N1c3RvbUVuY29kZVVSSUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUyRi9nLCAnLycpLnJlcGxhY2UoLyU0MC9nLCAnQCcpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyMS9nLCAnIScpLnJlcGxhY2UoLyUzQi9nLCAnOycpLnJlcGxhY2UoLyUyQy9nLCAnLCcpLnJlcGxhY2UoLyUyQS9nLCAnKicpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC8nL2csICclMjcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBwYXRoIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUGF0aENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVQYXRoQ29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTNEL2csICc9JykucmVwbGFjZSgvJTJCL2csICcrJykucmVwbGFjZSgvJTIxL2csICchJykucmVwbGFjZSgvJTdDL2csICd8Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1ldGVyIG9yIHZhbHVlIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUXVlcnlDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5jb2RlUXVlcnlDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lM0YvZywgJz8nKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3V0ZXI7XG59KCk7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgICB0b2tlbnM6IChBcnJheS48QXJyYXkuPHN0cmluZz4+KSxcbiAqICAgICBkZWZhdWx0czogKE9iamVjdC48c3RyaW5nLCBzdHJpbmc+KSxcbiAqICAgICByZXF1aXJlbWVudHM6IE9iamVjdCxcbiAqICAgICBob3N0dG9rZW5zOiAoQXJyYXkuPHN0cmluZz4pXG4gKiB9fVxuICovXG5cblxuUm91dGVyLlJvdXRlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgICAgYmFzZV91cmw6IChzdHJpbmcpXG4gKiB9fVxuICovXG5Sb3V0ZXIuQ29udGV4dDtcblxuLyoqXG4gKiBSb3V0ZXIgc2luZ2xldG9uLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7Um91dGVyfVxuICovXG52YXIgUm91dGluZyA9IG5ldyBSb3V0ZXIoKTtcblxuICAgIHJldHVybiB7IFJvdXRlcjogUm91dGVyLCBSb3V0aW5nOiBSb3V0aW5nIH07XG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==