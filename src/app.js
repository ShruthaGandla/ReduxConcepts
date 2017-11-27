import React from 'react';
import ReactDOM from 'react-dom';



//first step in redux is to create a store.
import {createStore} from "redux";

//reducer method takes two arguments (state,action)which redux provides automatically
//reducer returns the new state to the store.


const reducer = (state = {
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


//createStore() has two arguments 1st argument is the reducer,2nd argument:initial application-state which can be a jsobject or array e.t.c
//In next step I create a sperate state object which is passed to the createStore default.
const store = createStore(reducer);

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
