import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <h1 className="fs-1">A warm welcome!</h1>
        <p className="fs-4 px-5">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="btn btn-primary fs-4">Call to action</button>
      </div>
    );
  }
}
