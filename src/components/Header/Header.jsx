import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header__element}>
      <div className={styles.nav__bar}>
        <img src="" alt="" />

        <div className={styles.font_toggle__items}>
          <select name="fonts" id={styles.font__type}>
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans Serif</option>
            <option value="monospace">Monospace</option>
          </select>
          <div className={styles.toggle__theme}>
            <button></button>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.search__bar}>
        <input type="text" name="search-bar" id={styles.search__bar} />
        <img src="" alt="" />
      </div>
    </header>
  );
};

export default Header;
