import React from 'react'

interface IProps {
    setEmail: (email: string) => void,
    setPassword: (password: string) => void,
    loginHandler: (e: React.FormEvent<HTMLButtonElement>) => void
}

const LoginMask = (props:IProps) => {

    const {setEmail, setPassword, loginHandler} = props

  return (
    <>
      <h1>LOGIN</h1>
      <form>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={(e) => loginHandler(e)}>Login</button>
      </form>
    </>
  )
}

export default LoginMask