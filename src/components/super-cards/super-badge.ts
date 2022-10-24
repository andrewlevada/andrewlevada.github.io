import { CSSResultGroup, LitElement, TemplateResult, unsafeCSS } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card } from "~src/content-service";
import scopedStyles from "./super-badge.scss";

export default (): void => defineComponent("super-badge", SuperBadge);
export class SuperBadge extends LitElement {
	@property({ type: Object }) content!: Card;

	// Visual type = "left" | "right" tilt (with different gradients)
	@property({ type: String }) type!: "0" | "1";

	render(): TemplateResult {
		return staticHtml`
			<div class="bg _real flex align-center justify-center variant-${this.type}">
				<div class="surface _real">
					<h4 class="accent-text">${unsafeStatic(this.getConcatenatedText())}</h4>
				</div>
			</div>
			
			<!-- This is a fix for some strange text display issue in Chromium -->
			<div class="bg _fake flex align-center justify-center variant-${this.type}">
				<div class="surface _fake">
					<h4 class="_fake accent-text">${unsafeStatic(this.getConcatenatedText())}</h4>
				</div>
			</div>
		`;
	}

	private getConcatenatedText(): string {
		return this.content.paragraphs.join("");
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, unsafeCSS(scopedStyles)];
	}
}
