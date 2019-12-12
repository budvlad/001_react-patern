import React from "react";

import ComponentHeader from "./components/Header/ComponentHeader";
import ComponentBanner from "./components/Banner/ComponentBanner";
import ComponentAdvantages from "./components/Advantages/ComponentAdvantages";
import ComponentWork from "./components/Works/ComponentWork";
import ComponentResponsive from "./components/Responsive/ComponentResponsive";
import ComponentSkills from "./components/Skills/ComponentSkills";
import ComponentBlog from "./components/Blog/ComponentBlog";

import style from "./styles/style.module.scss";

function App() {
  return (
    <div className={style.container}>
      <ComponentHeader />
      <ComponentBanner />
      <ComponentAdvantages />
      <ComponentWork />
      <ComponentResponsive />
      <ComponentSkills />
      <ComponentBlog />
    </div>
  );
}

export default App;
