/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateinventory_managmt"]("main",{

/***/ "./src/store/actions/LogoutAction.js":
/*!*******************************************!*\
  !*** ./src/store/actions/LogoutAction.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LogoutAction\": () => (/* binding */ LogoutAction)\n/* harmony export */ });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ \"./src/store/constant.js\");\n\nvar LogoutAction = function LogoutAction() {\n  return function (dispatch) {\n    return new Promise(function (resolve, reject) {\n      setTimeout(function () {\n        dispatch({\n          type: _constant__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_ACTION_KEY\n        });\n        resolve({\n          success: true\n        });\n      }, 3000);\n    });\n  };\n};\n\n//# sourceURL=webpack://inventory-managmt/./src/store/actions/LogoutAction.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("62d91e701e3f81e303e4")
/******/ })();
/******/ 
/******/ }
);