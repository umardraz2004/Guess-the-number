const myValue = document.getElementById('myValue');
const myRoll = document.getElementById('myRoll');
const result = document.getElementById('result');
const clearScreen = document.getElementById('clear');
const min = 0, max = 10;
let isTyping = false;

myRoll.addEventListener('click', function (e) {
    if (!isTyping) {
        try {
            let value = myValue.value;
            if (isNaN(value)) {
                alert('Enter a integer number!');
                myValue.value = "";
            } else if(value > 10 || value < 0 || value == "") {
                alert('Enter a integer number between 1 - 10!');
                myValue.value = "";
            }
            else {
                let randomValue = Math.floor(Math.random() * max) + min;
                let str = `Random value is ${randomValue} and you entered ${myValue.value}`;
                myValue.value = "";
                result.innerHTML = "";
                isTyping = true;
                typeString(str, result, function () {
                    isTyping = false;
                    if (value == randomValue) {
                        alert('Congrats you guessed the value');
                    }
                });
            }
        }
        catch (e) {
            alert('An error occurred!');
        }
    } else {
        alert('Please wait for the current animation to finish.');
    }
});

clearScreen.addEventListener('click', function () {
    result.innerHTML = '<span id="cursor">|</span>';
});

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
    }, 20);
}
