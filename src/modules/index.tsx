import { combineReducers } from "redux"
import user, { IUser } from "./user"

export interface IStore {
  user: IUser
}

const rootReducer = combineReducers({
  user,
})

export default rootReducer
