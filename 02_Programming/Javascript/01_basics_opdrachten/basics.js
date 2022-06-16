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
