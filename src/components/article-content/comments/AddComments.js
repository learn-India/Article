import React from 'react'

class AddComments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value:''}
  }
  handleChange = (e) => {
    this.setState({value:e.target.value})
    console.log("value is pressed",e.target.value,e)
    if(e.key === 'Enter') {
      console.log('when enter is pressed')
      this.props.handleAddComments(e.target.value)
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddComments(this.state.value)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
      <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      </form>
    )
  }
}
export default AddComments