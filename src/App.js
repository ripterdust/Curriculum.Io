import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Navbar } from './components/ui/Navbar'

// Styles
import './main.css' 


function App() {
  return <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"/>
        <Route />
      </Switch>

    </Router>
  </>
}

export default App;
