import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box } from 'rebass'

const grids = variant({
  scale: 'grids',
  prop: 'variant',
})

const Grid = props => <Main variant={['xs']} pt={5} {...props} />

export default Grid

const Main = styled(Box).attrs({ as: 'main' })`
  ${grids}
`
