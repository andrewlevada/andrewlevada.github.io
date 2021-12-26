import { css, html, LitElement, TemplateResult } from "lit";
import { CSSResultGroup } from "lit";
import { property, state } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card, ContentSections, getCardsFor } from "~src/content-service";

import("~components/general-card").then(f => f.default());

export default (): void => defineComponent("cards-column", CardsColumn);
export class CardsColumn extends LitElement {
    @property() title!: string;
    @state() cards: Card[] = [];

    render(): TemplateResult {
        return html`
            <div class="flex col full-width wrapper-${this.title}">
                <div class="header flex pad-24"><h2>${this.title}</h2></div>
                <div class="flex col full-width cards">
                    ${this.cards.map(card => html`<general-card .content=${card}></general-card>`)}
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        getCardsFor(this.title as ContentSections).then(v => {
            this.cards = v;
        });
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .header {
            height: 4.47vw;
          }
          
          .cards > * {
            border-top: solid 2px #33AD6A;
          }
          
          .wrapper-Projects {
            border-left: solid 2px #33AD6A;
            border-right: solid 2px #33AD6A;
          }
        `];
    }
}
