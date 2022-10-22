import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";

export default (): void => defineComponent("title-landing-part", TitleLandingPart);
@localized()
export class TitleLandingPart extends LitElement {
	render(): TemplateResult {
		return html`
			<h1>${msg("Hey!\nI’m Andrew,")}</h1>
			<h1>${msg("Aspiring UX Engineer\nwith management,\ncoding and design skills.")}</h1>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`

		`];
	}
}
