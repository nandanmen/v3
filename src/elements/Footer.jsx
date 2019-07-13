import React from 'react'
import styled from 'styled-components'
import { layout } from 'styled-system'
import { Flex } from 'rebass'
import {
  Github,
  LinkedinSquare,
  MediumSquare,
} from 'styled-icons/boxicons-logos'
import themeGet from '@styled-system/theme-get'

import Link from '@elements/Link'
import { Text } from '@elements/text'

const Footer = props => (
  <Wrapper color="grays.dark" mx={[4, 'auto']} pt={3} pb={6} {...props}>
    <Flex justifyContent="center" mb={2}>
      <Icon external href="https://github.com/narendrasss" mr={2}>
        <Github size="2em" />
      </Icon>
      <Icon external href="https://www.linkedin.com/in/narendrass/" mr={2}>
        <LinkedinSquare size="2em" />
      </Icon>
      <Icon external href="https://medium.com/@n.syahrasyad.n">
        <MediumSquare size="2em" />
      </Icon>
    </Flex>
    <Text color="grays.dark" fontFamily="mono">
      Narendra Syahrasyad 2019
    </Text>
  </Wrapper>
)

export default Footer

const Icon = styled(Link)`
  color: inherit;
  &:hover {
    color: ${themeGet('colors.blue')};
  }
`

const Wrapper = styled(Flex).attrs({ as: 'footer' })`
  ${layout}
  border-top: 1px solid ${themeGet('colors.grays.med')};
  flex-direction: column;
  align-items: center;
`
