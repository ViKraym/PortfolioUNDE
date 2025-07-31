import React from 'react';
import { useState } from 'react';
// function App() {
// 	return <div>
// 		<p class='ferst_p'>Первая строка в react</p>
//     <p class='second_p'>Вторая строка в react</p>
//     <p class='third_p'>Третья строка в react</p>
// 	</div>;


// }

function App() {
const str = "Использование переменных";
const str1 = 'text str1';
const str2 = 'text str2';
const str3 = 'текст из переменной'
const str4 = "elem";


const name = 'user';
const age  = '30';

const arr = [1, 2, 3];
const arr1 = [1, 2, 3, 4, 5];

const obj = {a: 1, b: 2, c: 3};
const objUser = {name: 'john', surname: 'smit'};

const attr = 'block';
const str5 = <p>test данный абзац вставлен полностью с помощью переменной</p>;

const li1 = <li>text1</li>;
const li2 = <li>text2</li>;
const li3 = <li>text3</li>;

const items = <><li>text1</li><li>text2</li><li>text3</li></>;

const inputBlock = <><input /><br /></>;

const inputBlock1 = <><input id='isAdultInput'/><br /></>;

const num1 = 1;
const num2 = 2;
// условие для вставки по условию
	let text;
	const show = false;
	
	if (show) {
		text = 'text1';
	} else {
		text = 'text2';
	}
// условие для вставки по условию

const [boxOff, boxOn] = useState(false);

function showInput(event){
  boxOn(current => !current);
 };



// const num = 123;
// let digit = String(num).split('');

// const accumulator = digit.reduce(function(sum, digit) {
//             return sum + Number(digit);
//           }, 0); 

const num = 265;
let sum = 0;

const numString = String(num);

for (let i = 0; i < numString.length; i++) {
    const currentDigit = Number(numString[i]);
    sum = sum + currentDigit;
}

// console.log(sum);

const [userLock, userUnLock] = useState('');

function showInputAge (event){
  let ageUser = event.target.value;
  userUnLock(ageUser);
}



const [userNum, userInputNum] = useState('');


function showInputNum (event){
  let numUser = event.target.value;
  let sumUserNum = 0;
  userInputNum(numUser);
    const numUserString = String(numUser);
        for (let i = 0; i < numUser.length; i++){
          const currentDigitNumUser = Number(numUserString[i]);
          sumUserNum += currentDigitNumUser;
          console.log(sumUserNum);
        }               
}


   return (
  <> 
    <div>
          <p class='ferst_p'>Первая строка в react</p>
          <p class='second_p'>Вторая строка в react</p>
          <p class='third_p'>Третья строка в react</p>
    </div>
    <ul>
          <li>test 1</li>
          <li>test 2</li>
          <li>test 3</li>
          <li>test 4</li>
          <li>test 5</li>
          <li>test 6</li>
          <li>test 7</li>
          <li>test 8</li>
          <li>test 9</li>
          <li>test 10</li>
    </ul>
   
    <input />
    <input /><input /><input />

    <div> 
      {str}
    </div>

    <div>
      <p>{str1}</p>
      <p>{str2}</p>
    </div>

    <div> 
      {str} совместно {str3} с текстом
      можно вставить так же сколько угодно переменных например:
      <p>{str3}</p>
      <p>{str3}</p>
    </div>

    <p>Использование констант:</p>
    <div>
		name: {name} 
		age:  {age}
	</div>

    <p>Вствка массивов:</p>
    <div>
		<p>{arr[0]}</p>
		<p>{arr[1]}</p>
		<p>{arr[2]}</p>
	</div>

    <ul>
      <li>{arr1[0]}</li>
      <li>{arr1[1]}</li>
      <li>{arr1[2]}</li>
      <li>{arr1[3]}</li>
      <li>{arr1[4]}</li>
    </ul>
    
  <p>Вставка объектов:</p>
     <div>
		<p>{obj.a}</p>
		<p>{obj.b}</p>
		<p>{obj.c}</p>
	  </div>

    
		<p>
      name: <span>{objUser.name}</span>, <br/> surname: <span>{objUser.surname}</span>,
    </p>
		
    <p>Вставка переменных в атрибуты:</p>
      <div id={str4}>
          text
      </div>

      <div id={attr}>
          attr
      </div>

    <p>В перменных можно хранить теги целиком</p>

      <div>
        {str5}
      </div>

    <ul>
      <li>{li1}</li>
      <li>{li2}</li>
      <li>{li3}</li>
    </ul>

    <p>Вставка нескольких тегов записаных в одну перменную</p>
    
    <ul>
      {items}
    </ul>

    <p>Добавьте в див несколько инпутов, разделенных тегами br (вариант без перменных)</p>
      <div>
        <input /><br />
        <input /><br />
        <input /><br />
        <input /><br />
      </div>

    <p>Добавьте в див несколько инпутов, разделенных тегами br (вариант с перменными)</p>
      <div>
        {inputBlock}
        {inputBlock}
        {inputBlock}
        {inputBlock}
      </div>

    <p>JSX и таблицы</p>

    <p>Такой код в React приведет к выводу предупреждения в консоли, так как tr 
      должны быть вложены либо в тег tbody, либо в thead, либо в tfoot.</p>
    <table>
		<tr>
			<td>1</td>
			<td>2</td>
		</tr>
		<tr>
			<td>3</td>
			<td>4</td>
		</tr>
	</table>
  
  <p>От такого кода нет ошибки в консоли</p>
   <table>
		<tbody>
			<tr>
				<td>1</td>
				<td>2</td>
			</tr>
			<tr>
				<td>3</td>
				<td>4</td>
			</tr>
		</tbody>
	</table>

<p>Сделайте внутри дива список ul, содержащий в себе 10 тегов li</p>
  <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </div>
<p>Сделайте внутри дива таблицу с тремя рядами и тремя колонками</p>
    <div>
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>

<p>
      Внутри фигурных скобок можно не только вставлять переменные и константы, 
      но и выполнять произвольный JavaScript код. 
      Давайте, к примеру, в момент вставки найдем сумму двух констант:
</p>

    <div>
      {num1 + num2} 
    </div>

<p>Пример вывода имени</p>

    <div>
      result: {objUser.name + ' ' + objUser.surname}
    </div>

<p>вывод содержимого по условию</p>
    <div>
      {text}
    </div>
  
<p>Пусть в константе isAdult содержится true, если пользователю уже есть 18 лет, и false, если нет:</p>
<p>Сделайте так, чтобы в зависимости от значения isAdult на экране показался 
  или один абзац с текстом, или другой.</p>    
    


    
      <input 
      type='checkbox' 
      value={boxOff} 
      onChange={showInput}
      id="subscribe"
      name="subscribe"
      />

      <div className='userAsk'>
          {boxOff ? <p>вход разрешен</p> : <p>вход запрещен</p>}
      </div>



      <input type="number" value={userLock}  onChange={showInputAge}/>
      <div>
          Message: {userLock > 18 ? 'вход разрешен' : 'вход запрещен'}
      </div>

    

    <div>
      <input type="text" value={userNum}  onChange={showInputNum}/>
      <p>
        </p>
    </div>


<div>
     {sum}
    </div>
      




  </>
  );
}

export default App;