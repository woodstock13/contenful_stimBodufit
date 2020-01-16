import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Card, Container } from "react-bootstrap"
import ImageHomePage from "../images/coverHomePage.jpg"
import ImageTechnoPage from "../images/coverTechno.jpg"
import ImagePricePage from "../images/coverPrice.jpg"
import ImageCalendarPage from "../images/coverPlaning.jpg"
//Set gatsby assets
function selectedCoverImageByPath(path) {
  let aTmp = []
  switch (path) {
    case "/":
      aTmp.push(ImageHomePage)
      aTmp.push("StimbodyFit")
      aTmp.push("Electrofitness Marseille")
      return aTmp
    case "/technologyPage":
      aTmp.push(ImageTechnoPage)
      aTmp.push("Nos Technologies")
      return aTmp
    case "/pricePage":
      aTmp.push(ImagePricePage)
      aTmp.push("Nos Tarifs")
      return aTmp
    case "/contactPage":
      aTmp.push(ImageCalendarPage)
      aTmp.push("Nous Contacter")
      aTmp.push("Electrofitness Marseille")
      return aTmp

    default:
      aTmp.push("src/images/coverHomePage.jpg")
      aTmp.push("StimbodyFit")
      aTmp.push("Electrofitness Marseille")
      return aTmp
  }
}

function MainImage(props) {
  let bannerImage
  let stingPathBlog = "blog/"
  let currentPath = props.location.pathname
  //blog data
  let postTitle = props.title
  let srcPostImage = props.image

  if (currentPath.search(stingPathBlog) !== -1) {
    //blog page :
    bannerImage = (
      <Container>
        <Card className="text-white">
          <Card.Img
            src={srcPostImage}
            alt="Card image"
            style={{
              maxHeight: "400px",
              maxWidth: "500px",
            }}
          />
          <Card.ImgOverlay>
            <Card.Title>
              <h2>{postTitle}</h2>
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
    )
  } else {
    //Pages principales
    //TODO modifier le switch par un Hooks de type reducer
    let dataImage = selectedCoverImageByPath(currentPath)
    let srcImage = dataImage[0]
    let textImage = dataImage[1]
    let suTextImage = dataImage[2] || null
    bannerImage = (
      <>
        <Card
          className="bg-dark text-white"
          style={{
            position: "inherit",
            maxHeight: "550px",
            textAlign: "center",
          }}
        >
          <Card.Img
            alt={textImage}
            src={srcImage}
            // style={{
            //   filter: "grayscale(100%)",
            // }}
          />
          <Card.ImgOverlay style={{ paddingTop: "20%" }}>
            <Card.Title>
              <h1>{textImage}</h1>
            </Card.Title>
            <h5>{suTextImage}</h5>
            <Card.Text>---</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <div
          style={{
            position: "absolute",
            height: "840px",
            backgroundColor: "white",
            inlineSize: "-webkit-fill-available",
          }}
        ></div>
      </>
    )
  }

  return <>{bannerImage}</>
}

export default MainImage
