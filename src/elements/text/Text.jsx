import React from 'react'
import { Text as Base } from 'rebass'

const Text = props => (
  <Base as="p" color="blacks.body" fontSize={[0, 1]} {...props} />
)

export default Text
