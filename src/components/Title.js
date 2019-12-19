import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row } from "react-bootstrap"
import { mdiAndroidAuto } from "@mdi/js"

export default props => {
  return (
    <Row>
      <div style={{ margin: "0 auto", position: "relative" }}>
        <br />
        <h3>{props.title}</h3>
        <span
          style={{
            margin: "auto",
            background: " #389FCD",
            inlineSize: "auto",
            height: "2px",
            display: "block",
            width: "85px",
          }}
        ></span>
      </div>
    </Row>
  )
}
