const React = require('react')
const { ThemeProvider } = require('styled-components')
const GlobalStyle = require('./src/style/GlobalStyle').default
const theme = require('./src/style/theme').default

exports.wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)
