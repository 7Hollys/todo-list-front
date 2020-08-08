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
      <div className="todo__bg todo__bg--modal">
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
            <nav className="todo-filter todo-filter--done">
              <button className="todo-filter__button todo-filter__button--all">전체 목록</button>
              <div className="todo-filter__status"></div>
              <button className="todo-filter__button todo-filter__button--checked">완료된 목록</button>
              <div className="todo-filter__shadow"></div>
            </nav>
          </div>
        </div>
        <div className="todo__wrapper">
          <div className="todo-list">
            <div className="todo-item">
              <div className="todo-item__slider todo-item__slider--active">
                <div className="todo-item__main">
                  <div className="todo-item__main-wrapper todo-item__main-wrapper--status">
                    <input id="id1" className="todo-item__main-checkbox" type="checkbox" />
                    <label htmlFor="id1" className="todo-item__main-label"></label>
                  </div>
                  <div className="todo-item__main-wrapper todo-item__main-wrapper--content">
                    <div className="todo-item__main-prefix">3분전</div>
                    <h2 className="todo-item__main-title">맑은고딕</h2>
                  </div>
                  <div className="todo-item__main-wrapper todo-item__main-wrapper--etc">
                    <button className="todo-item__main-button todo-item__main-button--close"></button>
                  </div>
                </div>
                <div className="todo-item__etc">
                  <button className="todo-item__etc-button todo-item__etc-button--edit"></button>
                  <button className="todo-item__etc-button todo-item__etc-button--delete"></button>
                </div>
              </div>
            </div>
            <div className="todo-item">
              <div className="todo-item__slider">
                <div className="todo-item__main">
                  <div className="todo-item__main-wrapper todo-item__main-wrapper--status">
                    <input id="id2" className="todo-item__main-checkbox" type="checkbox" />
                    <label htmlFor="id2" className="todo-item__main-label"></label>
                  </div>
                  <div className="todo-item__main-wrapper todo-item__main-wrapper--content">
                    <div className="todo-item__main-prefix">3분전</div>
                    <h2 className="todo-item__main-title">맑은고딕</h2>
                  </div>
                  <div className="todo-item__main-wrapper todo-item__main-wrapper--etc">
                    <button className="todo-item__main-button todo-item__main-button--etc"></button>
                  </div>
                </div>
                <div className="todo-item__etc">
                  <button className="todo-item__etc-button todo-item__etc-button--edit"></button>
                  <button className="todo-item__etc-button todo-item__etc-button--delete"></button>
                </div>
              </div>
            </div>
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
            <div className="todo-item"></div>
          </div>
        </div>
      </div>
      <div className="todo-modifier">
        <div className="todo-modifier__wrapper">
          <input className="todo-modifier__input" type="text" />
          <div className="todo-modifier__etc">
            <button className="todo-modifier__button todo-modifier__button--ok"></button>
            <button className="todo-modifier__button todo-modifier__button--cancel"></button>
          </div>
        </div>
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
