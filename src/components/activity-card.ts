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
			<div class="flex col gap pad-24 full-width">
				${this.isSuper() ? html`
					${renderSuper(this.content.title, this.content)}
				` : html`
					<h4>${this.content.title}</h4>
					
					${this.contentTemplate()}

					${this.content.link ? html`
						<a href=${this.content.link.url} target="_blank">${this.content.link.label}</a>
					` : ""}
				`}
			</div>
		`;
	}

	private contentTemplate(): TemplateResult[] {
		return this.content.paragraphs.map(v => when(typeof v == "string",
			() => html`<p>${v}</p>`,
			() => html`<ul>${(v as UnorderedList).map(li => html`<li>${li}</li>`)}</ul>`
		));
	}

	private isSuper(): boolean {
		return this.content.title.startsWith("_super_");
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			.flex {
				min-height: 62px;
			}
		`];
	}
}
