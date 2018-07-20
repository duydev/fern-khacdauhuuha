import React from 'react'
import { connect } from 'react-redux'

import { Router } from 'components'
import { MaintainView } from 'views'

const App = state => {
  const App = state.maintainMode ? MaintainView : Router
  return <App />
}

export default connect(state => ({
  maintainMode: state.common.maintainMode
}))(App)
