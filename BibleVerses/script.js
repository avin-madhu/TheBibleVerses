async function getMeVerse() {

  const book = document.getElementById("book").value;
  const chapter = parseInt(document.getElementById("chapter").value);
  const verse = parseInt(document.getElementById("verse").value);
  const verseText = document.getElementById("verseText");
  const fromText = document.getElementById("fromText");
  const cite = document.getElementById("cite");

  try {
    // Make an HTTP GET request to the Bible API
    const response = await fetch(`https://bible-api.com/${book}${chapter}:${verse}`);

    // Parse the JSON response
    const data = await response.json();

    // Display the verse text to the user
    console.log(data.text)
    

    verseText.innerText = data.text;
    fromText.innerText = `${book} ${chapter}:${verse}`;
  


  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }

}





