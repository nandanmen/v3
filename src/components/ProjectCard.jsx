import React from 'react'
import { Github } from 'styled-icons/boxicons-logos'
import { LinkExternal } from 'styled-icons/boxicons-regular'
import { Box, Image, Flex } from 'rebass'
import Types from 'prop-types'

import { Heading, Text } from '@elements/text'
import Link from '@elements/Link'

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
  return (
    <Flex
      as="section"
      flexDirection={['column', 'row', 'row', 'column']}
      {...props}
    >
      <Image
        as="figure"
        width="100%"
        height={[288, 368]}
        bg={`#${color}`}
        borderRadius={8}
        mb={2}
      />
      <Box as="article" mb={2}>
        <Heading fontSize={4} mb={1}>
          {title}
        </Heading>
        <Text color="grays.dark" mb={2}>
          {tech.sort().join(' / ')}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
      <Flex color="grays.dark">
        <Link mr={1} external href={github}>
          <Github size="20px" />
        </Link>
        {link && (
          <Link external href={link}>
            <LinkExternal size="20px" />
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

ProjectCard.propTypes = {
  title: Types.string.isRequired,
  tech: Types.arrayOf(Types.string).isRequired,
  github: Types.string.isRequired,
  link: Types.string.isRequired,
  color: Types.string.isRequired,
  cover: Types.string.isRequired,
  html: Types.string.isRequired,
}

export default ProjectCard
