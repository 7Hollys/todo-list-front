import React, { useState, useEffect } from "react"
import "./TodoList.scss"
import { connect } from "react-redux"
import { IStore } from "modules/index"
import { IUser, logOut } from "modules/user"
import { ITodos } from "modules/todos"
import {
  categoryAll,
  categoryDone,
  itemUpdate,
  postTodoItem,
  updateTodoItem,
  deleteTodoItem,
  etcOpen,
  getTodoItems,
  modelOpen,
} from "modules/todos"
import { useHistory } from "react-router-dom"

interface IProps {
  user: IUser
  todos: ITodos

  logOut: Function
  categoryAll: Function
  categoryDone: Function
  postTodoItem: Function
  itemUpdate: Function
  updateTodoItem: Function
  deleteTodoItem: Function
  etcOpen: Function
  todoItems: Function
  getTodoItems: Function
  modelOpen: Function
}

const TodoList = ({
  user,
  todos,
  logOut,
  categoryAll,
  categoryDone,
  postTodoItem,
  updateTodoItem,
  deleteTodoItem,
  etcOpen,
  getTodoItems,
  modelOpen,
}: IProps) => {
  const history = useHistory()
  const onClickLogout = () => {
    logOut()
  }

  const onClickCategoryAll = () => {
    categoryAll()
  }

  const onClickCategoryDone = () => {
    categoryDone()
  }

  const onSubmitPostItem = (event: any) => {
    event.preventDefault()
    postTodoItem(user.token, inputText)
    setInputText("")
  }

  const onClickUpdateItem = (item: any) => {
    item.isChecked = !item.isChecked
    updateTodoItem(user.token, item)
  }

  const onClickDeleteItem = (item: any) => {
    deleteTodoItem(user.token, item)
  }

  const onClickEtcOpen = (id: string | null = null) => {
    etcOpen({ id })
  }

  const [inputText, setInputText] = useState("")

  const onChangeInput = (event: any) => {
    setInputText(event.target.value)
  }

  useEffect(() => {
    getTodoItems(user.token)
  }, [getTodoItems, user.token])

  const [editInputText, setEditInputText] = useState("")

  const onSubmitPutItem = (event: any) => {
    event.preventDefault()
    updateTodoItem(user.token, {
      ...todos.modelActiveItem,
      editInputText,
    })
    setEditInputText("")
  }

  return (
    <div className="todo">
      <div className={`todo__bg ${todos.modelActiveItem && "todo__bg--modal"}`}>
        <div className="todo-header">
          <div className="todo-header__wrapper">
            <header className="todo-logo">
              <h1 className="todo-logo__title">TO-DOs</h1>
              <div className="todo-logo__profile">
                <img className="todo-logo__profile-image" src={user.profileImage} alt="Profile"></img>
                <div className="todo-logo__profile-nickname">{user.name}</div>
              </div>
              <button className="todo-logo__button--logout" onClick={() => onClickLogout()}>
                로그아웃
              </button>
            </header>
            <form className="todo-register" onSubmit={onSubmitPostItem}>
              <input
                className="todo-register__input"
                type="text"
                placeholder="NEW TODO"
                value={inputText}
                onChange={(value) => onChangeInput(value)}
              />
              <button className="todo-register__button" type="submit">
                등록
              </button>
            </form>
            <nav
              className={todos.category === "all" ? "todo-filter todo-filter--all" : "todo-filter todo-filter--done"}
            >
              <div className="todo-filter__shadow"></div>
              <div className="todo-filter__wrapper">
                <button className="todo-filter__button todo-filter__button--all" onClick={() => onClickCategoryAll()}>
                  전체 목록
                </button>
                <div className="todo-filter__status"></div>
                <button
                  className="todo-filter__button todo-filter__button--checked"
                  onClick={() => onClickCategoryDone()}
                >
                  완료된 목록
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="todo__wrapper">
          <div className="todo-list">
            {todos.todos
              .filter((item: any) => {
                if (todos.category === "all") {
                  return true
                }

                if (todos.category === "done" && item.isChecked) {
                  return true
                }

                return false
              })
              .map((item: any) => (
                <div className="todo-item" key={item.id}>
                  <div
                    className={`${item.id === todos.etcActiveId ? "todo-item__slider--active" : ""} todo-item__slider`}
                  >
                    <div className="todo-item__main">
                      <div className="todo-item__main-wrapper todo-item__main-wrapper--status">
                        <input
                          id={`id${item.id}`}
                          className="todo-item__main-checkbox"
                          type="checkbox"
                          onClick={() => onClickUpdateItem(item)}
                          defaultChecked={item.isChecked ? true : false}
                        />
                        <label htmlFor={`id${item.id}`} className="todo-item__main-label"></label>
                      </div>
                      <div className="todo-item__main-wrapper todo-item__main-wrapper--content">
                        <div className="todo-item__main-prefix">{item.createdAt}</div>
                        <h2 className="todo-item__main-title">{item.contents}</h2>
                      </div>
                      <div className="todo-item__main-wrapper todo-item__main-wrapper--etc">
                        {item.id === todos.etcActiveId ? (
                          <button
                            className="todo-item__main-button todo-item__main-button--close"
                            onClick={() => onClickEtcOpen()}
                          >
                            닫기
                          </button>
                        ) : (
                          <button
                            className="todo-item__main-button todo-item__main-button--etc"
                            onClick={() => onClickEtcOpen(item.id)}
                          >
                            더보기
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="todo-item__etc">
                      <button
                        className="todo-item__etc-button todo-item__etc-button--edit"
                        onClick={() => {
                          modelOpen(item)
                        }}
                      >
                        수정
                      </button>
                      <button
                        className="todo-item__etc-button todo-item__etc-button--delete"
                        onClick={() => onClickDeleteItem(item)}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {todos.modelActiveItem && (
        <div
          className="todo-modifier"
          onClick={() => {
            modelOpen()
            etcOpen({})
          }}
        >
          <form className="todo-modifier__wrapper" onSubmit={onSubmitPutItem}>
            <input
              className="todo-modifier__input"
              type="text"
              value={editInputText}
              onChange={(event) => setEditInputText(event.target.value)}
            />
            <div className="todo-modifier__etc">
              <button className="todo-modifier__button todo-modifier__button--ok">수정</button>
              <button
                className="todo-modifier__button todo-modifier__button--cancel"
                onClick={() => {
                  modelOpen()
                  etcOpen({})
                }}
              >
                닫기
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default connect(
  (store: IStore) => ({
    user: store.user,
    todos: store.todos,
  }),
  {
    logOut,
    categoryAll,
    categoryDone,
    itemUpdate,
    postTodoItem,
    updateTodoItem,
    deleteTodoItem,
    etcOpen,
    getTodoItems,
    modelOpen,
  }
)(TodoList)
