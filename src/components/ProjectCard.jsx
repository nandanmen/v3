import React from 'react'
import { Image, Card } from 'rebass'
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

export default ProjectCard
