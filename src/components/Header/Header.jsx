import React, {useState} from "react";
import { fetchSearchResults } from "../../api/dictionaryApi"
import dictionaryLogo from "../../assets/icons/dictionary-icon.svg";
import moonLogo from "../../assets/icons/moon-logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import styles from "./Header.module.css";

const Header = ({ setFontSelected, fontSelected, darkTheme, setDarkTheme, setHandleSearchResult }) => {
  const [inputWord, setInputWord] = useState('');

  const handleFontChange = (event) => {
    setFontSelected(event.target.value);
  };
  const themeHandler = (event) => {
    setDarkTheme(event.target.checked);
  };

  const inputSubmissionHandler = async () => {
    try {
      const result = await fetchSearchResults(inputWord);
      setHandleSearchResult(result);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <header
      className={styles.header__element}
      style={{ fontFamily: fontSelected }}
      data-theme={darkTheme ? "dark" : "light"}
    >
      <div className={styles.nav__bar}>
        <img src={dictionaryLogo} alt="Dictionary-Logo" id={styles.logo__icon} />

        <div className={styles.font_toggle__items}>
          <select
            name="fonts"
            id={styles.font__type}
            onChange={handleFontChange}
          >
            <option value="Serif">Serif</option>
            <option value="Sans-Serif">Sans Serif</option>
            <option value="Monospace">Monospace</option>
          </select>
          <div className={styles.toggle__theme}>
            <label className={styles.switch}>
              <input
                type="checkbox"
                id={styles.theme_toggle}
                onChange={themeHandler}
                checked={darkTheme}
              />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <img src={moonLogo} alt="Moon-Logo" width="26" />
          </div>
        </div>
      </div>
      <div className={styles.search__bar}>
        <input
          type="text"
          name="search-bar"
          id={styles.search__input}
          onChange={(e) => setInputWord(e.target.value)}
          value={inputWord}
          placeholder="Search word..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') inputSubmissionHandler();
          }}
        />
        <button className={styles.search__btn} onClick={inputSubmissionHandler}>
          <img src={searchIcon} alt="Search-Icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
