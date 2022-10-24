import { html, TemplateResult } from "lit";
import { Card } from "~src/content-service";

export function renderSuper(identifier: string, content: Card): TemplateResult {
	if (!identifier.startsWith("_super_"))
		throw `Wrong identifier passed to super factory (${identifier})`;

	const args = identifier.split("_");
	const code = args[2];
	const options = args.length >= 3 ? args[3] : "";

	if (code == "badge") {
		import("./super-badge").then(f => f.default());
		return html`<super-badge .content=${content} .type=${options}></super-badge>`;
	}

	throw `Unknown super card identifier "${identifier}"`;
}
