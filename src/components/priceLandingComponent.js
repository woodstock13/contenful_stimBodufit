import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Image, Col, Button } from "react-bootstrap"

import Title from "./Title"
import ImagePrice from "../images/prices.png"

function PriceLandingPage() {
  return (
    <Row style={{ margin: "0 auto" }}>
      <Col>
        <Title title={"Nos Tarifs"} />
        <p>blabla...</p>
        <Link style={{ boxShadow: `none` }} to={"pricePage"}>
          <Button variant="outline-primary">
            Plus de détails sur nos prix
          </Button>
        </Link>
      </Col>
      <Col>
        <Image src={ImagePrice} thumbnail fluid />
      </Col>
    </Row>
  )
}

export default PriceLandingPage
