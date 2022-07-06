import{_ as c}from"./index.72c40e62.js";import{d as h,s as u,$ as i,a as f,r as m}from"./router.2001bafd.js";import{g as _,e as p,t as v}from"./index.b9fdb7f5.js";import{c as C}from"./global.25b3698c.js";import{l as g}from"./localized-decorator.d1b239a1.js";var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,s=(e,a,d,o)=>{for(var t=o>1?void 0:o?P(a,d):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(t=(o?n(a,d,t):n(t))||t);return o&&t&&x(a,d,t),t};c(()=>import("./general-card.c0af3943.js"),["assets/general-card.c0af3943.js","assets/router.2001bafd.js","assets/index.72c40e62.js","assets/index.b9fdb7f5.js","assets/index.5a1ea7c7.css","assets/global.25b3698c.js","assets/global.6627ec04.css"]).then(e=>e.default());c(()=>import("./badge-card.2859a952.js"),["assets/badge-card.2859a952.js","assets/router.2001bafd.js","assets/index.72c40e62.js","assets/index.b9fdb7f5.js","assets/index.5a1ea7c7.css","assets/global.25b3698c.js","assets/global.6627ec04.css"]).then(e=>e.default());var j=()=>h("cards-column",r);let r=class extends u{constructor(){super(...arguments),this.cards=[]}render(){return i`
            <div class="flex col full-width wrapper-${this.header}">
                <div class="header flex pad-24"><h4>${this.header}</h4></div>
                <div class="flex col full-width cards">
                    ${this.cards.map(e=>e.link||e.text?i`<general-card .content=${e} .isProject=${this.id==="projects"}></general-card>`:i`<badge-card .content=${e}></badge-card>`)}
                </div>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.updateContent(),f(()=>this.updateContent())}updateContent(){_(this.id).then(e=>{this.cards=e})}static get styles(){return[...C,m`
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
