import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from "react-loader-spinner";

class Card1 extends Component {
  state = {
    loaded: false
  };

  carousel = () => {
    if (this.state.loaded === true) {
      return (
        <div className="carousel">
          <Carousel autoPlay={true} showThumbs={false} showStatus={false}>
            <div>
              <img
                src="https://source.unsplash.com/jO3OYLdcxJo/200x100"
                alt="First slide"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/o4Tc9wRMVVM/200x100"
                alt="Second slide"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/xEY0dtFfon0/200x100"
                alt="Third"
              />
            </div>
          </Carousel>
        </div>
      );
    } else {
      return (
        <div className="loader">
          <Loader type="Puff" color="#464159" height="100" width="100" />
        </div>
      );
    }
  };

  render() {
    return <div>{this.carousel()}</div>;
  }
}

export default Card1;
