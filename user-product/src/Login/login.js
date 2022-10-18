import React from 'react'
import { Link} from 'react-router-dom';
import './login.css'
import Products from './products';
function Login() {
 
  return (
    <div>
        <div className='loginpage'>
            <p>Email:</p><input typeof='email' placeholder='enter email' className='emailclass iclass'/>
            <p>Password:</p><input typeof='password' placeholder='enter password' className='emailclass iclass'/>
           <Link to='/products'><button className='submit' >Login</button></Link> 
        </div>
       
    </div>
  )
}

export default Login