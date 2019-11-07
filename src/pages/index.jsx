import React from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Box, Flex } from 'rebass'
import { motion } from 'framer-motion'

import { Heading, Text } from '@elements/text'
import Link from '@elements/Link'
import Layout from '@components/Layout'
import ProjectCard from '@components/ProjectCard'
import Timeline from '@components/Timeline'
import useProjectsQuery from '@util/useProjectsQuery'
import useWorkExperience from '@util/useWorkExperience'
import useExtracurriculars from '@util/useExtracurriculars'
import Grid from '@elements/Grid'

const IndexPage = () => {
  const projects = useProjectsQuery()
  const works = useWorkExperience()
  const extras = useExtracurriculars()
  return (
    <Layout>
      <Grid>
        <Header
          mb={[5, 6]}
          initial={{ opacity: 0, translateY: 8 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading>
            Hi, I'm Nanda!{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </Heading>
          <Text my={4} mx="auto" fontSize={[1, 2]} width={[1, 0.8]}>
            I'm a 3rd year Business and Computer Science student and a software
            developer working on the{' '}
            <a href="https://tapestry-tool.com/">Tapestry Project</a> for the
            UBC Department of Psychology.
          </Text>
          <Links justifyContent="center" color="blue">
            <li>
              <Link
                href="https://github.com/narendrasss"
                external
                fontWeight="semi"
                fontSize={[1, 2]}
              >
                Github
              </Link>
            </li>
          </Links>
        </Header>
        <Section mb={[4, 5]}>
          <Timeline title="Work" content={works} />
          <Timeline title="Extracurricular" content={extras} />
        </Section>
        <ProjectsTitle fontSize={[2, 3, 4]} mb={4}>
          Personal Projects
        </ProjectsTitle>
        <Section>
          {projects.map((project, idx) => (
            <ProjectCard index={idx} mb={4} key={project.id} {...project} />
          ))}
        </Section>
      </Grid>
    </Layout>
  )
}

export default IndexPage

const Header = styled(Box).attrs({ as: motion.header })`
  opacity: 0;
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

const ProjectsTitle = styled(Heading)`
  grid-column: 1 / -1;
`

const Links = styled(Flex).attrs({ as: 'ul' })`
  list-style: none;
`
