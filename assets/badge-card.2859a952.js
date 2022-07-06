import{d as i,s as l,$ as d,r as c}from"./router.2001bafd.js";import{e as f}from"./index.b9fdb7f5.js";import{c as g}from"./global.25b3698c.js";import"./index.72c40e62.js";var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,v=(a,t,n,r)=>{for(var e=r>1?void 0:r?h(t,n):t,s=a.length-1,p;s>=0;s--)(p=a[s])&&(e=(r?p(t,n,e):p(e))||e);return r&&e&&m(t,n,e),e},w=()=>i("badge-card",o);class o extends l{render(){return d`
            <div class="flex row align-center full-width">
                <a class="header flex row gap align-center" href=${this.content.href} target="_blank">
                    ${this.content.title}
                    <span class="material-icons-round">north_east</span>
                </a>
            </div>
        `}static get styles(){return[...g,c`
          div {
            height: 62px;
            padding-left: 24px;
            padding-right: 24px;
          }
          
          span {
            margin-left: 4px;
          }
        `]}}v([f({type:Object})],o.prototype,"content",2);export{o as BadgeCardElement,w as default};
