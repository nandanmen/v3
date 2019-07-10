import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Box } from 'rebass'

const Header = styled(Box).attrs({ as: 'header' })`
  border-bottom: 1px solid ${themeGet('colors.grays.med')};
  padding: ${themeGet('space.3')}px 0;
  width: 100vw;
  line-height: 1.2;
`

export default Header
