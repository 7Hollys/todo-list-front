import { createAction, handleActions } from "redux-actions"

const CATEGORY_ALL = "todos/CATEGORY_ALL"
const CATEGORY_DONE = "todos/CATEGORY_DONE"

const ITEM_CHECK = "todos/ITEM_CHECK"

export interface ITodos {
  category: boolean
  items: []
  index: Number
}

interface IAction {
  payload: ITodos
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
    [CATEGORY_ALL]: (state, action: IAction) => ({ ...state, category: true }),
    [CATEGORY_DONE]: (state, action: IAction) => ({ ...state, category: false }),

    [ITEM_CHECK]: (state, action: IAction) => {
      return {
        ...state,
      }
    },
  },
  initialState
)

export default todos
