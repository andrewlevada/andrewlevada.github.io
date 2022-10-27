import{_ as d}from"./index.08c554b6.js";import{d as m,s as c,y as i,r as w}from"./router.33be5d89.js";import{m as p,c as x}from"./index.dd84ea55.js";import{l as f}from"./localized-decorator.526aa812.js";const u=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}.wrapper{flex-wrap:wrap;justify-content:end}.wrapper>*{flex-grow:1}.wrapper .col-1{flex-basis:36%}.wrapper .col-2{flex-basis:42%}.wrapper .col-3{flex-basis:22%}@media screen and (max-width: 1439px){.wrapper .col-1,.wrapper .col-2{flex-basis:35%}.wrapper .col-3{flex-basis:30%}}@media screen and (min-width: 1024px){.wrapper{border:solid 2px var(--dark-color)}.wrapper>*:not(:last-child){border-right:solid 2px var(--dark-color)}}@media screen and (max-width: 1023px){.wrapper>*{flex-basis:auto!important}.wrapper>*:not(:last-child){margin-bottom:32px}}
`;var h=Object.defineProperty,_=Object.getOwnPropertyDescriptor,b=(e,a,o,t)=>{for(var r=t>1?void 0:t?_(a,o):a,n=e.length-1,s;n>=0;n--)(s=e[n])&&(r=(t?s(a,o,r):s(r))||r);return t&&r&&h(a,o,r),r};d(()=>import("./index.88d93c41.js"),["assets/index.88d93c41.js","assets/index.4fff5802.css","assets/index.08c554b6.js","assets/router.33be5d89.js","assets/query-assigned-elements.b2565831.js","assets/index.dd84ea55.js","assets/index.d82a4810.css","assets/localized-decorator.526aa812.js"]).then(e=>e.default());const j=()=>m("content-landing-part",l);let l=class extends c{getColumns(){return[{name:p("Jobs"),id:"jobs"},{name:p("Projects"),id:"projects"},{name:p("Education"),id:"education"}]}render(){return i`
			<div class="flex row full-width wrapper">
				${this.getColumns().map((e,a)=>i`
					<cards-column class=${`col-${a+1}`} .header=${e.name} .id=${e.id}></cards-column>
				`)}
			</div>
		`}static get styles(){return[...x,w(u)]}};l=b([f()],l);export{l as ContentLandingPart,j as default};