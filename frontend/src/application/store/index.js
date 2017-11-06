import { createStore, compose } from 'redux'
import rootReducer from '../reducers';
import middlewares from '../middlewares';

export let store = createStore(
    rootReducer,
    compose(...middlewares)
);
