// import use reducer from react
import { useReducer } from 'react';

import {
    TOGGLE_DRAWER
} from './actions';

export const reducer = (state, action) => {
     switch (action.type) {
                 
                 case TOGGLE_DRAWER:
                        return {

                            ...state,

                            drawerOpen: !state.drawerOpen
                        }                

             // if it's none of these actions, do not update state at all and keep things the same! 
             default:
                 return state;
     }
};


export function useProductReducer(initialSate) {
    return useReducer(reducer, initialSate);
}