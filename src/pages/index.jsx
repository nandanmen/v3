import React from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
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
      <Header mb={[5, 6]}>
        <Heading mb={1}>I'm Narendra.</Heading>
        <Text mb={[3, 3]} mx="auto" fontSize={[1, 2, 3]} width={[1, 0.8]}>
          I’m an aspiring software developer and 4th year Business and Computer
          Science student @ UBC.
        </Text>
        <Links justifyContent="center" color="blue">
          <li>
            <Link
              href="https://github.com/narendrasss"
              external
              fontWeight="semi"
              fontSize={[1, 2, 3]}
            >
              Github
            </Link>
          </li>
        </Links>
      </Header>
      <Section>
        {projects.map((project, idx) => (
          <ProjectCard index={idx} mb={4} key={project.id} {...project} />
        ))}
      </Section>
    </Layout>
  )
}

export default IndexPage

const Header = styled(Box).attrs({ as: 'header' })`
  grid-column: 2 / -2;
  text-align: center;

  @media screen and (min-width: ${themeGet('breakpoints.1')}px) {
    grid-column: 3 / -3;
  }
`

const Section = styled(Box).attrs({ as: 'section' })`
  grid-column: 1 / -1;

  @media screen and (min-width: ${themeGet('breakpoints.2')}px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${themeGet('space.4')}px;
  }
`

const Links = styled(Flex).attrs({ as: 'ul' })`
  list-style: none;
`
