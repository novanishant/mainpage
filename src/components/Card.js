import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

import edc from "./edc.png";
const Card = () => {
  return (
    <>
<div className="cards">
<div class="row">

      <div className="content">
        <p>
        Find,Collaborate, & Grow together @foundya
        <br></br>
        </p>
        <span id="getStartedBtn"><Link  to="/" id="textInside">Get Started</Link>
        </span>
      </div>
      <div className="photo">
        <img className="img" src={edc} alt="loading"/>
      </div>
      
      </div>
    </div>

    </>
  );
};

export default Card;
