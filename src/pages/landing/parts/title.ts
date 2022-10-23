import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";

export default (): void => defineComponent("title-landing-part", TitleLandingPart);
@localized()
export class TitleLandingPart extends LitElement {
	render(): TemplateResult {
		return html`
			<div class="flex col justify-center align-center full-width full-height">
				<div class="flex row justify-between full-width">
					<h1 id="name-header">${msg("Hey! I’m Andrew,")}</h1>
					<h1>${msg("Aspiring UX Engineer with management, coding and design skills.")}</h1>
				</div>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			h1 {
				width: min-content;
			}
			
			#name-header {
				transform: translateY(-82px);
			}
		`];
	}
}
