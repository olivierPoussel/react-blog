import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import PrivateRoute from './components/route/privateRoute';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import Post from './pages/post';
import Register from './pages/register';
import { isConnected, logout } from './service/userService';

export const AuthContext = React.createContext({
  isConnected: false,
  setConnected: (value) => {}
})

function App() {
  const [auth, setauth] = useState(isConnected())
  const contextValue = {
    isConnected: auth,
    setConnected: setauth
  }
  return (
    <>
      <AuthContext.Provider value={contextValue}>
        <Router>
          <Header />
          <main className="container">
            <Switch>
              <PrivateRoute path='/profil'><Contact /></PrivateRoute>
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              {/* <Route path="/logout" render={(props) => {
                  logout()
                  contextValue.setConnected(false)
                  props.history.push('/')
              }} /> */}
              <Route path="/register" component={Register}>
                {/* <Register /> */}
              </Route>
              <Route path="/contact" component={Contact}/>
              <Route path="/articles/:id" component={Post}/>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
          <Footer/>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
