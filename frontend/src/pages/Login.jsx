import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const MyLottieAnimation = React.lazy(() => import('../components/lottie'));

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChange = (e) =>{
    setUsername(e.target.value);
  }

  const passwordChange = (e) => {
    setPassword(e.target.value);
  }

  return (

    <body className='login-body' style={{ 
      backgroundImage: `url('https://ordinaryfaith.net/wp-content/uploads/2016/03/Gray-plain-website-background.jpg')` 
    }}>

      <div className="login-page">
      <div className="login-form">
        

      <MyLottieAnimation play />
        <form>
          <input type="text"  placeholder="username"  onChange={usernameChange} value={username}/>
          <input type="password" name='password' id="password" placeholder="password" onChange={passwordChange} value={password}/>
          <Link to='/home'>
           <button>LOGIN</button>
           <p className="message"></p>
          </Link>
        </form>
        <form className="login-form">
          <Link to='/signup'>
            <button type="button" onClick="window.location.href='signup.html'">SIGN UP</button>
          </Link>
        </form>
      </div>
      </div>

    </body>  
  )
}

export default Login
