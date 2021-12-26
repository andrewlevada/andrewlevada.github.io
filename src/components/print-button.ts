import { html, LitElement, TemplateResult, CSSResultGroup } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import printIcon from "../assets/icons/print.svg";

export default (): void => defineComponent("print-button", PrintButton);
export class PrintButton extends LitElement {
    render(): TemplateResult {
        return html`
            <button class="flex row gap align-center">
                <img src="${printIcon}" alt="null">
                <h2>Print</h2>
            </button>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles];
    }
}
