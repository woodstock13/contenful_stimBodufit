import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
import ContactInfo from "../components/contactInfo"
import Form from "../components/formMailChimp"
import SimpleMap from "../components/simpleMap"

import { Container, Row, Col } from "react-bootstrap"

export default props => (
  <Layout location={props.location}>
    <SEO title="Prendre RDV" />
    <MainImage location={props.location} />
    <Container style={{ margin: "0 auto", position: "relative" }}>
      <br />
      <Row>
        <Col xs={6} md={6}>
          <h3 style={{ textAlign: "left" }}> Merci de votre confiance ! </h3>
          <ContactInfo />
        </Col>
        <Col xs={6} md={6}>
          <h4 style={{ textAlign: "left" }}>
            {" "}
            <u>Formulaire d'inscription</u> :{" "}
          </h4>
          <Form />
        </Col>
      </Row>
    </Container>
    <Container>
      <SimpleMap />
    </Container>
  </Layout>
)
