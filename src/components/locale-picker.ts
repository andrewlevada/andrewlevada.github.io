import { defineComponent } from "~utils/components";
import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { componentStyles, setLocale } from "~src/global";
import ruFlag from "~src/assets/icons/ru.svg";
import enFlag from "~src/assets/icons/en.svg";

export default (): void => defineComponent("locale-picker", LocalePicker);
export class LocalePicker extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="flex row gap">
                <button id="lang-ru" @click=${() => setLocale("ru")}></button>
                <button id="lang-en" @click=${() => setLocale("en")}></button>
            </div>
        `;
    }

    static styles = [...componentStyles, css`
      button {
        width: 36px;
        height: 36px;
      }
      
      #lang-ru { background: url(${unsafeCSS(ruFlag)}) }
      #lang-en { background: url(${unsafeCSS(enFlag)}) }
    `];
}
