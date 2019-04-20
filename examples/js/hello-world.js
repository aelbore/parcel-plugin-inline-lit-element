import { LitElement, html } from 'lit-element'
import './hello-world.css'

class HelloWorld extends LitElement {

  constructor() {
    super()
    // @ts-ignore
    this.message = ''
  }

  static get properties() {
    return {
      message: {
        type: String
      }
    }
  }

  render() {
    // @ts-ignore
    return html `<h1>Hello ${this.message}, Javascript!</h1>`
  }

}

customElements.define('hello-world', HelloWorld)