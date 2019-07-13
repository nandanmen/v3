import styled from 'styled-components'
import { Text as Base } from './text'

const Highlight = styled(Base)`
  border-radius: 8px;
`

Highlight.defaultProps = {
  px: [2],
  py: [1],
  bg: 'blue',
  color: 'white',
}

export default Highlight
