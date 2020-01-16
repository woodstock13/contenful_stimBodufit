import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import { MapPin } from "react-feather"

let mapkey = ""
if (process.env.NETLIFY_MAP_KEY) {
  mapkey = process.env.NETLIFY_MAP_KEY
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.2890048,
      lng: 5.3941924,
    },
    zoom: 14,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapPin
            color={"red"}
            lat={43.2890048}
            lng={5.3941924}
            text={"StimBodyFit"}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
