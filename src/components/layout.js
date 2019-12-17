import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import styles from "./layout.scss"
import { Button, ButtonGroup, Navbar, Container } from "react-bootstrap"

import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let socialButtonGroup = (
      <ButtonGroup>
        <div>
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
        </div>
      </ButtonGroup>
    )

    let header = (
      <div>
        <Navbar bg="light">
          <Navbar.Brand>
            <Link title="Logo" to="/">
              {title || "StimbodyFit"}
              {/* <img src={logo} alt="StimbodyFit" style={{ width: '88px' }} /> */}
            </Link>
          </Navbar.Brand>
          <ButtonGroup>
            <Button variant="Light">
              <Link to="/technologyPage">
                <span>Nos Technologies</span>
              </Link>
            </Button>
            {/* to Delete */}
            <Button variant="Light">
              <Link to="/testimonyPage">Nos Témoignages</Link>
            </Button>
            {/* END */}
            <Button variant="Light">
              <Link to="/pricePage">Nos Prix</Link>
            </Button>
            <Button variant="Light">
              <Link to="/contactPage">Prendre RDV !</Link>
            </Button>
          </ButtonGroup>
          {socialButtonGroup}
        </Navbar>
      </div>
    )
    let footer = (
      <footer>
        <div>
          <h1>{title}</h1>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
        <div>
          <div>
            <div>
              <div>
                <section>
                  <ul>
                    <li>
                      <Link className={styles.link} to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.link} to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div>{socialButtonGroup}</div>
            </div>
          </div>
        </div>
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
