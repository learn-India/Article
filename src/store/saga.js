import { take, put,all} from 'redux-saga/effects';
import * as actionTypes from './actions'
import {FETCH_HEADING,FETCH_ARTICLE,FETCH_COMMENTS,ADD_COMMENT} from './actions';
import axios from 'axios';

export  function* sampleSaga() {
  while(true) {
    let formatRespose
    yield take(FETCH_HEADING);
    yield axios.get(`http://localhost:3001/authors`)
    .then(res => {
       formatRespose = res.data.map((content,index)=>{
           return content.title
       })
    })
    yield put(actionTypes.showHeading(formatRespose))
  }
}
export  function* articleFetch() {
  while(true) {
    let formatRespose
    const {articleId} =yield take(FETCH_ARTICLE);
    yield axios.get(`http://localhost:3001/article/`+articleId)
    .then(res => {formatRespose=res.data.data})
    yield put(actionTypes.showArticle(formatRespose))
  }
}
export  function* fetchComments() {
  while(true) {
    let formatRespose
    const {articleId} =yield take(FETCH_COMMENTS);
    yield axios.get(`http://localhost:3001/articles/${articleId}/comments`)
    .then(res => {
        formatRespose = res.data.map((content)=>{
        return content.body
    })
    })
    yield put(actionTypes.showComments(formatRespose))
  }
}
export  function* addComments() {
  while(true) {
    let formatRespose
    const {comment,articleId} =yield take(ADD_COMMENT);
    console.log('inside the article reducers and',articleId,comment)
    //yield axios.post(`http://localhost:3001/articles/${articleId}/comments`,comment)
    yield axios({
        method: 'post',
        url: `http://localhost:3001/articles/${articleId}/comments`,
        data: {
            "body":comment
        }
      })
    .then(res => {
        formatRespose=res.data.body
    }).catch(err => console.log(err))
    yield put(actionTypes.showComments([formatRespose]))
    
  }
}
export default function* rootSaga() {
    yield all([
        sampleSaga(),
        articleFetch(),
        fetchComments(),
        addComments()
    ])
  }