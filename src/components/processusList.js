import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ProcessusItem from "./processusItem"

import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from "react-bootstrap"

function ProcessusList() {
  const { edges } = useAllProcessus()
  let aProcessusItems = edges
  let processusListComponent

  //style here
  const MainImage = styled.div`
    flex: 100%;
    margin-right: 1rem;
  `

  processusListComponent = (nbBiguine, nbEnd) => (
    <Row>
      <br />
      {aProcessusItems.slice(nbBiguine, nbEnd).map(processusItem => (
        <Col key={processusItem.node.numroDansLordreDuProcessus}>
          <ProcessusItem
            key={processusItem.node.numroDansLordreDuProcessus}
            title={processusItem.node.titreDuProcessus}
            number={processusItem.node.numroDansLordreDuProcessus}
            desc={processusItem.node.textDuProcessus.textDuProcessus}
          />
        </Col>
      ))}
    </Row>
  )

  return (
    <>
      {processusListComponent(0, 3)}
      {processusListComponent(3, 6)}
    </>
  )
}

export default ProcessusList

const useAllProcessus = () => {
  const { allContentfulProcessus } = useStaticQuery(
    graphql`
      query {
        allContentfulProcessus(
          sort: { fields: numroDansLordreDuProcessus, order: ASC }
        ) {
          edges {
            node {
              titreDuProcessus
              textDuProcessus {
                textDuProcessus
              }
              numroDansLordreDuProcessus
            }
          }
        }
      }
    `
  )
  return allContentfulProcessus
}
