import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'

import { Heading, Text } from '@elements/text'
import Link from '@elements/Link'
import Layout from '@components/Layout'
import ProjectCard from '@components/ProjectCard'
import useProjectsQuery from '@util/useProjectsQuery'

const IndexPage = () => {
  const projects = useProjectsQuery()
  return (
    <Layout>
      <Header mb={6}>
        <Heading mb={1}>I'm Narendra.</Heading>
        <Text mb={2} fontSize={[1, 2, 3]}>
          I’m an aspiring software developer and 4th year Business and Computer
          Science student @ UBC.
        </Text>
        <Links justifyContent="center" color="blue">
          <li>
            <Link
              href="https://github.com/narendrasss"
              external
              fontWeight="semi"
            >
              Github
            </Link>
          </li>
        </Links>
      </Header>
      <section>
        {projects.map(project => (
          <ProjectCard mb={4} key={project.id} {...project} />
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage

const Header = styled(Box).attrs({ as: 'header' })`
  text-align: center;
`

const Links = styled(Flex).attrs({ as: 'ul' })`
  list-style: none;
`
