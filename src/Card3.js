import React, { Component } from "react";
import Modelo1 from "./images/Modelo1.jpg";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Card3.css";

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
        <FontAwesomeIcon icon={faPlusCircle} size="1x" className="plusIcon3" />
      </div>
    );
  }
}

export default Card3;
