import{d,s as c,y as o,i as p}from"./router.78669113.js";import{m,c as g}from"./global.f6a47988.js";import{l as h}from"./localized-decorator.e9ce872b.js";import"./index.74c579d2.js";const w="/assets/diamond.27cec17b.svg";var f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(t,a,r,n)=>{for(var e=n>1?void 0:n?u(a,r):a,i=t.length-1,s;i>=0;i--)(s=t[i])&&(e=(n?s(a,r,e):s(e))||e);return n&&e&&f(a,r,e),e};const j=()=>d("contacts-section",l);let l=class extends c{render(){return o`
            <div class="wrapper flex row justify-between align-center full-width border">
                <h4 class="hide-on-small">${m("Contact me here")}</h4>
                <div class="contacts flex row gap justify-end">
                    ${["Telegram","Github","LinkedIn","Email"].map((t,a)=>o`
                        ${a!==0?o`<img src="${w}" alt="">`:""}
                        <a class="header sans" href="${x[t.toLowerCase()]}" target="_blank">${t==="Email"?"levada.andrew@gmail.com":t}</a>
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
        `]}};l=v([h()],l);const x={telegram:"https://t.me/andrewlevada",github:"https://github.com/andrewlevada",linkedin:"https://www.linkedin.com/in/andrewlevada",email:"mailto:levada.andrew@gmail.com"};export{l as ContactsSection,j as default};
