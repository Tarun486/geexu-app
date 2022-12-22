import React,{useState} from 'react';
import axios from 'axios';
import { setUserSession } from './Utility/Common';

const Login = (props) => {

    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setError(null);
        setLoading(true);
       
       axios.post("http://localhost:3000/users/signin",{
        email: email,
        password: password
       }).then(res => {
        setLoading(false);
        setUserSession(res.data.token, res.data.user);
        props.history.push('/homepage');
       }).catch(error => {
        setLoading(false);
        if(error.res.status === 301 || error.res.status === 300){
            setError(error.res.data.message);
        }else{
            setError("Please try again");
        }
       });
    }

    return(
        <div>
            <h5>Welcome!</h5>
            <p>Please login to continue.</p>
            <form >
            <div>
                  <input type='email' value={email}
                  onChange={e => setEmail(e.target.value)} />
                </div>
                <div><br />
                  <input type="password" value={password}
                  onChange={e => setPassword(e.target.value)} />
                </div>
                <div><br /><br />
                  {error && <div className='error'>{error}</div>}
                  <input type="button" value={loading ? 'Loading...' : 'Login'} 
                  disabled={loading} onClick={handleLogin}/>
                  <input type="button" value="Sign Up" /> 
                </div>
            </form>
        </div>
    )
};
export default Login;