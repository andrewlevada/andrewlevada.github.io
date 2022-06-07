import{d as u,s as d,$ as r,n as l,i as p,r as m}from"./router.6f2f19a4.js";import{c as v,e as h}from"./index.fe516b9a.js";import"./index.078f3803.js";var $=Object.defineProperty,x=Object.getOwnPropertyDescriptor,f=(s,e,i,n)=>{for(var t=n>1?void 0:n?x(e,i):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(t=(n?c(e,i,t):c(t))||t);return n&&t&&$(e,i,t),t},j=()=>u("general-card",a);class a extends d{constructor(){super(...arguments),this.isProject=!1}render(){return r`
            <div class="flex col gap pad-24 full-width">
                <h4>${this.content.title}</h4>
                ${this.hasDescription()?r`<p class="subtitle">${this.content.description}</p>`:""}

                ${this.contentTemplate()}

                ${this.content.link?r`
                    <div class="flex row justify-between">
                        <a href=${this.content.href} target="_blank">${this.content.link}</a>
                    </div>
                `:""}
            </div>
        `}hasDescription(){return this.isProject&&!!this.content.description}contentTemplate(){return this.content.text?this.content.isList?l`<ul>${this.content.text.split(`
`).map(e=>l`<li>${p(e)}</li>`)}</ul>`:l`<p>${p(this.content.text)}</p>`:r``}static get styles(){return[...v,m``]}}f([h()],a.prototype,"content",2);f([h()],a.prototype,"isProject",2);export{a as GeneralCard,j as default};
