import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import Search from "../Icons/Search";
import Link from "../Icons/Link";

class ComponentWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: true
    };

    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _onFocus() {
    if (this.state.focus) {
      this.setState({
        focus: "wi2--active"
      });
    }
  }

  _onBlur() {
    setTimeout(() => {
      if (!this.state.focus) {
        this.setState({
          focus: "wi2"
        });
      }
    }, 0);
  }

  render() {
    return (
      <div>
        <section className={style["works"]}>
          <h2 className={style["works__title-hide"]}>Our Work</h2>
          <div className={style["works__list"]}>
            <div className={style["wi1"]}>
              <p className={style["works__title"]}>See Our Recent Work</p>
              <p className={style["works__text"]}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Claritas est
                etiam processus dynamicus.
              </p>
            </div>
            <div className={style["wi2"]}>
              <div className={style["works__element"]}>
                <div className={style["works__info"]}>
                  <p className={style["works__name"]}>Claritas Est Processus</p>
                  <p className={style["works__description"]}>
                    Graphic, Designer, Photoshop
                  </p>
                  <div className={style["works__btns"]}>
                    <button
                      aria-label="Увеличить работу"
                      className={style["works__zoom"]}
                    >
                      <div className={style["svg"]}>
                        <Search />
                      </div>
                    </button>
                    <a
                      aria-label="Посмотреть работу"
                      className={style["works__link"]}
                      href="#"
                    >
                      <div>
                        <Link />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style["wi3"]}>
              <div className={style["works__elememt"]}>
                <div className={style["works__info"]}>
                  <p className={style["works__name"]}>Claritas Est Processus</p>
                  <p className={style["works__description"]}>
                    Graphic Designer, Photoshop
                  </p>
                  <div className={style["works__btns"]}>
                    <button
                      aria-label="Увеличить работу"
                      className={style["works__zoom"]}
                    >
                      <div className={style["svg"]}>
                        <Search />
                      </div>
                    </button>
                    <a
                      aria-label="Посмотреть работу"
                      className={style["works__link"]}
                      href="#"
                    >
                      <div>
                        <Link />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style["wi4"]}>
              <div className={style["works__elememt"]}>
                <div className={style["works__info"]}>
                  <p className={style["works__name"]}>Claritas Est Processus</p>
                  <p className={style["works__description"]}>
                    Graphic Designer, Photoshop
                  </p>
                  <div className={style["works__btns"]}>
                    <button
                      aria-label="Увеличить работу"
                      className={style["works__zoom"]}
                    >
                      <div className={style["svg"]}>
                        <Search />
                      </div>
                    </button>
                    <a
                      aria-label="Посмотреть работу"
                      className={style["works__link"]}
                      href="#"
                    >
                      <div>
                        <Link />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style["wi5"]}>
              <div className={style["works__elememt"]}>
                <div className={style["works__info"]}>
                  <p className={style["works__name"]}>Claritas Est Processus</p>
                  <p className={style["works__description"]}>
                    Graphic Designer, Photoshop
                  </p>
                  <div className={style["works__btns"]}>
                    <button
                      aria-label="Увеличить работу"
                      className={style["works__zoom"]}
                    >
                      <div className={style["svg"]}>
                        <Search />
                      </div>
                    </button>
                    <a
                      aria-label="Посмотреть работу"
                      className={style["works__link"]}
                      href="#"
                    >
                      <div>
                        <Link />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style["wi6"]}>
              <div className={style["works__elememt"]}>
                <div className={style["works__info"]}>
                  <p className={style["works__name"]}>Claritas Est Processus</p>
                  <p className={style["works__description"]}>
                    Graphic Designer, Photoshop
                  </p>
                  <div className={style["works__btns"]}>
                    <button
                      aria-label="Увеличить работу"
                      className={style["works__zoom"]}
                    >
                      <div className={style["svg"]}>
                        <Search />
                      </div>
                    </button>
                    <a
                      aria-label="Посмотреть работу"
                      className={style["works__link"]}
                      href="#"
                    >
                      <div>
                        <Link />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ComponentWorks;
