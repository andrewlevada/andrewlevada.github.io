import { html, LitElement, TemplateResult, CSSResultGroup } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.module.scss";
import printIcon from "../../assets/icons/print.svg";

export default (): void => defineComponent("print-button", PrintButton);
// noinspection HtmlUnknownTarget
export class PrintButton extends LitElement {
    render(): TemplateResult {
        return html`
            <a class="flex row gap align-center" href="/print.pdf">
                <img src="${printIcon}" alt="null">
                <p>Get PDF</p>
            </a>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, scopedStyles as never];
    }
}
