import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import { Row, Image } from "react-bootstrap"

function MainImage(props) {
  let bannerImage
  let isPathBlog = "blog/"
  let currentPath = props.location.pathname

  if (currentPath.search(isPathBlog) !== -1) {
    //blog page :
    bannerImage = (
      <>
        <Image src="https://via.placeholder.com/900x350.png" fluid />

        {/* Title + subtitle */}
      </>
    )
  } else {
    //else page:
    bannerImage = (
      <div>
        <Image src="https://via.placeholder.com/1450x450.png" fluid />
      </div>
    )
  }

  return <Row>{bannerImage}</Row>
}

export default MainImage
