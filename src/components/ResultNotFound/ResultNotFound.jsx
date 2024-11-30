import React from "react";
import styles from './ResultNotFound.module.css';
import notFound from "../../assets/images/not-found.webp";

function ResultNotFound() {
  return (
    <div className={styles.noword__content}>
      <img
        id={styles.noword__img}
        src={notFound}
        loading="lazy"
        alt="not-found-pic"
      />
      <h2 className={styles.noword__title}>
        Oops! We couldn't find that word.
      </h2>
      <p className={styles.noword__body}>
        Please check your spelling or try a synonym.
      </p>
    </div>
  );
}

export default ResultNotFound;
