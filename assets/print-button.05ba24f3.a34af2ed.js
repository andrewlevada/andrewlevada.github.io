import{r as f,d as g,s as x,y as l,b as y}from"./router.33be5d89.d089ca50.js";import{c as m,m as h,g as u}from"./index.dd84ea55.b1ec46d6.js";import{d as s}from"./query-assigned-elements.b2565831.68928b3d.js";import{h as w}from"./localized-decorator.526aa812.f1171b43.js";import"./index.1f205c7a.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=r=>r!=null?r:y,v=`:host{min-width:fit-content;width:fit-content;height:62px}a{height:100%;padding:8px 14px 8px 0;background:var(--yellow-brand-color);border:2px solid var(--dark-color);border-radius:31px;text-decoration:none!important}a .icon{font-size:24px;margin-right:12px}a>*{color:var(--dark-color)!important}
`;var $=Object.defineProperty,O=Object.getOwnPropertyDescriptor,c=(r,o,n,e)=>{for(var t=e>1?void 0:e?O(o,n):o,a=r.length-1,i;a>=0;a--)(i=r[a])&&(t=(e?i(o,n,t):i(t))||t);return e&&t&&$(o,n,t),t};class p extends x{render(){return l`
			<a class="flex row align-center justify-center"
			   href=${this.href} target="_blank"
			   download=${b(this.download)}
			>
				${this.icon?l`<span class="icon material-icons">${this.icon}</span>`:""}
				<h4>${this.text}</h4>
			</a>
		`}}p.styles=[...m,f(v)];c([s({type:String})],p.prototype,"text",2);c([s({type:String})],p.prototype,"href",2);c([s({type:String})],p.prototype,"download",2);c([s({type:String})],p.prototype,"icon",2);var P=Object.defineProperty,j=Object.getOwnPropertyDescriptor,S=(r,o,n,e)=>{for(var t=e>1?void 0:e?j(o,n):o,a=r.length-1,i;a>=0;a--)(i=r[a])&&(t=(e?i(o,n,t):i(t))||t);return e&&t&&P(o,n,t),t};const A=()=>g("print-button",d);let d=class extends p{constructor(){super(),this.text=h("Get PDF"),this.href=`/static/print_${u()}.pdf`,this.download=h("CV Andrew Levada"),this.icon="print"}};d=S([w()],d);export{d as PrintButton,A as default};
