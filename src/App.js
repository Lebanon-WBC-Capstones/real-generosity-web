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
import EditProfilePage from './pages/EditProfile';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SingleItemPage from './pages/SingleItemPage';
//import { DeployingData } from './services/deploy';
import { useAuth } from './contexts/AuthContext';

function App() {
  const currentUser = useAuth();
  const [query, setQuery] = useState('');
  console.log('query', query);

  return (
    <div className="App">
      {/* <DeployingData /> */}
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
                {currentUser ? <AddItemPage /> : <Redirect to="/auth/signin" />}
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
            <Route exact path="/profile/:uid">
              <Layout>
                <ProfilePage />
              </Layout>
            </Route>
            <Route exact path="/admin">
              <Layout>
                <AdminPage />
              </Layout>
            </Route>
            <Route exact path="/profile/:uid/settings">
              <Layout>
                <EditProfilePage />
              </Layout>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
