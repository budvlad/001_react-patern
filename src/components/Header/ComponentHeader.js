import React, { Component } from "react";

import styleheader from "../../styles/style.module.scss";
import ComponentLogo from "./ComponentLogo";
import ComponentMenu from "./ComponentMenu";

class ComponentHeader extends Component {
  render() {
    return (
      <div>
        <header className={styleheader.header}>
          <div className={styleheader[("wrap", "header__wrap")]}>
            <ComponentMenu />
            <ComponentLogo />
          </div>
        </header>
      </div>
    );
  }
}

export default ComponentHeader;
