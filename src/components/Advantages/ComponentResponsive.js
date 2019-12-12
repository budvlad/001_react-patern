import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import Smartphone from "../Icons/Smartphone";

class ComponentResponsive extends Component {
  render() {
    return (
      <div>
        <div className={style["advantages__item"]}>
          <div className={style["advantages__img"]}>
            <div className={style["advantages__svg"]}>
              <Smartphone />
            </div>
          </div>
          <p className={style["advantages__subtitle"]}>Responsive</p>
          <p className={style["advantages__text"]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.
          </p>
        </div>
      </div>
    );
  }
}

export default ComponentResponsive;
