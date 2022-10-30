import{_ as z}from"./index.d57b5669.js";import{r as f}from"./router.6ae4bb88.js";const k=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}:root,:host{--red-brand-color: #F85D77;--green-brand-color: #C8F199;--yellow-brand-color: #F6E17D;--dark-color: #342C21;--surface-color: #FBF7F9;--brand-gradient-0: linear-gradient(#F85D77, #F6E17D);--brand-gradient-1: linear-gradient(#C8F199, #F6E17D);--transparent-surface-color: #FBF7F922;--launch-anim-delay: .5s;--launch-anim-length: .6s;--page-outer-margin: 64px;--navigation-height: 62px}@media screen and (max-width: 1023px){:root,:host{--page-outer-margin: 18px}}@media screen and (max-width: 428px){:root,:host{--navigation-height:98px}}html,button,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:""}table{border-collapse:collapse;border-spacing:0}.mjx-chtml{font-size:100%!important}button{background-color:transparent;outline:none;border:none}button:hover{cursor:pointer}input{border:none;outline:none}h1{font-family:Igra Sans,sans-serif;font-style:normal;font-weight:400;font-size:64px;line-height:82px}@media screen and (max-width: 1023px){h1{font-size:min(7vw,64px);line-height:min(9vw,82px)}}h4{font-family:Space Mono,monospace;font-style:normal;font-weight:700;font-size:18px;line-height:28px}h4.accent-text{font-family:Igra Sans,sans-serif}p,li{font-family:Atkinson Hyperlegible,sans-serif;font-style:normal;font-weight:400;font-size:18px;line-height:26px}li{position:relative;display:flex;flex-direction:row;margin-left:12px}li:before{display:block;content:"";width:4px;height:4px;background:var(--dark-color);border-radius:2px;position:absolute;top:10px;left:-12px}li:not(:last-child){margin-bottom:6px}a{font-family:Atkinson Hyperlegible,sans-serif;font-style:italic;font-weight:400;font-size:18px;line-height:26px;text-decoration-line:underline;transition:color .1s ease}a:hover{color:var(--red-brand-color)}a.as-header{font-family:Space Mono,monospace;font-style:normal;font-weight:700;font-size:18px;line-height:28px;text-decoration-line:none}a.as-header.accent-text{font-family:Igra Sans,sans-serif}.border{border:solid 2px var(--dark-color)}*{box-sizing:border-box;color:var(--dark-color)}.material-icons{font-family:Material Icons,monospace;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased;color:inherit}
`,F=`:host{width:100%;min-height:100%}body{background:var(--surface-color)}
`,S=`.flex{display:flex}.flex.row{flex-direction:row}.flex.row.gap>*:not(:last-child){margin-right:16px}.flex.row.gap.s-64>*:not(:last-child){margin-right:64px}.flex.row.gap.s-40>*:not(:last-child){margin-right:40px}.flex.row.gap.s-24>*:not(:last-child){margin-right:24px}.flex.row.gap.s-12>*:not(:last-child){margin-right:12px}.flex.col{flex-direction:column}.flex.col.gap>*:not(:last-child){margin-bottom:16px}.flex.col.gap.s-64>*:not(:last-child){margin-bottom:64px}.flex.col.gap.s-40>*:not(:last-child){margin-bottom:40px}.flex.col.gap.s-24>*:not(:last-child){margin-bottom:24px}.flex.col.gap.s-12>*:not(:last-child){margin-bottom:12px}.flex.pad-64{padding:64px}.flex.pad-24{padding:24px}.flex.justify-start{justify-content:flex-start}.flex.justify-center{justify-content:center}.flex.justify-end{justify-content:flex-end}.flex.justify-around{justify-content:space-around}.flex.justify-between{justify-content:space-between}.flex.align-center{align-items:center}.full-width{width:100%}.full-height{height:100%}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=e=>typeof e!="string"&&"strTag"in e,L=(e,t,o)=>{let n=e[0];for(let r=1;r<e.length;r++)n+=t[o?o[r-1]:r-1],n+=e[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=e=>M(e)?L(e.strings,e.values):e;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T="lit-localize-status";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class j{constructor(){this.settled=!1,this.promise=new Promise((t,o)=>{this._resolve=t,this._reject=o})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const l=[];for(let e=0;e<256;e++)l[e]=(e>>4&15).toString(16)+(e&15).toString(16);function q(e){let t=0,o=8997,n=0,r=33826,i=0,a=40164,c=0,g=52210;for(let m=0;m<e.length;m++)o^=e.charCodeAt(m),t=o*435,n=r*435,i=a*435,c=g*435,i+=o<<8,c+=r<<8,n+=t>>>16,o=t&65535,i+=n>>>16,r=n&65535,g=c+(i>>>16)&65535,a=i&65535;return l[g>>8]+l[g&255]+l[a>>8]+l[a&255]+l[r>>8]+l[r&255]+l[o>>8]+l[o&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P="",A="h",D="s";function C(e,t){return(t?A:D)+q(typeof e=="string"?e:e.join(P))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=new WeakMap,v=new Map;function H(e,t,o){var n;if(e){const r=(n=o==null?void 0:o.id)!==null&&n!==void 0?n:R(t),i=e[r];if(i){if(typeof i=="string")return i;if("strTag"in i)return L(i.strings,t.values,i.values);{let a=y.get(i);return a===void 0&&(a=i.values,y.set(i,a)),{...i,values:a.map(c=>t.values[c])}}}}return _(t)}function R(e){const t=typeof e=="string"?e:e.strings;let o=v.get(t);return o===void 0&&(o=C(t,typeof e!="string"&&!("strTag"in e)),v.set(t,o)),o}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(e){window.dispatchEvent(new CustomEvent(T,{detail:e}))}let h="",d,E,u,b,I,s=new j;s.resolve();let p=0;const V=e=>(X((t,o)=>H(I,t,o)),h=E=e.sourceLocale,u=new Set(e.targetLocales),u.add(e.sourceLocale),b=e.loadLocale,{getLocale:B,setLocale:N}),B=()=>h,N=e=>{if(e===(d!=null?d:h))return s.promise;if(!u||!b)throw new Error("Internal error");if(!u.has(e))throw new Error("Invalid locale code");p++;const t=p;return d=e,s.settled&&(s=new j),x({status:"loading",loadingLocale:e}),(e===E?Promise.resolve({templates:void 0}):b(e)).then(n=>{p===t&&(h=e,d=void 0,I=n.templates,x({status:"ready",readyLocale:e}),s.resolve())},n=>{p===t&&(x({status:"error",errorLocale:e,errorMessage:n.toString()}),s.reject(n))}),s.promise};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=_,w=!1;function X(e){if(w)throw new Error("lit-localize can only be configured once");O=e,w=!0}const W=[f(k),f(S)],J=[f(k),f(S),f(F)],{getLocale:K,setLocale:$}=V({sourceLocale:"en",targetLocales:["ru"],loadLocale:()=>z(()=>import("./ru.2d3946b9.js"),[])});window.location.search.includes("lang=ru")&&setTimeout(()=>$("ru"),0);export{T as L,W as c,K as g,O as m,J as p,$ as s};
