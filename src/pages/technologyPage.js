import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
import GetRichText from "../components/getRichText"

export default props => (
  <Layout location={props.location}>
    <SEO title="Technologie I-Motion" />
    <MainImage location={props.location} />
    <Container style={{ margin: "0 auto", position: "relative" }}>
      <Row>
        <Col xs={{ order: 1 }} md={8}>
          <div style={{ textAlign: "justify" }}>
            <GetRichText location={props.location} />
          </div>
        </Col>
        <Col xs={{ order: 12 }} md={4}>
          <img
            src="https://imotion-ems.com/wp-content/uploads/2018/05/imotion_biojacket_new_01-2.png"
            alt="equipements"
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)
