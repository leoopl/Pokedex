"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokemon/[pokeid]",{

/***/ "./pages/pokemon/[pokeid].tsx":
/*!************************************!*\
  !*** ./pages/pokemon/[pokeid].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ poke; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pokenode_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pokenode-ts */ \"./node_modules/pokenode-ts/dist/index.js\");\n/* harmony import */ var pokenode_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pokenode_ts__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pokeid_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokeid.module.css */ \"./pages/pokemon/pokeid.module.css\");\n/* harmony import */ var _pokeid_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pokeid_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction poke() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query;\n    console.log(id.pokeid);\n    const numberID = Number(id.pokeid);\n    const [endData, setEndData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const api = new pokenode_ts__WEBPACK_IMPORTED_MODULE_2__.PokemonClient();\n            await api.getPokemonById(numberID).then((data)=>setEndData(data)).catch((error)=>console.error(error));\n        })();\n    }, [\n        numberID\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_4___default().arrow)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                    children: \"Bulbasaur\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_4___default().number),\n                    children: \"#001\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, this);\n}\n_s(poke, \"P4o9jMWhPMdI0yog9vOZRPimETU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlaWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNJO0FBQ0E7QUFDSjtBQUd6QixTQUFTSyxPQUFPOztJQUM5QixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTU8sS0FBS0QsT0FBT0UsS0FBSztJQUV2QkMsUUFBUUMsR0FBRyxDQUFDSCxHQUFHSSxNQUFNO0lBQ3JCLE1BQU1DLFdBQVdDLE9BQU9OLEdBQUdJLE1BQU07SUFFakMsTUFBTSxDQUFDRyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQTtJQUN0Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFdBQVk7WUFDWixNQUFNYyxNQUFNLElBQUlmLHNEQUFhQTtZQUM3QixNQUFNZSxJQUNKQyxjQUFjLENBQUNMLFVBQ2ZNLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUosV0FBV0ksT0FDeEJDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU1osUUFBUVksS0FBSyxDQUFDQTtRQUNoQztJQUNELEdBQUc7UUFBQ1Q7S0FBUztJQUViLHFCQUNDLDhEQUFDVTtRQUFRQyxXQUFXbkIscUVBQWU7a0JBQ2xDLDRFQUFDcUI7WUFBSUYsV0FBV25CLGtFQUFZOzs4QkFDM0IsOERBQUNxQjtvQkFBSUYsV0FBV25CLGlFQUFXOzs7Ozs7OEJBQzNCLDhEQUFDd0I7b0JBQUdMLFdBQVduQixnRUFBVTs4QkFBRTs7Ozs7OzhCQUMzQiw4REFBQzBCO29CQUFFUCxXQUFXbkIsa0VBQVk7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUM7R0EzQnVCQzs7UUFDUkwsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2Vtb24vW3Bva2VpZF0udHN4PzJkNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQb2tlbW9uQ2xpZW50IH0gZnJvbSAncG9rZW5vZGUtdHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9wb2tlaWQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBQb2tlbW9uIGZyb20gJy4uLy4uL3V0aWxzL0FwaVR5cGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9rZSgpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBpZCA9IHJvdXRlci5xdWVyeTtcclxuXHJcblx0Y29uc29sZS5sb2coaWQucG9rZWlkKTtcclxuXHRjb25zdCBudW1iZXJJRCA9IE51bWJlcihpZC5wb2tlaWQpO1xyXG5cclxuXHRjb25zdCBbZW5kRGF0YSwgc2V0RW5kRGF0YV0gPSB1c2VTdGF0ZTxQb2tlbW9uPigpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcGkgPSBuZXcgUG9rZW1vbkNsaWVudCgpO1xyXG5cdFx0XHRhd2FpdCBhcGlcclxuXHRcdFx0XHQuZ2V0UG9rZW1vbkJ5SWQobnVtYmVySUQpXHJcblx0XHRcdFx0LnRoZW4oZGF0YSA9PiBzZXRFbmREYXRhKGRhdGEpKVxyXG5cdFx0XHRcdC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcblx0XHR9KSgpO1xyXG5cdH0sIFtudW1iZXJJRF0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXJyb3d9IC8+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGUubmFtZX0+QnVsYmFzYXVyPC9oMT5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlLm51bWJlcn0+IzAwMTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUG9rZW1vbkNsaWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGUiLCJwb2tlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwb2tlaWQiLCJudW1iZXJJRCIsIk51bWJlciIsImVuZERhdGEiLCJzZXRFbmREYXRhIiwiYXBpIiwiZ2V0UG9rZW1vbkJ5SWQiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZGl2IiwiaGVhZGVyIiwiYXJyb3ciLCJoMSIsIm5hbWUiLCJwIiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokeid].tsx\n"));

/***/ })

});