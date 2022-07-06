// eslint-disable-next-line import/prefer-default-export
export function defineComponent(tag: string, c: CustomElementConstructor): void {
	if (customElements.get(tag) === undefined) customElements.define(tag, c);
}

export function onLocaleChanged(callback: () => void): void {
	window.addEventListener("lit-localize-status", (event) => {
		if (event.detail.status === "ready") callback();
	});
}
