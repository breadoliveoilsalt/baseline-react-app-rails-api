import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addAnotherOne } from '../actions/testActions'

class TestContainer extends Component {

  render() {
    return(
      <div>
        List of Ones: {this.props.numberList}
        <button onClick={this.props.addAnotherOne}> Click to Add Another 1 ! </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numberList: state.testReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addAnotherOne: () => dispatch(addAnotherOne())
        // Example using arguments:
      // postUpdate: (id, data) => dispatch(postUpdate(id, data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)
