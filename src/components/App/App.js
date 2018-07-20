import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { Router } from 'components'
import { MaintainView } from 'views'

import { getMaintainStatus } from '_redux/common'

class App extends Component {
  static propTypes = {
    maintainMode: PropTypes.bool
  }

  static defaultProps = {
    maintainMode: true
  }

  componentDidMount = () => {
    this.props.dispatch(getMaintainStatus())
  }

  render = () => {
    const App = this.props.maintainMode ? MaintainView : Router
    return (
      <div>
        <Helmet titleTemplate="%s - Khắc dấu Hữu Hạ - TP. Mỹ Tho, Tiền Giang" />
        <App />
      </div>
    )
  }
}

export default connect(state => ({
  maintainMode: state.common.maintainMode
}))(App)
