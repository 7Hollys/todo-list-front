import React from "react"
import "./SignIn.scss"
import { IUser, signIn } from "../../modules/user"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"

interface Props {
  signIn: Function
}

const SignIn = ({ signIn }: Props) => {
  const history = useHistory()

  const onClickSignIn = () => {
    signIn({
      email: "abcd@email.com",
      name: "김똘똘",
      profileImage: "../image.jpg",
    })

    history.replace("/todo_list")
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
