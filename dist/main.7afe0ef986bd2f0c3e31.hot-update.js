/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateinventory_managmt"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Header.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Header.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Header {\\r\\n    position: fixed;\\r\\n    top: 0; /* Stick it to the top */\\r\\n    max-height: 70px;\\r\\n    width: 100vw;\\r\\n  \\r\\n    display: grid;\\r\\n    grid-template-areas: \\\"logo nav\\\";\\r\\n  \\r\\n    /* Cosmetics */\\r\\n    background-color: #282c34;\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n  }\\r\\n  \\r\\n  .Logo {\\r\\n    grid-area: logo;\\r\\n    height: 70px;\\r\\n  }\\r\\n  \\r\\n  .Nav {\\r\\n    display: grid;\\r\\n    grid-area: nav;\\r\\n    grid-template-columns: repeat(4, auto);\\r\\n    align-items: center;\\r\\n    justify-items: center;\\r\\n  }\\r\\n  .Nav a {\\r\\n    color: #fff;\\r\\n    font-size: 20px;\\r\\n    font-weight: 500;\\r\\n    transition: 0.5s;\\r\\n    text-decoration: none;\\r\\n  }\\r\\n  .Nav a:hover {\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n  .Nav button {\\r\\n    padding: 10px;\\r\\n    outline: none;\\r\\n    border: none;\\r\\n    font-size: 20px;\\r\\n    color: #fff;\\r\\n    font-weight: 600;\\r\\n    background-color: rgba(255, 0, 0, 0.5);\\r\\n    box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);\\r\\n    border-radius: 10px;\\r\\n    cursor: pointer;\\r\\n    transition: 70ms;\\r\\n  }\\r\\n  \\r\\n  .Nav button:active {\\r\\n    transform: translateY(3px);\\r\\n    box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);\\r\\n  }\\r\\n  \\r\\n  .Burger {\\r\\n    display: none;\\r\\n    grid-area: burger;\\r\\n    margin: 0 20px 0 0;\\r\\n    padding: 0;\\r\\n    justify-self: end;\\r\\n    font-size: 40px;\\r\\n    border: none;\\r\\n    background: none;\\r\\n    outline: none;\\r\\n    transition: 0.1s;\\r\\n  }\\r\\n  .Burger:active {\\r\\n    transform: scale(1.2);\\r\\n  }\\r\\n  \\r\\n  @media (max-width: 700px) {\\r\\n    .Header {\\r\\n      grid-template-areas: \\\"logo burger\\\" \\\"nav nav\\\";\\r\\n    }\\r\\n    .Nav {\\r\\n      grid-template-rows: repeat(4, auto);\\r\\n      grid-template-columns: none;\\r\\n      grid-row-gap: 20px;\\r\\n  \\r\\n      padding: 30px 0 30px;\\r\\n      background: rgba(40, 44, 47, 0.95);\\r\\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n      border-bottom-left-radius: 10px;\\r\\n      border-bottom-right-radius: 10px;\\r\\n    }\\r\\n    .Burger {\\r\\n      display: inline;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  .NavAnimation-enter {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.5);\\r\\n  }\\r\\n  .NavAnimation-enter-active {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n    transition: opacity 350ms, transform 350ms;\\r\\n  }\\r\\n  .NavAnimation-exit {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  .NavAnimation-exit-active {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.5);\\r\\n    transition: opacity 350ms, transform 350ms;\\r\\n  }\\r\\n  .Title {\\r\\n    box-sizing: border-box;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: baseline;\\r\\n    padding: 1em;\\r\\n    margin-bottom: 2em;\\r\\n    background-color: rgb(192, 45, 26);\\r\\n    color: #fff;\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://inventory-managmt/./src/components/Header.css?./node_modules/css-loader/dist/cjs.js");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee31d648d655f881a59f")
/******/ })();
/******/ 
/******/ }
);