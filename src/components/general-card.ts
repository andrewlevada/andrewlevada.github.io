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
                <h3>${this.content.title}</h3>
                ${this.isProject ? html`<p class="description">${(this.content as ProjectCard).description}</p>` : ""}
                <p>${this.content.text}</p>
                <div class="flex row justify-between">
                    <a href=${this.content.href}>${this.content.link}</a>
                </div>
            </div>
        `;
    }
    // <div class="flex row gap">
    //     ${this.content.tags.map(v => html`<tag-chip .text=${v}></tag-chip>`)}
    // </div>

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .description {
            font-style: italic;
            font-weight: 600;
          }
        `];
    }
}
