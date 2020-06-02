import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Write extends PureComponent {
    render() {
        if (this.props.loginStatus) {
            return (
                <div>写文章页面</div>
            )
        } else {
            return <Redirect to='/login' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write)