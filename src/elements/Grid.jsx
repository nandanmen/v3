import styled from 'styled-components'
import { Box } from 'rebass'
import themeGet from '@styled-system/theme-get'

const Grid = styled(Box)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${themeGet('breakpoints.0')}px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: ${themeGet('space.4')}px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.1')}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

Grid.defaultProps = {
  as: 'main',
  px: [4, 6, 7],
  py: [5, 6],
}

export default Grid
