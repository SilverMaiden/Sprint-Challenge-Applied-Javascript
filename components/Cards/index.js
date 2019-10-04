// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function makeArticleCards() {
    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let articleCategories = response.data.articles;
        for (var key in articleCategories) {
            let articles = articleCategories[key];
            articles.forEach(element => {
                let newCard = createCard(element);
                let cardsContainer = document.querySelector(".cards-container")
                cardsContainer.appendChild(newCard);
            })
        }
    })}

makeArticleCards();
//pass in as input object.data.articles.category
//object will be, for example, bootstrap array with 3 objects in it
function createCard(object) {
    let outermostDiv = document.createElement("div");
    outermostDiv.classList.add("card");

    let outerDiv = document.createElement("div");
    outerDiv.classList.add("headline");
    outerDiv.textContent = object.headline;

    let innerDiv = document.createElement("div");
    innerDiv.classList.add("author");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");

    let myImg = document.createElement("img");
    myImg.src = object.authorPhoto;

    let mySpan = document.createElement("span");
    mySpan.textContent = `By ${object.authorName}`;

    imgDiv.appendChild(myImg);

    innerDiv.appendChild(imgDiv);
    innerDiv.appendChild(mySpan);

    outerDiv.appendChild(innerDiv);

    outermostDiv.appendChild(outerDiv);

    return outermostDiv;



}
