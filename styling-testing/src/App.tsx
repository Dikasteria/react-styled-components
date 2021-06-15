import React from 'react';
import GlobalStyles from "./globalStyles";
import { Navbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      {/* <Switch></Switch> */}
    </Router>
  );
}

export default App;
