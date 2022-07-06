import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";

import("~components/print-button").then(f => f.default());
import("~components/locale-picker").then(f => f.default());

export default (): void => defineComponent("mobile-section", MobileSection);
@localized()
export class MobileSection extends LitElement {
	render(): TemplateResult {
		return html`
            <div class="flex col full-width full-height gap align-center justify-center s-40">
                <h3>${msg("Hello! I am Andrew 🖐️ ")}</h3>
                
                <div class="flex row gap align-center">
                    <locale-picker></locale-picker>
                    <print-button></print-button>
                </div>
                <p>${msg("Full web version of this CV can be viewed on desktop")}</p>
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
