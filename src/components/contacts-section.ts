import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import diamondImage from "../assets/diamond.svg";

export default (): void => defineComponent("contacts-section", ContactsSection);
export class ContactsSection extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="wrapper flex row justify-between align-center full-width border">
                <h4>Contact me here</h4>
                <div class="flex row gap justify-end">
                    ${["Telegram", "Github", "LinkedIn", "Email"].map((v, i) => html`
                        ${i !== 0 ? html`<img src="${diamondImage}" alt="null">` : ""}
                        <a class="header sans" href="${contactsMap[v.toLowerCase()]}" target="_blank">${v === "Email" ? "levada.andrew@gmail.com" : v}</a>
                    `)}
                </div>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .wrapper {
            height: 62px;
            padding-left: 24px;
            padding-right: 24px;
          }
        `];
    }
}

const contactsMap: Record<string, string> = {
    telegram: "https://t.me/andrewlevada",
    github: "https://github.com/andrewlevada",
    linkedin: "https://www.linkedin.com/in/andrewlevada",
    email: "mailto:levada.andrew@gmail.com",
};
