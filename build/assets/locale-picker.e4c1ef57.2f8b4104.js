import{d as s,i as n,r as e,s as c,y as l}from"./router.33be5d89.d089ca50.js";import{c as r,s as i}from"./index.dd84ea55.b1ec46d6.js";import"./index.1f205c7a.js";const u="/assets/ru.315fc65e.svg",d="/assets/en.bc3bb1a9.svg",w=()=>s("locale-picker",o),t=class extends c{render(){return l`
            <div class="flex row gap">
                <button id="lang-ru" @click=${()=>t.updateLocale("ru")}></button>
                <button id="lang-en" @click=${()=>t.updateLocale("en")}></button>
            </div>
        `}static updateLocale(a){i(a),window.history.replaceState({},document.title,`${window.location.origin}${window.location.pathname}?lang=${a}`)}};let o=t;o.styles=[...r,n`
		button {
			width: 36px;
			height: 36px;
		}

		#lang-ru { background: url(${e(u)}) }
		#lang-en { background: url(${e(d)}) }
	`];export{o as LocalePicker,w as default};
