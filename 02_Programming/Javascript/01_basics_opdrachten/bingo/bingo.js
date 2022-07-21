let strawberry = document.getElementById('strawberry');
let banana = document.getElementById('banana');
let cherry = document.getElementById('cherry');
let pear = document.getElementById('pear');
let pineapple = document.getElementById('pineapple');
let apple = document.getElementById('apple');
let orange = document.getElementById('orange');
let mango = document.getElementById('mango');
let grape = document.getElementById('grape');
//let fruitInput = document.getElementById('fruit-input');
const fruitOutput = document.querySelector('#fruit-output');
let comPareArray = ['appel', 'appels', 'peer', 'peren', 'sinaasappel', 'sinaasappels', 'ananas','ananassen', 'druif', 'druiven', 'mango', 'mango\'s', 'mangos', 'kers', 'kersen', 'banaan', 'bananen', 'aardbei', 'aardbeien'];
// let regex = /[\..*,.*:.*;.*'.*'.*!.*\?.*".*".\n]/ig;
let regex = /[\.\,\'\"\:\n\?\!]/ig;

function checkFruits(fruitInput) {
    let fruitInputString = fruitInput.value;
    let cleanString = cleanUp(fruitInputString);

    function cleanUp(string) {     
        let regString = string.replace(regex, ' ');
        let lowerString = regString.toLowerCase();
        return lowerString;
    }

    let fruitArray = Array.from(cleanString.split(' '));
    console.log(fruitArray);
    fruitOutput.textContent= "MET REGEX: "+ cleanString;
    
    for (const x in fruitArray) {
        for (const y in comPareArray) {
            if (fruitArray[x] == comPareArray[y]) {

                const match = comPareArray[y];
                console.log(match);
                switch (match) {
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
    }
  

   

    



}

function checkFruitsRaw(fruitInput) {
    let fruitInputString = fruitInput.value;
    let cleanString = cleanUp(fruitInputString);

    function cleanUp(string) {     
        let myString = string.replace(/(?:\r\n|\r|\n)/g, '\\n');
        let lowerString = myString.toLowerCase();
        return lowerString;
    }

    let fruitArray = Array.from(cleanString.split(' '));
    fruitOutput.textContent="ZONDER REGEX: "+cleanString;
    
    for (const x in fruitArray) {
        for (const y in comPareArray) {
            if (fruitArray[x] == comPareArray[y]) {

                const match = comPareArray[y];
                console.log(match);
                switch (match) {
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
    }
  

   

    



}