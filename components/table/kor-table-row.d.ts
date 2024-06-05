import { LitElement } from 'lit';
/**
 * @prop {Boolean} active - If set to true, a highlight style gets applied.
 *
 * @slot - Hosts (kor-table-cells).
 */
export declare class KorTableRow extends LitElement {
    active: boolean | undefined;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    connectedCallback(): void;
    handleActive(): void;
    handleColumns(): void;
}
