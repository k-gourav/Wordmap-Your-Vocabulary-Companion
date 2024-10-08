import React from "react";
import dictionaryLogo from "../../assets/icons/dictionary-icon.svg";
import moonLogo from "../../assets/icons/moon-logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header__element}>
      <div className={styles.nav__bar}>
        <img src={dictionaryLogo} alt="Dictionary-Logo" />

        <div className={styles.font_toggle__items}>
          <select name="fonts" id={styles.font__type}>
            <option value="1">Serif</option>
            <option value="2">Sans Serif</option>
            <option value="3">Monospace</option>
          </select>
          <div className={styles.toggle__theme}>
            <label className={styles.switch}>
              <input type="checkbox" id={styles.theme_toggle} />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <img src={moonLogo} alt="Moon-Logo" width="26" />
          </div>
        </div>
      </div>
      <div className={styles.search__bar}>
        <input type="text" name="search-bar" id={styles.search__input} />
        <button className={styles.search__btn}><img src={searchIcon} alt="Search-Icon" /></button>
      </div>
    </header>
  );
};

export default Header;
