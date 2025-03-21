import {useState} from "react";
import {Tree,Color} from ".";
import styles from "./CodeTree.module.css";


console.groupCollapsed("src/component/Tree.js invoked.");console.groupEnd();

function CodeTree() {

  const [colors,setColors] = useState({
    red : false,
    yellow : false,
    green : false,
    purple : false,
    blue : false,
  });

  const [star, setStar] = useState(false);

  const starOn = () => setStar(!star);

  const toggleOn = (color) => {
    setColors((prevColors) =>({
      ...prevColors,
      [color]: !prevColors[color],
    }) );
    console.log("toggleOn invoked.");
    console.log("colors:",colors);
  };

    return (
      <div className={styles.background}>
        <Tree colors={colors} star={star} starOn={starOn}/>
        <Color toggleOn={toggleOn}/>
      </div>
    );
  }

export default CodeTree;