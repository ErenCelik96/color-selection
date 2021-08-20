import Slidered from "./components/sliders/Slidered";
import Sliderblue from "./components/sliders/Sliderblue";
import Sliderwhite from "./components/sliders/Sliderwhite";
import './App.css';
import { useState } from "react"

function App() {
  const[isWhite, setWhite] = useState(true);
  const[isRed, setRed] = useState(false);
  const[isBlue, setBlue] = useState(false);
  const[isText, setText] = useState("White");

  return (
    <div className="App">
      {isBlue && <Sliderblue/>}
      {isWhite && <Sliderwhite/>}
      {isRed && <Slidered/>}
      <h1>Apple | Iphone {isText}</h1>
      <div>
        <button onClick={()=>{
          setWhite(true)
          setRed(false)
          setBlue(false)
          setText("White")}} type="button" className="btn btn-light"></button>
        <button onClick={()=>{
          setRed(true)
          setWhite(false)
          setBlue(false)
          setText("Red")}} type="button" className="btn btn-danger"></button>
        <button onClick={()=>{
          setBlue(true)
          setWhite(false)
          setRed(false)
          setText("Blue")}} type="button" className="btn btn-primary"></button>
      </div>
    </div>
    
  );
}

export default App;
