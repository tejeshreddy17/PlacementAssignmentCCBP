import {Switch, Route} from 'react-router-dom'

import './App.css'

import RequestPage from './components/Requests'

import Observations from './components/Observations'

const App = () => (
  <Switch>
    <Route exact path="/" component={RequestPage} />
    <Route exact path="/observation" component={Observations} />
  </Switch>
)

export default App
