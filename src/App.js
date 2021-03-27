import Home from './Components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Search from './Components/Search/Search';
import { createContext, useState } from 'react';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h5 className="text-center">Email: {loggedInUser.email}</h5>
      <h5 className="text-center">Name: {loggedInUser.name}</h5> */}
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/search">
          <Search></Search>
        </PrivateRoute>
        <Route path="/sign-in">
          <CreateAccount></CreateAccount>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>

      </Switch>

      </Router>

    </UserContext.Provider>
  );
}

export default App;
