import { connect } from 'react-redux'
import SimplePage from './SimplePage'
import { actionIncrement } from '../reducers/counter/actions'

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    increment: (amount) => dispatch(actionIncrement(amount))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimplePage)
