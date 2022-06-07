import{_ as c}from"./index.078f3803.js";import{d as h,s as u,$ as i,a as f,r as _}from"./router.6f2f19a4.js";import{a as m,c as v,e as p,t as C}from"./index.fe516b9a.js";import{l as g}from"./localized-decorator.dc06e295.js";var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,o=(e,a,d,s)=>{for(var t=s>1?void 0:s?P(a,d):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(t=(s?n(a,d,t):n(t))||t);return s&&t&&x(a,d,t),t};c(()=>import("./general-card.2a08f889.js"),["assets/general-card.2a08f889.js","assets/router.6f2f19a4.js","assets/index.078f3803.js","assets/index.fe516b9a.js","assets/index.2f78f0c4.css"]).then(e=>e.default());c(()=>import("./badge-card.0e323c1d.js"),["assets/badge-card.0e323c1d.js","assets/router.6f2f19a4.js","assets/index.078f3803.js","assets/index.fe516b9a.js","assets/index.2f78f0c4.css"]).then(e=>e.default());var w=()=>h("cards-column",r);let r=class extends u{constructor(){super(...arguments),this.cards=[]}render(){return i`
            <div class="flex col full-width wrapper-${this.header}">
                <div class="header flex pad-24"><h4>${this.header}</h4></div>
                <div class="flex col full-width cards">
                    ${this.cards.map(e=>e.link||e.text?i`<general-card .content=${e} .isProject=${this.id==="projects"}></general-card>`:i`<badge-card .content=${e}></badge-card>`)}
                </div>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.updateContent(),f(()=>this.updateContent())}updateContent(){m(this.id).then(e=>{this.cards=e})}static get styles(){return[...v,_`
          .header {
            height: 62px;
          }

          .header > * {
            align-self: center;
          }

          .cards > * {
            border-top: solid 2px var(--primary-color);
          }
        `]}};o([p()],r.prototype,"id",2);o([p()],r.prototype,"header",2);o([C()],r.prototype,"cards",2);r=o([g()],r);export{r as CardsColumn,w as default};
