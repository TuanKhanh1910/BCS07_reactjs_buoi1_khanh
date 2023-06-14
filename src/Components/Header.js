import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand " href="#">
            <h4 className="text-white">Start Bootstrap</h4>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
