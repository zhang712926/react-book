import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreator as loginActionCreator } from '../../pages/login/store'
import { 
    HeaderWrapper, 
    Logo, Nav, NavItem, 
    NavSearch, Addition, Button, SearchWrapper, 
    SearchInfo,SearchInfoTitle, SearchInfoSwitch,
    SearchInfoItem, SearchInfoList
} from './style'

class Header extends Component {
    getListArea() {
        if (this.props.focused || this.props.mouseIn) {
            return (
             <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
                 <SearchInfoTitle>
                     热门搜索
                     <SearchInfoSwitch>换一批</SearchInfoSwitch>
                 </SearchInfoTitle>
                 <SearchInfoList>
                     {
                        this.props.list.map((item) => {
                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                     }
                 </SearchInfoList>
             </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Link to="/">
                   <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    {
                        this.props.login ? <NavItem  onClick={this.props.logout} className="right">退出</NavItem> : 
                        <Link to='/login'><NavItem className="right">登陆</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition in={this.props.focused} timeout={300} classNames="slide">
                            <NavSearch 
                            className={this.props.focused ? 'focused' : ''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe687;</i>
                        { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className="write">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        logout() {
            dispatch(loginActionCreator.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);