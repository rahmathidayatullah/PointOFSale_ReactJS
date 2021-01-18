import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../api/auth'
import { userLogout } from '../../features/Auth/action'

export default function Index() {
  let history = useHistory()
  let dispatch = useDispatch()

  React.useEffect(() => {
    console.log('tes')
    logout()
      .then(() => dispatch(userLogout()))
      .then(() => history.push('/login'))
  }, [history, dispatch])
  return <div></div>
}
