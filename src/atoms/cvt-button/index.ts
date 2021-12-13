import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import styles from './cvt-button.scss';

enum ButtonTypes {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

export class CvtButton extends LitElement {
  static styles = styles;

  @property()
  text!: string;

  @property()
  onClick!: Function;

  @property({ type: ButtonTypes })
  type = ButtonTypes.BUTTON;

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <button
        class="cvt-button"
        type=${this.type}
        disabled=${this.disabled}
        @click="${this.onClick}"
      >
        ${this.text}
      </button>
    `;
  }
}

customElements.define('cvt-button', CvtButton);
