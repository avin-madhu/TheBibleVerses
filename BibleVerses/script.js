
const id = "specific-verse"

function scrollInto(id) {
  var elmnt = document.getElementById(id);
  elmnt.scrollIntoView({
      behavior: "smooth", 
      block: "start",
      inline: "nearest"
  });
}

function showSpecSection(){
  const sectionSpec = document.getElementById("specific-verse");
  sectionSpec.style.display = "block";
  const sectionHome = document.getElementById("home")
  sectionHome.style.display = "none"
  scrollInto(id);
}

function back(){
  const sectionSpec = document.getElementById("specific-verse");
  sectionSpec.style.display = "none";
  const sectionHome = document.getElementById("home")
  sectionHome.style.display = "block"
}


async function getMeVerse() {

  const book = document.getElementById("book").value;
  const chapter = parseInt(document.getElementById("chapter").value);
  const verse = parseInt(document.getElementById("verse").value);
  const verseText = document.getElementById("verseText");
  const fromText = document.getElementById("fromText");
  
  try {

    const response = await fetch(`https://bible-api.com/${book}${chapter}:${verse}`);
    const data = await response.json();

    console.log(data.text)
    
    verseText.innerText = data.text;
    fromText.innerText = `${book} ${chapter}:${verse}`;
  
  } catch (error) {

    console.error(error);
  }

  

}





