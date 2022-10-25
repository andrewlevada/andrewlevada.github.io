import{f as p,_ as x}from"./index.1f205c7a.js";import{d as c,s as m,y as f,r as n,i as h}from"./router.33be5d89.d089ca50.js";import{m as d,c as g}from"./index.dd84ea55.b1ec46d6.js";import{h as u}from"./localized-decorator.526aa812.f1171b43.js";const b="/assets/title-short.8aa4acfe.png",w="/assets/title-long.b9cfbdfd.png",y=`@media screen and (max-width: 1439px){.desktop-only{display:none!important}}.small-only{display:none!important}@media screen and (max-width: 1023px){.small-only{display:flex!important}}@media screen and (max-width: 1023px){.hide-on-small{display:none!important}}h1{width:min-content}.texts{flex-wrap:wrap}.texts>h1{position:relative}.texts>h1:before{content:"";height:214px;width:auto;z-index:-1;position:absolute;left:-80px;right:-80px;background-size:100% auto;background-repeat:no-repeat}locale-picker{position:absolute;top:16px;left:0}#title-short{transform:translateY(-82px);margin-right:32px}#title-short:before{top:18px}#title-long:before{top:-64px}@media screen and (max-width: 1023px){#title-short{transform:translateY(max(-9vw,-82px))}#title-short:before{top:min(18px,1.5vw)}#title-long:before{top:max(-64px,-8vw)}}
`;var v=Object.defineProperty,k=Object.getOwnPropertyDescriptor,A=(t,s,i,a)=>{for(var e=a>1?void 0:a?k(s,i):s,r=t.length-1,o;r>=0;r--)(o=t[r])&&(e=(a?o(s,i,e):o(e))||e);return a&&e&&v(s,i,e),e};p(()=>x(()=>import("./locale-picker.e4c1ef57.2f8b4104.js"),["assets/locale-picker.e4c1ef57.2f8b4104.js","assets/router.33be5d89.d089ca50.js","assets/index.1f205c7a.js","assets/index.dd84ea55.b1ec46d6.js"]),["assets/locale-picker.e4c1ef57.js","assets/router.33be5d89.js","assets/index.08c554b6.js","assets/index.dd84ea55.js","assets/index.d82a4810.css"]).then(t=>t.default());const O=()=>c("title-landing-part",l);let l=class extends m{render(){return f`
			<div class="flex col justify-center align-center full-width full-height">
				<locale-picker></locale-picker>
				<div class="texts flex row justify-between full-width">
					<h1 id="title-short">${d("Hey! I\u2019m\xA0Andrew,")}</h1>
					<h1 id="title-long">${d("Aspiring\xA0UX\xA0Engineer with\xA0management, coding\xA0and\xA0design\xA0skills.")}</h1>
				</div>
			</div>
		`}static get styles(){return[...g,n(y),h`
			#title-short:before {
				background-image: url(${n(b)});
			}
			
			#title-long:before {
				background-image: url(${n(w)});
			}
		`]}};l=A([u()],l);export{l as TitleLandingPart,O as default};
