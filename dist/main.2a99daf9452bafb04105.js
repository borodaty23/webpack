(()=>{"use strict";var __webpack_modules__={"./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./style/style.scss");\n\nnew Swiper(".channels__swiper", {\n  slidesPerView: "auto",\n  // centeredSlides: true,\n  spaceBetween: 24\n});\nnew Swiper(".federal__slider", {\n  slidesPerView: "auto",\n  spaceBetween: 24\n});\nnew Swiper(".channel__dates", {\n  slidesPerView: "auto",\n  spaceBetween: 12\n});\nvar burger = document.querySelector(".header__burger");\nvar mobMenu = document.querySelector(".header__mobile-menu");\nvar body = document.querySelector("body");\nburger.addEventListener("click", function () {\n  burger.classList.toggle("header__burger--active");\n  mobMenu.classList.toggle("header__mobile-menu--active");\n  body.classList.toggle("lock");\n});\n\n//# sourceURL=webpack:///./index.js?')},"./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];return void 0!==_||(_=__webpack_module_cache__[e]={exports:{}},__webpack_modules__[e](_,_.exports,__webpack_require__)),_.exports}__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./index.js")})();