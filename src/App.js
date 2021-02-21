import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              {/* Home page goes here  */}
              <HomePage />
            </Route>
            <Route exact path="/auth/signin">
              {/* Login page goes here  */}
            </Route>
            <Route exact path="/auth/signup">
              {/* Signup page goes here  */}
              {/* <SignUpPage /> */}
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
      </Layout>
    </div>
  );
}

export default App;
