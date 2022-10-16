import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";

import("~components/cards-column").then(f => f.default());

export default (): void => defineComponent("content-section", ContentSection);
@localized()
export class ContentSection extends LitElement {
	render(): TemplateResult {
		return html`
			<div class="flex col full-width">
				<div class="flex row full-width wrapper">
					${ContentSection.getColumnsNames().map((v, i) => html`
						<cards-column class=${`col-${i + 1}`} .header=${v.name} .id=${v.id}></cards-column>
					`)}
				</div>
			</div>
		`;
	}

	private static getColumnsNames(): { name: string, id: string }[] {
		const columns = [{ name: msg("Jobs"), id: "jobs" }, { name: msg("Projects"), id: "projects" }];
		columns.push({ name: msg("Education"), id: "education" });
		return columns;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			.wrapper { flex-wrap: wrap; }
			.wrapper > * { flex-grow: 1; }
			.col-1 { flex-basis: 36%; }
			.col-2 { flex-basis: 42%; }
			.col-3 { flex-basis: 22%; }

			@media screen and (min-width: 1024px) {
				.wrapper { border: solid 2px var(--primary-color); }
				.wrapper > *:not(:last-child) {
					border-right: solid 2px var(--primary-color);
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
				.col-1 { flex-basis: 35%; }
				.col-2 { flex-basis: 35%; }
				.col-3 { flex-basis: 30%; }
			}
		`];
	}
}
