import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* Home page goes here  */}
          </Route>
          <Route exact path="/auth/login">
            {/* Login page goes here  */}
          </Route>
          <Route exact path="/auth/signup">
            {/* Signup page goes here  */}
          </Route>
          <Route exact path="/add-item">
            {/* Add item page goes here  */}
          </Route>
          <Route exact path="/items">
            {/* Items page goes here  */}
          </Route>
          <Route exact path="/item/:id">
            {/* Single item page goes here  */}
          </Route>
          <Route exact path="/about">
            {/* About page goes here  */}
          </Route>
          <Route exact path="/profile">
            {/* Profile page goes here  */}
          </Route>
          <Route exact path="/profile/settings">
            {/* Settings page goes here  */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
