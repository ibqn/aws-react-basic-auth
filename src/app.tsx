import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/nav'
import Profile from './pages/profile'
import Protected from './pages/protected'
import Public from './pages/public'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/protected">
          <Protected />
        </Route>
        <Route path="/">
          <Public />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
