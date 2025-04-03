import React from 'react'

function LogIn() {
  const userInlogg = document.getElementsByClassName('d-none');
  
  return (
    <>
    <section className="login-form d-none">
    <h1 className="login-title">Login</h1>
    <form action="">
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="password" />
    </form>
    <button>
        Login
    </button>
    <p>Don't have any account?</p>
    <p className="sign-up">Sign up</p>
    </section>
    </>
  )
}

export default LogIn