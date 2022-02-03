import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { state } from "lit/decorators.js";
import { getTextFor } from "~src/content-service";
import textColorImage from "~src/assets/text_color.png";

import("~components/print-button").then(f => f.default());

export default (): void => defineComponent("header-section", HeaderSection);
export class HeaderSection extends LitElement {
    @state() titleText: string = "";
    @state() statusText: string = "";

    render(): TemplateResult {
        return html`
            <div class="flex col full-width gap s-40">
                <div class="flex row justify-between full-width">
                    <div class="color-text">
                        <h1>${staticHtml`${unsafeStatic(this.titleText)}`}</h1>
                        <img src=${textColorImage} alt="null">
                    </div>
                    <print-button></print-button>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        getTextFor("title").then(v => { this.titleText = v || ""; });
        getTextFor("status").then(v => { this.statusText = v || ""; });
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .color-text {
            position: relative;
            overflow: hidden;
          }
          
          .color-text h1 {
            color: #000;
          }
          
          .color-text img {
            mix-blend-mode: lighten;
            position: absolute;
            top: 1%;
            left: -2%;
            height: auto;
            width: 104%;
          }
        `];
    }
}
