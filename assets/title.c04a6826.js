import{_ as d}from"./index.82f7b823.js";import{d as x,s as m,y as f,r as a,i as c}from"./router.698b93dc.js";import{m as p,c as h}from"./index.5f430525.js";import{l as g}from"./localized-decorator.3e035a57.js";const u="/assets/title-short.8aa4acfe.png",w="/assets/title-long.b9cfbdfd.png",b=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}h1{width:min-content}.texts{flex-wrap:wrap}.texts>h1{position:relative}.texts>h1:before{content:"";height:214px;width:auto;z-index:-1;position:absolute;left:-80px;right:-80px;background-size:100% auto;background-repeat:no-repeat}locale-picker{position:absolute;top:16px;left:0}#title-short{transform:translateY(-82px);margin-right:32px}#title-short:before{top:18px}#title-long:before{top:-64px}@media screen and (max-width: 1023px){#title-short{transform:translateY(max(-9vw,-82px))}#title-short:before{top:min(18px,7vw - 32px)}#title-long:before{top:max(-64px,-7vw - 8px)}}
`;var v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,_=(e,i,n,o)=>{for(var t=o>1?void 0:o?y(i,n):i,l=e.length-1,r;l>=0;l--)(r=e[l])&&(t=(o?r(i,n,t):r(t))||t);return o&&t&&v(i,n,t),t};d(()=>import("./locale-picker.db670793.js"),["assets/locale-picker.db670793.js","assets/router.698b93dc.js","assets/index.82f7b823.js","assets/index.5f430525.js","assets/index.d5409cbb.css"]).then(e=>e.default());const j=()=>x("title-landing-part",s);let s=class extends m{render(){return f`
			<div class="flex col justify-center align-center full-width full-height">
				<locale-picker></locale-picker>
				<div class="texts flex row justify-between full-width">
					<h1 id="title-short">${p("Hey! I\u2019m\xA0Andrew,")}</h1>
					<h1 id="title-long">${p("Aspiring\xA0UX\xA0Engineer with\xA0management, coding\xA0and\xA0design\xA0skills.")}</h1>
				</div>
			</div>
		`}static get styles(){return[...h,a(b),c`
			#title-short:before {
				background-image: url(${a(u)});
			}
			
			#title-long:before {
				background-image: url(${a(w)});
			}
		`]}};s=_([g()],s);export{s as TitleLandingPart,j as default};
