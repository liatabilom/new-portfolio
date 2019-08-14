import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Card1.css";

class Card1 extends Component {
  state = {
    loaded: true,
    bgColor: "#f5f4ef"
  };

  carousel = () => {
    if (this.state.loaded === true) {
      return (
        //<div className="changeBackground">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          transition={4500}
        >
          <div>
            <img src="https://source.unsplash.com/jO3OYLdcxJo/200x100" alt="" />
          </div>
          <div>
            <img src="https://source.unsplash.com/o4Tc9wRMVVM/200x100" alt="" />
          </div>
          <div>
            <img src="https://source.unsplash.com/xEY0dtFfon0/200x100" alt="" />
          </div>
        </Carousel>
        //</div>
      );
    } else {
      return (
        <div className="loader">
          <Loader type="Puff" color="#464159" height="100" width="100" />
        </div>
      );
    }
  };

  //UPDATE FONT SIZE
  render() {
    return (
      <div className="carousel">
        <h1>
          <span className="title">BROO KSBR OTHE RS</span>
          <div>{this.carousel()}</div>
        </h1>
        <h5>
          <div className="selector">
            <span>
              WOMEN{" "}
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="2x"
                className="plusIcon1"
              />
              MULHER
            </span>
          </div>
        </h5>
      </div>
    );
  }
}

export default Card1;
