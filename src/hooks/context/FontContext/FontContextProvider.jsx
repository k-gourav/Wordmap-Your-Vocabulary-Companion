import FontContext from "./FontContext";
import { useState, useEffect } from "react";

const FontContextProvider = ({ children }) => {
  const [fontSelected, setFontSelected] = useState(() => {
    const savedFont = localStorage.getItem("fontSelected");
    return savedFont ? JSON.parse(savedFont) : "Manrope";
  });
  useEffect(() => {
    localStorage.setItem("fontSelected", JSON.stringify(fontSelected));
  }, [fontSelected]);
  return (
    <FontContext.Provider value={{ fontSelected, setFontSelected }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContextProvider;
