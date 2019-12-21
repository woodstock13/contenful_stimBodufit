import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
import GetRichText from "../components/getRichText"

export default props => (
  <Layout location={props.location}>
    <SEO title="Nos Témoignages" />
    <MainImage location={props.location} />
    <Container style={{ margin: "0 auto", position: "relative" }}>
      <GetRichText location={props.location} />
    </Container>
  </Layout>
)
