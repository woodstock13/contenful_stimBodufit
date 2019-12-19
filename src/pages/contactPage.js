import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
import ContactForm from "../components/contactForm"

import { Container } from "react-bootstrap"

export default props => (
  <Layout location={props.location}>
    <SEO title="Prendre RDV" />
    <MainImage location={props.location} />
    <Container style={{ margin: "0 auto", position: "relative" }}>
      <div>
        <ContactForm />
      </div>
    </Container>
  </Layout>
)
