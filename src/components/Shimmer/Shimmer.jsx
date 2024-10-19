import React from 'react'
import styles from './Shimmer.module.css'

function Shimmer() {
    const word = [" "," "," "," "," ", " "]
  return (
    <div className={styles.shimmer__container}>
        <h1 className={styles.header}></h1>
        {word.map((element, index) => <p key={index} className={styles.content}>{element}</p>
        )}
    </div>
  )
}

export default Shimmer