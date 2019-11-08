import React from 'react'
import { Col } from 'react-bootstrap';
const Gif = props => (
  <Col className="gif-item" lg={4}>
    <img src={props.url} alt=""/>
  </Col>
)

export default Gif;