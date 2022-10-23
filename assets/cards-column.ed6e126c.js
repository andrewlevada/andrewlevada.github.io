import{_ as w}from"./index.3fb7b565.js";import{d as b,s as _,y as d,o as x,i as P}from"./router.bced5954.js";import{e as g}from"./query-assigned-elements.b2565831.js";import{g as C,c as R}from"./index.68e8a515.js";import{l as k}from"./localized-decorator.2effb8d1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(t){return g({...t,state:!0})}function S(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var m={exports:{}};function y(t,a,n,e,r,o,s){try{var i=t[o](s),l=i.value}catch(p){n(p);return}i.done?a(l):Promise.resolve(l).then(e,r)}function O(t){return function(){var a=this,n=arguments;return new Promise(function(e,r){var o=t.apply(a,n);function s(l){y(o,e,r,s,i,"next",l)}function i(l){y(o,e,r,s,i,"throw",l)}s(void 0)})}}function z(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function v(t,a){for(var n=0;n<a.length;n++){var e=a[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function j(t,a,n){return a&&v(t.prototype,a),n&&v(t,n),t}const $=typeof S>"u",D=window.fetch;let h=function(){function t(a,n){z(this,t),this.id=a,this.sheetName=n}return j(t,[{key:"getSpreadsheetDataUsingFetch",value:function(){if(!this.id)return null;let n=`https://docs.google.com/spreadsheets/d/${this.id}/gviz/tq?`;return this.sheetName&&(n=n.concat(`sheet=${this.sheetName}`)),D(n).then(e=>e&&e.ok&&e.text?e.text():null).catch(e=>null)}},{key:"normalizeRow",value:function(n){return n.map(e=>e&&e.v!==null&&e.v!==void 0?e:{})}},{key:"applyHeaderIntoRows",value:function(n,e){return e.map(({c:r})=>this.normalizeRow(r)).map(r=>r.reduce((o,s,i)=>s.v?Object.assign(o,{[n[i]]:s.v}):o,{}))}},{key:"getItems",value:function(n){let e=[];try{const r=JSON.parse(n.split(`
`)[1].replace(/google.visualization.Query.setResponse\(|\);/g,""));if(r.table.cols.some(({label:s})=>!!s)){const s=r.table.cols.map(({label:i})=>i);e=this.applyHeaderIntoRows(s,r.table.rows)}else{const[s,...i]=r.table.rows,l=this.normalizeRow(s.c).map(p=>p.v);e=this.applyHeaderIntoRows(l,i)}}catch{}return e}},{key:"parse",value:function(){var a=O(function*(e,r){if(e&&(this.id=e),r&&(this.sheetName=r),!this.id)throw new Error("SpreadsheetId is required.");const o=yield this.getSpreadsheetDataUsingFetch();return o===null?[]:this.getItems(o)});function n(e,r){return a.apply(this,arguments)}return n}()}]),t}();$?window.PublicGoogleSheetsParser=h:(m.exports=h,m.exports.default=h);const E="1aj7yB3noTP8Y2pmHC4OuIj1Z-nY-0EoSAnNbMIF4kPo",q=new m.exports;async function H(t){return(await q.parse(E,L(t))).map(n=>{const e=(n[f("text")]||"").split(`
`)||[],r=[];for(let o=0;o<e.length;o++){if(!e[o].startsWith("*")){r.push(e[o]);continue}(r.length==0||typeof r[r.length-1]=="string")&&r.push([]),r[r.length-1].push(e[o].substring(2))}return{title:n[f("title")],paragraphs:r,link:n["link-url"]?{label:n[f("link")],url:n["link-url"]}:void 0}})}function f(t){return`${t} [${C().toUpperCase()}]`}function L(t){return t.charAt(0).toUpperCase()+t.substring(1)}var N=Object.defineProperty,T=Object.getOwnPropertyDescriptor,u=(t,a,n,e)=>{for(var r=e>1?void 0:e?T(a,n):a,o=t.length-1,s;o>=0;o--)(s=t[o])&&(r=(e?s(a,n,r):s(r))||r);return e&&r&&N(a,n,r),r};w(()=>import("./activity-card.d317bf9a.js"),["assets/activity-card.d317bf9a.js","assets/router.bced5954.js","assets/index.3fb7b565.js","assets/query-assigned-elements.b2565831.js","assets/index.68e8a515.js","assets/index.09e88b4c.css"]).then(t=>t.default());w(()=>import("./badge-card.fe1ee982.js"),["assets/badge-card.fe1ee982.js","assets/router.bced5954.js","assets/index.3fb7b565.js","assets/query-assigned-elements.b2565831.js","assets/index.68e8a515.js","assets/index.09e88b4c.css"]).then(t=>t.default());const J=()=>b("cards-column",c);let c=class extends _{constructor(){super(...arguments),this.cards=[]}render(){return d`
			<div class="flex col full-width top">
				<div class="header flex pad-24"><h4>${this.header}</h4></div>
				<div class="flex col full-width cards">
					${this.cards.map(t=>t.link||t.paragraphs?d`
						<activity-card .content=${t} .isProject=${this.id==="projects"}></activity-card>
					`:d`
						<badge-card .content=${t}></badge-card>
					`)}
				</div>
			</div>
		`}connectedCallback(){super.connectedCallback(),this.updateContent(),x(()=>this.updateContent())}updateContent(){H(this.id).then(t=>{this.cards=t})}static get styles(){return[...R,P`
			.top {
				box-sizing: content-box;
			}

			@media screen and (max-width: 1023px) {
				.top {
					border: 2px var(--dark-color) solid;
				}
			}
			
			.header {
				height: 62px;
			}

			.header > * {
				align-self: center;
			}

			.cards > * {
				border-top: solid 2px var(--dark-color);
			}
		`]}};u([g()],c.prototype,"id",2);u([g()],c.prototype,"header",2);u([I()],c.prototype,"cards",2);c=u([k()],c);export{c as CardsColumn,J as default};
