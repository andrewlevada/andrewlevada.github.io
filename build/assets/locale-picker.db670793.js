import{d as n,i as c,r as o,s as l,y as s}from"./router.698b93dc.js";import{c as r,s as i}from"./index.5f430525.js";import"./index.82f7b823.js";const u="/assets/ru.315fc65e.svg",d="/assets/en.bc3bb1a9.svg",m=()=>n("locale-picker",a),e=class extends l{render(){return s`
            <div class="flex row gap">
                <button id="lang-ru" @click=${()=>e.updateLocale("ru")}></button>
                <button id="lang-en" @click=${()=>e.updateLocale("en")}></button>
            </div>
        `}static updateLocale(t){i(t),window.history.replaceState({},document.title,`${window.location.origin}${window.location.pathname}?lang=${t}`)}};let a=e;a.styles=[...r,c`
		button {
			width: 36px;
			height: 36px;
		}

		#lang-ru { background: url(${o(u)}) }
		#lang-en { background: url(${o(d)}) }
	`];export{a as LocalePicker,m as default};
