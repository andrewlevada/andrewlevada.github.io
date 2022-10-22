import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";

import("~components/cards-column").then(f => f.default());

export default (): void => defineComponent("content-landing-part", ContentLandingPart);
@localized()
export class ContentLandingPart extends LitElement {
	private columns = [
		{ name: msg("Jobs"), id: "jobs" },
		{ name: msg("Projects"), id: "projects" },
		{ name: msg("Education"), id: "education" }
	];

	render(): TemplateResult {
		return html`
			<div class="flex col full-width">
				<div class="flex row full-width wrapper">
					${this.columns.map((v, i) => html`
						<cards-column class=${`col-${i + 1}`} .header=${v.name} .id=${v.id}></cards-column>
					`)}
				</div>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			.wrapper {
				flex-wrap: wrap;
			}

			.wrapper > * {
				flex-grow: 1;
			}

			.col-1 {
				flex-basis: 36%;
			}

			.col-2 {
				flex-basis: 42%;
			}

			.col-3 {
				flex-basis: 22%;
			}

			@media screen and (min-width: 1024px) {
				.wrapper {
					border: solid 2px var(--dark-color);
				}

				.wrapper > *:not(:last-child) {
					border-right: solid 2px var(--dark-color);
				}
			}

			@media screen and (max-width: 1023px) {
				.wrapper > * {
					flex-basis: auto !important;
				}

				.wrapper > *:not(:last-child) {
					margin-bottom: 32px;
				}
			}

			@media screen and (max-width: 1439px) {
				.col-1 {
					flex-basis: 35%;
				}

				.col-2 {
					flex-basis: 35%;
				}

				.col-3 {
					flex-basis: 30%;
				}
			}
		`];
	}
}
