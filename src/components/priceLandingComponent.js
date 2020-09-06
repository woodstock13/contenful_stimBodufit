import React from "react"
import { useStaticQuery } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Image, Col } from "react-bootstrap"
import ImagePrice from "../images/priceImage.png"

function PriceLandingPage() {
  const { html } = usePriceTextParagraph()
  return (
    <Row style={{ margin: "0 auto" }}>
      <div
        style={{
          minHeight: "50%",
          minWidth: "50%",
        }}
      >
        <Image
          style={{
            minHeight: "50%",
            minWidth: "50%",
          }}
          src={ImagePrice}
          thumbnail
          fluid
        />
      </div>
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
