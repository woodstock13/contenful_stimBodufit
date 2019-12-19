import React from "react"
import { MapPin, Smartphone, Mail } from "react-feather"

import FormSimpleAjax from "../components/formSimpleAjax"

function ContactForm() {
  return (
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <div className="Contact--Details">
            {/* {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              > */}
            <a className="Contact--Details--Item">
              <MapPin /> adresse
            </a>
            )}
            {/* {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}> */}
            <a className="Contact--Details--Item">
              <Smartphone /> phone
            </a>
            )}
            {/* {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}> */}
            <a className="Contact--Details--Item">
              <Mail /> example@example.com
            </a>
            )}
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
