import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import Badge from "../Icons/Badge";

class ComponentBranding extends Component {
  render() {
    return (
      <div>
        <div className={style["advantages__item"]}>
          <div className={style["advantages__img"]}>
            <div className={style["advantages__svg"]}>
              <Badge />
            </div>
          </div>
          <p className={style["advantages__subtitle"]}>Branding</p>
          <p className={style["advantages__text"]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.
          </p>
        </div>
      </div>
    );
  }
}

export default ComponentBranding;
