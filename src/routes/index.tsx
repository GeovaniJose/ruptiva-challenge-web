import React from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'

import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import UpdateProfile from '../pages/UpdateProfile'
import Modal from '../components/Modal'

const Nesting: React.FC = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <Route path={`${path}`} component={Dashboard} isPrivate />
      <Route path={`${path}/cocktail`} component={Modal} isPrivate />
      <Route path={`${path}/profile`} component={UpdateProfile} isPrivate />
    </>
  )
}

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={SignIn} />
    <Route path='/signup' component={SignUp} />
    <Route path='/dashboard' component={Nesting} isPrivate />
  </Switch>
)

export default Routes
