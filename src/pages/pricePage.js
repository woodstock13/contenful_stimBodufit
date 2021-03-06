import React from "react"
import { Container } from "react-bootstrap"
import { Image } from "react-bootstrap"

import ImagePrice from "../images/priceImage.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GetRichText from "../components/getRichText"

const fullWidth = {
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
}

export default props => (
  <Layout location={props.location}>
    <SEO title="Nos Prix" />
    <Container style={{ margin: "0 auto", position: "relative" }}>
      <div>
        <Image src={ImagePrice} style={fullWidth} />
        <GetRichText location={props.location} />
      </div>
    </Container>
  </Layout>
)
