import{f as p,_ as c}from"./index.1f205c7a.js";import{d,s as h,y as i,i as u}from"./router.33be5d89.d089ca50.js";import{d as f}from"./query-assigned-elements.b2565831.68928b3d.js";import{c as g}from"./index.dd84ea55.b1ec46d6.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(s,t,e){return s?t():e==null?void 0:e()}function _(s,t){if(!s.startsWith("_super_"))throw`Wrong identifier passed to super factory (${s})`;const e=s.split("_"),r=e[2],n=e.length>=3?e[3]:"";if(r=="badge")return p(()=>c(()=>import("./super-badge.789117dc.0cd7a4f2.js"),["assets/super-badge.789117dc.0cd7a4f2.js","assets/router.33be5d89.d089ca50.js","assets/index.1f205c7a.js","assets/query-assigned-elements.b2565831.68928b3d.js","assets/index.dd84ea55.b1ec46d6.js"]),["assets/super-badge.789117dc.js","assets/super-badge.691abe96.css","assets/router.33be5d89.js","assets/index.08c554b6.js","assets/query-assigned-elements.b2565831.js","assets/index.dd84ea55.js","assets/index.d82a4810.css"]).then(a=>a.default()),i`<super-badge .content=${t} .type=${n}></super-badge>`;throw`Unknown super card identifier "${s}"`}var $=Object.defineProperty,b=Object.getOwnPropertyDescriptor,y=(s,t,e,r)=>{for(var n=r>1?void 0:r?b(t,e):t,a=s.length-1,o;a>=0;a--)(o=s[a])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&$(t,e,n),n};const j=()=>d("activity-card",l);class l extends h{render(){return i`
			<div class="wrapper flex col gap pad-24 full-width">
				${this.contentTemplate()}
			</div>
		`}contentTemplate(){return this.isSuper()?_(this.content.title,this.content):this.isOnlyLink()?i`
			<a class="as-header flex align-center" href=${this.content.link.url}>
				${this.content.title}
				<span class="link-icon material-icons">arrow_outward</span>
			</a>
		`:i`
			<h4>${this.content.title}</h4>

			${this.content.paragraphs.map(t=>m(typeof t=="string",()=>i`<p>${t}</p>`,()=>i`<ul>${t.map(e=>i`<li>${e}</li>`)}</ul>`))}

			${this.content.link?i`
				<a href=${this.content.link.url} target="_blank">${this.content.link.label}</a>
			`:""}
		`}isSuper(){return this.content.title.startsWith("_super_")}isOnlyLink(){return!!this.content.link&&this.content.paragraphs.length==0}static get styles(){return[...g,u`
			.wrapper {
				min-height: 62px;
			}
			
			.link-icon {
				margin-left: 12px;
			}
		`]}}y([f()],l.prototype,"content",2);export{l as ActivityCard,j as default};
