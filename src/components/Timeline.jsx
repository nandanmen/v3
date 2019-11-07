import React from 'react'
import Types from 'prop-types'
import styled from 'styled-components'
import { Box } from 'rebass'
import themeGet from '@styled-system/theme-get'
import { Heading } from '@elements/text'

import TimelineItem from './timeline/TimelineItem'

const Timeline = ({ title, content, ...props }) => {
  return (
    <Section {...props}>
      <Title fontSize={[2, 3, 4]} mb={4}>
        {title}
      </Title>
      <Content>
        {content.map(({ id, ...item }) => (
          <TimelineItem key={id} {...item} />
        ))}
      </Content>
    </Section>
  )
}

Timeline.propTypes = {
  title: Types.string.isRequired,
  content: Types.arrayOf(Types.any).isRequired,
}

export default Timeline

const Section = styled(Box).attrs({ as: 'section' })`
  grid-column: span 6;

  @media screen and (min-width: ${themeGet('breakpoints.2')}px) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: min-content;
    grid-column-gap: ${themeGet('space.4')}px;
  }
`

const Title = styled(Heading)`
  grid-column: 1 / -1;
`

const Content = styled(Box)`
  position: relative;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  padding: 0 0 32px 56px;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    left: 20px;
    top: 0;
    background: ${themeGet('colors.grays.med')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.2')}px) {
    padding-right: 56px;
  }
`
