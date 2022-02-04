import { css, CSSResultGroup, html, LitElement, PropertyValues, TemplateResult } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { query, state } from "lit/decorators.js";
import { getTextFor } from "~src/content-service";
import textColorImage from "~src/assets/text_color.png";

import("~components/print-button").then(f => f.default());

export default (): void => defineComponent("header-section", HeaderSection);
export class HeaderSection extends LitElement {
    @state() titleText: string = "";
    @state() statusText: string = "";

    @query(".color-text img") imageColorText!: HTMLImageElement;

    render(): TemplateResult {
        return html`
            <div class="flex col full-width gap s-40">
                <div class="flex row justify-between full-width">
                    <h3>Hello! I am Andrew 🖐️ </h3>
                    <print-button></print-button>
                </div>

                <div class="middle flex row justify-between full-width">
                    <div class="color-text">
                        <h1>${staticHtml`${unsafeStatic(this.titleText)}`}</h1>
                        <img src=${textColorImage} alt="null">
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="status-block flex col gap s-12">
                        <h2>What am I up to?</h2>
                        <p class="italic">${staticHtml`${unsafeStatic(this.statusText)}`}</p>
                        <p class="subtitle">However, I am always open to new <br>and interesting opportunities.</p>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        getTextFor("title").then(v => { this.titleText = v || ""; });
        getTextFor("status").then(v => { this.statusText = v || ""; });
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        this.imageColorText.addEventListener("dragstart", e => e.preventDefault());
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          @import "../assets/styles/theming.css";
          
          .middle {
            position: absolute;
            top: 26%;
          }
          
          .middle::after {
            content: "";
            position: absolute;
            top: -2%;
            left: -2%;
            width: 140%;
            height: 140%;
            background-color: var(--surface-color);
            opacity: 1;
            animation: disappear var(--launch-anim-length) ease-out var(--launch-anim-delay);
            animation-fill-mode: forwards;
          }
          
          .color-text {
            position: relative;
            min-width: 770px;
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
            pointer-events: none;
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
            opacity: 0;
            animation: appear var(--launch-anim-length) ease-out var(--launch-anim-delay);
            animation-fill-mode: forwards;
          }

          @keyframes appear {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          @keyframes disappear {
            from { opacity: 1 }
            to { opacity: 0 }
          }
        `];
    }
}
