let array = ['appel', 'banaan', 'aardbei', 'kiwi', 'peer'];
let random = Math.floor(Math.random() * array.length);
array[0] = 'mango';
//console.log(array[random]);

// Neem een string, split m bij spaties en de array bestaat uit woorden
let myString = "Hallo, dit is een zin die ik mogelijk kan opdelen in woorden";
let myArray = Array.from(myString.split(' '));
//console.log(myArray[7]);

let mySports = ['Voetbal', 'Hockey', 'Schaatsen'];

//voeg aan het einde toe
mySports.push('Zeilen', 'Zwemmen');
//voeg aan het begin toe
mySports.unshift('Volleybal');
//pak de eerste twee items en maak een nieuwe array
let ballSports = mySports.slice(0,2);
//sorteren
mySports.sort();
//voer een functie uit op elk item en maak een nieuwe array van de resultaten
let sportsLength = mySports.map(getLength);

function getLength(item){
    return item.length;
}
console.log(sportsLength);



let dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];
for (let i = 0; i < dutchSports.length; i++) {
    console.log(dutchSports[i]) ;
    
}

for (const x in dutchSports) {
    if (Object.hasOwnProperty.call(dutchSports, x)) {
        console.log('for in loop: '+ x); 
        
    }
}

for (const i of dutchSports) {
    console.log('for of loop: ' + i);
}

let twentyArray =  new Array(20);

for (let i = 0; i < twentyArray.length; i++) {
    let y = i + 1;
    if(y%2==0){
        console.log(y);
    }
    
}


let threeArray = new Array(3);
let tenArray =  new Array(10);

for (let i = 0; i < threeArray.length; i++) {
    let c = i + 1;
    for (let b = 0; b < tenArray.length; b++) {
        let y = b+1;
        console.log(y * c);
        
    }
    
}

let fibArray = [0,1];

for (let i = 1; i <= 50; i++) {
    y = i - 1;
    let x = fibArray[i] + fibArray[y];
    fibArray.push(x);
    console. log(x);
}

let sortArray = [2,7,5,10,4,9,3,1,8,6];
for (let j = 0; j < sortArray.length; j++) {
    for (let i = 1; i < sortArray.length - j; i++) {
        if (sortArray[i-1] > sortArray[i]) {
            let temp = sortArray[i];
            sortArray[i] = sortArray[i-1];
            sortArray[i-1] = temp;
        }
    }
}
console.log(sortArray);


function ShowResult($txtBox) {


    let textbox = document.getElementById($txtBox);
    let x = document.getElementById('number-input').value;


    if (x == 1) {
        textbox.innerHTML = "januari";
    } else if (x == 2) {
        textbox.innerHTML = "februari";
    } else if (x == 3) {
        textbox.innerHTML = "maart";
    } else if (x == 4) {
        textbox.innerHTML = "april";
    } else {
        textbox.innerHTML = "geen geldig nummer!"
    }

    switch (x) {
        case '1':
            textbox.innerHTML = "januari";
            break;

        case '2':
            textbox.innerHTML = "februari";
            break;

        case '3':
            textbox.innerHTML = "maart";
            break;

        case '4':
            textbox.innerHTML = "april";
            break;

        default:
            textbox.innerHTML = "geen geldige input"
            break;
    }

    //x>=0 && x<=4 ? textbox.innerHTML = "waarde 0-4" : textbox.innerHTML = "waarde buiten 0-4";
    textbox.innerHTML = Math.floor(Math.random() * x);



}

function ShowTextResult() {
    let textbox = document.getElementById('txt-box1');
    let input = document.getElementById('text-input').value;
    let modifiedText = addHello(input);
    textbox.innerHTML = modifiedText;
}

function addHello(parameter) {
    let result = "Hello, " + parameter + "! How are you today?";
    return result;
}

//console.log(Math.max(1, 3, 2));
//console.log(Math.min(1, 3, 2));

const output = document.getElementById('txt-box3');

function showIsMember() {
    let checkName = document.getElementById('name-input').value.toLowerCase();
    let result = isMember(checkName);
    //let output = document.getElementById('txt-box3');
    output.innerHTML = result;
}



function isMember(checkName) {
    let teamNames = ["joost", "fares", "lex", "nathaniel"];
    if (teamNames.includes(checkName)) {
        return checkName + " is one of the goodguys!"
    } else {
        return checkName + " is not one of us"
    }
}
