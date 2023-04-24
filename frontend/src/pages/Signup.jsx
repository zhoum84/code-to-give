import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyLottieAnimation = React.lazy(() => import('../components/lottie'));

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () =>{
        if(password===password2)
            navigate('/home');
        else
            toast('Passwords do not match!');
    }
  return (
    <body className='login-body' style={{ 
        backgroundImage: `url('https://ordinaryfaith.net/wp-content/uploads/2016/03/Gray-plain-website-background.jpg')` 
      }}>
  
        <div className="login-page">
            <div className="signup-form">
            <form>
                <MyLottieAnimation play />

                <input type="text" placeholder="full name" onChange={e => setName(e.target.value)} required={true}/>
                <input type="text" placeholder="email address" onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="pick a username" onChange={e => setUsername(e.target.value)} />
                <input type="password" id="password" placeholder="set a password" onChange={e=> setPassword(e.target.value)}/>
                <input type="password" id="password" placeholder="repeat password" onChange={e=> setPassword2(e.target.value)}/>
                <br/>
                <br/>

                <Link to='/login'>
                    <button type="button" onClick="window.location.href='login.html'"> SIGN UP </button>
                </Link>
                
            </form>

            </div>
      </div>

    </body>  
)
}

export default Signup