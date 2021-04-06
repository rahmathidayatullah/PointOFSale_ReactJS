import * as React from 'react'
import { useSelector, useStore } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default function Index({ children, ...rest }) {
  let { user } = useSelector((state) => state.auth)
  // console.log('rest', ...rest)
  return <Route {...rest}>{!user ? children : <Redirect to="/admin" />}</Route>
}
