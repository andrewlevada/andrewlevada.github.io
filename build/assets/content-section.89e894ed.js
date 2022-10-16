import{_ as p}from"./index.74c579d2.js";import{d,s as m,y as c,i as f}from"./router.78669113.js";import{m as n,c as x}from"./global.f6a47988.js";import{l as u}from"./localized-decorator.e9ce872b.js";var w=Object.defineProperty,b=Object.getOwnPropertyDescriptor,_=(e,a,t,o)=>{for(var r=o>1?void 0:o?b(a,t):a,l=e.length-1,i;l>=0;l--)(i=e[l])&&(r=(o?i(a,t,r):i(r))||r);return o&&r&&w(a,t,r),r};p(()=>import("./cards-column.b96455e0.js"),["assets/cards-column.b96455e0.js","assets/index.74c579d2.js","assets/router.78669113.js","assets/index.d092ea9b.js","assets/index.51e583db.css","assets/global.f6a47988.js","assets/global.5c8e5e02.css","assets/localized-decorator.e9ce872b.js"]).then(e=>e.default());const j=()=>d("content-section",s);let s=class extends m{render(){return c`
			<div class="flex col full-width">
				<div class="flex row full-width wrapper">
					${s.getColumnsNames().map((e,a)=>c`
						<cards-column class=${`col-${a+1}`} .header=${e.name} .id=${e.id}></cards-column>
					`)}
				</div>
			</div>
		`}static getColumnsNames(){const e=[{name:n("Jobs"),id:"jobs"},{name:n("Projects"),id:"projects"}];return e.push({name:n("Education"),id:"education"}),e}static get styles(){return[...x,f`
			.wrapper { flex-wrap: wrap; }
			.wrapper > * { flex-grow: 1; }
			.col-1 { flex-basis: 36%; }
			.col-2 { flex-basis: 42%; }
			.col-3 { flex-basis: 22%; }

			@media screen and (min-width: 1024px) {
				.wrapper { border: solid 2px var(--primary-color); }
				.wrapper > *:not(:last-child) {
					border-right: solid 2px var(--primary-color);
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
				.col-1 { flex-basis: 35%; }
				.col-2 { flex-basis: 35%; }
				.col-3 { flex-basis: 30%; }
			}
		`]}};s=_([u()],s);export{s as ContentSection,j as default};
