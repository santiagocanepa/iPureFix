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

/***/ "(app-pages-browser)/./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   features: function() { return /* binding */ features; },\n/* harmony export */   nav: function() { return /* binding */ nav; },\n/* harmony export */   rows: function() { return /* binding */ rows; },\n/* harmony export */   services: function() { return /* binding */ services; },\n/* harmony export */   works: function() { return /* binding */ works; }\n/* harmony export */ });\nconst nav = [\n    {\n        title: \"Inicio\",\n        path: \"home\"\n    },\n    {\n        title: \"Servicios\",\n        path: \"services\"\n    },\n    {\n        title: \"Sobre\",\n        path: \"about\"\n    },\n    {\n        title: \"Contacto\",\n        path: \"contact\"\n    }\n];\nconst services = [\n    {\n        title: \"Bateria\",\n        description: \"Arreglo de bateria\",\n        img: \"/assets/bateria-baja.png\",\n        alt: \"Bateria de celular\"\n    },\n    {\n        title: \"Reparaci\\xf3n\",\n        description: \"Reparaci\\xf3n de dispositivos\",\n        img: \"/assets/logoApple.png\",\n        alt: \"Logo de Apple\"\n    },\n    {\n        title: \"Pantalla\",\n        description: \"Remplazo de pantalla\",\n        img: \"/assets/screen.png\",\n        alt: \"Pantalla de celular\"\n    }\n];\nconst features = [\n    {\n        img: \"/assets/5.png\",\n        alt: \"Logo de envio\",\n        title: \"Servicio Expr\\xe9s\",\n        desc: \"Entendemos la urgencia. Reparamos tu iPhone r\\xe1pidamente para que puedas retomar tu d\\xeda.\"\n    },\n    {\n        img: \"/assets/6.png\",\n        alt: \"Logo de descuento\",\n        title: \"Seguridad y Confianza\",\n        desc: \"Tu dispositivo est\\xe1 en buenas manos. Nuestros t\\xe9cnicos son expertos certificados.\"\n    },\n    {\n        img: \"/assets/3.png\",\n        alt: \"Logo de estrella\",\n        title: \"Garantia de instalaci\\xf3n\",\n        desc: \"Ofrecemos garantia de 6 meses a 1 a\\xf1o por reparaci\\xf3n\"\n    }\n];\nconst works = [\n    {\n        src: \"/Desplegabl/repuestos.png\",\n        alt: \"Imagen de servicio\",\n        title: \"Sin filas ni espera\",\n        subTitle: \"Valoramos cada segundo de tu tiempo. Reparamos tu iPhone al instante, justo en la comodidad de tu hogar. Olv\\xeddate de las filas y las esperas; nos acercamos a ti para garantizar una experiencia sin contratiempos.\"\n    },\n    {\n        src: \"/Desplegabl/repuestos.png\",\n        alt: \"Imange de Repuesto\",\n        title: \"Calidad en repuestos\",\n        subTitle: \"Importamos directamente repuestos de alta calidad. No solo aseguramos la mejor compatibilidad y rendimiento para tu iPhone, tambi\\xe9n lo hacemos al mejor precio. Calidad y econom\\xeda, juntas para ti.\"\n    },\n    {\n        src: \"/Desplegabl/repuestos.png\",\n        alt: \"Imagen de Garantia\",\n        title: \"Garantia en cada reparaci\\xf3n\",\n        subTitle: \"Brindamos garant\\xeda de 6 meses a 1 a\\xf1o en todas nuestras reparaciones. Nuestro compromiso es con tu tranquilidad.\"\n    }\n];\nconst rows = [\n    {\n        img: \"/Services/bat.png\",\n        alt: \"logo de bateria\",\n        title: \"Reparaci\\xf3n y cambio de bateria\"\n    },\n    {\n        img: \"/Services/pan.png\",\n        alt: \"logo de pantalla\",\n        title: \"Reparaci\\xf3n y cambio de Pantalla\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnN0YW50cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLE1BQU1BLE1BQU07SUFDakI7UUFDRUMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBRUssTUFBTUMsV0FBVztJQUN0QjtRQUNFRixPQUFPO1FBQ1BHLGFBQWE7UUFDYkMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQTtRQUNFTCxPQUFPO1FBQ1BHLGFBQWE7UUFDYkMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQTtRQUNFTCxPQUFPO1FBQ1BHLGFBQWE7UUFDYkMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDO0FBRUssTUFBTUMsV0FBVztJQUN0QjtRQUNFRixLQUFLO1FBQ0xDLEtBQUs7UUFDTEwsT0FBTztRQUNQTyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxLQUFLO1FBQ0xDLEtBQUs7UUFDTEwsT0FBTztRQUNQTyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxLQUFLO1FBQ0xDLEtBQUs7UUFDTEwsT0FBTztRQUNQTyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBR0ssTUFBTUMsUUFBUTtJQUNuQjtRQUNFQyxLQUFLO1FBQ0xKLEtBQUs7UUFDTEwsT0FBTztRQUNQVSxVQUFVO0lBQ1o7SUFDQTtRQUNFRCxLQUFLO1FBQ0xKLEtBQUs7UUFDTEwsT0FBTztRQUNQVSxVQUFVO0lBQ1o7SUFDQTtRQUNFRCxLQUFLO1FBQ0xKLEtBQUs7UUFDTEwsT0FBTztRQUNQVSxVQUFVO0lBQ1o7Q0FDRCxDQUFDO0FBR0ssTUFBTUMsT0FBTztJQUNsQjtRQUNFUCxLQUFLO1FBQ0xDLEtBQUs7UUFDTEwsT0FBTztJQUNUO0lBQ0E7UUFDRUksS0FBSztRQUNMQyxLQUFLO1FBQ0xMLE9BQU87SUFDVDtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2luZGV4LmpzPzM3MzciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5hdiA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkluaWNpb1wiLFxuICAgIHBhdGg6IFwiaG9tZVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU2VydmljaW9zXCIsXG4gICAgcGF0aDogXCJzZXJ2aWNlc1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU29icmVcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb250YWN0b1wiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQmF0ZXJpYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFycmVnbG8gZGUgYmF0ZXJpYVwiLFxuICAgIGltZzogXCIvYXNzZXRzL2JhdGVyaWEtYmFqYS5wbmdcIixcbiAgICBhbHQ6IFwiQmF0ZXJpYSBkZSBjZWx1bGFyXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJSZXBhcmFjacOzblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlcGFyYWNpw7NuIGRlIGRpc3Bvc2l0aXZvc1wiLFxuICAgIGltZzogXCIvYXNzZXRzL2xvZ29BcHBsZS5wbmdcIixcbiAgICBhbHQ6IFwiTG9nbyBkZSBBcHBsZVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGFudGFsbGFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZW1wbGF6byBkZSBwYW50YWxsYVwiLFxuICAgIGltZzogXCIvYXNzZXRzL3NjcmVlbi5wbmdcIixcbiAgICBhbHQ6IFwiUGFudGFsbGEgZGUgY2VsdWxhclwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGZlYXR1cmVzID0gW1xuICB7XG4gICAgaW1nOiBcIi9hc3NldHMvNS5wbmdcIixcbiAgICBhbHQ6IFwiTG9nbyBkZSBlbnZpb1wiLFxuICAgIHRpdGxlOiBcIlNlcnZpY2lvIEV4cHLDqXNcIixcbiAgICBkZXNjOiBcIkVudGVuZGVtb3MgbGEgdXJnZW5jaWEuIFJlcGFyYW1vcyB0dSBpUGhvbmUgcsOhcGlkYW1lbnRlIHBhcmEgcXVlIHB1ZWRhcyByZXRvbWFyIHR1IGTDrWEuXCIsXG4gIH0sXG4gIHtcbiAgICBpbWc6IFwiL2Fzc2V0cy82LnBuZ1wiLFxuICAgIGFsdDogXCJMb2dvIGRlIGRlc2N1ZW50b1wiLFxuICAgIHRpdGxlOiBcIlNlZ3VyaWRhZCB5IENvbmZpYW56YVwiLFxuICAgIGRlc2M6IFwiVHUgZGlzcG9zaXRpdm8gZXN0w6EgZW4gYnVlbmFzIG1hbm9zLiBOdWVzdHJvcyB0w6ljbmljb3Mgc29uIGV4cGVydG9zIGNlcnRpZmljYWRvcy5cIixcbiAgfSxcbiAge1xuICAgIGltZzogXCIvYXNzZXRzLzMucG5nXCIsXG4gICAgYWx0OiBcIkxvZ28gZGUgZXN0cmVsbGFcIixcbiAgICB0aXRsZTogXCJHYXJhbnRpYSBkZSBpbnN0YWxhY2nDs25cIixcbiAgICBkZXNjOiBcIk9mcmVjZW1vcyBnYXJhbnRpYSBkZSA2IG1lc2VzIGEgMSBhw7FvIHBvciByZXBhcmFjacOzblwiLFxuICB9LFxuXTtcblxuXG5leHBvcnQgY29uc3Qgd29ya3MgPSBbXG4gIHtcbiAgICBzcmM6IFwiL0Rlc3BsZWdhYmwvcmVwdWVzdG9zLnBuZ1wiLFxuICAgIGFsdDogXCJJbWFnZW4gZGUgc2VydmljaW9cIixcbiAgICB0aXRsZTogXCJTaW4gZmlsYXMgbmkgZXNwZXJhXCIsXG4gICAgc3ViVGl0bGU6IFwiVmFsb3JhbW9zIGNhZGEgc2VndW5kbyBkZSB0dSB0aWVtcG8uIFJlcGFyYW1vcyB0dSBpUGhvbmUgYWwgaW5zdGFudGUsIGp1c3RvIGVuIGxhIGNvbW9kaWRhZCBkZSB0dSBob2dhci4gT2x2w61kYXRlIGRlIGxhcyBmaWxhcyB5IGxhcyBlc3BlcmFzOyBub3MgYWNlcmNhbW9zIGEgdGkgcGFyYSBnYXJhbnRpemFyIHVuYSBleHBlcmllbmNpYSBzaW4gY29udHJhdGllbXBvcy5cIlxuICB9LFxuICB7XG4gICAgc3JjOiBcIi9EZXNwbGVnYWJsL3JlcHVlc3Rvcy5wbmdcIixcbiAgICBhbHQ6IFwiSW1hbmdlIGRlIFJlcHVlc3RvXCIsXG4gICAgdGl0bGU6IFwiQ2FsaWRhZCBlbiByZXB1ZXN0b3NcIixcbiAgICBzdWJUaXRsZTogXCJJbXBvcnRhbW9zIGRpcmVjdGFtZW50ZSByZXB1ZXN0b3MgZGUgYWx0YSBjYWxpZGFkLiBObyBzb2xvIGFzZWd1cmFtb3MgbGEgbWVqb3IgY29tcGF0aWJpbGlkYWQgeSByZW5kaW1pZW50byBwYXJhIHR1IGlQaG9uZSwgdGFtYmnDqW4gbG8gaGFjZW1vcyBhbCBtZWpvciBwcmVjaW8uIENhbGlkYWQgeSBlY29ub23DrWEsIGp1bnRhcyBwYXJhIHRpLlwiXG4gIH0sXG4gIHtcbiAgICBzcmM6IFwiL0Rlc3BsZWdhYmwvcmVwdWVzdG9zLnBuZ1wiLFxuICAgIGFsdDogXCJJbWFnZW4gZGUgR2FyYW50aWFcIixcbiAgICB0aXRsZTogXCJHYXJhbnRpYSBlbiBjYWRhIHJlcGFyYWNpw7NuXCIsXG4gICAgc3ViVGl0bGU6IFwiQnJpbmRhbW9zIGdhcmFudMOtYSBkZSA2IG1lc2VzIGEgMSBhw7FvIGVuIHRvZGFzIG51ZXN0cmFzIHJlcGFyYWNpb25lcy4gTnVlc3RybyBjb21wcm9taXNvIGVzIGNvbiB0dSB0cmFucXVpbGlkYWQuXCJcbiAgfSxcbl07XG5cblxuZXhwb3J0IGNvbnN0IHJvd3MgPSBbXG4gIHtcbiAgICBpbWc6IFwiL1NlcnZpY2VzL2JhdC5wbmdcIixcbiAgICBhbHQ6IFwibG9nbyBkZSBiYXRlcmlhXCIsXG4gICAgdGl0bGU6IFwiUmVwYXJhY2nDs24geSBjYW1iaW8gZGUgYmF0ZXJpYVwiXG4gIH0sXG4gIHtcbiAgICBpbWc6IFwiL1NlcnZpY2VzL3Bhbi5wbmdcIixcbiAgICBhbHQ6IFwibG9nbyBkZSBwYW50YWxsYVwiLFxuICAgIHRpdGxlOiBcIlJlcGFyYWNpw7NuIHkgY2FtYmlvIGRlIFBhbnRhbGxhXCJcbiAgfSxcbl07Il0sIm5hbWVzIjpbIm5hdiIsInRpdGxlIiwicGF0aCIsInNlcnZpY2VzIiwiZGVzY3JpcHRpb24iLCJpbWciLCJhbHQiLCJmZWF0dXJlcyIsImRlc2MiLCJ3b3JrcyIsInNyYyIsInN1YlRpdGxlIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./constants/index.js\n"));

/***/ })

});