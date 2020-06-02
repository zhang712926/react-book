import { fromJS } from 'immutable'
import * as constants from './constant'

const defaultState = fromJS({
    title: '',
    imgUrl: '',
    content: ''
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
              title: action.title,
              imgUrl: action.url,
              content: action.content
            })
        default:
            return state;
    }
}