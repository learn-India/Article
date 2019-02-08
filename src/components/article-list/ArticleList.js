import React from 'react'

const ArticleList = (props) => {
  return (
      <div>
          <h1  onClick={props.handleClick}> {props.headi  } </h1>
      </div>
  )
}
export default ArticleList