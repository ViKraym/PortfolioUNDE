
const A11 = document.getElementById('userNumber');
const resultRoot123 = document.getElementById('answer');
const myButton1111 = document.getElementById('answerButton');
let botA = getRandomInt(1, 101);
console.log(botA);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



 myButton1111.addEventListener("click", function() {
    let userA = Number(A11.value);
    
    if (userA > botA) {
        return resultRoot123.innerText = "Введите число поменьше";
    } else if (userA < botA) {
        return resultRoot123.innerText = "Введите число побольше";
    } else {
        return resultRoot123.innerText = "Поздравляем вы угадали";
    }

});






