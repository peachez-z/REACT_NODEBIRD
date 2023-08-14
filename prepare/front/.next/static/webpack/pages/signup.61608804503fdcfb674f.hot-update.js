webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hooks/useInput */ "./components/hooks/useInput.js");


var _templateObject,
  _this = undefined,
  _jsxFileName = "C:\\Users\\rkdmf\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\pages\\signup.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    color:red;"])));
_c = ErrorMessage;
var Signup = function Signup() {
  _s();
  // 커스텀 훅으로 중복 제거
  var _useInput = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    id = _useInput2[0],
    onChangeId = _useInput2[1];
  var _useInput3 = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];
  var _useInput5 = Object(_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
    _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
    nickname = _useInput6[0],
    onChangeNickname = _useInput6[1];
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    passwordCheck = _useState[0],
    setPasswordCheck = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    passwordError = _useState2[0],
    setPasswordError = _useState2[1];
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordCheck(e.target.value !== password);
  }, [password]);
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
    term = _useState3[0],
    setTerm = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    termError = _useState4[0],
    setTermError = _useState4[1];
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  });
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (password !== 'pass') {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, __jsx("meta", {
    charset: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "signup")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: id,
    required: true,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-nickname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: nickname,
    required: true,
    onChange: onChangeNickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: password,
    type: "password",
    required: true,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: setPasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 27
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "\uAC00\uC744\uC9F1\uB9D0\uC744\uB4E4\uC5B4 !"), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, "\uB3D9\uC758\uD574\uC57C\uD568")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "\uAC00\uC785\uD558\uAE30"))));
};
_s(Signup, "rBarB4z/hcDpYKBF7giOF/6pnfI=", false, function () {
  return [_components_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _components_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _components_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});
_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);
var _c, _c2;
$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJfYyIsIlNpZ251cCIsIl9zIiwiX3VzZUlucHV0IiwidXNlSW5wdXQiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJpZCIsIm9uQ2hhbmdlSWQiLCJfdXNlSW5wdXQzIiwiX3VzZUlucHV0NCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIl91c2VJbnB1dDUiLCJfdXNlSW5wdXQ2Iiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsIl91c2VTdGF0ZTIiLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwiX3VzZVN0YXRlMyIsInRlcm0iLCJzZXRUZXJtIiwiX3VzZVN0YXRlNCIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJfX2pzeCIsIkFwcExheW91dCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJIZWFkIiwiY2hhcnNldCIsIkZvcm0iLCJvbkZpbmlzaCIsImh0bWxGb3IiLCJJbnB1dCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJ0eXBlIiwiQ2hlY2tib3giLCJuYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJCdXR0b24iLCJodG1sVHlwZSIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJtYXBw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QUFBQyxZQUFBLENBQUFqRSxFQUFBO0FBQUFpRSxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjYxNjA4ODA0NTAzZmRjZmI2NzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7Rm9ybSwgSW5wdXQsIENoZWNrYm94LCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9ob29rcy91c2VJbnB1dCdcclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjpyZWQ7YFxyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAvLyDsu6TsiqTthYAg7ZuF7Jy866GcIOykkeuztSDsoJzqsbBcclxuICAgIGNvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKChlKSA9PntcclxuICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKVxyXG4gICAgfSwgW3Bhc3N3b3JkXSk7XHJcblxyXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVGVybSA9IHVzZUNhbGxiYWNrKChlKT0+IHtcclxuICAgICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKVxyXG4gICAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gICAgfSlcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgaWYgKHBhc3N3b3JkICE9PSAncGFzcycpIHtcclxuICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRlcm0pe1xyXG4gICAgICAgIHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coaWQsIG5pY2tuYW1lLCBwYXNzd29yZClcclxuICAgIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV0pXHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgPEFwcExheW91dD5cclxuICAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxyXG4gICAgICA8dGl0bGU+c2lnbnVwPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXQgdmFsdWU9e2lkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VJZH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja25hbWVcIj7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dCB2YWx1ZT17bmlja25hbWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IHZhbHVlPXtwYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkLWNoZWNrXCI+67mE67CA67KI7Zi4IOyytO2BrDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IHR5cGU9J3Bhc3N3b3JkJyBcclxuICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja30gcmVxdWlyZWQgb25DaGFuZ2U9e3NldFBhc3N3b3JkQ2hlY2t9Lz5cclxuICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8RXJyb3JNZXNzYWdlPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENoZWNrYm94IG5hbWU9XCJ1c2VyLXRlcm1cIiBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT5cclxuICAgICAgICAgIOqwgOydhOynseunkOydhOuTpOyWtCAhXHJcbiAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICB7dGVybUVycm9yICYmIDxFcnJvck1lc3NhZ2U+64+Z7J2Y7ZW07JW87ZWoPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDoxMH19PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT0nc3VibWl0Jz7qsIDsnoXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgPC9BcHBMYXlvdXQ+KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sInNvdXJjZVJvb3QiOiIifQ==