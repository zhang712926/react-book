import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreator } from './store'

class Detail  extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content>
                   <img src={this.props.imgUrl} alt='' />
                   <p>{this.props.content}</p>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
       this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    imgUrl: state.getIn(['detail', 'imgUrl']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreator.getDetail(id))
    }
})

export default connect(mapState, mapDispatch)(Detail)
