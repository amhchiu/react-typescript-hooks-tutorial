import React, { createContext } from 'react';
import {IState, IAction} from './interfaces';

const initialState: IState = {
    champions: {},
    favourites: []
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, champions: action.payload };
        case 'ADD_FAV':
            return { ...state, favourites: [...state.favourites, action.payload]};
        case 'REMOVE_FAV':
            return { ...state, favourites: action.payload}
        default:
            return state;
    }
};

const StoreProvider = (props: any): React.ReactElement => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    );
};

export default StoreProvider;