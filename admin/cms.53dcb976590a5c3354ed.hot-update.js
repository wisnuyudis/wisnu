"use strict";
self["webpackHotUpdatewisnu_dev_blog"]("cms",{

/***/ "./src/cms/cms.js":
/*!************************!*\
  !*** ./src/cms/cms.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! netlify-cms-app */ "netlify-cms-app");
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(netlify_cms_app__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const BlogPostPreview = _ref => {
  let {
    entry,
    widgetFor
  } = _ref;
  const data = entry.getIn(['data']).toJS();
  const body = widgetFor('body');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
    className: 'blog-post-preview'
  }, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('h1', {
    key: 'title'
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('p', {
    key: 'date'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('small', null, "Date: " + data.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
    key: 'tags',
    className: 'tags'
  }, data.tags && data.tags.map((tag, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('span', {
    key: index,
    className: 'tag'
  }, tag))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
    key: 'content',
    className: 'content'
  }, body)]);
};

// Initialize the CMS object
_c = BlogPostPreview;
netlify_cms_app__WEBPACK_IMPORTED_MODULE_1___default().init();

// Register preview template
netlify_cms_app__WEBPACK_IMPORTED_MODULE_1___default().registerPreviewTemplate('blog', BlogPostPreview);
var _c;
__webpack_require__.$Refresh$.register(_c, "BlogPostPreview");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = React;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f57157d2d0d819303ac9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.53dcb976590a5c3354ed.hot-update.js.map