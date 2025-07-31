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

    

    function func(hhh, event, arg){
      console.log(hhh, event, arg);
    }

const arr = [<p>1</p>, <p>2</p>, <p>3</p>];

    const arrLi = [
		<li>1</li>,
		<li>2</li>,
		<li>3</li>,
		<li>4</li>,
		<li>5</li>,
	];

  const arrFor = [];
  
  for (let i = 1; i <= 5; i++){
    arrFor.push(<li>{i}</li>)
  }

  const arrNum = [1, 2, 3, 4, 5];
  const resArrNum =[];

  for (const elem of arrNum){
    resArrNum.push(<p>{elem}</p>)
  }


  const arrNum1 = [1, 2, 3, 4, 5];

  const resArrNumMap = arrNum1.map(function(item){
      return (<>
        
       <p>{item}</p>
       <hr />
      </>
      );
      
  });

  const arrStr = ['a', 'b', 'c', 'd', 'e'];

  const arrStrMap = arrStr.map(function(item, index){
      return <li key={index}>{item}</li>
  });


   return (<>

      <div>
        <button onClick={event=>func('afsfas', event, 'Hello' )}>Кнопка</button>
        {arr}
      
      </div>

      <ul>
        {arrLi}
      </ul>

      <ul>
        {arrFor}
      </ul>

    <div>
      {resArrNum}
    </div>

       <div>
      {resArrNumMap}
    </div>
    
    <ul>
      {arrStrMap}
    </ul>
   
    

   </>
  );    
}

export default App;