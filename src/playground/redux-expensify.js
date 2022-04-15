import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
//add expense

const editExpense = (id, updates) => ({
    type: 'EDIT-EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate) => ({
    type: "Set_START_DATE",
    startDate

});

const setEndDate = (endDate) => ({
    type: "Set_END_DATE",
    endDate

});

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

        case 'SET_START_DATE':
            return  {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        
        default:
            return state;
    }

};

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1;
        }

        // sortBy ->

    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer

    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});



// store.dispatch(addExpense());
const expenseOne = store.dispatch(addExpense({description:"rent", amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:"Coffee", amount: 300, createdAt: -1000}));

store.dispatch(setTextFilter('rent'));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


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

