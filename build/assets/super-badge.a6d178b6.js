import{d as p,s as c,n as f,a as n,i as l}from"./router.78669113.js";import{e as u}from"./index.d092ea9b.js";import{c as g}from"./global.f6a47988.js";import"./index.74c579d2.js";var x=Object.defineProperty,m=Object.getOwnPropertyDescriptor,v=(a,r,s,t)=>{for(var e=t>1?void 0:t?m(r,s):r,o=a.length-1,i;o>=0;o--)(i=a[o])&&(e=(t?i(r,s,e):i(e))||e);return t&&e&&x(r,s,e),e};const w=()=>p("super-badge",d);class d extends c{render(){return f`
			<div class="bg flex align-center justify-center">
				<div class="surface">
					<h4>${n(this.content.text)}</h4>
				</div>
			</div>
			
			<!-- This is a fix for some strange text display issue in Chromium -->
			<div class="_bg flex align-center justify-center">
				<div class="_surface">
					<h4 class="fake">${n(this.content.text)}</h4>
				</div>
			</div>
		`}static get styles(){return[...g,l`
			:host {
				position: relative;
				--radius: 26px;
			}
			
			._bg {
				position: absolute;
				top: -36px;
				transform: rotate(3deg);
			}
			
			.bg {
				position: absolute;
				left: -12px;
				top: -38px;
				overflow: hidden;
				
				transform: rotate(3deg);
				
				border-radius: var(--radius);
				border: solid 4px transparent;
			}
			
			.bg:after {
				content: " ";
				display: block;
				position: absolute;
				width: 120%;
				aspect-ratio: 1 / 1;
				
				animation: spin 1s infinite linear;
				background: linear-gradient(#E24E72, #9255E1);
			}
			
			._surface {
				margin: 4px;
				z-index: 2;
				padding: 12px 20px;
				border-radius: calc(var(--radius) - 8px);
			}
			
			.surface {
				margin: 4px;
				z-index: 1;
				
				background: var(--surface-color);
				border-radius: calc(var(--radius) - 8px);
				
				padding: 12px 20px;
			}
			
			h4 {
				width: max-content;
				font-weight: 500;
			}
			
			.fake {
				color: transparent;
			}

			@keyframes spin {
				from {
					transform: rotate(0deg);
				}
				50% {
					transform: rotate(180deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

		`]}}v([u()],d.prototype,"content",2);export{d as SuperBadge,w as default};
