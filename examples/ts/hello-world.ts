import { LitElement, html } from 'lit-element'
import './hello-world.css'

class HelloWorld extends LitElement {

  message;

  static get properties() {
    return {
      message: {
        type: String
      }
    }
  }

  render() {
    return html `<h1>Hello ${this.message}, Typescript!</h1>`
  }

}

customElements.define('hello-world', HelloWorld)