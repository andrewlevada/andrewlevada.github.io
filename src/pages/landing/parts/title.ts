import { css, CSSResultGroup, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";
import shortTitleEffect from "~src/assets/graphics/gradients/title-short.png";
import longTitleEffect from "~src/assets/graphics/gradients/title-long.png";
import scopedStyles from "./title.scss";

import("~components/locale-picker").then(f => f.default());

export default (): void => defineComponent("title-landing-part", TitleLandingPart);
@localized()
export class TitleLandingPart extends LitElement {
	render(): TemplateResult {
		return html`
			<div class="flex col justify-center align-center full-width full-height">
				<locale-picker></locale-picker>
				<div class="texts flex row justify-between full-width">
					<h1 id="title-short">${msg("Hey! I’m Andrew,")}</h1>
					<h1 id="title-long">${msg("Aspiring UX Engineer with management, coding and design skills.")}</h1>
				</div>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, unsafeCSS(scopedStyles), css`
			#title-short:before {
				background-image: url(${unsafeCSS(shortTitleEffect)});
			}
			
			#title-long:before {
				background-image: url(${unsafeCSS(longTitleEffect)});
			}
		`];
	}
}
