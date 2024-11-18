import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const LoginForm = () => {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:8081/user/login', {
            uname : uname,
            password :password
        });
        const userData = response.data;
        console.log(userData)
        localStorage.setItem('token', userData.id.toString());
        localStorage.setItem('address', userData.address.toString());
        localStorage.setItem('email', userData.email.toString());
        localStorage.setItem('fullname', userData.fullname.toString());

        const token = localStorage.getItem('token')
        const fullname = localStorage.getItem('fullname')
        const address= localStorage.getItem('address')
        const email= localStorage.getItem('email')
        console.log( 'token is: ' + token)
        
        // Assuming the response contains the user's login information
        if (response.status === 200) {
            navigate('/home');
        } else {
            alert('Incorrect username or password');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred while logging in');
    }
      
      }
  return (
    <div className='bob'>
        <div className='wrapper'>
            <form action="">
                <h1>Sign in</h1>
                <div className='input-box'>
                    <input type="text" placeholder='username' required value={uname}
                    onChange={(event) =>
                        {
                        setUname(event.target.value);      
                        }}/>
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='password' required value={password}
                    onChange={(event) =>
                        {
                        setPassword(event.target.value);      
                        }} />
                    <FaLock  className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type='submit' onClick={login}>Sign in</button>
                <div className="register-link">
                    <p>Don't have acount <Link to="/register">Sign Up</Link></p>
                </div>
            </form>
        </div>
    </div>    
  )
}

export default LoginForm
