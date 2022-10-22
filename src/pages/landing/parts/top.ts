import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";

export default (): void => defineComponent("top-landing-part", TopLandingPart);
export class TopLandingPart extends LitElement {
	render(): TemplateResult {
		return html`
			<div class="flex row justify-between full-width">
				<contacts-block></contacts-block>
				<print-button class="hide-on-small" style="width: 260px"></print-button>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			contacts-block {
				flex-grow: 1;
			}
		`];
	}
}
