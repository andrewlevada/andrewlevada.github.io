import{d as f,s as g,n as l,a as d,r as u}from"./router.33be5d89.d089ca50.js";import{d as c}from"./query-assigned-elements.b2565831.68928b3d.js";import{c as b}from"./index.dd84ea55.b1ec46d6.js";import"./index.1f205c7a.js";const x=`:host{position:relative;--radius: 26px}.bg{position:absolute;transform:rotate(-3deg)}.bg.variant-1{transform:rotate(3deg)}.bg._fake{top:-36px}.bg._real{left:-12px;top:-38px;overflow:hidden;border-radius:var(--radius);border:solid 4px transparent}.bg._real:after{content:" ";display:block;position:absolute;width:120%;aspect-ratio:1/1;animation:spin 1s infinite linear;background:var(--brand-gradient-0)}.bg._real.variant-1:after{background:var(--brand-gradient-1)}.surface{margin:4px;padding:12px 20px;border-radius:calc(var(--radius) - 8px)}.surface._fake{z-index:2}.surface._real{background:var(--surface-color);z-index:1}h4{width:max-content;font-weight:500}h4._fake{color:transparent;pointer-events:none}@keyframes spin{0%{transform:rotate(0)}50%{transform:rotate(180deg)}to{transform:rotate(360deg)}}
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=(r,e,n,a)=>{for(var t=a>1?void 0:a?h(e,n):e,s=r.length-1,i;s>=0;s--)(i=r[s])&&(t=(a?i(e,n,t):i(t))||t);return a&&t&&v(e,n,t),t};const j=()=>f("super-badge",o);class o extends g{render(){return l`
			<div class="bg _real flex align-center justify-center variant-${this.type}">
				<div class="surface _real">
					<h4 class="accent-text">${d(this.getConcatenatedText())}</h4>
				</div>
			</div>
			
			<!-- This is a fix for some strange text display issue in Chromium -->
			<div class="bg _fake flex align-center justify-center variant-${this.type}">
				<div class="surface _fake">
					<h4 class="_fake accent-text">${d(this.getConcatenatedText())}</h4>
				</div>
			</div>
		`}getConcatenatedText(){return this.content.paragraphs.join("")}static get styles(){return[...b,u(x)]}}p([c({type:Object})],o.prototype,"content",2);p([c({type:String})],o.prototype,"type",2);export{o as SuperBadge,j as default};
