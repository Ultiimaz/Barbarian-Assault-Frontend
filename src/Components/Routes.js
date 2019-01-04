import React from 'react';
import {BrowserRouter as Router,Switch, Redirect, Route} from 'react-router-dom';
import UserProfile from "../Pages/UserProfile";
import LandingPage from "../Pages/LandingPage";
import GameEngine from "../Game/GameEngine";


export default class Routes extends React.Component
{
    Authkey = true;
    render()
    {
        if (!this.Authkey) {

            return (
                <Router>
                    <Switch>
                        <Route path="/" component={LandingPage}/>
                    </Switch>
                </Router>);
        }
        else {

            return (
                <Router>
                    <Switch>
                        <Route path="/" exact component={()=><Redirect to="/me"/>}/>
                        <Route path="/user/:user" exact component={UserProfile}/>
                        <Route path="/me" exact component={GameEngine} />
                    </Switch>
                </Router>);
        }
    }
}