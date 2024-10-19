import React, { Suspense } from "react";
import Header from "../Header/Header";
import ThemeContextProvider from "../../hooks/context/ThemeContext/ThemeContextProvider";
import FontContextProvider from "../../hooks/context/FontContext/FontContextProvider";
import SearchContextProvider from "../../hooks/context/SearchContext/SearchContextProvider";
import InputContextProvider from "../../hooks/context/InputContext/InputContextProvider";

const Dictionary = React.lazy(() => import("../Dictionary/Dictionary"));
const Footer = React.lazy(() => import("../Footer/Footer"));

const DictionaryWrapper = () => {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <InputContextProvider>
          <FontContextProvider>
            <Header />
            <Suspense fallback={<div>loading..</div>}>
            <Dictionary />
            <Footer />
            </Suspense>
          </FontContextProvider>
        </InputContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
};

export default DictionaryWrapper;
