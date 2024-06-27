const myValue = document.getElementById('myValue');
const myRoll = document.getElementById('myRoll');
const result = document.getElementById('result');
const clearScreen = document.getElementById('clear');
let level = 1;
let maximumLevel = 5;
let min = 1;
let max = 100;
let message = "";
let isTyping = false;
let isReload = false;
let gameCompleted = false;
let randomNum = generateRandomNumber();

myRoll.addEventListener('click', function (e) {
    if (!isTyping) {
        try {
            let value = Number(myValue.value);
            if (isNaN(value)) {
                alert('Enter a integer number!');
                myValue.value = "";
            } else if (value > max || value < min || value == "") {
                alert(`Enter a integer number between ${min} - ${max}!`);
                myValue.value = "";
            }
            else if (gameCompleted) {
                result.innerHTML = "";
                isTyping = true;
                message = "You completed the game restart to play again!";
                typeString(message, result, function () {
                    isTyping = false;
                });
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

window.addEventListener('load', function () {
    const [navigationEntry] = performance.getEntriesByType('navigation');
    if (navigationEntry.type === 'reload') {
        isReload = true;
        result.innerHTML = "";
        message = `Level ${level} Random number range ${min} - ${max}`;
        isTyping = true;
        typeString(message, result, function () {
            isTyping = false;
        });
    } else {
        startWarning();
    }
});

clearScreen.addEventListener('click', function () {
    if (!isTyping) {
        result.innerHTML = '<span id="cursor">|</span>';
    } else {
        alert('Please wait for the current animation to finish.');
    }
});

function generateRandomNumber() {
    let randomValue = Math.floor(Math.random() * max) + min;
    console.log(randomValue);
    return randomValue;
}

function displayResult(value) {
    if (value > randomNum) {
        message = `Decrease your value`;
    }
    else if (value < randomNum) {
        message = `increase your value`;
    }
    else {
        message = `Congrats you guessed the Random value ${randomNum}`;
        level++;
        max += 25;
        setTimeout(function () {
            levelUpdate(level, max);
        }, 3000);
    }
    typeString(message, result, function () {
        isTyping = false;
        if (value == randomNum) {
            randomNum = generateRandomNumber();
        }
    });
}


function startWarning() {
    message = "Please read the about section before start!";
    if (!isReload) {
        isTyping = true;
        result.innerHTML = "";
        typeString(message, result, function () {
            isTyping = false;
            setTimeout(function () {
                levelUpdate(level, max);
            }, 2000);
        });
    }
}

function levelUpdate(level, max) {
    result.innerHTML = "";
    if (level == maximumLevel+1) {
        message = `Congratulations you completed the game`;
        gameCompleted = true;
    } else {
        message = `Level ${level} Random number range ${min} - ${max}`;
    }
    isTyping = true;
    typeString(message, result, function () {
        isTyping = false;
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

const back = document.getElementById('exitBtn');
back.addEventListener('click', function(e) {
    window.location.href = "Start.html";
});