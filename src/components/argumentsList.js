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
    flex: 150%;
    margin-right: 1rem;
  `
  const WhiteBlock = styled.div`
    display: block;
    height: 70px;
    padding: 5px;
  `

  console.log(window.screen.width)

  const argumentsResponsiveComponent = (
    <Row>
      <MainImage>
        <Img fluid={fluid} />
      </MainImage>
      <Col style={{ textAlign: "-webkit-center" }}>
        {aArguments.slice(0, 6).map(oneArgument => (
          <ArgumentItem
            style={{ textAlign: "center" }}
            key={oneArgument.node.title}
            position="left"
            title={oneArgument.node.title}
            desc={oneArgument.node.text.childMarkdownRemark.rawMarkdownBody}
            icon={oneArgument.node.numIcon}
          />
        ))}
      </Col>
    </Row>
  )
  argumentsComponent = (
    <Row>
      <Col xs={{ order: 6 }} md={6}>
        <WhiteBlock />
        <MainImage>
          <Img fluid={fluid} />
        </MainImage>
        <WhiteBlock />
      </Col>
      <Col xs={{ order: 1 }} md={3} style={{ textAlign: "right" }}>
        {aArguments.slice(0, 3).map(oneArgument => (
          <ArgumentItem
            key={oneArgument.node.title}
            position="right"
            title={oneArgument.node.title}
            desc={oneArgument.node.text.childMarkdownRemark.rawMarkdownBody}
            icon={oneArgument.node.numIcon}
          />
        ))}
      </Col>
      <Col xs={{ order: 12 }} md={3} style={{ textAlign: "-webkit-center" }}>
        {aArguments.slice(3, 6).map(oneArgument => (
          <ArgumentItem
            style={{ textAlign: "left" }}
            key={oneArgument.node.title}
            position="left"
            title={oneArgument.node.title}
            desc={oneArgument.node.text.childMarkdownRemark.rawMarkdownBody}
            icon={oneArgument.node.numIcon}
          />
        ))}
      </Col>
    </Row>
  )
  if (window.screen.width > 1000) {
    return <>{argumentsComponent}</>
  } else {
    return <>{argumentsResponsiveComponent}</>
  }
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
