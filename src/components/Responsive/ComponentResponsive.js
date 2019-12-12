import React, { Component } from "react";

import style from "../../styles/style.module.scss";

class ComponentResponsive extends Component {
  render() {
    return (
      <div>
        <section className={style["responsive"]}>
          <div className={style["responsive__wrap"]}>
            <div className={style["responsive__information"]}>
              <h2 className={style["responsive__title"]}>
                Fully Responsive Design Ready
              </h2>
              <p className={style["responsive__text"]}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Claritas est
                etiam processus dynamicus.
              </p>
              <ul className={style[("responsive__list", "list")]}>
                <li className={style["list__element"]}>
                  Claritas est etiam processus dynamicus.
                </li>
                <li className={style["list__element"]}>
                  Mirum est notare quam littera gothica, quam.
                </li>
                <li className={style["list__element"]}>
                  Nam liber tempor cum soluta.
                </li>
                <li className={style["list__element"]}>
                  Duis autem vel eum iriure dolor in hendrerit.
                </li>
                <li className={style["list__element"]}>
                  Typi non habent claritatem insitam.
                </li>
              </ul>
              <button className={style["responsive__button"]}>
                Buy This Now
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ComponentResponsive;
