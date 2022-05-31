import { html, LitElement, TemplateResult } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { defineComponent } from "~utils/components";
import { RouteConfig, Router } from "@lit-labs/router";

export default (): void => defineComponent("app-router", AppRouter);
export class AppRouter extends LitElement {
    private router = new Router(this, generateRoutes([
        { path: "/", tag: "landing" }
    ]));

    render(): TemplateResult {
        return html`${this.router.outlet()}`;
    }
}

interface DefaultRoute {
    path: string;
    tag: string;
}

function generateRoutes(defaultRoutes: DefaultRoute[]): RouteConfig[] {
    return defaultRoutes.map(v => ({
        path: v.path,
        render: () => staticHtml`${unsafeStatic(pageElementHtml(v.tag))}`,
        enter: () => import(`./${v.tag}/index.ts`).then(f => f.default()),
    }));
}

function pageElementHtml(tag: string): string {
    const fullTag = `app-page--${tag}`;
    return `<${fullTag}></${fullTag}>`
}
