// context APIs-> these are like global variables that we use in our react app instead 
// of traversing the props from grandparents to parent to child components, 
// known as props drilling.This can be achieved by creating a data layer which 
// keeps all the required data and can be used when required. 


//set up the data layer
//we need this to keep track of basket
import React, {createContext, useContext, useReducer} from "react"

//THIS IS EMPTY DATA LAYER
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>  (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);