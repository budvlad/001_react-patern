import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import SettingsWorkTool from "../Icons/SettingsWorkTool";

class ComponentDevelopment extends Component {
  render() {
    return (
      <div>
        <div className={style["advantages__item"]}>
          <div className={style["advantages__img"]}>
            <div className={style["advantages__svg"]}>
              <SettingsWorkTool />
            </div>
          </div>
          <p className={style["advantages__subtitle"]}>Development</p>
          <p className={style["advantages__text"]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.
          </p>
        </div>
      </div>
    );
  }
}

export default ComponentDevelopment;
