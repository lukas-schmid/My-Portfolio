/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n\nwindow.onscroll = function () {\n  handleNavbarOpacity();\n};\nvar handleNavbarOpacity = function handleNavbarOpacity() {\n  var navbar = document.querySelector(\".navbar\");\n  if (window.scrollY <= 60) {\n    var opacity = window.scrollY * 100 / 60 / 100;\n    navbar.style.backgroundColor = \"rgba(228,0,0,\" + opacity + \")\";\n  } else {\n    navbar.style.backgroundColor = \"rgba(228,0,0,1)\";\n  }\n};\nvar openMobileMenu = function openMobileMenu() {\n  var navbarIcon = document.querySelector(\".navbar__icon\");\n  var mobileMenu = document.querySelector(\".navbar__mobile\");\n  navbarIcon.addEventListener(\"click\", function () {\n    mobileMenu.style.transform = \"translateX(0%)\";\n  });\n};\nvar closeMobileMenu = function closeMobileMenu() {\n  var elements = document.querySelectorAll(\".close\");\n  var mobileMenu = document.querySelector(\".navbar__mobile\");\n  elements.forEach(function (element) {\n    element.addEventListener(\"click\", function () {\n      mobileMenu.style.transform = \"translateX(100%)\";\n    });\n  });\n};\nvar handleShowSections = function handleShowSections() {\n  var targets = document.querySelectorAll(\".show\");\n  function handleIntersectionShow(entries) {\n    entries.map(function (entry) {\n      if (entry.isIntersecting) {\n        entry.target.style.transform = \"translateY(0px)\";\n        entry.target.style.opacity = 1;\n      } else {\n        entry.target.style.transform = \"translateY(30px)\";\n        entry.target.style.opacity = 0;\n      }\n    });\n  }\n  var observerShow = new IntersectionObserver(handleIntersectionShow, {\n    threshold: 0.01\n  });\n  targets.forEach(function (target) {\n    observerShow.observe(target);\n  });\n};\nvar handleHrTagWidth = function handleHrTagWidth() {\n  var targets = document.querySelectorAll(\"hr\");\n  function handleIntersectionHrWidth(entries) {\n    entries.map(function (entry) {\n      if (entry.isIntersecting) {\n        entry.target.style.width = \"200px\";\n      } else {\n        entry.target.style.width = \"65px\";\n      }\n    });\n  }\n  var observerShow = new IntersectionObserver(handleIntersectionHrWidth, {\n    threshold: 1\n  });\n  targets.forEach(function (target) {\n    observerShow.observe(target);\n  });\n};\nopenMobileMenu();\ncloseMobileMenu();\nhandleShowSections();\nhandleHrTagWidth();\n\n//# sourceURL=webpack://webpack-portfolio/./src/javascript/index.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-portfolio/./src/styles/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;