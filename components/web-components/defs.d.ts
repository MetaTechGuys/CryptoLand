import { CustomMarkerElement } from './custom-marker'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'custom-marker': React.DetailedHTMLProps<
        React.HTMLAttributes<CustomMarkerElement>,
        CustomMarkerElement
      >
    }
  }
}
