import { connect } from 'react-redux'



const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)