import { createAction, handleActions } from "redux-actions"

const CATEGORY_ALL = "todos/CATEGORY_ALL"
const CATEGORY_DONE = "todos/CATEGORY_DONE"

const ITEM_CHECK = "todos/ITEM_CHECK"
const ETC_OPEN = "todos/ETC_OPEN"

export const categoryAll = createAction(CATEGORY_ALL)
export const categoryDone = createAction(CATEGORY_DONE)
export const itemCheck = createAction(ITEM_CHECK)
export const etcOpen = createAction(ETC_OPEN)

export interface ITodos {
  category: string
  etcActiveId: null | number
  todos: any[]
}

interface IItemCheckAction {
  payload: any
}
interface IEtcOpen {
  payload: any
}

const initialState: ITodos = {
  category: "all",
  etcActiveId: null,
  todos: [],
}

const todos = handleActions(
  {
    [CATEGORY_ALL]: (state) => ({
      ...state,
      category: "all",
      etcActiveId: null,
    }),
    [CATEGORY_DONE]: (state) => ({
      ...state,
      category: "done",
      etcActiveId: null,
    }),
    [ITEM_CHECK]: (state: ITodos, action: IItemCheckAction) => ({
      ...state,
      todos: state.todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          }
        }
        return todo
      }),
    }),
    [ETC_OPEN]: (state, action: IEtcOpen) => ({
      ...state,
      etcActiveId: action.payload.id,
    }),
  },
  initialState
)

export default todos
