import * as actionTypes from './actions';

const initalState = {
  titles: {}
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case(actionTypes.ARTICLE_TITLES) :
      return {
        ...state,
        titles: action.result
      }

      default:
        return state
  }

}

export default reducer;
