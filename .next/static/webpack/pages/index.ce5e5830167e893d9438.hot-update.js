/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Img\": function() { return /* binding */ Img; },\n/* harmony export */   \"GridContainer\": function() { return /* binding */ GridContainer; },\n/* harmony export */   \"Arrow\": function() { return /* binding */ Arrow; },\n/* harmony export */   \"BlogCard\": function() { return /* binding */ BlogCard; },\n/* harmony export */   \"TitleContent\": function() { return /* binding */ TitleContent; },\n/* harmony export */   \"CarouselContent\": function() { return /* binding */ CarouselContent; },\n/* harmony export */   \"HeaderThree\": function() { return /* binding */ HeaderThree; },\n/* harmony export */   \"Hr\": function() { return /* binding */ Hr; },\n/* harmony export */   \"Intro\": function() { return /* binding */ Intro; },\n/* harmony export */   \"CardInfo\": function() { return /* binding */ CardInfo; },\n/* harmony export */   \"UtilityList\": function() { return /* binding */ UtilityList; },\n/* harmony export */   \"ExternalLinks\": function() { return /* binding */ ExternalLinks; },\n/* harmony export */   \"TagList\": function() { return /* binding */ TagList; },\n/* harmony export */   \"Tag\": function() { return /* binding */ Tag; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nconst Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img`\n  width:100%;\n  height:100%;\n  object-fit: cover;\n  overflow: hidden;\n`;\nconst GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section`\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n  padding-bottom: 0;\n  position: relative;\n`;\nconst Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img`\n  height: 8rem;\n`;\nconst BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  border-radius: 10px;\n  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);\n  text-align: center;\n  width: 90%;\n  @media ${props => props.theme.breakpoints.sm} {\n    width: 100%;\n  }\n`;\nconst TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  text-align: center;\n  z-index: 20;\n  width: 100%;\n\n`;\nconst CarouselContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 3rem;\n  padding-top: 2rem;\n  @media ${props => props.theme.breakpoints.sm} {\n    flex-direction: column;\n  }\n`;\nconst HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3`\n  font-weight: 500;\n  letter-spacing: 2px;\n  color: #9cc9e3;\n  padding: .5rem 0;\n  font-size: ${props => props.title ? '3rem' : '2rem'};\n`;\nconst Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr`\n  width: 50px;\n  height: 3px;\n  margin: 20px auto;\n  border: 0;\n  background: #d0bb57;\n`;\nconst Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div`\n  width: 170px;\n  margin: 0 auto;\n  color: #dce3e7;\n  font-family: 'Droid Serif', serif;\n  font-size: 13px;\n  font-style: italic;\n  line-height: 18px;\n`;\nconst CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p`\n  width: 100%;\n  padding: 0 50px;\n  color: #e4e6e7;\n  font-style: 2rem;\n  line-height: 24px;\n  text-align: justify;\n  @media ${props => props.theme.breakpoints.sm} {\n    padding:.3rem\n  \n}\n`;\nconst UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul`\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  margin: 2.5rem 0;\n`;\nconst ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a`\ncolor:#d4c0c0;\nfont-size: 1.6rem;\npadding:1rem 1.5rem;\nbackground: #6b3030;\nborder-radius: 15px;\ntransition: 0.5s;\n&:hover{\n  background: #801414;\n\n}\n`;\nconst TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul`\ndisplay: flex;\njustify-content: space-around;\npadding: 2rem;\n`;\nconst Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li`\ncolor: #d8bfbf;\nfont-size: 1.5rem;\n`;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanM/YzJiNCJdLCJuYW1lcyI6WyJJbWciLCJzdHlsZWQiLCJHcmlkQ29udGFpbmVyIiwiQXJyb3ciLCJCbG9nQ2FyZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiVGl0bGVDb250ZW50IiwiQ2Fyb3VzZWxDb250ZW50IiwiSGVhZGVyVGhyZWUiLCJ0aXRsZSIsIkhyIiwiSW50cm8iLCJDYXJkSW5mbyIsIlV0aWxpdHlMaXN0IiwiRXh0ZXJuYWxMaW5rcyIsIlRhZ0xpc3QiLCJUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLEdBQUcsR0FBR0MsMERBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPO0FBT0EsTUFBTUMsYUFBYSxHQUFHRCw4REFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTztBQVFBLE1BQU1FLEtBQUssR0FBR0YsMERBQVc7QUFDaEM7QUFDQSxDQUZPO0FBSUEsTUFBTUcsUUFBUSxHQUFHSCwwREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlJLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBLENBUk87QUFTQSxNQUFNQyxZQUFZLEdBQUdSLDBEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQU9BLE1BQU1TLGVBQWUsR0FBR1QsMERBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZSSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQSxDQVJPO0FBVUEsTUFBTUcsV0FBVyxHQUFHVix5REFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWdCSSxLQUFELElBQVdBLEtBQUssQ0FBQ08sS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBTztBQUN4RCxDQU5PO0FBUUEsTUFBTUMsRUFBRSxHQUFHWix5REFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTztBQVFBLE1BQU1hLEtBQUssR0FBR2IsMERBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPO0FBV0EsTUFBTWMsUUFBUSxHQUFHZCx3REFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZSSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLENBWE87QUFjQSxNQUFNUSxXQUFXLEdBQUdmLHlEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PO0FBUUEsTUFBTWdCLGFBQWEsR0FBR2hCLHdEQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYTztBQWFBLE1BQU1pQixPQUFPLEdBQUdqQix5REFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBS0EsTUFBTWtCLEdBQUcsR0FBR2xCLHlEQUFVO0FBQzdCO0FBQ0E7QUFDQSxDQUhPIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmBcblxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZC5pbWdgXG4gIGhlaWdodDogOHJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAxMDAlO1xuXG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzljYzllMztcbiAgcGFkZGluZzogLjVyZW0gMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogI2U0ZTZlNztcbiAgZm9udC1zdHlsZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOi4zcmVtXG4gIFxufVxuYDtcblxuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMi41cmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxuY29sb3I6I2Q0YzBjMDtcbmZvbnQtc2l6ZTogMS42cmVtO1xucGFkZGluZzoxcmVtIDEuNXJlbTtcbmJhY2tncm91bmQ6ICM2YjMwMzA7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xudHJhbnNpdGlvbjogMC41cztcbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xucGFkZGluZzogMnJlbTtcbmBcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG5jb2xvcjogI2Q4YmZiZjtcbmZvbnQtc2l6ZTogMS41cmVtO1xuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/ProjectsStyles.js\n");

/***/ })

});