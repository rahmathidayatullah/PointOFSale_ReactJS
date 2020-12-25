import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/User'
import Admin from './pages/Admin'
import './styles/tailwind.css'
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
