import React, { useState } from "react";
import "./App.css";

import check from './img/check.png'

const CaixaDeEntrada = () => {
  const [text, setText] = useState(0);
  return (
    <div>
        <img className="fig" src={check} alt="checado" />
        <center>
            <input type="text" name="entrada" id="entrada"onChange={(e) => setText(e.target.value)}/>
            <p> a quantidade de caracteres digitados foi: 
            <span> <strong>
                {text.length} 
            </strong> </span>  caracteres</p>
      </center>
    </div>
  );
};

export default CaixaDeEntrada;
