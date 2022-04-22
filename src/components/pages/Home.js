import React from "react";
import "./styles/home.css";
import jsLogo from "./images/javascript.png";
import reactLogo from "./images/react.png";
import cssLogo from "./images/CSS3.png";
import Footer from "./Footer";


export default function Home() {
  return (
    <>
      <div className="parallax">
        <div className="introText">
          <div>
            <h1 className="introduction">Hi,</h1>
            <h1 className="introduction">I'm Marcus,</h1>
            <h1 className="introduction">
              Web Developer <i class="fa-solid fa-arrow-down-long fa-xs"></i>
            </h1>
          </div>
          <div className="aboutSec">
            <h1>
              I began coding early 2022 in the hopes of finding a new path. I
              enjoyed the process so much that I decided to take up a boot camp
              and further my knowledge in the field. Now here I am making filler
              for the about page in a homework assignment
            </h1>
          </div>
        </div>
          <div className="logoCont">
            <h1 className="tech">Technologies used on this site</h1>
            <a href="https://www.javascript.com/" target={"_blank"}>
              <img
                className="toolImg"
                src={jsLogo}
                alt="java script logo"
              ></img>
            </a>
            <a href="https://reactjs.org/" target={"_blank"}>
              <img className="toolImg" src={reactLogo} alt="react logo"></img>
            </a>
            <a href="https://www.w3schools.com/css/" target={"_blank"}>
              <img
                className="toolImg cssLogo"
                src={cssLogo}
                alt="CSS logo"
              ></img>
            </a>
          </div>
      </div>
      <Footer/>
    </>
  );
}
