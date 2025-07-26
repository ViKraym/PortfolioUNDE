
const A11 = document.getElementById('userNumber');
const resultRoot = document.getElementById('answer');
const myButton = document.getElementById('answerButton');
let botA = getRandomInt(1, 101);
console.log(botA);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



 myButton.addEventListener("click", function() {
    let userA = Number(A11.value);
    
    if (userA > botA) {
        return resultRoot.innerText = "Введите число поменьше";
    } else if (userA < botA) {
        return resultRoot.innerText = "Введите число побольше";
    } else {
        return resultRoot.innerText = "Поздравляем вы угадали";
    }

});




const userNumber = document.getElementById ('userNumber5');
const button1 = document.getElementById ('answerButton5');
const resultRoot1 = document.getElementById('answer5');
let number = 0;

