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
let myArtist = null;
let defaultText = '';
let mySet = './mtg.json';
const selectSet = document.querySelector('#select-set');


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


//-----------------------------------------------Cards----------------
// select-artist onchange
function thisArtistCards() {
    myArtist = selectArtist.value;

    populate(mySet);
}
// select-set onchange
function thisSet(){
    mySet = selectSet.value;
    clearArtists();
    myArtist = null;
    populate(mySet);
}



async function populate(mySet) {
    //mySet is path to json file
    const requestURL = mySet;
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
    const myHeader = document.createElement('h2');
    myHeader.textContent = object['data'].name;
    deckTitle.appendChild(myHeader);
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
if(!selectArtist.firstChild){
    for (const artist of uniqueArray) {
        let myArtistOption = document.createElement('option');
        myArtistOption.innerHTML = populateArtistOptions(artist);
        selectArtist.appendChild(myArtistOption);
    }
    selectArtist.firstChild.setAttribute('selected', true);
    myArtist = selectArtist.firstChild.value;
    console.log(myArtist);
    
}

    function populateArtistOptions(artist) {
        return `<option value = ${artist}>${artist}</option>`;

    }

    //create array of card objects by myArtist
    let myCards = cards.filter(x => x.artist == myArtist);

    //add a div with classname card for each card to document
    for (let i = 0; i < myCards.length; i++) {

        let myDiv = document.createElement('div');
        if (!myCards[i].flavorText) {
            defaultText = myCards[i].text;
        } else {
            defaultText = myCards[i].flavorText;
        }
        myDiv.innerHTML = cardElement(myCards[i].name, myCards[i].artist, defaultText, cardImageURL, myCards[i].identifiers.multiverseId);
        myDiv.classList.add('card');
        deckWrapper.appendChild(myDiv);
        
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

async function clearArtists(){
    while(selectArtist.firstChild)
    selectArtist.removeChild(selectArtist.firstChild);
}

populate(mySet);

