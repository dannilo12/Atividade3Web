import React, { useState } from "react";
import "./App.css";
import CaixaDeEntrada from "./CaixaDeEntrada"
import Login from "./Login"

const App = () => {
  const [logged, setLogged] = useState(false);

  const toggleLogin = () => {
    setLogged(!logged);
  }

  return (
    
    <div>
      <center>
        { !logged && <Login toggleLogin={toggleLogin}/> }
        { logged && <>
          <h1>Olá, seja bem vindo!</h1>
          <CaixaDeEntrada />
          <button className="button" onClick={() => toggleLogin()}>SAIR</button>
        </> }
        </center>
    </div>
  
  )
}

export default App;
