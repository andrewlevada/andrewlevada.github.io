(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="modulepreload",h=function(r){return"/"+r},c={},f=function(n,i,l){return!i||i.length===0?n():Promise.all(i.map(e=>{if(e=h(e),e in c)return;c[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":m,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t)return new Promise((a,d)=>{o.addEventListener("load",a),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())};globalThis.URLPattern?u():f(()=>import("./index.21899a4e.js"),[]).then(u);function u(){f(()=>import("./router.33be5d89.js").then(r=>r.c),[]).then(r=>r.default())}export{f as _};
