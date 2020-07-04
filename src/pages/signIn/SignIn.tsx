import React from "react"
import "./SignIn.scss"

const SignIn = () => {
  const onClickSignIn = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/oauth2/authorization/google?redirect_url=http://localhost:3000/auth/token`
  }

  return (
    <div className="Login">
      <h1 className="logo">Todos</h1>
      <div className="social-login">
        <button
          type="button"
          className="social-login__button social-login__button--goggle"
          onClick={() => onClickSignIn()}
        >
          GOOGLE 계정으로 로그인
        </button>
        <button type="button" className="social-login__button social-login__button--kakao">
          카카오 계정으로 로그인
        </button>
      </div>
    </div>
  )
}

export default SignIn
