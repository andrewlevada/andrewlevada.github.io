import { CSSResultGroup, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { componentStyles } from "~src/global";
import scopedStyles from "./top.scss";
import { defineComponent } from "~utils/components";

import("~components/contacts-block").then(f => f.default());
import("~components/large-button/cases/print-button").then(f => f.default());

export default (): void => defineComponent("top-landing-part", TopLandingPart);
export class TopLandingPart extends LitElement {
	render(): TemplateResult {
		return html`
			<div class="flex row justify-between align-center full-width">
				<contacts-block></contacts-block>
				<print-button class="hide-on-small"></print-button>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, unsafeCSS(scopedStyles)];
	}
}
