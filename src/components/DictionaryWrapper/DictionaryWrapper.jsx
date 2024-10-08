import React, { useState } from 'react'
import Header from '../Header/Header'
import Dictionary from '../Dictionary/Dictionary'
import Footer from '../Footer/Footer'

const DictionaryWrapper = () => {
    const [fontSelected, setFontSelected] = useState('Serif')
  return (
    <>
    <Header fontSelected={fontSelected} setFontSelected={setFontSelected}/>
    <Dictionary fontSelected={fontSelected} />
    <Footer fontSelected={fontSelected} />
    </>
  )
}

export default DictionaryWrapper;