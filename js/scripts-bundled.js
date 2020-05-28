/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/themes/headline-theme/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wp-content/themes/headline-theme/js/modules/LazyLoad.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/headline-theme/js/modules/LazyLoad.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LazyLoad = /*#__PURE__*/function () {\n  function LazyLoad() {\n    _classCallCheck(this, LazyLoad);\n\n    this.images = document.querySelectorAll(\".b-lazy\");\n    this.mobileImageUrl = document.querySelectorAll('[data-mobile]');\n    this.ifBelow768 = window.matchMedia(\"(max-width: 767px)\");\n    this.options = {\n      rootMargin: \"-20% 0px 20% 0px\",\n      thredshold: 1\n    };\n    this.events();\n  }\n\n  _createClass(LazyLoad, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.initiateObserver();\n      this.callTheObserver();\n      this.ifBelow768.addListener(function () {\n        _this.mobileImageUrl.forEach(function (el) {\n          return _this.setMobileImage(el);\n        });\n      });\n    }\n  }, {\n    key: \"setMobileImage\",\n    value: function setMobileImage(el) {\n      if (this.ifBelow768.matches) {\n        el.style.backgroundImage = \"url('\".concat(el.dataset.mobile, \"')\");\n      } else {\n        el.style.backgroundImage = \"url('\".concat(el.dataset.src, \"')\");\n      }\n    }\n  }, {\n    key: \"callTheObserver\",\n    value: function callTheObserver() {\n      var _this2 = this;\n\n      this.images.forEach(function (image) {\n        _this2.imageObserver.observe(image);\n      });\n    }\n  }, {\n    key: \"initiateObserver\",\n    value: function initiateObserver() {\n      var _this3 = this;\n\n      this.imageObserver = new IntersectionObserver(function (els, imageObserver) {\n        els.forEach(function (el) {\n          if (!el.isIntersecting) {\n            return;\n          } else {\n            _this3.addLazyLoad(el);\n\n            imageObserver.unobserve(el.target);\n          }\n        });\n      }, this.options);\n    }\n  }, {\n    key: \"addLazyLoad\",\n    value: function addLazyLoad(el) {\n      if (el.target.dataset.mobile) {\n        this.setMobileImage(el.target);\n      } else {\n        el.target.style.backgroundImage = \"url('\".concat(el.target.dataset.src, \"')\");\n      }\n    }\n  }]);\n\n  return LazyLoad;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LazyLoad);\n\n//# sourceURL=webpack:///./wp-content/themes/headline-theme/js/modules/LazyLoad.js?");

/***/ }),

/***/ "./wp-content/themes/headline-theme/js/modules/RevealOnScroll.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/headline-theme/js/modules/RevealOnScroll.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RevealOnScroll = /*#__PURE__*/function () {\n  function RevealOnScroll(items, thresholdValue) {\n    _classCallCheck(this, RevealOnScroll);\n\n    this.items = items; //Get the items\n\n    this.options = {\n      threshold: thresholdValue\n    }; //Set the observer options (threshold)\n\n    this.events(); //Call the main event function\n  }\n\n  _createClass(RevealOnScroll, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      //Main events\n      this.initiateObserver(); //Call the observer defination\n\n      this.items.forEach(function (item) {\n        //Call the main observer on each item\n        _this.revealObserver.observe(item);\n      });\n    }\n  }, {\n    key: \"initiateObserver\",\n    value: function initiateObserver() {\n      var _this2 = this;\n\n      //The main observer defination\n      this.revealObserver = new IntersectionObserver(function (els, revealObserver) {\n        els.forEach(function (el) {\n          if (!el.isIntersecting) {\n            //Hide items which are not in viewport when page loads\n            _this2.hideInitially(el);\n          } else {\n            _this2.unHide(el); //Reveal as per the scroll\n\n\n            revealObserver.unobserve(el.target); //Stop the observer for that element after it loaded\n          }\n        });\n      }, this.options);\n    }\n  }, {\n    key: \"hideInitially\",\n    value: function hideInitially(el) {\n      //Hide items which are not in viewport when page loads\n      el.target.classList.add('reveal-item');\n    }\n  }, {\n    key: \"unHide\",\n    value: function unHide(el) {\n      //Reveal as per the scroll\n      el.target.classList.add('reveal-item--is-visible');\n    }\n  }]);\n\n  return RevealOnScroll;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RevealOnScroll);\n\n//# sourceURL=webpack:///./wp-content/themes/headline-theme/js/modules/RevealOnScroll.js?");

/***/ }),

/***/ "./wp-content/themes/headline-theme/js/modules/SideMenu.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/headline-theme/js/modules/SideMenu.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SideMenu = /*#__PURE__*/function () {\n  function SideMenu() {\n    _classCallCheck(this, SideMenu);\n\n    this.injectHTML();\n    this.menuIconWrapper = document.querySelector('.site-header__menu-icon-wrapper');\n    this.isMenuOpen = false;\n    this.menuIcon = document.querySelector('.site-header__menu-icon');\n    this.menuContainer = document.querySelector('.side-menu');\n    this.afterHeader = document.querySelector('.after-header');\n    this.siteHeader = document.querySelector('.site-header');\n    this.siteHeaderLogo = document.querySelector('.site-header__logo');\n    this.siteHeaderMenu = document.querySelector('.site-header__menu-item');\n    this.siteHeaderSearch = document.querySelectorAll('.site-header__search');\n    this.events();\n  }\n\n  _createClass(SideMenu, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.menuIconWrapper.addEventListener('click', function () {\n        return _this.toggleTheMenu();\n      });\n      document.addEventListener(\"keyup\", function (e) {\n        return _this.keyPressHandler(e);\n      });\n    }\n  }, {\n    key: \"injectHTML\",\n    value: function injectHTML() {\n      document.body.insertAdjacentHTML('beforeend', \"\\n\\t\\t\\t\\t<!-- Side Menu Starts -->\\n\\t\\t\\t\\t<div class=\\\"side-menu\\\">\\n\\t\\t\\t\\t    <div class=\\\"side-menu__container\\\">\\n\\t\\t\\t\\t        <nav class=\\\"side-menu__list\\\">\\n\\t\\t\\t\\t            <ul>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\">Menu 1</a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\">Menu 2</a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\">Menu 3</a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\">Menu 4</a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\">Menu 5</a></li>\\n\\t\\t\\t\\t            </ul>\\n\\t\\t\\t\\t        </nav>\\n\\t\\t\\t\\t        <div class=\\\"side-menu__social\\\">\\n\\t\\t\\t\\t            <ul>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\"><i class=\\\"ha-facebook-square\\\" aria-hidden=\\\"true\\\"></i></a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\"><i class=\\\"ha-twitter\\\" aria-hidden=\\\"true\\\"></i></a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\"><i class=\\\"ha-youtube-play\\\" aria-hidden=\\\"true\\\"></i></a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\"><i class=\\\"ha-instagram\\\" aria-hidden=\\\"true\\\"></i></a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\"><i class=\\\"ha-rss\\\" aria-hidden=\\\"true\\\"></i></a></li>\\n\\t\\t\\t\\t                <li><a href=\\\"#\\\"><i class=\\\"ha-envelope\\\" aria-hidden=\\\"true\\\"></i></a></li>\\n\\t\\t\\t\\t            </ul>\\n\\t\\t\\t\\t            <div class=\\\"side-menu__footer\\\">\\n\\t\\t\\t\\t                &copy; 2020 Headline Authority\\n\\t\\t\\t\\t            </div>\\n\\t\\t\\t\\t        </div>\\n\\t\\t\\t\\t    </div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<!-- Side Menu Ends -->\\n\\t\\t\\t\");\n    }\n  }, {\n    key: \"toggleTheMenu\",\n    value: function toggleTheMenu() {\n      this.menuContainer.classList.toggle('side-menu--is-visible');\n      this.menuIcon.classList.toggle('site-header__menu-icon--close-x');\n      this.afterHeader.classList.toggle('after-header--slide');\n      document.body.classList.toggle('side-menu__body-fixed');\n      this.siteHeaderMenu.classList.toggle('slide-out');\n      this.siteHeaderLogo.classList.toggle('slide-out');\n      this.siteHeader.classList.toggle('transparent-bg');\n      this.siteHeader.classList.toggle('no-top');\n      this.siteHeaderSearch.forEach(function (el) {\n        return el.classList.toggle('slide-out');\n      });\n      this.changeMenuStatus();\n    }\n  }, {\n    key: \"keyPressHandler\",\n    value: function keyPressHandler(e) {\n      if (e.keyCode == 27 && this.isMenuOpen == true) {\n        this.toggleTheMenu();\n      }\n    }\n  }, {\n    key: \"changeMenuStatus\",\n    value: function changeMenuStatus() {\n      if (this.isMenuOpen) {\n        this.isMenuOpen = false;\n      } else {\n        this.isMenuOpen = true;\n      }\n    }\n  }]);\n\n  return SideMenu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\n//# sourceURL=webpack:///./wp-content/themes/headline-theme/js/modules/SideMenu.js?");

/***/ }),

/***/ "./wp-content/themes/headline-theme/js/modules/StickyHeader.js":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/headline-theme/js/modules/StickyHeader.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StickyHeader = /*#__PURE__*/function () {\n  function StickyHeader() {\n    _classCallCheck(this, StickyHeader);\n\n    this.mainGrid = document.querySelector(\".after-header\"); //Get the main grid\n\n    this.siteLogo = document.querySelector(\".site-header__logo\"); //Get the site logo\n\n    this.siteHeader = document.querySelector(\".site-header\"); //Get the site header\n\n    this.options = {\n      rootMargin: \"10px 0px -94% 0px\",\n      threshold: 0\n    }; //Set the observer options\n\n    this.events(); //Call the main event function\n  }\n\n  _createClass(StickyHeader, [{\n    key: \"events\",\n    value: function events() {\n      //Main events\n      this.initiateObserver(); //Call the observer defination\n\n      this.headerScrollObserver.observe(this.mainGrid); //Call the main observer on mainGrid\n    }\n  }, {\n    key: \"initiateObserver\",\n    value: function initiateObserver() {\n      var _this = this;\n\n      //The main observer defination\n      this.headerScrollObserver = new IntersectionObserver(function (els, headerScrollObserver) {\n        els.forEach(function (el) {\n          console.log(el.intersectionRatio);\n\n          if (el.intersectionRatio != 0) {\n            _this.siteLogo.classList.add(\"site-header__logo--small\"); // this.siteHeader.classList.add(\"site-header__no-top\")\n\n          } else {\n            _this.siteLogo.classList.remove(\"site-header__logo--small\"); // this.siteHeader.classList.remove(\"site-header__no-top\")\n\n          } // if(el.isIntersecting) {\n          // \tthis.siteLogo.classList.remove(\"site-header__logo--small\")\n          // \tthis.siteHeader.classList.remove(\"site-header__no-top\")\n          // \tconsole.log(2)\n          // } else {\n          // \tthis.siteLogo.classList.add(\"site-header__logo--small\")\n          // \tthis.siteHeader.classList.add(\"site-header__no-top\")\n          // \tconsole.log(1)\n          // }\n\n        });\n      }, this.options);\n    }\n  }]);\n\n  return StickyHeader;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StickyHeader);\n\n//# sourceURL=webpack:///./wp-content/themes/headline-theme/js/modules/StickyHeader.js?");

/***/ }),

/***/ "./wp-content/themes/headline-theme/js/scripts.js":
/*!********************************************************!*\
  !*** ./wp-content/themes/headline-theme/js/scripts.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_SideMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/SideMenu */ \"./wp-content/themes/headline-theme/js/modules/SideMenu.js\");\n/* harmony import */ var _modules_StickyHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/StickyHeader */ \"./wp-content/themes/headline-theme/js/modules/StickyHeader.js\");\n/* harmony import */ var _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/RevealOnScroll */ \"./wp-content/themes/headline-theme/js/modules/RevealOnScroll.js\");\n/* harmony import */ var _modules_LazyLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/LazyLoad */ \"./wp-content/themes/headline-theme/js/modules/LazyLoad.js\");\n\n\n\n\nnew _modules_SideMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nnew _modules_StickyHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelectorAll(\".latest-section__container\"), 0.75);\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelectorAll(\".sidebar-post__container\"), 0.75);\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelectorAll(\".category-section__popular\"), .20);\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelectorAll(\".category-section__latest\"), .20);\nnew _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelectorAll(\".category-section__list-item\"), 0.95);\nnew _modules_LazyLoad__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n//# sourceURL=webpack:///./wp-content/themes/headline-theme/js/scripts.js?");

/***/ })

/******/ });