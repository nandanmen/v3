import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Github } from 'styled-icons/boxicons-logos'
import { LinkExternal } from 'styled-icons/boxicons-regular'
import { Box, Image, Flex } from 'rebass'
import Types from 'prop-types'

import { Heading, Text } from '@elements/text'
import Link from '@elements/Link'
import useIntersectionObserver from '@util/useIntersectionObserver'
import { fadeIn } from '@animations'

const ProjectCard = ({
  title,
  tech,
  github,
  link,
  color,
  cover,
  html,
  ...props
}) => {
  const ref = useRef(null)
  const isInView = useIntersectionObserver(ref)[0]
  return (
    <Card
      as="section"
      flexDirection={['column', 'row', 'row', 'column']}
      ref={ref}
      isInView={isInView}
      {...props}
    >
      <Figure
        as="figure"
        width={['100%', 'auto']}
        height={[288, 368]}
        bg={`#${color}`}
        mb={[2, 0]}
      />
      <Content>
        <Heading fontSize={4} mb={1}>
          {title}
        </Heading>
        <Text color="grays.dark" mb={2}>
          {tech.sort().join(' / ')}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: html }} mb={2} />
        <Flex as="footer" color="grays.dark">
          <Link mr={1} external href={github}>
            <Github size="1.5em" />
          </Link>
          {link && (
            <Link external href={link}>
              <LinkExternal size="1.5em" />
            </Link>
          )}
        </Flex>
      </Content>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: Types.string.isRequired,
  tech: Types.arrayOf(Types.string).isRequired,
  github: Types.string.isRequired,
  color: Types.string.isRequired,
  cover: Types.string.isRequired,
  html: Types.string.isRequired,
  link: Types.string,
}

ProjectCard.defaultProps = {
  link: '',
}

export default ProjectCard

const Content = styled(Box).attrs({ as: 'article' })`
  grid-column: 5 / span 4;
`

const Figure = styled(Image)`
  border-radius: 8px;
  grid-column: 1 / span 4;
`

const Card = styled(Flex)`
  width: 100%;

  ${fadeIn.init}
  ${({ isInView }) =>
    isInView &&
    css`
      ${fadeIn.animation}
    `}

  @media screen and (min-width: ${themeGet('breakpoints.0')}px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: ${themeGet('space.3')}px;
  }
`
