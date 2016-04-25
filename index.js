"use strict";
var throwError = function () {
    throw new Error("Unsuported Environment");
};
module.exports = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : throwError();
