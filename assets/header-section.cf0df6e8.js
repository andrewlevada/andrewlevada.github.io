var y=Object.defineProperty,x=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var p=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,u=(t,e)=>{for(var o in e||(e={}))w.call(e,o)&&p(t,o,e[o]);if(d)for(var o of d(e))k.call(e,o)&&p(t,o,e[o]);return t},m=(t,e)=>x(t,_(e));import{_ as g}from"./index.078f3803.js";import{d as $,s as P,$ as v,n as f,i as h,r as O,o as I}from"./router.6f2f19a4.js";import{m as s,c as j,e as S}from"./index.fe516b9a.js";import{l as C}from"./localized-decorator.dc06e295.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=({finisher:t,descriptor:e})=>(o,n)=>{var r;if(n===void 0){const i=(r=o.originalKey)!==null&&r!==void 0?r:o.key,l=e!=null?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:m(u({},o),{key:i});return t!=null&&(l.finisher=function(b){t(b,i)}),l}{const i=o.constructor;e!==void 0&&Object.defineProperty(o,n,e(n)),t==null||t(i,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(t,e){return E({descriptor:o=>{const n={get(){var r,i;return(i=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():"__"+o;n.get=function(){var i,l;return this[r]===void 0&&(this[r]=(l=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&l!==void 0?l:null),this[r]}}return n}})}var D="/assets/text_color.2574bb71.png",R=Object.defineProperty,A=Object.getOwnPropertyDescriptor,c=(t,e,o,n)=>{for(var r=n>1?void 0:n?A(e,o):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(r=(n?l(e,o,r):l(r))||r);return n&&r&&R(e,o,r),r};g(()=>import("./index.c5fa3c08.js"),["assets/index.c5fa3c08.js","assets/index.012204c7.css","assets/router.6f2f19a4.js","assets/index.078f3803.js","assets/index.fe516b9a.js","assets/index.2f78f0c4.css","assets/localized-decorator.dc06e295.js"]).then(t=>t.default());g(()=>import("./locale-picker.61d72f09.js"),["assets/locale-picker.61d72f09.js","assets/router.6f2f19a4.js","assets/index.078f3803.js","assets/index.fe516b9a.js","assets/index.2f78f0c4.css"]).then(t=>t.default());var L=()=>$("header-section",a);let a=class extends P{constructor(){super(...arguments),this.content=null}render(){var t,e;return v`
            <div class="flex col full-width gap s-40">
                <div class="top-bar flex row justify-between full-width">
                    <h3>${s("Hello! I am Andrew \u{1F590}\uFE0F ")}</h3>
                    
                    <div class="flex row gap align-center">
                        <locale-picker></locale-picker>
                        <print-button></print-button>
                    </div>
                </div>

                <div class="middle flex row justify-between full-width ${this.content?"animate-open":"hi"}">
                    <h1 class="colored-text">${f`${h(((t=this.content)==null?void 0:t.titleText)||"")}`}</h1>
                    
                    <div class="divider desktop-only"></div>
                    
                    <div class="status-block flex col gap s-12 desktop-only">
                        <h2>${s("What am I up to?")}</h2>
                        <p class="italic">${f`${h(((e=this.content)==null?void 0:e.statusText)||"")}`}</p>
                        <p class="subtitle">${s(v`However, I am always open to new <br>and interesting opportunities.`)}</p>
                    </div>
                </div>
            </div>
        `}static get styles(){return[...j,O`
          .middle {
            position: absolute;
            top: 26%;
            opacity: 0;
            animation-fill-mode: forwards !important;
          }
          
          .middle.animate-open {
            animation: appear var(--launch-anim-length) ease-out;
          }

          .colored-text {
            min-width: 770px;
            background-image: url(${I(D)});
            //noinspection CssInvalidPropertyValue
            background-clip: text;
            -webkit-background-clip: text;
            color: rgba(0, 0, 0, 0.01);
            background-size: cover;
            padding-right: 10px;
            height: fit-content;
          }

          .status-block {
            max-width: 420px;
          }

          .status-block > * {
            text-align: end;
          }

          .divider::after {
            content: "";
            position: absolute;
            top: -54%;
            transform: translateX(24px);
            width: 1px;
            height: 500px;
            background: linear-gradient(rgba(87, 98, 114, 0), rgba(87, 98, 114, 0.72), rgba(87, 98, 114, 0));
          }

          @keyframes appear {
            from {
              opacity: 0
            }
            to {
              opacity: 1
            }
          }
        `]}};c([S({type:Object})],a.prototype,"content",2);c([T(".color-text img")],a.prototype,"imageColorText",2);a=c([C()],a);export{a as HeaderSection,L as default};
