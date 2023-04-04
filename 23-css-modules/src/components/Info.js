import React from "react";
import "./Info.css";
import styles from "./Info.module.css";

console.log(styles);
const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello from the info component</h1>
      <h2>Hello h2 Info </h2>
      <button className="my__button">Click me!</button>
      <br />
      <button className={styles.myOtherButton}>Click me!</button>
    </div>
  );
};

export default Info;
