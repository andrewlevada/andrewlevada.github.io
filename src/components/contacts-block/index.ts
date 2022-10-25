import { CSSResultGroup, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";
import scopedStyles from "./styles.scss";
import githubIcon from "~src/assets/graphics/icons/github.svg";
import linkedinIcon from "~src/assets/graphics/icons/linkedin.svg";
import telegramIcon from "~src/assets/graphics/icons/telegram.svg";

const contacts: [string, string, any | false][] = [
	["Telegram", "https://t.me/andrewlevada", telegramIcon],
	["Github", "https://github.com/andrewlevada", githubIcon],
	["LinkedIn", "https://www.linkedin.com/in/andrewlevada", linkedinIcon],
	// ["Email", "mailto:levada.andrew@gmail.com", "email"],
];

export default (): void => defineComponent("contacts-block", ContactsBlock);
@localized()
export class ContactsBlock extends LitElement {
	render(): TemplateResult {
		return html`
			<div class="wrapper flex row justify-between align-center full-width border">
				<h4 class="hide-on-small">${msg("Contact me here")}</h4>
				<div class="contacts flex row gap justify-end">
					${contacts.map(nameAndUrl => html`
						<a class="header sans" href="${nameAndUrl[1]}" target="_blank">
							<span class="hide-on-small">${nameAndUrl[0] === "Email" ? "levada.andrew@gmail.com" : nameAndUrl[0]}</span>
							<img class="contact-icon small-only" src=${nameAndUrl[2]} alt=${nameAndUrl[0]}>
						</a>
					`)}

					<a class="header sans" href="mailto:levada.andrew@gmail.com" target="_blank">
						<span>levada.andrew@gmail.com</span>
					</a>
				</div>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, unsafeCSS(scopedStyles)];
	}
}
