// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import AddTodo from "./AddTodo";
import AppName from "./AppName";
import Help from "./Help";
import SecondHelp from "./SecondHelp";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
    
   <AppName/><br/>
    <AddTodo/><br/> 
    <div class="items-container">
    <Help></Help><br/>
<SecondHelp></SecondHelp>
    </div>
    </center>
  );
}

export default App;
