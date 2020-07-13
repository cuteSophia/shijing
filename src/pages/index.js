import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from '../components/posts'

import ImgBg from "../../content/assets/bing2.jpeg"

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title // 网页标题
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Shi Jing" />
      <div className="impression">
        <img src={ImgBg} alt="" />
        <div>
          <h1>shi jing</h1>
          <h2>china web developer with react.js, notes on life and software</h2>
        </div>
      </div>
      <Bio />
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
