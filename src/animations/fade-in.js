import { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export default {
  init: css`
    opacity: 0;
    transform: translateY(32px);
  `,
  animation: css`
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
  `,
}
