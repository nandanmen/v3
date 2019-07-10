import { useStaticQuery, graphql } from 'gatsby'

export default function useProjectsQuery() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              tech
              github
              link
              color
              cover
            }
            html
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges.map(edge => ({
    id: edge.node.id,
    html: edge.node.html,
    ...edge.node.frontmatter,
  }))
}
