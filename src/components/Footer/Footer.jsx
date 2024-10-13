import React, { useContext } from "react";
import styles from "./Footer.module.css";
import linkIcon from "../../assets/icons/external-link-icon.svg";
import ThemeContext from "../../hooks/context/ThemeContext/ThemeContext";
import FontContext from "../../hooks/context/FontContext/FontContext";
import SearchContext from "../../hooks/context/SearchContext/SearchContext";

const Footer = () => {
  const { searchResult } = useContext(SearchContext);
  const { darkTheme } = useContext(ThemeContext);
  const { fontSelected } = useContext(FontContext);
  
  const wordData = searchResult[0];
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
              href={wordData?.sourceUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
              alt="external-link"
            >
              {wordData?.sourceUrls[0]}
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
