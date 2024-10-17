import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Dictionary from "../Dictionary/Dictionary";
import Footer from "../Footer/Footer";
import ThemeContextProvider from "../../hooks/context/ThemeContext/ThemeContextProvider";
import FontContextProvider from "../../hooks/context/FontContext/FontContextProvider";
import SearchContextProvider from "../../hooks/context/SearchContext/SearchContextProvider";
import InputContextProvider from "../../hooks/context/InputContext/InputContextProvider";

const DictionaryWrapper = () => {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <InputContextProvider>
          <FontContextProvider>
            <Header />
            <Dictionary />
            <Footer />
          </FontContextProvider>
        </InputContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
};

export default DictionaryWrapper;
