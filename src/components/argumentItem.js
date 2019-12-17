import React from "react"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"
import { Media } from "react-bootstrap"

function ArgumentItem(props) {
  const title = props.title
  const description = props.desc

  return (
    <Media>
      <Media.Body>
        <h5>{title}</h5>
        <p>{description}</p>
      </Media.Body>
      <img
        width={64}
        height={64}
        className="align-self-start mr-3"
        src="https://via.placeholder.com/64x64.png"
        alt="Generic placeholder"
      />
    </Media>
  )
}

export default ArgumentItem
