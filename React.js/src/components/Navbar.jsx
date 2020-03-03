import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              WEB422 - Project Portal
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
