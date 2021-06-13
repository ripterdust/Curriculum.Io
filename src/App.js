import React from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Error404 } from './components/Error404';
import { Index } from './components/Index';

// Ui components
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';

// Styles
import './main.css' 
import { CategoriesRoutes } from './routers/CategoriesRoutes';
import { AppRouter } from './routers/AppRouter';


function App() {
  return <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index}  />
        <Route path='/templates' component={CategoriesRoutes} />
        <Route path='/app' component={AppRouter} />
        <Route component={Error404}  />
      </Switch>

    </Router>

    <Footer/>
  </>
}

export default App;
