import React from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Box, Flex } from 'rebass'
import AlgorithmsLayout from '@components/AlgorithmsLayout'

import { Heading, Text } from '@elements/text'
import Link from '@elements/Link'

const AlgorithmsPage = () => (
  <AlgorithmsLayout>
    <Description>
      <Heading my={[5, 6]}>Data Structures and Algorithms</Heading>
      <Heading as="h2" fontSize={3} fontWeight={500}>
        Welcome!
      </Heading>
      <Text my={4}>
        This page contains a series of visualizations for common data structures
        and algorithms, including several{' '}
        <Link href="https://leetcode.com/" external>
          LeetCode
        </Link>{' '}
        problems.
      </Text>
      <Text>Select a data structure or algorithm to get started.</Text>
    </Description>
    <Navigation>
      <Heading fontSize={3} fontWeight={500}>
        Welcome!
      </Heading>
    </Navigation>
  </AlgorithmsLayout>
)

export default AlgorithmsPage

const Description = styled(Box)`
  grid-column: 2 / span 5;
  grid-row: 1 / -1;
`

const Navigation = styled(Box).attrs({ as: 'aside' })`
  grid-column: span 5 / -1;
  grid-row: 1 / -1;
  border-left: 1px solid ${themeGet('colors.grays.med')};
`
