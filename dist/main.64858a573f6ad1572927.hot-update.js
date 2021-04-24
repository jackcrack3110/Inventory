/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateinventory_managmt"]("main",{

/***/ "./src/components/AddProductForm.js":
/*!******************************************!*\
  !*** ./src/components/AddProductForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _store_actions_AddProductAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/AddProductAction */ \"./src/store/actions/AddProductAction.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar AddProductForm = function AddProductForm(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      description = _useState6[0],\n      setDescription = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      quantity = _useState8[0],\n      setQuantity = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState10 = _slicedToArray(_useState9, 2),\n      price = _useState10[0],\n      setPrice = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState12 = _slicedToArray(_useState11, 2),\n      image = _useState12[0],\n      setImage = _useState12[1];\n\n  var product = function product(name, description, quantity, price, image) {\n    setIsLoading(true);\n    var payload = {\n      name: name,\n      description: description,\n      quantity: quantity,\n      price: price,\n      image: image\n    };\n    props.productAction(payload).then(function (result) {\n      if (result.success) {\n        setIsLoading(false);\n        props.history.push('/product');\n      }\n    });\n  };\n\n  var handleChange = function handleChange(e) {\n    return e.target.name === 'uname' ? setName(e.target.value) : e.target.name == 'desc' ? setDescription(e.target.value) : e.target.name == 'quant' ? setPrice(e.target.value) : e.target.name == 'price' ? setQuantity(e.target.value) : e.target.name === 'image' ? setImage(e.target.value) : function () {};\n  };\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    name.length && quantity && price && product(name, description, quantity, price, image);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    action: \"/\",\n    method: \"post\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"uname\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"b\", null, \"Name\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: name,\n    name: \"uname\",\n    placeholder: \"Enter Name\",\n    onChange: handleChange,\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"b\", null, \"Description\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: description,\n    name: \"desc\",\n    placeholder: \"Enter Description\",\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"quant\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"b\", null, \"Quantity\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"number\",\n    value: quantity,\n    name: \"quant\",\n    placeholder: \"Enter Quantity\",\n    onChange: handleChange,\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"price\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"b\", null, \"Price\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"number\",\n    value: price,\n    name: \"price\",\n    placeholder: \"Enter Price\",\n    onChange: handleChange,\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"image\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"b\", null, \"Image\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: image,\n    name: \"image\",\n    placeholder: \"Enter Image\",\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"submit\",\n    onClick: handleClick\n  }, !isLoading ? \"Save\" : 'Loading...')));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  console.log('state', state);\n  return {\n    productDetails: state.product.productDetails\n  };\n};\n\nvar mapDispatchToProps = {\n  productAction: _store_actions_AddProductAction__WEBPACK_IMPORTED_MODULE_1__.AddProductAction\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(AddProductForm));\n\n//# sourceURL=webpack://inventory-managmt/./src/components/AddProductForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("36d02a5f357922bddab4")
/******/ })();
/******/ 
/******/ }
);