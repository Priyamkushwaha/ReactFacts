import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//////////////////////////////////////////////////////////////////////////
// components are not reusable without props 
// as you know componenets are like function so props are like arguments passed to that function so that we can reuse that
// function add(){
//   return 1+2;
// }
// or
// function add(a,b){           ////here a and b work like a props
//   return a+b;
// }
////////
// to use javascript inside jsx
// use {}  
// example 
// function component (){
//   let name = "Priyam"
//   return (
//     <h1>{name}</h1>
//   )
// }
// how to use props 
// function component (props){                                    // u can choose whatever u want instead of props, props named is used coz of convention basically it passed a object 
//   let name = "Priyam"
//   return (
//     <h1>{name+props.number}</h1>

//   )
// }
// function App(){
//   return(
//     <div>
//       <component number="1"/>
//       <component number="2"/>
//       <component number="3"/>
//       <component number="4"/>
//     </div>
//   )
// }
//props destructuring ---basically object destructing
// conditionally rendering 
// {props.number && <h1>{props.number}<h1/>}  
// if truthy value then it will render whatever in right side of && 
// how to sent different data type through props intead of only string
// simple just use {} 
// example
// <component number="1" isOkay={true} />
                        //here isOkay is boolean value 
// mapping ( Array.map())
// reacts render array
// basically we map over data then make jsx elemet and then render it
// and this jsx elements components should have unique key 
// to pass a data ,you can pass all data item by defining or by item={item} or {..item}