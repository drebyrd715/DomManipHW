let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  let mainE1 = document.querySelector("#main-title")
  mainE1.textContent = "Dom's Website"
  
    // Part 2
  let bodyE1 = document.querySelector("body")
  bodyE1.style.background =  "white"; 
  
    // Part 3
   document.querySelector("#favorite-things").lastElementChild.remove()
  
    // Part 4
   for (let i of document.querySelectorAll('.special-title'))
   i.style.fontSize = "2rem"
  
    // Part 5
  document.querySelector("#past-races").children[3].remove()
  
    // Part 6
  let newPastRaces = document.createElement("li")
  newPastRaces.textContent = ("Pittsburgh")
  let pastRaces = document.querySelector("#past-races")
  pastRaces.appendChild(newPastRaces)
  
    // Part 7
  let newBlog = document.createElement("div")
  newBlog.className = ("blog-post")
  let newH = document.createElement ("h2")
  newH.innerHTML = ("Buckle Up")
  let newH2 = document.querySelector("#dom-adventures")
  newH2.appendChild(newH)
  let newParagraph = document.createElement ("p")
  newParagraph.innerHTML = ("Toretto Family Rules")
  let newParagraph2 = document.querySelector("#quote-of-the-day")
  newParagraph2.appendChild(newParagraph);

  
    // Part 8
  
  
    // Part 9
  
  
  
  
  });
  