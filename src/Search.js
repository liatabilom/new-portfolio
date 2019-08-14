import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div>
        <form className="changeBackground">
          <div className="clearfix">
            <div className="float-left">
              <input className="emailInput" type="text" placeholder="Email" />
            </div>
            <div className="infoIcon float-left ml-3">
              <FontAwesomeIcon icon={faInfoCircle} size="1x" />
            </div>
            <div className="avocadoIcon float-left ml-3">
              <span role="img" aria-label="Avocado">
                {" "}
                🥑
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
