import react from 'React'
import Comments from './comments/Comments'
import AddComments from './comments/AddComments'

class ArticleDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <article>

        </article>
        <Comments />
        <AddComments />
      </div>

    )
  }
}