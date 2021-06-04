import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav>
            <NavLink className="d-inline p-2 bg-dark text-withe" to="/">
              Home
            </NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-withe"
              to="department"
            >
              Department
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-withe" to="employee">
              Employee
            </NavLink>
          </nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
