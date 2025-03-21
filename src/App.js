import React from "react";
import { Loading } from "./component_준철/index";
import { CodeTree } from "./component_성락/index";
import { Xmas } from "./component_준완/index";
import { News } from "./component_진호/index";
import { Stage } from "./Component_성태/index";
import "./App.css";

const App = () => {
  return (
    <div className="everything">
      <CodeTree />
      <Xmas />
      <News />
      <Stage />
      <Loading />
    </div>
  );
};

export default App;
