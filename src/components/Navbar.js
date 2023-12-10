import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItems.js";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Id Tour</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.stated.clicked ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.titlle}
                </Link>
              </li>
            );
          })}
          <button> Sign Up </button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
