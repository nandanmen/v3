import React from 'react'
import Helmet from 'react-helmet'
import Types from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Box } from 'rebass'

import Grid from '@elements/Grid'
import BaseHeader from '@elements/Header'
import Link from '@elements/Link'
import theme from '@style/theme'

const AlgorithmsLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>@narendras/algorithms</title>
      </Helmet>
      <Wrapper>
        <Header>
          <Box as="li">
            <Link to="/" partiallyActive={false}>
              narendras.io
            </Link>
          </Box>
        </Header>
        <Sidebar />
        <Main px={0} py={0}>
          {children}
        </Main>
      </Wrapper>
    </>
  </ThemeProvider>
)

AlgorithmsLayout.propTypes = {
  children: Types.node,
}

AlgorithmsLayout.defaultProps = {
  children: null,
}

export default AlgorithmsLayout

const Wrapper = styled(Box)`
  height: 100vh;

  display: grid;
  grid-template-columns: 84px 1fr;
  grid-template-rows: 64px 1fr;
  align-items: stretch;
`

const Header = styled(BaseHeader)`
  width: auto;
  grid-column: span 2;
`

const Main = styled(Grid)`
  grid-template-rows: repeat(2, 1fr);
  grid-column: 2;
  height: 100%;
`

const Sidebar = styled(Box).attrs({ as: 'aside' })`
  border-right: 1px solid ${themeGet('colors.grays.med')};
  grid-column: 1;
  z-index: -1;
`
