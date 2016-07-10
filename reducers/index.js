import { combineReducers } from 'redux'
import {
  RECEIVE_POSTS
} from '../actions'


function posts(state = {
  items: []
}, action) {
  switch (action.type) {

    case RECEIVE_POSTS:
      // Object.assign是ES6的一个语法。合并对象，将对象合并为一个，前后相同的话，后者覆盖强者。详情可以看这里
      //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      return Object.assign({}, state, {
        items: action.posts //数据都存在了这里
      })
    default:
      return state
  }
}

//废弃、接收到、开始接受新闻后，将state.postsByReddit设为相关参数
function postsByReddit(state = { }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}

// 将所有的reducer结合为一个,传给store
const rootReducer = combineReducers({
  postsByReddit
})

export default rootReducer
