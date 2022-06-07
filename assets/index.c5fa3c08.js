import{d as c,s as d,$ as l,o as m}from"./router.6f2f19a4.js";import{g as f,m as p,c as g}from"./index.fe516b9a.js";import{l as v}from"./localized-decorator.dc06e295.js";import"./index.078f3803.js";var x=`:host{min-width:fit-content;width:fit-content}a{padding:8px 14px 8px 12px;background:var(--primary-color);transition:background-color .1s ease;border-radius:14px;text-decoration:none!important}a>*:first-child{margin-right:12px!important}a img{width:28px;height:28px}a *{color:var(--surface-color)!important;text-decoration:none!important;font-family:Ubuntu,sans-serif!important;font-weight:500;font-size:20px}a:hover{background:var(--dark-primary-color)}
`,u="/assets/print.d8ace538.svg",h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,w=(s,r,e,a)=>{for(var t=a>1?void 0:a?b(r,e):r,n=s.length-1,i;n>=0;n--)(i=s[n])&&(t=(a?i(r,e,t):i(t))||t);return a&&t&&h(r,e,t),t},O=()=>c("print-button",o);let o=class extends d{render(){return l`
            <a class="flex row gap align-center" href=${`/static/print_${f()}.pdf`} target="_blank" download=${p("CV Andrew Levada")}>
                <img src="${u}" alt="">
                <p>${p("Get PDF")}</p>
            </a>
        `}};o.styles=[...g,m(x)];o=w([v()],o);export{o as PrintButton,O as default};
