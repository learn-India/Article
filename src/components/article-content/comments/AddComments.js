import React from 'react'

class AddComments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value:''}
  }
  handleChange = (e) => {
    this.setState({value:e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}