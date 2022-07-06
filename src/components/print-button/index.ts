import { html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { componentStyles, getLocale } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.scss";
import printIcon from "../../assets/icons/print.svg";
import { localized, msg } from "@lit/localize";

export default (): void => defineComponent("print-button", PrintButton);
@localized()
export class PrintButton extends LitElement {
	render(): TemplateResult {
		return html`
            <a class="flex row gap align-center" href=${`/static/print_${getLocale()}.pdf`} target="_blank" download=${msg("CV Andrew Levada")}>
                <img src="${printIcon}" alt="">
                <p>${msg("Get PDF")}</p>
            </a>
        `;
	}

	static styles = [...componentStyles, unsafeCSS(scopedStyles)];
}
