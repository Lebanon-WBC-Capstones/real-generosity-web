import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import ItemsPage from './pages/ItemsPage';
import SignInPage from './pages/SignInPage';
function App() {
  return (
    <div className="App">
      <SignInPage />
      {/* <Layout> */}
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
            <ItemsPage />
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
      {/* </Layout> */}
    </div>
  );
}

export default App;
