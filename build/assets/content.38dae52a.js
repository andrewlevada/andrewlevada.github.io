import{_ as c}from"./index.3fb7b565.js";import{d as p,s as m,y as d,i as f}from"./router.bced5954.js";import{m as i,c as x}from"./index.68e8a515.js";import{l as u}from"./localized-decorator.2effb8d1.js";var w=Object.defineProperty,b=Object.getOwnPropertyDescriptor,_=(e,a,o,s)=>{for(var r=s>1?void 0:s?b(a,o):a,t=e.length-1,l;t>=0;t--)(l=e[t])&&(r=(s?l(a,o,r):l(r))||r);return s&&r&&w(a,o,r),r};c(()=>import("./cards-column.ed6e126c.js"),["assets/cards-column.ed6e126c.js","assets/index.3fb7b565.js","assets/router.bced5954.js","assets/query-assigned-elements.b2565831.js","assets/index.68e8a515.js","assets/index.09e88b4c.css","assets/localized-decorator.2effb8d1.js"]).then(e=>e.default());const j=()=>p("content-landing-part",n);let n=class extends m{constructor(){super(...arguments),this.columns=[{name:i("Jobs"),id:"jobs"},{name:i("Projects"),id:"projects"},{name:i("Education"),id:"education"}]}render(){return d`
			<div class="flex col full-width">
				<div class="flex row full-width wrapper">
					${this.columns.map((e,a)=>d`
						<cards-column class=${`col-${a+1}`} .header=${e.name} .id=${e.id}></cards-column>
					`)}
				</div>
			</div>
		`}static get styles(){return[...x,f`
			.wrapper {
				flex-wrap: wrap;
			}

			.wrapper > * {
				flex-grow: 1;
			}

			.col-1 {
				flex-basis: 36%;
			}

			.col-2 {
				flex-basis: 42%;
			}

			.col-3 {
				flex-basis: 22%;
			}

			@media screen and (min-width: 1024px) {
				.wrapper {
					border: solid 2px var(--dark-color);
				}

				.wrapper > *:not(:last-child) {
					border-right: solid 2px var(--dark-color);
				}
			}

			@media screen and (max-width: 1023px) {
				.wrapper > * {
					flex-basis: auto !important;
				}

				.wrapper > *:not(:last-child) {
					margin-bottom: 32px;
				}
			}

			@media screen and (max-width: 1439px) {
				.col-1 {
					flex-basis: 35%;
				}

				.col-2 {
					flex-basis: 35%;
				}

				.col-3 {
					flex-basis: 30%;
				}
			}
		`]}};n=_([u()],n);export{n as ContentLandingPart,j as default};
