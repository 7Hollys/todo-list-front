import { createAction, handleActions } from "redux-actions"

const CATEGORY_ALL = "todos/CATEGORY_ALL"
const CATEGORY_DONE = "todos/CATEGORY_DONE"

const ITEM_CHECK = "todos/ITEM_CHECK"

export interface ITodo {
  isChecked: boolean
  index: number
  contents: string
  createdDatetime: string
  etcOpen: boolean
}

export interface ITodoCategory {
  category: boolean
}

export interface ITodoItem {
  items: ITodo[]
}

interface ITodoCategoryAction {
  payload: ITodoCategory
}

interface ITodoItemAction {
  payload: ITodoItem
}

export const categoryAll = createAction(CATEGORY_ALL)
export const categoryDone = createAction(CATEGORY_DONE)

export const itemCheck = createAction(ITEM_CHECK)

const initialState = {
  category: true,
  items: [
    {
      isChecked: true,
      index: 1,
      contents: "1",
      createdDatetime: "1",
      etcOpen: false,
    },
    {
      isChecked: false,
      index: 2,
      contents: "2",
      createdDatetime: "2",
      etcOpen: false,
    },
  ],
}

const todos = handleActions(
  {
    [CATEGORY_ALL]: (state, action: ITodoCategoryAction) => ({ ...state, category: true }),
    [CATEGORY_DONE]: (state, action: ITodoCategoryAction) => ({ ...state, category: false }),

    [ITEM_CHECK]: (state, action: any) => {
      console.log(state)
      return {
        ...state,
      }
    },
  },
  initialState
)

export default todos
