import{d as l,s as o,y as c,i as d}from"./router.6ae4bb88.js";import{e as f}from"./query-assigned-elements.b2565831.js";import{c as g}from"./global.766a64fd.js";import"./index.d57b5669.js";var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,v=(a,e,n,r)=>{for(var t=r>1?void 0:r?h(e,n):e,s=a.length-1,p;s>=0;s--)(p=a[s])&&(t=(r?p(e,n,t):p(t))||t);return r&&t&&m(e,n,t),t};const w=()=>l("badge-card",i);class i extends o{render(){var e;return c`
			<div class="flex row align-center full-width">
				<a class="header flex row gap align-center" href=${(e=this.content.link)==null?void 0:e.url} target="_blank">
					${this.content.title}
					<span class="material-icons">north_east</span>
				</a>
			</div>
		`}static get styles(){return[...g,d`
			div {
				height: 62px;
				padding-left: 24px;
				padding-right: 24px;
			}

			span {
				margin-left: 4px;
			}
		`]}}v([f({type:Object})],i.prototype,"content",2);export{i as BadgeCardElement,w as default};
