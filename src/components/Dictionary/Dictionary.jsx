import React, { useContext } from "react";
import { copyToClipboard, shareableUrlHandler } from "../../utils/helpers.js"
import audioPlayer from "../../assets/images/play-icon.svg";
import notFound from "../../assets/images/not-found.svg";
import shareIcon from "../../assets/images/share-icon.svg";
import ThemeContext from "../../hooks/context/ThemeContext/ThemeContext";
import styles from "./Dictionary.module.css";
import FontContext from "../../hooks/context/FontContext/FontContext";
import InputContext from "../../hooks/context/InputContext/InputContext";
import SearchContext from "../../hooks/context/SearchContext/SearchContext";

const Dictionary = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { fontSelected } = useContext(FontContext);
  const { prevInput } = useContext(InputContext);
  const { searchResult } = useContext(SearchContext);
  const wordData = searchResult[0];
  
  const firstPhoneticWithAudio = wordData?.phonetics.find(
    (phonetic) => phonetic?.audio
  );
  if (!prevInput) {
    return (
      <div
        className={styles.intro__content}
        style={{ fontFamily: fontSelected }}
        data-theme={darkTheme ? "dark" : "light"}
      >
        <h2 className={styles.intro__title}>Welcome to Wordmap</h2>
        <p className={styles.intro__body}>
          Search for your favourite words and share the world.
        </p>
      </div>
    );
  }
  return (
    <main
      className={styles.main__element}
      style={{ fontFamily: fontSelected }}
      data-theme={darkTheme ? "dark" : "light"}
    >
      {wordData ? (
        <>
          <div className={styles.main__word}>
            <div className={styles.word__withphonetics}>
              <h1>{wordData?.word}</h1>
              <p>{wordData?.phonetics?.find(p => p.text)?.text}</p>
            </div>
            <div className={styles.main__word}>
            {firstPhoneticWithAudio && (
              <button
                className={styles.audio__player}
                onClick={() => new Audio(firstPhoneticWithAudio?.audio).play()}
              >
                <img
                  src={audioPlayer}
                  alt="Audio-Player"
                  width="55"
                  loading="lazy"
                />
              </button>
            )}
            <button className={styles.share__btn} onClick={() => shareableUrlHandler(wordData?.word)}><img src={shareIcon} alt="share-icon" width="42" loading="lazy" /></button>
            </div>
          </div>

          {wordData?.meanings
            .filter((meaning) => meaning?.partOfSpeech === "noun")
            .map((meaning, index) => (
              <React.Fragment key={index}>
                <div className={styles.word__type}>
                  <h3>{meaning?.partOfSpeech}</h3>
                  <p className={styles.horizontal__ruler}></p>
                </div>
                <div className={styles.word__meaning}>
                  <p>Meaning</p>
                  <ul>
                    {meaning?.definitions.map((definition, defIndex) => (
                      <li key={defIndex}>{definition?.definition}</li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}

          {wordData?.meanings.some(
            (meaning) => meaning?.synonyms?.length > 0
          ) && (
            <div className={styles.synonyms}>
              <p className={styles.synonyms__title}>Synonyms</p>
              <p className={styles.synonyms__content}>
                {wordData?.meanings
                  .flatMap((meaning) => meaning?.synonyms)
                  .join(", ")}
              </p>
            </div>
          )}

          {wordData?.meanings
            .filter((meaning) => meaning?.partOfSpeech === "verb")
            .map((meaning, index) => (
              <React.Fragment key={index}>
                <div className={styles.word__type}>
                  <h3>{meaning?.partOfSpeech}</h3>
                  <p className={styles.horizontal__ruler}></p>
                </div>
                <div className={styles.word__meaning}>
                  <p>Meaning</p>
                  <ul>
                    {meaning?.definitions.map((definition, defIndex) => (
                      <li key={defIndex}>
                        {definition?.definition}
                        {definition?.example && (
                          <p id={styles.verb__example}>
                            "{definition?.example}"
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
        </>
      ) : (
        <div className={styles.noword__content}>
          <img id={styles.noword__img} src={notFound} loading="lazy" alt="not-found-pic" />
          <h2 className={styles.noword__title}>Oops! We couldn't find that word.</h2>
          <p className={styles.noword__body}>
            Please check your spelling or try a synonym.
          </p>
        </div>
      )}
    </main>
  );
};

export default Dictionary;
