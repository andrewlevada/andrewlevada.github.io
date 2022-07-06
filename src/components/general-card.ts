import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card, ProjectCard } from "~src/content-service";

export default (): void => defineComponent("general-card", GeneralCard);
export class GeneralCard extends LitElement {
	@property() content!: Card;
	@property() isProject: boolean = false;

	render(): TemplateResult {
		return html`
            <div class="flex col gap pad-24 full-width">
                <h4>${this.content.title}</h4>
                ${this.hasDescription() ? html`<p class="subtitle">${(this.content as ProjectCard).description}</p>` : ""}

                ${this.contentTemplate()}

                ${this.content.link ? html`
                    <div class="flex row justify-between">
                        <a href=${this.content.href} target="_blank">${this.content.link}</a>
                    </div>
                ` : ""}
            </div>
        `;
	}

	private hasDescription(): boolean {
		return this.isProject && !!(this.content as ProjectCard).description;
	}

	private contentTemplate(): TemplateResult {
		if (!this.content.text) return html``;

		if (this.content.isList) return staticHtml`<ul>${
			this.content.text.split("\n").map(v => staticHtml`<li>${unsafeStatic(v)}</li>`)
		}</ul>`;

		return staticHtml`<p>${unsafeStatic(this.content.text)}</p>`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css``];
	}
}
