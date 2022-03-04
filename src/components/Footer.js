import React from "react";
import "./Footer.css";
import handshake from './handshake.png'

const Footer = () => {
    const myStyle={
        width:'150vh',
        // margin:'5px',
        
        // vspace:'0px 0px',
        };

  return (
    <div>
      <center>
          <img  id="image2" style={myStyle} src={handshake} alt="loading" />
          </center>
         

      <footer className="footer">
        <p id="watermark">@foundya</p>
      </footer>
    </div>
  );
};

export default Footer;
