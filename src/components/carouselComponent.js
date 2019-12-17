import React, { useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel, Row, Col } from "react-bootstrap"

function CarousselComponent(props) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  let carroussel = (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      <Carousel.Item>
        <Row>
          <Col>
            <img
              style={{ background: "white", width: "330px", height: "450px" }}
              src="https://via.placeholder.com/430x640.png"
              alt="Second slide"
            />
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                position: "relative",
                margin: "0 auto",
                clear: "left",
                height: "auto",
                z_index: "0",
                text_align: "center",
              }}
            >
              <h3>First slide label</h3>
              <p>
                Un peu touche a tout niveau sport, seul le CrossFit a changé ma
                vie en 2013. A tel point que j'ai décider d'aider les gens à
                améliorer leur santé et leur vie plus largement. Alias le
                guerriseur, pour moi la santé passe avant la performance, mais
                l'envie de se dépasser au sein du groupe, de la communauté reste
                primordial. La virtuosité avant l'intensité, partage, discipline
                et dépassement de soi, entraide et plaisir sont les valeurs qui
                raisonnent en moi quand je parle de CrossFit. Mon rôle principal
                et d'être head coach, je m'occupe de la programmation de la box,
                de coordonner la trame des coachs et assistants coach. Je reste
                avant tout un coach à part entière. Avec mon associé Mathieu
                Nunes nous nous employons le reste du temps au développement et
                la pérennité des box d'Aix en Provence dans le 13 et de Blanzy
                dans le 71. .
              </p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col>
            <div
              style={{ background: "white", width: "330px", height: "450px" }}
            >
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/430x640.png"
                alt="Second slide"
              />
            </div>
          </Col>
          <Col>
            <div
              style={{
                position: "relative",
                margin: "0 auto",
                clear: "left",
                height: "auto",
                z_index: "0",
                text_align: "center",
              }}
            >
              <h3>First slide label</h3>
              <p>
                Un peu touche a tout niveau sport, seul le CrossFit a changé ma
                vie en 2013. A tel point que j'ai décider d'aider les gens à
                améliorer leur santé et leur vie plus largement. Alias le
                guerriseur, pour moi la santé passe avant la performance, mais
                l'envie de se dépasser au sein du groupe, de la communauté reste
                primordial. La virtuosité avant l'intensité, partage, discipline
                et dépassement de soi, entraide et plaisir sont les valeurs qui
                raisonnent en moi quand je parle de CrossFit. Mon rôle principal
                et d'être head coach, je m'occupe de la programmation de la box,
                de coordonner la trame des coachs et assistants coach. Je reste
                avant tout un coach à part entière. Avec mon associé Mathieu
                Nunes nous nous employons le reste du temps au développement et
                la pérennité des box d'Aix en Provence dans le 13 et de Blanzy
                dans le 71. .
              </p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  )

  return (
    <Row>
      <Col>{carroussel}</Col>
    </Row>
  )
}

export default CarousselComponent
