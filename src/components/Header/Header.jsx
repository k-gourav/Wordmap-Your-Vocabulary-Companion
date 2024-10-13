import React, { useContext, useState, useEffect } from "react";
import { fetchSearchResults } from "../../api/dictionaryApi";
import dictionaryLogo from "../../assets/icons/dictionary-icon.svg";
import moonLogo from "../../assets/icons/moon-logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import ThemeContext from "../../hooks/context/ThemeContext/ThemeContext";
import FontContext from "../../hooks/context/FontContext/FontContext";
import SearchContext from "../../hooks/context/SearchContext/SearchContext";
import styles from "./Header.module.css";

const Header = () => {
  const [wordInput, setWordInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { fontSelected, setFontSelected } = useContext(FontContext);
  const { setSearchResult } = useContext(SearchContext);
  useEffect(() => {
    document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [darkTheme]);

  const handleFontChange = (event) => {
    setFontSelected(event.target.value);
  };
  const themeHandler = (event) => {
    setDarkTheme(event.target.checked);
  };

  const inputSubmissionHandler = async () => {
    try {
      const result = await fetchSearchResults(wordInput, prevInput);
      setPrevInput(wordInput);
      setSearchResult(result);
      if (/^[ ]/.test(wordInput))setWordInput('');
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
        <img
          src={dictionaryLogo}
          alt="Dictionary-Logo"
          id={styles.logo__icon}
        />

        <div className={styles.font_toggle__items}>
          <select
            name="fonts"
            id={styles.font__type}
            onChange={handleFontChange}
          >
            <option value="Sans-Serif" style={{ fontFamily: "sans-serif" }}>
              Sleek Mode
            </option>
            <option value="Monospace" style={{ fontFamily: "monospace" }}>
              Retro Mode
            </option>
            <option value="Barlow" style={{ fontFamily: "Barlow" }}>
              Friendly mode
            </option>
            <option
              value="Special Elite"
              style={{ fontFamily: "Special Elite" }}
            >
              Vintage Mode
            </option>
          </select>
          <span id={styles.nav__line}></span>
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
          onChange={(e) => setWordInput(e.target.value)}
          value={wordInput}
          placeholder="Search word..."
          onKeyDown={(e) => {
            if (e.key === "Enter") inputSubmissionHandler();
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
