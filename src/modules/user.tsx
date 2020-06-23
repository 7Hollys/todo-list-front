import { createAction, handleActions } from "redux-actions"

const SIGN_IN = "user/SIGN_IN"
const LOG_OUT = "user/LOG_OUT"

export const signIn = createAction(SIGN_IN, (user: IUser) => user)
export const logOut = createAction(LOG_OUT)

export interface IUser {
  email: string
  name: string
  profileImage: string
}

interface IAction {
  payload: IUser
}

const initialState = {
  email: "",
  name: "",
  profileImage: "",
}

const user = handleActions(
  {
    [SIGN_IN]: (state, action: IAction) => ({
      email: action.payload.email,
      name: action.payload.name,
      profileImage: action.payload.profileImage,
    }),
    [LOG_OUT]: (state) => ({
      email: "",
      name: "",
      profileImage: "",
    }),
  },
  initialState
)

export default user
