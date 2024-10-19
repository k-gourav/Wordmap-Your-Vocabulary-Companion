import React from "react";
import styles from "./Shimmer.module.css";

function Shimmer() {
  const placeholders = Array(6).fill("");

  return (
    <div className={styles.shimmer__container}>
      <h1 className={styles.header}></h1>
      {placeholders.map((_, index) => (
        <p key={index} className={styles.content}></p>
      ))}
    </div>
  );
}

export default Shimmer;
