import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Dictionary from '../Dictionary/Dictionary'
import Footer from '../Footer/Footer'

const DictionaryWrapper = () => {
    const [fontSelected, setFontSelected] = useState('Serif')
    const [darkTheme, setDarkTheme] = useState(false);
    const [handleSearchResult, setHandleSearchResult] = useState([]);
    
    useEffect(() => {
        document.body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    
        return () => {
          document.body.removeAttribute('data-theme');
        };
      }, [darkTheme]);
  return (
    <>
    <Header fontSelected={fontSelected} setFontSelected={setFontSelected} darkTheme={darkTheme} setDarkTheme={setDarkTheme} setHandleSearchResult={setHandleSearchResult} />
    <Dictionary fontSelected={fontSelected} darkTheme={darkTheme} handleSearchResult={handleSearchResult} />
    <Footer fontSelected={fontSelected} darkTheme={darkTheme} handleSearchResult={handleSearchResult} />
    </>
  )
}

export default DictionaryWrapper;