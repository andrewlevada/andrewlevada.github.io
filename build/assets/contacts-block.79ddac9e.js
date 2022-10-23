import{d,s as c,y as o,i as p}from"./router.bced5954.js";import{m,c as g}from"./index.68e8a515.js";import{l as h}from"./localized-decorator.2effb8d1.js";import"./index.3fb7b565.js";const f="/assets/diamond.fe0d2fc6.svg";var w=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(a,t,n,r)=>{for(var e=r>1?void 0:r?u(t,n):t,i=a.length-1,s;i>=0;i--)(s=a[i])&&(e=(r?s(t,n,e):s(e))||e);return r&&e&&w(t,n,e),e};const j=()=>d("contacts-block",l);let l=class extends c{render(){return o`
			<div class="wrapper flex row justify-between align-center full-width border">
				<h4 class="hide-on-small">${m("Contact me here")}</h4>
				<div class="contacts flex row gap justify-end">
					${["Telegram","Github","LinkedIn","Email"].map((a,t)=>o`
						${t!==0?o`<img src="${f}" alt="">`:""}
						<a class="header sans" href="${x[a.toLowerCase()]}"
						   target="_blank">${a==="Email"?"levada.andrew@gmail.com":a}</a>
					`)}
				</div>
			</div>
		`}static get styles(){return[...g,p`
			.wrapper {
				height: 62px;
				padding-left: 24px;
				padding-right: 24px;
			}

			@media screen and (max-width: 1023px) {
				.wrapper {
					height: auto;
					min-height: 62px;
					padding-bottom: 12px;
					padding-top: 12px;
				}

				.contacts {
					flex-wrap: wrap;
					justify-content: center !important;
					margin-left: auto;
					margin-right: auto;
				}
			}
		`]}};l=v([h()],l);const x={telegram:"https://t.me/andrewlevada",github:"https://github.com/andrewlevada",linkedin:"https://www.linkedin.com/in/andrewlevada",email:"mailto:levada.andrew@gmail.com"};export{l as ContactsBlock,j as default};
