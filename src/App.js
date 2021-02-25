import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutUs';
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
              <HomePage />
            </Route>
            <Route exact path="/auth/signin">
              <SignInPage />
            </Route>
            <Route exact path="/auth/signup">
              <SignUpPage />
            </Route>
            <Route exact path="/add-item">
              <AddItemPage />
            </Route>
            <Route exact path="/items">
              <ItemsPage />
            </Route>
            <Route exact path="/item/:id">
              <SingleItemPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/contactus">
              <ContactUsPage />
            </Route>

            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/profile/settings">
              <ProfileSettingsPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
