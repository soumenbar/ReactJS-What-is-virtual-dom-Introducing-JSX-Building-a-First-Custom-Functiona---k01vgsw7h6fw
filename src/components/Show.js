
import React, {useState } from "react";
export default function Show(props){

    //console.log(typeof(props.data));
   // let ar=[...props.data];
    // let value=props.data.map((ele)=>ele.text)
    //let nextflg=false;
    let [count, setCount] = useState(0);
   let [nextflg, setNextflg] = useState(false);
   let [prevflg, setPrevflg] = useState(true);
   let [resetflg, setResetflg] = useState(true);
    //let [count, setCount] = useState(0);
    //let [count, setCount] = useState(0);

     const length=props.data.length;
     function restart(){
        setCount(0);
        setResetflg(true);
        setNextflg(false);
        setPrevflg(true); 
     }
     function previous(){
        if(count>0){
            setCount(count-1);
            setNextflg(false);
            setResetflg(false);
            
           // console.log(count);
         }
         if(count==1 ){
           // console.log(count);
            setPrevflg(true);
            setResetflg(true);


         }
        
    }
    function next(){
        if(count<length-1){
            setCount(count+1);
            setPrevflg(false);
            setResetflg(false);
            
           // console.log(count);
         }
         if(count==length-2){
           // console.log(count);
            setNextflg(true);
         }
        
    }
    
    
    return(
    <> 
            <h1 data-testid={"title"}>{props.data[count].title}</h1>
             <p data-testid={"text"}>{props.data[count].text}</p>
        <button data-testid="button-restart" disabled={resetflg} onClick={restart}>Restart</button>
        <button data-testid="button-prev" disabled={prevflg}  onClick={previous}>Prev</button>
        <button data-testid="button-next" disabled={nextflg} onClick={next}>Next</button>
    </>
    );
}