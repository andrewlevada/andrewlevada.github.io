import{y as n,d as l,s as c,i as u}from"./router.bced5954.js";import{e as h}from"./query-assigned-elements.b2565831.js";import{c as _}from"./index.68e8a515.js";import{_ as f}from"./index.3fb7b565.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(e,t,r){return e?t():r==null?void 0:r()}function m(e,t){if(e.startsWith("_super_")&&(e=e.split("_super_")[1]),e=="badge")return f(()=>import("./super-badge.f16d048e.js"),["assets/super-badge.f16d048e.js","assets/router.bced5954.js","assets/index.3fb7b565.js","assets/query-assigned-elements.b2565831.js","assets/index.68e8a515.js","assets/index.09e88b4c.css"]).then(r=>r.default()),n`<super-badge .content=${t}></super-badge>`;throw`Unknown super card identifier "${e}"`}var v=Object.defineProperty,$=Object.getOwnPropertyDescriptor,g=(e,t,r,i)=>{for(var s=i>1?void 0:i?$(t,r):t,o=e.length-1,p;o>=0;o--)(p=e[o])&&(s=(i?p(t,r,s):p(s))||s);return i&&s&&v(t,r,s),s};const x=()=>l("activity-card",a);class a extends c{render(){return n`
			<div class="flex col gap pad-24 full-width">
				${this.isSuper()?n`
					${m(this.content.title,this.content)}
				`:n`
					<h4>${this.content.title}</h4>
					
					${this.contentTemplate()}

					${this.content.link?n`
						<a href=${this.content.link.url} target="_blank">${this.content.link.label}</a>
					`:""}
				`}
			</div>
		`}contentTemplate(){return this.content.paragraphs.map(t=>d(typeof t=="string",()=>n`<p>${t}</p>`,()=>n`<ul>${t.map(r=>n`<li>${r}</li>`)}</ul>`))}isSuper(){return this.content.title.startsWith("_super_")}static get styles(){return[..._,u`
			.flex {
				min-height: 62px;
			}
		`]}}g([h()],a.prototype,"content",2);export{a as ActivityCard,x as default};
