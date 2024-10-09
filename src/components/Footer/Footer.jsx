import React from "react";
import styles from "./Footer.module.css";
import linkIcon from "../../assets/icons/external-link-icon.svg";

const Footer = ({ fontSelected, darkTheme, handleSearchResult }) => {
  const wordData = handleSearchResult[0] || null;
  return (
    <footer
      id={!wordData ? styles.no__border : ""}
      className={styles.footer__element}
      style={{ fontFamily: fontSelected }}
      data-theme={darkTheme ? "dark" : "light"}
    >
      {wordData ? (
        <>
          <p className={styles.footer__title}>Source</p>
          <p className={styles.footer__link}>
            <a
              href={wordData.sourceUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
              alt="external-link"
            >
              {wordData.sourceUrls[0]}
            </a>
            <img src={linkIcon} alt="Source Link Icon" width="18" />
          </p>
        </>
      ) : (
        ""
      )}
    </footer>
  );
};

export default Footer;
