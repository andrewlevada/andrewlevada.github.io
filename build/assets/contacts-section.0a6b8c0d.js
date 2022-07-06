import{d as l,s as p,$ as o,r as m}from"./router.2001bafd.js";import{m as c,c as g}from"./global.25b3698c.js";import{l as h}from"./localized-decorator.d1b239a1.js";import"./index.72c40e62.js";var w="/assets/diamond.e3ad6260.svg",f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,u=(a,t,n,r)=>{for(var e=r>1?void 0:r?v(t,n):t,i=a.length-1,s;i>=0;i--)(s=a[i])&&(e=(r?s(t,n,e):s(e))||e);return r&&e&&f(t,n,e),e},y=()=>l("contacts-section",d);let d=class extends p{render(){return o`
            <div class="wrapper flex row justify-between align-center full-width border">
                <h4 class="hide-on-small">${c("Contact me here")}</h4>
                <div class="contacts flex row gap justify-end">
                    ${["Telegram","Github","LinkedIn","Email"].map((a,t)=>o`
                        ${t!==0?o`<img src="${w}" alt="">`:""}
                        <a class="header sans" href="${x[a.toLowerCase()]}" target="_blank">${a==="Email"?"levada.andrew@gmail.com":a}</a>
                    `)}
                </div>
            </div>
        `}static get styles(){return[...g,m`
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
        `]}};d=u([h()],d);const x={telegram:"https://t.me/andrewlevada",github:"https://github.com/andrewlevada",linkedin:"https://www.linkedin.com/in/andrewlevada",email:"mailto:levada.andrew@gmail.com"};export{d as ContactsSection,y as default};
