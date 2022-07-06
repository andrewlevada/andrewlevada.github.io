import{d as u,s as d,$ as r,n as l,i as a,r as m}from"./router.2001bafd.js";import{e as h}from"./index.b9fdb7f5.js";import{c as v}from"./global.25b3698c.js";import"./index.72c40e62.js";var $=Object.defineProperty,x=Object.getOwnPropertyDescriptor,f=(s,e,i,n)=>{for(var t=n>1?void 0:n?x(e,i):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(t=(n?c(e,i,t):c(t))||t);return n&&t&&$(e,i,t),t},b=()=>u("general-card",p);class p extends d{constructor(){super(...arguments),this.isProject=!1}render(){return r`
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
`).map(e=>l`<li>${a(e)}</li>`)}</ul>`:l`<p>${a(this.content.text)}</p>`:r``}static get styles(){return[...v,m``]}}f([h()],p.prototype,"content",2);f([h()],p.prototype,"isProject",2);export{p as GeneralCard,b as default};
