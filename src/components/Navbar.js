import React, { Component } from 'react';

// Import css file
export default class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <a to="/" className="nav-link">Home</a>
                </li>
                <li className="navbar-item">
                  <a to="/" className="nav-link">Resume</a>
                </li>
                <li className="navbar-item">
                  <a to="/" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}