import React from 'react'

const ArticleList = (props) => {
  return (
      <div key={props.key}>
          <h1 onClick={() =>props.handleClick(props.id,props.headi)}> {props.headi  } </h1>
      </div>
  )
}
export default ArticleList