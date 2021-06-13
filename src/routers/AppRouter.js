import React from 'react'
import { Switch, Route } from 'react-router';
import { AppTemplates } from '../components/AppComponents/AppTemplates';
import { CreateResume } from '../components/AppComponents/CreateResume';


export const AppRouter = () => {

    return <Switch>
        <Route exact to="/" component={AppTemplates} />
        <Route exact to="/app/:id" component={CreateResume} />
    </Switch>
}
