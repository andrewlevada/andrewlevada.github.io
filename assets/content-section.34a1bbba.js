import{_ as d}from"./index.078f3803.js";import{d as m,s as p,$ as c,r as f}from"./router.6f2f19a4.js";import{m as n,c as u}from"./index.fe516b9a.js";import{l as _}from"./localized-decorator.dc06e295.js";var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,w=(e,o,a,s)=>{for(var r=s>1?void 0:s?x(o,a):o,l=e.length-1,i;l>=0;l--)(i=e[l])&&(r=(s?i(o,a,r):i(r))||r);return s&&r&&v(o,a,r),r};d(()=>import("./cards-column.606eedda.js"),["assets/cards-column.606eedda.js","assets/index.078f3803.js","assets/router.6f2f19a4.js","assets/index.fe516b9a.js","assets/index.2f78f0c4.css","assets/localized-decorator.dc06e295.js"]).then(e=>e.default());var $=()=>m("content-section",t);let t=class extends p{render(){return c`
            <div class="flex col full-width border">
                <div class="flex row full-width wrapper">
                    ${t.getColumnsNames().map((e,o)=>c`
                        <cards-column class=${`col-${o+1}`} .header=${e.name} .id=${e.id}></cards-column>
                    `)}
                </div>
            </div>
        `}static getColumnsNames(){const e=[{name:n("Jobs"),id:"jobs"},{name:n("Projects"),id:"projects"}];return window.innerWidth>=1440&&e.push({name:n("Education"),id:"education"}),e}static get styles(){return[...u,f`
          .wrapper > * { flex-grow: 1; }
          .col-1 { flex-basis: 36%; }
          .col-2 { flex-basis: 42%; }
          .col-3 { flex-basis: 22%; }
          
          .wrapper > *:not(:last-child) {
            border-right: solid 2px var(--primary-color);
          }

          @media screen and (max-width: 1439px) {
            .col-1 { flex-basis: 46%; }
            .col-2 { flex-basis: 54%; }
          }
        `]}};t=w([_()],t);export{t as ContentSection,$ as default};
