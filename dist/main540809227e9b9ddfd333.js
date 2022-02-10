/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_movieCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movieCall.js */ \"./src/modules/movieCall.js\");\n/* harmony import */ var _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/commentPopup.js */ \"./src/modules/commentPopup.js\");\n\n\n\n\n\nconst starter = async () => {\n  const data = await (0,_modules_movieCall_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const films = data.slice(0, 20).map((item) => item);\n  await (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(films);\n};\n\nstarter().then(() => {\n  (0,_modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentApi.js":
/*!***********************************!*\
  !*** ./src/modules/commentApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';\r\nconst getMovieComment = async (movieId) => {\r\n  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`).catch((err) => err);\r\n  return response.json();\r\n};\r\n\r\ndocument.addEventListener('click', async (e) => {\r\n  if (e.target.matches('.comment-btn')) {\r\n    const comment = await getMovieComment(e.target.id);\r\n    const commentNumber = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter)(comment);\r\n    document.querySelector('.total-comments').textContent = commentNumber || 0;\r\n    await getMovieComment(e.target.id);\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieComment);\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentApi.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentApi.js */ \"./src/modules/commentApi.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst commentPopup = document.querySelector('.comment-popup');\nconst getTotalComments = async (movieId) => {\n  const result = await (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movieId)\n    .then((comment) => (!comment.error ? comment.length : 0))\n    .catch(() => 0);\n  return result;\n};\n\nconst updateCommentCounter = (movieId) => {\n  getTotalComments(movieId).then((totalComment) => {\n    commentPopup.querySelector('.total-comments').innerHTML = totalComment;\n  });\n};\nconst commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCommentCounter);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentApi.js */ \"./src/modules/commentApi.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst commentApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';\r\nconst movieApi = 'https://api.tvmaze.com/shows';\r\nconst commentPopup = document.querySelector('.comment-popup');\r\n\r\nconst get = (url) => fetch(url)\r\n  .then((res) => res.json())\r\n  .then((data) => data)\r\n  .catch((error) => error);\r\n\r\nconst post = (url, params = {}) => fetch(url, {\r\n  method: 'POST',\r\n  headers: {\r\n    'Content-Type': 'application/json',\r\n  },\r\n  body: JSON.stringify(params),\r\n}).then((res) => res.text())\r\n  .then((data) => (data.error\r\n    ? { error: true, info: data }\r\n    : { error: false, info: data }))\r\n  .catch((error) => ({ error: true, info: error }));\r\n\r\nconst addComment = async (params) => {\r\n  const response = await post(commentApiEndpoint, params);\r\n  return response;\r\n};\r\n\r\nconst getMovieData = async (movieId) => {\r\n  const response = await get(`${movieApi}/${movieId}`);\r\n  return response;\r\n};\r\n\r\nconst displayMovieComments = (data) => {\r\n  commentPopup.querySelector('.comments').innerHTML = data;\r\n};\r\n\r\nconst showComments = (movieId) => {\r\n  (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movieId).then((data) => {\r\n    if (!data.error) {\r\n      let comments = '';\r\n      data.forEach((comment) => {\r\n        comments += `<li class=\"comments-list\">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;\r\n      });\r\n      displayMovieComments(comments);\r\n    } else {\r\n      displayMovieComments('No comment posted yet.');\r\n    }\r\n  });\r\n};\r\n\r\nconst closeCommentPopup = () => {\r\n  document.querySelector('#close').addEventListener('click', () => {\r\n    commentPopup.style.display = 'none';\r\n    commentPopup.innerHTML = '';\r\n    document.body.style.overflow = 'visible';\r\n  });\r\n};\r\n\r\nconst showCommentPopup = (movieId) => {\r\n  getMovieData(movieId).then((data) => {\r\n    commentPopup.innerHTML = `<div class=\"popup\">\r\n    <button id=\"close\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n    <div class=\"container\">\r\n        <div class=\"display\">\r\n          <div class=\"description\">\r\n            <img src=${data.image.medium} alt=\"Movie image\">\r\n            <h3 class=\"movie-title\">${data.name}</h3>\r\n          </div>\r\n          <div class=\"display-detail\">\r\n            <h3>More about the Movie</h3>\r\n           <ul>\r\n             <li>${data.summary}</li> \r\n             <li><strong>Date of Release:</strong> ${data.premiered}</li>\r\n             <li><strong>Genres:</strong> ${data.genres}</li>                 \r\n             <li><strong>Rating:</strong> ${data.rating.average}</li>                 \r\n           </ul>  \r\n          </div>\r\n        </div>\r\n      <div class=\"comment-container\">\r\n        <div class=\"comment-display\">\r\n          <h3 class='counter'>Comments(<span class=\"total-comments\">0</span>)</h3>\r\n          <ul class=\"comments\">\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"comment\">\r\n        <div class=\"add-comment\">\r\n          <h3>Add Comment</h3>\r\n        </div>\r\n        <form class=\"form\">\r\n          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your name\" required>\r\n          <textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"\r\n              placeholder=\"Your insight\" required></textarea>\r\n          <button id=${movieId} type=\"submit\" class=\"submit-btn\">Comment</button>\r\n        </form>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n    closeCommentPopup();\r\n    showComments(movieId);\r\n\r\n    const form = commentPopup.querySelector('.form');\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      const user = form.elements.name.value;\r\n      const description = form.elements.description.value;\r\n      addComment({\r\n        item_id: movieId,\r\n        username: user,\r\n        comment: description,\r\n      }).then(() => {\r\n        showComments(movieId);\r\n        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movieId);\r\n        form.reset();\r\n      });\r\n    });\r\n  });\r\n  commentPopup.style.display = 'block';\r\n  closeCommentPopup();\r\n};\r\n\r\nconst displayComments = () => {\r\n  const commentBtns = document.querySelectorAll('.comment-btn');\r\n  commentBtns.forEach((movie) => {\r\n    movie.addEventListener('click', () => {\r\n      const movieId = movie.getAttribute('movie-id');\r\n      showCommentPopup(movieId);\r\n      document.body.style.overflow = 'hidden';\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentPopup.js?");

/***/ }),

/***/ "./src/modules/movieCall.js":
/*!**********************************!*\
  !*** ./src/modules/movieCall.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviesCall = async () => {\n  const movieData = await fetch('https://api.tvmaze.com/shows');\n  const allData = await movieData.json();\n  return allData;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesCall);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/movieCall.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Render = async (data) => {\n  data.forEach((e) => {\n    const list = document.getElementById('cards');\n    list.innerHTML += ` <div class=\"card\" >\n          <img src=\"${e.image.original}\" alt=\"\">\n          <div class=\"span-items\">\n              <h4>${e.name}</h4>\n              <span>14 likes</span>\n          </div>\n          <button movie-id=\"${e.id}\" id=\"${e.id}\" class=\"comment-btn\">Comment</button>\n          </div>`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/render.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;