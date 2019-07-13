import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'

import Header from '@elements/Header'
import Footer from '@elements/Footer'
import Link from '@elements/Link'
import Nav from '@elements/Nav'

const Layout = ({ children }) => (
  <>
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
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
