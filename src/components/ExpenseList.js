import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense) => {
                return <ExpenseListItem key ={expense.id} {...expense} />;

            })}
            {props.expenses.length}
        </div>
    )
    
    
};
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    };
};


export default connect(mapStateToProps) (ExpenseList);








