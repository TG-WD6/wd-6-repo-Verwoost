let inputDate = document.getElementById('input-date');


let toDay = new Date().getTime();

function showInput(inputDate){
    let mills = new Date(inputDate.value).getTime();
    
    let diff = Math.ceil((toDay - mills)/ 86400000)-1;
    
    if(diff < 0){
        diff = Math.abs(diff);
    }

    console.log(diff);

}

