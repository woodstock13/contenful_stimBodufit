import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import MainImage from "../components/mainImage"

const Post = styled.div`
  display: flex;
  margin: 1rem;
`
const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
`
const PostText = styled.div`
  flex: 75%;
`
class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <MainImage location={this.props.location} />
        {/* TODO a cpt of blog */}
        {posts.map(({ node }) => {
          const title = node.title
          const description = node.description.childMarkdownRemark.html
          return (
            <Post key={node.slug}>
              <PostImage>
                <Link to={"blog/" + node.slug}>
                  <Img fluid={node.image.fluid} />
                </Link>
              </PostImage>
              <PostText>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={"blog/" + node.slug}>
                    {title}
                  </Link>
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </PostText>
            </Post>
          )
        })}
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
    allContentfulPost {
      edges {
        node {
          title
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
