import InputContext from "./InputContext";
import { useState } from "react";

const InputContextProvider = ({ children }) => {
  const [prevInput, setPrevInput] = useState('');
  return (
    <InputContext.Provider value={{ prevInput, setPrevInput }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputContextProvider;