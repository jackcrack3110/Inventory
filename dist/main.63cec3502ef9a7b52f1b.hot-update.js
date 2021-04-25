/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateinventory_managmt"]("main",{

/***/ "./src/store/ConfigStore.js":
/*!**********************************!*\
  !*** ./src/store/ConfigStore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducers_LoginReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/LoginReducer */ \"./src/store/reducers/LoginReducer.js\");\n/* harmony import */ var _reducers_ProductReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/ProductReducer */ \"./src/store/reducers/ProductReducer.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar ConfigureStore = function ConfigureStore() {\n  var intialState = {};\n\n  try {\n    intialState = localStorage.getItem(\"master_class\") ? JSON.parse(localStorage.getItem(\"master_class\")) : {};\n  } catch (error) {\n    console.log('getError', error);\n  }\n\n  var saver = function saver(store) {\n    return function (next) {\n      return function (action) {\n        var result = next(action);\n        var stateToSave = store.getState();\n        localStorage.setItem(\"master_class\", JSON.stringify(_objectSpread({}, stateToSave)));\n        return result;\n      };\n    };\n  };\n\n  var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n    login: _reducers_LoginReducer__WEBPACK_IMPORTED_MODULE_1__.default,\n    products: _reducers_ProductReducer__WEBPACK_IMPORTED_MODULE_2__.default\n  });\n  return (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(rootReducer, intialState, (0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default, saver));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigureStore);\n\n//# sourceURL=webpack://inventory-managmt/./src/store/ConfigStore.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf12c81410fc31f6be05")
/******/ })();
/******/ 
/******/ }
);