import React from "react";
import "./homeBody.css";
import Carousel from "../Carousel/Carousel";

function HomeBody() {
  return (
    <div className="container-fluid home-body">
      <div className="row row-1">
        <div className="col-12 col-md-12 col-lg-6  img-side">
          <Carousel
            id="1"
            // imgs={}
          />
        </div>
        <div className="col-12 col-md-12 col-lg-6 text-side">
          <h1>Welcome to the Enigmatica UI Experience™</h1>
          <h3>
            Say goodbye to the mundane world of intuitive user interfaces!
            Enigmatica UI Experience™ embraces the avant-garde, delighting users
            with mind-bending navigation methods. Forget about those predictable
            menu bars and clickable buttons. With Enigmatica, users will be
            challenged to uncover hidden gestures, decipher cryptic
            hieroglyphics, and master the art of quantum touch to unlock the
            secrets of your app.
          </h3>
        </div>
      </div>
      <div className="row row-2">
        <div className="col-12 col-md-12 col-lg-6 text-side">
          <h1>Welcome to the Enigmatica UI Experience™</h1>
          <h3>
            Say goodbye to the mundane world of intuitive user interfaces!
            Enigmatica UI Experience™ embraces the avant-garde, delighting users
            with mind-bending navigation methods. Forget about those predictable
            menu bars and clickable buttons. With Enigmatica, users will be
            challenged to uncover hidden gestures, decipher cryptic
            hieroglyphics, and master the art of quantum touch to unlock the
            secrets of your app.
          </h3>
        </div>
        <div className="col-12 col-md-12 col-lg-6 img-side">
          <Carousel
            id="2"
            // imgs={}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
