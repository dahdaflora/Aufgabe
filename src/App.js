import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { footer } from './components/footer';

function App() {
  return (
      <React.Fragment>
          <Router>
              <NavigationBar />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/footer" component={footer} />

              </Switch>
              <footer />
          </Router>
      </React.Fragment>
  );
}

export default App;
