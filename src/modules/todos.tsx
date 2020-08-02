import { createAction, handleActions } from "redux-actions"
import axios from "axios"

const CATEGORY_ALL = "todos/CATEGORY_ALL"
const CATEGORY_DONE = "todos/CATEGORY_DONE"

const ITEM_POST = "todos/ITEM_POST"
const ITEM_UPDATE = "todos/ITEM_UPDATE"
const ITEM_DELETE = "todos/ITEM_DELETE"
const ETC_OPEN = "todos/ETC_OPEN"

const TODO_ITEMS = "todos/TODO_ITEMS"

export const categoryAll = createAction(CATEGORY_ALL)
export const categoryDone = createAction(CATEGORY_DONE)
export const itemPost = createAction(ITEM_POST)
export const itemUpdate = createAction(ITEM_UPDATE)
export const itemDelete = createAction(ITEM_DELETE)
export const etcOpen = createAction(ETC_OPEN)
export const todoItems = createAction(TODO_ITEMS)

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

interface ITodoItems {
  payload: any
}

const initialState: ITodos = {
  category: "all",
  etcActiveId: null,
  todos: [],
}

export const getTodoItems = (token: string, sequence: number = 0) => async (dispatch: any) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/todo_list/select?sequence=${sequence}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  })
  dispatch({
    type: TODO_ITEMS,
    payload: response.data,
  })
}

export const postTodoItem = (token: string, contents: string) => async (dispatch: any) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/todo_list/save`,
    {
      contents: contents,
      isChecked: false,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    }
  )
  dispatch({
    type: ITEM_POST,
    payload: response.data,
  })
}

export const updateTodoItem = (token: string, item: any) => async (dispatch: any) => {
  dispatch({
    type: ITEM_UPDATE,
    payload: item,
  })
  await axios.put(`${process.env.REACT_APP_API_URL}/api/todo_list/update`, item, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  })
}

export const deleteTodoItem = (token: string, item: any) => async (dispatch: any) => {
  await axios.delete(`${process.env.REACT_APP_API_URL}/api/todo_list/delete?id=${item.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  })
  dispatch({
    type: ITEM_DELETE,
    payload: item,
  })
}

const todos: any = handleActions(
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
    [ITEM_POST]: (state: ITodos, action: any) => ({
      ...state,
      todos: [action.payload, ...state.todos],
    }),
    [ITEM_DELETE]: (state, action: any) => ({
      ...state,
      todos: todos.concat(action.payload),
    }),
    [ITEM_UPDATE]: (state: ITodos, action: IItemCheckAction) => ({
      ...state,
      todos: state.todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload,
          }
        }
        return todo
      }),
    }),
    [ITEM_DELETE]: (state, action: any) => ({
      ...state,
      todos: state.todos.filter((todo) => (action.payload.id !== todo.id ? true : false)),
    }),
    [ETC_OPEN]: (state, action: IEtcOpen) => ({
      ...state,
      etcActiveId: action.payload.id,
    }),
    [TODO_ITEMS]: (state, action: ITodoItems) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
  },
  initialState
)

export default todos
