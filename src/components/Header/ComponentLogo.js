import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import logo from "../../assets/img/logo.png";

class ComponentLogo extends Component {
  render() {
    return (
      <div>
        <a href="#" className={style.header__logo}>
          <img src={logo} alt="Logotype" />
        </a>
      </div>
    );
  }
}

export default ComponentLogo;
