import{_ as m}from"./index.74c579d2.js";import{d as v,s as h,y as d,n as p,a as u,i as g,r as b}from"./router.78669113.js";import{m as s,c as y}from"./global.f6a47988.js";import{e as x}from"./index.d092ea9b.js";import{l as _}from"./localized-decorator.e9ce872b.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=({finisher:e,descriptor:i})=>(r,n)=>{var t;if(n===void 0){const o=(t=r.originalKey)!==null&&t!==void 0?t:r.key,l=i!=null?{kind:"method",placement:"prototype",key:o,descriptor:i(r.key)}:{...r,key:o};return e!=null&&(l.finisher=function(f){e(f,o)}),l}{const o=r.constructor;i!==void 0&&Object.defineProperty(r,n,i(n)),e==null||e(o,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(e,i){return w({descriptor:r=>{const n={get(){var t,o;return(o=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(i){const t=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var o,l;return this[t]===void 0&&(this[t]=(l=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&l!==void 0?l:null),this[t]}}return n}})}const $="/assets/text_color.2574bb71.png";var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,c=(e,i,r,n)=>{for(var t=n>1?void 0:n?O(i,r):i,o=e.length-1,l;o>=0;o--)(l=e[o])&&(t=(n?l(i,r,t):l(t))||t);return n&&t&&P(i,r,t),t};m(()=>import("./index.d255e0f1.js"),["assets/index.d255e0f1.js","assets/index.7621fae2.css","assets/router.78669113.js","assets/index.74c579d2.js","assets/global.f6a47988.js","assets/global.5c8e5e02.css","assets/localized-decorator.e9ce872b.js"]).then(e=>e.default());m(()=>import("./locale-picker.f5772a3b.js"),["assets/locale-picker.f5772a3b.js","assets/router.78669113.js","assets/index.74c579d2.js","assets/global.f6a47988.js","assets/global.5c8e5e02.css"]).then(e=>e.default());const T=()=>v("header-section",a);let a=class extends h{constructor(){super(...arguments),this.content=null}render(){var e,i;return d`
            <div class="flex col full-width gap s-40">
                <div class="top-bar flex row justify-between full-width">
                    <h3>${s("Hello! I am Andrew \u{1F590}\uFE0F ")}</h3>
                    
                    <div class="flex row gap align-center">
                        <locale-picker class="hide-on-small"></locale-picker>
                        <print-button class="hide-on-small"></print-button>
                    </div>
                </div>

                <div class="middle flex col gap justify-between full-width ${this.content?"animate-open":"hi"}">
                    <h1 class="colored-text">${p`${u(((e=this.content)==null?void 0:e.titleText)||"")}`}</h1>

					<div class="flex row gap align-center small-only">
						<print-button></print-button>
						<locale-picker></locale-picker>
					</div>
                    
	                <!--
                    <div class="divider desktop-only"></div>
                    
                    <div class="status-block flex col gap s-12 desktop-only">
                        <h2>${s("What am I up to?")}</h2>
                        <p class="italic">${p`${u(((i=this.content)==null?void 0:i.statusText)||"")}`}</p>
                        <p class="subtitle">${s(d`However, I am always open to new <br>and interesting opportunities.`)}</p>
                    </div>
                    -->
                </div>
            </div>
        `}static get styles(){return[...y,g`
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
            background-image: url(${b($)});
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
        `]}};c([x({type:Object})],a.prototype,"content",2);c([k(".color-text img")],a.prototype,"imageColorText",2);a=c([_()],a);export{a as HeaderSection,T as default};
