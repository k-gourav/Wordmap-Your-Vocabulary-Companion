import SearchContext from "./SearchContext";
import { useState } from "react";

const SearchContextProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
