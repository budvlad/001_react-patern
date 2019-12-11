import React, { Component } from "react";

import stylelogo from "../../styles/style.scss";
import logo from "img/logo.png";

class ComponentLogo extends Component {
  render() {
    return (
      <div>
        <a href="#" className={stylelogo.header__logo}>
          <img src={logo} alt="Logotype" />
        </a>
      </div>
    );
  }
}

export default ComponentLogo;
