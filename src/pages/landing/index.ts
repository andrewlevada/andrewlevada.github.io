import { html, LitElement, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { pageStyles, setLocale } from "~src/global";
import { getTextFor, RemoteTextLabel } from "~src/content-service";
import { HeaderContent } from "~components/sections/header-section";
import scopedStyles from "./styles.module.scss";

import("~components/sections/header-section").then(f => f.default());
import("~components/sections/contacts-section").then(f => f.default());
import("~components/sections/content-section").then(f => f.default());
import("~components/sections/mobile-section").then(f => f.default());

@customElement("landing-page")
export default class TestPage extends LitElement {
    @state() headerContent: HeaderContent | null = null;

    render(): TemplateResult {
        return TestPage.isSmallScreen() ? html`
            <mobile-section></mobile-section>
        ` : html`
            <div class="flex col gap pad-64 full-width">
                <button @click=${() => { setLocale("ru"); console.log("HEI"); }} style="z-index: 100">Locale Test</button>
                <header-section .content=${this.headerContent}></header-section>
                <contacts-section class=${this.headerContent ? "animate-open" : ""}></contacts-section>
                <content-section class="hide-on-small ${this.headerContent ? "animate-open" : ""}"></content-section>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        getTextFor(["title", "status"])
            // eslint-disable-next-line max-len
            .then(texts => new Promise<{label: RemoteTextLabel, text: string}[]>(resolve => { setTimeout(() => resolve(texts), 300); }))
            .then(texts => {
                this.headerContent = {} as HeaderContent;
                // eslint-disable-next-line no-restricted-syntax
                for (const v of texts) this.headerContent[`${v.label}Text`] = v.text;
            });
    }

    private static isSmallScreen(): boolean {
        return window.innerWidth < 1024;
    }

    static get styles(): CSSStyleSheet[] {
        return [...pageStyles, scopedStyles as never];
    }
}
