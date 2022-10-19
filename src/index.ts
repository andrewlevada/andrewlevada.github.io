// @ts-ignore: Property 'UrlPattern' does not exist
if (!globalThis.URLPattern)
	import("urlpattern-polyfill").then(importRouter);
else importRouter();

function importRouter() {
	import("./pages/router").then(f => f.default());
}

export {}
