/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/pokemon/[pokeid]";
exports.ids = ["pages/pokemon/[pokeid]"];
exports.modules = {

/***/ "./pages/pokemon/pokeid.module.css":
/*!*****************************************!*\
  !*** ./pages/pokemon/pokeid.module.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"pokeid_container__CxdSw\",\n\t\"header\": \"pokeid_header__dTrjh\",\n\t\"arrow\": \"pokeid_arrow__R_qtc\",\n\t\"name\": \"pokeid_name__zWc6J\",\n\t\"number\": \"pokeid_number__laz4t\",\n\t\"image\": \"pokeid_image__1mY90\",\n\t\"card\": \"pokeid_card__3TTHm\",\n\t\"type\": \"pokeid_type__6DfuM\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL3Bva2VpZC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb2tlZGV4Ly4vcGFnZXMvcG9rZW1vbi9wb2tlaWQubW9kdWxlLmNzcz85YWNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBva2VpZF9jb250YWluZXJfX0N4ZFN3XCIsXG5cdFwiaGVhZGVyXCI6IFwicG9rZWlkX2hlYWRlcl9fZFRyamhcIixcblx0XCJhcnJvd1wiOiBcInBva2VpZF9hcnJvd19fUl9xdGNcIixcblx0XCJuYW1lXCI6IFwicG9rZWlkX25hbWVfX3pXYzZKXCIsXG5cdFwibnVtYmVyXCI6IFwicG9rZWlkX251bWJlcl9fbGF6NHRcIixcblx0XCJpbWFnZVwiOiBcInBva2VpZF9pbWFnZV9fMW1ZOTBcIixcblx0XCJjYXJkXCI6IFwicG9rZWlkX2NhcmRfXzNUVEhtXCIsXG5cdFwidHlwZVwiOiBcInBva2VpZF90eXBlX182RGZ1TVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/pokeid.module.css\n");

/***/ }),

/***/ "./pages/pokemon/[pokeid].tsx":
/*!************************************!*\
  !*** ./pages/pokemon/[pokeid].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ poke)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pokeid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeid.module.css */ \"./pages/pokemon/pokeid.module.css\");\n/* harmony import */ var _pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction poke() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query;\n    // console.log(id.pokeid);\n    // const numberID = Number(id.pokeid);\n    // console.log(typeof numberID);\n    // const [endData, setEndData] = useState<Pokemon>();\n    // useEffect(() => {\n    // \t(async () => {\n    // \t\tconst api = new PokemonClient();\n    // \t\tawait api\n    // \t\t\t.getPokemonById(numberID)\n    // \t\t\t.then(data => setEndData(data))\n    // \t\t\t.catch(error => console.error(error));\n    // \t})();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().arrow)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),\n                        children: \"Bulbasaur\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().number),\n                        children: \"#001\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().type)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_pokeid_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                src: \"https://www.clipartmax.com/png/middle/96-968115_bulbasaur-png.png\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leopl\\\\Desktop\\\\bootcamp inter\\\\Pokedex\\\\pages\\\\pokemon\\\\[pokeid].tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlaWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFHQTtBQUd6QixTQUFTRSxPQUFPO0lBQzlCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNSSxLQUFLRCxPQUFPRSxLQUFLO0lBRXZCLDBCQUEwQjtJQUMxQixzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBRWhDLHFEQUFxRDtJQUNyRCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLHFDQUFxQztJQUNyQyw0Q0FBNEM7SUFDNUMsU0FBUztJQUNULFVBQVU7SUFFVixxQkFDQyw4REFBQ0M7UUFBUUMsV0FBV04scUVBQWU7OzBCQUNsQyw4REFBQ1E7Z0JBQUlGLFdBQVdOLGtFQUFZOztrQ0FDM0IsOERBQUNRO3dCQUFJRixXQUFXTixpRUFBVzs7Ozs7O2tDQUMzQiw4REFBQ1c7d0JBQUdMLFdBQVdOLGdFQUFVO2tDQUFFOzs7Ozs7a0NBQzNCLDhEQUFDYTt3QkFBRVAsV0FBV04sa0VBQVk7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNLO2dCQUFRQyxXQUFXTixnRUFBVTswQkFDN0IsNEVBQUNRO29CQUFJRixXQUFXTixnRUFBVTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDaUI7Z0JBQ0FYLFdBQVdOLGlFQUFXO2dCQUN0Qm1CLEtBQUk7Ozs7Ozs7Ozs7OztBQUlSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb2tlZGV4Ly4vcGFnZXMvcG9rZW1vbi9bcG9rZWlkXS50c3g/MmQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFBva2Vtb25DbGllbnQgfSBmcm9tICdwb2tlbm9kZS10cyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3Bva2VpZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFBva2Vtb24gZnJvbSAnLi4vLi4vdXRpbHMvQXBpVHlwZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb2tlKCkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuXHQvLyBjb25zb2xlLmxvZyhpZC5wb2tlaWQpO1xyXG5cdC8vIGNvbnN0IG51bWJlcklEID0gTnVtYmVyKGlkLnBva2VpZCk7XHJcblx0Ly8gY29uc29sZS5sb2codHlwZW9mIG51bWJlcklEKTtcclxuXHJcblx0Ly8gY29uc3QgW2VuZERhdGEsIHNldEVuZERhdGFdID0gdXNlU3RhdGU8UG9rZW1vbj4oKTtcclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0KGFzeW5jICgpID0+IHtcclxuXHQvLyBcdFx0Y29uc3QgYXBpID0gbmV3IFBva2Vtb25DbGllbnQoKTtcclxuXHQvLyBcdFx0YXdhaXQgYXBpXHJcblx0Ly8gXHRcdFx0LmdldFBva2Vtb25CeUlkKG51bWJlcklEKVxyXG5cdC8vIFx0XHRcdC50aGVuKGRhdGEgPT4gc2V0RW5kRGF0YShkYXRhKSlcclxuXHQvLyBcdFx0XHQuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG5cdC8vIFx0fSkoKTtcclxuXHQvLyB9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hcnJvd30gLz5cclxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZS5uYW1lfT5CdWxiYXNhdXI8L2gxPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGUubnVtYmVyfT4jMDAxPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5jYXJkfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUudHlwZX0+PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0PGltZ1xyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGUuaW1hZ2V9XHJcblx0XHRcdFx0c3JjPVwiaHR0cHM6Ly93d3cuY2xpcGFydG1heC5jb20vcG5nL21pZGRsZS85Ni05NjgxMTVfYnVsYmFzYXVyLXBuZy5wbmdcIlxyXG5cdFx0XHQvPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlIiwicG9rZSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZGl2IiwiaGVhZGVyIiwiYXJyb3ciLCJoMSIsIm5hbWUiLCJwIiwibnVtYmVyIiwiY2FyZCIsInR5cGUiLCJpbWciLCJpbWFnZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokeid].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[pokeid].tsx"));
module.exports = __webpack_exports__;

})();