
const A = document.getElementById('numberA');
const B = document.getElementById('numberB');
const C = document.getElementById('numberC');
const resultRoot = document.getElementById('root');
const resultRoot2 = document.getElementById('root2');
const myButton = document.getElementById('hideButtonRoot');

 myButton.addEventListener("click", function() {
  let AA = Number(A.value);
  let BB = Number(B.value);
  let CC = Number(C.value);
  
  let D = (Math.pow(BB, 2))-4*(AA*(-CC));

    if (D > 0) {
    //  alert(D);
        resultRoot.innerText = (-BB - Math.sqrt(D))/(AA*2);
        resultRoot2.innerText = (-BB + Math.sqrt(D))/(AA*2);

  } else if (D == 0) {
    resultRoot.innerText = -BB/(AA*2);
    resultRoot2.innerText = "Уравнение имеет единственный корень";
  } else {
    resultRoot.innerText = "Корней нет";
    resultRoot2.innerText = "Корней нет";
  }
});

const A1 = document.getElementById('numberA1');
const B1 = document.getElementById('numberB1');
const C1 = document.getElementById('numberC1');
const resultRoot1 = document.getElementById('root1');
const resultRoot21 = document.getElementById('root21');
const myButton1 = document.getElementById('hideButtonRoot1');


 myButton1.addEventListener("click", function() {

  let AA = Number(A1.value);
  let BB = Number(B1.value);
  let CC = Number(C1.value);
  let maxNumber = Math.max(AA,BB,CC);

  
  resultRoot1.innerText = maxNumber;

if (Math.sqrt(maxNumber) == AA) {
        let maxis = AA;

        if (Math.sqrt(maxis)==(Math.sqrt(BB)+Math.sqrt(CC))){
        resultRoot21.innerText = "Да числа являются тройкой"
        }

} else if (Math.sqrt(maxNumber) == BB){
        let maxis = BB;

        if (Math.sqrt(maxis)==(Math.sqrt(AA)+Math.sqrt(CC))){
        resultRoot21.innerText = "Да числа являются тройкой"
        }


} else if (Math.sqrt(maxNumber) == CC) {
        let maxis = CC;

        if (Math.sqrt(maxis)==(Math.sqrt(AA)+Math.sqrt(BB))){
        resultRoot21.innerText = "Да числа являются тройкой"
        }

} else {
        resultRoot21.innerText = "Нет числа не являются тройкой"
}

});
// for (let i = 0; i < arr.length, i++;) {
//     if (arr[i] != arr[i+1] && arr[i] != arr[i-1]) {
//       let maxis = arr[i];
//       alert(arr[i]);
//         // if ((maxis)**2 == (arr[(i+1)**2])+(arr[(i-1)**2])) {
//         //   resultRoot21.innerText = "Да числа являются тройкой"
//         // } else {
//         //   resultRoot21.innerText = "Нет числа не являются тройкой"
//         // }
//     }
// }
//  })

const A2 = document.getElementById('numberA2');
const resultRoot12 = document.getElementById('root12');
const myButton12 = document.getElementById('hideButtonRoot2');

 myButton12.addEventListener("click", function() {

  let delNumber = Number(A2.value);
  const arr = [];
  
  for (let i = 1; i <= delNumber; i++) {
    if (delNumber % i === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  resultRoot12.innerText = arr;
});



const numbers4 = document.getElementById('number4');
const numbers4_1 = document.getElementById('number4_1');
const resultRoot4 = document.getElementById('root4_1');
const myButton4 = document.getElementById('hideButtonRoot4');

 myButton4.addEventListener("click", function() {

  let delNumber = Number(numbers4.value);
  let delNumber1 = Number(numbers4_1.value);
  const arr4 = [];
  
  for (let j = 1; j <= delNumber; j++) {
    if (delNumber % j === 0 && delNumber1 % j === 0) {
      arr4.push(j);
    }
  }
  console.log(arr4);
  resultRoot4.innerText = arr4;
});

const numbers5 = document.getElementById('number5');
const numbers5_1 = document.getElementById('number5_1');
const resultRoot5 = document.getElementById('root5_1');
const myButton5 = document.getElementById('hideButtonRoot5');

let delNumber = Number(numbers5.value);
let delNumber1 = Number(numbers5_1.value);



myButton5.addEventListener("click", function czz() {

let delNumber = Number(numbers5.value);
let delNumber1 = Number(numbers5_1.value);
const arr5 = [];

if (delNumber >= delNumber1) {
  let k = delNumber;
    for (let j = 1; j <= k; j++) {
    if (delNumber % j === 0 && delNumber1 % j === 0) {
    arr5.push(j);
    }  
  } 
} else {
  k = delNumber1;
    for (let j = 1; j <= k; j++) {
    if (delNumber % j === 0 && delNumber1 % j === 0) {
    arr5.push(j);
    }  
}
}
resultRoot5.innerText = arr5.at(0);
});




const numbers6 = document.getElementById('number6');
const numbers6_1 = document.getElementById('number6_1');
const resultRoot6 = document.getElementById('root6_1');
const myButton6 = document.getElementById('hideButtonRoot6');

myButton6.addEventListener('click', function (){


  
});


function findLCM() {
  const num1 = parseInt(document.getElementById("number6").value);
  const num2 = parseInt(document.getElementById("number6_1").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("root6_1").innerText = "Пожалуйста, введите числа.";
    return;
  }

  function gcd(a, b) {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  }

  const lcm = (num1 * num2) / gcd(num1, num2);
  document.getElementById("root6_1").innerText = "Наименьшее общее кратное: " + lcm;
}