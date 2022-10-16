import { html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { state } from "lit/decorators.js";
import { pageStyles } from "~src/global";
import { getTextFor, RemoteTextLabel } from "~src/content-service";
import { HeaderContent } from "~components/sections/header-section";
import scopedStyles from "./styles.scss";
import { defineComponent, onLocaleChanged } from "~utils/components";

import("~components/sections/header-section").then(f => f.default());
import("~components/sections/contacts-section").then(f => f.default());
import("~components/sections/content-section").then(f => f.default());
import("~components/sections/mobile-section").then(f => f.default());

export default (): void => defineComponent("app-page--landing", CVPage);
export class CVPage extends LitElement {
	@state() headerContent: HeaderContent | null = null;

	render(): TemplateResult {
		return html`
            <div class="flex col gap pad-64 full-width">
                <header-section .content=${this.headerContent}></header-section>
                <contacts-section class=${this.headerContent ? "animate-open" : ""}></contacts-section>
                <content-section class="${this.headerContent ? "animate-open" : ""}"></content-section>
            </div>
        `;
	}

	connectedCallback() {
		super.connectedCallback();
		this.updateContent();
		onLocaleChanged(() => this.updateContent());
	}

	private updateContent() {
		getTextFor(["title", "status"])
			// eslint-disable-next-line max-len
			.then(texts => new Promise<{ label: RemoteTextLabel, text: string }[]>(resolve => {
				setTimeout(() => resolve(texts), 300);
			}))
			.then(texts => {
				this.headerContent = {} as HeaderContent;
				// eslint-disable-next-line no-restricted-syntax
				for (const v of texts) this.headerContent[`${v.label}Text`] = v.text;
			});
	}

	static styles = [...pageStyles, unsafeCSS(scopedStyles)];
}
