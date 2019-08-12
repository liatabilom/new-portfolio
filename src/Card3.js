import React, { Component } from "react";
import Modelo1 from "./images/Modelo1.jpg";
import Draggable from "react-draggable";

class Card3 extends Component {
  render() {
    return (
      <div
        style={{
          height: "450px",
          width: "1000px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Draggable onStart={() => false}>
          <div>
            <img src={Modelo1} alt="" className="card3" />
          </div>
        </Draggable>
      </div>
    );
  }
}

export default Card3;
