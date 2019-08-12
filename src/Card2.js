import React, { Component } from "react";
import Modelo1 from "./images/Modelo1.jpg";
import Draggable from "react-draggable";

class Card2 extends Component {
  render() {
    return (
      <div
        className="parent"
        style={{
          height: "500px",
          width: "275px",
          position: "relative",
          overflow: "auto",
          padding: "0"
        }}
      >
        <div style={{ height: "1000px", padding: "0" }}>
          <Draggable
            axis="y"
            bounds={(0, 10, 0, 10)}
            handle=".handle"
            grid={(25, 25)}
            allowAnyClick={true}
            cancel={".body"}
            disabled={true}
          >
            <img src={Modelo1} alt="" className="card2" />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default Card2;
