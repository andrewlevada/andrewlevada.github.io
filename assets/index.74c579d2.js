(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const a="modulepreload",d=function(t){return"/"+t},c={},m=function(o,i,l){return!i||i.length===0?o():Promise.all(i.map(e=>{if(e=d(e),e in c)return;c[e]=!0;const r=e.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":a,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((u,f)=>{n.addEventListener("load",u),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};m(()=>import("./router.78669113.js").then(t=>t.b),[]).then(t=>t.default());export{m as _};
