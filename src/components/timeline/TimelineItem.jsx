import React from 'react'
import { format } from 'date-fns'
import Types from 'prop-types'
import styled from 'styled-components'
import { Box } from 'rebass'
import themeGet from '@styled-system/theme-get'
import { Heading, Text } from '@elements/text'

const getDateText = (startDate, endDate) => {
  return `${format(startDate, 'MMMM yyyy')} — ${endDate ? format(endDate, 'MMMM yyyy') : 'Present'}`;
}

const TimelineItem = ({ title, startDate, endDate, children }) => {
  return (
    <div>
      <Header mb={3}>
        <Text color="grays.dark" mb={1}>{getDateText(startDate, endDate)}</Text>
        <Title fontSize={2}>
          {title}
        </Title>
      </Header>
      <Article>{children}</Article>
    </div>
  )
}

TimelineItem.propTypes = {
  title: Types.string.isRequired,
  startDate: Types.instanceOf(Date).isRequired,
  children: Types.node,
  endDate: Types.instanceOf(Date)
}

TimelineItem.defaultProps = {
  children: null,
  endDate: null
}

export default TimelineItem

const Title = styled(Heading)`
  font-weight: 600;
`

const Header = styled(Box).attrs({ as: 'header' })`
  padding-top: 6px;
  position: relative;

  &:before {
    border-radius: 50%;
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    left: -56px;
    top: 0;
    background: ${themeGet('colors.grays.med')};
  }
`

const Article = styled(Box).attrs({ as: 'article' })`
  ul {
    list-style: square;
  }
`