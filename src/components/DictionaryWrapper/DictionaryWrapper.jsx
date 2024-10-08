import React, { useState } from 'react'
import Header from '../Header/Header'
import Dictionary from '../Dictionary/Dictionary'
import Footer from '../Footer/Footer'

const DictionaryWrapper = () => {
    const [fontSelected, setFontSelected] = useState('Serif')
    const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
    <Header fontSelected={fontSelected} setFontSelected={setFontSelected} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    <Dictionary fontSelected={fontSelected} darkTheme={darkTheme} />
    <Footer fontSelected={fontSelected} darkTheme={darkTheme} />
    </>
  )
}

export default DictionaryWrapper;