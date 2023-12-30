import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example of SVG Icons wrapped in a LitElement.
 *
 * @src the path to the SVG file
 */
@customElement('svg-icon')
export class SvgIcon extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property({ type: String, reflect: true })
  src = ''

  @property({ type: String, reflect: true })
  name = ''

  render() {
    const sourcePath = this.src + '#' + (this.name || 'icon')

    return html`<svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 128">
      <use href="${sourcePath}"/>
    </svg>
    `
  }

  static styles = css`
    :host {
      display: inline-block;
      width: 1rem;
      height: 1rem;
    }
    :host svg {
      width: 100%;
      height: 100%;
    }`
}

declare global {
  interface HTMLElementTagNameMap {
    'svg-icon': SvgIcon
  }
}
