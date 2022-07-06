import{d as n,r as l,o as t,s as r,$ as c}from"./router.2001bafd.js";import{c as i,s}from"./global.25b3698c.js";import"./index.72c40e62.js";var d="/assets/ru.c2dead75.svg",u="/assets/en.b1496877.svg",b=()=>n("locale-picker",o);const e=class extends r{render(){return c`
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
