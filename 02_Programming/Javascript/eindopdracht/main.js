setInterval(setClock, 1000);

// const hourHand = document.querySelector('[data-hour-hand]');
const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// variables for carddeck
const deckTitle = document.querySelector('#deck-title');
const deckWrapper = document.querySelector('#deck-wrapper');
const cardImageURL = 'https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=';


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


async function populate() {

    const requestURL = './mtg.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const magicObject = await response.json();

    console.log(magicObject['data'].cards[1]);
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
    const cards = object['data'].cards;

    console.log(cards[1].identifiers.multiverseId);
    // for (const card of cards){
    //     console.log(card.artist);
    // }

    // const artists = cards.map((x) => { return x.artist });
    // const types = cards.map((x) => { return x.types[0] });

    // console.log(artists[2]);
    // console.log(types[25]);

    for (let i = 0; i < 36; i++) {

        let myDiv = document.createElement('div');
        myDiv.innerHTML = cardElement(cards[i].name, cards[i].artist, cards[i].flavorText, cardImageURL, cards[i].identifiers.multiverseId);

        deckWrapper.appendChild(myDiv);
    }

    function cardElement(cardName, cardArtist, cardText, cardImageURL, cardImageID) {
        if(cardText == null){
            cardText = "";

        };
        cardArtist ="Artist: "+ cardArtist;
        return `<div class="card"><h3>${cardName}</h3><p>${cardArtist}</p><img src="${cardImageURL} ${cardImageID}"> <p>${cardText}</p></div>`;
    }

}

async function clearDeck(){
    while(deckWrapper.firstChild){
        deckWrapper.removeChild(deckWrapper.firstChild);
        
    }

    deckTitle.removeChild(deckTitle.firstChild);
}

