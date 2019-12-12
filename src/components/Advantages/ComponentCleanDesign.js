import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import Leaf from "../Icons/Leaf";

class ComponentCleanDesign extends Component {
  render() {
    return (
      <div>
        <div className={style["advantages__item"]}>
          <div className={style["advantages__img"]}>
            <div className={style["advantages__svg"]}>
              <Leaf />
            </div>
          </div>
          <p className={style["advantages__subtitle"]}>Clean Design</p>
          <p className={style["advantages__text"]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.
          </p>
        </div>
      </div>
    );
  }
}

export default ComponentCleanDesign;
