import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel, Row, Col } from "react-bootstrap"
import Icon from "@mdi/react"
import { mdiInstagram, mdiLinkVariant } from "@mdi/js"

function CarousselComponent() {
  const { allContentfulCoachBio } = useStaticQuery(
    graphql`
      query {
        allContentfulCoachBio {
          edges {
            node {
              instagram
              desscription {
                childMarkdownRemark {
                  html
                }
              }
              nomEtPrenom
              titreBio
              autreLienInternet
              coachPhoto {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )
  // Data - attention reload à chaque tour du caroussel
  const data = allContentfulCoachBio.edges
  console.log(data)

  //style
  const BioSide = styled.div`
    position: relative;
    clear: left;
    height: auto;
    z_index: 0;
    text-align: left;
  `

  //carroussel dynamic options
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  let carroussel = (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map(oneCoach => {
        let coachImage = oneCoach.node.coachPhoto.fluid
        let name = oneCoach.node.nomEtPrenom
        let title = oneCoach.node.titreBio
        let desc = oneCoach.node.desscription.childMarkdownRemark.html
        console.log(desc)
        let insta = oneCoach.node.instagram
        let link = oneCoach.node.autreLienInternet

        return (
          <Carousel.Item key={name}>
            <Row>
              <Col>
                <div
                  style={{
                    margin: "0 auto",
                    background: "white",
                    width: "430px",
                    height: "650px",
                  }}
                >
                  <Img fluid={coachImage} alt={name} />
                </div>
              </Col>
              <Col>
                <BioSide>
                  <h3>
                    {name} - <i>{title}</i>
                  </h3>
                  <section
                    dangerouslySetInnerHTML={{
                      __html: desc,
                    }}
                  />
                  {insta ? (
                    <span>
                      <a href={insta} target="_blank">
                        <Icon
                          path={mdiInstagram}
                          title="insta"
                          size={1}
                          color="red"
                        />
                        {" " + insta}
                      </a>
                    </span>
                  ) : null}
                  <br />
                  {link ? (
                    <span>
                      <a href={link} target="_blank">
                        <Icon
                          path={mdiLinkVariant}
                          title="link"
                          size={1}
                          color="red"
                        />
                        {" " + link}
                      </a>
                    </span>
                  ) : null}
                </BioSide>
              </Col>
            </Row>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )

  return (
    <Row>
      <Col>{carroussel}</Col>
    </Row>
  )
}

export default CarousselComponent
