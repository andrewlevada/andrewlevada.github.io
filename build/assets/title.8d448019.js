import{d,s as f,y as m,i as c}from"./router.bced5954.js";import{m as o,c as p}from"./index.68e8a515.js";import{l as h}from"./localized-decorator.2effb8d1.js";import"./index.3fb7b565.js";var x=Object.defineProperty,g=Object.getOwnPropertyDescriptor,u=(a,t,r,n)=>{for(var e=n>1?void 0:n?g(t,r):t,i=a.length-1,s;i>=0;i--)(s=a[i])&&(e=(n?s(t,r,e):s(e))||e);return n&&e&&x(t,r,e),e};const _=()=>d("title-landing-part",l);let l=class extends f{render(){return m`
			<div class="flex col justify-center align-center full-width full-height">
				<div class="flex row justify-between full-width">
					<h1 id="name-header">${o("Hey! I\u2019m\xA0Andrew,")}</h1>
					<h1>${o("Aspiring\xA0UX\xA0Engineer with\xA0management, coding\xA0and\xA0design\xA0skills.")}</h1>
				</div>
			</div>
		`}static get styles(){return[...p,c`
			h1 {
				width: min-content;
			}
			
			#name-header {
				transform: translateY(-82px);
			}
		`]}};l=u([h()],l);export{l as TitleLandingPart,_ as default};
