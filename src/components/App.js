import React, {Component, useState} from "react";
// import Data from '../data';
import '../styles/App.css';

const App = (props) => {
  const Data = props.slides;
  // console.log(props.slides);
  const [item,setItem] = useState(Data[0]);
  const [preVal,setpreVal] = useState(true);
  const [nextVal,setnextVal] = useState(false);

  function prev(){
    let temp = Data.indexOf(item) - 1;
      setItem(() => Data[temp]);

    setnextVal(false);
    if(temp == 0){
      setpreVal(true);
    }
  }

  function next(){
    let temp = Data.indexOf(item)+1;
      setItem(() => Data[temp]);

    setpreVal((previo) => false);

    if(temp == 4){
      setnextVal(true);
      
    }
  }

  function restart(){
setItem(() => Data[0]);
setpreVal(true);
setnextVal(false);
  }

  return (
    <>
    
    <button data-testid="button-prev" disabled={preVal} onClick={prev}>Prev</button>
    <button data-testid="button-next" disabled={nextVal}  onClick={next}>Next</button>
    <button data-testid="button-restart" disabled={preVal}  onClick={restart}>Restart</button>

    <h1 data-testid="title">{item.title}</h1>
    <p data-testid="text">{item.text}</p>
    </>
  )
}


export default App;
