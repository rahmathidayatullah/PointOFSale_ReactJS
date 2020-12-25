import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import './styles/tailwind.css'
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
