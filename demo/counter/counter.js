import { LitElement, html } from 'lit-element';
import './counter.scss'

class Counter extends LitElement {

  static get properties() {
    return {
      count: { type: Number }
    }
  }

  incrementCount(e) {
    this.count = this.count + 1
  }

  render() {
    return html `
      <button id="count" @click=${this.incrementCount}>
        ${this.count}
      </button>   
    `
  }

}

customElements.define('ar-counter', Counter)