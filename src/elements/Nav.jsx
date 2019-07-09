import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'

const Nav = ({ children, ...props }) => (
  <Box as="nav" {...props}>
    <NavList>{children}</NavList>
  </Box>
)

Nav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Nav

const NavList = styled(Flex).attrs({ as: 'ul' })`
  justify-content: center;
  list-style: none;
  margin: 0 auto;
`
