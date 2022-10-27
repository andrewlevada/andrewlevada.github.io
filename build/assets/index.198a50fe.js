import{d,s as c,y as r,r as p}from"./router.acc4959c.js";import{m,c as h}from"./index.c1b553b3.js";import{l as g}from"./localized-decorator.7b020f84.js";import"./index.cb1b60eb.js";const w=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}.wrapper{height:var(--navigation-height);padding-left:24px;padding-right:24px}.contact-icon{width:24px;height:24px}@media screen and (max-width: 1023px){.wrapper{padding:18px}}@media screen and (max-width: 428px){.contacts{justify-content:flex-start!important;flex-wrap:wrap}#email{margin-top:12px;flex-basis:100%}}
`,x="/assets/github.c9af8542.svg",f="/assets/linkedin.37b81d06.svg",v="/assets/telegram.8563a2a1.svg";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,u=(a,t,n,s)=>{for(var e=s>1?void 0:s?b(t,n):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(e=(s?l(t,n,e):l(e))||e);return s&&e&&y(t,n,e),e};const _=[["Telegram","https://t.me/andrewlevada",v],["Github","https://github.com/andrewlevada",x],["LinkedIn","https://www.linkedin.com/in/andrewlevada",f]],I=()=>d("contacts-block",o);let o=class extends c{render(){return r`
			<div class="wrapper flex row justify-between align-center full-width border">
				<h4 class="hide-on-small">${m("Contact me here")}</h4>
				<div class="contacts flex row gap justify-end">
					${_.map(a=>r`
						<a class="header sans" href="${a[1]}" target="_blank">
							<span class="hide-on-small">${a[0]==="Email"?"levada.andrew@gmail.com":a[0]}</span>
							<img class="contact-icon small-only" src=${a[2]} alt=${a[0]}>
						</a>
					`)}

					<a id="email" class="header sans" href="mailto:levada.andrew@gmail.com" target="_blank">
						<span>levada.andrew@gmail.com</span>
					</a>
				</div>
			</div>
		`}static get styles(){return[...h,p(w)]}};o=u([g()],o);export{o as ContactsBlock,I as default};
