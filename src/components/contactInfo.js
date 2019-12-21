import React from "react"
import { useStaticQuery } from "gatsby"
import Icon from "@mdi/react"
import {
  mdiHomeCityOutline,
  mdiPhoneForwardOutline,
  mdiEmailSendOutline,
} from "@mdi/js"

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
      <div>
        <div
          className="Contact"
          style={{ fontSize: "1.6em", textAlign: "left", padding: "0.4em" }}
        >
          <div style={{ padding: "1em" }}>
            {adresse && (
              <a
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  adresse
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  path={mdiHomeCityOutline}
                  title="insta"
                  size={2}
                  color="#285569"
                />{" "}
                {adresse}
              </a>
            )}
          </div>
          <div style={{ padding: "1em" }}>
            {phone && (
              <a href={`tel:${phone}`}>
                <Icon
                  path={mdiPhoneForwardOutline}
                  title="insta"
                  size={2}
                  color="#285569"
                />{" "}
                {phone}
              </a>
            )}
          </div>
          <div style={{ padding: "1em" }}>
            {email && (
              <a
                href={`mailto:${email}?subject=Contact%20direct%20site%20StimbodyFit`}
              >
                <Icon
                  path={mdiEmailSendOutline}
                  title="insta"
                  size={2}
                  color="#285569"
                />{" "}
                {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
