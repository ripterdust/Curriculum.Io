import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Styles
import './main.css' 
import { MainRouter } from './routers/MainRouter';



function App() {
  return <Router>

      <Switch>
        <Route path='/pdf' >

        Acá se imprimirán los PDF

        </Route>
        <Route path='/' component={MainRouter} />
      </Switch>


  </Router>   

}

export default App;
