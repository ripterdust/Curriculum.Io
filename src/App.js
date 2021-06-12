import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Error404 } from './components/Error404';
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

        <Route component={Error404}  />
      </Switch>

    </Router>
  </>
}

export default App;
