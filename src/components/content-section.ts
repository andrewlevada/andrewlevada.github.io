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
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .wrapper > * { flex-grow: 1; }
          .col-1 { flex-basis: 36%; }
          .col-2 { flex-basis: 42%; }
          .col-3 { flex-basis: 22%; }
        `];
    }
}
