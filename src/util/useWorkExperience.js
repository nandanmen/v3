import { useStaticQuery, graphql } from 'gatsby'

export default function useWorkExperience() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/work/" } }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              startDate
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
