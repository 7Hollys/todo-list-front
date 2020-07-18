import React from "react"
import "./TodoList.scss"
import { connect } from "react-redux"
import { IStore } from "modules/index"
import { logOut } from "modules/user"

interface IProps {
  name: string
  profileImage: string
  logOut: Function
}

const TodoList = ({ name, profileImage, logOut }: IProps) => {
  const onClickLogout = () => {
    logOut()
  }

  return (
    <div className="todo">
      <div className="todo-header">
        <div className="todo-header__wrapper">
          <header className="todo-logo">
            <h1 className="todo-logo__title">TO-DOs</h1>
            <div className="todo-logo__profile">
              <img className="todo-logo__profile-image" src={profileImage} alt="Profile"></img>
              <div className="todo-logo__profile-nickname">{name}</div>
            </div>
            <button className="todo-logo__button--logout" onClick={() => onClickLogout()}>
              로그아웃
            </button>
          </header>
          <form className="todo-register">
            <input className="todo-register__input" type="text" placeholder="NEW TODO" />
            <button className="todo-register__button" type="submit">
              등록
            </button>
          </form>
          <nav className="todo-filter todo-filter--all">
            <button className="todo-filter__button">전체 목록</button>
            <div className="todo-filter__status"></div>
            <button className="todo-filter__button">완료된 목록</button>
          </nav>
        </div>
      </div>
      <div className="todo__wrapper">
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
        <div className="todo-item"></div>
      </div>
    </div>
  )
}

export default connect(
  (store: IStore) => ({
    name: store.user.name,
    profileImage: store.user.profileImage,
  }),
  { logOut }
)(TodoList)
