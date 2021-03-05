import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutUs';
import AddItemPage from './pages/AddItemPage';
import AdminPage from './pages/AdminPage';
import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import ProfilePage from './pages/ProfilePage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SingleItemPage from './pages/SingleItemPage';
import { DeployingData } from './services/deploy';
import { useAuth } from './contexts/AuthContext';

function App() {
  const currentUser = useAuth();
  const [query, setQuery] = useState('');
  console.log('query', query);

  return (
    <div className="App">
      <DeployingData />
      <Router>
        <Suspense fallback="loading">
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage setQuery={setQuery} />
              </Route>
              <Route exact path="/auth/signin">
                <SignInPage />
              </Route>
              <Route exact path="/auth/signup">
                <SignUpPage />
              </Route>
              <Route exact path="/add-item">
                {currentUser ? <AddItemPage /> : <Redirect to="/auth/signin" />}
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
              <Route exact path="/profile/:uid">
                <ProfilePage />
              </Route>
              <Route exact path="/admin">
                <AdminPage />
              </Route>
              <Route exact path="/profile/:uid/settings">
                <ProfileSettingsPage />
              </Route>
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
