import React, { useEffect } from "react";
import dictionaryLogo from "../../assets/icons/dictionary-icon.svg";
import moonLogo from "../../assets/icons/moon-logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import styles from "./Header.module.css";

const Header = ({ setFontSelected, fontSelected, darkTheme, setDarkTheme }) => {
    const handleFontChange = (event) => {
        setFontSelected(event.target.value);
      };
      const themeHandler = (event) => {
        setDarkTheme(event.target.checked)
      }
      
      useEffect(() => {
        document.body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    
        return () => {
          document.body.removeAttribute('data-theme');
        };
      }, [darkTheme]);

  return (
    <header className={styles.header__element} style={{fontFamily: fontSelected}} data-theme={darkTheme ? "dark" : "light"}>
      <div className={styles.nav__bar}>
        <img src={dictionaryLogo} alt="Dictionary-Logo" />

        <div className={styles.font_toggle__items}>
          <select name="fonts" id={styles.font__type} onChange={handleFontChange}>
            <option value="Serif">Serif</option>
            <option value="Sans-Serif">Sans Serif</option>
            <option value="Monospace">Monospace</option>
          </select>
          <div className={styles.toggle__theme}>
            <label className={styles.switch}>
              <input type="checkbox" id={styles.theme_toggle} onChange={themeHandler} checked={darkTheme} />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <img src={moonLogo} alt="Moon-Logo" width="26" />
          </div>
        </div>
      </div>
      <div className={styles.search__bar}>
        <input type="text" name="search-bar" id={styles.search__input} placeholder="Search word..." />
        <button className={styles.search__btn}><img src={searchIcon} alt="Search-Icon" /></button>
      </div>
    </header>
  );
};

export default Header;
