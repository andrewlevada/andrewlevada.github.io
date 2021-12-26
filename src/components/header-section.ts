import { html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";

import("~components/print-button").then(f => f.default());
import("~components/contact-tag").then(f => f.default());

export default (): void => defineComponent("header-section", HelloText);
export class HelloText extends LitElement {
    render(): TemplateResult {
        return html`
      <div class="flex col full-width gap s-40">
          <div class="flex row justify-between full-width">
              <h1>Hello! I am Andrew. <br>Aspiring product creator with <br>management, coding and design skills.</h1>
              <print-button></print-button>
          </div>
          <div class="flex row gap s-24 full-width">
              <h3>Contact me:</h3>
              ${["Telegram", "GitHub", "LinkedIn", "email"].map(v => html`
                <contact-tag .label=${v}></contact-tag>
              `)}
          </div>
      </div>
    `;
    }

    static get styles(): CSSStyleSheet[] {
        return [...componentStyles];
    }
}
