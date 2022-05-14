import { html, LitElement, TemplateResult, CSSResultGroup } from "lit";
import { componentStyles, getLocale } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.module.scss";
import printIcon from "../../assets/icons/print.svg";
import { localized, msg } from "@lit/localize";

export default (): void => defineComponent("print-button", PrintButton);
@localized()
export class PrintButton extends LitElement {
    render(): TemplateResult {
        return html`
            <a class="flex row gap align-center" href=${`/print_${getLocale()}.pdf`}>
                <img src="${printIcon}" alt="">
                <p>${msg("Get PDF")}</p>
            </a>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, scopedStyles as never];
    }
}
