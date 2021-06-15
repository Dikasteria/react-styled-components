import React from 'react';
import GlobalStyles from "./globalStyles";
import { Navbar, Footer, InfoSection } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
