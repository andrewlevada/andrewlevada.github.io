import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import diamondImage from "../../assets/graphics/diamond.svg";
import { localized, msg } from "@lit/localize";

export default (): void => defineComponent("contacts-section", ContactsSection);
@localized()
export class ContactsSection extends LitElement {
	render(): TemplateResult {
		return html`
            <div class="wrapper flex row justify-between align-center full-width border">
                <h4 class="hide-on-small">${msg("Contact me here")}</h4>
                <div class="contacts flex row gap justify-end">
                    ${["Telegram", "Github", "LinkedIn", "Email"].map((v, i) => html`
                        ${i !== 0 ? html`<img src="${diamondImage}" alt="">` : ""}
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

          @media screen and (max-width: 1023px) {
            .wrapper {
              height: auto;
              min-height: 62px;
              padding-bottom: 12px;
              padding-top: 12px;
            }

            .contacts {
              flex-wrap: wrap;
              justify-content: center !important;
              margin-left: auto;
              margin-right: auto;
            }
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
