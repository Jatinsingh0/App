import React from "react";
import styles from "./button.module.css";

function button({title}) {
  return (
    <div>
      <button type="button" className={styles.button}>
        {title}
      </button>
    </div>
  );
}

export default button;
