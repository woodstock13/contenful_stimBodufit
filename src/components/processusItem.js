import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Media } from "react-bootstrap"

function ProcessusItem(props) {
  const num = props.number
  const title = props.title
  const description = props.desc

  return (
    <Media>
      <Media.Body>
        <h3>0{num}</h3>
        <span
          style={{
            background: "#389FCD",
            position: "absolute",
            height: "1px",
            display: "block",
            width: "60px",
            left: "42%",
            margin_left: "-25px",
          }}
        >
          {" "}
        </span>
        <br />
        <h5>{title}</h5>
        <p>{description}</p>
      </Media.Body>
    </Media>
  )
}

export default ProcessusItem
