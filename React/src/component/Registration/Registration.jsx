import axios from 'axios';
import React,{useState} from 'react';
import './Registration.css'


const Registration = () => {
    const[fullname,setFullName]=useState('')
    const[address,setAddress]=useState('')
    const[email,setEmail]=useState('')
    const[uname,setUname]=useState('')
    const[password,setPassword]=useState('')
    const[compassword,setCompassword]=useState('')

    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8081/user/users",
        {
        
        fullname: fullname,
        address : address,
        email : email,
        uname : uname,
        password :password,
        compassword :compassword
        
        });
          alert("Employee Registation Successfully");
          setFullName("");
          setAddress("");
          setEmail("");
          setUname("");
          setPassword("");
          setCompassword("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
  }


  return (
    <div className='bob'>
      <div className='wrapper'>
          <form action="">
              <h1>Sign UP</h1>
              <div className='input-box'>
                  <input type="text" placeholder='FullName' value={fullname} required 
                    onChange={(event) =>
                      {
                        setFullName(event.target.value);      
                      }}/>
                  
              </div>

              <div className='input-box'>
                  <input type="text" placeholder='Address' required value={address}
                    onChange={(event) =>
                      {
                        setAddress(event.target.value);      
                      }}/>
                  
              </div>
              <div className='input-box'>
                  <input type="email" placeholder='E-mail' required value={email}
                    onChange={(event) =>
                      {
                        setEmail(event.target.value);      
                      }}/>
                  
              </div>
              <div className='input-box'>
                  <input type="text" placeholder='UserName' required value={uname}
                    onChange={(event) =>
                      {
                        setUname(event.target.value);      
                      }}/>
                  
              </div>
              <div className='input-box'>
                  <input type="password" placeholder='Password' required value={password}
                    onChange={(event) =>
                      {
                        setPassword(event.target.value);      
                      }}/>
                  
              </div>
              <div className='input-box'>
                  <input type="password" placeholder='ConformPassword' required value={compassword}
                    onChange={(event) =>
                      {
                        setCompassword(event.target.value);      
                      }}/>
                
              </div>


              <button type='submit'onClick={save}>Sign Up</button>
              <div className="register-link">
                  <p>I have acount <a href="/login">Sign in</a></p>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Registration