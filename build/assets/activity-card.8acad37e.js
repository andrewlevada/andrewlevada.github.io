import{y as i,d as p,s as c,i as h}from"./router.acc4959c.js";import{e as u}from"./query-assigned-elements.b2565831.js";import{c as f}from"./index.c1b553b3.js";import{_ as d}from"./index.cb1b60eb.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(n,t,e){return n?t():e==null?void 0:e()}function m(n,t){if(!n.startsWith("_super_"))throw`Wrong identifier passed to super factory (${n})`;const e=n.split("_"),s=e[2],r=e.length>=3?e[3]:"";if(s=="badge")return d(()=>import("./super-badge.55a27300.js"),["assets/super-badge.55a27300.js","assets/super-badge.a7d68b7c.css","assets/router.acc4959c.js","assets/index.cb1b60eb.js","assets/query-assigned-elements.b2565831.js","assets/index.c1b553b3.js","assets/index.d5409cbb.css"]).then(o=>o.default()),i`<super-badge .content=${t} .type=${r}></super-badge>`;throw`Unknown super card identifier "${n}"`}var g=Object.defineProperty,$=Object.getOwnPropertyDescriptor,v=(n,t,e,s)=>{for(var r=s>1?void 0:s?$(t,e):t,o=n.length-1,a;o>=0;o--)(a=n[o])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&g(t,e,r),r};const k=()=>p("activity-card",l);class l extends c{render(){return i`
			<div class="wrapper flex col gap pad-24 full-width">
				${this.contentTemplate()}
			</div>
		`}contentTemplate(){return this.isSuper()?m(this.content.title,this.content):this.isOnlyLink()?i`
			<a class="as-header flex align-center" href=${this.content.link.url}>
				${this.content.title}
				<span class="link-icon material-icons">arrow_outward</span>
			</a>
		`:i`
			<h4>${this.content.title}</h4>

			${this.content.paragraphs.map(t=>_(typeof t=="string",()=>i`<p>${t}</p>`,()=>i`<ul>${t.map(e=>i`<li>${e}</li>`)}</ul>`))}

			${this.content.link?i`
				<a href=${this.content.link.url} target="_blank">${this.content.link.label}</a>
			`:""}
		`}isSuper(){return this.content.title.startsWith("_super_")}isOnlyLink(){return!!this.content.link&&this.content.paragraphs.length==0}static get styles(){return[...f,h`
			.wrapper {
				min-height: 62px;
			}
			
			.link-icon {
				margin-left: 12px;
			}
		`]}}v([u()],l.prototype,"content",2);export{l as ActivityCard,k as default};
