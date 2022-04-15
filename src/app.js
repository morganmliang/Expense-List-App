
//Add one component per file

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {Provider } from 'react-redux';
import PortfolioRouter from './routers/portfolioRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';


const store =configureStore();

store.dispatch(addExpense({description:"water bill", amount: 4500}));
store.dispatch(addExpense({description:"gas bill", amount: 0}));
store.dispatch(addExpense({description:"Rent", amount: 19000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);


const jsx = (
    <Provider store={store}>
        <PortfolioRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));




