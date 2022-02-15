import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
//add expense


//Expense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState, action) => {
    switch (action.type) {

        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {...expense,
                    ...action.updates
                    };
                } else {
                    return expense;
                };

            });
        default:
            return state;
    }

};

//Filter Reducer

const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined

};

const filtersReducer = (state=filterReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }

};



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer

    })
);


store.dispatch(addExpense());
const expenseOne = store.dispatch(addExpense({description:"rent", amount: 100}));
const expenseTwo = store.dispatch(addExpense({description:"Coffee", amount: 300}));


// store.dispatch(removeExpense({id: expenseOne.expense.id}));


console.log(store.getState());


store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'asdfsdfwdfsdf',
        description: "January Rent",
        note: "This was the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
};

