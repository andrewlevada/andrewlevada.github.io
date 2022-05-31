import globalStyles from "~styles/global.lit.scss";
import globalPageStyles from "~src/pages/global-styles.lit.scss";
import layoutHelperStyles from "~styles/tiny-layout-helper.lit.scss";
import { css, unsafeCSS } from "lit";
import { configureLocalization } from "@lit/localize";

export const componentStyles = [unsafeCSS(globalStyles), unsafeCSS(layoutHelperStyles), css`
  :root, :host {
    --primary-color: #495F81;
    --dark-primary-color: #E04C78;
    --surface-color: #FBF7F9;

    --launch-anim-delay: 480ms;
    --launch-anim-length: 600ms;
  }`];
export const pageStyles = [unsafeCSS(globalStyles), unsafeCSS(layoutHelperStyles), unsafeCSS(globalPageStyles)];

export const { getLocale, setLocale } = configureLocalization({
    sourceLocale: "en",
    targetLocales: ["ru"],
    loadLocale: () => import(`~src/generated/locales/ru`),
});

if (window.location.search.includes("lang=ru"))
    setTimeout(() => setLocale("ru"), 0);
