import React from "react";

import ComponentHeader from "./components/Header/ComponentHeader";

import style from "./styles/style.scss";

function App() {
  return (
    <div className={style["container"]}>
      <ComponentHeader />
    </div>
  );
}

export default App;
