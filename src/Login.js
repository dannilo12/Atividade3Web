import React from "react";
import "./App.css";
import pare from './img/pare.png'

const Login = ({toggleLogin}) => {
  return (
    <div>
      <h2>Entre para testar o sistema</h2>
      <img className="fig" src={pare} alt="pare" />
      <br/>
      <button className="button" onClick={() => toggleLogin()}>ENTRAR</button>
    </div>
  )
}

export default Login;
