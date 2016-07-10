// 由于目前大多数浏览器原生还不支持它，建议你使用 isomorphic-fetch 库：
// 每次使用 `fetch` 前都这样调用一下
import fetch from 'isomorphic-fetch'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

//获取新闻成功的action
function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit: reddit,
    posts: json.data.children.map(child =>child.data)
  }
}

function fetchPosts(subreddit) {

  return function (dispatch) {

    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(subreddit, json))
      )
  }
}

//如果需要则开始获取文章
export function fetchPostsIfNeeded(subreddit) {

  return (dispatch, getState) => {

      return dispatch(fetchPosts(subreddit))

    }
}



