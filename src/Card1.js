import React, { Component } from "react";
import axios from "axios";

class Card1 extends Component {
  root = "https://jsonplaceholder.typicode.com/comments";

  state = {
    loaded: false
  };

  showPhotos = response => {
    this.setState({
      loaded: true,
      images: [
        {
          photoId: response.data[0].id,
          photoUrl: response.data[0].url
        },
        {
          photoId: response.data[1].id,
          photoUrl: response.data[1].url
        },
        {
          photoId: response.data[2].id,
          photoUrl: response.data[2].url
        }
      ]
    });
  };

  pictures = () => {
    let url = `${this.root}`;
    axios.get(url).then(this.showPhotos);
  };

  componentWillMount() {
    this.showPhotos();
  }
  render() {
    if (this.state.loaded === true) {
      return (
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={this.state.image.photoUrl[0]}
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src={this.state.image.photoUrl[1]}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={this.state.image.photoUrl[2]}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      );
    }
  }
}

export default Card1;
