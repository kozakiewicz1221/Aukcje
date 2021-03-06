webpackHotUpdate("static/development/pages/aukcje/[id].js",{

/***/ "./pages/aukcje/[id].js":
/*!******************************!*\
  !*** ./pages/aukcje/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Timer */ "./components/Timer.js");
/* harmony import */ var _components_PhotoSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PhotoSlider */ "./components/PhotoSlider.js");
var _this = undefined,
    _jsxFileName = "/Users/kozakiewicz/Desktop/aukcje-app/pages/aukcje/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Auction = function Auction() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      single = _useState[0],
      setSingle = _useState[1];

  var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      mode: "cors"
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      setSingle(json);
    }).then(function () {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].fromTo(".carousel", {
        duration: 0.4,
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0
      });
    });
  }, []);
  return __jsx("div", {
    className: " flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-1/2 pr-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "slider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_PhotoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "w-1/2  p-4 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-purple-600  mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Live draw in"), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: "2020-09-01T01:02:03",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: "h text-purple-600 text-lg font-semibold py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, single.title), __jsx("p", {
    className: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, single.body)));
};

/* harmony default export */ __webpack_exports__["default"] = (Auction);

/***/ })

})
//# sourceMappingURL=[id].js.f8f38b52d8efa89b71e0.hot-update.js.map