import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink

} from 'react-router-dom';
import { Body } from '../components/templatesComponent/Body';

export const CategoriesRoutes = () => {
    return (
        <>
            <Router>
                Acá irán todos los componentes
                <Switch>
                    <Route path="/:category?"  component={ Body }/>
                </Switch>
            </Router>
        </>
    )
}
