import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Media } from "react-bootstrap"
import Icon from "@mdi/react"
import {
  mdiProgressCheck,
  mdiCertificateOutline,
  mdiChartTimelineVariant,
  mdiAccountGroup,
  mdiEarth,
  mdiBullseyeArrow,
} from "@mdi/js"

function ArgumentItem(props) {
  const title = props.title
  const description = props.desc

  //tableau numéroté pour l'import des icons via contentful
  const icons = [
    mdiProgressCheck,
    mdiCertificateOutline,
    mdiChartTimelineVariant,
    mdiAccountGroup,
    mdiEarth,
    mdiBullseyeArrow,
  ]
  const icon = icons[props.icon]
  return (
    <Media>
      <Icon path={icon} title="icon" size={2} color="#389FCD" />
      <Media.Body>
        <h5>{title}</h5>
        <p
          style={{
            maxWidth: "200px",
            maxHeight: "7.4em",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </p>
      </Media.Body>
    </Media>
  )
}

export default ArgumentItem
