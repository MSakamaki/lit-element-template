import { LitElement, html, property, customElement } from 'lit-element';

@customElement('sample-tag')
export class SimpleTag extends LitElement {
  @property() name = 'World';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}
