import React, { Component } from 'react'
import { connect } from 'react-redux'

class TestContainer extends Component {

  render() {
    return(
      <div>
        {this.props.numberList}
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
      // removeError: () => dispatch(removeError()),
      // postUpdate: (id, data) => dispatch(postUpdate(id, data)),
      // loadCurrentArtObject: (object) => dispatch(loadCurrentArtObject(object)),
      // addToSessionHistory: (object) => dispatch(addToSessionHistory(object)),
      // get30DayHistory: () => dispatch(get30DayHistory()),
      // resetExtendedHistory: () => dispatch(resetExtendedHistory())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)
