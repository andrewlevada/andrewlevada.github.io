import{r as h,s as m,y as d,d as g}from"./router.6ae4bb88.js";import{c as u,m as f,g as v}from"./global.766a64fd.js";import{l as x}from"./if-defined.4572ce61.js";import{e as a}from"./query-assigned-elements.b2565831.js";import{l as w}from"./localized-decorator.0cce412c.js";import"./index.d57b5669.js";const y=`:host{min-width:fit-content;width:fit-content;height:62px}a{height:100%;padding:8px 14px 8px 0;background:var(--yellow-brand-color);border:2px solid var(--dark-color);border-radius:31px;text-decoration:none!important}a .icon{font-size:24px;margin-right:12px}a>*{color:var(--dark-color)!important}
`;var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(o,r,n,e)=>{for(var t=e>1?void 0:e?b(r,n):r,i=o.length-1,p;i>=0;i--)(p=o[i])&&(t=(e?p(r,n,t):p(t))||t);return e&&t&&_(r,n,t),t};class s extends m{render(){return d`
			<a class="flex row align-center justify-center"
			   href=${this.href} target="_blank"
			   download=${x(this.download)}
			>
				${this.icon?d`<span class="icon material-icons">${this.icon}</span>`:""}
				<h4>${this.text}</h4>
			</a>
		`}}s.styles=[...u,h(y)];l([a({type:String})],s.prototype,"text",2);l([a({type:String})],s.prototype,"href",2);l([a({type:String})],s.prototype,"download",2);l([a({type:String})],s.prototype,"icon",2);var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,O=(o,r,n,e)=>{for(var t=e>1?void 0:e?$(r,n):r,i=o.length-1,p;i>=0;i--)(p=o[i])&&(t=(e?p(r,n,t):p(t))||t);return e&&t&&P(r,n,t),t};const z=()=>g("print-button",c);let c=class extends s{constructor(){super(),this.icon="print"}willUpdate(o){super.willUpdate(o),this.text=f("Get PDF"),this.href=`/static/print_${v()}.pdf`,this.download=f("CV Andrew Levada")}};c=O([w()],c);export{c as PrintButton,z as default};
