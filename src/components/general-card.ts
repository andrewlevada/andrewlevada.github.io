import { css, html, LitElement, TemplateResult } from "lit";
import { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card } from "~src/content-service";

export default (): void => defineComponent("general-card", GeneralCard);
export class GeneralCard extends LitElement {
    @property() content!: Card;

    render(): TemplateResult {
        return html`
            <div class="flex col gap pad-24 full-width">
                <h3>${this.content.title}</h3>
                <p>${this.content.text}</p>
                <div class="flex row justify-between">
                    <a href=${this.content.href}>${this.content.link}</a>
                </div>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .header {
            height: 76px;
          }
        `];
    }
}
