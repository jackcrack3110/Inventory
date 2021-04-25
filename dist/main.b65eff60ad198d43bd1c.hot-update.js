/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateinventory_managmt"]("main",{

/***/ "./src/pages/Dashboard.js":
/*!********************************!*\
  !*** ./src/pages/Dashboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_AddProductForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddProductForm */ \"./src/components/AddProductForm.js\");\n/* harmony import */ var _store_actions_LogoutAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/LogoutAction */ \"./src/store/actions/LogoutAction.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar Dashboard = function Dashboard(props) {\n  var _props$userDetails, _props$userDetails2;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      showForm = _useState2[0],\n      setShowForm = _useState2[1];\n\n  var logout = function logout() {\n    console.log(\"I am in logout\");\n    props.logoutAction().then(function (result) {\n      if (result.success) {\n        props.history.push('/');\n      }\n    });\n  };\n\n  var handleClick = function handleClick() {\n    setShowForm(true);\n  };\n\n  var handleLogout = function handleLogout(e) {\n    e.preventDefault();\n    logout();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"dashboard-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Welcome \", \"\".concat((_props$userDetails = props.userDetails) === null || _props$userDetails === void 0 ? void 0 : _props$userDetails.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Your account was created on \".concat((_props$userDetails2 = props.userDetails) === null || _props$userDetails2 === void 0 ? void 0 : _props$userDetails2.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"logout-button\",\n    onClick: handleLogout\n  }, \"Logout\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: handleClick\n  }, \"Add a Product\"), showForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AddProductForm__WEBPACK_IMPORTED_MODULE_2__.default, null)));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  console.log('state', state);\n  return {\n    userDetails: state.login.userDetails\n  };\n};\n\nvar mapDispatchToProps = {\n  logoutAction: _store_actions_LogoutAction__WEBPACK_IMPORTED_MODULE_3__.LogoutAction\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Dashboard));\n\n//# sourceURL=webpack://inventory-managmt/./src/pages/Dashboard.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a668e691aa9782aa9eb")
/******/ })();
/******/ 
/******/ }
);