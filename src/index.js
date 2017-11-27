import React from 'react';
// import ReactDOM from 'react-dom';
//first step in redux is to create a store.
import {createStore,combineReducers,applyMiddleware} from "redux";
import { createLogger}  from "redux-logger";
import { render } from 'react-dom';

//reducer method takes two arguments (state,action)which redux provides automatically
//reducer returns the new state to the store.


const firstReducer = (state = {
    result:1,
    lastValues:[]
},action) =>{

    switch(action.type){
        case "ADD":
            //    This is not an immutable way of doing 
            //  state.result += action.payload;

            //This is an immutable way of dealing with reference types.Also we can use Object.assign like state = Object.assign({}, state)
            state = {
                ...state,
                result: state.result+action.payload,
                lastValues:[...state.lastValues,action.payload]
            };
            break;
        case "SUBTRACT":
            break;
    }
    return state;

};
//second reducer
const secondReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};


//here I am combining two reducers,because store accepts only one reducer argument
//also implemeted the use of middleware
const loggerMiddleware =createLogger();
const store = createStore(combineReducers({firstReducer, secondReducer}),applyMiddleware(loggerMiddleware));

//store has subsribed so that it can get the new state
store.subscribe(() => {
    console.log("Store updated!",store.getState())
})

//dispatch the action you want the reducer to perform
store.dispatch({
    type:"ADD",
    payload:10

});

////dispatch another action you want the reducer to perform
store.dispatch({
    type:"ADD",
    payload:10

});

store.dispatch({
    type: "SET_AGE",
    payload: 30
});

// render(<App />, document.getElementById('main'));