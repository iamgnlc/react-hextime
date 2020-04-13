import { SET_TIME } from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        ...action.state,
      }
    default:
      return false
  }
}
