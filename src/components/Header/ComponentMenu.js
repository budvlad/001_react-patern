import React, { Component } from "react";

import style from "../../styles/style.module.scss";

class ComponentMenu extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className={style[("menu", "header__menu")]}>
            <li className={style.menu__element}>
              <a className={style.menu__link} href="#">
                Home
              </a>
            </li>
            <li className={style.menu__element}>
              <a className={style.menu__link} href="#">
                Features
              </a>
            </li>
            <li className={style.menu__element}>
              <a className={style.menu__link} href="#">
                Portfolio
              </a>
            </li>
            <li className={style.menu__element}>
              <a className={style.menu__link} href="#">
                Skills
              </a>
            </li>
            <li className={style["menu__element"]}>
              <a className={style["menu__link"]} href="#">
                Blog
              </a>
            </li>
            <li className={style["menu__element"]}>
              <a className={style["menu__link"]} href="#">
                Clients
              </a>
            </li>
            <li className={style["menu__element"]}>
              <a className={style["menu__link"]} href="#">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ComponentMenu;
