webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPosts: []
  }
};
var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: 'LOG_OUT'
  };
};

// 초기 state
var changeNickname = function changeNickname(data) {
  return {
    type: 'CHANGE_NICKNAME',
    data: data
  };
};
// 이전 상태와 액션을 받아 다음 상태를 생성
var rootReducer = function rootReducer(state, initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: true,
          user: action.data
        })
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: false,
          user: null
        })
      });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJjaGFuZ2VOaWNrbmFtZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztFQUNuQkMsSUFBSSxFQUFFO0lBQ0pDLFVBQVUsRUFBRyxLQUFLO0lBQ2xCRCxJQUFJLEVBQUUsSUFBSTtJQUNWRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2RDLFNBQVMsRUFBRSxDQUFDO0VBQ2QsQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDSkMsU0FBUyxFQUFFO0VBQ2I7QUFDRixDQUFDO0FBRU0sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLElBQUksRUFBSTtFQUNsQyxPQUFNO0lBQ0pDLElBQUksRUFBRSxRQUFRO0lBQ2RELElBQUksRUFBSkE7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVNLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVE7RUFDL0IsT0FBTTtJQUNKRCxJQUFJLEVBQUU7RUFDUixDQUFDO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLElBQU1FLGNBQWMsR0FBQyxTQUFmQSxjQUFjQSxDQUFFSCxJQUFJLEVBQUk7RUFDNUIsT0FBTTtJQUNKQyxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCRCxJQUFJLEVBQUpBO0VBQ0YsQ0FBQztBQUVILENBQUM7QUFDRDtBQUNBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxLQUFLLEVBQUViLFlBQVksRUFBRWMsTUFBTSxFQUFJO0VBQ2hELFFBQVFBLE1BQU0sQ0FBQ0wsSUFBSTtJQUNqQixLQUFLLFFBQVE7TUFDWCxPQUFBTSxhQUFBLENBQUFBLGFBQUEsS0FDS0YsS0FBSztRQUNSWixJQUFJLEVBQUFjLGFBQUEsQ0FBQUEsYUFBQSxLQUNDRixLQUFLLENBQUNaLElBQUk7VUFDYkMsVUFBVSxFQUFHLElBQUk7VUFDakJELElBQUksRUFBRWEsTUFBTSxDQUFDTjtRQUFJO01BQ2xCO0lBRUgsS0FBSyxTQUFTO01BQ2QsT0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQ0tGLEtBQUs7UUFDUlosSUFBSSxFQUFBYyxhQUFBLENBQUFBLGFBQUEsS0FDQ0YsS0FBSyxDQUFDWixJQUFJO1VBQ2JDLFVBQVUsRUFBRyxLQUFLO1VBQ2xCRCxJQUFJLEVBQUU7UUFBSTtNQUNYO0VBRVA7QUFDSixDQUFDO0FBRWNXLDBFQUFXLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMmY4MjBmMzlmODBlMGMxNmVhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXIgOntcclxuICAgIGlzTG9nZ2VkSW4gOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbiAgfSxcclxuICBwb3N0IDp7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PntcclxuICByZXR1cm57XHJcbiAgICB0eXBlOiAnTE9HX0lOJyxcclxuICAgIGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PntcclxuICByZXR1cm57XHJcbiAgICB0eXBlOiAnTE9HX09VVCdcclxuICB9XHJcbn1cclxuXHJcbi8vIOy0iOq4sCBzdGF0ZVxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZT0oZGF0YSk9PiB7XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcbiAgICBkYXRhLFxyXG4gIH1cclxuICBcclxufVxyXG4vLyDsnbTsoIQg7IOB7YOc7JmAIOyVoeyFmOydhCDrsJvslYQg64uk7J2MIOyDge2DnOulvCDsg53shLFcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICBjYXNlICdMT0dfSU4nOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgICAgaXNMb2dnZWRJbiA6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICBpc0xvZ2dlZEluIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==