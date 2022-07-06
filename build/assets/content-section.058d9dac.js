import{_ as d}from"./index.72c40e62.js";import{d as m,s as p,$ as c,r as f}from"./router.2001bafd.js";import{m as n,c as u}from"./global.25b3698c.js";import{l as _}from"./localized-decorator.d1b239a1.js";var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,w=(e,o,a,s)=>{for(var r=s>1?void 0:s?x(o,a):o,l=e.length-1,i;l>=0;l--)(i=e[l])&&(r=(s?i(o,a,r):i(r))||r);return s&&r&&v(o,a,r),r};d(()=>import("./cards-column.f14740c4.js"),["assets/cards-column.f14740c4.js","assets/index.72c40e62.js","assets/router.2001bafd.js","assets/index.b9fdb7f5.js","assets/index.5a1ea7c7.css","assets/global.25b3698c.js","assets/global.6627ec04.css","assets/localized-decorator.d1b239a1.js"]).then(e=>e.default());var $=()=>m("content-section",t);let t=class extends p{render(){return c`
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
