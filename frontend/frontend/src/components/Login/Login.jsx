import { useState } from 'react';
import './Login.css';
const Login = () => {

    const [password, setPassword] = useState(''); /* esto es diferente en el video minuto 5:39*/
    const [username, setUsername] = useState('');

    const handdleLogin = (e) => {
        e.preventDefault();
        console.log({
            username : username,
            password : password
        });
    }

    return(
        <div className='custom-form'>
            <form>
                <label className="custom-label">Username:</label>
                <input onChange={(event) => {setUsername(event.target.value)}} 
                       placeholder='username'
                       className='custom-input'
                       type='text' />
                <label className="custom-label">Password:</label>
                <input onChange={(event) => {setPassword(event.target.value)}}
                       placeholder='password'
                       className='custom-input'
                       type="password" />
                <button className="custom-button" onClick = {handdleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
