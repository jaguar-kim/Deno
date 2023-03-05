globalThis.window.addEventListener("load", () => console.log(">>> loaded"));

globalThis.window.addEventListener("unload", () => console.log(">>> unloaded"));

setTimeout(() => console.log(">>> ."), 1000);
