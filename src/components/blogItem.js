import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Col } from "react-bootstrap"

const Post = styled.div`
  display: flex;
  margin: 1rem;
`
const PostImage = styled.div`
  flex: 25%;
  margin-right: 1rem;
`
const PostText = styled.div`
  flex: 75%;
`

function BlogItem(props) {
  const data = props.data
  const title = data.title
  const description = data.description.childMarkdownRemark.rawMarkdownBody
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <div>
          <Link style={{ boxShadow: `none` }} to={"blog/" + data.slug}>
            <Card.Img variant="top" src={data.image.fluid.src} />
          </Link>
        </div>
        <Card.Body>
          <Card.Title>
            <Link style={{ boxShadow: `none` }} to={"blog/" + data.slug}>
              {title}
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.createdAt}
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BlogItem
