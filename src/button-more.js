import React from "react";
import styles from './button-more.module.css'
const Button = (props) => {
  return (
    <button onClick={props.onclick1} className={styles.button_more}>показать еще билеты</button>
  )
}
export default Button