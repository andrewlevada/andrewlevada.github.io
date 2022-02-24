import { css, CSSResultGroup, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { property, query } from "lit/decorators.js";
import textColorImage from "~src/assets/text_color.png";

import("~components/print-button").then(f => f.default());

export interface HeaderContent {
    titleText: string;
    statusText: string;
}

export default (): void => defineComponent("header-section", HeaderSection);
export class HeaderSection extends LitElement {
    @property({ type: Object }) content: HeaderContent | null = null;

    @query(".color-text img") imageColorText!: HTMLImageElement;

    render(): TemplateResult {
        return html`
            <div class="flex col full-width gap s-40">
                <div class="top-bar flex row justify-between full-width">
                    <h3>Hello! I am Andrew 🖐️ </h3>
                    <print-button></print-button>
                </div>

                <div class="middle flex row justify-between full-width ${this.content ? "animate-open" : "hi"}">
                    <h1 class="colored-text">${staticHtml`${unsafeStatic(this.content?.titleText || "")}`}</h1>
                    
                    <div class="divider desktop-only"></div>
                    
                    <div class="status-block flex col gap s-12 desktop-only">
                        <h2>What am I up to?</h2>
                        <p class="italic">${staticHtml`${unsafeStatic(this.content?.statusText || "")}`}</p>
                        <p class="subtitle">However, I am always open to new <br>and interesting opportunities.</p>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .middle {
            position: absolute;
            top: 26%;
            opacity: 0;
            animation-fill-mode: forwards !important;
          }
          
          .middle.animate-open {
            animation: appear var(--launch-anim-length) ease-out;
          }

          .colored-text {
            min-width: 770px;
            background-image: url(${unsafeCSS(textColorImage)});
            //noinspection CssInvalidPropertyValue
            background-clip: text;
            -webkit-background-clip: text;
            color: rgba(0, 0, 0, 0.01);
          }

          .status-block {
            max-width: 420px;
          }

          .status-block > * {
            text-align: end;
          }

          .divider::after {
            content: "";
            position: absolute;
            top: -54%;
            transform: translateX(24px);
            width: 1px;
            height: 500px;
            background: linear-gradient(rgba(87, 98, 114, 0), rgba(87, 98, 114, 0.72), rgba(87, 98, 114, 0));
          }

          @keyframes appear {
            from {
              opacity: 0
            }
            to {
              opacity: 1
            }
          }
        `];
    }
}
