import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreator } from './store'

class Login extends PureComponent {
    render() {
        if (!this.props.loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
                        <Input placeholder='密码' innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
   login(account, password) {
     dispatch(actionCreator.login(account,password))
   }
})

export default connect(mapState, mapDispatch)(Login)