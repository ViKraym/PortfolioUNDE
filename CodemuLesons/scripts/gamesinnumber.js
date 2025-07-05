
const A = document.getElementById('userNumber');
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
    let userA = Number(A.value);
    
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

// button1.addEventListener("click", function() {
//     if (number <=1) {
//         number += 1;
//         // answer5.innerHTML = number;
        
//     } else {
//          number = 0;
//          let x = getReloadRandomInt(1, 101);
//          console.log(x);
//     }
// });

// function getReloadRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// button1.addEventListener("click", function() {
    
//     let userB = Number(userNumber.value);

//     function cnt(){
//      if (number < 5) {
//         number += 1;
//         answer5.innerHTML = number; 
//     } else {
//          number = 0;
//          let x = getReloadRandomInt(1, 101);
//          console.log(x);
//     }
//     };

//     cnt();

//     function gameusl(){
//         if (userB > x) {
//             return resultRoot1.innerText = "Введите число поменьше";
//         } else if (userB < x) {
//             return resultRoot1.innerText = "Введите число побольше";
//         } else {
//             return resultRoot1.innerText = "Поздравляем вы угадали";
//         }
// }

//     gameusl();

// });

