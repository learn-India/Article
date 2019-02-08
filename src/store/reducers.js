import actionTypes from './actions'

const initialState = {
    heading:['arctile 1','arctile 2','arctile 3','arctile 4','arctile 5'],
    comments:[]
}

const reducer = (state = initialState, action ) => {
  switch(action.type) {
      case actionTypes.SHOW_HEADING:
        return state.heading
      default: return state
  }

}

export default reducer