import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path='/detail/:id' component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
