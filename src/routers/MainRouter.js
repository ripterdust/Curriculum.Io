import React from 'react'
import { 
    Route,
    Switch
  } from 'react-router-dom';

import {Index} from '../components/Index'
import { AppRouter } from '../routers/AppRouter';
import { CategoriesRoutes } from '../routers/CategoriesRoutes';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { Error404 } from '../components/Error404';



export const MainRouter = () => {
    return <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Index}  />
            <Route path='/templates' component={CategoriesRoutes} />
            <Route path='/app' component={AppRouter} />
            <Route component={Error404}  />
        </Switch>

        <Footer/>
    </>
}
