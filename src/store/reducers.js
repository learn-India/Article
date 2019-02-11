import * as actionTypes from './actions'

const initialState = {
    heading:[],
    comments:[],
    article:''
}

const reducer = (state = initialState, action ) => {
  switch(action.type) {
      case actionTypes.SHOW_HEADING:
        return  Object.assign({}, state, {
          heading: action.response
        })
      case actionTypes.SHOW_ARTICLE:
        return  Object.assign({}, state, {
          article: action.response
        })
      case actionTypes.SHOW_COMMENTS:
        return   Object.assign({}, state, {
          comments: action.response
        })
        //[ ...state.comments, action.response ]
      default: return state
  }

}

export default reducer