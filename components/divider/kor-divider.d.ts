import { LitElement } from 'lit';
/**
 * @prop {'s'|'m'|'l'} spacing -	Defines the space around the divider. Possible values are `s`, `m` and `l`.
 * @prop {'horizontal'|'vertical'} orientation - Defines the orientation of the divider. Possible values are `vertical` and `horizontal`.
 */
export declare class KorDivider extends LitElement {
    spacing: 's' | 'm' | 'l';
    orientation: 'horizontal' | 'vertical';
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
