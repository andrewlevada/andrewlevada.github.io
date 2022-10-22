import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { BadgeCard } from "~src/content-service";

export default (): void => defineComponent("badge-card", BadgeCardElement);
export class BadgeCardElement extends LitElement {
	@property({ type: Object }) content!: BadgeCard;

	render(): TemplateResult {
		return html`
			<div class="flex row align-center full-width">
				<a class="header flex row gap align-center" href=${this.content.href} target="_blank">
					${this.content.title}
					<span class="material-icons">north_east</span>
				</a>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			div {
				height: 62px;
				padding-left: 24px;
				padding-right: 24px;
			}

			span {
				margin-left: 4px;
			}
		`];
	}
}
