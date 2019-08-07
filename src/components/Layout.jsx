import React from 'react'
import Helmet from 'react-helmet'
import Types from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Box } from 'rebass'

import Header from '@elements/Header'
import Footer from '@elements/Footer'
import Link from '@elements/Link'
import Nav from '@elements/Nav'
import theme from '@style/theme'

const Layout = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Nav>
          <Box as="li" mr={5}>
            <Link
              fontSize={[1]}
              fontWeight="medium"
              to="/"
              partiallyActive={false}
            >
              home
            </Link>
          </Box>
          <Box as="li" mr={5}>
            <Link fontSize={[1]} fontWeight="medium" to="algorithms/002">
              algorithms
            </Link>
          </Box>
          <Box as="li">
            <Link
              fontSize={[1]}
              fontWeight="medium"
              color="blue"
              href="mailto:n.syahrasyad.n@gmail.com"
              external
            >
              contact
            </Link>
          </Box>
        </Nav>
      </Header>
      {children}
      <Footer width={[1, 1, 0.6]} />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: Types.node.isRequired,
  title: Types.string,
}

Layout.defaultProps = {
  title: '@narendras',
}

export default Layout
