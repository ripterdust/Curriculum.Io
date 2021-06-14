import React from 'react'
import { Switch, Route } from 'react-router';
import { AppTemplates } from '../components/AppComponents/AppTemplates';
import { CreateResume } from '../components/AppComponents/CreateResume';


export const AppRouter = () => {

    return <>
        <Switch>
            <Route exact path='/app' component={AppTemplates} />
            <Route exact path='/app/:id/' component={CreateResume} />
            <Route exact path='/app/:id/carrer/'>
                Acá no hay ni verdura
            </Route>
        </Switch>
    </>
}
