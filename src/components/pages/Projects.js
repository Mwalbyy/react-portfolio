import React from "react";
import CarouselSlide from "./carousel/CarouselSlide";
import "./styles/project-page.css";

export default function Projects() {
  return (
    <>
      <div className="proj-header">
        <h1 className="typeWriter">Here is some of my work.</h1>
      </div>
      <CarouselSlide />
    </>
  );
}