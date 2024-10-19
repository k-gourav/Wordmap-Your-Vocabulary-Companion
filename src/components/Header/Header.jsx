import React, { useContext, useState, useEffect, useCallback } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { selectedFontStyle } from "../../utils/constants";
import { fetchSearchResults } from "../../api/dictionary";
import dictionaryLogo from "../../assets/icons/dictionary-icon.svg";
import moonLogo from "../../assets/icons/moon-logo.svg";
import sunLogo from "../../assets/icons/sun-logo.svg";
import micLogo from "../../assets/images/mic-icon.png";
import searchIcon from "../../assets/images/search-icon.svg";
import ThemeContext from "../../hooks/context/ThemeContext/ThemeContext";
import FontContext from "../../hooks/context/FontContext/FontContext";
import SearchContext from "../../hooks/context/SearchContext/SearchContext";
import InputContext from "../../hooks/context/InputContext/InputContext";

const Header = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const [wordInput, setWordInput] = useState("");
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { fontSelected, setFontSelected } = useContext(FontContext);
  const { prevInput, setPrevInput } = useContext(InputContext);
  const { searchResult, setSearchResult } = useContext(SearchContext);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  
  const fetchSharedResult = useCallback(async (searchInput) => {
    const sharedResult = await fetchSearchResults(searchInput);
    setSearchResult(sharedResult);
    setPrevInput(searchInput);
    setWordInput(searchInput);
  }, [setSearchResult, setPrevInput]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchInput = params.get("word");
    if (searchInput) fetchSharedResult(searchInput);
  }, [fetchSharedResult]);
  
  const inputSubmissionHandler = useCallback(async (word) => {
    if (!word.trim()) {
      setWordInput("");
      return [];
    }
    if (/[^a-zA-Z\s]/.test(word.trim())) {
      setPrevInput("error");
      return setSearchResult([]);
    }
    if (word && prevInput.toLowerCase() === word.toLowerCase()) return searchResult;
    const result = await fetchSearchResults(word);
    setPrevInput(word);
    setSearchResult(result);
    setWordInput(word.trim());
  }, [prevInput, searchResult, setPrevInput, setSearchResult]);

  useEffect(() => {
    if (SpeechRecognition) {
      const speechRecognition = new SpeechRecognition();
      speechRecognition.lang = "en-US";
      speechRecognition.interimResults = true;
      speechRecognition.continuous = false;

      speechRecognition.onresult = (event) => {
        let currentTranscript = "";
        for (const res of event.results) {
          currentTranscript += res[0].transcript;
        }
        setWordInput(currentTranscript);
      };

      speechRecognition.onerror = (event) => {
        console.error("Error occurred in recognition:", event.error);
      };

      speechRecognition.onend = () => {
        setIsListening(false);
        inputSubmissionHandler(wordInput);
      };
      setRecognition(speechRecognition);
      } else {
      alert("Your browser does not support Speech Recognition.");
    }
    return () => {
      if (recognition) {
        recognition.abort();
      } 
    };
  }, [SpeechRecognition, wordInput, inputSubmissionHandler]);

  const audioListeningHandler = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [darkTheme]);

  const handleFontChange = useCallback((event) => {
    setFontSelected(event.target.value);
  }, [setFontSelected]);

  const themeHandler = useCallback((event) => {
    setDarkTheme(event.target.checked);
  }, [setDarkTheme]);
  console.log('hi');
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
            {selectedFontStyle.map((item) => (
              <option
                key={item.value}
                value={item.value}
                style={{ fontFamily: item.value }}
              >
                {item.mode}
              </option>
            ))}
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
            if (e.key === "Enter") inputSubmissionHandler(wordInput);
          }}
        />
        <div className={styles.search__tool}>
          <button
            className={styles.mic__btn}
            onClick={audioListeningHandler}
            aria-label="Say your word"
          >
            <img src={micLogo} alt="mic-icon" loading="lazy" />
          </button>
          <span id={styles.search__line}></span>
          <button
            className={styles.search__btn}
            aria-label="Search"
            onClick={() => inputSubmissionHandler(wordInput)}
          >
            <img
              src={searchIcon}
              alt="Search-Icon"
              width="21.5"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
