import{d as o,s as i,$ as d,r as c}from"./router.6f2f19a4.js";import{c as f,e as g}from"./index.fe516b9a.js";import"./index.078f3803.js";var h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,v=(a,t,n,r)=>{for(var e=r>1?void 0:r?m(t,n):t,s=a.length-1,p;s>=0;s--)(p=a[s])&&(e=(r?p(t,n,e):p(e))||e);return r&&e&&h(t,n,e),e},b=()=>o("badge-card",l);class l extends i{render(){return d`
            <div class="flex row align-center full-width">
                <a class="header flex row gap align-center" href=${this.content.href} target="_blank">
                    ${this.content.title}
                    <span class="material-icons-round">north_east</span>
                </a>
            </div>
        `}static get styles(){return[...f,c`
          div {
            height: 62px;
            padding-left: 24px;
            padding-right: 24px;
          }
          
          span {
            margin-left: 4px;
          }
        `]}}v([g({type:Object})],l.prototype,"content",2);export{l as BadgeCardElement,b as default};
