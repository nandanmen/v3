import React from 'react'
import Types from 'prop-types'
import { Flex } from 'rebass'

import Highlight from '@elements/Highlight'

const Summary = ({ runtime, leetcode, ...props }) => (
  <Flex mb={[4]} {...props}>
    <Highlight fontSize={[0]} fontFamily="mono" mr={[2]} bg="#1d39c4">
      {runtime}
    </Highlight>
    <Highlight fontSize={[0]} fontFamily="mono" mr={[2]} bg="#2f54eb">
      {leetcode.runtime}
    </Highlight>
    <Highlight fontSize={[0]} fontFamily="mono">
      {leetcode.memory}
    </Highlight>
  </Flex>
)

Summary.propTypes = {
  runtime: Types.string.isRequired,
  leetcode: Types.shape({
    runtime: Types.string,
    memory: Types.string,
  }).isRequired,
}

export default Summary
