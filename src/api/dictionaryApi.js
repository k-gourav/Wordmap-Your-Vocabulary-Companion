export const fetchSearchResults = async (inputWord, prevInputWord) => {
  try {
    if (!inputWord || /[^a-zA-Z\s]/.test(inputWord) || /^[ ]/.test(inputWord))
      return [];
    else { 
      if (inputWord && prevInputWord === inputWord) return result;
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
      );
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
