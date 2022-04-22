import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../styles/carousel.css'

export default function CarouselSlide() {
  return (
    <>
    <div className="carouselContainer">
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 slidesImg"
          src={require('../carousel/Two.PNG')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="projName">WatchNext<a target={"_blank"} href= "https://github.com/BPpearsall/watch-Next"><i class="fa-brands fa-github fa-2xl"></i></a></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 slidesImg"
          src={require('../carousel/One.PNG')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="projName">PeriphirAll<a target={"_blank"} href= "https://github.com/Mwalbyy/peripherAll"><i class="fa-brands fa-github fa-2xl"></i></a></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 slidesImg"
          src={require('../carousel/Three.png')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="projName">Weather App<a target={"_blank"} href= "https://github.com/Mwalbyy/Weather-site"><i class="fa-brands fa-github fa-2xl"></i></a></h3>
          
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 slidesImg"
          src={require('../carousel/Four.png')}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3 className="projName">Note Taker<a target={"_blank"} href= "https://github.com/Mwalbyy/Note-Taker"><i class="fa-brands fa-github fa-2xl"></i></a></h3>          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 slidesImg"
          src={require('../carousel/Six.PNG')}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 className="projName">Day Planner<a target={"_blank"} href= "https://github.com/Mwalbyy/Day-Planner"><i class="fa-brands fa-github fa-2xl"></i></a></h3>          <p></p>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 slidesImg"
          src={require('../carousel/Five.png')}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3 className="projName">Tech Blog<a target={"_blank"} href= "https://github.com/Mwalbyy/Tech-Blog"><i class="fa-brands fa-github fa-2xl"></i></a></h3>          <p></p>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    </>
  );
}
