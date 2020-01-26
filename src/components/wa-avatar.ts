import { LitElement, css, html, customElement, property } from 'lit-element'
import { sharedStyles } from './shared-styles'

@customElement('wa-avatar')
export class waAvatar extends LitElement {

  @property({ type: String, reflect: true }) label;
  @property({ type: String, reflect: true }) info;
  @property({ type: String, reflect: true }) image;

  static get styles() {
    return [sharedStyles, css`
      :host,
      .image {
        display: flex;
        align-items: center;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        margin-left: 8px;
      }
      .label {
        font-weight: bold;
      }
      .image {
        justify-content: center;
        font: var(--header-2);
        height: 32px;
        width: 32px;
        border-radius: 50%;
        object-fit: cover;
        background: rgba(var(--neutral-1), .10);
      }
      :host-context(wa-app-bar) {
        max-width: 320px;
      }
    `]
  }

  render() {
    return html`
      <!-- image -->
      <div class="image">
        ${this.image ? html` <img class="image" src="${this.image}"> ` : 
        html`
          ${this.label ? html` ${
            this.getInitials(this.label)}
          ` : html`
            <wa-icon icon="person"></wa-icon>
          `}
        `}
      </div>
      <!-- text -->
      ${this.label || this.info ? html`
        <div class="text">
          ${this.label ? html`<wa-text size="body-2" class="label">${this.label}</wa-text>` : ''}
          ${this.info ? html`<wa-text size="body-2" color="text-2">${this.info}</wa-text>` : ''}
        </div>
      ` : ''}
    `
  }

  attributeChangedCallback(name, oldval, newval) { 
    super.attributeChangedCallback(name, oldval, newval); 
    this.dispatchEvent(new Event(`${name}-changed`));
  }

  getInitials(label) {
    var initials = label.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    console.log(initials);
    return initials
  }
  
}
