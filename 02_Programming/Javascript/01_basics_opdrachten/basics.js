let strawberry = document.getElementById('strawberry');
let banana = document.getElementById('banana');
let cherry = document.getElementById('cherry');
let pear = document.getElementById('pear');
let pineapple = document.getElementById('pineapple');
let apple = document.getElementById('apple');
let orange = document.getElementById('orange');
let mango = document.getElementById('mango');
let grape = document.getElementById('grape');
let fruitInput = document.getElementById('fruit-input');

function checkFruits() {
    let fruitInputString = fruitInput.value;
    let cleanString = cleanUp(fruitInputString);

    function cleanUp(string) {
        let regex = /[\..*,.*:.*;.*'.*'.*!.*\?.*".*".\n]/ig;
        let regString = string.replace(regex, ' ');
        let lowerString = regString.toLowerCase();
        return lowerString;
    }

    let fruitArray = Array.from(cleanString.split(' '));
    let comPareArray = ['appel', 'appels', 'peer', 'peren', 'sinaasappel', 'sinaasappels', 'ananas','ananassen', 'druif', 'druiven', 'mango', 'mango\'s', 'mangos', 'kers', 'kersen', 'banaan', 'bananen', 'aardbei', 'aardbeien'];
    const emptyArray = new Array(0);
    for (const x in fruitArray) {
        for (const y in comPareArray) {
            if (fruitArray[x] == comPareArray[y]) {

                emptyArray.unshift(comPareArray[y]);
            }

        }
    }
    console.log(emptyArray);

    for (const b in emptyArray) {
        switch (emptyArray[b]) {
            case 'appel':

            case 'appels':
                apple.className += ' guessed';
                break;

            case 'peer':

            case 'peren':
                pear.className += ' guessed';
                break;

            case 'sinaasappel':

            case 'sinaasappels':
                orange.className += ' guessed';
                break;

            case 'ananas':

            case 'ananassen':
                pineapple.className += ' guessed';
                break;

            case 'druif':

            case 'druiven':
                grape.className += ' guessed';
                break;

            case 'mango':

            case 'mango\'s':
                mango.className += ' guessed';
                break;

            case 'kers':

            case 'kersen':
                cherry.className += ' guessed';
                break;

            case 'banaan':

            case 'bananen':
                banana.className += ' guessed';
                break;

            case 'aardbei':

            case 'aardbeien':
                strawberry.className += ' guessed';
                break;
            default:
                break;
        }
    }



}




let array = ['appel', 'banaan', 'aardbei', 'kiwi', 'peer'];
let random = Math.floor(Math.random() * array.length);
array[0] = 'mango';
console.log(array[random]);

// Neem een string, split m bij spaties en de array bestaat uit woorden
let myString = "Hallo, dit is een zin die ik mogelijk kan opdelen in woorden";
let myArray = Array.from(myString.split(' '));
console.log(myArray[7]);


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

console.log(Math.max(1, 3, 2));
console.log(Math.min(1, 3, 2));

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
