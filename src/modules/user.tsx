import { createAction, handleActions } from "redux-actions"

const SIGN_IN = "user/SIGN_IN"
const LOG_OUT = "user/LOG_OUT"

export const signIn = createAction(SIGN_IN, (token: string) => token)
export const logOut = createAction(LOG_OUT)

interface IAction {
  payload: string
}

const initialState = {
  email: "",
  name: "",
  picture: "",
  token: "",
}

const user = handleActions(
  {
    [SIGN_IN]: (state, action: IAction) => ({
      ...state,
      token: action.payload,
    }),
    [LOG_OUT]: (state) => ({
      ...state,
      token: "",
    }),
  },
  initialState
)

export default user
