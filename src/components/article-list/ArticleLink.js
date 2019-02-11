import React from 'react'
import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import ArticleDetails from '../article-content/ArticleDetails'

class ArticleLink extends React.Component {

	handleClick= (id,heading) => {
		this.props.history.push({pathname:'/ArticleDeatils/'+id})
	}
	componentDidMount() {
		this.props.showHeading()
	}
  
  render() {
		const headingFromState = this.props.heading
    return (
		<div>
			{headingFromState.map( (head, index ) => <ArticleList id={index +1} headi={head} handleClick={this.handleClick} />)}
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
		showHeading:()=> dispatch(actions.fetchHeading())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleLink)