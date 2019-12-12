import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import ComponentCleanDesign from "./ComponentCleanDesign";
import ComponentBranding from "./ComponentBranding";
import ComponentResponsive from "./ComponentResponsive";
import ComponentDevelopment from "./ComponentDevelopment";

class ComponentAdvantages extends Component {
  render() {
    return (
      <div>
        <section className={style["advantages"]}>
          <h2 className={style["advantages__title"]}>Преимущества</h2>
          <div className={style["advantages__list"]}>
            <ComponentCleanDesign />
            <ComponentBranding />
            <ComponentResponsive />
            <ComponentDevelopment />
          </div>
        </section>
      </div>
    );
  }
}

export default ComponentAdvantages;
