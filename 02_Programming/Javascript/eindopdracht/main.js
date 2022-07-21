setInterval(setClock, 1000);

// const hourHand = document.querySelector('[data-hour-hand]');
const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// variables for carddeck
const deckTitle = document.querySelector('#deck-title');
const deckWrapper = document.querySelector('#deck-wrapper');
const cardImageURL = 'https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=';
const selectColor = document.querySelector('#select-color');
let varColor = null;
let defaultText = '';
let varSet = './4ED.json';
const selectSet = document.querySelector('#select-set');

//var for carousel
const carouselList = document.querySelector('.carousel-list');

//var for comments
const varTextInput = document.querySelector('#input-text');
const varCommentList = document.querySelector('.comment-list');
const postButton = document.querySelector('#comment__post-btn');
const postForm = document.querySelector('#comment-form');
const postTitle = document.querySelector('#input-title');
const commentAlert = document.querySelector('.comment__form-alert');
const replyParent = document.querySelector('.reply-parent');
const varSound = new Audio('./images/Flute.ogg');
let varCommentId = 1;
const charSelect = document.querySelector('#char-select');

// var for search
const searchContainer = document.querySelector('#search-container');
const searchInput = document.querySelector('#input-search');
const searchButton = document.querySelector('#search-btn');
const searchList = document.querySelector('.search-list');
let searchWords = [];
let currentActive = -1;


//clock---------------
function setClock() {
    let date = new Date();
    let secondsRatio = date.getSeconds() / 60;
    let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + date.getHours()) / 12;
    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();


//------------------------Search-----------------------
localStorage.clear();

searchInput.addEventListener('input', (e) => {
    //hide matches
    for (let i = 0; i < searchList.children.length; i++) {
        searchList.children[i].classList.remove('show', 'active');
    }

    const value = e.target.value.toLowerCase();
    currentActive = -1;

    if (localStorage.length > 0) {
        //read localStorage
        let storageArray = localStorage.getItem('storageArray');
        let parsed = JSON.parse(storageArray);

        for (let i = 0; i < parsed.length; i++) {
            if (value.length > 0) {
                // if first character matches
                if (parsed[i].substr(0, value.length) == value) {
                    // make matching characters bold
                    searchList.children[i].innerHTML = "<strong>" + parsed[i].substr(0, value.length) + "</strong>";
                    searchList.children[i].innerHTML += parsed[i].substr(value.length);
                    // make matching words visible
                    searchList.children[i].classList.add('show');
                    // move clicked matching word to input and hide list
                    searchList.children[i].addEventListener('click', function (e) {
                        searchInput.value = searchList.children[i].textContent;
                        for (let i = 0; i < searchList.children.length; i++) {
                            searchList.children[i].classList.remove('show', 'active');

                        }
                    });
                }
            }

        }
    }
});

searchInput.addEventListener('keydown', function (e) {

    if (searchList.firstChild) {
        let array = Array.from(searchList.children);
        let positions = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i].classList.contains('show')) {
                positions.push(i);
            }
        }
        //arrow down
        if (e.keyCode == 40) {

            if (currentActive < positions.length - 1) {
                currentActive++;
            }

            searchList.children[positions[currentActive]].classList.add('active');
            if (currentActive > 0) {
                searchList.children[positions[currentActive - 1]].classList.remove('active');
            }

        }
        //arrow up
        else if (e.keyCode == 38) {

            if (currentActive > 0) {
                currentActive--;
            }

            if (currentActive < positions.length) {
                searchList.children[positions[currentActive]].classList.add('active');
                if (currentActive < positions.length - 1) {
                    searchList.children[positions[currentActive + 1]].classList.remove('active');
                }
            }
        }
        //enter key
        else if (e.keyCode == 13) {
            // if one of the listitems is active
            if (searchList.children[positions[currentActive]]) {
                searchList.children[positions[currentActive]].click();
                // if none of the listitems is active
            } else { searchButton.click(); }
        }


    }
    //enter key if first input (localstorage = empty)
    else if (e.keyCode == 13) {
        searchButton.click();
    }
});


searchButton.addEventListener('click', (e) => {
    // hide list
    for (let i = 0; i < searchList.children.length; i++) {
        searchList.children[i].classList.remove('show', 'active');

    }

    // check if input is not empty
    if (searchInput.value.length > 0 && searchInput.value.trim() !== '') {
        let varWord = searchInput.value.toLowerCase();
        let isDuplicate = searchWords.includes(varWord);

        if (!isDuplicate) {
            //add input to array searchWords
            searchWords.push(varWord);
            let stringified = JSON.stringify(searchWords);
            //ad array to localStorage
            localStorage.setItem('storageArray', stringified);
            //create a div with the input and append to searchList
            let varSearchElement = document.createElement('div');
            varSearchElement.textContent = varWord;
            varSearchElement.classList.add('autofill-item');
            searchList.appendChild(varSearchElement);
        }
        //clear input
        searchInput.value = '';

    }

});

// if clicked outside searchbar: hide list
searchContainer.addEventListener('click', (e) => {
    for (let i = 0; i < searchList.children.length; i++) {
        searchList.children[i].classList.remove('show', 'active');

    }

});

//-----------------------------------------------Cards----------------
// select-artist onchange
function thisColorCards() {
    varColor = selectColor.value;
    populate(varSet);
}
// select-set onchange
function thisSet() {
    varSet = selectSet.value;
    clearColors();
    varColor = null;
    populate(varSet);
}



async function populate(varSet) {
    //varSet is path to json file
    const requestURL = varSet;
    const request = new Request(requestURL);

    const response = await fetch(request);
    const magicObject = await response.json();

    console.log(magicObject['data'].cards[0]);
    //if populated with other artist or set
    clearDeck();

    populateHeader(magicObject);
    populateCards(magicObject);

}

function populateHeader(object) {
    const varHeader = document.createElement('h2');
    varHeader.textContent = object['data'].name;
    deckTitle.appendChild(varHeader);
}

function populateCards(object) {
    //create array of card objects
    const cards = object['data'].cards;

    //create array of each card's artist
    //const artists = cards.map((x) => { return x.artist });
    const artists = cards.map((x) => { return x.colorIdentity });
    const cleanArtists = cleanArray(artists);

    function cleanArray(array) {
        let uniqueArray = array.filter((value, index) => {
            const _value = JSON.stringify(value);
            return index === array.findIndex(obj => {
                return JSON.stringify(obj) === _value;
            });
        });

        uniqueArray.sort();
        return uniqueArray;
    }

    //if the list of artists is empty add option element for each artist
    if (!selectColor.firstChild) {
        for (const artist of cleanArtists) {

            console.log(artist);

            let varColorOption = document.createElement('option');
            varColorOption.value = artist;
            switch (artist[0]) {
                case 'B':
                    varColorOption.textContent = "Black";
                    if (artist[1]) { varColorOption.textContent = "Black + " + artist[1]; }
                    break;

                case 'U':
                    varColorOption.textContent = "Blue";
                    if (artist[1]) { varColorOption.textContent = "Blue + " + artist[1]; }
                    break;
                case 'W':
                    varColorOption.textContent = "White";
                    if (artist[1]) { varColorOption.textContent = "White + " + artist[1]; }
                    break;
                case 'R':
                    varColorOption.textContent = "Red";
                    if (artist[1]) { varColorOption.textContent = "Red + " + artist[1]; }
                    break;
                case 'G':
                    varColorOption.textContent = "Green";
                    if (artist[1]) { varColorOption.textContent = "Green + " + artist[1]; }
                    break;
                default:
                    varColorOption.textContent = "Colorless";
                    if (artist[1]) { varColorOption.textContent = "Colorless + " + artist[1]; }
                    break;
            }

            selectColor.appendChild(varColorOption);
        }
        selectColor.firstChild.setAttribute('selected', true);
        varColor = selectColor.firstChild.value;
        console.log(varColor);

    }




    //create array of card objects by varColor
    //let varCards = cards.filter(x => x.artist == varColor);
    let varCards = cards.filter(x => x.colorIdentity == varColor);

    //add a div with classname card for each card to document
    for (let i = 0; i < varCards.length; i++) {

        let varDiv = document.createElement('div');

        defaultText = varCards[i].manaCost;

        varDiv.innerHTML = cardElement(varCards[i].name, varCards[i].artist, defaultText, cardImageURL, varCards[i].identifiers.multiverseId);
        varDiv.classList.add('flip-card');
        deckWrapper.appendChild(varDiv);

    }

    function cardElement(cardName, cardArtist, cardText, cardImageURL, cardImageID) {

        cardArtist = "Artist: " + cardArtist;
        //return `<h3>${cardName}</h3><p>${cardArtist}</p><img src="${cardImageURL} ${cardImageID}" alt="Image not found"> <p class="card-text">${cardText}</p>`;

        return ` <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="${cardImageURL} ${cardImageID}" alt="Image not found">
        </div>
        <div class="flip-card-back">
        <h3>${cardName}</h3>
        <p>${cardArtist}</p>
          <p class="card-text">${cardText}</p>
        </div>
      </div>`;
    }

}

async function clearDeck() {
    while (deckWrapper.firstChild) {
        deckWrapper.removeChild(deckWrapper.firstChild);

    }
    if (deckTitle.firstChild) {
        deckTitle.removeChild(deckTitle.firstChild);
    }
}

async function clearColors() {
    while (selectColor.firstChild)
        selectColor.removeChild(selectColor.firstChild);
}

populate(varSet);


//carousel----------------------------------------------------------------------------

function changePic(varBool) {
    let slides = Array.from(carouselList.children);
    let offset = varBool ? +1 : -1;
    let changeClass = varBool ? 'slideleft' : 'slideright';
    let changeActive = varBool ? 'fromRight' : 'fromLeft';
    let activeIndex = slides.findIndex(x => x.classList.contains('active'));
    let newIndex = activeIndex + offset;


    if (newIndex > slides.length - 1) { newIndex = 0 };
    if (newIndex < 0) { newIndex = slides.length - 1 };

    slides[activeIndex].classList.remove('active', 'fromRight', 'fromLeft');
    slides[activeIndex].classList.add(changeClass);


    slides[newIndex].classList.remove('slideleft', 'slideright');
    slides[newIndex].classList.add(changeActive, 'active');

}

//comment section--------------------------------------------------------------------------------

postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let varCharImage = '';

    switch (charSelect.value) {
        case 'Birdy':
            varCharImage = './images/birdy.svg';
            break;
        case 'Skully':
            varCharImage = './images/skull.svg';
            break;

        case 'Bunny':
            varCharImage = './images/bunny.svg'
            break;
        default:
            break;
    }

    if (varTextInput.value === '' || varTextInput.value.trim() === '') {
        alert("Bericht heeft geen inhoud!");
        return;
    }

    let postContent = varTextInput.value;
    let varTitle = charSelect.value;
    let varListItem = comment(varTitle, varCharImage, postContent, varCommentId);

    if (replyParent.textContent) {
        let foundComment = document.getElementById(replyParent.textContent);
        let replyText = document.createElement('p');
        let foundTitle = foundComment.querySelector('.comment__title').textContent;
        replyText.textContent = "Antwoord op: " + foundTitle;
        varListItem.classList.add('reply');
        replyText.classList.add('replytext');
        foundComment.after(varListItem);
        foundComment.after(replyText);

    } else {
        varCommentList.appendChild(varListItem);
    }

    postForm.reset();
    varCommentId++;
    commentAlert.textContent = "Opmerking plaatsen";
    commentAlert.classList.remove('special');
    replyParent.textContent = null;

    //varSound.play();


});


function comment(title, imageUrl, text, id) {


    let varListItem = document.createElement('li');
    let varPerson = document.createElement('div');
    let varImage = document.createElement('img');
    let varTitle = document.createElement('h3');
    let varText = document.createElement('p');
    let varReplyButton = document.createElement('button');

    varImage.src = imageUrl;
    varImage.width = 64;
    varImage.height = 64;

    varPerson.appendChild(varImage);
    varPerson.classList.add('person');
    varTitle.textContent = title + ' #' + id;
    varTitle.classList.add('comment__title');
    varPerson.appendChild(varTitle);

    varListItem.appendChild(varPerson);

    varText.textContent = text;
    varListItem.appendChild(varText);

    varReplyButton.textContent = 'reply';
    varReplyButton.setAttribute('onclick', 'replyToComment(this)');
    varReplyButton.classList.add('comment__reply-btn');
    varListItem.appendChild(varReplyButton);

    varListItem.classList.add('comment');
    varListItem.setAttribute('id', id);

    return varListItem;

}

function replyToComment(button) {
    let title = button.parentElement.querySelector('.comment__title').textContent;
    let varId = button.parentElement.id;
    replyParent.textContent = varId;
    commentAlert.textContent = 'Antwoord op: ' + title;
    commentAlert.classList.add('special');
}




