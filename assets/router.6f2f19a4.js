var $t=Object.defineProperty,_t=Object.defineProperties;var ft=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var j=(n,t,e)=>t in n?$t(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,V=(n,t)=>{for(var e in t||(t={}))mt.call(t,e)&&j(n,e,t[e]);if(B)for(var e of B(t))gt.call(t,e)&&j(n,e,t[e]);return n},W=(n,t)=>_t(n,ft(t));import{_ as At}from"./index.078f3803.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),q=new Map;class lt{constructor(t,e){if(this._$cssResult$=!0,e!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=q.get(this.cssText);return z&&t===void 0&&(q.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const yt=n=>new lt(typeof n=="string"?n:n+"",I),Ft=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new lt(e,I)},Et=(n,t)=>{z?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},K=z?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return yt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const J=window.trustedTypes,bt=J?J.emptyScript:"",Z=window.reactiveElementPolyfillSupport,D={toAttribute(n,t){switch(t){case Boolean:n=n?bt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ht=(n,t)=>t!==n&&(t==t||n==n),k={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:ht};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||k}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Eh(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Et(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=k){var s,r;const o=this.constructor._$Eh(t,i);if(o!==void 0&&i.reflect===!0){const a=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:D.toAttribute)(e,i.type);this._$Ei=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(t,e){var i,s,r;const o=this.constructor,a=o._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const h=o.getPropertyOptions(a),l=h.converter,p=(r=(s=(i=l)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&r!==void 0?r:D.fromAttribute;this._$Ei=a,this[a]=p(e,h.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$ES(i,this[i],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},Z==null||Z({ReactiveElement:f}),((M=globalThis.reactiveElementVersions)!==null&&M!==void 0?M:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;const g=globalThis.trustedTypes,F=g?g.createPolicy("lit-html",{createHTML:n=>n}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,at="?"+$,wt=`<${at}>`,A=document,S=(n="")=>A.createComment(n),C=n=>n===null||typeof n!="object"&&typeof n!="function",dt=Array.isArray,St=n=>{var t;return dt(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Q=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,X=/'/g,Y=/"/g,ct=/^(?:script|style|textarea|title)$/i,Ct=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ut=Ct(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),tt=new WeakMap,xt=(n,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new U(t.insertBefore(S(),a),a,void 0,e!=null?e:{})}return o._$AI(n),o},m=A.createTreeWalker(A,129,null,!1),Pt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=b;for(let h=0;h<e;h++){const l=n[h];let p,d,c=-1,v=0;for(;v<l.length&&(o.lastIndex=v,d=o.exec(l),d!==null);)v=o.lastIndex,o===b?d[1]==="!--"?o=G:d[1]!==void 0?o=Q:d[2]!==void 0?(ct.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=_):d[3]!==void 0&&(o=_):o===_?d[0]===">"?(o=s!=null?s:b,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,p=d[1],o=d[3]===void 0?_:d[3]==='"'?Y:X):o===Y||o===X?o=_:o===G||o===Q?o=b:(o=_,s=void 0);const T=o===_&&n[h+1].startsWith("/>")?" ":"";r+=o===b?l+wt:c>=0?(i.push(p),l.slice(0,c)+"$lit$"+l.slice(c)+$+T):l+$+(c===-2?(i.push(void 0),h):T)}const a=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[F!==void 0?F.createHTML(a):a,i]};class x{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,h=this.parts,[l,p]=Pt(t,e);if(this.el=x.createElement(l,i),m.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=m.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith($)){const v=p[o++];if(d.push(c),v!==void 0){const T=s.getAttribute(v.toLowerCase()+"$lit$").split($),H=/([.?@])?(.*)/.exec(v);h.push({type:1,index:r,name:H[2],strings:T,ctor:H[1]==="."?Tt:H[1]==="?"?Nt:H[1]==="@"?Mt:N})}else h.push({type:6,index:r})}for(const c of d)s.removeAttribute(c)}if(ct.test(s.tagName)){const d=s.textContent.split($),c=d.length-1;if(c>0){s.textContent=g?g.emptyScript:"";for(let v=0;v<c;v++)s.append(d[v],S()),m.nextNode(),h.push({type:2,index:++r});s.append(d[c],S())}}}else if(s.nodeType===8)if(s.data===at)h.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)h.push({type:7,index:r}),d+=$.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function E(n,t,e=n,i){var s,r,o,a;if(t===y)return t;let h=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const l=C(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==l&&((r=h==null?void 0:h._$AO)===null||r===void 0||r.call(h,!1),l===void 0?h=void 0:(h=new l(n),h._$AT(n,e,i)),i!==void 0?((o=(a=e)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[i]=h:e._$Cu=h),h!==void 0&&(t=E(n,h._$AS(n,t.values),h,i)),t}class Ut{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);m.currentNode=r;let o=m.nextNode(),a=0,h=0,l=s[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new U(o,o.nextSibling,this,t):l.type===1?p=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(p=new kt(o,this,t)),this.v.push(p),l=s[++h]}a!==(l==null?void 0:l.index)&&(o=m.nextNode(),a++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):St(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const o=new Ut(r,this),a=o.p(this.options);o.m(i),this.k(a),this._$AH=o}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new x(t)),e}S(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new U(this.M(S()),this.M(S()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class N{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=E(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==y,o&&(this._$AH=t);else{const a=t;let h,l;for(t=r[0],h=0;h<r.length-1;h++)l=E(this,a[i+h],e,h),l===y&&(l=this._$AH[h]),o||(o=!C(l)||l!==this._$AH[h]),l===u?t=u:t!==u&&(t+=(l!=null?l:"")+r[h+1]),this._$AH[h]=l}o&&!s&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Tt extends N{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const Ht=g?g.emptyScript:"";class Nt extends N{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}}class Mt extends N{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:u)===y)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const et=window.litHtmlPolyfillSupport;et==null||et(x,U),((O=globalThis.litHtmlVersions)!==null&&O!==void 0?O:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R,L;class w extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return y}}w.finalized=!0,w._$litElement$=!0,(R=globalThis.litElementHydrateSupport)===null||R===void 0||R.call(globalThis,{LitElement:w});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:w});((L=globalThis.litElementVersions)!==null&&L!==void 0?L:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=Symbol.for(""),Ot=n=>{var t,e;if(((t=n)===null||t===void 0?void 0:t.r)===pt)return(e=n)===null||e===void 0?void 0:e._$litStatic$},Rt=n=>({_$litStatic$:n,r:pt}),st=new Map,Lt=n=>(t,...e)=>{const i=e.length;let s,r;const o=[],a=[];let h,l=0,p=!1;for(;l<i;){for(h=t[l];l<i&&(r=e[l],(s=Ot(r))!==void 0);)h+=s+t[++l],p=!0;a.push(r),o.push(h),l++}if(l===i&&o.push(t[i]),p){const d=o.join("$$lit$$");(t=st.get(d))===void 0&&(o.raw=o,st.set(d,t=o)),e=a}return n(t,...e)},Dt=Lt(ut);function zt(n,t){customElements.get(n)===void 0&&customElements.define(n,t)}function Gt(n){window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&n()})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=new WeakMap,ot=n=>{if((e=>e.pattern!==void 0)(n))return n.pattern;let t=nt.get(n);return t===void 0&&nt.set(n,t=new URLPattern({pathname:n.path})),t};class It{constructor(t,e,i){this.routes=[],this.t=[],this.i={},this.o=s=>{if(s.routes===this)return;const r=s.routes;this.t.push(r),r.h=this,s.stopImmediatePropagation(),s.onDisconnect=()=>{var a;(a=this.t)===null||a===void 0||a.splice(this.t.indexOf(r)>>>0,1)};const o=rt(this.i);o!==void 0&&r.goto(o)},(this.l=t).addController(this),this.routes=[...e],this.fallback=i==null?void 0:i.fallback}link(t){var e,i;if(t!=null&&t.startsWith("/"))return t;if(t!=null&&t.startsWith("."))throw Error("Not implemented");return t!=null||(t=this.u),((i=(e=this.h)===null||e===void 0?void 0:e.link())!==null&&i!==void 0?i:"")+t}async goto(t){var e;let i;if(this.routes.length===0&&this.fallback===void 0)i=t,this.u="",this.i={0:i};else{const s=this.v(t);if(s===void 0)throw Error("No route found for "+t);const r=ot(s).exec({pathname:t}),o=(e=r==null?void 0:r.pathname.groups)!==null&&e!==void 0?e:{};if(i=rt(o),typeof s.enter=="function"&&await s.enter(o)===!1)return;this.p=s,this.i=o,this.u=i===void 0?t:t.substring(0,t.length-i.length)}if(i!==void 0)for(const s of this.t)s.goto(i);this.l.requestUpdate()}outlet(){var t,e;return(e=(t=this.p)===null||t===void 0?void 0:t.render)===null||e===void 0?void 0:e.call(t,this.i)}get params(){return this.i}v(t){const e=this.routes.find(i=>ot(i).test({pathname:t}));return e||this.fallback===void 0?e:this.fallback?W(V({},this.fallback),{path:"/*"}):void 0}hostConnected(){this.l.addEventListener(P.eventName,this.o);const t=new P(this);this.l.dispatchEvent(t),this.m=t.onDisconnect}hostDisconnected(){var t;(t=this.m)===null||t===void 0||t.call(this),this.h=void 0}}const rt=n=>{let t;for(const e of Object.keys(n))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&n[t]};class P extends Event{constructor(t){super(P.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}P.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=location.origin||location.protocol+"//"+location.host;class jt extends It{constructor(){super(...arguments),this.t=t=>{const e=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const i=t.composedPath().find(o=>o.tagName==="A");if(i===void 0||i.target!==""||i.hasAttribute("download")||i.getAttribute("rel")==="external")return;const s=i.href;if(s===""||s.startsWith("mailto:"))return;const r=window.location;i.origin===Bt&&(t.preventDefault(),s!==r.href&&(window.history.pushState({},"",s),this.goto(i.pathname)))},this.o=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.t),window.addEventListener("popstate",this.o),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.t),window.removeEventListener("popstate",this.o)}}function Vt(n){switch(n){case"./landing/index.ts":return At(()=>import("./index.fe516b9a.js").then(function(t){return t.i}),["assets/index.fe516b9a.js","assets/index.2f78f0c4.css","assets/index.078f3803.js"]);default:return new Promise(function(t,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}var Wt=()=>zt("app-router",vt);class vt extends w{constructor(){super(...arguments),this.router=new jt(this,qt([{path:"/",tag:"landing"}]))}render(){return ut`${this.router.outlet()}`}}function qt(n){return n.map(t=>({path:t.path,render:()=>Dt`${Rt(Kt(t.tag))}`,enter:()=>Vt(`./${t.tag}/index.ts`).then(e=>e.default())}))}function Kt(n){const t=`app-page--${n}`;return`<${t}></${t}>`}var Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt,AppRouter:vt},Symbol.toStringTag,{value:"Module"}));export{ut as $,Gt as a,Qt as b,zt as d,Rt as i,Dt as n,yt as o,Ft as r,w as s};
