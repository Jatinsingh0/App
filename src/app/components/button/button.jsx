import React from 'react';
import styles from "./button.module.css"

function button() {
  return (
    <div>
        <button type="button" className={styles.button}>Choose Plan</button>
    </div>
  )
}

export default button