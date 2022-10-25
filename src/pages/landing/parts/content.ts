import { CSSResultGroup, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";
import scopedStyles from "./content.scss";

import("~components/cards-column").then(f => f.default());

export default (): void => defineComponent("content-landing-part", ContentLandingPart);
@localized()
export class ContentLandingPart extends LitElement {
	private getColumns() { return [
		{ name: msg("Jobs"), id: "jobs" },
		{ name: msg("Projects"), id: "projects" },
		{ name: msg("Education"), id: "education" }
	]; }

	render(): TemplateResult {
		return html`
			<div class="flex row full-width wrapper">
				${this.getColumns().map((v, i) => html`
					<cards-column class=${`col-${i + 1}`} .header=${v.name} .id=${v.id}></cards-column>
				`)}
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, unsafeCSS(scopedStyles)];
	}
}
