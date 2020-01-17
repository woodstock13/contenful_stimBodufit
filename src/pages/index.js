import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
import ArgumentsList from "../components/argumentsList"
import BlogList from "../components/blogList"
import Title from "../components/Title"
import ProcessusList from "../components/processusList"
import PriceLandingPage from "../components/priceLandingComponent"
import CarouselComponent from "../components/carouselComponent"
import SimpleMap from "../components/simpleMap"
import ContactInfo from "../components/contactInfo"

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
        <Container>
          <Title title={"Nos Forces"} />
          <ArgumentsList arguments={argumentsContent} />
          {/* <Title title={"Nos News"} />
          <BlogList posts={postsData} /> */}
          <Title title={"Notre Méthodologie"} />
          <ProcessusList />
          <Title title={"Nos Coachs"} />
          <CarouselComponent />
          {/* <Title title={"Nos Tarifs"} /> */}
          <PriceLandingPage />
          <Title title={"Nous Trouver"} />
          <Row>
            <Col>
              <ContactInfo location={this.props.location} />
            </Col>
            <Col>{/* <SimpleMap /> */}</Col>
          </Row>
        </Container>
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
          numIcon
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
