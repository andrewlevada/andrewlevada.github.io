import { html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.scss";
import { property } from "lit/decorators.js";

export default (): void => defineComponent("large-button", LargeButton);
export class LargeButton extends LitElement {
	@property({ type: String }) text!: string;
	@property({ type: String }) href!: string;

	@property({ type: String }) download?: string;
	@property({ type: String }) icon?: string;

	// For now this element is implemented with <a>, so it can only be used for navigation
	// Another version with <button> implementation can be added later

	render(): TemplateResult {
		return html`
			<a class="flex row align-center justify-center"
			   href=${this.href} target="_blank"
			   download=${ifDefined(this.download)}
			>
				${this.icon ? html`<span class="icon material-icons">${this.icon}</span>` : ""}
				<h4>${this.text}</h4>
			</a>
		`;
	}

	static styles = [...componentStyles, unsafeCSS(scopedStyles)];
}
