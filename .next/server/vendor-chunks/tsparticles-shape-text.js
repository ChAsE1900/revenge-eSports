"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-text";
exports.ids = ["vendor-chunks/tsparticles-shape-text"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-text/esm/TextDrawer.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-shape-text/esm/TextDrawer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextDrawer: () => (/* binding */ TextDrawer),\n/* harmony export */   validTypes: () => (/* binding */ validTypes)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/Utils.js\");\n\nconst validTypes = [\"text\", \"character\", \"char\"];\nclass TextDrawer {\n    draw(context, particle, radius, opacity) {\n        const character = particle.shapeData;\n        if (character === undefined) {\n            return;\n        }\n        const textData = character.value;\n        if (textData === undefined) {\n            return;\n        }\n        if (particle.text === undefined) {\n            particle.text = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.itemFromSingleOrMultiple)(textData, particle.randomIndexData);\n        }\n        const text = particle.text, style = character.style ?? \"\", weight = character.weight ?? \"400\", size = Math.round(radius) * 2, font = character.font ?? \"Verdana\", fill = particle.fill, offsetX = (text.length * radius) / 2;\n        context.font = `${style} ${weight} ${size}px \"${font}\"`;\n        const pos = {\n            x: -offsetX,\n            y: radius / 2,\n        };\n        context.globalAlpha = opacity;\n        if (fill) {\n            context.fillText(text, pos.x, pos.y);\n        }\n        else {\n            context.strokeText(text, pos.x, pos.y);\n        }\n        context.globalAlpha = 1;\n    }\n    getSidesCount() {\n        return 12;\n    }\n    async init(container) {\n        const options = container.actualOptions;\n        if (validTypes.find((t) => (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.isInArray)(t, options.particles.shape.type))) {\n            const shapeOptions = validTypes\n                .map((t) => options.particles.shape.options[t])\n                .find((t) => !!t), promises = [];\n            (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.executeOnSingleOrMultiple)(shapeOptions, (shape) => {\n                promises.push((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.loadFont)(shape.font, shape.weight));\n            });\n            await Promise.all(promises);\n        }\n    }\n    particleInit(container, particle) {\n        if (!particle.shape || !validTypes.includes(particle.shape)) {\n            return;\n        }\n        const character = particle.shapeData;\n        if (character === undefined) {\n            return;\n        }\n        const textData = character.value;\n        if (textData === undefined) {\n            return;\n        }\n        particle.text = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.itemFromSingleOrMultiple)(textData, particle.randomIndexData);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtdGV4dC9lc20vVGV4dERyYXdlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0c7QUFDeEc7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRFQUF3QjtBQUNwRDtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxNQUFNLEtBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDZEQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkVBQXlCO0FBQ3JDLDhCQUE4Qiw0REFBUTtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRFQUF3QjtBQUNoRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS10ZXh0L2VzbS9UZXh0RHJhd2VyLmpzP2I5OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhlY3V0ZU9uU2luZ2xlT3JNdWx0aXBsZSwgaXNJbkFycmF5LCBpdGVtRnJvbVNpbmdsZU9yTXVsdGlwbGUsIGxvYWRGb250LCB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjb25zdCB2YWxpZFR5cGVzID0gW1widGV4dFwiLCBcImNoYXJhY3RlclwiLCBcImNoYXJcIl07XG5leHBvcnQgY2xhc3MgVGV4dERyYXdlciB7XG4gICAgZHJhdyhjb250ZXh0LCBwYXJ0aWNsZSwgcmFkaXVzLCBvcGFjaXR5KSB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IHBhcnRpY2xlLnNoYXBlRGF0YTtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dERhdGEgPSBjaGFyYWN0ZXIudmFsdWU7XG4gICAgICAgIGlmICh0ZXh0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRpY2xlLnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFydGljbGUudGV4dCA9IGl0ZW1Gcm9tU2luZ2xlT3JNdWx0aXBsZSh0ZXh0RGF0YSwgcGFydGljbGUucmFuZG9tSW5kZXhEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZXh0ID0gcGFydGljbGUudGV4dCwgc3R5bGUgPSBjaGFyYWN0ZXIuc3R5bGUgPz8gXCJcIiwgd2VpZ2h0ID0gY2hhcmFjdGVyLndlaWdodCA/PyBcIjQwMFwiLCBzaXplID0gTWF0aC5yb3VuZChyYWRpdXMpICogMiwgZm9udCA9IGNoYXJhY3Rlci5mb250ID8/IFwiVmVyZGFuYVwiLCBmaWxsID0gcGFydGljbGUuZmlsbCwgb2Zmc2V0WCA9ICh0ZXh0Lmxlbmd0aCAqIHJhZGl1cykgLyAyO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBgJHtzdHlsZX0gJHt3ZWlnaHR9ICR7c2l6ZX1weCBcIiR7Zm9udH1cImA7XG4gICAgICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgICAgICAgIHg6IC1vZmZzZXRYLFxuICAgICAgICAgICAgeTogcmFkaXVzIC8gMixcbiAgICAgICAgfTtcbiAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRleHQsIHBvcy54LCBwb3MueSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVRleHQodGV4dCwgcG9zLngsIHBvcy55KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIDEyO1xuICAgIH1cbiAgICBhc3luYyBpbml0KGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnM7XG4gICAgICAgIGlmICh2YWxpZFR5cGVzLmZpbmQoKHQpID0+IGlzSW5BcnJheSh0LCBvcHRpb25zLnBhcnRpY2xlcy5zaGFwZS50eXBlKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlT3B0aW9ucyA9IHZhbGlkVHlwZXNcbiAgICAgICAgICAgICAgICAubWFwKCh0KSA9PiBvcHRpb25zLnBhcnRpY2xlcy5zaGFwZS5vcHRpb25zW3RdKVxuICAgICAgICAgICAgICAgIC5maW5kKCh0KSA9PiAhIXQpLCBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZXhlY3V0ZU9uU2luZ2xlT3JNdWx0aXBsZShzaGFwZU9wdGlvbnMsIChzaGFwZSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gobG9hZEZvbnQoc2hhcGUuZm9udCwgc2hhcGUud2VpZ2h0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJ0aWNsZUluaXQoY29udGFpbmVyLCBwYXJ0aWNsZSkge1xuICAgICAgICBpZiAoIXBhcnRpY2xlLnNoYXBlIHx8ICF2YWxpZFR5cGVzLmluY2x1ZGVzKHBhcnRpY2xlLnNoYXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IHBhcnRpY2xlLnNoYXBlRGF0YTtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dERhdGEgPSBjaGFyYWN0ZXIudmFsdWU7XG4gICAgICAgIGlmICh0ZXh0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFydGljbGUudGV4dCA9IGl0ZW1Gcm9tU2luZ2xlT3JNdWx0aXBsZSh0ZXh0RGF0YSwgcGFydGljbGUucmFuZG9tSW5kZXhEYXRhKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-text/esm/TextDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-text/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles-shape-text/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTextShape: () => (/* binding */ loadTextShape)\n/* harmony export */ });\n/* harmony import */ var _TextDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextDrawer */ \"(ssr)/./node_modules/tsparticles-shape-text/esm/TextDrawer.js\");\n\nasync function loadTextShape(engine, refresh = true) {\n    await engine.addShape(_TextDrawer__WEBPACK_IMPORTED_MODULE_0__.validTypes, new _TextDrawer__WEBPACK_IMPORTED_MODULE_0__.TextDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtdGV4dC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0Q7QUFDL0M7QUFDUCwwQkFBMEIsbURBQVUsTUFBTSxtREFBVTtBQUNwRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtdGV4dC9lc20vaW5kZXguanM/ZDg3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RHJhd2VyLCB2YWxpZFR5cGVzIH0gZnJvbSBcIi4vVGV4dERyYXdlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRUZXh0U2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZSh2YWxpZFR5cGVzLCBuZXcgVGV4dERyYXdlcigpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-text/esm/index.js\n");

/***/ })

};
;