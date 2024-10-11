import ThemeContext from "./ThemeContext";
import { useState } from "react";

const ThemeContextProvider = ( {children} ) => {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;