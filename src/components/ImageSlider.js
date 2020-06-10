import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import data from '../data/slider-data.json'


class ImageSlider extends Component {
   // Setting this.state.data to the image json array
  state = {
    data
  };

    render() {
        return (
            <div>
<Carousel>
        
        {this.state.data.map(img => (
          <Carousel.Item key={img.id}>
          <img
          className="d-block w-100"
          src={`images/${img.image}`}
          alt={img.alt}
        />
              </Carousel.Item>
        ))}
      </Carousel>
            </div>
        );
    }
}


export default ImageSlider;