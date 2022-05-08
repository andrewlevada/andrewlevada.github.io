import globalStyles from "~styles/global.scss";
import globalPageStyles from "~src/pages/global-styles.scss";
import layoutHelperStyles from "~src/assets/styles/tiny-layout-helper.scss";
import { css } from "lit";
import { configureLocalization } from "@lit/localize";

export const componentStyles = [globalStyles, layoutHelperStyles, css`
  :root, :host {
    --primary-color: #495F81;
    --dark-primary-color: #E04C78;
    --surface-color: #FBF7F9;

    --launch-anim-delay: 480ms;
    --launch-anim-length: 600ms;
  }`];
export const pageStyles = [globalStyles, globalPageStyles, layoutHelperStyles];

export const { getLocale, setLocale } = configureLocalization({
    sourceLocale: "en",
    targetLocales: ["ru"],
    loadLocale: (locale) => import(`~src/generated/locales/ru`),
});
