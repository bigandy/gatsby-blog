import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const page = data.allMarkdownRemark.edges[0]
    const title = page.node.frontmatter.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>{title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: page.node.html,
          }}
        />

      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "page" }
        }
        fields: {
          slug: { eq: "/cv/" }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
