import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// function App() {
// 	return <div>
// 		<p class='ferst_p'>Первая строка в react</p>
//     <p class='second_p'>Вторая строка в react</p>
//     <p class='third_p'>Третья строка в react</p>
// 	</div>;


// }

function App() {

    const product = [
        {name: 'Пицца', cost: '600 Руб.'},
        {name: 'Суп', cost: '300 Руб.'},
        {name: 'Салат', cost: '200 Руб.'}
    ];

    const res = product.map(function(item) {
		return <p>{item.name} {item.cost}</p>;
	});

    const productBox = product.map(function(item, index) {
        return (<>
            <div key={index}>
                <span>{item.name}: </span>
                <span>{item.cost}</span>
            </div>
        </>);       
    });

    const users = [
	{id:1, name: 'user1', surn: 'surn1', age: 30},
	{id:2, name: 'user2', surn: 'surn2', age: 31},
	{id:3, name: 'user3', surn: 'surn3', age: 32},
    ];
    
     const usersBox = users.map(function(item, index) {
        return <li key={item.id}>{item.name}: {item.surn}</li>

    });


    const prods1 = [
        {id: 1, name: 'product1', cost: 100},
        {id: 2, name: 'product2', cost: 200},
        {id: 3, name: 'product3', cost: 300},
    ];

    const res1 = prods1.map(function(item) {
		return <p key={item.id}>
			<span>{item.name}: </span>
			<span>{item.cost}</span>
		</p>
	});


const usersTable = [
	{id: 1, name: 'user1', surn: 'surn1', age: 30},
	{id: 2, name: 'user2', surn: 'surn2', age: 31},
	{id: 3, name: 'user3', surn: 'surn3', age: 32},
];

      const rows = usersTable.map(function(item) {
		return <tr key={item.id}>
			<td>{item.name}</td>
			<td>{item.surn}</td>
            <td>{item.age}</td>
		</tr>
	});


    function id(){
        const uniqueId = uuidv4();
    }

 const usersTableId = [
	{id: id(), name: 'user1', surn: 'surn1', age: 30},
	{id: id(), name: 'user2', surn: 'surn2', age: 31},
	{id: id(), name: 'user3', surn: 'surn3', age: 32},
];
      
   const rowsId = usersTableId.map(function(item) {
		return <tr key={item.id}>
			<td>{item.name}</td>
			<td>{item.surn}</td>
            <td>{item.age}</td>
		</tr>
	});
   return (<>

     <div>
        {productBox}
     </div>

     <ul>
        {usersBox}
     </ul>

    <div>
        {res1}
     </div>

    <table>
        <thead>
            <td>Имя</td>
            <td>Фамилия</td>
            <td>Возраст</td>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>

<table>
        <thead>
            <td>Имя</td>
            <td>Фамилия</td>
            <td>Возраст</td>
        </thead>
        <tbody>
            {rowsId}
        </tbody>
    </table>

    

   </>
  );    
}

export default App;