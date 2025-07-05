
const num = document.getElementById('number');
const resultArea = document.getElementById('area');
const resultSperimeter = document.getElementById('perimeter');
const myButton = document.getElementById('hideButtonSquare');

 myButton.addEventListener("click", function() {

  var inputValue = Number(num.value);
  resultArea.innerText = Math.pow(inputValue, 2);
  resultSperimeter.innerText = (inputValue) * 4;

});


const numRectangleA = document.getElementById('numberRectangleA');
const numRectangleB = document.getElementById('numberRectangleB');
const resultAreaRectangle = document.getElementById('areaRectangle');
const resultSperimeterRectangle = document.getElementById('perimeterRectangle');
const myButtonRectangle = document.getElementById('hideButtonRectangle');

 myButtonRectangle.addEventListener("click", function() {
  // alert();
  var inputValueRectangleA = Number(numRectangleA.value);
  var inputValueRectangleB = Number(numRectangleB.value);
  resultAreaRectangle.innerText = inputValueRectangleA * inputValueRectangleB;
  resultSperimeterRectangle.innerText = (inputValueRectangleA + inputValueRectangleB)*2;

});



const numCircleA = document.getElementById('numberCircleR');
const numCircleB = document.getElementById('numberCircleB');
const resultAreaCircle = document.getElementById('areaCircle');
const resultSperimeterCircle = document.getElementById('perimeterCircle');
const myButtonCircle = document.getElementById('hideButtonCircle');
const Pi = 3.14;

 myButtonCircle.addEventListener("click", function() {

  var inputValueCircleR = Number(numCircleA.value);
  resultAreaCircle.innerText = (Math.pow(inputValueCircleR, 2)) * Pi;
  resultSperimeterCircle.innerText = (Pi*2)*inputValueCircleR;

});



const numTriangleA = document.getElementById('numberTriangleA');
const numTriangleB = document.getElementById('numberTriangleB');
const numTriangleC = document.getElementById('numberTriangleC');

const myButtonTriangle = document.getElementById('hideButtonTriangle');

const resultAreaTriangle = document.getElementById('areaTriangle');


 myButtonTriangle.addEventListener("click", function() {
  let A = Number(numTriangleA.value);
  let B = Number(numTriangleB.value);
  let C = Number(numTriangleC.value);
  
  let halfPerimetr = Number((A+B+C)/2);
  let perimeter = Math.sqrt(halfPerimetr*(halfPerimetr-A)*(halfPerimetr-B)*(halfPerimetr-C));

  if (isNaN(perimeter) || perimeter == 0) {
    resultAreaTriangle.innerText = "Такого треугольника не существует";
  } else {
    
  resultAreaTriangle.innerText = Number(Math.sqrt(halfPerimetr*(halfPerimetr-A)*(halfPerimetr-B)*(halfPerimetr-C)));
  }

  

});
