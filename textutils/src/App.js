// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './Component/About';
import Alart from './Component/Alart';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Routes
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')  //Enable dark Mode
  const [alart, setAlart] = useState(null)  

  const showAlart = (message, type) => {
    setAlart({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlart(null)
    }, 2000);
  }




  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlart("Light Mode is enable", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#160838';
      showAlart("Dark Mode is enable", "success");
    }
  }


  // const toggleModeGray = () => {
  //   document.body.style.backgroundColor = 'secondary';
  //   showAlart("Gray Mode is enable", "success");
  // }
// const toggleModeGreen = () => {
//     document.body.style.backgroundColor = 'success';
//     showAlart("Gray Mode is enable", "success");
//   }
// const toggleModeRed = () => {
//     document.body.style.backgroundColor = 'denger';
//     showAlart("Gray Mode is enable", "success");
//   }
// const toggleModeYellow = () => {
//     document.body.style.backgroundColor = 'warning';
//     showAlart("Gray Mode is enable", "success");
//   }


  return (
    <>
      <Alart alart = {alart} />
      <Navbar title = "TextUtils" home = "HOME"  mode = {mode} toggleMode = {toggleMode} />
      <TextForm showAlart = {showAlart} heading = "Write anything what you want" mode = {mode} /> 
      <About />
    </>
  );
}

export default App;
