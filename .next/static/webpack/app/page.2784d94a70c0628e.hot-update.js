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

/***/ "(app-pages-browser)/./src/core/components/header/main.tsx":
/*!*********************************************!*\
  !*** ./src/core/components/header/main.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-intl */ \"(app-pages-browser)/./node_modules/next-intl/dist/development/index.react-client.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _remixicon_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @remixicon/react */ \"(app-pages-browser)/./node_modules/@remixicon/react/index.mjs\");\n/* harmony import */ var _core_contexts_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/contexts/theme */ \"(app-pages-browser)/./src/core/contexts/theme.tsx\");\n/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../brand */ \"(app-pages-browser)/./src/core/components/brand.tsx\");\n/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/utils */ \"(app-pages-browser)/./src/core/utils/index.ts\");\n/* harmony import */ var _core_constants_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/constants/constant */ \"(app-pages-browser)/./src/core/constants/constant.ts\");\n/**\r\n * @name MainHeader\r\n * @file main.tsx\r\n * @description music main pages header component\r\n */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Modules\n\n\n\n\n\n// Contexts\n\n// Components\n\n// Utilities\n\n\nconst MainHeader = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const locale = (0,next_intl__WEBPACK_IMPORTED_MODULE_8__.useTranslations)();\n    const header = (0,next_intl__WEBPACK_IMPORTED_MODULE_8__.useTranslations)(\"header\");\n    const { replaceClassName, buttonColor } = (0,_core_contexts_theme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const btnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Change `music` link to `login` is user not exist\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const user = JSON.parse(localStorage.getItem(_core_constants_constant__WEBPACK_IMPORTED_MODULE_7__.USER_KEY));\n        if (navRef.current) {\n            const links = document.querySelectorAll(\".nav-link\");\n            links.forEach((link)=>{\n                const href = link.getAttribute(\"href\");\n                if (href === \"/music\" || href === \"/auth/login\") {\n                    link.setAttribute(\"href\", !user ? \"/auth/login\" : href);\n                }\n            });\n        }\n    }, [\n        navRef.current\n    ]);\n    // Collapse menu in mobile\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const btn = btnRef.current;\n        const nav = navRef.current;\n        if (btn && nav) {\n            (0,_core_utils__WEBPACK_IMPORTED_MODULE_6__.addClass)(btn, \"collapsed\");\n            btn.setAttribute(\"aria-expanded\", \"false\");\n            (0,_core_utils__WEBPACK_IMPORTED_MODULE_6__.removeClass)(nav, \"show\");\n        }\n    }, [\n        pathname\n    ]);\n    /**\r\n   *\r\n   * Navbar link view\r\n   * @param nav\r\n   * @returns\r\n   */ const navLink = (nav)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"nav-link\",\n                href: nav.href + (nav.fragment ? \"#\".concat(nav.fragment) : \"\"),\n                children: header(nav.name)\n            }, void 0, false, {\n                fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined)\n        }, nav.name, false, {\n            fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined);\n    };\n    return(// header [[ Find at scss/framework/header.scss ]]\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        id: \"main_header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navbar navbar-expand-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_brand__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex abtn btn-warninglign-items-center navbar-ex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: buttonColor,\n                                href: \"/auth\",\n                                children: locale(\"try_it_free\")\n                            }, void 0, false, {\n                                fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                ref: btnRef,\n                                className: replaceClassName(\"navbar-toggler ms-3 ms-sm-4\"),\n                                type: \"button\",\n                                \"data-bs-toggle\": \"collapse\",\n                                \"data-bs-target\": \"#top_navbar\",\n                                \"aria-controls\": \"top_navbar\",\n                                \"aria-expanded\": \"false\",\n                                \"aria-label\": \"Toggle navigation\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_remixicon_react__WEBPACK_IMPORTED_MODULE_9__.RiMenu3Fill, {}, void 0, false, {\n                                    fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: navRef,\n                        className: \"collapse navbar-collapse\",\n                        id: \"top_navbar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"navbar-nav mt-4 mt-lg-0 mx-auto fw-semibold\",\n                            children: _core_constants_constant__WEBPACK_IMPORTED_MODULE_7__.NAVBAR_LINK.map((nav)=>navLink(nav))\n                        }, void 0, false, {\n                            fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/cubicus-pc/Projects/MusicStream/themeforest-RpP0larL-listen-nextjs-music-streaming-app/listen/theme/src/core/components/header/main.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined));\n};\n_s(MainHeader, \"U/OYASo9jES/qqdBrjdxt1xUikw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_intl__WEBPACK_IMPORTED_MODULE_8__.useTranslations,\n        next_intl__WEBPACK_IMPORTED_MODULE_8__.useTranslations,\n        _core_contexts_theme__WEBPACK_IMPORTED_MODULE_4__.useTheme\n    ];\n});\n_c = MainHeader;\nMainHeader.displayName = \"MainHeader\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainHeader);\nvar _c;\n$RefreshReg$(_c, \"MainHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL21haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztDQUlDOztBQUdELFVBQVU7QUFDdUM7QUFDcEI7QUFDaUI7QUFDRjtBQUNHO0FBRS9DLFdBQVc7QUFDc0M7QUFFakQsYUFBYTtBQUNnQjtBQUU3QixZQUFZO0FBQ3lDO0FBQ2E7QUFHbEUsTUFBTWEsYUFBdUI7O0lBQzNCLE1BQU1DLFdBQVdWLDREQUFXQTtJQUM1QixNQUFNVyxTQUFTViwwREFBZUE7SUFDOUIsTUFBTVcsU0FBU1gsMERBQWVBLENBQUM7SUFDL0IsTUFBTSxFQUFFWSxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFLEdBQUdYLDhEQUFRQTtJQUNsRCxNQUFNWSxTQUFTakIsNkNBQU1BLENBQXdCO0lBQzdDLE1BQU1rQixTQUFTbEIsNkNBQU1BLENBQTJCO0lBRWhELG1EQUFtRDtJQUNuREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsT0FBT0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUNiLDhEQUFRQTtRQUVyRCxJQUFJTyxPQUFPTyxPQUFPLEVBQUU7WUFDbEIsTUFBTUMsUUFBUUMsU0FBU0MsZ0JBQWdCLENBQUM7WUFDeENGLE1BQU1HLE9BQU8sQ0FBQyxDQUFDQztnQkFDYixNQUFNQyxPQUFPRCxLQUFLRSxZQUFZLENBQUM7Z0JBQy9CLElBQUlELFNBQVMsWUFBWUEsU0FBUyxlQUFlO29CQUMvQ0QsS0FBS0csWUFBWSxDQUFDLFFBQVEsQ0FBQ2IsT0FBTyxnQkFBaUJXO2dCQUNyRDtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNiLE9BQU9PLE9BQU87S0FBQztJQUVuQiwwQkFBMEI7SUFDMUJ6QixnREFBU0EsQ0FBQztRQUNSLE1BQU1rQyxNQUFNZixPQUFPTSxPQUFPO1FBQzFCLE1BQU1VLE1BQU1qQixPQUFPTyxPQUFPO1FBQzFCLElBQUlTLE9BQU9DLEtBQUs7WUFDZDNCLHFEQUFRQSxDQUFDMEIsS0FBSztZQUNkQSxJQUFJRCxZQUFZLENBQUMsaUJBQWlCO1lBQ2xDeEIsd0RBQVdBLENBQUMwQixLQUFLO1FBQ25CO0lBQ0YsR0FBRztRQUFDdEI7S0FBUztJQUViOzs7OztHQUtDLEdBQ0QsTUFBTXVCLFVBQVUsQ0FBQ0Q7UUFDZixxQkFDRSw4REFBQ0U7WUFBa0JDLFdBQVU7c0JBQzNCLDRFQUFDcEMsaURBQUlBO2dCQUNIb0MsV0FBVTtnQkFDVlAsTUFBTUksSUFBSUosSUFBSSxHQUFJSSxDQUFBQSxJQUFJSSxRQUFRLEdBQUcsSUFBaUIsT0FBYkosSUFBSUksUUFBUSxJQUFLLEVBQUM7MEJBRXREeEIsT0FBT29CLElBQUlLLElBQUk7Ozs7OztXQUxYTCxJQUFJSyxJQUFJOzs7OztJQVNyQjtJQUVBLE9BQ0Usa0RBQWtEO2tCQUNsRCw4REFBQ3pCO1FBQU8wQixJQUFHO2tCQUNULDRFQUFDQztZQUFJSixXQUFVO3NCQUNiLDRFQUFDSDtnQkFBSUcsV0FBVTs7a0NBQ2IsOERBQUMvQiw4Q0FBS0E7Ozs7O2tDQUNOLDhEQUFDbUM7d0JBQUlKLFdBQVU7OzBDQUNiLDhEQUFDcEMsaURBQUlBO2dDQUFDb0MsV0FBV3JCO2dDQUF1QmMsTUFBSzswQ0FDMUNqQixPQUFPOzs7Ozs7MENBRVYsOERBQUM2QjtnQ0FDQ0MsS0FBS3pCO2dDQUNMbUIsV0FBV3RCLGlCQUFpQjtnQ0FDNUI2QixNQUFLO2dDQUNMQyxrQkFBZTtnQ0FDZkMsa0JBQWU7Z0NBQ2ZDLGlCQUFjO2dDQUNkQyxpQkFBYztnQ0FDZEMsY0FBVzswQ0FFWCw0RUFBQzdDLHlEQUFXQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNxQzt3QkFDQ0UsS0FBSzFCO3dCQUNMb0IsV0FBVTt3QkFDVkcsSUFBRztrQ0FFSCw0RUFBQ1U7NEJBQUdiLFdBQVU7c0NBQ1g1QixpRUFBV0EsQ0FBQzBDLEdBQUcsQ0FBQyxDQUFDakIsTUFBUUMsUUFBUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRDtHQXpGTXZCOztRQUNhVCx3REFBV0E7UUFDYkMsc0RBQWVBO1FBQ2ZBLHNEQUFlQTtRQUNZRSwwREFBUUE7OztLQUo5Q007QUEyRk5BLFdBQVd5QyxXQUFXLEdBQUc7QUFDekIsK0RBQWV6QyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL21haW4udHN4P2U0MWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIE1haW5IZWFkZXJcclxuICogQGZpbGUgbWFpbi50c3hcclxuICogQGRlc2NyaXB0aW9uIG11c2ljIG1haW4gcGFnZXMgaGVhZGVyIGNvbXBvbmVudFxyXG4gKi9cclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG4vLyBNb2R1bGVzXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tIFwibmV4dC1pbnRsXCI7XHJcbmltcG9ydCB7IFJpTWVudTNGaWxsIH0gZnJvbSBcIkByZW1peGljb24vcmVhY3RcIjtcclxuXHJcbi8vIENvbnRleHRzXHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0cy90aGVtZVwiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgQnJhbmQgZnJvbSBcIi4uL2JyYW5kXCI7XHJcblxyXG4vLyBVdGlsaXRpZXNcclxuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSBcIkAvY29yZS91dGlsc1wiO1xyXG5pbXBvcnQgeyBOQVZCQVJfTElOSywgVVNFUl9LRVkgfSBmcm9tIFwiQC9jb3JlL2NvbnN0YW50cy9jb25zdGFudFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rVHlwZXMgfSBmcm9tIFwiQC9jb3JlL3R5cGVzXCI7XHJcblxyXG5jb25zdCBNYWluSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgbG9jYWxlID0gdXNlVHJhbnNsYXRpb25zKCk7XHJcbiAgY29uc3QgaGVhZGVyID0gdXNlVHJhbnNsYXRpb25zKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IHsgcmVwbGFjZUNsYXNzTmFtZSwgYnV0dG9uQ29sb3IgfSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgYnRuUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIC8vIENoYW5nZSBgbXVzaWNgIGxpbmsgdG8gYGxvZ2luYCBpcyB1c2VyIG5vdCBleGlzdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVU0VSX0tFWSkgYXMgc3RyaW5nKTtcclxuXHJcbiAgICBpZiAobmF2UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rXCIpO1xyXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgICAgICBpZiAoaHJlZiA9PT0gXCIvbXVzaWNcIiB8fCBocmVmID09PSBcIi9hdXRoL2xvZ2luXCIpIHtcclxuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCAhdXNlciA/IFwiL2F1dGgvbG9naW5cIiA6IChocmVmIGFzIHN0cmluZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW25hdlJlZi5jdXJyZW50XSk7XHJcblxyXG4gIC8vIENvbGxhcHNlIG1lbnUgaW4gbW9iaWxlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGJ0biA9IGJ0blJlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgbmF2ID0gbmF2UmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoYnRuICYmIG5hdikge1xyXG4gICAgICBhZGRDbGFzcyhidG4sIFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICByZW1vdmVDbGFzcyhuYXYsIFwic2hvd1wiKTtcclxuICAgIH1cclxuICB9LCBbcGF0aG5hbWVdKTtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBOYXZiYXIgbGluayB2aWV3XHJcbiAgICogQHBhcmFtIG5hdlxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgY29uc3QgbmF2TGluayA9IChuYXY6IE5hdkxpbmtUeXBlcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIGtleT17bmF2Lm5hbWV9IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgIGhyZWY9e25hdi5ocmVmICsgKG5hdi5mcmFnbWVudCA/IGAjJHtuYXYuZnJhZ21lbnR9YCA6IFwiXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtoZWFkZXIobmF2Lm5hbWUpfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIGhlYWRlciBbWyBGaW5kIGF0IHNjc3MvZnJhbWV3b3JrL2hlYWRlci5zY3NzIF1dXHJcbiAgICA8aGVhZGVyIGlkPVwibWFpbl9oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XHJcbiAgICAgICAgICA8QnJhbmQgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFidG4gYnRuLXdhcm5pbmdsaWduLWl0ZW1zLWNlbnRlciBuYXZiYXItZXhcIj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtidXR0b25Db2xvciBhcyBzdHJpbmd9IGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICAgIHtsb2NhbGUoXCJ0cnlfaXRfZnJlZVwiKX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgcmVmPXtidG5SZWZ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyZXBsYWNlQ2xhc3NOYW1lKFwibmF2YmFyLXRvZ2dsZXIgbXMtMyBtcy1zbS00XCIpfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI3RvcF9uYXZiYXJcIlxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJ0b3BfbmF2YmFyXCJcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UmlNZW51M0ZpbGwgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtuYXZSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgIGlkPVwidG9wX25hdmJhclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG10LTQgbXQtbGctMCBteC1hdXRvIGZ3LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAge05BVkJBUl9MSU5LLm1hcCgobmF2KSA9PiBuYXZMaW5rKG5hdikpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5IZWFkZXIuZGlzcGxheU5hbWUgPSBcIk1haW5IZWFkZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGluayIsInVzZVBhdGhuYW1lIiwidXNlVHJhbnNsYXRpb25zIiwiUmlNZW51M0ZpbGwiLCJ1c2VUaGVtZSIsIkJyYW5kIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIk5BVkJBUl9MSU5LIiwiVVNFUl9LRVkiLCJNYWluSGVhZGVyIiwicGF0aG5hbWUiLCJsb2NhbGUiLCJoZWFkZXIiLCJyZXBsYWNlQ2xhc3NOYW1lIiwiYnV0dG9uQ29sb3IiLCJuYXZSZWYiLCJidG5SZWYiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnQiLCJsaW5rcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImJ0biIsIm5hdiIsIm5hdkxpbmsiLCJsaSIsImNsYXNzTmFtZSIsImZyYWdtZW50IiwibmFtZSIsImlkIiwiZGl2IiwiYnV0dG9uIiwicmVmIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtbGFiZWwiLCJ1bCIsIm1hcCIsImRpc3BsYXlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/core/components/header/main.tsx\n"));

/***/ })

});