import {createStore} from 'redux';


const incrementCount = ({incrementBy =1}={}) => {
    return {
        type: "INCREMENT",
        incrementBy
    };

};

const decrementCount = ({decrementBy =1} ={}) => ({
    type: "DECREMENT",
    decrementBy

});

const setCount = ({set = 101} ={}) => ({
    type: "SET",
    set

});

const resetCount = () => ({
    type: "RESET",
});

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
            return {
                count:state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.set
            }
        default:
            return state;
    }

};



const store = createStore (countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
} );




store.dispatch(incrementCount());
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({set: 101}));




