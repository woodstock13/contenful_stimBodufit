import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./layout.scss"

import { ButtonGroup, Navbar, Container, Nav, Col, Row } from "react-bootstrap"
import Icon from "@mdi/react"
import { mdiInstagram, mdiFacebookBox, mdiTwitter } from "@mdi/js"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let socialButtonGroup = (
      <ButtonGroup>
        <div>
          <a href="https://instagram.com" target="_blank">
            <Icon path={mdiInstagram} title="insta" size={1} color="#F9A825" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <Icon path={mdiFacebookBox} title="fb" size={1} color="#1565C0" />
          </a>
        </div>
      </ButtonGroup>
    )

    let header = (
      <div>
        <Navbar bg="light" collapseOnSelect expand="lg">
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">{title || "StimbodyFit"}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/technologyPage">
                <Nav.Link as="span">
                  Notre <b>Technologie</b>
                </Nav.Link>
              </Link>
              <Link to="/pricePage">
                <Nav.Link as="span">
                  Nos <b>Prix</b>
                </Nav.Link>
              </Link>
              <Link to="/contactPage">
                <Nav.Link as="span">
                  <b>Prendre RDV !</b>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          {socialButtonGroup}
        </Navbar>
      </div>
    )
    let footer = (
      <footer>
        <Navbar bg="dark" fixed="down" expand="lg">
          <Col style={{ color: "white" }}>
            <h5>
              {title} © {new Date().getFullYear()}, Built with
              {` `}
              <a style={{ color: "#c1c1c1" }} href="https://www.gatsbyjs.org">
                Gatsby
              </a>
            </h5>
          </Col>
          <Col align="right">{socialButtonGroup}</Col>
        </Navbar>
      </footer>
    )
    return (
      <div>
        <header>{header}</header>
        <Container>{children}</Container>
        <footer>{footer}</footer>
      </div>
    )
  }
}

export default Layout
