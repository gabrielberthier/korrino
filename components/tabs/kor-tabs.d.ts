import { LitElement } from 'lit';
/**
 * @prop {'horizontal'|'vertical'} orientation	- Defines the orientation of the component. Possible values are `horizontal` and `vertical`.
 *
 * @slot - Hosts kor-tab-items.
 */
export declare class KorTabs extends LitElement {
    orientation: 'horizontal' | 'vertical';
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit").TemplateResult<1>;
    handleOrientation(): void;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
