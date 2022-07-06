import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from "../data";
import Show from "./Show";

const App = () => {
  return (
    <>
    <Show data={slides}></Show>
    </>
  )
}


export default App;
