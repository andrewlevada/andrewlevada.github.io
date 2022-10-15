import { css, CSSResultGroup, LitElement, TemplateResult } from "lit";
import { unsafeStatic, html as staticHtml } from "lit/static-html.js";
import { property } from "lit/decorators.js";
import { componentStyles } from "~src/global";
import { defineComponent } from "~utils/components";
import { Card } from "~src/content-service";

export default (): void => defineComponent("super-badge", SuperBadge);
export class SuperBadge extends LitElement {
	@property() content!: Card;

	render(): TemplateResult {
		return staticHtml`
			<div class="bg flex align-center justify-center">
				<div class="surface">
					<h4>${unsafeStatic(this.content.text!)}</h4>
				</div>
			</div>
			
			<!-- This is a fix for some strange text display issue in Chromium -->
			<div class="_bg flex align-center justify-center">
				<div class="_surface">
					<h4 class="fake">${unsafeStatic(this.content.text!)}</h4>
				</div>
			</div>
		`;
	}

	static get styles(): CSSResultGroup {
		return [...componentStyles, css`
			:host {
				position: relative;
				--radius: 26px;
			}
			
			._bg {
				position: absolute;
				top: -36px;
				transform: rotate(3deg);
			}
			
			.bg {
				position: absolute;
				left: -12px;
				top: -38px;
				overflow: hidden;
				
				transform: rotate(3deg);
				
				border-radius: var(--radius);
				border: solid 4px transparent;
			}
			
			.bg:after {
				content: " ";
				display: block;
				position: absolute;
				height: 240px;
				width: 240px;
				
				animation: spin 1s infinite linear;
				background: linear-gradient(#E24E72, #9255E1);
			}
			
			._surface {
				margin: 4px;
				z-index: 2;
				padding: 12px 20px;
				border-radius: calc(var(--radius) - 8px);
			}
			
			.surface {
				margin: 4px;
				z-index: 1;
				
				background: var(--surface-color);
				border-radius: calc(var(--radius) - 8px);
				
				padding: 12px 20px;
			}
			
			h4 {
				font-weight: 500;
			}
			
			.fake {
				color: transparent;
			}

			@keyframes spin {
				from {
					transform: rotate(0deg);
				}
				50% {
					transform: rotate(180deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

		`];
	}
}
