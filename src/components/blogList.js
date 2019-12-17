import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Row } from "react-bootstrap"

import BlogItem from "./blogItem"

function BlogList(props) {
  return (
    <Row style={{ margin: "0 auto" }}>
      {props.posts.slice(0, 3).map(({ node }) => (
        <BlogItem key={node.slug} data={node} />
      ))}
    </Row>
  )
}

export default BlogList
