import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"
import { Media } from "react-bootstrap"

function ProcessusItem(props) {
  const num = props.number
  const title = props.title
  const description = props.desc

  //style here
  const Aprocessus = styled.div`
    flex: 100%;
    margin-right: 1rem;
  `

  return (
    <Media>
      <Media.Body>
        <h3>0{num}</h3>
        <span
          style={{
            background: " #ff0000",
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
