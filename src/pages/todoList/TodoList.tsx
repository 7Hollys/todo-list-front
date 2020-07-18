import React from "react"
import "./TodoList.scss"
import { connect } from "react-redux"
import { IStore } from "modules/index"
import { logOut } from "modules/user"
import { categoryAll, categoryDone, itemCheck } from "modules/todos"
import { useHistory } from "react-router-dom"

interface IProps {
  name: string
  profileImage: string
  logOut: Function

  category: boolean
  categoryAll: Function
  categoryDone: Function

  itemCheck: Function

  items: []
}

const TodoList = ({ name, profileImage, logOut, category, categoryAll, categoryDone, itemCheck, items }: IProps) => {
  console.log(items)
  const history = useHistory()
  const onClickLogout = () => {
    logOut()

    history.replace("/sign_in")
  }

  const onClickCategoryAll = () => {
    categoryAll()
  }

  const onClickCategoryDone = () => {
    categoryDone()
  }

  const onClickItemCheck = () => {
    itemCheck()
  }

  return (
    <div className="todo">
      <div className="todo-wrapper">
        <header className="todo-header">
          <h1 className="todo-header__title">TO-DOs</h1>
          <div className="todo-header__profile">
            <img src={profileImage} className="todo-header__profile-image" alt="Profile" />
            <div className="todo-header__nickname">
              {name}
              <span className="todo-header__nickname-suffix">님</span>
            </div>
          </div>
          <button className="todo-header__logout" onClick={() => onClickLogout()}>
            로그아웃
          </button>
        </header>
        <section className="todo-register">
          <form>
            <input className="todo-register__input" type="text" placeholder="NEW TODO"></input>
            <button className="todo-register__button" type="submit">
              등록
            </button>
          </form>
        </section>
        <section className="todo-list">
          <nav className="todo-list__filter">
            <button
              className={
                category
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
                  category
                    ? "todo-list__filter-status todo-list__filter-status--all"
                    : "todo-list__filter-status todo-list__filter-status--done"
                }
              ></div>
            </div>
            <button
              className={
                !category
                  ? "todo-list__filter-button todo-list__filter-button--right todo-list__filter-button--active"
                  : "todo-list__filter-button todo-list__filter-button--right"
              }
              onClick={() => onClickCategoryDone()}
            >
              완료된 목록
            </button>
          </nav>
          <section className="todo-list__section">
            {items.map((item: any) => {
              if (category) {
                return (
                  <article key={item.contents} className="todo-list__article">
                    <div className="todo-list__slider">
                      <div className={item.isChecked ? "todo-list__item todo-list__item--checked" : "todo-list__item"}>
                        <div className="todo-list__item-element todo-list__item-element--status">
                          <input
                            id={`id${item.index}`}
                            type="checkbox"
                            className="todo-list__item-checkbox"
                            onClick={() => onClickItemCheck()}
                            defaultChecked={item.isChecked ? true : false}
                          ></input>
                          <label htmlFor={`id${item.index}`} className="todo-list__item-checkbox-label"></label>
                        </div>
                        <div className="todo-list__item-element todo-list__item-element--content">
                          <div className="todo-list__item-prefix">{item.createdDatetime}</div>
                          <h2 className="todo-list__item-title">{item.contents}</h2>
                        </div>
                        <div className="todo-list__item-element todo-list__item-element--etc">
                          {!item.etcOpen ? (
                            <button className="todo-list__item-button todo-list__item-button--etc">열기</button>
                          ) : (
                            <button className="todo-list__item-button todo-list__item-button--close">닫기</button>
                          )}
                        </div>
                      </div>
                      <div className="todo-list__etc">
                        <button className="todo-list__etc-button todo-list__etc-button--edit">수정</button>
                        <button className="todo-list__etc-button todo-list__etc-button--delete">삭제</button>
                      </div>
                    </div>
                  </article>
                )
              } else {
                if (item.isChecked) {
                  return (
                    <article key={item.contents} className="todo-list__article">
                      <div className="todo-list__slider">
                        <div
                          className={item.isChecked ? "todo-list__item todo-list__item--checked" : "todo-list__item"}
                        >
                          <div className="todo-list__item-element todo-list__item-element--status">
                            <input
                              id={`id${item.index}`}
                              type="checkbox"
                              className="todo-list__item-checkbox"
                              onClick={() => onClickItemCheck()}
                              defaultChecked={item.isChecked ? true : false}
                            ></input>
                            <label htmlFor={`id${item.index}`} className="todo-list__item-checkbox-label"></label>
                          </div>
                          <div className="todo-list__item-element todo-list__item-element--content">
                            <div className="todo-list__item-prefix">{item.createdDatetime}</div>
                            <h2 className="todo-list__item-title">{item.contents}</h2>
                          </div>
                          <div className="todo-list__item-element todo-list__item-element--etc">
                            {!item.etcOpen ? (
                              <button className="todo-list__item-button todo-list__item-button--etc">열기</button>
                            ) : (
                              <button className="todo-list__item-button todo-list__item-button--close">닫기</button>
                            )}
                          </div>
                        </div>
                        <div className="todo-list__etc">
                          <button className="todo-list__etc-button todo-list__etc-button--edit">수정</button>
                          <button className="todo-list__etc-button todo-list__etc-button--delete">삭제</button>
                        </div>
                      </div>
                    </article>
                  )
                }
              }
            })}

            <article className="todo-list__article">
              <div className="todo-list__slider todo-list__slider--active">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id1" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id1" className="todo-list__item-checkbox-label"></label>
                  </div>
                  <div className="todo-list__item-element todo-list__item-element--content">
                    <div className="todo-list__item-prefix">3분 전</div>
                    <h2 className="todo-list__item-title">맑은고딕</h2>
                  </div>
                  <div className="todo-list__item-element todo-list__item-element--etc">
                    <button className="todo-list__item-button todo-list__item-button--close">닫기</button>
                  </div>
                </div>
                <div className="todo-list__etc">
                  <button className="todo-list__etc-button todo-list__etc-button--edit">수정</button>
                  <button className="todo-list__etc-button todo-list__etc-button--delete">삭제</button>
                </div>
              </div>
            </article>
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id2" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id2" className="todo-list__item-checkbox-label"></label>
                  </div>
                  <div className="todo-list__item-element todo-list__item-element--content">
                    <div className="todo-list__item-prefix">3분 전</div>
                    <h2 className="todo-list__item-title">맑은고딕</h2>
                  </div>
                  <div className="todo-list__item-element todo-list__item-element--etc">
                    <button className="todo-list__item-button todo-list__item-button--etc"></button>
                  </div>
                </div>
                <div className="todo-list__etc">
                  <button className="todo-list__etc-button todo-list__etc-button--edit">수정</button>
                  <button className="todo-list__etc-button todo-list__etc-button--delete">삭제</button>
                </div>
              </div>
            </article>
          </section>
        </section>
      </div>
    </div>
  )
}

export default connect(
  (store: IStore) => ({
    name: store.user.name,
    profileImage: store.user.profileImage,
    category: store.todos.category,
    items: store.todos.items,
  }),
  { logOut, categoryAll, categoryDone, itemCheck }
)(TodoList)
