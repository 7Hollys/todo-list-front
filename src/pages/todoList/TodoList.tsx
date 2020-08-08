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
} from "modules/todos"
import DateFormat from "libs/DataFormat"

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
}: IProps) => {
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
  }, [getTodoItems])

  return (
    <div className="todo">
      <div className="todo-wrapper">
        <header className="todo-header">
          <h1 className="todo-header__title">TO-DOs</h1>
          <div className="todo-header__profile">
            <img src={user.profileImage} className="todo-header__profile-image" alt="Profile" />
            <div className="todo-header__nickname">
              {user.name}
              <span className="todo-header__nickname-suffix">님</span>
            </div>
          </div>
          <button className="todo-header__logout" onClick={() => onClickLogout()}>
            로그아웃
          </button>
        </header>
        <section className="todo-register">
          <form onSubmit={onSubmitPostItem}>
            <input
              className="todo-register__input"
              type="text"
              placeholder="NEW TODO"
              value={inputText}
              onChange={(value) => onChangeInput(value)}
            ></input>
            <button className="todo-register__button" type="submit">
              등록
            </button>
          </form>
        </section>
        <section className="todo-list">
          <nav className="todo-list__filter">
            <button
              className={
                todos.category === "all"
                  ? "todo-list__filter-button todo-list__filter-button--left todo-list__filter-button--active"
                  : "todo-list__filter-button todo-list__filter-button--left"
              }
              onClick={() => onClickCategoryAll()}
            >
              전체 목록
            </button>
            <div className="todo-list__filter-element">
              <div
                className={
                  todos.category === "all"
                    ? "todo-list__filter-status todo-list__filter-status--all"
                    : "todo-list__filter-status todo-list__filter-status--done"
                }
              ></div>
            </div>
            <button
              className={
                todos.category === "done"
                  ? "todo-list__filter-button todo-list__filter-button--right todo-list__filter-button--active"
                  : "todo-list__filter-button todo-list__filter-button--right"
              }
              onClick={() => onClickCategoryDone()}
            >
              완료된 목록
            </button>
          </nav>
          <section className="todo-list__section">
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
                <article key={item.id} className="todo-list__article">
                  <div
                    className={`${item.id === todos.etcActiveId ? "todo-list__slider--active" : ""} todo-list__slider`}
                  >
                    <div className={item.isChecked ? "todo-list__item todo-list__item--checked" : "todo-list__item"}>
                      <div className="todo-list__item-element todo-list__item-element--status">
                        <input
                          id={`id${item.id}`}
                          type="checkbox"
                          className="todo-list__item-checkbox"
                          onClick={() => onClickUpdateItem(item)}
                          defaultChecked={item.isChecked ? true : false}
                        />
                        <label htmlFor={`id${item.id}`} className="todo-list__item-checkbox-label"></label>
                      </div>
                      <div className="todo-list__item-element todo-list__item-element--content">
                        <div className="todo-list__item-prefix">{DateFormat(item.createdAt)}</div>
                        <h2 className="todo-list__item-title">{item.contents}</h2>
                      </div>
                      <div className="todo-list__item-element todo-list__item-element--etc">
                        {item.id === todos.etcActiveId ? (
                          <button
                            className="todo-list__item-button todo-list__item-button--close"
                            onClick={() => onClickEtcOpen()}
                          >
                            닫기
                          </button>
                        ) : (
                          <button
                            className="todo-list__item-button todo-list__item-button--etc"
                            onClick={() => onClickEtcOpen(item.id)}
                          >
                            열기
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="todo-list__etc">
                      <button className="todo-list__etc-button todo-list__etc-button--edit">수정</button>
                      <button
                        className="todo-list__etc-button todo-list__etc-button--delete"
                        onClick={() => onClickDeleteItem(item)}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </div>
    </div>
  )
}

export default connect(
  (store: IStore) => ({
    user: store.user,
    todos: store.todos,
  }),
  { logOut, categoryAll, categoryDone, itemUpdate, postTodoItem, updateTodoItem, deleteTodoItem, etcOpen, getTodoItems }
)(TodoList)
