module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\rkdmf\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search)`
  vertical-align : middle;
`;
const AppLayout = ({
  children
}) => {
  const {
    0: isLoggedIn,
    1: setIsLoggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoggedIn) {
      console.log('일단 바뀜');
    }
  }, [isLoggedIn]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 28
    }
  }, "\uD648"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 35
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(SearchInput, {
    enterButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 34
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 8
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, isLoggedIn ? __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setIsLoggedIn: setIsLoggedIn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setIsLoggedIn: setIsLoggedIn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 73
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://peach-hzz.tistory.com/",
    target: "_blank",
    rel: "noreferre nopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Made by Peach"))));
};
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hooks/useInput */ "./components/hooks/useInput.js");
var _jsxFileName = "C:\\Users\\rkdmf\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







// 계속 리렌더링 되기 때문에 이렇게 따로 빼는게 좋음 / 성능 문제
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  margin-top:10px;`;
// 둘 중 하나 골라쓰면 된다
// const style = useMemo(() => ({marginTop:10}), []);

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])`
padding:10px`;
const LoginForm = ({
  setIsLoggedIn
}) => {
  // 커스텀 훅으로 중복 제거
  const [id, onChangeId] = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const [password, onChangepassword] = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log({
      id,
      password
    });
    setIsLoggedIn(true);
  }, [id, password]);
  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user_id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user_id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user_password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user_password",
    value: password,
    onChange: onChangepassword,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(ButtonWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 30
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))));
};
LoginForm.propTypes = {
  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/hooks/useInput.js":
/*!**************************************!*\
  !*** ./components/hooks/useInput.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hooks/useInput */ "./components/hooks/useInput.js");
var _jsxFileName = "C:\\Users\\rkdmf\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\pages\\signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Signup = () => {
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [id, onChangeId] = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const [nick, onChangeNick] = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const [password, onChangePassword] = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const onSubmit = () => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return;
    }
    if (!term) {
      setTermError(true);
      return;
    }
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  };
  const onChangePasswordCheck = e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = e => {
    setTermError(false);
    setTerm(e.target.checked);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "NodeBird")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmit,
    style: {
      padding: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-nick",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), passwordError && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 31
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "\uAC00\uC744\uC9F1 \uB9D0 \uC798\uB4E3\uAE30 !"), termError && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "\uAC00\uC785\uD558\uAE30")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsIlNlYXJjaCIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJfX2pzeCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiTWVudSIsIm1vZGUiLCJJdGVtIiwiTGluayIsImhyZWYiLCJlbnRlckJ1dHRvbiIsIlJvdyIsImd1dHRlciIsIkNvbCIsInhzIiwibWQiLCJVc2VyUHJvZmlsZSIsIkxvZ2luRm9ybSIsInRhcmdldCIsInJlbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiQnV0dG9uV3JhcHBlciIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsImlkIiwib25DaGFuZ2VJZCIsInVzZUlucHV0IiwicGFzc3dvcmQiLCJvbkNoYW5nZXBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJvbkZpbmlzaCIsImh0bWxGb3IiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiQnV0dG9uIiwidHlwZSIsImh0bWxUeXBlIiwibG9hZGluZyIsImZ1bmMiLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJlIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJlcnJvciIsInByZWZldGNoIiwicm91dGVyIiwiYXMiLCJvcHRpb25zIiwiY2F0Y2giLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsImNoaWxkRWxtIiwic2V0Q2hpbGRFbG0iLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsIlJvdXRlciIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIm1hcCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwibGVuZ3RoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUhyZWYiLCJjdXJyZW50UGF0aCIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwibG9jYWxlcyIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImNoYW5nZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInJlbG9hZCIsImxvY2F0aW9uIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsInNvbWUiLCJyZSIsInRlc3QiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY2FjaGVLZXkiLCJjdHgiLCJBcHBUcmVlIiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiaXNEeW5hbWljUm91dGUiLCJEVU1NWV9CQVNFIiwicGFyc2VSZWxhdGl2ZVVybCIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwcmVwYXJlRGVzdGluYXRpb24iLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwiY29tcGlsZSIsInZhbGlkYXRlIiwibmV3VXJsIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwiU2lnbnVwIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJ0ZXJtIiwic2V0VGVybSIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwibmljayIsIm9uQ2hhbmdlTmljayIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJGcmFnbWVudCIsIkhlYWQiLCJzdHls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TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSwwRUFBb0IsQ0FDNUQsQ0FBQyxFQUNOTixLQUFBO0lBQUs0ZSxLQUFLLEVBQUU7TUFBRUksU0FBUyxFQUFFO0lBQUcsQ0FBRTtJQUFBL2UsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzVCTixLQUFBLENBQUMyQywyQ0FBTTtJQUFDQyxJQUFJLEVBQUMsU0FBUztJQUFDQyxRQUFRLEVBQUMsUUFBUTtJQUFBNUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDZCQUFhLENBQ2xELENBQ0QsQ0FDRyxDQUNYLENBQUM7QUFFUCxDQUFDO0FBRWNvZCxxRUFBTSxFOzs7Ozs7Ozs7OztBQzVGckIsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zaWdudXAuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7TWVudSwgSW5wdXQsIFJvdywgQ29sfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIlxyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nXHJcbmltcG9ydCBMb2dpbkZvcm0gICBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpbkZvcm1cIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuXHJcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXHJcbiAgdmVydGljYWwtYWxpZ24gOiBtaWRkbGU7XHJcbmBcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlzTG9nZ2VkSW4pXHJcbiAgfSwgW2lzTG9nZ2VkSW5dKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNMb2dnZWRJbikge1xyXG4gICAgICBjb25zb2xlLmxvZygn7J2864uoIOuwlOuAnCcpXHJcbiAgICB9XHJcbiAgfSwgW2lzTG9nZ2VkSW5dKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+7ZmIPC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGE+7ZSE66Gc7ZWEPC9hPjwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgPFNlYXJjaElucHV0IGVudGVyQnV0dG9uLz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT7tmozsm5DqsIDsnoU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICA8L01lbnU+XHJcbiAgICAgICB7Lyog7Lus65+86rCE7J2YIO2MqOuUqSDrhKPquLAg64uk7ZWp7LmY66m0IDhweCAqL31cclxuICAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICB7LyogMjUlICB4cyA6IOuqqOuwlOydvCBtZCA6IOuqqOuLiO2EsCAqL31cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0gLz4gOiA8TG9naW5Gb3JtIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59IC8+fVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIHsvKiA1MCUgKi99XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wZWFjaC1oenoudGlzdG9yeS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZSBub3BlbmVyIG5vcmVmZXJyZXJcIj5NYWRlIGJ5IFBlYWNoPC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgPC9Sb3c+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dCIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2hvb2tzL3VzZUlucHV0J1xyXG5cclxuLy8g6rOE7IaNIOumrOugjOuNlOungSDrkJjquLAg65WM66y47JeQIOydtOugh+qyjCDrlLDroZwg67m864qU6rKMIOyii+ydjCAvIOyEseuKpSDrrLjsoJxcclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDoxMHB4O2BcclxuLy8g65GYIOykkSDtlZjrgpgg6rOo65287JOw66m0IOuQnOuLpFxyXG4vLyBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHttYXJnaW5Ub3A6MTB9KSwgW10pO1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbnBhZGRpbmc6MTBweGBcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7c2V0SXNMb2dnZWRJbn0pID0+IHtcclxuICAvLyDsu6TsiqTthYAg7ZuF7Jy866GcIOykkeuztSDsoJzqsbBcclxuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VwYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgaWQsIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpXHJcbiAgfSwgW2lkLCBwYXNzd29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcl9pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyX2lkXCIgdmFsdWU9e2lkfSBcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJZH0gcmVxdWlyZWQvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcl9wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyX3Bhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VwYXNzd29yZH0gcmVxdWlyZWQvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICBsb2FkaW5nPXtmYWxzZX0+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT7tmozsm5DqsIDsnoU8L2E+PC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbkxvZ2luRm9ybS5wcm9wVHlwZXMgPXtcclxuICBzZXRJc0xvZ2dlZEluOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07IiwiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWU9bnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcblxyXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbbmljaywgb25DaGFuZ2VOaWNrXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjaykge1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIGlkLFxyXG4gICAgICBuaWNrLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgcGFzc3dvcmRDaGVjayxcclxuICAgICAgdGVybSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IChlKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICBzZXRQYXNzd29yZENoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRlcm0gPSAoZSkgPT4ge1xyXG4gICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXR9IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlSWR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1uaWNrXCI+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1uaWNrXCIgdmFsdWU9e25pY2t9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2t9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmQtY2hlY2tcIj7ruYTrsIDrsojtmLjssrTtgaw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmQtY2hlY2tcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+6rCA7J2E7KexIOunkCDsnpjrk6PquLAgITwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+7JW96rSA7JeQIOuPmeydmO2VmOyFlOyVvCDtlanri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==