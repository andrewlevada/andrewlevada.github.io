import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { pageStyles } from "~src/global";
import scopedStyles from "./styles.module.scss";

import("~components/header-section").then(f => f.default());
import("~components/contacts-section").then(f => f.default());
import("~components/content-section").then(f => f.default());

@customElement("landing-page")
export default class TestPage extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="flex col gap pad-64 full-width">
                <header-section></header-section>
                <contacts-section></contacts-section>
                <content-section></content-section>
            </div>
        `;
    }

    static get styles(): CSSStyleSheet[] {
        return [...pageStyles, scopedStyles as never];
    }
}
