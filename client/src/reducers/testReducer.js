function testReducer(state = [1], action) {
  switch (action.type) {
    // case 'DO_SOMETHING':
    //   return [...action.payload]
    default:
      return state
  }
}

export default testReducer
