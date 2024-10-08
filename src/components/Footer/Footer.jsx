import React from 'react'
import styles from './Footer.module.css'
import linkIcon from "../../assets/icons/external-link-icon.svg"

const Footer = ({ fontSelected, darkTheme }) => {
  return (
    <footer className={styles.footer__element}  style={{fontFamily: fontSelected}} data-theme={darkTheme ? "dark" : "light"}>
        <p className={styles.footer__title}>Source</p>
        <p className={styles.footer__link}> <a href="http://www.google.com" alt="external-link">http://www.google.com</a> <img src={linkIcon} alt="Source Link Icon" width="18" /></p>
    </footer>
  )
}

export default Footer