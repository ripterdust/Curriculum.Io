import React from 'react'
import {
    Route,
    Switch,
    // NavLink

} from 'react-router-dom';
import { Body } from '../components/templatesComponent/Body';

export const CategoriesRoutes = () => {
    return (
        <>
            Acá irán todos los componentes
            <Switch>
            <Route exact path='/' component={Body} />
            <Route path='/templates/:category' component={Body} />
            </Switch>
        </>
    )
}
