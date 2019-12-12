import React, { Component } from "react";

import style from "../../styles/style.module.scss";

class ComponentSkills extends Component {
  render() {
    return (
      <div>
        <section className={style["skills"]}>
          <div className={style["skills__wrap"]}>
            <div className={style["skills__left"]}>
              <h2 className={style["skills__title"]}>Our Skills</h2>
              <p className={style["skills__text"]}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Claritas est
                etiam processus dynamicus, qui sequitur mutationem consuetudium.
              </p>
              <button className={style["skills__button"]}>Our Services</button>
            </div>
            <ul className={style["skills__right"]}>
              <li className={style[("progress", "skills__progress")]}>
                <p className={style["progress__name"]}>Photoshop</p>
                <div className={style["progress-bar"]}>
                  <div className={style["progress-line-70"]}>
                    <b>70%</b>
                  </div>
                </div>
              </li>
              <li className={style[("progress", "skills__progress")]}>
                <p className={style["progress__name"]}>WordPress</p>
                <div className={style["progress-bar"]}>
                  <div className={style["progress-line-50"]}>
                    <b>50%</b>
                  </div>
                </div>
              </li>
              <li className={style[("progress", "skills__progress")]}>
                <p className={style["progress__name"]}>eCommerce</p>
                <div className={style["progress-bar"]}>
                  <div className={style["progress-line-90"]}>
                    <b>90%</b>
                  </div>
                </div>
              </li>
              <li className={style[("progress", "skills__progress")]}>
                <p className={style["progress__name"]}>Photography</p>
                <div className={style["progress-bar"]}>
                  <div className={style["progress-line-40"]}>
                    <b>40%</b>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ComponentSkills;
