// npm packages
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// our Reducers
import Reducers, {initialState} from '../reducers';

const store = createStore(Reducers, initialState, compose(applyMiddleware(thunk)));

export default store;
