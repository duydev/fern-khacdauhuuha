import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NotFoundView } from 'views'

export default () => {
  return (
    <Switch>
      <Route component={NotFoundView} />
    </Switch>
  )
}
