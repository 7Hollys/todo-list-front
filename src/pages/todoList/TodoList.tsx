import React from "react"
import "./TodoList.scss"
import { connect } from "react-redux"
import { IUser, logOut } from "../../modules/user"
import { useHistory } from "react-router-dom"

interface Props {
  logOut: Function
}

const TodoList = ({ logOut }: Props) => {
  const history = useHistory()
  const onClickLogout = () => {
    logOut()

    history.replace("/sign_in")
  }

  return (
    <div className="todo">
      <div className="todo-wrapper">
        <header className="todo-header">
          <h1 className="todo-header__title">TO-DOs</h1>
          <div className="todo-header__profile">
            <img
              src="https://news.korean.go.kr/wp-content/uploads/2014/02/funhangul_140218_04.jpg"
              className="todo-header__profile-image"
              alt="Profile"
            />
            <div className="todo-header__nickname">
              홍길동
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
            <button className="todo-list__filter-button todo-list__filter-button--left todo-list__filter-button--active">
              전체 목록
            </button>
            <div className="todo-list__filter-element">
              <div className="todo-list__filter-status todo-list__filter-status--done"></div>
            </div>
            <button className="todo-list__filter-button todo-list__filter-button--right">완료된 목록</button>
          </nav>
          <section className="todo-list__section">
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id3" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id3" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id4" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id4" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id5" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id5" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id6" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id6" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id7" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id7" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id8" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id8" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id9" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id9" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id10" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id10" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id11" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id11" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id12" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id12" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id13" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id13" className="todo-list__item-checkbox-label"></label>
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
            <article className="todo-list__article">
              <div className="todo-list__slider">
                <div className="todo-list__item todo-list__item--checked">
                  <div className="todo-list__item-element todo-list__item-element--status">
                    <input id="id14" type="checkbox" className="todo-list__item-checkbox"></input>
                    <label htmlFor="id14" className="todo-list__item-checkbox-label"></label>
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
  (user: IUser) => ({
    email: user.email,
    name: user.name,
    profileImage: user.profileImage,
  }),
  { logOut }
)(TodoList)
