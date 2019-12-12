import React, { Component } from "react";

import style from "../../styles/style.module.scss";

class ComponentBanner extends Component {
  render() {
    return (
      <div>
        <section className={style["banner"]}>
          <div className={style["banner__wrap"]}>
            <div className={style["banner__info"]}>
              <h1 className={style["banner__title"]}>
                Smart Moves
                <span className={style["banner__little"]}>
                  of
                  <span className={style["banner__red"]}>
                    &nbsp;Successful&nbsp;
                  </span>
                  Business
                </span>
              </h1>
              <p className={style["banner__text"]}>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
              </p>
              <button className={style["banner__button1"]}>Buy This Now</button>
              <button className={style["banner__button2"]}>Buy This Now</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ComponentBanner;
