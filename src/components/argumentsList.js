import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Card, Media } from "react-bootstrap"
import ArgumentItem from "./argumentItem"

function ArgumentsList(props) {
  const { fluid } = useMediaImage()
  let aArguments = props.arguments
  let argumentsComponent

  const MainImage = styled.div`
    flex: 100%;
    margin-right: 1rem;
  `

  argumentsComponent = (
    <Row>
      <Col xs={{ order: 1 }} md={{ order: 1 }}>
        {aArguments.slice(0, 3).map(oneArgument => (
          <ArgumentItem
            key={oneArgument.node.title}
            title={oneArgument.node.title}
            desc={oneArgument.node.text.childMarkdownRemark.rawMarkdownBody}
          />
        ))}
      </Col>
      {/* TODO: Rework 3 col */}
      <Col xs={{ order: 6 }} md={4}>
        <MainImage>
          <Img fluid={fluid} />
        </MainImage>
      </Col>
      <Col xs={{ order: 12 }} md={{ order: 12 }}>
        {aArguments.slice(3, 6).map(oneArgument => (
          <ArgumentItem
            key={oneArgument.node.title}
            title={oneArgument.node.title}
            desc={oneArgument.node.text.childMarkdownRemark.rawMarkdownBody}
          />
        ))}
      </Col>
      {/* <Col xs={{ order: 12 }} md={{ order: 12 }}>
        {aArguments.slice(3, 6).map(oneArgument => (
          <ArgumentItem
            key={oneArgument.node.title}
            title={oneArgument.node.title}
            desc={oneArgument.node.text.childMarkdownRemark.rawMarkdownBody}
          />
        ))}
      </Col> */}
      {/* <Col xs={{ order: 12 }} md={{ order: 12 }}>
        {aArguments.slice(3, 6).map(el => (
          <div key={el.node.title}> {createCardArgument(el)} </div>
        ))}
      </Col> */}
    </Row>
  )

  return <>{argumentsComponent}</>
}

export default ArgumentsList

const useMediaImage = () => {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query {
        allContentfulAsset(
          filter: { id: { eq: "6b893d79-d022-5c13-90bf-c9bfa2b72465" } }
        ) {
          edges {
            node {
              title
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `
  )
  return allContentfulAsset.edges[0].node
}
