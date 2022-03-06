import React from "react";
import "./Cardfloat.css";
import pages from './pages.png'

const Cardfloat = () => {
  return (
      <><div>

      <br />
      <img src={pages} className="gallery__item" id="gallery__item--1" alt="loading"/>
        <div className="gallery__item finder">
        <h2>Finder</h2>
        <br />
        <span className="gallery__item--2">
          Find the people that share the vision, and have the skills that you
          need
        </span>
      </div>
      <div className="gallery__item ">
        <h2>Messenger</h2>
        <br />
        <span className="gallery__item--3">
          Dedicated space to communicate with your team and others away from
          distracting social media
        </span>
      </div>
      <div className="gallery__item">
        <h2>Manager</h2>
        <br />
        <span className=" gallery__item--4">
          Manage your projects like a pro with specially designed dashboard for
          enhanced productivity.
        </span>
        <br /><br /><br /><br />
      </div>
      </div>
      </>
  );
};

export default Cardfloat;
