setInterval(setClock, 1000);

// const hourHand = document.querySelector('[data-hour-hand]');
const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// variables for carddeck
const deckTitle = document.querySelector('#deck-title');
const deckWrapper = document.querySelector('#deck-wrapper');
const cardImageURL = 'https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=';
const selectArtist = document.querySelector('#select-artist');
let varArtist = null;
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
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('#input-search');
const searchButton = document.querySelector('#search-btn');
const searchList = document.querySelector('.search-list');
let searchWords = [];
localStorage.clear();

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
let currentActive = -1;
searchInput.addEventListener('keydown', function (e) {

    if (searchList.firstChild) {
        let array = Array.from(searchList.children);
        let positions = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i].classList.contains('show')) {
                positions.push(i);
            }

        }
        if (e.keyCode == 40) {

            if (currentActive < positions.length - 1) {
                currentActive++;
            }

            console.log(currentActive);

            searchList.children[positions[currentActive]].classList.add('active');
            if (currentActive > 0) {
                searchList.children[positions[currentActive - 1]].classList.remove('active');
            }

        }

        else if (e.keyCode == 38) {

            if (currentActive > 0) {
                currentActive--;
            }
            console.log(currentActive);
            if (currentActive < positions.length) {
                searchList.children[positions[currentActive]].classList.add('active');
                if (currentActive < positions.length - 1) {

                    searchList.children[positions[currentActive + 1]].classList.remove('active');
                }
            }
        }
        else if (e.keyCode == 13) {
            if (searchList.children[positions[currentActive]]) {
                searchList.children[positions[currentActive]].click();
            } else { searchButton.click(); }
        }


    }

    else if (e.keyCode ==13) {
        searchButton.click();
    }
});


searchInput.addEventListener('input', (e) => {

    for (let i = 0; i < searchList.children.length; i++) {
        searchList.children[i].classList.remove('show', 'active');


    }
    const value = e.target.value.toLowerCase();

    currentActive = -1;

    if (localStorage.length > 0) {
        let storageArray = localStorage.getItem('storageArray');

        let parsed = JSON.parse(storageArray);

        for (let i = 0; i < parsed.length; i++) {
            if (value.length > 0) {
                if (parsed[i].includes(value)) {
                    console.log(searchList.children[i]);
                    searchList.children[i].classList.add('show');
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

searchButton.addEventListener('click', (e) => {

    for (let i = 0; i < searchList.children.length; i++) {
        searchList.children[i].classList.remove('show', 'active');

    }


    if (searchInput.value.length > 0 && searchInput.value.trim() !== '') {
        let varWord = searchInput.value.toLowerCase();
        let isDuplicate = searchWords.includes(varWord);
        searchWords.push(varWord);

        searchWords = searchWords.filter((value, index) => {
            const _value = JSON.stringify(value);
            return index === searchWords.findIndex(obj => {
                return JSON.stringify(obj) === _value;
            });
        });
        let stringified = JSON.stringify(searchWords);
        localStorage.setItem('storageArray', stringified);


        if (!isDuplicate) {
            let varSearchElement = document.createElement('div');
            varSearchElement.textContent = varWord;
            varSearchElement.classList.add('autofill-item');
            searchList.appendChild(varSearchElement);
        }

        searchInput.value = '';

    }

});

searchContainer.addEventListener('click', (e)=>{
    for (let i = 0; i < searchList.children.length; i++) {
        searchList.children[i].classList.remove('show', 'active');

    }
    
});

//-----------------------------------------------Cards----------------
// select-artist onchange
function thisArtistCards() {
    varArtist = selectArtist.value;

    populate(varSet);
}
// select-set onchange
function thisSet() {
    varSet = selectSet.value;
    clearArtists();
    varArtist = null;
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
    const artists = cards.map((x) => { return x.artist });

    //remove duplicates and return array
    const uniqueArray = artists.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === artists.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });

    uniqueArray.sort();

    //if the list of artists is empty add option element for each artist
    if (!selectArtist.firstChild) {
        for (const artist of uniqueArray) {
            let varArtistOption = document.createElement('option');
            varArtistOption.innerHTML = populateArtistOptions(artist);
            selectArtist.appendChild(varArtistOption);
        }
        selectArtist.firstChild.setAttribute('selected', true);
        varArtist = selectArtist.firstChild.value;


    }

    function populateArtistOptions(artist) {
        return `<option value = ${artist}>${artist}</option>`;

    }

    //create array of card objects by varArtist
    let varCards = cards.filter(x => x.artist == varArtist);

    //add a div with classname card for each card to document
    for (let i = 0; i < varCards.length; i++) {

        let varDiv = document.createElement('div');
        if (!varCards[i].flavorText) {
            defaultText = varCards[i].text;
        } else {
            defaultText = varCards[i].flavorText;
        }
        varDiv.innerHTML = cardElement(varCards[i].name, varCards[i].artist, defaultText, cardImageURL, varCards[i].identifiers.multiverseId);
        varDiv.classList.add('card');
        deckWrapper.appendChild(varDiv);

    }

    function cardElement(cardName, cardArtist, cardText, cardImageURL, cardImageID) {

        cardArtist = "Artist: " + cardArtist;
        return `<h3>${cardName}</h3><p>${cardArtist}</p><img src="${cardImageURL} ${cardImageID}"> <p class="card-text">${cardText}</p>`;
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

async function clearArtists() {
    while (selectArtist.firstChild)
        selectArtist.removeChild(selectArtist.firstChild);
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




