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
/******/ 	return __webpack_require__(__webpack_require__.s = "./SubProjects/FrontEnd/RTChat/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/ConnectSocketHandler.js":
/*!**************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/ConnectSocketHandler.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _net_SocketProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../net/SocketProxy */ \"./SubProjects/FrontEnd/RTChat/src/net/SocketProxy.js\");\n\n\n\nfunction ConnectSocketHandler() {\n    let socket = io();\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_SOCKET, socket);\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_SOCKET_PROXY, new _net_SocketProxy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](socket));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectSocketHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/ConnectSocketHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/GetLocalMediaStreamHandler.js":
/*!********************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/GetLocalMediaStreamHandler.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n\n\nasync function GetLocalMediaStreamHandler() {\n    let localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_LOCAL_STREAM, localStream);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetLocalMediaStreamHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/GetLocalMediaStreamHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerICECandidateHandler.js":
/*!***************************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerICECandidateHandler.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n\n\nasync function ReceivedAnswerICECandidateHandler(candidate, fromSocketId) {\n    if (candidate) {\n        /**\n         * @type {RTCPeerConnection}\n         */\n        let offerPc = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_CURRENT_OFFER_RTC_CONNECTION);\n        await offerPc.addIceCandidate(new RTCIceCandidate(candidate));\n\n        console.log(\"Add ice candidate >>>>>>>>>>>>>>>>>>>>\");\n        console.log(candidate);\n        console.log(\"Add ice candidate <<<<<<<<<<<<<<<<<<<<\");\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReceivedAnswerICECandidateHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerICECandidateHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerSessionDescriptionHandler.js":
/*!*********************************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerSessionDescriptionHandler.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n\n\nasync function ReceivedAnswerSessionDescriptionHandler(answer) {\n    console.log(\"Received answer\");\n    console.log(answer);\n\n    /**\n     * @type {RTCPeerConnection}\n     */\n    let offerPc = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_CURRENT_OFFER_RTC_CONNECTION);\n    await offerPc.setRemoteDescription(new RTCSessionDescription(answer));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReceivedAnswerSessionDescriptionHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerSessionDescriptionHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferICECandidateHandler.js":
/*!**************************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferICECandidateHandler.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n\n\nasync function ReceivedOfferICECandidateHandler(candidate, fromSocketId) {\n    if (candidate) {\n        /**\n         * @type {RTCPeerConnection}\n         */\n        let answerPc = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_CURRENT_ANSWER_RTC_CONNECTION);\n        await answerPc.addIceCandidate(new RTCIceCandidate(candidate));\n        console.log(\"Add ice candidate >>>>>>>>>>>>>>>>>>>>\");\n        console.log(candidate);\n        console.log(\"Add ice candidate <<<<<<<<<<<<<<<<<<<<\");\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReceivedOfferICECandidateHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferICECandidateHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferSessionDescriptionHandler.js":
/*!********************************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferSessionDescriptionHandler.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/Constants */ \"./SubProjects/FrontEnd/RTChat/src/globals/Constants.js\");\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/GlobalEvents */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js\");\n\n\n\n\nasync function ReceivedOfferSessionDescriptionHandler(offer, callerSocketId) {\n    console.log(\"Received offer\");\n    console.log(offer);\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_CURRENT_REMOTE_SOCKET_ID, callerSocketId);\n\n    let answerPc = new RTCPeerConnection(_globals_Constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RTC_CONFIGURATION);\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_CURRENT_ANSWER_RTC_CONNECTION, answerPc);\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_REMOTE_STREAM, new MediaStream());\n\n    answerPc.ontrack = ev => {\n        console.log(\"onTrack\");\n        appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GOT_REMOTE_TRACK, ev.track);\n    };\n\n    answerPc.onicecandidate = ev => {\n        console.log(ev);\n        appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SEND_ANSWER_ICE_CANDIDATE, ev.candidate, callerSocketId);\n    };\n\n    await answerPc.setRemoteDescription(new RTCSessionDescription(offer));\n\n    let stream = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].KEY_LOCAL_STREAM);\n    stream.getTracks().forEach(t => answerPc.addTrack(t));\n\n    let answer = await answerPc.createAnswer();\n    await answerPc.setLocalDescription(new RTCSessionDescription(answer));\n\n    appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SEND_ANSWER_SESSION_DESCRIPTION, answer, callerSocketId);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReceivedOfferSessionDescriptionHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferSessionDescriptionHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerICECandidateHandler.js":
/*!***********************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerICECandidateHandler.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/MessageCommands */ \"./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js\");\n\n\n\nfunction SendAnswerICECandidateHandler(candidate, targetSocketId) {\n    /**\n     * @type {SocketProxy}\n     */\n    let socketProxy = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_SOCKET_PROXY);\n    socketProxy.sendMessage(targetSocketId, _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_ANSWER_ICE_CANDIDATE, candidate);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendAnswerICECandidateHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerICECandidateHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerSessionDescriptionHandler.js":
/*!*****************************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerSessionDescriptionHandler.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/MessageCommands */ \"./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js\");\n\n\n\nfunction SendAnswerSessionDescriptionHandler(answer, targetSocketId) {\n    /**\n     * @type {SocketProxy}\n     */\n    let socketProxy = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_SOCKET_PROXY);\n    socketProxy.sendMessage(targetSocketId, _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_ANSWER_SESSION_DESCRIPTION, answer);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendAnswerSessionDescriptionHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerSessionDescriptionHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/SendOfferICECandidateHandler.js":
/*!**********************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/SendOfferICECandidateHandler.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/MessageCommands */ \"./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js\");\n\n\n\nfunction SendOfferICECandidateHandler(candidate, targetSocketId) {\n    /**\n     * @type {SocketProxy}\n     */\n    let socketProxy = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_SOCKET_PROXY);\n    socketProxy.sendMessage(targetSocketId, _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_OFFER_ICE_CANDIDATE, candidate);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendOfferICECandidateHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/SendOfferICECandidateHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/SendOfferSessionDescriptionHandler.js":
/*!****************************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/SendOfferSessionDescriptionHandler.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/MessageCommands */ \"./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js\");\n\n\n\nfunction SendOfferSessionDescriptionHandler(offer, targetSocketId) {\n    /**\n     * @type {SocketProxy}\n     */\n    let socketProxy = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_SOCKET_PROXY);\n    socketProxy.sendMessage(targetSocketId, _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_OFFER_SESSION_DESCRIPTION, offer);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendOfferSessionDescriptionHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/SendOfferSessionDescriptionHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/StartAppHandler.js":
/*!*********************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/StartAppHandler.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalEvents */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js\");\n\n\nasync function StartAppHandler() {\n    await appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONNECT_SOCKET);\n    await appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_LOCAL_MEDIA_STREAM);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartAppHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/StartAppHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/commands/StartChatSessionHandler.js":
/*!*****************************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/commands/StartChatSessionHandler.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _globals_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/Constants */ \"./SubProjects/FrontEnd/RTChat/src/globals/Constants.js\");\n/* harmony import */ var _globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/GlobalEvents */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js\");\n\n\n\n\nasync function StartChatSessionHandler(targetSocketId) {\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_CURRENT_REMOTE_SOCKET_ID, targetSocketId);\n\n    let offerPc = new RTCPeerConnection(_globals_Constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RTC_CONFIGURATION);\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_CURRENT_OFFER_RTC_CONNECTION, offerPc);\n    appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_REMOTE_STREAM, new MediaStream());\n\n    offerPc.ontrack = ev => {\n        console.log(\"onTrack\", ev);\n        appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GOT_REMOTE_TRACK, ev.track);\n    };\n\n    offerPc.onicecandidate = e => {\n        console.log(e);\n        appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SEND_OFFER_ICE_CANDIDATE, e.candidate, targetSocketId);\n    };\n\n    offerPc.onnegotiationneeded = async e => {\n        console.log(e);\n\n        let offer = await offerPc.createOffer();\n        await offerPc.setLocalDescription(new RTCSessionDescription(offer));\n        appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SEND_OFFER_SESSION_DESCRIPTION, offer, targetSocketId);\n    };\n\n    let stream = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_LOCAL_STREAM);\n    for (let t of stream.getTracks()) {\n        offerPc.addTrack(t);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartChatSessionHandler);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/commands/StartChatSessionHandler.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/controllers/VueApp.js":
/*!***************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/controllers/VueApp.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_VueApp_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/VueApp.html */ \"./SubProjects/FrontEnd/RTChat/src/views/VueApp.html\");\n/* harmony import */ var _views_VueApp_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_VueApp_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/GlobalEvents */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js\");\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n/* harmony import */ var _commands_StartAppHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commands/StartAppHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/StartAppHandler.js\");\n/* harmony import */ var _commands_GetLocalMediaStreamHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commands/GetLocalMediaStreamHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/GetLocalMediaStreamHandler.js\");\n/* harmony import */ var _commands_ConnectSocketHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commands/ConnectSocketHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/ConnectSocketHandler.js\");\n/* harmony import */ var _commands_StartChatSessionHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commands/StartChatSessionHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/StartChatSessionHandler.js\");\n/* harmony import */ var _commands_SendOfferSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commands/SendOfferSessionDescriptionHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/SendOfferSessionDescriptionHandler.js\");\n/* harmony import */ var _commands_ReceivedOfferSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commands/ReceivedOfferSessionDescriptionHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferSessionDescriptionHandler.js\");\n/* harmony import */ var _commands_SendAnswerSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commands/SendAnswerSessionDescriptionHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerSessionDescriptionHandler.js\");\n/* harmony import */ var _commands_ReceivedAnswerSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commands/ReceivedAnswerSessionDescriptionHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerSessionDescriptionHandler.js\");\n/* harmony import */ var _globals_EventAdapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../globals/EventAdapter */ \"./SubProjects/FrontEnd/RTChat/src/globals/EventAdapter.js\");\n/* harmony import */ var _commands_SendOfferICECandidateHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../commands/SendOfferICECandidateHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/SendOfferICECandidateHandler.js\");\n/* harmony import */ var _commands_ReceivedOfferICECandidateHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commands/ReceivedOfferICECandidateHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/ReceivedOfferICECandidateHandler.js\");\n/* harmony import */ var _commands_SendAnswerICECandidateHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../commands/SendAnswerICECandidateHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/SendAnswerICECandidateHandler.js\");\n/* harmony import */ var _commands_ReceivedAnswerICECandidateHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../commands/ReceivedAnswerICECandidateHandler */ \"./SubProjects/FrontEnd/RTChat/src/commands/ReceivedAnswerICECandidateHandler.js\");\n/* harmony import */ var _globals_Events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../globals/Events */ \"./SubProjects/FrontEnd/RTChat/src/globals/Events.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst VueApp = Vue.component(\"vue-app\", {\n    template: _views_VueApp_html__WEBPACK_IMPORTED_MODULE_0___default.a,\n\n    data() {\n        return {\n            clients: [],\n            remoteSocketID: null\n        };\n    },\n\n    created() {\n        window.appContext = new _globals_EventAdapter__WEBPACK_IMPORTED_MODULE_11__[\"default\"]();\n        appContext.on(_globals_Events__WEBPACK_IMPORTED_MODULE_16__[\"default\"].DATA_CHANGED, this._appContext_dataChanged.bind(this));\n        appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_VUE_APP, this);\n    },\n\n    mounted() {\n        this._asyncInit();\n    },\n\n\n    methods: {\n        async _asyncInit() {\n            this.registerGlobalEvents();\n\n            await appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].START_APP);\n            let stream = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_LOCAL_STREAM);\n            stream.getTracks().forEach(t => console.log(t));\n            this.$refs.localPreview.srcObject = stream;\n        },\n\n        registerGlobalEvents() {\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLIENTS, this.listClientsHandler.bind(this));\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].START_APP, _commands_StartAppHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GET_LOCAL_MEDIA_STREAM, _commands_GetLocalMediaStreamHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CONNECT_SOCKET, _commands_ConnectSocketHandler__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].START_CHAT_SESSION, _commands_StartChatSessionHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_OFFER_SESSION_DESCRIPTION, _commands_SendOfferSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_ANSWER_SESSION_DESCRIPTION, _commands_SendAnswerSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER_SESSION_DESCRIPTION, _commands_ReceivedOfferSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER_SESSION_DESCRIPTION, _commands_ReceivedAnswerSessionDescriptionHandler__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_OFFER_ICE_CANDIDATE, _commands_SendOfferICECandidateHandler__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER_ICE_CANDIDATE, _commands_ReceivedOfferICECandidateHandler__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SEND_ANSWER_ICE_CANDIDATE, _commands_SendAnswerICECandidateHandler__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER_ICE_CANDIDATE, _commands_ReceivedAnswerICECandidateHandler__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\n            appContext.on(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GOT_REMOTE_TRACK, this._gotRemoteTrackHandler.bind(this));\n\n        },\n\n        listClientsHandler(clients) {\n            this.clients.length = 0;\n            clients.forEach(id => this.clients.push(id));\n        },\n\n        isMyself(socketid) {\n            return appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_CURRENT_LOCAL_SOCKET_ID) == socketid;\n        },\n\n        _gotRemoteTrackHandler(track) {\n            let remoteStream = appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_REMOTE_STREAM);\n            if (remoteStream) {\n                remoteStream.addTrack(track);\n            }\n        },\n\n        socketidClickedHandler(e) {\n            if (this.remoteSocketID) {\n                alert(\"You can not start more than one session at the same time.\");\n                return;\n            }\n\n            let targetId = $(e.target).data(\"socketid\");\n            if (this.isMyself(targetId)) {\n                alert(\"You can not chat with yourself.\");\n                return;\n            }\n\n            if (confirm(`Don you want to chat with ${targetId}?`)) {\n                appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].START_CHAT_SESSION, targetId);\n            }\n        },\n\n        _appContext_dataChanged(key, val, oldVal) {\n            switch (key) {\n                case _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_CURRENT_REMOTE_SOCKET_ID:\n                    this.remoteSocketID = val;\n                    break;\n                case _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_CURRENT_ANSWER_RTC_CONNECTION:\n                case _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_CURRENT_OFFER_RTC_CONNECTION:\n                    if (oldVal) {\n                        oldVal.close();\n                    }\n                    break;\n                case _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_REMOTE_STREAM:\n                    this.$refs.remotePreview.srcObject = val;\n                    break;\n            }\n        },\n\n        btnCloseCurrentSessionClicked(e) {\n            appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_CURRENT_OFFER_RTC_CONNECTION, null);\n            appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_CURRENT_ANSWER_RTC_CONNECTION, null);\n            appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KEY_CURRENT_REMOTE_SOCKET_ID, null);\n        }\n\n    },\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VueApp);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/controllers/VueApp.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/css/style.css":
/*!*******************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/css/style.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/_style-loader@1.2.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.2.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js!./style.css */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js!./SubProjects/FrontEnd/RTChat/src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/css/style.css?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/globals/Constants.js":
/*!**************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/globals/Constants.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Constants = {\n    RTC_CONFIGURATION: {\n        iceServers: [\n            {urls: \"stun:yunp.top\"}\n        ]\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/globals/Constants.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/globals/EventAdapter.js":
/*!*****************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/globals/EventAdapter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventAdapter; });\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ \"./SubProjects/FrontEnd/RTChat/src/globals/Events.js\");\n\n\nclass EventAdapter {\n    constructor() {\n        this._listeners = new Map();\n        this._data = new Map();\n    }\n\n    on(type, handler) {\n        /**\n         * @type {Set}\n         */\n        let handlers = this._listeners.get(type);\n        if (!handlers) {\n            handlers = new Set();\n            this._listeners.set(type, handlers);\n        }\n        handlers.add(handler);\n    }\n\n    off(type, handler = null) {\n        if (this._listeners.has(type)) {\n            if (handler) {\n                this._listeners.get(type).delete(handler);\n            } else {\n                this._listeners.delete(type);\n            }\n        }\n    }\n\n    async fire(type, ...args) {\n        if (this._listeners.has(type)) {\n            for (let handler of this._listeners.get(type).values()) {\n                if (await handler(...args)) {\n                    return true;\n                }\n            }\n        }\n    }\n\n    has(type) {\n        return this._listeners.has(type);\n    }\n\n    get listeners() {\n        return this._listeners;\n    }\n\n    dataKeys() {\n        return this._data.keys();\n    }\n\n    data(...args) {\n        let key, value;\n        switch (args.length) {\n            case 1:\n                key = args[0];\n                return this._data.get(key);\n            case 2:\n                key = args[0];\n                value = args[1];\n                let oldVal = this._data.get(key);\n                if (oldVal !== value) {\n                    this._data.set(key, value);\n                    this.fire(_Events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DATA_CHANGED, key, value, oldVal);\n                }\n                return this;\n            default:\n                return this._data;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/globals/EventAdapter.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/globals/Events.js":
/*!***********************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/globals/Events.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Events = {\n    DATA_CHANGED: \"dataChanged\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/globals/Events.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js":
/*!*****************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GlobalEvents = {\n    LIST_CLIENTS: \"listClients\",\n    GOT_ANSWER_SESSION_DESCRIPTION: \"gotAnswerSessionDescription\",\n    START_CHAT_SESSION: \"startChatSession\",\n    GET_LOCAL_MEDIA_STREAM: \"getLocalMediaStream\",\n    START_APP: \"startApp\",\n    CONNECT_SOCKET: \"connectSocket\",\n    SEND_OFFER_SESSION_DESCRIPTION: \"sendOfferSessionDescription\",\n    SEND_ANSWER_SESSION_DESCRIPTION: \"sendAnswerSessionDescription\",\n    SEND_OFFER_ICE_CANDIDATE: \"SendOfferICECandidate\",\n    SEND_ANSWER_ICE_CANDIDATE: \"SendAnswerICECandidate\",\n    RECEIVED_OFFER_SESSION_DESCRIPTION: \"receivedOfferSessionDescription\",\n    RECEIVED_ANSWER_SESSION_DESCRIPTION: \"receivedAnswerSessionDescription\",\n    RECEIVED_OFFER_ICE_CANDIDATE: \"receivedOfferICECandidate\",\n    RECEIVED_ANSWER_ICE_CANDIDATE: \"receivedAnswerICECandidate\",\n    GOT_REMOTE_TRACK: \"gotRemoteTrack\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalEvents);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js":
/*!***************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GlobalKeys = {\n    KEY_SOCKET: \"socket\",\n    KEY_CURRENT_LOCAL_SOCKET_ID: \"currentLocalSocketID\",\n    KEY_CURRENT_REMOTE_SOCKET_ID: \"currentRemoteSocketID\",\n    KEY_CURRENT_OFFER_RTC_CONNECTION: \"currentOfferRTCConnection\",\n    KEY_CURRENT_ANSWER_RTC_CONNECTION: \"currentAnswerRTCConnection\",\n    KEY_SOCKET_PROXY: \"socketProxy\",\n    KEY_MEDIA_CONNECTION: \"mediaConnection\",\n    KEY_VUE_APP: \"vueapp\",\n    KEY_LOCAL_STREAM: \"localStream\",\n    KEY_REMOTE_STREAM: \"remoteStream\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalKeys);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/globals/SocketEvents.js":
/*!*****************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/globals/SocketEvents.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar SocketEvents = {\n    LIST_CLIENTS: \"listClients\",\n    SEND_MESSAGE: \"sendMessage\"\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocketEvents);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/globals/SocketEvents.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/index.js":
/*!**************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./SubProjects/FrontEnd/RTChat/src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_VueApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/VueApp */ \"./SubProjects/FrontEnd/RTChat/src/controllers/VueApp.js\");\n\n\n\n\ndocument.body.appendChild(new _controllers_VueApp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().$mount(document.createElement(\"div\")).$el);\n\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/index.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/net/SocketProxy.js":
/*!************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/net/SocketProxy.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SocketProxy; });\n/* harmony import */ var _globals_SocketEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/SocketEvents */ \"./SubProjects/FrontEnd/RTChat/src/globals/SocketEvents.js\");\n/* harmony import */ var _globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/GlobalEvents */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalEvents.js\");\n/* harmony import */ var _vo_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vo/Message */ \"./SubProjects/FrontEnd/RTChat/src/vo/Message.js\");\n/* harmony import */ var _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vo/MessageCommands */ \"./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js\");\n/* harmony import */ var _globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/GlobalKeys */ \"./SubProjects/FrontEnd/RTChat/src/globals/GlobalKeys.js\");\n\n\n\n\n\n\nclass SocketProxy {\n    constructor(socket) {\n        this._socket = socket;\n\n        socket.on(\"connect\", () => appContext.data(_globals_GlobalKeys__WEBPACK_IMPORTED_MODULE_4__[\"default\"].KEY_CURRENT_LOCAL_SOCKET_ID, socket.id));\n        socket.on(_globals_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SEND_MESSAGE, this.messageHandler.bind(this));\n        socket.on(_globals_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LIST_CLIENTS, clients => appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LIST_CLIENTS, clients));\n    }\n\n    sendMessage(to, command, data) {\n        console.log(`Send message[${command}] to ${to}`);\n        let msg = _vo_Message__WEBPACK_IMPORTED_MODULE_2__[\"default\"].makeMessage(this.socket.id, to, command, data);\n        this.socket.emit(_globals_SocketEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SEND_MESSAGE, msg);\n    }\n\n    messageHandler(message) {\n        console.log(message);\n\n        if (message.command) {\n            switch (message.command) {\n                case _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SEND_OFFER_SESSION_DESCRIPTION:\n                    appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER_SESSION_DESCRIPTION, message.data, message.from);\n                    break;\n                case _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SEND_ANSWER_SESSION_DESCRIPTION:\n                    appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER_SESSION_DESCRIPTION, message.data);\n                    break;\n                case _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SEND_OFFER_ICE_CANDIDATE:\n                    appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_OFFER_ICE_CANDIDATE, message.data, message.from);\n                    break;\n                case _vo_MessageCommands__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SEND_ANSWER_ICE_CANDIDATE:\n                    appContext.fire(_globals_GlobalEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"].RECEIVED_ANSWER_ICE_CANDIDATE, message.data, message.from);\n                    break;\n            }\n        }\n    }\n\n    get socket() {\n        return this._socket;\n    }\n}\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/net/SocketProxy.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/views/VueApp.html":
/*!***********************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/views/VueApp.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"card\\\" style=\\\"width: 800px;height: 500px;\\\">\\n    <div class=\\\"card-header\\\">WebRTChat</div>\\n    <div style=\\\"display: flex;flex-direction: row;height: 100%;\\\">\\n        <div style=\\\"display: flex;flex-direction: column;height: 100%;border-right: solid #ccc thin;\\\">\\n            <div style=\\\"font-weight: bold;text-align: center;\\\">在线列表</div>\\n            <div class=\\\"list-group\\\" style=\\\"flex: 1;width: 100%;overflow-y: auto;overflow-x: hidden;font-size: 10pt;\\\">\\n                <button v-for=\\\"c in clients\\\" v-html=\\\"(!isMyself(c))?c:c+' [Self]'\\\" :data-socketid=\\\"c\\\"\\n                        @click=\\\"socketidClickedHandler\\\"\\n                        class=\\\"list-group-item list-group-item-action\\\">\\n                </button>\\n            </div>\\n            <video ref=\\\"localPreview\\\" width=\\\"240\\\" height=\\\"180\\\" autoplay muted></video>\\n        </div>\\n        <div style=\\\"flex: 1;height: 100%;position: relative;\\\">\\n            <video ref=\\\"remotePreview\\\" style=\\\"width: 100%;height: 100%;\\\" autoplay></video>\\n            <div class=\\\"close-btn-area\\\" v-if=\\\"remoteSocketID\\\">\\n                <span v-html=\\\"remoteSocketID\\\"></span>\\n                <button class=\\\"btn btn-danger btn-sm btn-close\\\"\\n                        @click=\\\"btnCloseCurrentSessionClicked\\\"\\n                        style=\\\"position: absolute;right: 10px;top: 10px;\\\">\\n                    <i class=\\\"fas fa-times\\\"></i>\\n                </button>\\n            </div>\\n        </div>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/views/VueApp.html?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/vo/Message.js":
/*!*******************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/vo/Message.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Message = {\n    makeMessage(from, to, command, data) {\n        return {\n            from: from,\n            to: to,\n            command: command,\n            data: data\n        };\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/vo/Message.js?");

/***/ }),

/***/ "./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js":
/*!***************************************************************!*\
  !*** ./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MessageCommands = {\n    SEND_OFFER_SESSION_DESCRIPTION: \"sendOfferSessionDescription\",\n    SEND_ANSWER_SESSION_DESCRIPTION: \"sendAnswerSessionDescription\",\n    SEND_OFFER_ICE_CANDIDATE: \"SendOfferICECandidate\",\n    SEND_ANSWER_ICE_CANDIDATE: \"SendAnswerICECandidate\",\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageCommands);\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/vo/MessageCommands.js?");

/***/ }),

/***/ "./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js!./SubProjects/FrontEnd/RTChat/src/css/style.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js!./SubProjects/FrontEnd/RTChat/src/css/style.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".close-btn-area {\\n    position: absolute;\\n    width: 100%;\\n    height: 50px;\\n    background-color: rgba(0, 0, 0, 0);\\n    top: 0\\n}\\n\\n.close-btn-area:hover {\\n    background-color: rgba(255, 255, 255, 0.3);\\n}\\n\\n.close-btn-area .btn-close {\\n    display: none;\\n}\\n\\n.close-btn-area:hover .btn-close {\\n    display: block;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./SubProjects/FrontEnd/RTChat/src/css/style.css?./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.2.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.2.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.2.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });