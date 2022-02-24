import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";

import("~components/print-button").then(f => f.default());

export default (): void => defineComponent("mobile-section", MobileSection);
export class MobileSection extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="flex col full-width full-height gap align-center justify-center s-40">
                <h3>Hello! I am Andrew 🖐️ </h3>
                <print-button></print-button>
                <p>Full web version of this CV can be viewed on desktop</p>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          div {
            padding: 16px;
          }

          * {
            text-align: center;
          }
        `];
    }
}
