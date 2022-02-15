
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

console.log(store.getState());

const waterBill = store.dispatch(addExpense({description:"water bill", amount: 100}));
const gasBill = store.dispatch(addExpense({description:"gas bill", amount: 300}));

store.dispatch(setTextFilter('bill'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));

},3000)

const state = store.getState();
console.log(state);

const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <PortfolioRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));




