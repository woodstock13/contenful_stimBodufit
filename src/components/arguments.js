import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Card } from "react-bootstrap"
import styles from "./arguments.scss"

function createCardArgument(objArgument) {
  let argumentTitle = objArgument.node.title
  let argumentText = objArgument.node.text.childMarkdownRemark.rawMarkdownBody

  const OneArgument = styled.div`
    height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 1em;
  `
  const LimitSizeArgument = styled.div`
    height: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  `

  return (
    <OneArgument>
      <Card>
        <Card.Body>
          <Card.Title>{argumentTitle}</Card.Title>
          <Card.Text>
            <LimitSizeArgument>{argumentText}</LimitSizeArgument>
          </Card.Text>
        </Card.Body>
      </Card>
    </OneArgument>
  )
}

function Arguments(props) {
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
        {aArguments.slice(0, 3).map(el => (
          <div key={el.node.title}> {createCardArgument(el)} </div>
        ))}
      </Col>
      <Col xs={{ order: 6 }} md={4}>
        <MainImage>
          <Img fluid={fluid} />
        </MainImage>
      </Col>
      <Col xs={{ order: 12 }} md={{ order: 12 }}>
        {aArguments.slice(3, 6).map(el => (
          <div key={el.node.title}> {createCardArgument(el)} </div>
        ))}
      </Col>
    </Row>
  )

  return <>{argumentsComponent}</>
}

export default Arguments

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
