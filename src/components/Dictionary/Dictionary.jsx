import React from "react";
import styles from "./Dictionary.module.css";

const Dictionary = () => {
  return (
    <main className={styles.main__element}>
      <div className={styles.main__word}>
        <div className={styles.word__withphonetics}>
          <h1>keyboard</h1>
          <p>/'ki:b:cd/</p>
        </div>
        <button className={styles.audio__player}>
          <img src="" alt="" />
        </button>
      </div>
      <div className={styles.word__type}>
        <h3>noun</h3>
        <span className={styles.horizontal__ruler}></span>
      </div>
    </main>
  );
};

export default Dictionary;
