import React, { useState } from "react";

const SignUp = () => {
    
    const [name, setName] = useState("Display Name");
    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    const [passwordAgain, setPasswordAgain] = useState("Password Again");
    return(
        <div>
            <p>Please tell us a little about you</p>
            <form>
                <div>
                  <input type="name" value={name}
                  onChange={e => setName(e.target.value)}
                  /><br />
                </div>
                <div><br />
                  <input type='email' value={email}
                  onChange={e => setEmail(e.target.value)} />
                </div>
                <div><br />
                  <input type="password" value={password}
                  onChange={e => setPassword(e.target.value)} />
                </div>
                <div><br />
                  <input type="password" value={passwordAgain}
                  onChange={e => setPasswordAgain(e.target.value)} />
                </div>
                <div><br /><br />
                  <input type="button" value="Sign Up" />
                  <input type="button" value="Login" /> 
                </div>
            </form>
        </div>
    )
}

export default SignUp;