import React from "react"
import { connect } from "react-redux"
import axios from "axios"
import { signIn } from "modules/user"
import { useHistory } from "react-router-dom"

interface Props {
  signIn: Function
}

const Token = ({ signIn }: Props) => {
  const params = new URL(document.location.href).searchParams
  const token = params.get("token")
  const history = useHistory()

  axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
    .then(function (response) {
      signIn({
        email: response.data.email,
        name: response.data.name,
        profileImage: response.data.profileImage,
      })

      history.replace("/todo_list")
    })

  return <div></div>
}

export default connect(null, { signIn })(Token)
