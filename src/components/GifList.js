import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';
import { Container, Row } from 'react-bootstrap';
const GifList = props => {
  const results = props.data;
  let gifs;
  if (results.length > 0) {
    gifs = results.map(gif => 
      <Gif url={gif.images.fixed_height.url} key={gif.id}/>
    );
  } else {
    gifs = <NoGifs />
  }

  return (
    <div className="gif-list">
      <Container>
        <Row>
          { gifs }
        </Row>
      </Container>
    </div>
  );
}

export default GifList;
