import{_ as p}from"./index.74c579d2.js";import{d as c,s as d,y as f,i as _}from"./router.78669113.js";import{m as a,c as m}from"./global.f6a47988.js";import{l as u}from"./localized-decorator.e9ce872b.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=(t,r,i,o)=>{for(var e=o>1?void 0:o?b(r,i):r,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(o?n(r,i,e):n(e))||e);return o&&e&&v(r,i,e),e};p(()=>import("./index.d255e0f1.js"),["assets/index.d255e0f1.js","assets/index.7621fae2.css","assets/router.78669113.js","assets/index.74c579d2.js","assets/global.f6a47988.js","assets/global.5c8e5e02.css","assets/localized-decorator.e9ce872b.js"]).then(t=>t.default());p(()=>import("./locale-picker.f5772a3b.js"),["assets/locale-picker.f5772a3b.js","assets/router.78669113.js","assets/index.74c579d2.js","assets/global.f6a47988.js","assets/global.5c8e5e02.css"]).then(t=>t.default());const O=()=>c("mobile-section",s);let s=class extends d{render(){return f`
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
