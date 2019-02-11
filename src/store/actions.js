
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const SHOW_COMMENTS = 'SHOW_COMMENTS'
export const SHOW_HEADING = 'SHOW_HEADING'
export const FETCH_HEADING = 'FETCH_HEADING'
export const FETCH_ARTICLE = 'FETCH_ARTICLE'
export const SHOW_ARTICLE = 'SHOW_ARTICLE'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

export function fetchHeading() {
  return {
    type: FETCH_HEADING
  }
}
export function showHeading(response) {
  return {
    type: SHOW_HEADING,
    response
  }
}
export function fetchArticle(articleId) {
  return {
    type: FETCH_ARTICLE,
    articleId
  }
}
export function showArticle(response) {
  return {
    type: SHOW_ARTICLE,
    response
  }
}
export function showComments(response) {
  return {
    type: SHOW_COMMENTS,
    response
  }
}
export function fetchComments(articleId) {
  return {
    type: FETCH_COMMENTS,
    articleId
  }
}
export function addComment(comment,articleId) {
  return {
    type: ADD_COMMENT,
    comment,
    articleId
  }
}

