let increaseButton = document.getElementById("increaseBtn");
let resetButton = document.getElementById("resetBtn");
let decreaseButton = document.getElementById("decreaseBtn"); 

let countDisplay = document.getElementById("countDisplay");

//initially count set to 0
    count = 0;

//increase button
    increaseButton.onclick = function(){
        count++;
        countDisplay.innerHTML = count;
    }

//decrease button
    decreaseButton.onclick = function(){
        count--;
        countDisplay.innerHTML = count;
        if(count == -1)
        {
            count=0;
            countDisplay.innerHTML = count;
        }
    }

//reset button
    resetButton.onclick = function(){
        count = 0;
        countDisplay.innerText = count;
    }