import { DefaultRoute } from "~src/pages/router";
import { RouteConfig } from "@lit-labs/router";

// Automatically handles importing
// and showing component named 'app-page--<tag>'
export const simpleRoutes: DefaultRoute[] = [
	{ path: "/", tag: "landing" },
	{ path: "/319ux", tag: "student-affairs-office-ux" },
]

export const complexRoutes: RouteConfig[] = []
