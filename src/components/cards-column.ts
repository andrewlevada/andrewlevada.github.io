/* eslint-disable indent */
import { css, html, LitElement, TemplateResult } from "lit";
import { CSSResultGroup } from "lit";
import { property, state } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card, ContentSections, getCardsFor } from "~src/content-service";
import { localized } from "@lit/localize";

import("~components/general-card").then(f => f.default());
import("~components/badge-card").then(f => f.default());

export default (): void => defineComponent("cards-column", CardsColumn);
@localized()
export class CardsColumn extends LitElement {
    @property() id!: ContentSections;
    @property() header!: string;
    @state() cards: Card[] = [];

    render(): TemplateResult {
        return html`
            <div class="flex col full-width wrapper-${this.header}">
                <div class="header flex pad-24"><h4>${this.header}</h4></div>
                <div class="flex col full-width cards">
                    ${this.cards.map(card => (card.link || card.text
                            ? html`<general-card .content=${card} .isProject=${this.id === "projects"}></general-card>`
                            : html`<badge-card .content=${card}></badge-card>`))}
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        getCardsFor(this.id as ContentSections).then(v => {
            this.cards = v;
        });
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .header {
            height: 62px;
          }

          .header > * {
            align-self: center;
          }

          .cards > * {
            border-top: solid 2px var(--primary-color);
          }
        `];
    }
}
