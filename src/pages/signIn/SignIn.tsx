import React from "react"
import "./SignIn.scss"
import { IUser, signIn } from "modules/user"
import { connect } from "react-redux"

interface Props {
  signIn: Function
}

const SignIn = ({ signIn }: Props) => {
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

export default connect(
  (user: IUser) => ({
    email: user.email,
    name: user.name,
    profileImage: user.profileImage,
  }),
  { signIn }
)(SignIn)
