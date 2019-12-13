import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import { Button, ButtonGroup, Navbar, Container } from "react-bootstrap"

import { rhythm, scale } from "../utils/typography"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import vimeo from "../images/vimeo.svg"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let header = (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>
            <Link className="navbar-item" title="Logo" to="/">
              {title}
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
            </Link>
          </Navbar.Brand>
          <ButtonGroup className="navbar-start has-text-centered">
            <Button variant="Light">
              <Link className="navbar-item" to="/">
                Nos Technologies
              </Link>
            </Button>
            <Button className="navbar-item" variant="Light">
              <Link to="/">Nos Témoignages</Link>
            </Button>
            <Button className="navbar-item" variant="Light">
              <Link to="/">Nos Prix</Link>
            </Button>
            <Button className="navbar-item" variant="Light">
              <Link to="/">Prendre RDV !</Link>
            </Button>
          </ButtonGroup>
        </Navbar>
      </div>
    )
    let footer = (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h1>{title}</h1>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
    return (
      <div>
        <header>{header}</header>
        <Container>{children}</Container>
        {/* // add containerBootsrap */}
        <footer>{footer}</footer>
      </div>
    )
  }
}

export default Layout
