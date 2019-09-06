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

function cardMaker(axiosCards) {

    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(span);
    imgDiv.appendChild(img);

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.textContent = axiosCards.headline;
    img.src = axiosCards.authorPhoto;
    span.textContent = 'By ' + axiosCards.authorName;

    return cardDiv;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((info) => {
        axiosCards = Object.keys(info.data.articles);
        console.log(axiosCards.length);
        for (let i = 0; i < axiosCards.length; i++) {
            console.log(axiosCards[i]);
            info.data.articles[axiosCards[i]].forEach(element => {
                document.querySelector('.cards-container').appendChild(cardMaker(element))
            })
        }
    })
    .catch(error => {
        document.body.innerText = error.message;
    })