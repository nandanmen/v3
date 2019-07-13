/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import themeGet from '@styled-system/theme-get'
import { Box } from 'rebass'

import CodeBlock from '@components/CodeBlock'
import Layout from '@components/Layout'
import { Heading, Text } from '@elements/text'
import Base from '@elements/Grid'
import '@style/prism.css'

const AlgorithmTemplate = ({ data: { mdx } }) => (
  <MDXProvider
    components={{
      pre: props => <Pre {...props} />,
      code: props => <CodeBlock mt={[3]} {...props} />,
      h1: props => <Heading mb={[4]} fontSize={[5]} {...props} />,
      p: props => <Text mb={[2]} {...props} />,
    }}
  >
    <Layout title={mdx.exports.metadata.title}>
      <Grid px={[4, 7, 8, 0]} py={[5, 6, 6, 0]}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Grid>
    </Layout>
  </MDXProvider>
)

export default AlgorithmTemplate

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      exports {
        metadata {
          title
        }
      }
    }
  }
`

const Grid = styled(Base)`
  @media screen and (min-width: ${themeGet('breakpoints.0')}px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: ${themeGet('breakpoints.2')}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    > * {
      grid-column: 1;
    }
  }
`

const Pre = styled(Box).attrs({ as: 'pre' })`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${themeGet('colors.grays.light')};
  overflow-x: auto;
  border-radius: 8px;

  @media screen and (min-width: ${themeGet('breakpoints.2')}px) {
    grid-column: 2;
    height: calc(100vh - 60px);
  }
`
