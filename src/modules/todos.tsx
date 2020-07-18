import { createAction, handleActions } from "redux-actions"

const CATEGORY_ALL = "todos/CATEGORY_ALL"
const CATEGORY_DONE = "todos/CATEGORY_DONE"

const ITEM_CHECK = "todos/ITEM_CHECK"

export const categoryAll = createAction(CATEGORY_ALL)
export const categoryDone = createAction(CATEGORY_DONE)
export const itemCheck = createAction(ITEM_CHECK)

export interface ITodos {
  category: string
  todos: any[]
}

interface IItemCheckAction {
  payload: any
}

const initialState: ITodos = {
  category: "all",
  todos: [
    {
      contents: "string",
      createdAt: "2020-07-15T11:52:43.803Z",
      deletedAt: "2020-07-15T11:52:43.803Z",
      id: 0,
      isChecked: true,
      sequence: 0,
      updatedAt: "2020-07-15T11:52:43.803Z",
      userId: "string",
    },
    {
      contents: "string",
      createdAt: "2020-07-15T11:52:43.803Z",
      deletedAt: "2020-07-15T11:52:43.803Z",
      id: 1,
      isChecked: false,
      sequence: 1,
      updatedAt: "2020-07-15T11:52:43.803Z",
      userId: "string",
    },
  ],
}

const todos = handleActions(
  {
    [CATEGORY_ALL]: (state) => ({
      ...state,
      category: "all",
    }),
    [CATEGORY_DONE]: (state) => ({
      ...state,
      category: "done",
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
  },
  initialState
)

export default todos
