import { css, html, LitElement, TemplateResult } from "lit";
import { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card, ProjectCard } from "~src/content-service";

import("~components/tag-chip").then(f => f.default());

export default (): void => defineComponent("general-card", GeneralCard);
export class GeneralCard extends LitElement {
    @property() content!: Card;
    @property() isProject: boolean = false;

    render(): TemplateResult {
        return html`
            <div class="flex col gap pad-24 full-width">
                <h4>${this.content.title}</h4>
                ${this.hasDescription() ? html`<p class="subtitle">${(this.content as ProjectCard).description}</p>` : ""}
                ${this.content.text ? html`<p>${this.content.text}</p>` : ""}
                <div class="flex row justify-between">
                    <a href=${this.content.href} target="_blank">${this.content.link}</a>
                </div>
            </div>
        `;
    }
    // <div class="flex row gap">
    //     ${this.content.tags.map(v => html`<tag-chip .text=${v}></tag-chip>`)}
    // </div>

    private hasDescription(): boolean {
        return this.isProject && !!(this.content as ProjectCard).description;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css``];
    }
}
