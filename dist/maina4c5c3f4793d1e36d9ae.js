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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_movieCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movieCall.js */ \"./src/modules/movieCall.js\");\n/* harmony import */ var _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/commentPopup.js */ \"./src/modules/commentPopup.js\");\n\n\n\n\n\nconst starter = async () => {\n  const movie = await (0,_modules_movieCall_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const films = movie.slice(0, 20).map((item) => item);\n  await (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(films);\n};\n\nstarter();\n\ndocument.addEventListener('click', (e) => {\n  if (e.target.matches('.comment-btn')) {\n    (0,_modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.id);\n  }\n});\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPopup.js */ \"./src/modules/commentPopup.js\");\n/* eslint-disable  import/no-cycle */\n\n\n\n\nconst commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';\nconst getMovieComment = async (movieId) => {\n  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);\n  return response.json();\n};\n\ndocument.addEventListener('click', (e) => {\n  if (e.target.matches('.comment-btn')) {\n    (0,_commentPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id);\n    const comment = getMovieComment(e.target.id);\n    (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter)(comment);\n  }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieComment);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"updateCommentCounter\": () => (/* binding */ updateCommentCounter)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* eslint-disable  import/no-cycle */\n\n\nconst commentPopup = document.querySelector('.comment-popup');\nconst getTotalComments = async (movieId) => {\n  const result = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movieId)\n    .then((comment) => (!comment.error ? comment.length : 0))\n    .catch(() => 0);\n  return result;\n};\n\nconst updateCommentCounter = (movieId) => {\n  getTotalComments(movieId).then((totalComment) => {\n    commentPopup.querySelector('.total-comments').innerHTML = totalComment;\n  });\n};\nconst commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* eslint-disable  import/no-cycle */\n\n\n\n\nconst commentApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dLRWdvDoWjaapH1JgaCf/comments';\nconst movieApi = 'https://api.tvmaze.com/shows';\nconst commentPopup = document.querySelector('.comment-popup');\n\nconst get = (url) => fetch(url)\n  .then((res) => res.json())\n  .then((data) => data)\n  .catch((error) => error);\n\nconst post = (url, params = {}) => fetch(url, {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify(params),\n}).then((res) => res.text())\n  .then((data) => (data.error\n    ? { error: true, info: data }\n    : { error: false, info: data }))\n  .catch((error) => ({ error: true, info: error }));\n\nconst addComment = async (params) => {\n  const response = await post(commentApiEndpoint, params);\n  return response;\n};\n\nconst getMovieData = async (movieId) => {\n  const response = await get(`${movieApi}/${movieId}`);\n  return response;\n};\n\nconst displayMovieComments = (data) => {\n  commentPopup.querySelector('.comments').innerHTML = data;\n};\n\nconst showComments = (movieId) => {\n  (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movieId).then((data) => {\n    if (!data.error) {\n      let comments = '';\n      data.forEach((comment) => {\n        comments += `<li class=\"comments-list\">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;\n      });\n      displayMovieComments(comments);\n    } else {\n      displayMovieComments('No comment posted yet.');\n    }\n  });\n};\n\nconst closeCommentPopup = () => {\n  document.querySelector('#close').addEventListener('click', () => {\n    commentPopup.style.display = 'none';\n    commentPopup.innerHTML = '';\n    document.body.style.overflow = 'visible';\n  });\n};\n\nconst showCommentPopup = async (movieId) => {\n  await getMovieData(movieId).then((data) => {\n    commentPopup.innerHTML = `<div class=\"popup\">\n    <button id=\"close\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n    <div class=\"container\">\n        <div class=\"display\">\n          <div class=\"description\">\n            <img src=${data.image.medium} alt=\"Movie image\">\n            <h3 class=\"movie-title\">${data.name}</h3>\n          </div>\n          <div class=\"display-detail\">\n            <h3>More about the Movie</h3>\n           <ul>\n             <li>${data.summary}</li> \n             <li><strong>Date of Release:</strong> ${data.premiered}</li>\n             <li><strong>Genres:</strong> ${data.genres}</li>                 \n             <li><strong>Rating:</strong> ${data.rating.average}</li>                 \n           </ul>  \n          </div>\n        </div>\n      <div class=\"comment-container\">\n        <div class=\"comment-display\">\n          <h3 class='counter'>Comments(<span class=\"total-comments\">0</span>)</h3>\n          <ul class=\"comments\">\n\n          </ul>\n        </div>\n        <div class=\"comment\">\n        <div class=\"add-comment\">\n          <h3>Add Comment</h3>\n        </div>\n        <form class=\"form\">\n          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your name\" required>\n          <textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"\n              placeholder=\"Your insight\" required></textarea>\n          <button id=${movieId} type=\"submit\" class=\"submit-btn\">Comment</button>\n        </form>\n      </div>\n      </div>\n    </div>\n  </div>`;\n    showComments(movieId);\n\n    const form = commentPopup.querySelector('.form');\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const user = form.elements.name.value;\n      const description = form.elements.description.value;\n      addComment({\n        item_id: movieId,\n        username: user,\n        comment: description,\n      }).then(() => {\n        showComments(movieId);\n        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__.updateCommentCounter)(movieId);\n        form.reset();\n      });\n    });\n  });\n  commentPopup.style.display = 'block';\n  closeCommentPopup();\n};\n\n// const displayComments = () => {\n//   const commentBtns = document.querySelectorAll('.comment-btn');\n//   commentBtns.forEach((movie) => {\n//     movie.addEventListener('click', () => {\n//       const movieId = movie.getAttribute('movie-id');\n//       showCommentPopup(movieId);\n//       document.body.style.overflow = 'hidden';\n//     });\n//   });\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentPopup);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/commentPopup.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes),\n/* harmony export */   \"showLikes\": () => (/* binding */ showLikes)\n/* harmony export */ });\nconst list = document.getElementById('cards');\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Uxox2qKR3NUpYCRDwsgp/likes';\n\nconst postLikes = async (id) => {\n  const likesObject = { item_id: id };\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(likesObject),\n  });\n  return response;\n};\n\nconst getLikes = async () => {\n  const likesData = await fetch(url);\n  const allLikes = await likesData.json();\n  return allLikes;\n};\n\nconst updateLikes = async (id) => {\n  const likedData = await getLikes();\n  let results = 0;\n  likedData.forEach((element) => {\n    if (element.item_id.toString() === id.toString()) {\n      results = element.likes;\n    }\n  });\n  return results;\n};\n\nconst addLikes = (e) => {\n  const currentNumber = e.innerText;\n  e.innerText = parseInt(currentNumber, 10) + 1;\n};\n\nconst showLikes = (itemsCount) => {\n  const counts = document.querySelector('.show');\n  counts.innerText = `Movies(${itemsCount})`;\n};\n\nlist.addEventListener('click', (e) => {\n  if (e.target.className === 'far fa-heart likes') {\n    const icons = e.target;\n    const likeId = icons.parentNode.querySelector('span').id;\n    const displayLikes = icons.parentNode.querySelector('span');\n    postLikes(likeId);\n    updateLikes(likeId);\n    addLikes(displayLikes);\n  }\n});\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getLikes.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\n\nconst Render = async (data) => {\n  data.forEach(async (e) => {\n    const likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(e.id);\n    const list = document.getElementById('cards');\n    list.innerHTML += ` <div class=\"card\" >\n        <img src=\"${e.image.original}\" alt=\"\">\n        <div class=\"span-items\">\n            <h4>${e.name}</h4>\n            <i class=\"far fa-heart likes\" id=\"love-icon\"></i>\n            <span id=\"${e.id}\">${likes}</span>\n        </div>\n        <button id=\"${e.id}\" class=\"comment-btn\">Comment</button>\n        </div>`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/render.js?");

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