import { html, LitElement, TemplateResult, CSSResultGroup, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import scopedStyles from "./styles.module.scss";

export default (): void => defineComponent("contact-tag", ContactTag);
export class ContactTag extends LitElement {
    @property() label!: string;
    @state() iconSrc: string | null = null;

    render(): TemplateResult {
        return html`
            <a class="flex row align-center" href=${contactsMap[this.label.toLowerCase()]} target="_blank">
                <img src="${this.iconSrc}" alt="null">
                <h2>${this.label === "email" ? "levada.andrew@gmail.com" : this.label}</h2>
            </a>
        `;
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        import(`../../assets/icons/${this.label.toLowerCase()}.svg`).then(v => {
            this.iconSrc = v.default;
        });
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, scopedStyles as never];
    }
}

const contactsMap: Record<string, string> = {
    telegram: "https://t.me/andrewlevada",
    github: "https://github.com/andrewlevada",
    linkedin: "https://www.linkedin.com/in/andrewlevada",
    email: "mailto:levada.andrew@gmail.com",
};
