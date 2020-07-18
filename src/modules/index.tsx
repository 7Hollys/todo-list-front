import { combineReducers } from "redux"
import user, { IUser } from "./user"
import todos, { ITodos } from "./todos"

export interface IStore {
  user: IUser
  todos: ITodos
}

const rootReducer = combineReducers({
  user,
  todos,
})

export default rootReducer
