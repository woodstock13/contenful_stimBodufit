import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/mainImage"

export default props => (
  <Layout location={props.location}>
    <SEO title="Nos Temoignages" />
    <MainImage location={props.location} />
    <div>
      <h1>Temoignages</h1>
      <p>Lorem ipsum...</p>
    </div>
  </Layout>
)
