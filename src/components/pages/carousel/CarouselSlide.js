import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../styles/carousel.css'

export default function CarouselSlide() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={require('../carousel/CaptureTwo.PNG')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WatchNext</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={require('../carousel/CaptureOne.PNG')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>PeriphirAll</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={require('../carousel/CaptureOne.PNG')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
