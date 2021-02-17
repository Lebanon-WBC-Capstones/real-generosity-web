import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemsPage from './pages/ItemsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* uncomment the following line to see the map */}
      {/*  <ItemsPage /> */}
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
      <Footer />
    </div>
  );
}

export default App;
