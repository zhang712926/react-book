import React, { Component } from 'react'
import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import { actionCreator }  from './store'

class Home  extends Component {
    handleScrollTop() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                   <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4965/5474ffbec4298269f8d4c9a1faf66102cf97f6e9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
                   <Topic />
                   <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : ''}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
       const action = actionCreator.getHomeInfo()
       dispatch(action)
    },
    changeScrollShow() {
       if (document.documentElement.scrollTop > 100) {
          dispatch(actionCreator.toggleTopShow(true))
       } else {
          dispatch(actionCreator.toggleTopShow(false))
       }
    }
})

export default connect(mapState , mapDispatch)(Home)
