import{_ as p}from"./index.078f3803.js";import{d as c,s as d,$ as f,r as _}from"./router.6f2f19a4.js";import{m as a,c as m}from"./index.fe516b9a.js";import{l as u}from"./localized-decorator.dc06e295.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=(t,r,i,o)=>{for(var e=o>1?void 0:o?b(r,i):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,i,e):n(e))||e);return o&&e&&v(r,i,e),e};p(()=>import("./index.c5fa3c08.js"),["assets/index.c5fa3c08.js","assets/index.012204c7.css","assets/router.6f2f19a4.js","assets/index.078f3803.js","assets/index.fe516b9a.js","assets/index.2f78f0c4.css","assets/localized-decorator.dc06e295.js"]).then(t=>t.default());p(()=>import("./locale-picker.61d72f09.js"),["assets/locale-picker.61d72f09.js","assets/router.6f2f19a4.js","assets/index.078f3803.js","assets/index.fe516b9a.js","assets/index.2f78f0c4.css"]).then(t=>t.default());var O=()=>c("mobile-section",s);let s=class extends d{render(){return f`
            <div class="flex col full-width full-height gap align-center justify-center s-40">
                <h3>${a("Hello! I am Andrew \u{1F590}\uFE0F ")}</h3>
                
                <div class="flex row gap align-center">
                    <locale-picker></locale-picker>
                    <print-button></print-button>
                </div>
                <p>${a("Full web version of this CV can be viewed on desktop")}</p>
            </div>
        `}static get styles(){return[...m,_`
          div {
            padding: 16px;
          }

          * {
            text-align: center;
          }
        `]}};s=g([u()],s);export{s as MobileSection,O as default};
