import React from 'react'
import { Image, Card } from 'rebass'
import PropTypes from 'prop-types'
import { Heading, Text } from '@elements/text'

const ProjectCard = ({ title, tech, github, link, color, cover, html }) => {
  return (
    <Card as="section">
      <Image
        as="figure"
        width="100%"
        height={[288, 368]}
        bg={`#${color}`}
        borderRadius={8}
        mb={2}
      />
      <article>
        <Heading fontSize={4} mb={1}>
          {title}
        </Heading>
        <Text color="grays.dark" mb={3}>
          {tech.sort().join(' / ')}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
}

export default ProjectCard
