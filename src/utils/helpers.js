export const copyToClipboard = (url) => {
  navigator.clipboard.writeText(url);
  alert("Link copied to clipboard!");
};

export const shareableUrlHandler = async (searchTerm) => {
  const shareUrl = `${window.location.origin}?word=${searchTerm}`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: `Check out the result for ${searchTerm}!`,
        text: `I found something interesting about ${searchTerm}`,
        url: shareUrl,
      });
    } catch (error) {
      console.error("Error sharing", error);
    }
  } else {
    alert(
      "Sharing is not supported in your browser. You can copy the link below:"
    );
    copyToClipboard(shareUrl);
  }
};
