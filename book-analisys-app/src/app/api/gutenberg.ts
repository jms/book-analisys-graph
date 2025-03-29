async function downloadGutenbergText(bookId) {
    const url = `https://www.gutenberg.org/ebooks/${bookId}.txt.utf-8`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to download book ${bookId}: ${response.status} ${response.statusText}`);
      }
  
      const text = await response.text();
      return text;
  
    } catch (error) {
      console.error('Error downloading Gutenberg book:', error);
      return null; // Or throw the error, depending on how you want to handle it
    }
  }
  
  // Example usage:
  async function processBook(bookId) {
      const bookText = await downloadGutenbergText(bookId);
  
      if (bookText) {
          console.log(`Book ${bookId} downloaded successfully.`);
  
          function download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
  
            element.style.display = 'none';
            document.body.appendChild(element);
  
            element.click();
  
            document.body.removeChild(element);
          }
  
          download(`${bookId}.txt`, bookText);
  
      } else {
          console.log(`Failed to download book ${bookId}.`);
      }
  }
