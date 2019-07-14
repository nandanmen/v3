import { useStaticQuery, graphql } from 'gatsby'

export default function useAlgorithms() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: exports___metadata___number, order: ASC }) {
        nodes {
          id
          exports {
            metadata {
              number
              title
            }
          }
        }
      }
    }
  `)
  return data.allMdx.nodes.map(node => ({
    id: node.id,
    number: node.exports.metadata.number,
    title: node.exports.metadata.title,
  }))
}
