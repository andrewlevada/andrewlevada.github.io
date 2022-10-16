import{_ as c}from"./index.74c579d2.js";import{d as h,s as m,y as l,o as u,i as f}from"./router.78669113.js";import{g as _,e as p,t as v}from"./index.d092ea9b.js";import{c as x}from"./global.f6a47988.js";import{l as g}from"./localized-decorator.e9ce872b.js";var C=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(e,o,d,a)=>{for(var t=a>1?void 0:a?b(o,d):o,i=e.length-1,n;i>=0;i--)(n=e[i])&&(t=(a?n(o,d,t):n(t))||t);return a&&t&&C(o,d,t),t};c(()=>import("./general-card.dabb66da.js"),["assets/general-card.dabb66da.js","assets/router.78669113.js","assets/index.74c579d2.js","assets/index.d092ea9b.js","assets/index.51e583db.css","assets/global.f6a47988.js","assets/global.5c8e5e02.css"]).then(e=>e.default());c(()=>import("./badge-card.3757f6f9.js"),["assets/badge-card.3757f6f9.js","assets/router.78669113.js","assets/index.74c579d2.js","assets/index.d092ea9b.js","assets/index.51e583db.css","assets/global.f6a47988.js","assets/global.5c8e5e02.css"]).then(e=>e.default());const j=()=>h("cards-column",r);let r=class extends m{constructor(){super(...arguments),this.cards=[]}render(){return l`
			<div class="flex col full-width wrapper-${this.header} top">
				<div class="header flex pad-24"><h4>${this.header}</h4></div>
				<div class="flex col full-width cards">
					${this.cards.map(e=>e.link||e.text?l`
						<general-card .content=${e} .isProject=${this.id==="projects"}></general-card>
					`:l`
						<badge-card .content=${e}></badge-card>
					`)}
				</div>
			</div>
		`}connectedCallback(){super.connectedCallback(),this.updateContent(),u(()=>this.updateContent())}updateContent(){_(this.id).then(e=>{this.cards=e})}static get styles(){return[...x,f`
			.top {
				box-sizing: content-box;
			}

			@media screen and (max-width: 1023px) {
				.top {
					border: 2px var(--primary-color) solid;
				}
			}
			
			.header {
				height: 62px;
			}

			.header > * {
				align-self: center;
			}

			.cards > * {
				border-top: solid 2px var(--primary-color);
			}
		`]}};s([p()],r.prototype,"id",2);s([p()],r.prototype,"header",2);s([v()],r.prototype,"cards",2);r=s([g()],r);export{r as CardsColumn,j as default};
