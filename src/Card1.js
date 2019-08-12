import React, { Component } from "react";

class Card1 extends Component {
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://nomanbefore.com/wp-content/uploads/2017/06/Lisbon-7287-e1498710762116.jpg"
              className="d-block w-500"
              alt="Lisbon"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://st3.depositphotos.com/1864689/15634/i/1600/depositphotos_156341852-stock-photo-skyline-of-santiago-de-chile.jpg"
              className="d-block"
              alt="Santiago"
            />
          </div>
          <div className="carousel-item">
            <img src="" className="d-block" alt="Tokyo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card1;
