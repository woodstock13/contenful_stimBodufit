import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row } from "react-bootstrap"

export default props => {
  return (
    <Row>
      <div style={{ margin: "0 auto" }}>
        <br />
        <h3>{props.title}</h3>
        <span
          style={{
            background: " #389FCD",
            position: "absolute",
            height: "2px",
            display: "block",
            width: "60px",
            left: "48%",
            margin_left: "-25px",
          }}
        ></span>
      </div>
    </Row>
  )
}
