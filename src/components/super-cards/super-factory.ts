import { html, TemplateResult } from "lit";
import { Card } from "~src/content-service";

export function renderSuper(identifier: string, content: Card): TemplateResult {
	if (identifier.startsWith("_super_"))
		identifier = identifier.split("_super_")[1];

	if (identifier == "badge") {
		import("./super-badge").then(f => f.default());
		return html`<super-badge .content=${content}></super-badge>`;
	}

	throw `Unknown super card identifier "${identifier}"`;
}
