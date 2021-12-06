import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

import styles from './demo-element.scss'

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;


export class DemoElement extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = styles

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>
        <p>Edit <code>src/DemoElement.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}