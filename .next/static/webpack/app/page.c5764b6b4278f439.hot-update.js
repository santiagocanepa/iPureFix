"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./modules/Slider.jsx":
/*!****************************!*\
  !*** ./modules/Slider.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_HiChevronLeft_HiChevronRight_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=HiChevronLeft,HiChevronRight!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_LuCircle_LuCircleDot_react_icons_lu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LuCircle,LuCircleDot!=!react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Slider = ()=>{\n    _s();\n    // Slider\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const prevSlide = ()=>setCurrentIndex(currentIndex === 0 ? _constants__WEBPACK_IMPORTED_MODULE_2__.works.length - 1 : currentIndex - 1);\n    const nextSlide = ()=>setCurrentIndex(currentIndex === _constants__WEBPACK_IMPORTED_MODULE_2__.works.length - 1 ? 0 : currentIndex + 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1200px] relative bg-card-v1 w-full max-h-[450px] h-full rounded-2xl p-[0.1rem] flex overflow-hidden duration-700 text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-full bg-tertiary rounded-2xl flex px-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: prevSlide,\n                    className: \"btn-arrow z-50 cursor-pointer duration-500\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChevronLeft_HiChevronRight_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiChevronLeft, {}, void 0, false, {\n                        fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: nextSlide,\n                    className: \"btn-arrow z-50 duration-500\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChevronLeft_HiChevronRight_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiChevronRight, {}, void 0, false, {\n                        fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                _constants__WEBPACK_IMPORTED_MODULE_2__.works.map((param, i)=>/*#__PURE__*/ {\n                    let { src, alt, title, subTitle } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex-col md:flex-row w-full slider h-full p-6 flex items-center justify-between duration-700\",\n                        style: {\n                            translate: \"\".concat(-100 * currentIndex, \"%\")\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-[375px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: src,\n                                    alt: alt,\n                                    className: \"object-cover rounded-3xl w-full h-full shadow-lg shadow-white\",\n                                    fill: true,\n                                    loading: \"lazy\"\n                                }, void 0, false, {\n                                    fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-full flex flex-col items-center justify-center gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"title\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"paragraph w-[90%] text-center \",\n                                        children: subTitle\n                                    }, void 0, false, {\n                                        fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, i, true, {\n                        fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute flex w-full gap-x-2 bottom-[0.5rem] left-0 right-0 items-center justify-center\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_2__.works.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-icon\",\n                            onClick: ()=>setCurrentIndex(index),\n                            children: index === currentIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuCircle_LuCircleDot_react_icons_lu__WEBPACK_IMPORTED_MODULE_5__.LuCircleDot, {}, void 0, false, {\n                                fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 39\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuCircle_LuCircleDot_react_icons_lu__WEBPACK_IMPORTED_MODULE_5__.LuCircle, {}, void 0, false, {\n                                fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 57\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/leandrojs/Documents/Programacion/Website/Web/ipure/iPureFix/modules/Slider.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Slider, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL21vZHVsZXMvU2xpZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMrQjtBQUNLO0FBQ0g7QUFDOEI7QUFDUjtBQUV2RCxNQUFNTyxTQUFTOztJQUNiLFNBQVM7SUFDVCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNUSxZQUFZLElBQU1ELGdCQUFnQkQsaUJBQWlCLElBQUlQLDZDQUFLQSxDQUFDVSxNQUFNLEdBQUcsSUFBSUgsZUFBZTtJQUMvRixNQUFNSSxZQUFZLElBQU1ILGdCQUFnQkQsaUJBQWlCUCw2Q0FBS0EsQ0FBQ1UsTUFBTSxHQUFHLElBQUksSUFBSUgsZUFBZTtJQUUvRixxQkFDRSw4REFBQ0s7UUFDQ0MsV0FBWTtrQkFFWiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNDO29CQUFPQyxTQUFTTjtvQkFBV0ksV0FBVTs4QkFDcEMsNEVBQUNYLDZHQUFhQTs7Ozs7Ozs7Ozs4QkFFaEIsOERBQUNZO29CQUFPQyxTQUFTSjtvQkFBV0UsV0FBVTs4QkFDcEMsNEVBQUNWLDhHQUFjQTs7Ozs7Ozs7OztnQkFFaEJILDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFDLFFBQWdDQzt3QkFBL0IsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFOzJCQUN2Qyw4REFBQ1Q7d0JBQ0NDLFdBQVk7d0JBQ1pTLE9BQU87NEJBQUVDLFdBQVcsR0FBdUIsT0FBcEIsQ0FBQyxNQUFNaEIsY0FBYTt3QkFBRzs7MENBRzlDLDhEQUFDSztnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2QsbURBQUtBO29DQUNKbUIsS0FBS0E7b0NBQ0xDLEtBQUtBO29DQUNMTixXQUFVO29DQUNWVyxJQUFJO29DQUNKQyxTQUFROzs7Ozs7Ozs7OzswQ0FHWiw4REFBQ2I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDYTt3Q0FBR2IsV0FBVTtrREFBU087Ozs7OztrREFDdkIsOERBQUNPO3dDQUFFZCxXQUFVO2tEQUFrQ1E7Ozs7Ozs7Ozs7Ozs7dUJBYjVDSjs7Ozs7Z0JBZUY7OEJBRVAsOERBQUNMO29CQUFJQyxXQUFVOzhCQUNaYiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDWSxHQUFHQyxzQkFDYiw4REFBQ2Y7NEJBQ0NELFdBQVU7NEJBQ1ZFLFNBQVMsSUFBTVAsZ0JBQWdCcUI7c0NBRzlCQSxVQUFVdEIsNkJBQWUsOERBQUNILG1HQUFXQTs7OzswREFBTSw4REFBQ0MsZ0dBQVFBOzs7OzsyQkFGaER3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBcERNdkI7S0FBQUE7QUFzRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TbGlkZXIuanN4P2Y4NTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHdvcmtzIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGlDaGV2cm9uTGVmdCwgSGlDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcbmltcG9ydCB7IEx1Q2lyY2xlRG90LCBMdUNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xuXG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XG4gIC8vIFNsaWRlclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggPT09IDAgPyB3b3Jrcy5sZW5ndGggLSAxIDogY3VycmVudEluZGV4IC0gMSk7XG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggPT09IHdvcmtzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BtYXgtdy1bMTIwMHB4XSByZWxhdGl2ZSBiZy1jYXJkLXYxIHctZnVsbCBtYXgtaC1bNDUwcHhdIGgtZnVsbCByb3VuZGVkLTJ4bCBwLVswLjFyZW1dIGZsZXggb3ZlcmZsb3ctaGlkZGVuIGR1cmF0aW9uLTcwMCB0ZXh0LXdoaXRlYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctdGVydGlhcnkgcm91bmRlZC0yeGwgZmxleCBweC02XCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTbGlkZX0gY2xhc3NOYW1lPVwiYnRuLWFycm93IHotNTAgY3Vyc29yLXBvaW50ZXIgZHVyYXRpb24tNTAwXCI+XG4gICAgICAgIDxIaUNoZXZyb25MZWZ0IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFNsaWRlfSBjbGFzc05hbWU9XCJidG4tYXJyb3cgei01MCBkdXJhdGlvbi01MDBcIj5cbiAgICAgICAgPEhpQ2hldnJvblJpZ2h0IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt3b3Jrcy5tYXAoKHsgc3JjLCBhbHQsIHRpdGxlLCBzdWJUaXRsZSB9LCBpKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2AgZmxleC1jb2wgbWQ6ZmxleC1yb3cgdy1mdWxsIHNsaWRlciBoLWZ1bGwgcC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBkdXJhdGlvbi03MDBgfVxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zbGF0ZTogYCR7LTEwMCAqIGN1cnJlbnRJbmRleH0lYCB9fVxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzM3NXB4XVwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtM3hsIHctZnVsbCBoLWZ1bGwgc2hhZG93LWxnIHNoYWRvdy13aGl0ZVwiXG4gICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoIHctWzkwJV0gdGV4dC1jZW50ZXIgXCI+e3N1YlRpdGxlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCB3LWZ1bGwgZ2FwLXgtMiBib3R0b20tWzAuNXJlbV0gbGVmdC0wIHJpZ2h0LTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHt3b3Jrcy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWljb25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEluZGV4KGluZGV4KX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ID09PSBjdXJyZW50SW5kZXggPyA8THVDaXJjbGVEb3QgLz4gOiA8THVDaXJjbGUgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIndvcmtzIiwidXNlU3RhdGUiLCJIaUNoZXZyb25MZWZ0IiwiSGlDaGV2cm9uUmlnaHQiLCJMdUNpcmNsZURvdCIsIkx1Q2lyY2xlIiwiU2xpZGVyIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwicHJldlNsaWRlIiwibGVuZ3RoIiwibmV4dFNsaWRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImkiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsInN1YlRpdGxlIiwic3R5bGUiLCJ0cmFuc2xhdGUiLCJmaWxsIiwibG9hZGluZyIsImgzIiwicCIsIl8iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./modules/Slider.jsx\n"));

/***/ })

});