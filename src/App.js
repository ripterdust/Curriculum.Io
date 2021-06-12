import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Index } from './components/Index';
import { Template } from './components/Template';

import { Navbar } from './components/ui/Navbar'

// Styles
import './main.css' 


function App() {
  return <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index}  />
        <Route path='/templates' component={Template} />
      </Switch>

    </Router>
  </>
}

export default App;
