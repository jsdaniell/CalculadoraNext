"use client";

import Button from '@/components/Button';
import { useState } from 'react';


export default function App() {
  const [theme, setTheme] = useState("light")
  const [result, setResult] = useState(0)
  const [fieldCalc, setFieldCalc] = useState("")

  function changeTheme(){
    setTheme(theme === "light" ? "dark" : "light")
  }

  function onChangeField(event){
    setFieldCalc(event.target.value)
  }

  function calculate(){
    // eslint-disable-next-line no-eval
    setResult(eval(fieldCalc))
  }

  function reset(){
    setResult(0)
  }

  return (
    <div className={`container ${theme}`}>
        <div className="eachCol left">
            <div>
                <div className="textHeader">simples cal</div>
                <div onClick={changeTheme} id="themeButton" className="containerIcon">
                    <i id="iconTheme" className="fas fa-moon"></i>
                </div>
            </div>
            <input onChange={onChangeField} id="inputCalc" placeholder="240x30" />
            <Button funcao={calculate} texto='calcular' />
            <Button funcao={reset} texto='reset'/>
            <div>*press enter to find out the total</div>
        </div>
        <div className="eachCol right">
            <div id="historicButton" className="containerIcon">
                <i id="iconTheme" className="fas fa-history buttonRight"></i>
            </div>
            <div id="historicView" className="containerHistoric">
              
            </div>
            <div id="result" className="resultText">{result}</div>
            <div>→ view keyboard shortcuts</div>
        </div>
    </div>
  );
}
