import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";

export default (): void => defineComponent("contacts-section", ContactsSection);
export class ContactsSection extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="wrapper flex row justify-between align-center full-width border">
                <h4>Contact me:</h4>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .wrapper {
            height: 62px;
            padding-left: 24px;
            padding-right: 24px;
          }
        `];
    }
}
