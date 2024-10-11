import FontContext from "./FontContext";
import { useState } from "react";

const FontContextProvider = ({ children }) => {
  const [fontSelected, setFontSelected] = useState("Sans-Serif");
  return (
    <FontContext.Provider value={{ fontSelected, setFontSelected }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContextProvider;
