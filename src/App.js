import React, { useState } from "react";
import Loginsignup from "./loginsignup/loginsignup";
import Login from "./login/login";
import './login/login.css';


function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <Login /> : <Loginsignup />  }
      <button onClick={() => setShowLogin(!showLogin)}>
        Toggle Login/Signup
      </button>
    </div>
    
  );
}

export default App;
