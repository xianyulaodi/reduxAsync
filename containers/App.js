import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetchPostsIfNeeded } from '../actions'
import Posts from '../components/Posts'

class App extends Component {
  constructor(props) {
    super(props)
  }

  //初始化渲染后触发
  componentDidMount() {
    const { dispatch} = this.props
    // 这里可以传两个值，一个是 reactjs 一个是 frontend
    dispatch(fetchPostsIfNeeded('frontend'))
  }

  render() {
    const { posts } = this.props
    console.log(posts);
    console.log('数据已经传过来了，哈哈哈，终于成功了');
    return (
      <div>
        
            loading....
           <Posts posts={posts} />
      </div>
    )
  }
}

function mapStateToProps(state) {

  const { postsByReddit } = state
  const {

    items: posts

  } = postsByReddit['frontend'] || {
    items: []
  }

  return {
    posts
    // lastUpdated
  }
}

export default connect(mapStateToProps)(App)

