import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Portfolio from "../components/Portfolio";
import Contact from '../components/Contact';
import ErrorPage from '../components/ErrorPage';
import AllPortfolios from '../components/AllPortfolio';


const PortfolioRouter = () => (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/portfolio' component={AllPortfolios} exact={true}/>
                <Route path='/portfolio/:id' component={Portfolio}/>
                <Route component={ErrorPage}/>
            
            </Switch>
            
        
        
        </div>
    
    </BrowserRouter>


);


export default PortfolioRouter;