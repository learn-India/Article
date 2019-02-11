import React from 'react'
import Comments from './comments/Comments'
import AddComments from './comments/AddComments'
import * as actions from '../../store/actions'
import {connect} from 'react-redux'

class ArticleDetails extends React.Component {

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id)
    this.props.fetchComments(this.props.match.params.id)
  }
  
  handleAddComments= (value) => {
    console.log('value from add comments0',value)
    this.props.addComment(value,this.props.match.params.id)
  }
  render() {
    return(
      <div>
        <article>
          <h2>{this.props.article}</h2>
        </article>
        {this.props.comments.map( (content, index ) => <Comments id={index +1} comment={content} />)}
        <AddComments handleAddComments={this.handleAddComments}/>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
  article:state.article,
  comments:state.comments
  }
}
const mapDispatchToProps = dispatch => {
	return {
    fetchArticle:(articleId)=> dispatch(actions.fetchArticle(articleId)),
    fetchComments:(articleId)=> dispatch(actions.fetchComments(articleId)),
    addComment:(comment,articleId)=> dispatch(actions.addComment(comment,articleId))
    
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(ArticleDetails)