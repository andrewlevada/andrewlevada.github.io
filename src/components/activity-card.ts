import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { when } from "lit/directives/when.js";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card, UnorderedList } from "~src/content-service";
import { renderSuper } from "~components/super-cards/super-factory";

export default (): void => defineComponent("activity-card", ActivityCard);
export class ActivityCard extends LitElement {
	@property() content!: Card;

	render(): TemplateResult {
		return html`
			<div class="wrapper flex col gap pad-24 full-width">
				${this.contentTemplate()}
			</div>
		`;
	}

	private contentTemplate(): TemplateResult {
		if (this.isSuper()) return renderSuper(this.content.title, this.content);

		if (this.isOnlyLink()) return html`
			<a class="as-header flex align-center" href=${this.content.link!.url}>
				${this.content.title}
				<span class="link-icon material-icons">arrow_outward</span>
			</a>
		`;

		return html`
			<h4>${this.content.title}</h4>

			${this.content.paragraphs.map(v => when(typeof v == "string",
				() => html`<p>${v}</p>`,
				() => html`<ul>${(v as UnorderedList).map(li => html`<li>${li}</li>`)}</ul>`
			))}

			${this.content.link ? html`
				<a href=${this.content.link.url} target="_blank">${this.content.link.label}</a>
			` : ""}
		`;
	}

	private isSuper(): boolean {
		return this.content.title.startsWith("_super_");
	}

	private isOnlyLink(): boolean {
		return !!this.content.link && this.content.paragraphs.length == 0;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			.wrapper {
				min-height: 62px;
			}
			
			.link-icon {
				margin-left: 12px;
			}
		`];
	}
}