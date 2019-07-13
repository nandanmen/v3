import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Github } from 'styled-icons/boxicons-logos'
import { LinkExternal } from 'styled-icons/boxicons-regular'
import { Box, Image, Flex } from 'rebass'
import Types from 'prop-types'

import { Heading, Text } from '@elements/text'
import Link from '@elements/Link'
import Grid from '@elements/Grid'
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
  const isInView = useIntersectionObserver(ref, { threshold: 0.4 })[0]
  return (
    <Card as="section" ref={ref} isInView={isInView} {...props}>
      <Figure
        as="figure"
        width={['100%', 'auto']}
        height={[288, 288, 368]}
        bg={`#${color}`}
        mb={[2, 0, 0, 4]}
      >
        <Img
          src={`./thumbnails/${cover}`}
          alt={title}
          id={title}
          ml={4}
          mt={4}
        />
      </Figure>
      <Content>
        <Heading fontSize={4} mb={1}>
          {title}
        </Heading>
        <Text color="grays.dark" mb={2}>
          {tech.sort().join(' / ')}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: html }} mb={2} />
        <Flex as="footer" color="grays.dark">
          <Icon mr={1} external href={github}>
            <Github size="1.5em" />
          </Icon>
          {link && (
            <Icon external href={link}>
              <LinkExternal size="1.5em" />
            </Icon>
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

  @media screen and (min-width: ${themeGet('breakpoints.1')}px) {
    grid-column: 7 / span 6;
  }
`

const Figure = styled(Image)`
  border-radius: 8px;
  grid-column: 1 / span 4;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: ${themeGet('breakpoints.1')}px) {
    grid-column: 1 / span 6;
  }
`

const Img = styled(Image)`
  width: 100%;
  transition: all 0.2s ease-out;

  &#Dictionary {
    object-fit: cover;
    margin-left: 0;
    margin-top: 1em;
  }

  &#Music {
    height: 400px;
    width: auto;
    max-width: none;
  }
`

const Card = styled(Grid).attrs({ px: undefined, py: undefined })`
  width: 100%;

  ${fadeIn.init}
  ${({ isInView }) =>
    isInView &&
    css`
      ${fadeIn.animation}
    `}
  
  animation-delay: 0;

  @media screen and (min-width: ${themeGet('breakpoints.2')}px) {
    display: flex;
    flex-direction: column;
    grid-column: auto / span 4;
    animation-delay: ${props => props.index / 10}s;
  }
`

const Icon = styled(Link)`
  color: inherit;

  &:hover {
    color: ${themeGet('colors.blue')};
  }
`
