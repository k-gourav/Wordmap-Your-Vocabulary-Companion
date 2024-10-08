import React from 'react'
import styles from './Footer.module.css'
import linkIcon from "../../assets/icons/external-link-icon.svg"

const Footer = ({ fontSelected }) => {
  return (
    <footer className={styles.footer__element}  style={{fontFamily: fontSelected}}>
        <p className={styles.footer__title}>Source</p>
        <p className={styles.footer__link}> <a href="http://www.google.com">http://www.google.com</a> <img src={linkIcon} alt="External Link Icon" width="18" /></p>
    </footer>
  )
}

export default Footer