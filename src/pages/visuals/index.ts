import { html, LitElement, TemplateResult } from "lit";
import { pageStyles } from "~src/global";
import { defineComponent } from "~utils/components";

export default (): void => defineComponent("app-page--visuals", VisualsPage);
export class VisualsPage extends LitElement {
    render(): TemplateResult {
        return html`
            <h1>Test page</h1>
            <a href="/">Go back to landing</a>
        `;
    }

    static styles = [...pageStyles];
}
