import React, { Component } from "react";
import styles from "./Todo.module.scss";

export default class Todo extends Component {
  render() {
    return (
      <div className={styles.todo}>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          className={styles.checkbox}
        ></input>
        <div>
          <div className={styles.title}>Take out bins</div>
          <div className={styles.subtitle}>28th January 2022</div>
        </div>
      </div>
    );
  }
}
