export const fetchSearchResults = async (inputWord) => {
  if (!inputWord) {
    return [];
  }

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};