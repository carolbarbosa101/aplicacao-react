import React, { useState } from "react";

function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);
        const response = await axios.post('http://localhost:3000/login',
            JSON.stringify({email, password}), 
        );
    };


    return (
      <div className="login-form-wrap">
        <h2>Login </h2>
        <form className="login-form">
          <input type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                />
          <input
                type="password"
                name="password"
                placeholder="password" 
                required
                onChange={(e) => setPassword(e.target.value)}
                 />
          <button type="submit"
                  className="button"
                  onClick={(e) => handleLogin(e)}
                  >
            <span class="button-content"> Login</span>
        </button>
        </form>
      </div>
    );
  }

  export default Login;