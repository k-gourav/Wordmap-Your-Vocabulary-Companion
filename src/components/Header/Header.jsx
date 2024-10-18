import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSearchResults } from "../../api/dictionary";
import dictionaryLogo from "../../assets/icons/dictionary-icon.svg";
import moonLogo from "../../assets/icons/moon-logo.svg";
import sunLogo from "../../assets/icons/sun-logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import ThemeContext from "../../hooks/context/ThemeContext/ThemeContext";
import FontContext from "../../hooks/context/FontContext/FontContext";
import SearchContext from "../../hooks/context/SearchContext/SearchContext";
import styles from "./Header.module.css";
import InputContext from "../../hooks/context/InputContext/InputContext";

const Header = () => {
  const [wordInput, setWordInput] = useState("");
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { fontSelected, setFontSelected } = useContext(FontContext);
  const { prevInput, setPrevInput } = useContext(InputContext);
  const { searchResult, setSearchResult } = useContext(SearchContext);
  useEffect(() => {
    document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [darkTheme]);

  const fetchSharedResult = async (searchTerm) => {
    const sharedResult = await fetchSearchResults(searchTerm);
    setSearchResult(sharedResult);
    setPrevInput(searchTerm);
    setWordInput(searchTerm);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get("word");
    if (searchTerm) fetchSharedResult(searchTerm);
  }, []);

  const handleFontChange = (event) => {
    setFontSelected(event.target.value);
  };

  const themeHandler = (event) => {
    setDarkTheme(event.target.checked);
  };

  const inputSubmissionHandler = async () => {
    if (!wordInput.trim()) {
      setWordInput("");
      return [];
    }
    if (/[^a-zA-Z\s]/.test(wordInput.trim())) {
      setPrevInput("error");
      return setSearchResult([]);
    }
    if (wordInput && prevInput.toLowerCase() === wordInput.toLowerCase())
      return searchResult;
    const result = await fetchSearchResults(wordInput);
    setPrevInput(wordInput);
    setSearchResult(result);
    setWordInput(wordInput.trim());
  };
  return (
    <header
      className={styles.header__element}
      style={{ fontFamily: fontSelected }}
      data-theme={darkTheme ? "dark" : "light"}
    >
      <div className={styles.nav__bar}>
        <Link to="/">
        <img
          src={dictionaryLogo}
          loading="lazy"
          alt="Dictionary-Logo"
          id={styles.logo__icon}
        />
        </Link>
        <div className={styles.font_toggle__items}>
          <select
            name="fonts"
            id={styles.font__type}
            onChange={handleFontChange}
            value={fontSelected}
          >
            <option value="Manrope" style={{ fontFamily: "Manrope" }}>
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
            <img
              src={darkTheme ? moonLogo : sunLogo}
              alt="Selected-Theme-Icon"
              width="26"
              loading="lazy"
            />
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
        <button
          className={styles.search__btn}
          aria-label="Search"
          onClick={inputSubmissionHandler}
        >
          <img src={searchIcon} alt="Search-Icon" loading="lazy" />
        </button>
      </div>
    </header>
  );
};

export default Header;
