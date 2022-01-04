import { html, LitElement, TemplateResult, CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.module.scss";

export default (): void => defineComponent("tag-chip", TagChip);
export class TagChip extends LitElement {
    @property() text!: string;

    render(): TemplateResult {
        return html`
            <div class="flex row align-center">
                <p>${this.text}</p>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, scopedStyles as never];
    }
}
