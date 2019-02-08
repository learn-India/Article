import React from 'react'
import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import showHeading from '../../store/actions'

class ArticleLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {heading : ['arctile 1','arctile 2','arctile 3','arctile 4','arctile 5']}
	}
	
	handleClick= (e) => {
		console.log(e)
	}
  
  render() {
		const headingFromState = this.props.heading
    return (
		<div>
			{headingFromState.map( (head, index ) => <ArticleList value={index} headi={head} handleClick={this.handleClick} />)}
		</div>)
  }
 
}

const mapStateToProps = state => {
	return {
		heading: state.heading
	}
}
const mapDispatchToProps = dispatch => {
	return {
		showHeading:()=> dispatch(showHeading())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleLink)