import{_ as o}from"./index.3fb7b565.js";import{d as e,s as n,y as r,r as i}from"./router.bced5954.js";import{c as s}from"./index.68e8a515.js";const a=`:host:before{content:"";display:block;width:100vw;height:134px;position:fixed;top:0;left:0;right:0;z-index:-1;background:var(--surface-color)}contacts-block{flex-grow:1}print-button{width:260px;margin-left:30px}
`;o(()=>import("./contacts-block.79ddac9e.js"),["assets/contacts-block.79ddac9e.js","assets/router.bced5954.js","assets/index.3fb7b565.js","assets/index.68e8a515.js","assets/index.09e88b4c.css","assets/localized-decorator.2effb8d1.js"]).then(t=>t.default());o(()=>import("./print-button.65933e9f.js"),["assets/print-button.65933e9f.js","assets/print-button.7fc9bc43.css","assets/router.bced5954.js","assets/index.3fb7b565.js","assets/index.68e8a515.js","assets/index.09e88b4c.css","assets/query-assigned-elements.b2565831.js","assets/localized-decorator.2effb8d1.js"]).then(t=>t.default());const f=()=>e("top-landing-part",l);class l extends n{render(){return r`
			<div class="flex row justify-between align-center full-width">
				<contacts-block></contacts-block>
				<print-button class="hide-on-small"></print-button>
			</div>
		`}static get styles(){return[...s,i(a)]}}export{l as TopLandingPart,f as default};
