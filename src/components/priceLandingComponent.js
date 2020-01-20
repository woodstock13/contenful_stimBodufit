import React from "react"
import { useStaticQuery } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Image, Col } from "react-bootstrap"
import ImagePrice from "../images/pricePage.png"
import ImagePrice2 from "../images/pricePage2.png"

function PriceLandingPage() {
  const { html } = usePriceTextParagraph()
  return (
    <Row style={{ margin: "0 auto" }}>
      {new Date().getMonth() <= 1 ? (
        <Image src={ImagePrice} thumbnail fluid />
      ) : (
        <Image src={ImagePrice2} thumbnail fluid />
      )}
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
