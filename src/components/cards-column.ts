import { css, html, LitElement, TemplateResult } from "lit";
import { CSSResultGroup } from "lit";
import { property, state } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card, ContentSections, getCardsFor } from "~src/content-service";

import("~components/general-card").then(f => f.default());

export default (): void => defineComponent("cards-column", CardsColumn);
export class CardsColumn extends LitElement {
    @property() header!: string;
    @state() cards: Card[] = [];

    render(): TemplateResult {
        return html`
            <div class="flex col full-width wrapper-${this.header}">
                <div class="header flex pad-24"><h2>${this.header}</h2></div>
                <div class="flex col full-width cards">
                    ${this.cards.map(card => html`<general-card .content=${card} .isProject=${this.header === "Projects"}></general-card>`)}
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        getCardsFor(this.header as ContentSections).then(v => {
            this.cards = v;
        });
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          @import "../assets/styles/theming.css";
          
          .header {
            height: 76px;
          }
          
          .header > * {
            align-self: center;
          }
          
          .cards > * {
            border-top: solid 2px var(--primary-color);
          }
          
          .wrapper-Projects {
            border-left: solid 2px var(--primary-color);
            border-right: solid 2px var(--primary-color);
          }
        `];
    }
}
