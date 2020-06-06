import React from "react"
import "./App.scss"

const App = () => {
  return (
    <div className="Login">
      <h1 className="logo">Todos</h1>
      <div className="social-login">
        <button type="button" className="social-login__button social-login__button--goggle">
          GOOGLE 계정으로 로그인
        </button>
        <button type="button" className="social-login__button social-login__button--kakao">
          카카오 계정으로 로그인
        </button>
      </div>
    </div>
  )
}

export default App
