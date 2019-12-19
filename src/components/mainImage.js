import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Card, Container } from "react-bootstrap"
import ImageHomePage from "../images/coverHomePage.jpg"
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
      aTmp.push("src/images/coverHomePage.jpg")
      aTmp.push("Nos Technologies")
      return aTmp
    case "/pricePage":
      aTmp.push("src/images/coverHomePage.jpg")
      aTmp.push("Nos Tarifs")
      return aTmp
    case "/contactPage":
      aTmp.push("src/images/coverHomePage.jpg")
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
    let dataImage = selectedCoverImageByPath(currentPath)
    let srcImage = dataImage[0]
    let textImage = dataImage[1]
    let suTextImage = dataImage[2] || null
    console.log(dataImage)
    //else page:
    bannerImage = (
      <>
        <Card
          className="bg-dark text-white"
          style={{ position: "inherit", maxHeight: "550px" }}
        >
          <Card.Img
            alt={textImage}
            src={srcImage}
            style={{
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <Card.ImgOverlay>
            <Card.Title>{textImage}</Card.Title>
            <Card.Text>{suTextImage}</Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <div
          style={{
            position: "absolute",
            height: "1000px",
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
