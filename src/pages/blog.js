import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'
import Posts from "../components/posts"

export default ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Posts data={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
