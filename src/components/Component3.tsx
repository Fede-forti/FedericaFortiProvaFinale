import axios from 'axios'
import React from 'react'
import LoginMask from './LoginMask'
import Cart from './Cart'
import { API_LOGIN } from '../api/api'

const Component3 = () => {

  const [token, setToken] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')


  const loginHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    axios
    .get(API_LOGIN, {
      headers: {
        'Authorization' : `Basic ${email}:${password}`}
    })
    .then((res) => {
      localStorage.setItem('token', res.data)
      setToken(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      {!token && <LoginMask setEmail={setEmail} setPassword={setPassword} loginHandler={loginHandler}/>}

      {token && <Cart token={token}/>}
    </div>
  )
}

export default Component3