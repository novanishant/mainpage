import React from "react";
import "./Cardgrid.css";
import pages from './pages.png'

const Cardgrid = () => {
  return (
    <div classname="gallery">

    <img src={pages} className="gallery__item gallery__item--1" alt="loading"/>
  
  <div className="gallery__item gallery__item--2">
    <h2>Finder</h2>
    <span>Find the people that share the vision, and have the skills that you need
</span>
  </div>
  <div className="gallery__item gallery__item--3">
  <h2>Messenger</h2>
    <span>Dedicated space to communicate with your team and others away from distracting social media
</span>
  </div>
  <div className="gallery__item gallery__item--4">
  <h2>Manager
</h2>
    <span>Manage your projects like a pro with specially designed dashboard for enhanced productivity.
</span>
  </div>
    </div>
  );
};

export default Cardgrid;
