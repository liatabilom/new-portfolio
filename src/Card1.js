import React, { Component } from "react";
import axios from "axios";

class Card1 extends Component {
  root = "https://jsonplaceholder.typicode.com";
  path = "/photos";

  state = {
    loaded: false
  };

  showPhotos = response => {
    this.setState({
      loaded: true,
      images: [
        {
          PhotoId: response.userId.id[0],
          PhotoUrl: response.userId.url
        },
        {
          PhotoId: response.userId.id[1],
          PhotoUrl: response.userId.url
        },
        {
          PhotoId: response.userId.id[2],
          PhotoUrl: response.userId.url
        }
      ]
    });
  };

  pictures = () => {
    let url = `${this.root}${this.path}`;
    axios.get(url).then(this.showPhotos);
  };

  componentDidMount() {
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
                src={this.state.image.photoUrl}
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
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
