import React from 'react'
import { Heading as BaseHeading } from 'rebass'

const Heading = props => (
  <BaseHeading
    as="h1"
    color="blacks.title"
    fontSize={[5, 6, 7, 8]}
    fontWeight="bold"
    lineHeight="1.2"
    {...props}
  />
)

export default Heading
