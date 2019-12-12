import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import ComponentLogo from "./ComponentLogo";
import ComponentMenu from "./ComponentMenu";

class ComponentHeader extends Component {
  render() {
    return (
      <div>
        <header className={style.header}>
          <div className={style[("wrap", "header__wrap")]}>
            <ComponentLogo />
            <ComponentMenu />
          </div>
        </header>
      </div>
    );
  }
}

export default ComponentHeader;
