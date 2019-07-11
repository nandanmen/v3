import React from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Box } from 'rebass'

const Grid = props => <Main pt={5} {...props} />

export default Grid

const Main = styled(Box).attrs({ as: 'main' })`
  display: flex;
  flex-direction: column;
  padding-left: ${themeGet('space.4')}px;
  padding-right: ${themeGet('space.4')}px;

  @media (min-width: ${themeGet('breakpoints.0')}px) {
    padding-left: ${themeGet('space.7')}px;
    padding-right: ${themeGet('space.7')}px;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: ${themeGet('space.3')}px;
  }
`
