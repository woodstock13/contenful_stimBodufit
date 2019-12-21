import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import { Row } from "react-bootstrap"

function GetRichText(props) {
  const {
    allContentfulTechTextRich,
    allContentfulPriceTextRich,
  } = useStaticQuery(
    graphql`
      query {
        allContentfulTechTextRich {
          edges {
            node {
              text {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
        allContentfulPriceTextRich {
          edges {
            node {
              text {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
      }
    `
  )
  const TechText =
    allContentfulTechTextRich.edges[0].node.text.childContentfulRichText.html
  const PriceText =
    allContentfulPriceTextRich.edges[0].node.text.childContentfulRichText.html

  const getPath = props.location.pathname
  const data = getPath === "/pricePage" ? PriceText : TechText

  let displayRichText = (
    <Row>
      <section
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
    </Row>
  )

  return <>{displayRichText}</>
}

export default GetRichText
