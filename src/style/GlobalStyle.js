import { createGlobalStyle } from 'styled-components'
import themeGet from '@styled-system/theme-get'

export default createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    font-size: inherit;
    font-family: ${themeGet('fonts.body')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${themeGet('colors.blacks.body', '#595959')};
    line-height: 1.5;

    @supports (font-variation-settings: normal) {
      font-family: ${themeGet('fonts.var')};
    }
  }

  code {
    font-size: ${themeGet('fontSizes.0')}px;
    font-family: ${themeGet('fonts.mono')};
  }
`
