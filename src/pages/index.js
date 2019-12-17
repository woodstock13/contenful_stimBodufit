import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
import Arguments from "../components/arguments"
import BlogList from "../components/blogList"

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const postsData = data.allContentfulPost.edges
    const argumentsContent = data.allContentfulArguments.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Electrofitness Marseille" />
        <MainImage location={this.props.location} />
        <Arguments arguments={argumentsContent} />
        <BlogList posts={postsData} />
      </Layout>
    )
  }
}

export default HomePage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "DD MMMM YYYY")
          image {
            fluid {
              src
            }
          }
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
    allContentfulArguments(sort: { order: ASC, fields: createdAt }) {
      totalCount
      edges {
        node {
          title
          text {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`
