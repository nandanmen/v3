import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
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
      <Figure as="figure" height={[288, 368]} bg={`#${color}`} mb={2} />
      <Box as="article" mb={2}>
        <Heading fontSize={4} mb={1}>
          {title}
        </Heading>
        <Text color="grays.dark" mb={2}>
          {tech.sort().join(' / ')}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
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

const Figure = styled(Image)`
  width: 100%;
  border-radius: 8px;
`

const Card = styled(Flex)`
  ${fadeIn.init}
  ${({ isInView }) =>
    isInView &&
    css`
      ${fadeIn.animation}
    `}
`
