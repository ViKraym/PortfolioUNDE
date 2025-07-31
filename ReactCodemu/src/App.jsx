import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
// function App() {
// 	return <div>
// 		<p class='ferst_p'>Первая строка в react</p>
//     <p class='second_p'>Вторая строка в react</p>
//     <p class='third_p'>Третья строка в react</p>
// 	</div>;


// }

function App() {
    const [name, setName] = useState('viktor');
    const [surname, setsurName] = useState('ivanov');
    const [age, setAge] = useState('18')
    const [prod, setProd] = useState('prod');
    // const name = state[0];
    // const setName = state[1];

    
    
    function clickHandler(){
        setProd('xxxxx')
    }

    const [inCart, setInCart] = useState(false);

    const [count, setCount] = useState(0);
        function clickHandlerPlus(){
            setCount(count + 1);
        }
        function clickHandlerMinus(){
            setCount(count - 1);
        }

        const [value1, setValue1] = useState('text');

        function handleChange1(event){
            setValue1(event.target.value);
        }

        const [value2, setValue2] = useState();

        function handleChange2(event){
            setValue2(event.target.value);
        }

        const [valueQadro, setValueQadro] = useState(0);

        function handleChangeQadro(event){
            setValueQadro(event.target.value);
        }
        
        const [valueLen, setValueLen] = useState('');

        function handleChangeLen(event){
            setValueLen(event.target.value);
        }

        const [valueSqare, handleChangeSqare] = useState('');

        function square(numUser){
            return numUser**2
        }

        function ChangeSqare(event){
            handleChangeSqare(event.target.value);
        }

        
        const date = `${new Date().getFullYear()}`;
        const [valueAge, setValueAge] = useState({date});

        function userYears(event){
            setValueAge(event.target.value);
        }

        const [valueFar, setValueCels] = useState('');

        function userFar(event){
            setValueCels(event.target.value);
        }
        
        const [value11, setValue11] = useState(0);
        const [value12, setValue12] = useState(0);
        const [value13, setValue13] = useState(0);
        const [value14, setValue14] = useState(0);
        const [value15, setValue15] = useState(0);

         function sredAref1(event){
            setValue11(+event.target.value);
        }
        
        function sredAref2(event){
            setValue12(+event.target.value);
        }

        function sredAref3(event){
            setValue13(+event.target.value);
        }

        function sredAref4(event){
            setValue14(+event.target.value);
        }
        function sredAref5(event){
            setValue15(+event.target.value);
        }

        function sredArefSum (){
            return (value11+value12+value13+value14+value15)/5
        }














   return (<>
    
    <section>
        <button onClick={clickHandler}>скрыть продукт</button>
        <button onClick={()=> setProd("prod")}>показать продукт</button>
         <div className='prodBox'>
            {prod}
         </div>
     <hr />
         <div>
            <button onClick={() => setInCart(!inCart)}> 
                {inCart ? "Забанить" : "Разбанить"}
            </button>
           
            <span>: Пользователя</span>
            <div>Пользователь {inCart ? "Не забанен" : "забанен"}</div>
         </div>
    <hr />
    <p className='task'>Пусть в стейте хранится число. Выведите это число в абзаце. 
        Сделайте две кнопки. 
        Пусть первая кнопка увеличивает возраст на единицу, а вторая - уменьшает его.</p>
        <div></div>
        <div className='boxAge'>
            <button onClick={clickHandlerMinus}>-</button>
            <div>Возраст: {count}</div>
            <button onClick={clickHandlerPlus}>+</button>
        </div>
    <hr />
    <h1>Работа с инпутами</h1>
    <p>Работа с инпутами в React просиходит с помощью стейтов. 
    Каждому инпуту назначается свой стейт, содержащий в себе value инпута.</p>
    
    <p className='task'>Сделайте два инпута. Пусть текст первого инпута 
        выводится в первый абзац, а текст второго инпута - во второй абзац.</p>
        <div>
            <input type="text" value={value1} onChange={handleChange1}/>
            <div>
                Вы ввели: {value1}
            </div>
        </div>
        <div>
            <input type="number" value={value2} onChange={handleChange2}/>
            <div>
               Вы ввели: {value2}
            </div>
        </div>
    
      <p className='task'>Дан инпут. Дан абзац. 
        Сделайте так, чтобы при вводе числа в инпут, 
        в абзаце выводилось квадрат этого числа.</p>
         <div>
            <input type="number" value={valueQadro} onChange={handleChangeQadro}/>
            <div>
                Квадрат {valueQadro} = {valueQadro**2}
            </div>
        </div>
    <p className='task'>Дан инпут. Дан абзац. 
        Сделайте так, чтобы при вводе текста в инпут, 
        в абзаце выводилось количество введенных в инпут символов.</p>
        <div>
            <input type="text" value={valueLen} onChange={handleChangeLen}/>
            <div>
              Количество введенных символов: {valueLen.length}
            </div>
        </div>
    <hr />
        <h4>Не обязательно производить какие-либо действия 
        непосредственно перед выводом стейта, можно передать значение value в функцию  </h4>
    
        <div>
            <input type="text" value={valueSqare} onChange={ChangeSqare}/>
            <div>
              Квадрат числа {valueSqare} = {square(valueSqare)} (данное значение получено с использованием функции)
            </div>
        </div>
    
    <hr />
    <p className='task'>Дан инпут и абзац. В инпут вводится возраст пользователя. 
            Сделайте так, чтобы при наборе текста, 
            в абзаце автоматически появлялся год рождения пользователя.</p>
        <div>
            <p>Возраст пользователя: <input type="text" onChange={userYears}/></p>
            <p>Год рождения пользователя: <input type="number" value={date - valueAge}/></p>
        </div>
    
    <p className='task'>Дан инпут и абзац. В инпут вводятся градусы Фаренгейта. 
        Сделайте так, чтобы при наборе текста, 
        в абзаце автоматически выполнялась конвертация в градусы Цельсия.</p>
        <div>
            <p>Фаренгейт: <input type="text" onChange={userFar}/></p>
            <p>Цельсий: <input type="number" value={Math.round((valueFar - 32)*(5/9))}/></p>
        </div>
    
    <hr />
    <p className='task'>Даны 5 инпутов. Сделайте так, 
        чтобы при вводе чисел в наши инпуты в абзац 
        выводилось среднее арифметическое введенных чисел.</p>
        <div>
            <p className='parNum'>Первая перменная: <input type="number" value={value11} onChange={sredAref1}/></p>
            <p className='parNum'>Вторая перменная: <input type="number" value={value12} onChange={sredAref2}/></p>
            <p className='parNum'>Вторая перменная: <input type="number" value={value13} onChange={sredAref3}/></p>
            <p className='parNum'>Вторая перменная: <input type="number" value={value14} onChange={sredAref4}/></p>
            <p className='parNum'>Вторая перменная: <input type="number" value={value15} onChange={sredAref5}/></p>
            <p className='parNum'>Среднее арефметическое чисел {value11}, {value12}, {value13}, {value14}, {value15} = {sredArefSum()}</p>
        </div>
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
        
    </section>
        <div>
        
        </div>

   </>
  );    
}

export default App;