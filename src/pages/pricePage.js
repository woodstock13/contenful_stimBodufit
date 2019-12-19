import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
import { Container } from "react-bootstrap"

export default props => (
  <Layout location={props.location}>
    <SEO title="Nos Prix" />
    <MainImage location={props.location} />
    <Container style={{ margin: "0 auto", position: "relative" }}>
      <h1>Nos Prix</h1>
      <p>Lorem ipsum...</p>
    </Container>
  </Layout>
)
