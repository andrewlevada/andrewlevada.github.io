import { html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import scopedStyles from "./styles.module.scss";
import { defineComponent } from "~utils/components";

export default (): void => defineComponent("header-section", HelloText);
export class HelloText extends LitElement {
  render(): TemplateResult {
    return html`
      <div class="flex col full-width gap s-40">
          <div class="flex row justify-between full-width">
              <h1>Hello! I am Andrew. <br>Aspiring product creator with <br>management, coding and design skills.</h1>
          </div>
          <div class="flex row full-width">
              <h3>Contact me:</h3>
          </div>
      </div>
    `;
  }

  static get styles(): CSSStyleSheet[] {
    return [...componentStyles, scopedStyles as never];
  }
}
