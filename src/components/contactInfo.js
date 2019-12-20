import React from "react"
import { useStaticQuery } from "gatsby"
import { MapPin, Smartphone, Mail } from "react-feather"

import "./contact.css"
function ContactInfo() {
  const { allContentfulContactInfo } = useStaticQuery(
    graphql`
      query {
        allContentfulContactInfo {
          edges {
            node {
              mailContact
              telephoneInfo
              adresse
            }
          }
        }
      }
    `
  )
  const data = allContentfulContactInfo.edges[0].node
  const adresse = data.adresse
  const phone = data.telephoneInfo
  const email = data.mailContact

  return (
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div className="Contact" style={{ fontSize: "1.6em" }}>
          <div className="Contact--Details">
            {adresse && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  adresse
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {adresse}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
