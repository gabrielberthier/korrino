import { LitElement } from 'lit';
import '../text';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 */
export declare class KorToggle extends LitElement {
    label: string | undefined;
    active: boolean | undefined;
    disabled: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    connectedCallback(): void;
    handleChange(): void;
}
