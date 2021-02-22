import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import AddItemPage from './pages/AddItemPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import SingleItemPage from './pages/SingleItemPage';
import ContactUsPage from './pages/ContactUsPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              {/* Home page goes here  */}
              <HomePage />
            </Route>
            <Route exact path="/auth/signin">
              {/* Login page goes here  */}
              <SignInPage />
            </Route>
            <Route exact path="/auth/signup">
              {/* Signup page goes here  */}
              {/* <SignUpPage /> */}
            </Route>
            <Route exact path="/add-item">
              {/* Add item page goes here  */}
              <AddItemPage />
            </Route>
            <Route exact path="/items">
              {/* Items page goes here  */}
              <ItemsPage />
            </Route>
            <Route exact path="/item/:id">
              {/* Single item page goes here  */}
              <SingleItemPage />
            </Route>
            <Route exact path="/about">
              {/* About page goes here  */}
              <AboutPage />
            </Route>
            <Route exact path="/contactus">
              {/* contact us page goes here  */}
              <ContactUsPage />
            </Route>

            <Route exact path="/profile">
              {/* Profile page goes here  */}
              <ProfilePage />
            </Route>
            <Route exact path="/profile/settings">
              {/* Settings page goes here  */}
              <ProfileSettingsPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
