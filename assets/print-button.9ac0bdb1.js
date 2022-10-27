import{b as h,r as m,s as u,y as d,d as g}from"./router.698b93dc.js";import{c as v,m as f,g as x}from"./index.5f430525.js";import{e as a}from"./query-assigned-elements.b2565831.js";import{l as w}from"./localized-decorator.3e035a57.js";import"./index.82f7b823.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=r=>r!=null?r:h,_=`:host{min-width:fit-content;width:fit-content;height:62px}a{height:100%;padding:8px 14px 8px 0;background:var(--yellow-brand-color);border:2px solid var(--dark-color);border-radius:31px;text-decoration:none!important}a .icon{font-size:24px;margin-right:12px}a>*{color:var(--dark-color)!important}
`;var b=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(r,e,n,o)=>{for(var t=o>1?void 0:o?P(e,n):e,s=r.length-1,i;s>=0;s--)(i=r[s])&&(t=(o?i(e,n,t):i(t))||t);return o&&t&&b(e,n,t),t};class p extends u{render(){return d`
			<a class="flex row align-center justify-center"
			   href=${this.href} target="_blank"
			   download=${y(this.download)}
			>
				${this.icon?d`<span class="icon material-icons">${this.icon}</span>`:""}
				<h4>${this.text}</h4>
			</a>
		`}}p.styles=[...v,m(_)];l([a({type:String})],p.prototype,"text",2);l([a({type:String})],p.prototype,"href",2);l([a({type:String})],p.prototype,"download",2);l([a({type:String})],p.prototype,"icon",2);var $=Object.defineProperty,O=Object.getOwnPropertyDescriptor,S=(r,e,n,o)=>{for(var t=o>1?void 0:o?O(e,n):e,s=r.length-1,i;s>=0;s--)(i=r[s])&&(t=(o?i(e,n,t):i(t))||t);return o&&t&&$(e,n,t),t};const z=()=>g("print-button",c);let c=class extends p{constructor(){super(),this.icon="print"}willUpdate(r){super.willUpdate(r),this.text=f("Get PDF"),this.href=`/static/print_${x()}.pdf`,this.download=f("CV Andrew Levada")}};c=S([w()],c);export{c as PrintButton,z as default};
