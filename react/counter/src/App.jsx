import { useState } from 'react';
import './App.css';

function App() {

//good practise to keep let coz like in this i did counter+1 inside but if i stored it to counter and then passed counter then it will give errr
  let [counter, setCounter] = useState(20) 
  
  //setCounter is a method which controls counter, and updates ui
  // let counter=20;

  const addValue=() => {
    console.log("clicked", {counter});
    //counter= counter+1;
    if(counter==20)
      return;
    else
    setCounter(counter+1);
  }

  const removeValue= () => {
    console.log("clicked", counter);
    if(counter==0)
      return;
    else
    setCounter(counter-1);
  }


  return (
    <>
 

    <h1>chai aur react</h1>

    <h2>counter value: {counter}</h2>

    <button
    onClick={addValue}>add value</button>
    <br/>
    <button
    onClick={removeValue}>remove value</button>
       
    
    </>
  )
}

export default App
