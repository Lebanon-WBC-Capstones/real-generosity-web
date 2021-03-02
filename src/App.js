import React, { Suspense, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import firebase, { auth, firestore } from './firebaseConfig';
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
import { Button, HStack, Box } from '@chakra-ui/react';
import DeployindData from './DeployingData';

const Item = () => {
  const itemsRef = firestore.collection('items');
  const [items, loading] = useCollectionData(itemsRef);

  if (loading) return <span>loading...</span>;

  console.log('items', items);
  return (
    <div>
      {items.map((item) => (
        <HStack>
          <Box>{item.uid}</Box>
          <Box>{item.name}</Box>
        </HStack>
      ))}
    </div>
  );
};

const Form = () => {
  const formRef = React.useRef();
  if (!auth.currentUser) return null;
  const { uid } = auth.currentUser;
  const itemsRef = firestore.collection('items');

  const formSubmit = (e) => {
    e.preventDefault();

    const {
      name: { value: name },
    } = formRef.current;
    itemsRef.add({
      name,
      uid,
    });
  };

  return (
    <form ref={formRef} onSubmit={formSubmit}>
      name
      <input name="name" type="text" />
      <button type="submit">submit</button>
    </form>
  );
};
function App() {
  const [query, setQuery] = useState('');
  console.log('query', query);

  const [user] = useAuthState(auth);

  console.log('user', user?.uid);

  const loginFunc = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const logoutFunc = () => {
    auth.signOut();
  };

  return (
    <div className="App">
      <Form />
      <Item />
      {!user ? (
        <Button onClick={loginFunc}>Signin with google</Button>
      ) : (
        <Button onClick={logoutFunc}>Sign out</Button>
      )}

      <DeployindData />
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
              <Route exact path="/admin">
                <AdminPage />
              </Route>
              <Route exact path="/profile/settings">
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
