import React from "react"
import "./ErrorPage.scss"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <div className="error-code">404</div>
      <div className="error-message">찾을 수 없는 페이지를 요청하셨습니다.</div>
      <Link className="go-to-back" to="#">
        이전 페이지로
      </Link>
    </div>
  )
}

export default ErrorPage
