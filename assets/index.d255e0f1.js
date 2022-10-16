import{d as c,s as l,y as d,r as f}from"./router.78669113.js";import{g as m,m as p,c as g}from"./global.f6a47988.js";import{l as x}from"./localized-decorator.e9ce872b.js";import"./index.74c579d2.js";const u=`:host{min-width:fit-content;width:fit-content}a{padding:8px 14px 8px 12px;background:var(--primary-color);transition:background-color .1s ease;border-radius:14px;text-decoration:none!important}a>*:first-child{margin-right:12px!important}a img{width:28px;height:28px}a *{color:var(--surface-color)!important;text-decoration:none!important;font-family:Ubuntu,sans-serif!important;font-weight:500;font-size:20px}a:hover{background:var(--dark-primary-color)}
`,h="/assets/print.2ef8430e.svg";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,w=(s,r,n,o)=>{for(var t=o>1?void 0:o?b(r,n):r,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(o?i(r,n,t):i(t))||t);return o&&t&&v(r,n,t),t};const O=()=>c("print-button",e);let e=class extends l{render(){return d`
            <a class="flex row gap align-center" href=${`/static/print_${m()}.pdf`} target="_blank" download=${p("CV Andrew Levada")}>
                <img src="${h}" alt="">
                <p>${p("Get PDF")}</p>
            </a>
        `}};e.styles=[...g,f(u)];e=w([x()],e);export{e as PrintButton,O as default};
