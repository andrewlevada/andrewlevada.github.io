import{d as n,r as l,o as t,s as r,$ as c}from"./router.6f2f19a4.js";import{c as i,s}from"./index.fe516b9a.js";import"./index.078f3803.js";var d="/assets/ru.c2dead75.svg",u="/assets/en.b1496877.svg",b=()=>n("locale-picker",o);const e=class extends r{render(){return c`
            <div class="flex row gap">
                <button id="lang-ru" @click=${()=>e.updateLocale("ru")}></button>
                <button id="lang-en" @click=${()=>e.updateLocale("en")}></button>
            </div>
        `}static updateLocale(a){s(a),window.history.replaceState({},document.title,`${window.location.origin}${window.location.pathname}?lang=${a}`)}};let o=e;o.styles=[...i,l`
      button {
        width: 36px;
        height: 36px;
      }
      
      #lang-ru { background: url(${t(d)}) }
      #lang-en { background: url(${t(u)}) }
    `];export{o as LocalePicker,b as default};
