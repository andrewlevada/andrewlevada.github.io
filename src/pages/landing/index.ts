import { html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { pageStyles } from "~src/global";
import scopedStyles from "./styles.scss";
import { defineComponent } from "~utils/components";

import("./parts/title").then(f => f.default());
import("./parts/top").then(f => f.default());
import("./parts/content").then(f => f.default());

export default (): void => defineComponent("app-page--landing", CVPage);
export class CVPage extends LitElement {
	render(): TemplateResult {
		return html`
			<top-landing-part></top-landing-part>
			<title-landing-part></title-landing-part>
			<content-landing-part></content-landing-part>
		`;
	}

	static styles = [...pageStyles, unsafeCSS(scopedStyles)];
}
