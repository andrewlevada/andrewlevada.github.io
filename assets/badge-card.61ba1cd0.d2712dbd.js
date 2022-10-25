import{d as l,s as d,y as c,i as p}from"./router.33be5d89.d089ca50.js";import{d as g}from"./query-assigned-elements.b2565831.68928b3d.js";import{c as f}from"./index.dd84ea55.b1ec46d6.js";import"./index.1f205c7a.js";var h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,v=(a,t,n,r)=>{for(var e=r>1?void 0:r?m(t,n):t,i=a.length-1,s;i>=0;i--)(s=a[i])&&(e=(r?s(t,n,e):s(e))||e);return r&&e&&h(t,n,e),e};const b=()=>l("badge-card",o);class o extends d{render(){var t;return c`
			<div class="flex row align-center full-width">
				<a class="header flex row gap align-center" href=${(t=this.content.link)==null?void 0:t.url} target="_blank">
					${this.content.title}
					<span class="material-icons">north_east</span>
				</a>
			</div>
		`}static get styles(){return[...f,p`
			div {
				height: 62px;
				padding-left: 24px;
				padding-right: 24px;
			}

			span {
				margin-left: 4px;
			}
		`]}}v([g({type:Object})],o.prototype,"content",2);export{o as BadgeCardElement,b as default};
