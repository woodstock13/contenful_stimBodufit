import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Image, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.title} />
        <MainImage
          location={this.props.location}
          title={post.title}
          image={post.image.fluid.src}
        />
        <Container>
          <article>
            <section
              dangerouslySetInnerHTML={{
                __html: post.content.childContentfulRichText.html,
              }}
            />
            <hr />
          </article>

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={"blog/" + previous.slug} rel="prev">
                    ← {previous.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={"blog/" + next.slug} rel="next">
                    {next.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query BlogPostContentfulTemplate($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      content {
        childContentfulRichText {
          html
        }
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`
