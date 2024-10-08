import React from "react";
import audioPlayer from '../../assets/images/play-icon.svg'
import styles from "./Dictionary.module.css";

const Dictionary = ({ fontSelected }) => {
  return (
    <main className={styles.main__element}  style={{fontFamily: fontSelected}}>
      <div className={styles.main__word}>
        <div className={styles.word__withphonetics}>
          <h1>keyboard</h1>
          <p>/'ki:b:cd/</p>
        </div>
        <button className={styles.audio__player}>
          <img src={audioPlayer} alt="Audio-Player" width="60" />
        </button>
      </div>
      <div className={styles.word__type}>
        <h3>noun</h3>
        <p className={styles.horizontal__ruler}></p>
      </div>
      <div className={styles.word__meaning}>
        <p>Meaning</p>
        <ul>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aspernatur, consectetur possimus sapiente culpa ullam?</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia culpa delectus minima eum consequuntur facilis natus nostrum ipsum. Consectetur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, delectus!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia asperiores ducimus fuga facilis sunt aut esse rerum neque vero architecto corrupti animi, optio magnam maxime ipsam. Qui, quae obcaecati?</li>
        </ul>
      </div>
      <div className={styles.synonyms}>
        <p className={styles.synonyms__title}>Synonyms</p>
        <p className={styles.synonyms__content}>electronic keyboard</p>
      </div>

      <div className={styles.word__type}>
        <h3>verb</h3>
        <span className={styles.horizontal__ruler}></span>
      </div>
      <div className={styles.word__meaning}>
        <p>Meaning</p>
        <ul>
          <li>Hey</li>
        </ul>
      </div>
    </main>
  );
};

export default Dictionary;
