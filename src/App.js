import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import ItemsPage from './pages/ItemsPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutUs';
import AddItemPage from './pages/AddItemPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import SingleItemPage from './pages/SingleItemPage';
import ContactUsPage from './pages/ContactUsPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [query, setQuery] = useState('');
  console.log('query', query);

  return (
    <div className="App">
      <Router>
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/">
              <Layout>
                <HomePage setQuery={setQuery} />
              </Layout>
            </Route>
            <Route exact path="/auth/signin">
              <SignInPage />
            </Route>
            <Route exact path="/auth/signup">
              <SignUpPage />
            </Route>
            <Route exact path="/add-item">
              <Layout>
                <AddItemPage />
              </Layout>
            </Route>
            <Route exact path="/items">
              <Layout>
                <ItemsPage />
              </Layout>
            </Route>
            <Route exact path="/item/:id">
              <Layout>
                <SingleItemPage />
              </Layout>
            </Route>
            <Route exact path="/about">
              <Layout>
                <AboutPage />
              </Layout>
            </Route>
            <Route exact path="/contactus">
              <ContactUsPage />
            </Route>
            <Route exact path="/profile">
              <Layout>
                <ProfilePage />
              </Layout>
            </Route>
            <Route exact path="/admin">
              <Layout>
                <AdminPage />
              </Layout>
            </Route>
            <Route exact path="/profile/settings">
              <ProfileSettingsPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
