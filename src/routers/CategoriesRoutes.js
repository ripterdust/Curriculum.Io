import React from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom';

import { Body } from '../components/templatesComponent/Body';


export const CategoriesRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/templates' component={Body} />
                <Route path='/templates/:category' component={Body} />
            </Switch>
        </>
    )
}
