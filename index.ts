/**
 * Sets myGlobal to either window for Windows or global for Node
 * Exports myGlobal
 * throws Error if environment is neither Windows or Node
 */

let throwError = () => {
    throw new Error("Unsuported Environment");
};

export = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : throwError();
