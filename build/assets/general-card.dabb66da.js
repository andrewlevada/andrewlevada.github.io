import{y as s,d as f,s as _,n as a,a as l,i as d}from"./router.78669113.js";import{e as u}from"./index.d092ea9b.js";import{c as m}from"./global.f6a47988.js";import{_ as $}from"./index.74c579d2.js";function v(t,e){if(t.startsWith("_super_")&&(t=t.split("_super_")[1]),t=="badge")return $(()=>import("./super-badge.a6d178b6.js"),["assets/super-badge.a6d178b6.js","assets/router.78669113.js","assets/index.74c579d2.js","assets/index.d092ea9b.js","assets/index.51e583db.css","assets/global.f6a47988.js","assets/global.5c8e5e02.css"]).then(n=>n.default()),s`<super-badge .content=${e}></super-badge>`;throw`Unknown super card identifier "${t}"`}var g=Object.defineProperty,P=Object.getOwnPropertyDescriptor,h=(t,e,n,i)=>{for(var r=i>1?void 0:i?P(e,n):e,o=t.length-1,p;o>=0;o--)(p=t[o])&&(r=(i?p(e,n,r):p(r))||r);return i&&r&&g(e,n,r),r};const y=()=>f("general-card",c);class c extends _{constructor(){super(...arguments),this.isProject=!1}render(){return s`
			<div class="flex col gap pad-24 full-width">
				${this.isSuper()?s`
					${v(this.content.title,this.content)}
				`:s`
					<h4>${this.content.title}</h4>
					${this.hasDescription()?s`<p class="subtitle">${this.content.description}</p>`:""}

					${this.contentTemplate()}

					${this.content.link?s`
						<div class="flex row justify-between">
							<a href=${this.content.href} target="_blank">${this.content.link}</a>
						</div>
					`:""}
				`}
			</div>
		`}hasDescription(){return this.isProject&&!!this.content.description}contentTemplate(){return this.content.text?this.content.isList?a`<ul>${this.content.text.split(`
`).map(e=>a`<li>${l(e)}</li>`)}</ul>`:a`<p>${l(this.content.text)}</p>`:s``}isSuper(){return this.content.title.startsWith("_super_")}static get styles(){return[...m,d``]}}h([u()],c.prototype,"content",2);h([u()],c.prototype,"isProject",2);export{c as GeneralCard,y as default};
