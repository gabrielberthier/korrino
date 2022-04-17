import { LitElement, css, html } from 'lit';
import { property, state } from 'lit/decorators';
import { sharedStyles } from '../../shared-styles';
import '../icon';

/**
 * @prop {String} label -	If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown close to the label.
 * @prop {String} image - If set, defines the image shown on top of the card.
 * @prop {'row'|'column'} flexDirection - Defines the direction in which the slotted content flows (e.g. top to bottom or left to right). Possible values are `column` and `row`.
 * @prop {Boolean} flat - If set, background, shadows and external padding are not shown.
 *
 * @slot - Displayed inside the content area.
 * @slot header - Shown on top of the card, below the label (if any is set).
 * @slot functions - Shown on the right side of the label or header slot.
 * @slot footer - Shown below the content area.
 */

export class korCard extends LitElement {
  @property({ type: String, reflect: true }) label: string | undefined;
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: String, reflect: true }) image: string | undefined;
  @property({ type: String, reflect: true, attribute: 'flex-direction' })
  flexDirection: 'column' | 'row' = 'column';
  @property({ type: Boolean, reflect: true }) flat: boolean | undefined;

  // readonly properties
  @state() emptyHeader = true;
  @state() emptyFunctions = true;
  @state() emptyFooter = true;

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: 16px;
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: 16px;
        }
        slot[name='footer']:not(.empty) {
          padding-top: 16px;
        }
        .label {
          flex: 1;
          display: flex;
          gap: 8px;
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
        }
        /* slots */
        slot[name='footer'],
        slot[name='functions'],
        slot[name='header'],
        slot:not([name]) {
          gap: 12px;
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          padding: 0 16px;
          margin-right: -16px;
          margin-left: -16px;
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: -16px -16px 16px -16px;
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.image ? html` <img class="image" src="${this.image}" /> ` : ''}
      <div
        class="top ${this.emptyHeader &&
        this.emptyFunctions &&
        !this.label &&
        !this.icon
          ? 'empty'
          : ''}"
      >
        <div class="header">
          ${this.label || this.icon
            ? html`
                <div class="label">
                  ${this.icon
                    ? html` <kor-icon icon="${this.icon}"></kor-icon> `
                    : ''}
                  <p>${this.label}</p>
                </div>
                ${!this.emptyHeader && (this.label || this.icon)
                  ? html` <div style="margin-top: 16px"></div> `
                  : ''}
              `
            : ''}
          <slot
            name="header"
            @slotchange="${(e: any) =>
              (this.emptyHeader = e.target.assignedNodes().length === 0)}"
            class="${this.emptyHeader ? 'empty' : ''}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${(e: any) =>
            (this.emptyFunctions = e.target.assignedNodes().length === 0)}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${(e: any) =>
          (this.emptyFooter = e.target.assignedNodes().length === 0)}"
        class="${this.emptyFooter ? 'empty' : ''}"
      ></slot>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}

if (!window.customElements.get('kor-card')) {
  window.customElements.define('kor-card', korCard);
}
