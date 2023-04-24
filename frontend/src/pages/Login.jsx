import React from 'react'
import { useState } from 'react';

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
          <button>LOGIN</button>
          <p className="message"></p>
        </form>
        <form className="login-form">
          <button type="button" onClick="window.location.href='signup.html'">SIGN UP</button>
        </form>
      </div>
      </div>

    </body>  
  )
}

export default Login
