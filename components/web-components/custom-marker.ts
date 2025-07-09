// declare the custom element

import { Point, Position, Size } from '@photo-sphere-viewer/core'
import { Marker } from '@photo-sphere-viewer/markers-plugin'

interface UpdateMarkerParams {
  marker: Marker
  position: Point
  viewerPosition: Position
  zoomLevel: number
  viewerSize: Size
}

export class CustomMarkerElement extends HTMLElement {
  fmt: Intl.NumberFormat
  tooltip: HTMLDivElement
  constructor() {
    super()

    this.fmt = new Intl.NumberFormat()

    const dom = this.attachShadow({ mode: 'closed' })

    const style = document.createElement('style')
    style.innerText = `
:host {
    display: block;
    position: relative;
    width: 50px;
    height: 50px;
}

button {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: none;
    color: white;
    border-radius: 50%;
    filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.2));
}

.tooltip {
    box-sizing: border-box;
    width: 300px;
    position: absolute;
    bottom: calc(100% + 10px);
    left: calc(50% -  150px);
    background: color-mix(in oklab, #000 30%, transparent);
    color: white;
    text-shadow: 0 1px #000;
    border-radius: 10px;
    transform-origin: 50% calc(100% + 35px);
    transform: rotate(30deg);
    opacity: 0;
    display: none;
}
.tooltip.bottom {
    bottom: auto;
    top: calc(100% + 10px);
    transform-origin: 50% -35px;
}

.tooltip.hovered {
    animation: rotate-bounce-out 200ms ease forwards;
}

.tooltip slot::slotted(img) {
    width: 100%;
    border-radius: 10px 10px 0 0;
}
.tooltip slot::slotted(h2),
.tooltip slot::slotted(p) {
    margin: 1rem;
    text-align: justify;
}
.tooltip pre {
    font-size: 0.8em;
    margin: 1rem;
}

.tooltip::after {
    content: '';
    width: 0px;
    height: 0px;
    color: rgba(30, 30, 30, 0.8);
    border: 10px solid transparent;
    border-top-color: currentColor;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
}
.tooltip.bottom::after {
    border-top-color: transparent;
    border-bottom-color: currentColor;
    top: auto;
    bottom: 100%;
}

button:hover {
    animation: ripple 1s ease-out;
}

.tooltip.hiding {
    animation: hide 200ms ease forwards;
}

button:hover + .tooltip {
    display: block;
    animation: show 300ms ease forwards;
}

@keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(97, 170, 242, 0); }
    20% { box-shadow: 0 0 0 5px rgba(97, 170, 242, 1); }
    100% { box-shadow: 0 0 0 20px rgba(97, 170, 242, 0); }
}
@keyframes show {
    0% { transform: rotate(30deg); opacity: 0; }
    70% { transform: rotate(-10deg); }
    100% { transform: rotate(0deg); opacity: 1; }
}
@keyframes hide {
    0% { transform: rotate(0deg); opacity: 1; }
    100% { transform: rotate(30deg); opacity: 0; }
}
`
    dom.appendChild(style)

    const button = document.createElement('button')
    button.innerHTML = `<svg viewBox="0 0 100 100">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="white"/>
        <stop offset="50%" stop-color="transparent"/>
        <stop offset="100%" stop-color="oklch(69.564% 0.15051 269.95)"/>
        </linearGradient>
      </defs>
      <circle cx=50 cy=50 r=25 fill="white"/>
      <circle cx=50 cy=50 r=40 stroke-width=5 fill="none" stroke="url(#grad1)">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="2s"
          repeatCount="indefinite" />
      </circle>  
    </svg>`
    dom.appendChild(button)

    this.tooltip = document.createElement('div')
    this.tooltip.classList.add('tooltip')
    dom.appendChild(this.tooltip)
    this.tooltip.innerHTML = '<slot></slot>'

    button.addEventListener('mouseleave', () => {
      this.tooltip.classList.add('hiding')
    })

    dom.addEventListener('animationend', () => {
      this.tooltip.classList.remove('hiding')
    })
  }

  updateMarker(params: UpdateMarkerParams) {
    console.log('on-updateMarker', params)
  }
}

// register the custom element
customElements.define('custom-marker', CustomMarkerElement)
