import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { typography } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import { Link as RouterLink } from 'gatsby'
import { Link as BaseLink } from 'rebass'

const Link = ({ external, ...props }) => (
  <StyledLink as={external ? 'a' : RouterLink} {...props} />
)

Link.propTypes = {
  color: PropTypes.string,
  external: PropTypes.bool,
}

Link.defaultProps = {
  color: 'inherit',
  external: false,
}

export default Link

const StyledLink = styled(BaseLink)`
  ${typography}
  text-decoration: none;
  &.active {
    color: ${themeGet('colors.blacks.title')};
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      top: calc(100% + 1em);
      background: ${themeGet('colors.blacks.title')};
    }
  }
`
