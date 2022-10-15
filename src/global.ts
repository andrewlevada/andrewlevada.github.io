import globalStyles from "~styles/global.lit.scss";
import globalPageStyles from "~src/pages/global-styles.lit.scss";
import layoutHelperStyles from "~styles/tiny-layout-helper.lit.scss";
import { unsafeCSS } from "lit";
import { configureLocalization } from "@lit/localize";

export const componentStyles = [
	unsafeCSS(globalStyles),
	unsafeCSS(layoutHelperStyles)
];

export const pageStyles = [
	unsafeCSS(globalStyles),
	unsafeCSS(layoutHelperStyles),
	unsafeCSS(globalPageStyles),
];

export const { getLocale, setLocale } = configureLocalization({
	sourceLocale: "en",
	targetLocales: ["ru"],
	loadLocale: () => import(`~src/generated/locales/ru`),
});

if (window.location.search.includes("lang=ru"))
	setTimeout(() => setLocale("ru"), 0);
