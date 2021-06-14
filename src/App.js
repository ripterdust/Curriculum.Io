import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { PdfMaker } from './components/PdfComponents/PdfMaker';

// Styles
import './main.css' 
import { MainRouter } from './routers/MainRouter';



function App() {
  return <Router>

      <Switch>
        <Route exact path="/pdf/:id/:name/:profession/:email/:phone/:enterprise/:job/:university/:grade" component={PdfMaker} />
        <Route path='/' component={MainRouter} />
      </Switch>


  </Router>   

}

export default App;
