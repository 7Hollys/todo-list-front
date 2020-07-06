import React, { useEffect, useLayoutEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { signIn } from "modules/user"
import { useHistory } from "react-router-dom"
import { IStore } from "modules"

interface IProps {
  token: string
  signIn: Function
}

const Token = ({ token, signIn }: IProps) => {
  const history = useHistory()

  useLayoutEffect(() => {
    const params = new URL(document.location.href).searchParams
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${params.get("token")}`,
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        signIn({
          email: response.data.email,
          name: response.data.name,
          profileImage: response.data.profileImage,
          token: params.get("token"),
        })
      })
  }, [signIn])

  useEffect(() => {
    if (token) {
      history.replace("/todo_list")
    }
  }, [history, token])

  return <div></div>
}

export default connect(
  (store: IStore) => ({
    token: store.user.token,
  }),
  { signIn }
)(Token)
