import axios from 'axios'
import * as constants from './constant'

const changeDetail = (title, url, content) => ({
    type: constants.CHANGE_DETAIL,
    title, 
    url, 
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(res => {
           const result = res.data.data
           dispatch(changeDetail(result.title, result.imgUrl, result.content))
        }).catch(err => {
            console.log(err)
        })
    }
}