import{d as i,s as l,y as d,i as c}from"./router.78669113.js";import{e as f}from"./index.d092ea9b.js";import{c as g}from"./global.f6a47988.js";import"./index.74c579d2.js";var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,v=(a,t,n,r)=>{for(var e=r>1?void 0:r?h(t,n):t,s=a.length-1,o;s>=0;s--)(o=a[s])&&(e=(r?o(t,n,e):o(e))||e);return r&&e&&m(t,n,e),e};const w=()=>i("badge-card",p);class p extends l{render(){return d`
			<div class="flex row align-center full-width">
				<a class="header flex row gap align-center" href=${this.content.href} target="_blank">
					${this.content.title}
					<span class="material-icons-round">north_east</span>
				</a>
			</div>
		`}static get styles(){return[...g,c`
			div {
				height: 62px;
				padding-left: 24px;
				padding-right: 24px;
			}

			span {
				margin-left: 4px;
			}
		`]}}v([f({type:Object})],p.prototype,"content",2);export{p as BadgeCardElement,w as default};
