import { defineComponent } from "~utils/components";
import { localized, msg } from "@lit/localize";
import { getLocale } from "~src/global";
import { LargeButton } from "../index";
import { PropertyValues } from "lit";

export default (): void => defineComponent("print-button", PrintButton);
@localized()
export class PrintButton extends LargeButton {
	constructor() {
		super();
		this.icon = "print";
	}

	protected willUpdate(_changedProperties: PropertyValues) {
		super.willUpdate(_changedProperties);
		this.text = msg("Get PDF");
		this.href = `/static/print_${getLocale()}.pdf`;
		this.download = msg("CV Andrew Levada");
	}
}
