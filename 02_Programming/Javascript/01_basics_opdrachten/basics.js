

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

function ShowTextResult(){
    let textbox = document.getElementById('txt-box1');
    let textInput = document.getElementById('text-input');
    textbox.innerHTML = addHello(textInput.value);
}

function addHello(parameter){
    let result = "Hello, " + parameter + "! How are you today?";
    return result;
}