
import { fromJS } from 'immutable'

import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showScroll: false
})

export default (state = defaultState, action ) => {
   if (action.type === constants.CHANGE_HOME_DATA) {
      return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList)
      })
   }
   if (action.type === constants.TOGGLE_SCROLL_SHOW) {
    return state.set('showScroll', action.show)
 }
   return state
}