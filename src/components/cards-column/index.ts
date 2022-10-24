import { css, CSSResultGroup, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent, onLocaleChanged } from "~utils/components";
import { Card, ContentSections, getCardsFor } from "~src/content-service";
import { localized } from "@lit/localize";
import scopedStyles from "./styles.scss";
import jobsGradient from "~src/assets/graphics/gradients/jobs.png";
import projectsGradient from "~src/assets/graphics/gradients/projects.png";
import educationGradient from "~src/assets/graphics/gradients/education.png";

import("~components/activity-card").then(f => f.default());
import("~components/badge-card").then(f => f.default());

const gradients = {
	"jobs": jobsGradient,
	"projects": projectsGradient,
	"education": educationGradient,
}

export default (): void => defineComponent("cards-column", CardsColumn);
@localized()
export class CardsColumn extends LitElement {
	@property() id!: ContentSections;
	@property() header!: string;
	@state() cards: Card[] = [];

	render(): TemplateResult {
		return html`
			<div class="flex col full-width top">
				<div class="header flex pad-24 header-bg-${this.id}">
					<h4>${this.header}</h4>
				</div>
				<div class="flex col full-width cards">
					${this.cards.map(card => (card.link || card.paragraphs ? html`
						<activity-card .content=${card} .isProject=${this.id === "projects"}></activity-card>
					` : html`
						<badge-card .content=${card}></badge-card>
					`))}
				</div>
			</div>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
		this.updateContent();
		onLocaleChanged(() => this.updateContent());
	}

	private updateContent() {
		getCardsFor(this.id as ContentSections).then(v => {
			this.cards = v;
		});
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, unsafeCSS(scopedStyles),
			Object.entries(gradients).map(nameAndImage => css`
				.header-bg-${unsafeCSS(nameAndImage[0])} {
					background-image: url(${unsafeCSS(nameAndImage[1])});
				}
			`)];
	}
}
