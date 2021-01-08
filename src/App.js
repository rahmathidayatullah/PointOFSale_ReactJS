import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/User'
import Admin from './pages/Admin'
import Login from './pages/Login'
import './styles/tailwind.css'
import './styles/index.css'
import { Provider } from 'react-redux'
import store from './app/store'

// import fungsi listen
import { listen } from './app/listener'

function App() {
  // panggil fungsi listen() sekali saja saat komponen selesai render pertama kali
  React.useEffect(() => {
    listen()
  }, [])
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
