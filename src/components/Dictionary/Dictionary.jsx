import React from "react";
import audioPlayer from '../../assets/images/play-icon.svg'
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
          <img src={audioPlayer} alt="Audio-Player" />
        </button>
      </div>
      <div className={styles.word__type}>
        <h3>noun</h3>
        <span className={styles.horizontal__ruler}></span>
      </div>
      <div className={styles.word__meaning}>
        <h4>Meaning</h4>
        <ul>
          <li>Hey</li>
          <li>Go there</li>
          <li>Please</li>
        </ul>
      </div>
      <div className="synonyms">
        <h4>Synonyms</h4>
        <p>electronuc keyboard</p>
      </div>

      <div className={styles.word__type}>
        <h3>verb</h3>
        <span className={styles.horizontal__ruler}></span>
      </div>
      <div className={styles.word__meaning}>
        <h4>Meaning</h4>
        <ul>
          <li>Hey</li>
        </ul>
      </div>
    </main>
  );
};

export default Dictionary;
