import { createAction, handleActions } from "redux-actions"

const SIGN_IN = "user/SIGN_IN"
const LOG_OUT = "user/LOG_OUT"

export interface IUser {
  email: string
  name: string
  profileImage: string
  token: string
}

interface IAction {
  payload: IUser
}

export const signIn = createAction(SIGN_IN, (user: IUser) => user)
export const logOut = createAction(LOG_OUT)

const initialState = {
  email: localStorage.getItem("email") || "",
  name: localStorage.getItem("name") || "",
  profileImage: localStorage.getItem("profileImage") || "",
  token: localStorage.getItem("token") || "",
}

const user = handleActions(
  {
    [SIGN_IN]: (state, action: IAction) => {
      localStorage.setItem("email", action.payload.email)
      localStorage.setItem("name", action.payload.name)
      localStorage.setItem("profileImage", action.payload.profileImage)
      localStorage.setItem("token", action.payload.token)

      return {
        email: action.payload.email,
        name: action.payload.name,
        profileImage: action.payload.profileImage,
        token: action.payload.token,
      }
    },
    [LOG_OUT]: (state, action: IAction) => {
      localStorage.removeItem("email")
      localStorage.removeItem("name")
      localStorage.removeItem("profileImage")
      localStorage.removeItem("token")

      return {
        email: "",
        name: "",
        profileImage: "",
        token: "",
      }
    },
  },
  initialState
)

export default user
