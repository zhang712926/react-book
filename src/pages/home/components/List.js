import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class List  extends Component {
    render() {
        const { list } = this.props
        return (
            <div>
                {
                    list.map(item => {
                        return(
                            <Link key={ item.get('id') } to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <img className='pic' src={ item.get('imgUrl') } alt=''/>
                                    <ListInfo>
                                        <h3 className='title'>{ item.get('title') }</h3>
                                        <p className='desc'>{ item.get('desc') }
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List)
