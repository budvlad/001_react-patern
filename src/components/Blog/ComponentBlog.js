import React, { Component } from "react";

import style from "../../styles/style.module.scss";
import Image from "../Icons/Image";
import Video from "../Icons/Video";
import PhotoCamera from "../Icons/PhotoCamera";

class ComponentBlog extends Component {
  render() {
    return (
      <div>
        <section className={style["blog"]}>
          <h2 className={style["blog__title--hiden"]}>Latest posts</h2>
          <ul className={style[("blog__list", "wrap")]}>
            <li className={style["blog__element"]}>
              <div className={style["blog__info"]}>
                <a className={style["blog__link"]} href="">
                  <Image />
                </a>
                <div className={style["blog__information"]}>
                  <a className={style["blog__title"]} href="">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                  </a>
                  <p className={style["blog__description"]}>
                    04 February 2015, Posted by <span>Admin</span>, Comments:
                    <span>26</span>
                  </p>
                </div>
              </div>
            </li>
            <li className={style["blog__element"]}>
              <div className={style["blog__info"]}>
                <div className={style["blog__information"]}>
                  <p className={style["blog__subtitle"]}>Latest Blog Posts</p>
                  <p className={style["blog__text"]}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Claritas est etiam processus
                    dynamicus, qui sequitur mutationem consuetudium lectorum
                    nobis videntur parum
                  </p>
                </div>
              </div>
            </li>
            <li className={style["blog__element"]}>
              <div className={style["blog__info"]}>
                <a className={style["blog__link"]} href="">
                  <PhotoCamera />
                </a>
                <div className={style["blog__information"]}>
                  <a className={style["blog__title"]} href="">
                    Nam liber tempor cum soluta
                  </a>
                  <p className={style["blog__description"]}>
                    04 February 2015, Posted by <span>Admin</span>, Comments:
                    <span>26</span>
                  </p>
                </div>
              </div>
            </li>
            <li className={style["blog__element"]}>
              <div className={style["blog__info"]}>
                <a className={style["blog__link"]} href="">
                  <Video />
                </a>
                <div className={style["blog__information"]}>
                  <a className={style["blog__title"]} href="">
                    Duis autem vel eum iriure
                  </a>
                  <p className={style["blog__description"]}>
                    04 February 2015, Posted by <span>Admin</span>, Comments:
                    <span>26</span>
                  </p>
                </div>
              </div>
            </li>
            <li className={style["blog__element"]}>
              <div className={style["blog__info"]}>
                <a className={style["blog__link"]} href="">
                  <PhotoCamera />
                </a>
                <div className={style["blog__information"]}>
                  <a className={style["blog__title"]} href="">
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium
                  </a>
                  <p className={style["blog__description"]}>
                    04 February 2015, Posted by <span>Admin</span>, Comments:
                    <span>26</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default ComponentBlog;
