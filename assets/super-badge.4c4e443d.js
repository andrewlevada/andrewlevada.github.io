import{d as f,s as l,n as g,a as p,r as u}from"./router.698b93dc.js";import{e as d}from"./query-assigned-elements.b2565831.js";import{c as v}from"./index.5f430525.js";import"./index.82f7b823.js";const b=`:host{position:relative;--radius: 26px}.bg{position:absolute;transform:rotate(-3deg)}.bg.variant-1{transform:rotate(3deg)}.bg._fake{top:-36px}.bg._real{left:-18px;top:-38px;overflow:hidden;border-radius:var(--radius);border:solid 4px transparent}.bg._real:after{content:" ";display:block;position:absolute;width:120%;aspect-ratio:1/1;animation:spin 1s infinite linear;background:var(--brand-gradient-0)}.bg._real.variant-1:after{background:var(--brand-gradient-1)}.surface{margin:4px;padding:12px 20px;border-radius:calc(var(--radius) - 8px)}.surface._fake{z-index:2}.surface._real{background:var(--surface-color);z-index:1}h4{width:max-content;font-weight:500}h4._fake{color:transparent;pointer-events:none}@keyframes spin{0%{transform:rotate(0)}50%{transform:rotate(180deg)}to{transform:rotate(360deg)}}
`;var x=Object.defineProperty,m=Object.getOwnPropertyDescriptor,c=(a,t,n,r)=>{for(var e=r>1?void 0:r?m(t,n):t,s=a.length-1,o;s>=0;s--)(o=a[s])&&(e=(r?o(t,n,e):o(e))||e);return r&&e&&x(t,n,e),e};const k=()=>f("super-badge",i);class i extends l{render(){return g`
			<div class="bg _real flex align-center justify-center variant-${this.type}">
				<div class="surface _real">
					<h4 class="accent-text">${p(this.getConcatenatedText())}</h4>
				</div>
			</div>
			
			<!-- This is a fix for some strange text display issue in Chromium -->
			<div class="bg _fake flex align-center justify-center variant-${this.type}">
				<div class="surface _fake">
					<h4 class="_fake accent-text">${p(this.getConcatenatedText())}</h4>
				</div>
			</div>
		`}getConcatenatedText(){return this.content.paragraphs.join("")}static get styles(){return[...v,u(b)]}}c([d({type:Object})],i.prototype,"content",2);c([d({type:String})],i.prototype,"type",2);export{i as SuperBadge,k as default};
