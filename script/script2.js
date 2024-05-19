const myValue = document.getElementById('myValue');
const myRoll = document.getElementById('myRoll');
const result = document.getElementById('result');
const clearScreen = document.getElementById('clear');
const min = 1, max = 100;
let isTyping = false;
let randomNum = generateRandomNumber();
myRoll.addEventListener('click', function (e) {
    if (!isTyping) {
        try {
            let value = Number(myValue.value);
            if (isNaN(value)) {
                alert('Enter a integer number!');
                myValue.value = "";
            } else if(value > 100 || value < 0 || value == "") {
                alert('Enter a integer number between 1 - 100!');
                myValue.value = "";
            }
            else {
                myValue.value = "";
                isTyping = true;
                result.innerHTML = "";
                displayResult(value);
            }
        }
        catch (e) {
            alert('An error occurred!');
            console.error(e);
        }
    } else {
        alert('Please wait for the current animation to finish.');
    }
});

clearScreen.addEventListener('click', function () {
    result.innerHTML = '<span id="cursor">|</span>';
});

function generateRandomNumber(){
    let randomValue = Math.floor(Math.random() * max) + min;
    return randomValue;
}

function displayResult(value) {
    let message;
    if(value > randomNum) {
        message = `Decrease your value`;
    }
    else if(value < randomNum) {
        message = `increase your value`;
    }
    else {
        message = `Random value is ${randomNum} and you entered ${value}`;
    }
    typeString(message, result, function () {
        isTyping = false;
        if (value == randomNum) {
            alert('Congrats you guessed the value');
            randomNum = generateRandomNumber();
        }
    });
}

function typeString(str, element, callback) {
    let i = 0;
    let timer = setInterval(function () {
        if (i < str.length) {
            element.innerHTML += str.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    }, 25);
}
