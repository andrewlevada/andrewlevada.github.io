import { html, LitElement, TemplateResult, CSSResultGroup, css } from "lit";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";

import("~components/cards-column").then(f => f.default());

export default (): void => defineComponent("content-section", ContentSection);
@localized()
export class ContentSection extends LitElement {
    render(): TemplateResult {
        return html`
            <div class="flex col full-width border">
                <div class="flex row full-width wrapper">
                    ${ContentSection.getColumnsNames().map((v, i) => html`
                        <cards-column class=${`col-${i + 1}`} header=${v}></cards-column>
                    `)}
                </div>
            </div>
        `;
    }

    private static getColumnsNames(): string[] {
        const columns = [msg("Jobs"), msg("Projects")];
        if (window.innerWidth >= 1440) columns.push(msg("Education"));
        return columns;
    }

    static get styles(): CSSResultGroup {
        return [...componentStyles, css`
          .wrapper > * { flex-grow: 1; }
          .col-1 { flex-basis: 36%; }
          .col-2 { flex-basis: 42%; }
          .col-3 { flex-basis: 22%; }
          
          .wrapper > *:not(:last-child) {
            border-right: solid 2px var(--primary-color);
          }

          @media screen and (max-width: 1439px) {
            .col-1 { flex-basis: 46%; }
            .col-2 { flex-basis: 54%; }
          }
        `];
    }
}
