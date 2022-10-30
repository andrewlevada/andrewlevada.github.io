import { html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { query } from "lit/decorators/query.js";
import { pageStyles } from "~src/global";
import scopedStyles from "./styles.scss";
import { defineComponent } from "~utils/components";
import { Button } from "@material/mwc-button";

import "@material/mwc-button";

export default (): void => defineComponent("app-page--student-affairs-office-ux", StudentAffairsOfficeUXPage);
export class StudentAffairsOfficeUXPage extends LitElement {
	@query("mwc-button") button!: Button;

	render(): TemplateResult {
		return html`
			<h4>How to get full access to my account on my.university?</h4>
			<div class="flex row gap align-center">
				<p>Please message <a href="https://t.me/StudentAffairs_bot" target="_blank">@StudentAffairs_bot</a></p>
				<mwc-button label="Copy premade message" dense raised @click=${() => {
					navigator.clipboard.writeText("Hello. I don't have full access to my.university. My innopolis email is ").then(() => this.button.label = "Copied!");
				}}></mwc-button>
			</div>
		`;
	}

	static styles = [...pageStyles, unsafeCSS(scopedStyles)];
}
