import React from "react"
import { useStaticQuery, Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Image, Col, Button } from "react-bootstrap"

import Title from "./Title"
import ImagePrice from "../images/prices.png"

function PriceLandingPage() {
  const { html } = usePriceTextParagraph()
  return (
    <Row style={{ margin: "0 auto" }}>
      <Col>
        <Title title={"Nos Tarifs"} />
        <p
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
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

const usePriceTextParagraph = () => {
  const { allContentfulPriceParagraph } = useStaticQuery(
    graphql`
      query {
        allContentfulPriceParagraph {
          edges {
            node {
              priceParagraph {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `
  )
  return allContentfulPriceParagraph.edges[0].node.priceParagraph
    .childMarkdownRemark
}
