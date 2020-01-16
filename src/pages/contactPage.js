import React from "react"
import Icon from "@mdi/react"
import { mdiCheckBold } from "@mdi/js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
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
        <Col xs={6} md={6} style={{ textAlign: "left", paddingTop: "1em" }}>
          <h4>
            Réservez vite votre séance d'essai gratuite <b>STIMBODYFIT</b> :
          </h4>
          <ul style={{ fontFamily: "arial", fontSize: "18px" }}>
            <Icon path={mdiCheckBold} size={1} color="#389FCD" />
            20 minutes = 4 heures de sport
            <br />
            <Icon path={mdiCheckBold} size={1} color="#389FCD" />
            Coaching personnalisé
            <br />
            <Icon path={mdiCheckBold} size={1} color="#389FCD" />
            Coachs diplômés d'État
            <br />
            <Icon path={mdiCheckBold} size={1} color="#389FCD" />
            Tous vos objectifs sont possibles !<br />
          </ul>
          <p style={{ fontFamily: "arial", fontSize: "18px" }}>
            Une fois votre formulaire envoyé, l'équipe STIMBODYFIT vous
            appellera pour fixer la date et l'heure de votre{" "}
            <b> séance d'essai offerte</b>.
          </p>
        </Col>
        <Col xs={6} md={6}>
          {/* <h4 style={{ textAlign: "left", paddingTop: "1em" }}>
            <u>Formulaire d'inscription:</u>
          </h4> */}
          <Form />
        </Col>
      </Row>
    </Container>
    <Container>
      <SimpleMap />
    </Container>
  </Layout>
)
