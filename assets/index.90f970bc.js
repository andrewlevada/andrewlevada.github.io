import{d as c,s as d,y as r,r as p}from"./router.33be5d89.js";import{m,c as h}from"./index.dd84ea55.js";import{l as g}from"./localized-decorator.526aa812.js";import"./index.08c554b6.js";const w=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}.wrapper{height:62px;padding-left:24px;padding-right:24px}@media screen and (max-width: 1023px){.wrapper{justify-content:center!important}}.contact-icon{width:24px;height:24px}
`,f="/assets/github.c9af8542.svg",v="/assets/linkedin.37b81d06.svg",x="/assets/telegram.8563a2a1.svg";var y=Object.defineProperty,u=Object.getOwnPropertyDescriptor,b=(a,t,n,s)=>{for(var e=s>1?void 0:s?u(t,n):t,l=a.length-1,i;l>=0;l--)(i=a[l])&&(e=(s?i(t,n,e):i(e))||e);return s&&e&&y(t,n,e),e};const _=[["Telegram","https://t.me/andrewlevada",x],["Github","https://github.com/andrewlevada",f],["LinkedIn","https://www.linkedin.com/in/andrewlevada",v]],I=()=>c("contacts-block",o);let o=class extends d{render(){return r`
			<div class="wrapper flex row justify-between align-center full-width border">
				<h4 class="hide-on-small">${m("Contact me here")}</h4>
				<div class="contacts flex row gap justify-end">
					${_.map(a=>r`
						<a class="header sans" href="${a[1]}" target="_blank">
							<span class="hide-on-small">${a[0]==="Email"?"levada.andrew@gmail.com":a[0]}</span>
							<img class="contact-icon small-only" src=${a[2]} alt=${a[0]}>
						</a>
					`)}

					<a class="header sans" href="mailto:levada.andrew@gmail.com" target="_blank">
						<span>levada.andrew@gmail.com</span>
					</a>
				</div>
			</div>
		`}static get styles(){return[...h,p(w)]}};o=b([g()],o);export{o as ContactsBlock,I as default};
