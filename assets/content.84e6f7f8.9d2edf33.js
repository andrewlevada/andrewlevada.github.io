import{f as l,_ as c}from"./index.1f205c7a.js";import{d as m,s as x,y as p,r as w}from"./router.33be5d89.d089ca50.js";import{m as o,c as f}from"./index.dd84ea55.b1ec46d6.js";import{h as u}from"./localized-decorator.526aa812.f1171b43.js";const h=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}.wrapper{flex-wrap:wrap;justify-content:end}.wrapper>*{flex-grow:1}.wrapper .col-1{flex-basis:36%}.wrapper .col-2{flex-basis:42%}.wrapper .col-3{flex-basis:22%}@media screen and (max-width: 1439px){.wrapper .col-1,.wrapper .col-2{flex-basis:35%}.wrapper .col-3{flex-basis:30%}}@media screen and (min-width: 1024px){.wrapper{border:solid 2px var(--dark-color)}.wrapper>*:not(:last-child){border-right:solid 2px var(--dark-color)}}@media screen and (max-width: 1023px){.wrapper>*{flex-basis:auto!important}.wrapper>*:not(:last-child){margin-bottom:32px}}
`;var b=Object.defineProperty,j=Object.getOwnPropertyDescriptor,y=(e,s,t,r)=>{for(var a=r>1?void 0:r?j(s,t):s,d=e.length-1,n;d>=0;d--)(n=e[d])&&(a=(r?n(s,t,a):n(a))||a);return r&&a&&b(s,t,a),a};l(()=>c(()=>import("./index.88d93c41.9246c393.js"),["assets/index.88d93c41.9246c393.js","assets/index.1f205c7a.js","assets/router.33be5d89.d089ca50.js","assets/query-assigned-elements.b2565831.68928b3d.js","assets/index.dd84ea55.b1ec46d6.js","assets/localized-decorator.526aa812.f1171b43.js"]),["assets/index.88d93c41.js","assets/index.4fff5802.css","assets/index.08c554b6.js","assets/router.33be5d89.js","assets/query-assigned-elements.b2565831.js","assets/index.dd84ea55.js","assets/index.d82a4810.css","assets/localized-decorator.526aa812.js"]).then(e=>e.default());const $=()=>m("content-landing-part",i);let i=class extends x{getColumns(){return[{name:o("Jobs"),id:"jobs"},{name:o("Projects"),id:"projects"},{name:o("Education"),id:"education"}]}render(){return p`
			<div class="flex row full-width wrapper">
				${this.getColumns().map((e,s)=>p`
					<cards-column class=${`col-${s+1}`} .header=${e.name} .id=${e.id}></cards-column>
				`)}
			</div>
		`}static get styles(){return[...f,w(h)]}};i=y([u()],i);export{i as ContentLandingPart,$ as default};
