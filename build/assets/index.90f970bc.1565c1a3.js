import{d as o,s as c,y as d,r as p}from"./router.33be5d89.d089ca50.js";import{m,c as h}from"./index.dd84ea55.b1ec46d6.js";import{h as w}from"./localized-decorator.526aa812.f1171b43.js";import"./index.1f205c7a.js";const g=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}.wrapper{height:62px;padding-left:24px;padding-right:24px}@media screen and (max-width: 1023px){.wrapper{justify-content:center!important}}.contact-icon{width:24px;height:24px}
`,f="/assets/github.c9af8542.svg",x="/assets/linkedin.37b81d06.svg",v="/assets/telegram.8563a2a1.svg";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,u=(a,t,n,s)=>{for(var e=s>1?void 0:s?b(t,n):t,r=a.length-1,i;r>=0;r--)(i=a[r])&&(e=(s?i(t,n,e):i(e))||e);return s&&e&&y(t,n,e),e};const k=[["Telegram","https://t.me/andrewlevada",v],["Github","https://github.com/andrewlevada",f],["LinkedIn","https://www.linkedin.com/in/andrewlevada",x]],C=()=>o("contacts-block",l);let l=class extends c{render(){return d`
			<div class="wrapper flex row justify-between align-center full-width border">
				<h4 class="hide-on-small">${m("Contact me here")}</h4>
				<div class="contacts flex row gap justify-end">
					${k.map(a=>d`
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
		`}static get styles(){return[...h,p(g)]}};l=u([w()],l);export{l as ContactsBlock,C as default};
