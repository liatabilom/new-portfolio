import React, { Component } from "react";
import "./Pages.css";

class Pages extends Component {
  render() {
    return (
      <div>
        <nav aria-label="footer">
          <ul className="bottom-pages">
            <li className="btn btn-outline-dark rounded-1">
              <a className="page-button" href="#">
                Page 1
              </a>
            </li>
            <li className="btn btn-outline-dark rounded-1 ">
              <a className="page-button" href="#">
                Page 2
              </a>
            </li>
            <li className="btn btn-outline-dark d-table-cell rounded-1 ">
              <a className="page-button" href="#">
                Page 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pages;
