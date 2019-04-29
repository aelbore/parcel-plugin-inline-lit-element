import { LitElement, html, customElement, property, css } from "lit-element"
import "./hello-world.css"

@customElement('hello-world')
export class HelloWorld extends LitElement {

  @property() message = ''

  render() {
    return html `<h1>Hello ${this.message}</h1>`
  }

}