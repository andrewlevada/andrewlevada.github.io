import { html, LitElement, TemplateResult, CSSResultGroup, css } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";

import("~components/cards-column").then(f => f.default());

export default (): void => defineComponent("content-section", ContentSection);
export class ContentSection extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="flex col full-width border">
                <div class="flex row full-width wrapper">
                    ${["Jobs", "Projects", "Education"].map((v, i) => html`
                        <cards-column class=${`col-${i + 1}`} header=${v}></cards-column>
                    `)}
                </div>

                <div class="flex pad-24 full-width footer">
                    <h2>Currently I study at school and apply to Innopolis University for bachelors program whilst my main project focus is on scaling Sapientia Temporis Bot.</h2>
                </div>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          @import "../assets/styles/theming.css";
          
          .wrapper > * { flex-grow: 1; }
          .col-1 { flex-basis: 36%; }
          .col-2 { flex-basis: 42%; }
          .col-3 { flex-basis: 22%; }
          .footer { border-top: solid 2px var(--primary-color) }
        `];
    }
}
