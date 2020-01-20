import React from "react"
import { Container } from "react-bootstrap"
import { Image } from "react-bootstrap"

import ImagePrice from "../images/pricePage.png"
import ImagePrice2 from "../images/pricePage2.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"
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
    {/* <MainImage location={props.location} /> */}
    <Container style={{ margin: "0 auto", position: "relative" }}>
      {new Date().getMonth() <= 1 ? (
        <Image src={ImagePrice} style={fullWidth} />
      ) : (
        <Image src={ImagePrice2} style={fullWidth} />
      )}
      <GetRichText location={props.location} />
    </Container>
  </Layout>
)
